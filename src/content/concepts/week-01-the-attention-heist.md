---
title: "The Attention Question"
track: "concepts"
week: 1
description: "Query, Key, and Value resolve a coreference puzzle using self attention, only to discover an explosive cost when they scale."
tagline: "who does it refer to?"
icon: "🔐"
characters: ["Query", "Key", "Value", "Softmax"]
publishDate: 2026-01-05
draft: false
socialSnippet: "Self attention explained as a crew of word detectives, Query, Key, and Value, who blend evidence rather than grab the loudest answer."
quiz:
  - tier: "basic"
    question: "In the story, what does Query ask Key to label for her?"
    options:
      - "Which word the pronoun 'it' refers to in a sentence about a trophy and suitcase"
      - "How many doors are in the building"
      - "The fastest way to escape the vault"
      - "Which crew members are trustworthy"
    answer: 0
  - tier: "intermediate"
    question: "Why does Value insist that Query blend all three answers instead of just taking the highest scoring one?"
    options:
      - "Because suitcase and today still carry weight in how humans understand the sentence"
      - "Because all answers must be equal in a fair system"
      - "Because Softmax will fail otherwise"
      - "Because it makes the heist more dramatic"
    answer: 0
  - tier: "expert"
    question: "What happens to the cost when you double the number of words in a sentence that Query must process with attention?"
    options:
      - "The cost quadruples because attention is O(n²) in sequence length"
      - "The cost doubles because each word checks one other word"
      - "The cost stays the same due to modern optimization"
      - "The cost becomes logarithmic with better heuristics"
    answer: 0
---

It is late at night. Long after the building has gone dark, *Query* stands inside, steady and focused.

The sentence hovers over them: "The trophy did not fit in the suitcase because it was too big."

Her task tonight is specific. She holds one word in her hand, "it". The team's task is to find what "it" means. Does "it" mean the trophy, the thing that could not fit? Or the suitcase, the container?

This is the puzzle that **self attention** was built to solve.

*Query* is the interrogator of the crew. She is restless and demanding, and she expects every answer to match exactly what she asked.

*Key* is the labeler. He is methodical and precise, the kind who has already catalogued every door in the building before anyone else arrives.

*Value* is the safeguard. She holds the real contents, and she refuses to hand anything over until the weights make sense.

*Softmax* is the balancer. She is calm and fair, and she turns raw, messy scores into clean shares that always add up to one.

![Query, Key, and Value, the self attention crew](/images/concepts/week-01/attention-qkv.jpeg)

*Query* looks around the room and breaks the silence.

"I need to know what is behind every door in this building. Which word does 'it' point to in my sentence?"

*Key* steps forward without hesitation.

"Each door is labeled. Door one is labeled 'today,' a stray word from a side conversation. Door two is labeled 'trophy,' the object that did not fit. Door three is labeled 'suitcase,' the container that held nothing."

*Query* scores each label against her question.

"Today has nothing to do with fitting or size, so it barely registers. Let me weight it at 3%.

Suitcase scores higher, weight 17%, since a suitcase is at least a plausible thing for 'it' to mean.

But trophy matches the actual logic of the sentence. Something did not fit because it was too big, and the trophy is the thing too big to fit. It is a clear match, so weight 80%."

Those three numbers are the **attention weights**, and *Query* is about to learn she cannot simply grab the highest one.

"You cannot take the highest number and assume it is the right answer," *Value* says from her corner.

"Why not?" *Query* asks, her hand hovering near door two.

"Because they are not shares. The contents behind each door are real. Trophy is the strongest answer, but suitcase still carries weight in how the sentence works. Let me give you the real values and you have to blend them."

*Softmax* steps in.

"That is my job."

She takes *Query's* raw scores and *Value's* useful context and normalizes them into final weights that sum to one.

*Query* blends the three words by those weights into a single result, mostly trophy with a faint trace of suitcase still folded in. It is richer than picking one door and ignoring the rest.

"That is the whole heist," *Key* says.

"We do this for every word behind every door, on every layer. You need to figure out a complete picture of what the sentence means, quietly aware of every word around you, weighted by how much each one matters to the question you walked in with."

*Query* nods. Somewhere deeper in the building, a thousand clones of *Query* are running the exact same job in parallel. Each one resolves a different word. Each one builds its own answer the same patient way, not by grabbing the loudest word in the room, but by listening to all of them and weighting accordingly.

Then *Query* notices the weakness.

A short sentence with 10 words is nothing. 10 doors means 10 questions, 10 labels, 10 weights.

But sentences grow into paragraphs, paragraphs into documents, documents into entire books.

"Wait," *Value* says, her voice catching. "How many comparisons is that?"

*Key* runs the numbers.

"100 words means 10,000 comparisons. Double the words and the cost does not double. It quadruples."

"Oh no," *Value* says. "The cost just shot up for every single word we check."

"Every clone is comparing itself to every other word, all at once," *Key* says. "The compute budget is climbing and climbing. At this rate we will have nothing left."

*Query* feels the weight of it. Each word has to check itself against every other word. The room is burning money faster than the crew can earn it. This is the **quadratic cost** of attention, and it is the one thing that can sink the whole operation.

So they go to their commander, the old architect of every heist, and they ask for a way out. The commander looks at them for a long moment, then speaks in a balanced tone.

"Hear the principles, carved in the bedrock of every heist:

Check only the doors that stand nearby,
Do not measure every space again,
Split the crew so many work at once,
Never leave one soul to check the ton.

But hold this truth above the rest:
The core task never, ever will change,
Compare what you need to what is named,
Lock the weights into their place,
And take the blend."

*Query* and her crew take the principles to heart. They split into smaller squads, each one checking only nearby words instead of all of them. They cache old comparisons so the same work is never done twice. They run in parallel, many small crews instead of one exhausted *Query*.

By the end of the night, *Query*, *Key*, *Value*, and *Softmax* have run the job so many times it starts feeling like breathing. Every layer. Every word. Every question answered the same patient way, built from careful listening and careful weights.

## Terminology

**Self Attention** — a mechanism where each position in a sequence learns to weight every other position by relevance to its own question.

**Query** — the question each position asks about what it needs from the rest of the sequence.

**Key** — the label for each position that decides how relevant it is to an incoming query.

**Value** — the actual content at each position that gets weighted and combined based on attention scores.

**Softmax** — a function that turns raw scores into normalized weights that sum to one, so every position contributes a fair share.

**Attention Weight** — the final normalized score that sets how much each position influences the output.

**Quadratic Cost** — the scaling problem where compute grows with the square of the sequence length, making long inputs expensive.
