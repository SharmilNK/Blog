# LinkedIn post log

One entry per published story: title, link, and a 2-4 line summary ready
to paste into LinkedIn. Newest first.

## The Library That Became a Kingdom (Week 5, mlops)
https://www.orivale.com/mlops/week-05-the-library-that-became-a-kingdom

A RAG demo that works on a laptop quietly falls apart at real scale. This story splits one Royal Library into a network of branches and walks the whole production problem: sharding and distributed retrieval, coordination overhead, tail latency (the whole answer waits on the slowest shard), metadata filtering, tenant isolation and permissions, incremental indexing, versioning and freshness, and caching the hot queries everyone repeats.
The hard truth at the end: better recall costs higher latency and more infrastructure. Speed, accuracy, cost, pick two.

## The Royal Postal Service (Week 4, mlops)
https://www.orivale.com/mlops/week-04-the-royal-postal-service

LangChain runs a fixed chain: one straight route, no memory, restart on failure. Great for a simple errand.
But real agent workflows branch, wait, fail, and come back. This story rebuilds a kingdom's postal system as a LangGraph: nodes that each do one job, edges that route the work, state that travels and remembers, checkpoints that survive a fire, and retries that recover from one bad stamp instead of starting over.
Plus two ecosystem tools: Langflow, a visual builder for flows, and LangSmith, for tracing, debugging, and evaluating runs.
The lesson: a chain is enough for a straight line, but stateful work needs a graph.

## The Spy Master's Letters (Week 2, evaluation)
https://www.orivale.com/evaluation/week-02-the-spy-masters-letters

Your RAG answer sounds perfect. But did the retriever fetch the right context, or did the model just get lucky?
A story about why "similar" is not "relevant", how a weak retrieval hides behind a right sounding answer, and a Retrieval Utilization Score that measures whether the fetched documents actually helped, alongside Precision@k, chunk attribution, grounding, and LLM as Judge.

## The Weapons of the Kingdom (Week 2, concepts)
https://www.orivale.com/concepts/week-02-the-weapons-of-the-kingdom

Prince Vikram owns every weapon in the kingdom, yet an old woman warns he is not yet a king: he doesn't know which weapon to draw. His adviser walks him through the whole AI tool stack, MCP, LangChain, Celery, n8n, Redis, Railway, Vercel, Gamma, Metabase, and Langfuse, each doing one job well.
The lesson: strength isn't owning every tool, it's knowing which should lead, which should assist, and when they work together.

## The Stranger at the Gates (AI Governance)
https://www.orivale.com/governance/the-stranger-at-the-gates

A kingdom that never needed magic must decide whether to welcome a stranger named AI. Instead of rushing the gates, the queen's council walks the whole build lifecycle: purpose before power, design for failure, review before you build, and never mistake a beautiful gift for a safe one.
Adopting AI responsibly is less about speed and more about the questions you ask before you open the gates.

## The Production Relay (Week 2, mlops)
/mlops/week-02-the-production-relay

MLOps isn't one person solving one problem. It's five operational pillars working together to carry the baton through four hurdles: Reproducible Pipelines, Automated Deployment, Continuous Monitoring, Operational Governance. But here's the catch: every technical decision shows up immediately on the live screen. Latency, uncertainty, stale data — your users feel it all.

## Drift Walks the Night Shift (Week 1, mlops)
/mlops/week-01-drift-walks-the-night-shift

Most model failures don't announce themselves — they walk in quietly through the input data and wait. In this story, an intruder named Drift slips past a sleeping monitor and an all-green dashboard for three weeks, until a downstream metric finally cracks.
The fix wasn't a bigger model. It was watching the right thing in the first place.

## The Model on Trial (Week 1, evaluation)
/evaluation/week-01-the-model-on-trial

A model claimed retention jumped 91%. BLEU said case closed: the words matched the reference. RAGAS pulled the source and found the real number was 9%, a fabricated digit hiding inside a fluent sentence. The Judge caught tone and intent but admitted it could miss that one fake number.
The lesson: no single metric is the whole verdict. Faithfulness, relevance, and overlap each see a different blind spot. Run them together.

## The Attention Question (Week 1, concepts)
/concepts/week-01-the-attention-heist

"The trophy did not fit in the suitcase because it was too big." What does "it" refer to? That tiny puzzle is exactly what self attention solves: score every word against the question, then blend them by weight instead of grabbing the loudest one.
Then the catch: double the words and the cost quadruples. A story about how attention actually works, and why long inputs get expensive.
