# Blog
AI/ML concepts as stories

Here's a clean write-up you can use as your foundation doc — save this as README.md in your repo.

MLStories — Process & Idea Doc
What this is
A weekly newsletter and blog where ML/AI concepts are taught through storytelling. Every model, algorithm, or system becomes a character. Every concept becomes a scene — with drama, suspense, conflict, and resolution. The goal is to make technically dense ideas stick, for both technical and non-technical readers.

The idea
Most ML content is either too academic (papers, textbooks) or too shallow (Twitter threads). MLStories sits in the middle — rigorous enough to be useful for practitioners brushing up on concepts, engaging enough that a non-technical person can follow the plot.
Each article takes one concept and dramatizes it:

Attention mechanism → a heist where Query, Key, and Value decide who gets access to what
Model drift → a thriller where nobody noticed the data changed for three weeks
BLEU vs RAGAS → a courtroom drama where metrics put each other on trial

The format trains the writer (you) to deeply understand a concept before you can narrate it. It also builds a public knowledge portfolio.

Three content tracks
ML/AI Concepts — foundational and advanced ideas: transformers, embeddings, fine-tuning, RAG, reinforcement learning, etc. Framed as origin stories, heists, or character studies.
Evaluation — how we measure whether models actually work: BLEU, ROUGE, RAGAS, LLM-as-Judge, human eval. Framed as courtroom dramas, audits, or investigations.
ML/AI Ops — keeping models alive in production: drift detection, CI/CD for ML, observability, prompt versioning. Framed as thrillers, disaster recovery stories, or heist films.

Publishing cadence

1 article per week, every Monday
Each article covers exactly one concept
Story length: 800–1200 words
Each story has 3–5 named "scenes"
Each character = one model, metric, or system component


Quiz section
Every concept gets a quiz with three difficulty tiers:

Basic — can you recall the concept from the story?
Intermediate — can you apply it to a slightly different scenario?
Expert — can you reason about edge cases, tradeoffs, or real production situations?

Quizzes are tied to the week's article. Over time they build into a full concept bank.

Tech stack
LayerToolPurposeSite frameworkAstroStatic site, markdown-native, fastStylingTailwind CSSClean, responsive designDeploymentVercelAuto-deploys on every git pushEmail subscribersBeehiiv (free tier)Subscriber list, email sendsVersion controlGitHubEvery article is a .md fileDomainTBDConnect later via Vercel settings

Folder structure (planned)
/Blog
├── src/
│   ├── pages/
│   │   ├── index.astro          ← homepage
│   │   ├── concepts/            ← ML/AI concept stories
│   │   ├── evaluation/          ← evaluation stories
│   │   ├── mlops/               ← mlops stories
│   │   └── quiz/                ← quiz pages per article
│   ├── layouts/
│   │   ├── BaseLayout.astro     ← nav, footer, head
│   │   └── StoryLayout.astro    ← article template with scene structure
│   ├── components/
│   │   ├── TopicCard.astro
│   │   ├── StoryCard.astro
│   │   └── QuizBlock.astro
│   └── content/
│       ├── concepts/            ← markdown story files
│       ├── evaluation/
│       └── mlops/
├── public/
├── astro.config.mjs
├── tailwind.config.mjs
└── README.md

Writing workflow (per article)

Pick a concept from your backlog
Identify the characters (models, metrics, components)
Write a 3–5 scene outline
Draft the story in /src/content/{track}/week-XX-title.md
Write 3 quiz questions (one per difficulty level) in the frontmatter
git push → Vercel auto-deploys
Copy to Beehiiv → send to subscribers


First 5 article ideas

The Attention Heist — how transformers decide what to focus on (Concepts)
The Model's Trial — BLEU vs ROUGE vs RAGAS in a courtroom (Evaluation)
Drift Happens — data drift in production and why nobody noticed (MLOps)
The Embedding Party — how vectors find their nearest neighbors (Concepts)
The Shadow Deployment — canary releases and A/B testing for ML models (MLOps)
