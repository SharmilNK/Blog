---
title: "LangGraph vs LangChain: Stateful Agent Orchestration"
track: "mlops"
week: 4
description: "Two ways to orchestrate LLM workflows, compared. LangChain runs a fixed linear chain, simple and fast for a straight sequence. LangGraph models the work as a stateful graph: nodes that each do one job, edges (static and conditional) that route the work, state that travels and accumulates through reducers, checkpointing and persistence for recovery, error handling with retries, thread IDs for parallel runs, and an LLM deciding the next node. A postal system parable covering when a chain is enough and when you need a graph."
tagline: "when a chain needs a map"
icon: "📮"
characters: ["Queen Leela", "The Royal Postmaster", "The Royal Courier", "The Royal Advisor"]
publishDate: 2026-08-10
draft: false
socialSnippet: "LangChain runs a fixed chain. LangGraph runs a stateful graph, with nodes, edges, state, checkpoints, and recovery. A postal kingdom parable on when a straight route is enough and when your workflow needs a real map."
quiz:
  - tier: "basic"
    question: "What is the core structural difference between LangChain and LangGraph?"
    options:
      - "They are identical, just different names for the same library"
      - "LangChain composes steps as a linear chain, while LangGraph models them as a stateful graph of nodes and edges that supports branching and loops"
      - "LangGraph cannot call language models at all"
      - "LangChain only works on images, not text"
    answer: 1
  - tier: "intermediate"
    question: "In LangGraph, what is 'state' and how is it typically updated as it moves between nodes?"
    options:
      - "A shared object that travels through the graph and is updated by reducers that append to it rather than overwriting it"
      - "A global variable that each node completely overwrites every time"
      - "Another name for the language model being called"
      - "A log file that is written only once at the very end"
    answer: 0
  - tier: "expert"
    question: "Why does LangGraph's checkpointing and persistence matter for long running agent workflows in a way a simple chain does not?"
    options:
      - "It makes the graph run faster than any possible chain"
      - "It compresses the state so the workflow uses less memory"
      - "It saves state at each step, so an interrupted run resumes from the last checkpoint instead of restarting, and it enables human in the loop and replay"
      - "It guarantees the language model never makes a mistake"
    answer: 2
---

It is dawn at the Royal Postal Office of Aurelia, and the first cart of the day is already overflowing.

On top of the pile sits one letter that cannot wait.

Its label reads: destination Northern Province, urgency High, contents Medical Supplies, requirement Weather Check, status Waiting.

A village up north is out of medicine, and this single letter has to clear a weather check, a supply desk, and a dispatch desk before nightfall, in that order, unless the weather turns and it must be sent another way. The problem was never writing the letter. It was deciding where the letter should go next, at every step, without ever losing track of where it had already been.

*Queen Leela* wants the medicine delivered and does not care how, only that the kingdom never loses a letter again. *The Royal Courier* is the old way of doing things, a proud veteran who runs one fixed route from the first office to the last, quick and dependable for a plain letter, but he keeps no memory of where a letter has been, cannot send it down a side road, and begins the whole journey again from the start whenever anything goes wrong. *The Royal Postmaster* is the new way, calm and systematic, and he wants to replace the single route with a whole network: offices that each do one job, roads that decide where letters travel, and letters that remember their own history. *The Royal Advisor* is the reader they call on when a letter is too vague for any fixed rule to route.

The Courier explains how he has always worked.

"I run a chain. Weather, then Supply, then Dispatch, then out the door. One letter, one straight line, every time."

"And when the letter needs the harbor instead of the stable?" the Postmaster asks.

"Then it is not my kind of letter."

"A straight chain is perfect for a simple errand," the Postmaster says. "But our kingdom does not send simple errands. Our letters branch, they wait, they fail, they come back. For that I do not need a longer chain. I need a graph."

```
LangChain (a fixed chain)
   Weather -> Supply -> Dispatch -> Delivered
   one straight line, no memory; any failure restarts from the top

LangGraph (a stateful graph)
   Weather -> Supply -> Dispatch -> Delivered
      |          ^
      |          +-- retry / resume from the last checkpoint
      +-- overseas? --> Harbor
```

The Postmaster hands the medicine letter into his new system to show her.

"This letter carries everything we need to route it. Its destination, its urgency, its contents, its checks, its status. It changes as it travels, and it never forgets. The letter itself is the **State**."

It reaches the first office. The Weather Office reads the state, checks the northern skies, and stamps it "Weather clear." The Supply Office stamps it "Packed." The Dispatch Office stamps it "Sent." Each office does exactly one job and passes the letter on. Each office is a **Node**.

"And who decides which office is next?" the Queen asks.

The Postmaster points at the roads between the offices.

"Each road is an **Edge**. Some roads always lead the same way, Weather to Supply to Dispatch. Those are **static edges**. Others open only under a condition."

He shows her a fork. If the destination is overseas, the letter takes the road to the Harbor. Otherwise it takes the road to the Horse Stable. A road that chooses based on the letter's own state is a **conditional edge**.

