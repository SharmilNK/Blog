---
title: "AI Product metrics"
track: "evaluation"
week: 3
description: |
  
tagline: "was the right metric used?"
icon: "📜"
characters: ["Queen Leela", "The Royal Librarian", "The Dragon", "General Vikram", "The Second Dragon"]
publishDate: 2026-09-23
draft: false
socialSnippet: "A RAG answer can sound perfect while the retriever fetched the wrong context. A story about similarity vs relevance, wasted context windows, and a Retrieval Utilization Score that tells you whether the fetched documents actually helped."
quiz:
  - tier: "basic"
    question: "In a retrieval system, what does a high similarity score actually guarantee about a document?"
    options:
      - "That the document is relevant to the question"
      - "That the document will be used by the model"
      - "Only that its embedding is close to the query's, which may or may not be useful"
      - "That the document contains the correct answer"
    answer: 2
  - tier: "intermediate"
    question: "Why can retrieving five documents that all look similar to the query still produce weak answers?"
    options:
      - "Retrieving more than three documents always lowers quality"
      - "High similarity does not imply relevance, so look alike distractors crowd out the few documents that truly answer the question and waste the context window"
      - "Similar documents cancel each other out mathematically"
      - "The model can only read documents ranked last"
    answer: 1
  - tier: "expert"
    question: "Two embedding models return different retrieved sets, but the final generated answers are nearly identical. Why might the newer model still be the better retriever?"
    options:
      - "Identical answers prove the two retrievers are equally good"
      - "A newer model is better only if it returns more documents"
      - "The final answer text is the only signal that matters"
      - "Answer text can mask retrieval quality; context precision and the correlation between similarity and relevance can improve even when the wording is unchanged"
    answer: 3
---

Queen Leela had spent nearly a year planning one of the largest projects the kingdom had ever attempted, a cleaner, greener, automated City. As part of this project she had the Royal Council assembled to discuss on automated waste segregation.

Right now, every household would receive three bins. One for food waste, recyclable materials, for everything else. To make it effecient for the workers, the kingdom would use an AI system to automatically identify and separate waste before it reached the recycling plants.

The Treasurer spoke first, "Your Majesty, we've estimated the **Cost per Collection**. The AI system will reduce manual sorting costs by almost forty percent."

The Queen nodded.

The Minister of Public Services stood next, "Our simulations show that each collection request will now be completed in less than five minutes. We've reduced the **Time-to-Resolution significantly**."

Another minister added, "We also measured how long workers spend processing each collection. The **Average Handle Time** has dropped from twelve minutes to four."

Finally, the Minister of Public Affairs smiled. "We surveyed several villages after the pilot. Most workers rated the experience as very easy. Their **Customer Effort Score** is excellent."

The council looked pleased but the Queen remained quiet.

"Is something wrong?" asked the Treasurer.

Queen Leela folded the reports, "These numbers tell me the project is cheaper, faster and that the workers like it, but they don't tell me whether the AI is doing a good job."



That evening, Leela visited the one person whose advice she trusted more than anyone else, Her grandmother, LuNa. After listening carefully, LuNa poured two cups of tea.

"Tell me," she said, "if the workers sort one hundred bags of waste today, how many do you expect the AI to sort correctly?"

Leela said, "I suppose... as many as possible."

LuNa smiled, "Then why didn't your council measure that? They measured the kingdom and forgot to measure the AI."
She walked toward the window overlooking the recycling center, "Imagine the AI finishes every collection in two minutes. It costs almost nothing. Everyone loves using it. But...

...it throws glass into the compost bin.

...plastic into the paper bin.

...and batteries into the food waste.

Leela frowned, "That would be a disaster."

"Exactly. So before celebrating speed or cost ask whether the AI is correct." She handed the Queen a notebook and said,

"The first thing I would measure is **Accuracy**, Out of every bag the AI sorts, how many are actually correct?


If your AI uses tools, for example cameras, barcode scanners, or municipal databases measure whether it chose and used the right tool. That is **Tool Success Rate.**
The smartest AI is useless if it keeps picking the wrong tool."

She pointed toward the workers outside. "The AI doesn't simply produce one answer. It performs many small steps: *identifies the object, decides the material, chooses the correct recycling stream and then verifies the result*."

"If one of those steps repeatedly fails you should know exactly where. That is **Trajectory Evaluation.**"

