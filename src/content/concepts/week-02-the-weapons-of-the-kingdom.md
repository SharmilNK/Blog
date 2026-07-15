---
title: "AI Tools : When to use what?"
track: "concepts"
week: 2
description: "Prince Vikram tours the kingdom's arsenal of AI tools (MCP, n8n, LangChain, Celery, Redis, Railway, Vercel, Gamma, Metabase, Langfuse) and learns that power lies not in owning every weapon, but in knowing which one to draw."
tagline: "which weapon to draw"
icon: "⚔️"
characters: ["Prince Vikram", "The Adviser", "MCP", "LangChain", "Celery", "n8n", "Redis", "Railway", "Vercel", "Gamma", "Metabase", "Langfuse"]
publishDate: 2026-07-13
draft: false
socialSnippet: "Prince Vikram owns every weapon in the kingdom, yet an old woman warns he is not yet a king. A parable about the AI tool stack, and the wisdom to know which one to draw."
quiz:
  - tier: "basic"
    question: "What does an orchestration framework like LangChain primarily do?"
    options:
      - "Coordinates multi step reasoning and decides which tools and data to use"
      - "Hosts the frontend of a web application"
      - "Stores short term cache data"
      - "Renders charts for business metrics"
    answer: 0
  - tier: "intermediate"
    question: "Why run work through a background job system like Celery?"
    options:
      - "It stores long term data permanently"
      - "It runs slow or heavy tasks in the background so the main app stays responsive"
      - "It decides the overall strategy for a task"
      - "It presents results as slides"
    answer: 1
  - tier: "expert"
    question: "What is the role of an observability tool like Langfuse in an AI system?"
    options:
      - "It caches frequent answers for speed"
      - "It connects the AI to external tools and data"
      - "It traces and monitors AI calls so teams can see what worked, what failed, and why"
      - "It hosts the backend workers"
    answer: 2
---

*Prince Vikram* was everything the kingdom admired. He was fearless in battle, sharp in debate, and a brilliant scholar.

The people often whispered that no prince had ever been more prepared to wear the crown.

His coronation was only a month away. Yet something bothered him. Every report he received came from nobles, ministers, and generals. No one ever told him what ordinary people thought.

One evening, *Vikram* wrapped himself in a worn brown cloak and slipped quietly through the castle gates, disguised as just another traveler wandering through the village market.

The streets were alive. Children chased one another between the stalls. Merchants bargained loudly. The smell of curry drifted through the evening air.

*Vikram* stopped beside an elderly woman arranging ripe mangoes.

"They look wonderful," he smiled.

She grinned. "They're sweeter than the royal treasury."

*Vikram* laughed. "You must know a great deal about the kingdom."

"I've lived here for sixty years."

He hesitated. "Tell me, what do you think of the soon to be King?"

The woman sighed. "Our Prince is a capable boy..."

*Vikram* smiled.

Then she continued, "...but not yet a King."

"What makes you say that?" *Vikram* asked, disappointed.

"He'll lead this kingdom into trouble."

"That's a harsh judgment."

"Is it?"

*Vikram* defended himself. "He has won every military tournament, studied under the greatest scholars, modernized the castle, and done everything expected of him."

The old woman quietly picked up another mango.

"All true. He has all the arsenal, but he doesn't know which weapon to draw. A wise king doesn't win wars because he owns every weapon, he wins because he knows exactly which one to use."

That night *Vikram* couldn't sleep. The next morning he summoned his oldest adviser to the Weaponry.

*Prince Vikram* asked his adviser, "Imagine the eastern farms have gone weeks without rain. The rivers are drying. The people fear a great drought. Which weapon do I use to protect my kingdom?"

The adviser picked up a large bronze key.

"This is the Master Key (**MCP**). It doesn't solve the drought. It simply opens every room in the kingdom."

With a turn of the key, doors swung open. The Royal Library. The Weather Observatory. The Granary Records. The Treasury. The Irrigation Maps.

"The key gives us access to knowledge," the adviser explained, "but it does not decide what to do with it."

The adviser then unfurled an enormous battle map across the table. Tiny wooden pieces began moving on their own.

"This," he said, "is the General's Battle Map (**LangChain**)."

"It studies the mission. It asks questions:

What do we know?

What information is missing?

Which experts should we consult?"

The map began issuing orders.

Check rainfall records.

Compare grain reserves.

Estimate how many villages are affected.

Ask the Royal Engineers about reservoir capacity.

*Vikram* watched as information flowed from every room the Master Key had unlocked.

*Vikram* then noticed dozens of blacksmiths working furiously in another hall.

"What are they building?"

The adviser smiled. "The Royal Workshops (**Celery**). Suppose the General decides every reservoir in the kingdom must be inspected. We do not ask the entire council to stand here waiting. We send the work to the Royal Workshops."

The craftsmen immediately spread across the kingdom. Some calculated water reserves. Others inspected canals. Others predicted how long each reservoir would last.

"While the kingdom carries on with its business," the adviser said, "the craftsmen work quietly in the background. When their work is complete, they return with the answers."

