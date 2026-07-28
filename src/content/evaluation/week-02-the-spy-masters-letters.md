---
title: "Retrieval Evaluation & the Utilization Score"
track: "evaluation"
week: 2
description: "The Dragon returned a confident, fluent answer but it was fetched from the wrong context! 

-Retrieval Utilization Score -Precision@k -Recall@K -chunk attribution and utilization 
-context adherence and grounding -reranking with a cross encoder -embedding visualization "
tagline: "was the right letter retrieved?"
icon: "📜"
characters: ["Queen Leela", "The Royal Librarian", "The Dragon", "General Vikram", "The Second Dragon"]
publishDate: 2026-08-03
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

It is past midnight in the fortress of Aurelia, and a single lamp burns in the Royal Library.

*Queen Leela* has one question tonight.

"What is the neighboring kingdom preparing?"

Her spies have sent home millions of encrypted letters over the years, and somewhere in that mountain of scrolls the true answer is waiting. Moments after she asks, the retrieval system slides 5 letters onto the table: Letter 7, Letter 18, Letter 42, Letter 103, and Letter 145. From those 5, an answer will be built. The only thing that matters is whether the right letter is among them, and whether it is actually read.

*New to the kingdom? This tale follows [Vector DB & RAG](https://www.orivale.com/concepts/week-03-vectordb-rag), where the library first learned to turn its letters into searchable meaning. Here, the question is whether the right ones come back.*

*The Royal Librarian* runs the retrieval system, and he is meticulous to the point of obsession, because he alone decides which 5 letters out of millions reach the table. *The Dragon* is the one who reads them and speaks the answer, fast and supremely confident, though he can hold only 5 letters in his head at once and knows nothing beyond what he is handed. *General Vikram* trusts only his scouts on the ground, and he plays the part of reality, the truth against which every answer is checked. Later a second dragon will arrive, calm and analytical, whose only task is to grade the work of the others.

![Encrypted spy letters reach the Royal Library, where retrieval decides which few the Dragon ever reads](/images/mlops/week-02/spy_masters_letters_2.jpg)

The Dragon reads for a moment and lifts his head.

"They are preparing for war."

The answer sounds perfect. It is fluent, certain, and it arrives without hesitation.

*General Vikram* frowns.

"My scouts say the opposite. Their soldiers are marching for a festival, not a front."

The Librarian goes pale, because he has seen this before.

"The Dragon may be right. Or the Dragon may have guessed from his own instincts instead of the letters in front of him. When he does that, we call it a failure of **grounding**. A dragon we can trust stays faithful to the evidence, and that faithfulness has a name: **context adherence**."

*Queen Leela* leans forward.

"Then show me the letters."

The Librarian spreads the 5 scrolls out and scores each one for how much it truly helps answer tonight's question, on a scale he calls **relevance**. Letter 7 helps not at all and scores 0. Letter 18 scores only 2. Letter 42 scores a 10. Letter 103 scores 0. Letter 145 scores a 1. So 4 of the 5 were nearly useless, and the Dragon built his entire answer from Letter 42.

"Of the 5 I placed on top, only 1 was truly relevant," the Librarian says. "My **Precision@5** is miserable. And yet the true letter, 42, was somewhere in the pile, so my **recall** held. Precision failed me tonight. Recall did not."

"So why fetch the other 4?" the Queen asks.

The Librarian holds up Letter 18, the decoy.

"Because this one looked perfect. It spoke of soldiers, weapons, and borders, so my system placed it near the top. But read it closely, and it describes a military parade. High **similarity**, almost no relevance."

Then he holds up Letter 42.

"This one looked less similar to your question. It shares fewer of the obvious words. Yet it carries the real invasion plans. Medium similarity, and the highest relevance in the room."

*Queen Leela* sees it at once.

"So a letter that looks relevant is not the same as a letter that is relevant."

"That is the whole mystery," the Librarian says.

"I also track how much of each fetched letter actually surfaces in the Dragon's words. Tonight, only Letter 42 left a trace. That measure is **chunk attribution**. And how much of everything I retrieved gets used at all is **chunk utilization**. Tonight, 4 of 5 letters were wasted. The Dragon can read only 5, and I filled 4 of those seats with noise."

He gives the waste three names so the court will remember it: context window waste, token waste, retrieval waste. Every useless letter is a seat the true evidence never got.

Then he unrolls a fresh scorecard.

"I built a score that measures this directly. I call it the **Retrieval Utilization Score**."

The Queen laughs.

"Another score?"

"This one does not ask whether the answer sounded good. It asks whether the retrieval earned its place."

A high score, he explains, means the useful letters arrived early in the ranking, that similarity tracked relevance closely, and that almost nothing was wasted. A low score means the ranking was wrong, the context was squandered, and any correct answer was mostly luck. Only then does he show how it is built.

```
Retrieval Utilization Score

   Normalized DCR            useful letters ranked early
 + Similarity ~ Relevance    similarity tracked usefulness
 - Waste Penalty             seats lost to useless letters
 =========================================================
 = did the retrieved letters actually help the answer?
```

To prove the point, the Librarian runs an experiment. He swaps his old letter sorting method for a new one and asks the exact same question again. The old system had fetched Letters 18, 39, 28, 42, and 7. The new system fetches 42, 6, 11, 36, and 29. The Dragon reads both piles and, by chance, speaks almost the same words.

"They are identical," the Queen says. "So nothing changed."

The Librarian shakes his head.

"Everything changed. The answers only happened to land close. Underneath, the new system put the invasion plans first and filled fewer seats with noise. The words hid the improvement. The score revealed it."

He warns her that the parts of his system all pull on one another, and he says it the way the old keepers always did, in a short verse.

"Change the embedding, and the neighbors all shift,
cut the scroll differently, and the meanings drift,
raise the threshold, and the thin ones fall,
count fewer letters, and you may lose them all,
swap the retriever, and the order bends,
touch one dial here, and it never ends."

"And when the score runs low, I know what to reach for," he adds. "I rerank the letters with a sharper reader, a **cross encoder** that weighs each scroll against your question one at a time. I cut the scrolls tighter so no letter buries its point. And I command the Dragon to speak only from the letters before him, never from memory."

Then he opens a locked room where every letter floats as a glowing orb, and the Queen's question hangs bright in the center. The truly relevant letters drift into a tight cluster around it. One orb sits deceptively close, and the Librarian sighs.

"There is Letter 18 again. It looks near. It is useless. To even see this room, I had to flatten a space of thousands of dimensions down to 3, using tools named **PCA**, **t-SNE**, and **UMAP**."

"So who decides which of your systems is better?" the Queen asks.

"Sometimes another dragon."

The second dragon steps forward and is handed everything: the retrieved letters, the final answer, the relevance scores, and the similarity scores. It reads in silence, then names which retrieval was stronger and exactly why. That practice has a name too: **LLM as Judge**.

*Queen Leela* smiles.

"All this time I thought we were testing dragons."

The Librarian shakes his head.

"No. We are testing librarians. The Dragon can only answer from the letters it is given. If I choose them poorly, even the wisest dragon in the world cannot save the kingdom."

## Terminology

**Similarity**: how close a document's embedding is to the query's, regardless of whether it actually helps.

**Relevance**: whether a document truly helps answer the question, judged by meaning rather than surface word overlap.

**Precision@k**: of the top k retrieved documents, the fraction that are actually relevant to the question.

**Recall@K**: whether the relevant documents show up anywhere in the top K that were retrieved.

**Context Precision**: the share of retrieved documents that are relevant, weighted toward the top of the ranking.

**MRR (Mean Reciprocal Rank)**: rewards a system for placing the first relevant document as high as possible in the ranking.

**NDCG (Normalized Discounted Cumulative Gain)**: scores a ranking by how many useful documents sit near the top, discounting ones buried lower.

**Chunk Attribution**: how much of the retrieved text actually appears in or shapes the final answer.

**Chunk Utilization**: how much of everything retrieved gets used, versus fetched and then ignored.

**Context Adherence**: how closely the answer stays aligned with the retrieved documents rather than the model's own priors.

**Grounding**: forcing the answer to rest on retrieved evidence instead of pretrained memory.

**Retrieval Utilization Score (RUS)**: a composite score for whether retrieved documents were actually useful, not just whether the final answer sounded right.

**DCR**: a ranking based measure, normalized inside RUS, that rewards useful documents appearing early in the retrieved list.

**Spearman Correlation**: measures how well the similarity ordering agrees with the true relevance ordering.

**Wasted Similarity**: documents that scored high on similarity but added little relevance, taking up context for nothing.

**Context Window**: the fixed amount of text a model can read at once, so every wasted document costs a real slot.

**Reranking**: reordering retrieved documents with a stronger scorer so the most relevant land at the top.

**Cross Encoder**: a model that scores a document and query together, more accurate than comparing separate embeddings, used for reranking.

**LLM as Judge**: using a separate language model to grade retrieval or answers, given the evidence, scores, and final output.

**Embedding Visualization**: projecting high dimensional embeddings down to 2D or 3D so clusters and outliers become visible.

**PCA**: a linear method that flattens many dimensions into a few while keeping the largest directions of variation.

**t-SNE**: a nonlinear projection that keeps nearby points close, good for revealing local clusters.

**UMAP**: a nonlinear projection similar to t-SNE that tends to preserve more global structure and runs faster.