Then a stranger letter arrives, and no rule fits it.

It reads, "I want food suitable for rainy weather."

The offices freeze. No stamp applies. So they carry it to *The Royal Advisor*, who reads it slowly.

"Hmm. Rainy weather food. That sounds like warm vegetables, not raw meat."

He routes it down the road to the Vegetable Warehouse. When no fixed rule can pick the next office, an intelligent reader does. That is an **LLM deciding the next node**.

The Queen watches a letter gather stamp after stamp: Weather Checked, then Approved, then Packed, then Dispatched.

"Does each office rewrite the letter?"

"Never," says the Postmaster. "They only add. Every office appends its stamp to what is already there, and the letter grows without losing a word. That rule, add rather than overwrite, is a **reducer**."

Then, halfway to the north, disaster. A fire tears through a waystation, and the medicine letter is caught in it.

"It is gone," the Queen says, rising from her chair. "We start again from the palace."

"We do not," the Postmaster says, and he does not even stand.

"Every office kept a copy of the letter exactly as it looked when it left. Each saved copy is a **checkpoint**. The letter does not restart from the palace. It resumes from the last office that stamped it."

Within the hour a restored copy continues north from its last good checkpoint, and the Queen sees what the old Courier could never offer: a journey that survives its own accidents. That saving and resuming is **persistence** and **checkpointing** together.

Then a worse thing surfaces. The Weather Office had read the wrong report and stamped the letter for a storm that was not coming. The next office catches the mismatch at once.

"Do we throw the whole letter away?" a clerk asks.

The Postmaster answers the way the old keepers always answered trouble, in a short verse.

"When a stamp goes wrong, do not despair,
do not burn the letter or start from nowhere,
step to the checkpoint before the mistake,
fix the one bad stamp, and the road you retake.
Recover, retry, and carry on true,
the graph will remember the rest for you."

So they roll back to the checkpoint before the bad stamp, correct the weather, and let the letter go on. That deliberate rollback and retry is **error handling** and **retry**, and it is why one mistake never kills the whole workflow.

"And if a letter is urgent?" the Queen asks.

The Postmaster stamps the medicine letter Priority High.

"No new roads. No new offices. The same graph, told to behave differently. That single stamp is **configuration**."

She looks out at the yard, where letters move by the thousand.

"How do these not become one hopeless mess?"

"Every letter carries its own **Thread ID**. 1,000 letters run through the same offices at once, each on its own thread, and none of them mixes with another."

That evening the Queen asks the hardest question.

"What happened to the medicine letter yesterday, exactly?"

The Postmaster pulls its checkpoints and replays the whole journey: every office it entered, every road it took, every stamp it earned, every error it survived. Because each checkpoint was stored, nothing has to be guessed. That stored, replayable history is the system's **memory**.

*Queen Leela* smiles.

"I always thought the strength of this kingdom was its horses."

"No," says the Postmaster.

"Then its roads."

"No."

"Its offices."

"Neither, Your Majesty."

He lifts the delivered medicine letter, thick with stamps.

"The strength of the Royal Postal Service is that every letter always knows exactly where it is, where it has been, and where it must go next. The Courier can carry a letter down a single line. The graph carries the whole kingdom, and never loses its place."

## Terminology

**LangChain**: a framework for composing language model calls as a mostly linear chain of steps, simple and quick for a straight sequence.

**LangGraph**: a framework for building language model workflows as a stateful graph of nodes and edges, with branching, loops, memory, and recovery.

**State**: the shared object that travels through the graph, carrying everything the workflow needs and growing as it goes.

**Node**: a single step in the graph that does one job and updates the state.

**Edge**: a connection between nodes that decides which step runs next.

**Static Edge**: an edge that always leads to the same next node.

**Conditional Edge**: an edge that chooses the next node based on the current state.

**Reducer**: the rule for how a node's output is merged into state, usually appending instead of overwriting.

**State Management**: keeping the shared state consistent and correct as many nodes read and update it.

**Persistence**: saving workflow state so a run can outlive crashes, pauses, and restarts.

**Checkpoint**: a saved snapshot of state at a step, used to resume from that exact point.

**Memory**: the stored, replayable history of a run's states and decisions.

**Configuration**: runtime settings passed into a graph that change its behavior without changing its structure.

**Error Handling**: catching a failure and recovering, often by rolling back to a checkpoint instead of aborting.

**Retry**: rerunning a failed step, usually from the last good checkpoint.

**Thread ID**: an identifier that isolates one run's state so many runs can execute in parallel without mixing.

**Workflow**: the overall multi step process the graph carries out from start to finish.

**Graph**: the network of nodes and edges that defines how work flows and branches.

**LLM Decision**: letting a language model choose the next node when no fixed rule applies.

**Parallelism**: running many independent threads or branches at the same time.

**State Reduction**: combining each node's updates into the shared state through reducers.
