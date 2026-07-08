# Blog
AI/ML concepts as stories

**Live at:** https://www.orivale.com

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
Each story is flowing prose with dialogue between characters (no scene headers)
Each character = one model, metric, or system component


Quiz section
Every concept gets a quiz with three difficulty tiers:

Basic — can you recall the concept from the story?
Intermediate — can you apply it to a slightly different scenario?
Expert — can you reason about edge cases, tradeoffs, or real production situations?

Quizzes aren't embedded per-article — every question lives in a single,
centralized quiz experience (`/quiz`, and a "latest stories" preview on the
homepage) that pulls from every story's frontmatter. Over time they build
into a full concept bank.

Tech stack
LayerToolPurposeSite frameworkAstroStatic site, markdown-native, fastStylingTailwind CSSClean, responsive designDeploymentVercelAuto-deploys on every git pushEmail subscribersBeehiiv (free tier)Subscriber list, email sendsVersion controlGitHubEvery article is a .md fileDomainPorkbun + VercelLive at https://www.orivale.com

Folder structure (planned)
/Blog
├── src/
│   ├── pages/
│   │   ├── index.astro          ← homepage
│   │   ├── about.astro          ← about + subscribe
│   │   ├── concepts/            ← ML/AI concept stories
│   │   ├── evaluation/          ← evaluation stories
│   │   ├── mlops/               ← mlops stories
│   │   └── quiz/                ← single centralized quiz page
│   ├── layouts/
│   │   ├── BaseLayout.astro     ← nav, head (no footer)
│   │   └── StoryLayout.astro    ← article template, flowing prose
│   ├── lib/
│   │   └── tracks.ts            ← shared track metadata (colors, icons, copy)
│   ├── components/
│   │   ├── TopicCard.astro
│   │   ├── StoryCard.astro
│   │   ├── SubscribeForm.astro     ← placeholder, not wired to Beehiiv yet
│   │   └── QuizWidget.astro        ← centralized quiz, used on / and /quiz
│   └── content/
│       ├── concepts/            ← markdown story files
│       ├── evaluation/
│       └── mlops/
├── public/
│   └── images/<track>/week-XX/  ← per-story images you upload via /new-story
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

The Attention Heist — how transformers decide what to focus on (Concepts) — published as the sample story
The Model's Trial — BLEU vs ROUGE vs RAGAS in a courtroom (Evaluation)
Drift Happens — data drift in production and why nobody noticed (MLOps)
The Embedding Party — how vectors find their nearest neighbors (Concepts)
The Shadow Deployment — canary releases and A/B testing for ML models (MLOps)

## Running locally

```
npm install
npm run dev
```

`npm run build` produces a static site (Astro `output: 'static'` by
default) — deploy it on Vercel as-is, no serverless functions required.

## Automated publishing workflow

The manual "pick concept → outline → draft → quiz → push → copy to
Beehiiv" loop above is now mostly automated:

1. **Brief in, story out.** This is where you provide the prompt for the next
   article — run the `/new-story` skill in Claude Code chat with a 3-6 line
   brief: track, concept, characters, plot beat. There's no form on the live
   site for this; the site's "subscribe" form is for readers, not for
   submitting story ideas. The skill's full prompt — what it asks for, how it
   structures a story, the validation it runs before finalizing — lives in
   `.claude/skills/new-story/SKILL.md`; read it to see or change exactly how
   stories get written. You can also attach images to the same chat message
   as your brief; the skill copies them into `public/images/{track}/week-XX/`
   and embeds them in the story where they fit. The skill writes the full
   `.md` file — story body as flowing prose with character dialogue, an
   embedded Mermaid diagram where useful, a 3-tier quiz, and a `tagline`/
   `icon` for the story card — into the right `src/content/{track}/week-XX-*.md`,
   then commits and pushes.
2. **Push = publish.** Vercel auto-deploys on every push to `main` — there is
   no separate "update the webpage" step.
3. **Images and diagrams.** Any images you upload with your brief are placed
   under `public/images/{track}/week-XX/` and referenced directly in the
   story markdown — nothing is auto-generated. Structural/process diagrams
   are instead authored as ` ```mermaid ` fenced code blocks in the story
   markdown and rendered client-side via mermaid.js in `StoryLayout.astro`.
4. **OG/social image pipeline.** `astro-og-canvas` (`src/pages/open-graph/[...route].png.ts`)
   generates a branded PNG per story at *build time* from its title and
   description — no manual hero image needed, and the site stays fully
   static.
5. **SEO/distribution.** `src/pages/rss.xml.js` generates an RSS feed;
   `src/components/SEO.astro`
   sets canonical/OG/Twitter-card meta tags on every page using the
   auto-generated OG image.
6. **Cross-post to Beehiiv.** `.github/workflows/beehiiv-crosspost.yml` runs
   on every push to `main` that adds a story file, and calls
   `scripts/crosspost-beehiiv.mjs` to create a matching Beehiiv draft via
   their API (`BEEHIIV_API_KEY` / `BEEHIIV_PUBLICATION_ID` repo secrets
   required). It creates a draft, not a send — review and hit send in Beehiiv
   manually for now. Verify field names against Beehiiv's current API docs
   before relying on this; it hasn't been exercised against a live account.

No feedback loop (quiz analytics, reader tracking) is implemented yet —
quizzes are reveal-on-click and entirely client-side.
