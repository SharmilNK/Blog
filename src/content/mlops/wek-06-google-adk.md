---
title: "Google ADK"
track: "mlops"
week: 5
description: "Explore distributed retrieval, indexing, caching, permissions, and the engineering trade-offs behind fast, reliable RAG systems."
tagline: "The Queen Discovers Google ADK"
icon: "🏛️"
characters: ["Queen Leela", "The Royal Librarian", "The Dispatcher", "The Gatekeeper", "The Scribe", "The Memory Clerk"]
publishDate: 2026-09-18
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

The Kingdom of Aurelia had grown too large for Queen Leela to manage alone. 
Every morning, merchants requested trade advice, generals asked for military intelligence, scholars searched ancient records, and diplomats negotiated treaties. By noon, her desk was buried under scrolls.

One evening, the Royal Engineer entered the throne room carrying a strange blue box.
"What is that?" the Queen asked.
"It's called the **Agent Development Kit**, Your Majesty."

The Queen smiled. "Can it solve my kingdom's problems?"
The engineer shook his head, "No. But it helps you build agents that can."
He opened the box and unrolled the first scroll, "Think of it as instructions for building your own Royal Council.
Every council begins with a single adviser. In ADK, we call this an **LLM Agent**. It has three things,
*A model*
*Instructions*
*And optional tools* "

The engineer pointed to another scroll, "The model decides how the adviser thinks. The instructions tell the adviser what to do and the tools allow the adviser to do things beyond thinking, like searching records, calling APIs, reading files, or using Google Search."
The Queen said, "So an adviser without tools can only answer from memory."

Just then a messenger entered, "Your Majesty, the Trade Committee awaits your ruling on if we should open a new trade route to the Eastern Kingdom"
The Queen looked towards the Royal Engineer, " Well, lets me instruct ADK to present me the answer" her single adviser.
The engineer smiled, "Off course. At this point the LLM Agent does not know enough. It chooses it's tools - a map, a ledger, a spy report."
The LLMagent immediately searched the kingdom's records before answering.

The Queen looked surprised, ""So the LLM chose the tool itslef."
"Exactly. In ADK, the model decides when a tool is needed and calls it automatically."
The Queen leaned back, "But can one LLM do everything?"
The engineer smiled, "And that is where ADK becomes interesting." He drew four circles.

*Research*
*Finance*
*Diplomacy*
*Writing*

"Instead of one, we build a team. So every LLMagent has one responsibility."

The engineer rearranged the circles into a straight line, "And one adviser can pass work to another. The Research agent works first, then Finance, then Diplomacy and finally the Royal Writer prepares the report."
The Queen nodded, "They work in a sequence."
"Yes, nobody starts until the previous agent finishes. This is called a **Sequential Agent**."

The Royal Engineer then drew three agents working side by side, " Suppose the kingdom approves the trade route. Now we need a LinkedIn announcement, an Instagram campaign and a speech for merchants. These can all happen at the same time. So ADK lets us run them together as a **Parallel Agent**."
The Queen asked, "What if the Royal Inspector rejects the proposal? And we need to update some changes and resubmit the proposal. Can the ADK do that?"
"Yes, " The Royal Engineer replied, "Using a **Loop Agent**, the workflow repeats until a condition is satisfied."

The Queen then noticed something unusual, " But, the Research agent used Gemini, the Finance agent used GPT and the Royal Writer produced reports using Claude. So ADK supports multiple providers?"
"Each agent may use the model best suited for the task." the Royal Engineer said as he pulled up the Royal Writer's report.
The Queen read it, "Very good, every report followed the exact same layout."

*Problem
Analysis
Recommendation
Risk*

"They all write the same way, so every other agent can understand the output. In ADK this is called **Structured Output**. Instead of free-form text, agents exchange predictable JSON."
"Oh! but wait, see here, along with mentioning their excerpts the report also mentions the code names of the spies! we do not want the Committee having that information. And I se some duplicate values here too," the Queen said.
" Then we must use **Callbacks**, they let us inspect what happens before and after agents, models, and tools execute," the Engineer replied, "We have,

*Before Model Callback*: Before the request reaches the agent, we can inspect it, remove sensitive information, or even add additional instructions.
*Before Tool Callback*: Before a tool is used, we can validate the request and make sure it has everything the tool needs.
*After Tool Callback*: After the tool has finished its work, we can now clean and organize the results like removing duplicate reports, sorting them by date before the agent reads them.
*After Agent Callback*: Once the entire task is complete, we can record metrics, log events, and measure how well the council performed."

The Queen said, "That is important and must always be done.Lets say, I submit this report to proceed with opening the trade route and the Committee comes back after few days or weeks with some questions or recommendations, will the agent remember our conversation from today?"
"Yes. The **Session** stores the conversation. It records where the work currently stands, like : Research complete. Finance pending. Writing in progress. This is the **State**.
The session remembers the conversation. The state remembers the current progress."

"What if I want to use the ADK in my chambers or in the East Palace, you don't expect me to carry this blue box around, do you?" the Queen asked
"Of course not, your Majesty. We deploy it. Based on where you are, we could use **Vertex AI Agent Engine** or a Cloud Run or deploy it on the East palace's own infrastructure."

The Queen smiled satisfied. "I see Google ADK as a valuable architect that allows my entire council to think as one."

##Terminology
