---
title: "The Attention Heist"
track: "concepts"
week: 1
description: "Three thieves named Query, Key, and Value pull off the perfect vault job — and explain self-attention along the way."
characters: ["Query", "Key", "Value", "The Vault (Softmax)"]
publishDate: 2026-01-05
draft: false
socialSnippet: "Transformers explained as a heist crew deciding who gets access to what. New story: The Attention Heist."
quiz:
  - tier: "basic"
    question: "In the self-attention heist, what does the Query represent?"
    options:
      - "The question each word asks about what it needs"
      - "The final output of the layer"
      - "The loss function"
      - "The training dataset"
    answer: 0
  - tier: "intermediate"
    question: "Why does the crew need a softmax (the vault's combination lock) before splitting the take?"
    options:
      - "To make the attention scores sum to 1 so they act like weighted votes"
      - "To reduce the number of parameters in the model"
      - "To prevent overfitting during inference"
      - "To convert tokens into embeddings"
    answer: 0
  - tier: "expert"
    question: "If you scale up the sequence length 10x, what breaks first in this heist crew's plan without optimization?"
    options:
      - "Compute and memory blow up quadratically with sequence length"
      - "The Query stops working entirely"
      - "Softmax becomes undefined"
      - "Nothing breaks, attention scales linearly by design"
    answer: 0
---

## Scene 1: The Job

Query walks into the vault room with one question on her mind: *what do I need right now?* She doesn't ask out loud — instead, she compares notes with everyone else in the room.

## Scene 2: The Negotiation

Key holds the labels. For every word in the room, Key whispers: *here's what I've got.* Query checks each Key against her own question, scoring how relevant it is.

```mermaid
flowchart LR
    Q[Query] -->|compares to| K[Key]
    K -->|score| S[Softmax]
    S -->|weights| V[Value]
    V -->|weighted sum| O[Output]
```

## Scene 3: The Vault Opens

The scores go through Softmax — the vault's combination lock — turning raw scores into weights that sum to one. No score, no share.

## Scene 4: The Split

Value holds the actual goods. Each word's Value gets multiplied by its weight and summed up. The result: every word now carries a blend of the context it needed most.

## Scene 5: Walking Away

The heist crew repeats this for every word, every layer. That's self-attention — not magic, just a very well-organized split of attention across the room.
