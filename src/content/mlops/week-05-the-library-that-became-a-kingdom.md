---
title: "Scaling RAG: Sharding, Distributed Retrieval & Latency"
track: "mlops"
week: 5
description: "Scaling RAG in production. This story covers sharding and distributed retrieval, coordination overhead, tail latency, metadata filtering, tenant isolation and permission constraints, ingestion with incremental indexing, versioning and freshness, caching for hot repeated queries, the tradeoff that better recall costs higher latency, and the infrastructure bill underneath it all."
tagline: "one room can't serve a kingdom"
icon: "🏛️"
characters: ["Queen Leela", "The Royal Librarian", "The Dispatcher", "The Gatekeeper", "The Scribe", "The Memory Clerk"]
publishDate: 2026-08-17
draft: false
socialSnippet: "RAG that works on a laptop breaks at kingdom scale. A story on sharding and distributed retrieval, tail latency, metadata filtering, tenant isolation, freshness, caching hot queries, and the hard tradeoff: better recall costs higher latency and more infrastructure."
quiz:
  - tier: "basic"
    question: "In a large retrieval system, what does 'sharding' mean?"
    options:
      - "Splitting the document collection across multiple indexes or machines so no single node holds everything"
      - "Deleting old documents to save space"
      - "Compressing embeddings into fewer dimensions"
      - "Merging every index into one giant file"
    answer: 0
  - tier: "intermediate"
    question: "When a query fans out to many shards and the results are merged, why does tail latency (like p99) often set what users feel rather than the average?"
    options:
      - "Averages are never computed in distributed systems"
      - "The merged response cannot return until the slowest shard replies, so one slow shard sets the query's latency"
      - "Tail latency only affects writes, never reads"
      - "Sharding removes all latency differences between nodes"
    answer: 1
  - tier: "expert"
    question: "A team widens retrieval (more shards searched, larger k, deeper search) and recall improves. What is the usual cost?"
    options:
      - "Recall and latency are unrelated, so nothing changes"
      - "Latency drops because more nodes share the work"
      - "Higher latency and more infrastructure cost, since more work must be searched and coordinated for each query"
      - "The index becomes permanently smaller"
    answer: 2
---

It is festival eve in Aurelia, and the Royal Library is under siege, not by an army, but by questions.

The kingdom has grown to 10,000,000 letters and 1,000,000 citizens, and tonight thousands of them want the same thing before the grain tax is set at dawn.

"How much grain remains in the Eastern Province today?"

One Librarian, one room, and a line of citizens out the door and around the courtyard. The letter with tonight's true grain count arrived only an hour ago, and it is buried somewhere in 10,000,000 others. The task was no longer finding the answer. It was finding it for thousands of people at once, in the time it takes to draw a breath, without ever handing anyone a letter they were not allowed to read.

