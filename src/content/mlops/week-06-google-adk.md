---
title: "Google ADK"
track: "mlops"
week: 6
description: "A kingdom-council parable for Google's Agent Development Kit (ADK): the LLM Agent (model, instructions, tools), automatic tool calling, multi agent workflows with sequential, parallel, and loop agents, mixing model providers per agent, structured JSON output, callbacks before and after models, tools, and agents, session versus state, and deployment on Vertex AI Agent Engine or Cloud Run."
tagline: "The Queen Discovers Google ADK"
icon: "🧰"
characters: ["Queen Leela", "The Royal Engineer", "The Research Agent", "The Finance Agent", "The Diplomacy Agent", "The Royal Writer"]
publishDate: 2026-09-18
draft: false
socialSnippet: "Queen Leela builds a Royal Council with Google's Agent Development Kit. A tour of ADK: LLM agents and tools, sequential, parallel and loop multi agent workflows, structured output, callbacks, session versus state, and deploying on Vertex AI Agent Engine."
quiz:
  - tier: "basic"
    question: "In Google ADK, what are the three core parts of an LLM Agent?"
    options:
      - "A database, a cache, and a load balancer"
      - "A model, instructions, and optional tools"
      - "A frontend, a backend, and a deployment script"
      - "Three language models that vote on every answer"
    answer: 1
  - tier: "intermediate"
    question: "When should you use a parallel agent instead of a sequential agent in a multi agent workflow?"
    options:
      - "When each step depends on the previous step's output and must run in order"
      - "When you need the workflow to repeat until a condition is met"
      - "Parallel and sequential agents behave identically"
      - "When several independent subtasks can run at the same time and do not depend on each other"
    answer: 3
  - tier: "expert"
    question: "In ADK, what is the difference between a session and state?"
    options:
      - "The session stores the model's weights while state stores the prompt"
      - "They are two names for the same object"
      - "The session stores the ongoing conversation, while state tracks the current progress of the work such as what is done, pending, or in progress"
      - "State only exists after the agent is deployed to Vertex AI"
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


*Problem*

*Analysis*

*Recommendation*

*Risk*


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

## Terminology

**Agent Development Kit (ADK)**: Google's framework for building, orchestrating, and deploying AI agents and multi agent systems.

**LLM Agent**: a single agent defined by a model, instructions, and optional tools; the model decides how it thinks, the instructions what it does, and the tools what it can act on.

**Tools**: capabilities an agent can call beyond reasoning, such as searching records, calling APIs, reading files, or using Google Search; the model decides on its own when to invoke one.

**Sequential Agent**: a workflow where agents run one after another, each starting only after the previous one finishes.

**Parallel Agent**: a workflow where independent agents run at the same time on subtasks that do not depend on each other.

**Loop Agent**: a workflow that repeats until a stopping condition is met, useful for revise and resubmit cycles.

**Multi Provider Support**: each agent can use whichever model best suits its task, for example Gemini, GPT, or Claude, within the same system.

**Structured Output**: agents exchange predictable, schema conforming data (typically JSON) instead of free form text, so other agents can reliably parse it.

**Callbacks**: hooks that run before or after agents, models, and tools, used to inspect, modify, validate, clean, or log what passes through.

**Before Model Callback**: runs before a request reaches the model, to inspect it, strip sensitive information, or add instructions.

**Before Tool Callback**: runs before a tool is called, to validate the request and ensure the tool has everything it needs.

**After Tool Callback**: runs after a tool returns, to clean or reorganize its results, for example removing duplicates or sorting, before the agent reads them.

**After Agent Callback**: runs once an agent finishes its task, to record metrics, log events, and measure performance.

**Session**: the stored record of a conversation, so an agent can pick up a past exchange later.

**State**: the record of where the work currently stands within a session, such as what is complete, pending, or in progress.

**Vertex AI Agent Engine**: a managed Google Cloud service for deploying and running ADK agents.

**Cloud Run**: a serverless Google Cloud option for deploying an agent as a container, as an alternative to running it on your own infrastructure.
