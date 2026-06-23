---
name: new-story
description: Turn a 3-6 line brief (track, concept, characters, plot beat) into a full MLStories article — story body, mermaid diagram where useful, 3-tier quiz, LinkedIn summary — and publish it by committing and pushing. Use when the user wants to add a new MLStories post from a short idea.
---

# new-story

Input: a short brief (3-6 lines) describing a track, a concept, the characters
(models/metrics/components personified), and a plot beat. Output: a fully
formed content file plus a LinkedIn summary, committed and pushed, ready for
Vercel to deploy.

## Steps

0. **Read `memory.md`** at the repo root first. It holds corrections and
   preferences learned across past runs of this skill (tone, conventions,
   things to avoid). Apply anything relevant before writing.

1. **Parse the brief.** Identify:
   - `track`: one of `concepts`, `evaluation`, `mlops`. If not stated, infer
     from the concept (e.g. drift/CI/CD → mlops, BLEU/RAGAS → evaluation,
     transformers/embeddings → concepts).
   - `characters`: the personified entities.
   - the core plot/conflict the user described.

2. **Determine the next week number and filename.**
   Run `ls src/content/<track>/` and find the highest `week-NN-*` number in
   that track; use `NN + 1`, zero-padded to 2 digits. Slugify the title for
   the filename: `week-<NN>-<kebab-title>.md`.

3. **Write the story** directly into
   `src/content/<track>/week-<NN>-<kebab-title>.md` matching the schema in
   `src/content/config.ts`:
   - `title`, `track`, `week`, `description` (<=160 chars, SEO-facing),
     `tagline` (<=40 chars, short hook shown on the story's gradient card),
     `icon` (a single emoji, <=8 chars, shown on the card and story header),
     `characters` (array — pick names whose **first letters are distinct**,
     since the story page renders each character as a colored circle with
     just their initial; avoid names that share a first letter, and avoid
     "The X" naming since it collides with other "The"-prefixed names),
     `publishDate` (next Monday from today, ISO date), `draft: false`,
     `socialSnippet` (<=280 chars, hook for cross-posting),
     `quiz` (exactly 3 items: one each of `basic`, `intermediate`, `expert`,
     each with `options` and a 0-indexed `answer` — this still lives in
     frontmatter even though it's no longer rendered inline on the story
     page; the site's centralized `/quiz` page pulls questions from every
     story's frontmatter automatically, so no extra step is needed here).
   - Body: 800-1200 words, written as **flowing narrative prose with
     dialogue between characters** — no `## Scene` headings. Let the concept
     come out through what the characters say to each other and what
     happens, paragraph by paragraph, the way a short story reads, not a
     slide deck with section breaks.
   - **Diagram**: if the concept has a structure, flow, or sequence worth
     visualizing (most do), include one ` ```mermaid ` fenced code block
     using `flowchart`, `sequenceDiagram`, or similar — written as part of
     the story text, not a separate image asset. It renders client-side via
     `StoryLayout.astro`, so no image generation step is needed.
   - Do not reuse character names or plot devices from existing stories in
     the same track unless the brief explicitly asks for a sequel.

4. **Validate before moving on**: quiz has exactly 3 entries with one of
   each tier, `answer` indices are in range, `description`, `tagline`, and
   `socialSnippet` are under their length limits, `characters` have distinct
   first letters. **Count the body's words** (frontmatter excluded) — if
   it's under 800, expand the prose with more concrete detail and dialogue
   rather than padding; don't finalize a short draft and call it done. (A
   first real run of this skill produced 442 words by stopping once the
   plot beats were covered — see `memory.md`.)

5. **Write a LinkedIn summary** (2-4 lines, no hashtags, hook-first — written
   for someone scrolling, not for SEO) and prepend an entry to
   `social/linkedin-posts.md`:
   ```
   ## <title> (Week <NN>, <track>)
   <link, once domain is known: /<track>/<slug>>

   <2-4 line summary>
   ```

6. **Commit and push**:
   ```
   git add src/content/<track>/week-<NN>-<kebab-title>.md social/linkedin-posts.md
   git commit -m "Add story: <title>"
   git push -u origin <current-branch>
   ```
   Vercel auto-deploys on push — no further "update the webpage" step is
   needed. The OG image is generated automatically from the frontmatter at
   build time, and the new story's quiz questions are picked up automatically
   by the centralized `/quiz` page and the homepage's quiz preview.

7. **Report back** with: the file path, the track/week, a one-line summary
   of the plot, and the LinkedIn summary text — not the full story again.

8. **Update `memory.md`** if anything in this run revealed a preference or
   correction worth keeping (e.g. the user adjusted tone, rejected a
   character choice, changed quiz difficulty expectations). Append a dated
   entry; don't rewrite history that's already there.

## Notes

- Never invent a track if the brief is genuinely ambiguous — ask the user.
- If `src/content/<track>/` has no existing stories, start at `week-01`.
- This skill only touches story content, the LinkedIn log, and `memory.md`.
  It does not modify layouts, components, or config — if the story needs a
  new capability the schema doesn't support, stop and flag it instead of
  improvising.
