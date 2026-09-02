# Blog
AI/ML concepts as stories

**Live at:** https://www.orivale.com

A weekly newsletter and blog where ML/AI concepts are taught through storytelling. Every model, algorithm, or system becomes a character. Every concept becomes a scene — with drama, suspense, conflict, and resolution. The goal is to make technically dense ideas stick, for both technical and non-technical readers.

The idea
To be useful for practitioners brushing up on concepts, engaging enough that a non-technical person can follow the plot.
Each article takes one concept and dramatizes it:

Three content tracks
ML/AI Concepts — foundational and advanced ideas: transformers, embeddings, fine-tuning, RAG, reinforcement learning, etc. Framed as origin stories, heists, or character studies.
Evaluation — how we measure whether models actually work: BLEU, ROUGE, RAGAS, LLM-as-Judge, human eval. Framed as courtroom dramas, audits, or investigations.
ML/AI Ops — keeping models alive in production: drift detection, CI/CD for ML, observability, prompt versioning. Framed as thrillers, disaster recovery stories, or heist films.

Quiz section
Every concept gets a quiz with three difficulty tiers:

Basic — can you recall the concept from the story?
Intermediate — can you apply it to a slightly different scenario?
Expert — can you reason about edge cases, tradeoffs, or real production situations?

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
6. **Newsletter (manual).** Publishing to the site and emailing subscribers are
   fully decoupled. There is no auto-email on push. About once every 15 days,
   pick the top story from `social/newsletter-queue.md`, compose a post in
   Beehiiv (reuse the blurb from `social/linkedin-posts.md`, link to the story
   on `https://www.orivale.com`), send it, and move the item to "Sent". The
   subscribe box on the site is the Beehiiv hosted form embed
   (`src/components/SubscribeForm.astro`).

No feedback loop (quiz analytics, reader tracking) is implemented yet —
quizzes are reveal-on-click and entirely client-side.