*Vikram* smiled. "So difficult work shouldn't stop the kingdom."

As they walked further, another room burst into life. Messengers sprinted in every direction. One rode toward the eastern villages. Another hurried to the treasury. A third informed the Royal Engineers. A fourth updated the kingdom's records.

*Vikram* looked surprised. "What caused all this?"

The adviser pointed toward a beautifully organized network of roads.

"This is the Royal Messenger Network (**n8n**). It never decides what needs to be done. It simply follows the kingdom's standing orders:

When the reservoir report is complete, notify the engineers.

If water falls below safe levels, alert the king.

If supplies become scarce, open the emergency grain stores.

It simply knows who should be informed, where the information should go, and what happens next."

*Vikram* watched dozens of actions happen without anyone shouting a single command.

The adviser picked up a glowing crystal and presented it to the Prince.

"This is **Redis**. It remembers, but only what we need right now. As the drought unfolds, every villager keeps asking the same question:

How much water do we have left?

Rather than sending riders across the kingdom every single time, this Memory Crystal remembers the latest answer. It responds instantly, but only temporarily. When the reservoirs change tomorrow, its memory changes too."

*Vikram* nodded. The adviser led them to the windows and pointed at the west towers overlooking the kingdom.

"See those underground roads? They connect every workshop, warehouse, library, and messenger. That's the Royal Roads (**Railway**), the kingdom's infrastructure."

He then pointed toward the magnificent front gates.

"And that's the Royal Gates (**Vercel**). They are what every visitor sees. When farmers ask for water reports, when governors submit requests, when merchants check grain prices, they all enter through these gates."

*Vikram* then entered another chamber filled with artists: the Royal Storyteller (**Gamma**).

He watched as maps transformed into beautiful illustrations. Dry statistics became clear presentations.

"The council understands numbers. But the people understand stories. So before we ask villages to conserve water, we explain the situation in a way everyone can understand," the adviser said.

Nearby stood a giant wall covered in charts.

"This," said the adviser, "is the Royal Observatory (**Metabase**). It shows the kingdom what is happening."

Multiple charts displayed:

Remaining grain.

Remaining water.

Villages most at risk.

Daily rainfall.

Reservoir levels.

"Ah! So this is how we measure the crisis," *Vikram* exclaimed.

"Indeed," said the adviser. "And now we proceed to the Royal Watchtower (**Langfuse**)."

High above the castle, these watchmen sat silent. They weren't giving orders. They were simply watching.

"They've watched everything. Every recommendation. Every messenger. Every workshop. Every mistake."

*Vikram* looked puzzled. "They don't help?"

"Oh, they do. When the drought ends, they'll tell us:

Which decisions worked.

Which predictions were wrong.

Which villages received aid too late.

Which messages confused the people.

It helps the kingdom become wiser after every mission."

"Now, do you understand?" the adviser smiled and asked the Prince.

*Vikram* looked around the chamber.

"The Master Key (**MCP**) opens the kingdom.

The General (**LangChain**) chooses the strategy.

The Workshops (**Celery**) perform the heavy labor.

The Messenger Network (**n8n**) ensures everyone acts at the right moment.

The Memory Crystal (**Redis**) remembered what mattered.

The Royal Roads (**Railway**) connected the kingdom.

The Royal Gates (**Vercel**) welcomed its people.

The Royal Storyteller (**Gamma**) helped everyone understand.

The Royal Observatory (**Metabase**) revealed the truth.

The Royal Watchtower (**Langfuse**) ensured the kingdom learned from every decision."

The adviser smiled. "And none of them can save the kingdom alone."

*Vikram* finally understood what the old woman had meant.

The strength of a kingdom was never measured by how many tools it possessed. It was measured by the wisdom to know which tool should lead, which should assist, and when they should work together.

## Terminology

**MCP (Model Context Protocol)**: gives an AI model secure access to external tools, data, and systems.

**LangChain**: orchestrates multi step reasoning, deciding what to do and which tools to call.

**Celery**: runs slow or heavy tasks as background jobs so the main application stays responsive.

**n8n**: an automation tool that triggers actions and routes information based on defined rules.

**Redis**: a fast in memory store used for caching and short term memory.

**Railway**: hosts backend services, workers, and infrastructure.

**Vercel**: hosts the frontends and APIs that people interact with.

**Gamma**: turns ideas and data into polished presentations.

**Metabase**: a business intelligence tool that turns data into charts and dashboards.

**Langfuse**: traces and monitors AI calls so teams can see what worked, what failed, and why.

## AI Tools

| Category | Tools | Purpose |
| --- | --- | --- |
| Automation & Workflows | n8n, Celery | Connect systems and execute background jobs |
| Context & Orchestration | MCP, LangChain | Give AI access to tools, data, and multi step reasoning |
| Memory & Data | Redis | Fast caching, sessions, and short term memory |
| Deployment & Infrastructure | Railway, Vercel | Host backends, workers, APIs, and frontends |
| Analytics & Observability | Metabase, Langfuse | Analyze business metrics and monitor AI quality |
| Communication & Presentation | Gamma | Turn ideas into polished presentations |
