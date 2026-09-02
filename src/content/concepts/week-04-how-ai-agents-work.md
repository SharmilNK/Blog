---
title: "How AI Agents Work: Memory, Tools & Guardrails"
track: "concepts"
week: 3
description: "Anatomy of an AI agent: intent classification, choosing the right model, model and tool contracts, tools, state and execution context, types of agent memory, guardrails, protecting sensitive information, human approval and evaluation."
tagline: "how an AI agent really works"
icon: "🧠"
characters: ["Grandma", "Aarav", "The Cashier", "The Master Baker", "The Apprentice", "The Quality Inspector"]
publishDate: 2026-08-31
draft: false
socialSnippet: "How does an AI agent actually work? Grandma's bakery reveals the whole system: intent, the right model, tools and contracts, state and context, the many kinds of agent memory, guardrails, human approval, and evaluating every step, not just the final cake."
quiz:
  - tier: "basic"
    question: "In an AI agent, what does 'working memory' hold?"
    options:
      - "The model's trained weights"
      - "A permanent log of every past task"
      - "The information for the task currently in progress"
      - "The full list of every tool the agent can use"
    answer: 2
  - tier: "intermediate"
    question: "What distinguishes semantic memory from episodic memory in an agent?"
    options:
      - "They are two names for the same store"
      - "Semantic memory holds general knowledge and facts, while episodic memory holds specific past experiences or events"
      - "Semantic memory holds images while episodic holds only text"
      - "Episodic memory is the model's trained weights"
    answer: 1
  - tier: "expert"
    question: "How does parametric memory differ from retrieval memory in an LLM system?"
    options:
      - "Parametric memory is a temporary cache cleared after each request"
      - "They both refer only to the model's context window"
      - "Retrieval memory is stored inside the model's trained weights"
      - "Parametric memory is knowledge encoded in the model's trained weights, while retrieval memory fetches information from an external store at query time"
    answer: 3
---

Grandma's bakery was the busiest in town. Every morning hundreds of customers lined up outside at sunrise. Some wanted birthday cakes, others wanted fresh bread, while a few came with complicated custom orders. Yet despite the crowd, Grandma never seemed rushed.

![Grandma's bakery mapped to the anatomy of an AI agent system](/images/mlops/week-02/Bakery_AIsystem.png)

One morning her grandson Aarav asked, "Grandma, everyone says your bakery is magical. How do your staff work together without getting confused by all the orders?"

Grandma smiled, "It isn't magic, it's just a well-built system."

Just then a customer walked in with a smile, "I need a chocolate birthday cake for tomorrow. My daughter is allergic to peanuts, and I'd like strawberries if they're available."

Aarav watched his Grandma. She didn't immediately send the order to a baker but looked towards the cashier.

The cashier went over and wrote the request carefully.

"Birthday cake," she whispered. "Chocolate. Peanut allergy. Delivery tomorrow."

"The cashier's first job is understanding what the customer actually wants. This is called **Intent Classification**. If she misunderstands the request, every step after this will be wrong." Grandma said as she handed the written order to the Head Baker.

"Can every baker make this cake?" Aarav asked.

Grandma shook her head, "No. Every baker has different strengths."

She pointed across the kitchen.

"The young baker makes simple cookies very quickly. The master baker creates wedding cakes. Another specializes in pastries. Choosing the right baker is called the **Model Layer**."

Each baker also carried a recipe card. The recipe didn't just describe the cake. It explained what ingredients the baker expected, what the finished cake should look like, what to do if strawberries weren't available, and when to ask for help instead of guessing.

"Those," Grandma smiled, "are our **Model Contracts**. Every baker knows exactly what they're responsible for."

The master baker looked at the order. "I'll need fresh strawberries" he announced.

Instead of searching the entire bakery himself, he picked up a bell. Taking the cue, the pantry manager checked inventory, another assistant looked at tomorrow's fruit delivery, and a third checked whether the customer had ordered from them before.

"They're all helping him," Aarav noticed.

"Exactly," Grandma replied. "Those are **Tools**. A baker becomes much more capable when he knows how to use the right tool."

Every tool had its own instruction card. For example, the oven accepts dough, not frosting. The mixer only accepted measured ingredients. The pantry returned ingredients only if they were in stock.

"If a tool fails," Grandma explained, "the baker either retries, chooses another tool, or asks for help. Those rules are called **Tool Contracts**."

As the cake moved through the kitchen, Aarav noticed a small card travelling with it.

Every station added something.

*Order received.*

*Ingredients collected.*

*Ingredients mixed.*

*Cake baked.*

*Decorated.*

*Awaiting delivery.*

"That's the cake's **State**," Grandma explained. "It tells everyone exactly where the cake is in its journey."

The card also contained today's order, the customer's allergies, previous purchases, tool results, and approvals.

"This is the **Execution Context**," she continued. "Every baker only sees the information needed for the current step."

Aarav nodded. 'The card is just like you! You keep track of so much information like all of today's orders without looking, the wedding cake from last month, preparing the fifty cupcakes for tomorrow and all your recipes too."

Grandma laughed, "I have different types of memory just like every good AI agent."

She counted on her fingers.

"**Working Memory** remembers the cake currently in front of me."

"**Episodic Memory** remembers cakes we've baked before."

"**Semantic Memory** remembers baking knowledge."

"**Procedural Memory** remembers recipes."

"**Retrieval Memory** is my recipe book. I only open it when I need it."

"**Parametric Memory** is everything I've learned through experience."

"And **Prospective Memory** reminds me of what still needs to happen."

"Ahh-" Grandma said mid-sentence as she watched the apprentice reached for peanut frosting. She stopped him immediately.

"But it's chocolate frosting," he protested.

"The customer is allergic."

"Oh yes," he said as he kept the frosting aside.

"This is why we add our **Guardrails**," she explained. "Some mistakes must never happen."

A voice called out, "The delivery team needs the address."

Before handing the order to delivery, Grandma covered the customer's phone number and payment details. "They don't need this information and that's how we protect **Sensitive Information**."

Aarav asked, "So the cake is ready to leave the bakery?"

"Not yet, the Quality Inspector must examine it first.

*Correct flavor?*

*Correct decorations?*

*Correct customer?*

*No peanut contamination?*

Only then can I sign the order.

This is our **Approval Layer**," she smiled. "Some decisions should always involve a human."

"We don't just evaluate the final cake. We evaluate every step on the way,

*How long before baking started?*

*Did every baker choose the correct tools?*

*Did anyone refuse unsafe requests?*

*Did every order reach the customer?*

*Were there delays?*

That's how we improve tomorrow," Grandma smiled.

Aarav nodded, "Grandma, your bakery is magical because it is built around good memory, the right tools, clear rules, careful coordination, constant evaluation, and people who know exactly when to think, when to ask for help, and when to refuse."