*This continues [Vector DB & RAG](https://www.orivale.com/concepts/week-03-vectordb-rag): once the library could search by meaning, the next problem was serving a whole kingdom at once.*

*Queen Leela* needs the grain number before dawn and needs it correct, and she does not care how many rooms it takes. *The Royal Librarian* has run the single library since it was small, and he has finally accepted that one room and one keeper cannot serve a kingdom this size. *The Dispatcher* is the runner at the door, quick and anxious, who takes each question, sends copies sprinting to every branch at once, and cannot rest until the last one returns. *The Gatekeeper* stands watch over who may read what, suspicious by trade, refusing any letter to anyone not cleared for it. *The Scribe* handles the river of new letters arriving every hour, tireless and precise, and frets constantly over which copy is the current one. *The Memory Clerk* sits by the entrance with a small box of answers to the questions everyone keeps asking, and she smiles every time she hears one she already knows.

The Librarian leads the Queen out to the courtyard, where he has built something new: not one library, but many.

"I could not make one room bigger forever. So I split the 10,000,000 letters across 20 branch libraries, each holding a slice. That splitting is **sharding**, and each branch is a shard."

"Then where does my question go?" the Queen asks.

The Dispatcher answers by doing it. He takes her grain question, copies it 20 times, and sends a runner to every branch at once. Each branch searches only its own slice and returns its best letters. He gathers all 20 replies and merges them into one answer.

"Asking every branch at the same time and combining what comes back is **distributed retrieval**," the Librarian says.

The Queen notices the Dispatcher sweating.

"He looks exhausted."

"Because someone must send all 20 runners, track who has returned, and stitch the replies together for every single question. That managing, the sending and the waiting and the merging, is **coordination overhead**. One library needed none of it. 20 branches never stop paying it."

```
Distributed retrieval (fan-out)

   Question
      |
   Dispatcher --> Branch 1    (fast)
              --> Branch 2    (fast)
              --> ...
              --> Branch 20   (SLOW straggler)  <-- tail latency
      |
   merge all replies --> answer
   (the answer cannot return until the slowest branch does)
```

Then, mid festival, disaster. A question goes out to all 20 branches. 19 reply in a heartbeat. The 20th does not.

The line at the door stops moving. Citizens grumble, then shout.

"19 branches are done! Why are we still waiting?" the Queen demands.

"Because the answer is not ready until the slowest branch replies," the Librarian says. "One branch had a jammed door, and the whole kingdom waits on it. Most branches are fast. It is the slowest few that citizens actually feel, and we call that **tail latency**."

"Must we truly ask all 20 every time?" the Queen asks.

"No," says the Dispatcher, calmer now. "Every letter is tagged with its province, its month, its subject. Your question is Eastern Province grain, so I wake only the branches that hold Eastern grain letters and skip the rest. Narrowing by those tags before we search is **metadata filtering**. Fewer branches, fewer runners, a faster answer."

A merchant pushes to the front and demands the royal army's supply letters.

The Gatekeeper does not move.

"The merchants' guild and the crown share my libraries, but never each other's letters. No guild may ever read another's. That wall is **tenant isolation**."

Then a junior clerk of the crown asks for those same army letters.

"You are of the right house," the Gatekeeper says, "but not of the right rank."

He hands back only the letters the clerk is cleared to see.

"Even inside one house, each reader sees only what they are permitted. Filtering results by who is asking is a **permission constraint**. An answer built from a letter someone was never allowed to read is worse than no answer at all."

The Scribe hurries over with the night's new letters.

"Fresh reports arrive every hour, harvests, prices, warnings. Letting them into the library is **ingestion**."

"And you rebuild all 20 branches each time?" the Queen asks, alarmed.

"Never. That would take all night. I add only the new letter to its branch and leave the rest untouched. Adding just the change is **incremental indexing**."

He holds up two grain letters for the same province.

"This is the trouble I fear most. Yesterday's count and today's count both exist. I keep both, marked in order, so we always know which is current and can return to the older one if we must. Keeping that order is **versioning**."

"And my grain number?" the Queen presses. "Is it tonight's, or last week's?"

"Tonight's," the Scribe says. "The moment a new count lands, I make certain the branches answer with it and not the stale one. Serving the latest instead of the outdated is **freshness**."

The Memory Clerk finally speaks, lifting her small box.

"May I? A thousand citizens tonight asked the very same question: how much grain remains. I do not send that to 20 branches 1,000 times. I answer it once, keep the answer in my box, and hand the copy to everyone who asks again."

"And when the count changes?" the Queen asks.

"I throw away the old answer and remember the new one."

"Storing the answers to the questions everyone keeps asking is **caching**," the Librarian says. "And it works because people ask in **repeated retrieval patterns**, the same few hot questions over and over. Cache those, and most of the kingdom never troubles a branch at all."

The Queen sits, taking it in.

"So make it search everything, every branch, every letter, and I get the best answer."

"You do," the Librarian says, "and you wait longer for it, and you pay more for it. That is the bargain no keeper escapes."

He says it the way the old keepers always said hard truths, in a verse.

"Search wider and deeper, and more you will find,
but the answer comes slower, the runners fall behind.
Search narrow and shallow, and swift you will be,
yet the letter you needed may hide from thee.
More branches, more runners, more roads, more gold,
for recall has a price, and the price must be told."

"Every branch is a real building," he adds, "every runner a real wage, every road a real cost. More recall means more **infrastructure**, and more infrastructure means more coin. Speed, accuracy, and cost: you may choose two, rarely all three."

The grain answer arrives at last, fresh, permitted, and fast, drawn from only the Eastern branches and cached for the thousand who asked again.

*Queen Leela* smiles.

"I thought scaling the library meant a bigger room."

"No, Your Majesty," the Librarian says.

"It means many rooms, a runner to reach them all, a gate to guard them, a scribe to keep them current, and a clerk who remembers what everyone keeps asking. The letter was always in here. At the size of a kingdom, the art is handing it back in time, to the right person, and without going broke."

## Terminology

**Sharding**: splitting a large document collection across several indexes or machines so no single node holds everything.

**Distributed Retrieval**: querying many shards at once and merging their results into one answer.

**Coordination Overhead**: the cost of fanning a query out to many shards, tracking replies, and merging them, paid on every request.

**Tail Latency**: the slowest responses, like p99, which set how slow a fan out query feels because the merge waits for the slowest shard.

**Metadata Filtering**: narrowing a search by tags such as date, source, or topic so fewer documents and shards are searched.

**Tenant Isolation**: keeping each customer's or group's data fully separated so one tenant can never retrieve another's.

**Permission Constraints**: filtering results by who is asking, so a user only ever retrieves documents they are allowed to see.

**Ingestion**: the pipeline that brings new documents into the system to be indexed.

**Incremental Indexing**: adding or updating only the changed documents in the index instead of rebuilding the whole thing.

**Versioning**: keeping ordered versions of documents or the index so you know which is current and can roll back.

**Freshness**: how up to date retrieved results are, and the work of serving the latest data rather than a stale copy.

**Caching**: storing the results of common queries so they can be returned without searching again.

**Repeated Retrieval Patterns**: the tendency for a few hot queries to recur often, which is what makes caching pay off.

**Recall and Latency Tradeoff**: searching wider and deeper improves recall but costs more latency and compute, while searching narrow is faster but may miss relevant documents.

**Infrastructure**: the machines, storage, network, and cost a scaled retrieval system runs on, which grows as you scale.