Leela nodded, "We had just been measuring the ** Business, Product, Cost and Performance metrics**." 

She flipped the pages of the metrics to read about the AI product metrics on **AI Quality, Agent, Performance and Safety metrics**, "There is still a lot to measure" she said as she slowly closed the notebook.


LuNa smiled, "Exactly." She wasn't finished, "Finally, how will you know what happened after your AI has been working for six months?"

The Queen said, "**Observability metrics**, we need to record every production decision, every tool call, every delay and failure."

"Indeed," LuNa said, 


Business metrics tell you whether the project created value.

Product metrics tell you whether citizens liked using it.

But AI metrics tell you whether the intelligence itself can be trusted."


Leela smiled. "So before I ask, did the kingdom benefit? I should first ask did the AI actually work?"

LuNa raised her cup, "Exactly."


Terminology
1.Business Metrics

Self-Service Deflection Rate: The percentage of requests resolved by the AI without requiring a human.

Time-to-Resolution (TTR): The total time taken to completely solve a user's problem.

Average Handle Time (AHT): The average time spent handling one request from start to finish.

Cost per Query: The average cost of serving one AI request, including model and infrastructure costs.

Revenue Generated: The revenue directly or indirectly influenced by the AI system.

Time Saved: The reduction in manual work due to AI automation.

Support Cost Reduction: The decrease in customer support costs after deploying AI.

2.Product Metrics

Customer Effort Score (CES): Measures how easy it was for users to accomplish their task.

Customer Satisfaction (CSAT): Measures how satisfied users are with the AI experience.

Net Promoter Score (NPS): Measures how likely users are to recommend the product.

Task Completion Rate: The percentage of users who successfully complete their intended task.

User Retention: Measures whether users return to use the product again.

3.AI Quality Metrics

Accuracy: The percentage of correct AI predictions or responses.

Hallucination Rate: The percentage of responses containing fabricated or incorrect information.

Groundedness: Measures whether answers are supported by trusted sources or retrieved documents.

Relevance: Measures how well the response answers the user's question.

Faithfulness: Ensures the generated response stays true to the provided evidence.

4.Agent Metrics

Tool Success Rate: Measures how often the agent selects and executes the correct tool successfully.

Tool Failure Rate: The percentage of tool calls that fail or return unusable results.

Intent Classification Accuracy: Measures how correctly the agent understands the user's goal.

Trajectory Evaluation: Evaluates every reasoning and execution step, not just the final answer.

Retry Count: The number of times an agent retries failed actions.

Human Intervention Rate: The percentage of tasks requiring manual assistance.

5.RAG Metrics

Context Precision: How relevant the retrieved documents are.

Context Recall: Whether all important documents were successfully retrieved.

Retrieval Precision@K: Measures how many of the top retrieved documents are actually relevant.

Mean Reciprocal Rank (MRR): Measures how highly the first relevant document appears in the search results.

Normalized Discounted Cumulative Gain (NDCG): Evaluates the quality of document ranking.

Groundedness: Ensures answers are based on retrieved evidence.

Retrieval Utilization Score (RUS): Measures whether the retrieved documents genuinely contributed to the final answer.

6.Performance Metrics

Time to First Token (TTFT): The time before the AI starts generating its response.

Latency: The total response time from request to final answer.

Throughput: The number of requests the system can process per second.

Error Rate: The percentage of failed requests.

Cache Hit Rate: The percentage of requests served directly from cache instead of recomputation.

7.Safety & Governance Metrics

Refusal Accuracy: Measures how correctly the AI refuses unsafe or restricted requests.

Prompt Injection Success Rate: Measures how resistant the system is to prompt injection attacks.

PII Leakage Rate: Measures how often sensitive information is accidentally exposed.

Policy Violation Rate: Measures how often the AI breaks organizational or safety policies.

8.Observability Metrics

Trace Success Rate: Measures whether complete workflows execute successfully.

Agent Execution Time: Time taken by each individual agent.

Tool Call Count: Number of tools invoked during a request.

Token Usage: The number of input and output tokens consumed.

Failure Root Cause: Identifies where and why failures occurred within the workflow.

Observability: The ability to monitor, trace, and understand the behavior of an AI system by recording its decisions, tool calls, performance, and failures. It helps engineers diagnose issues, improve reliability, and understand how the system behaves in production.
