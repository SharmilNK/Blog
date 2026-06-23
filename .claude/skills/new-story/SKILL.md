---
name: new-story
description: Turn a 3-6 line brief (track, concept, characters, plot beat) into a full MLStories article — story body, mermaid diagram where useful, 3-tier quiz — and publish it by committing and pushing. Use when the user wants to add a new MLStories post from a short idea.
---

# new-story

Input: a short brief (3-6 lines) describing a track, a concept, the characters
(models/metrics/components personified), and a plot beat. Output: a fully
formed content file committed and pushed, ready for Vercel to deploy.

## Steps

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
     `characters` (array), `publishDate` (next Monday from today, ISO date),
     `draft: false`, `socialSnippet` (<=280 chars, hook for cross-posting),
     `quiz` (exactly 3 items: one each of `basic`, `intermediate`, `expert`,
     each with `options` and a 0-indexed `answer`).
   - Body: 800-1200 words, 3-5 named `## Scene` headings, the concept
     dramatized through the characters from the brief.
   - **Diagram**: if the concept has a structure, flow, or sequence worth
     visualizing (most do), include one ` ```mermaid ` fenced code block
     using `flowchart`, `sequenceDiagram`, or similar — written as part of
     the story text, not a separate image asset. It renders client-side via
     `StoryLayout.astro`, so no image generation step is needed.
   - Do not reuse character names or plot devices from existing stories in
     the same track unless the brief explicitly asks for a sequel.

4. **Validate against the schema by eye**: quiz has exactly 3 entries with
   one of each tier, `answer` indices are in range, `description` and
   `socialSnippet` are under their length limits.

5. **Commit and push**:
   ```
   git add src/content/<track>/week-<NN>-<kebab-title>.md
   git commit -m "Add story: <title>"
   git push -u origin <current-branch>
   ```
   Vercel auto-deploys on push — no further "update the webpage" step is
   needed. The OG image and quiz block are generated automatically from the
   frontmatter at build time.

6. **Report back** with: the file path, the track/week, and a one-line
   summary of the plot — not the full story text again.

## Notes

- Never invent a track if the brief is genuinely ambiguous — ask the user.
- If `src/content/<track>/` has no existing stories, start at `week-01`.
- This skill only touches one new content file. It does not modify layouts,
  components, or config — if the story needs a new capability the schema
  doesn't support, stop and flag it instead of improvising.
