---
name: new-story
description: Turn a 3-6 line brief (track, concept, characters, plot beat), plus any images the user uploads, into a full MLStories article — story body, mermaid diagram where useful, 3-tier quiz, LinkedIn summary — and publish it by committing and pushing. Use when the user wants to add a new MLStories post from a short idea.
---

# new-story

Input: a short brief (3-6 lines) describing a track, a concept, the characters
(models/metrics/components personified), and a plot beat — optionally with
one or more images the user uploads to use in the story. Output: a fully
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
   - any images the user uploaded alongside the brief, and where in the
     story each one is meant to go (ask if it's unclear, rather than
     guessing placement).

2. **Determine the next week number and filename.**
   Run `ls src/content/<track>/` and find the highest `week-NN-*` number in
   that track; use `NN + 1`, zero-padded to 2 digits. Slugify the title for
   the filename: `week-<NN>-<kebab-title>.md`.

3. **Reference any uploaded images.** Do NOT create a per article subfolder.
   The user keeps story images in a single shared folder (currently
   `public/images/mlops/week-02/`) and will tell you the exact path and
   filename to use, e.g. `Concepts1.jpeg`. Reference each one in the story body
   with standard markdown using that exact path:
   `![<short alt text>](/images/mlops/week-02/<actual-filename>)`, placed at the
   point in the prose where it's relevant (after the character introductions is
   the usual spot). Always use the real filename the user gives, never a guessed
   one, or the image renders broken. Don't generate or invent images, only use
   what the user provided.

4. **Write the story** directly into
   `src/content/<track>/week-<NN>-<kebab-title>.md` matching the schema in
   `src/content/config.ts`:
   - `title`, `track`, `week`, `description` (<=160 chars, SEO-facing),
     `tagline` (<=40 chars, short hook shown on the story's gradient card),
     `icon` (a single emoji, <=8 chars, shown on the card and story header),
     `characters` (array), `publishDate` (next Monday from today, ISO date),
     `draft: false`, `socialSnippet` (<=280 chars, hook for cross-posting),
     `quiz` (exactly 3 items: one each of `basic`, `intermediate`, `expert`,
     each with `options` and a 0-indexed `answer`). The site's `/quiz` hub
     renders each story's quiz on its own per week page, so questions are
     read straight from this frontmatter.
     **Quiz questions must be purely technical** — they test understanding of
     the actual concept, the real world failure mode, and the fix, NOT recall
     of the story. Never reference the characters, plot, or setting (no "what
     does Query ask Key", no "why did Status stay green", no "in Archi's
     team"). The reader should walk away remembering the concept and its
     issues and fixes, not the narrative. Write questions exactly as you would
     for a plain technical quiz on that topic, and vary which option index is
     correct across the three tiers (do not always put the answer first).
   - Body: 800-1200 words, structured as a fixed sequence of paragraphs
     (see "Story structure" below). No `## Scene` headings.
   - **Diagram**: if the concept has a structure, flow, or sequence worth
     visualizing (most do), include one ` ```mermaid ` fenced code block
     using `flowchart`, `sequenceDiagram`, or similar — written as part of
     the story text. Use this for structural/process diagrams; use the
     user's uploaded images for anything they specifically wanted shown.
   - refer the below themes for the story, 
     if AI/ml concept, then theme = fantasy or action
     if evaluation , then theme = mystery or battleground
     if ML Ops, then theme = building a city/kingdom
   - Body: 800-1200 words, written as **flowing narrative prose with
     dialogue between characters** — no `## Scene` headings. Let the concept
     come out through what the characters say to each other and what
     happens, paragraph by paragraph, the way a short story reads, not a
     slide deck with section breaks.
   - **Diagram**: use the user's uploaded images for anything they specifically wanted shown.
   - Do not reuse character names or plot devices from existing stories in
     the same track unless the brief explicitly asks for a sequel.

   ### Story structure

   Write the body as exactly this sequence of paragraphs, in order:

   1. **Scene paragraph.** Open by setting the scene, e.g. "It's a bright
      morning in the office" or "The town square is quiet before the rush."
      Ground the reader in a place and a time before any character speaks.
      State the actual, concrete task or question the lead character needs
      answered, not an abstract stand in for it. Use a real, nameable example
      (an actual sentence, an actual metric, an actual input) that the rest
      of the story can refer back to by name, e.g. the sentence "The trophy
      did not fit in the suitcase because it was too big" and the question
      of what "it" refers to. Don't write "she needed to know what was
      behind every door" without saying what the door actually contains.
   2. **Character introductions.** Introduce every character from the
      brief in this paragraph. Give each one a name derived from the
      feature/metric/component they represent (not a generic human name),
      and one clear personality trait that reflects how that
      feature/metric/component actually behaves (e.g. a metric that only
      checks one thing is "literal" or "narrow"; a cache is "forgetful" or
      "impatient"). This paragraph is introductions only, not plot.
   3. **The situation.** Lay out the conflict or problem, either as
      narration or as dialogue between the characters (per the dialogue
      rule below).
   4. **Tools paragraph.** Describe each character reaching for or using
      their tool, method, or mechanism, whatever lets them see, sense,
      fix, fail at, or solve the situation. This is where the technical
      mechanism actually gets dramatized (e.g. a metric "pulls out its
      checklist," a retriever "casts its net wider"). When dramatizing
      scoring or weighting, walk through each option's content and the
      reasoning for its score using the concrete example from paragraph 1,
      once. Don't restate the same numbers and reasoning again in the very
      next paragraph when describing normalization or blending; state a
      fact once and refer back to it afterward instead of repeating full
      sentences of reasoning twice in a row, which reads as wordy and
      repetitive. When a word doubles as both a literal object and a
      concept (e.g. "content" behind a door, the "prize" at the end), tie
      it explicitly back to the concrete example so the reader knows what
      it literally is, not just narratively. For a parallel instances of
      the same mechanism beat (many copies of the same process running at
      once), call them "clones" (e.g. "a thousand clones of Query running
      the same job in parallel"), not generic phrasing like "other
      Queries."
   5. **Resolution / remaining paragraphs.** Continue the story to its
      resolution, in flowing prose, following the same dialogue rule. If
      the story includes a scaling, cost, or complexity blowup beat,
      dramatize it as a moment of panic among the characters, with
      dialogue, exclamation, and stakes, not as a flat technical aside. If
      the story includes mitigation techniques (e.g. local window
      attention, caching, splitting into parallel sub crews), deliver them
      as a short verse or poem recited by an authority figure character
      (a commander, a senior model, a lead), not as a flat prose list.
   6. **Glossary paragraph (last paragraph).** Close with a short glossary
      introduced by a `## Terminology` heading. Under it, list each technical
      term, model, feature, or method used in the story, named plainly,
      followed by a one-line plain-language summary of what it actually is.
      Separate the term from its summary with a **colon**, not a dash. Format
      as a short list, e.g.:
      ```
      ## Terminology

      **BLEU**: counts overlapping words between an answer and a reference.
      ```

   ### Writing rules

   - **No dashes or hyphens between words anywhere in the prose** — no em
     dashes, en dashes, or hyphenated compounds (write "well known" not
     "well-known", "real time" not "real-time", and never use "—" or "-" to
     join a sentence). Rephrase with commas or separate sentences instead.
   - **Numbers and symbols, not spelled out words**, for anything
     quantitative: write "3%" not "three percent", "80%" not "eighty
     percent", "1,000 clones" not "a thousand clones". Use the numeral plus
     the symbol (`%`, `$`, etc.) every time a score, weight, percentage, or
     count appears in the prose.
   - **Dialogue always goes on its own line**, never embedded inside a
     paragraph of narration. Any line in quotes is its own line, e.g.:
     ```
     Query walked in and looked around the room.

     "I need to know what's behind every door in this building."

     Nobody answered right away.
     ```
     Don't write `Query said, "I need to know..." and then turned to leave`
     as one inline sentence; break the quoted part onto its own line.

5. **Validate before moving on**: quiz has exactly 3 entries with one of
   each tier, `answer` indices are in range, `description`, `tagline`, and
   `socialSnippet` are under their length limits, every uploaded image is
   referenced somewhere in the body, the paragraph order matches the "Story
   structure" above (scene, then characters, then situation, then tools,
   then resolution, then glossary), no dialogue line is embedded inside a
   narration paragraph, and no hyphen or dash joins two words anywhere in
   the body (search for `-` and `—` and rewrite any hit). **Count the body's
   words** (frontmatter excluded) — if it's under 800, expand the prose with
   more concrete detail and dialogue rather than padding; don't finalize a
   short draft and call it done. (A first real run of this skill produced
   442 words by stopping once the plot beats were covered — see
   `memory.md`.)

6. **Write a LinkedIn summary** (2-4 lines, no hashtags, hook-first — written
   for someone scrolling, not for SEO) and prepend an entry to
   `social/linkedin-posts.md`:
   ```
   ## <title> (Week <NN>, <track>)
   https://www.orivale.com/<track>/<slug>

   <2-4 line summary>
   ```
   Then **append the story to the "Pending" list in
   `social/newsletter-queue.md`** (`- [ ] <title> — https://www.orivale.com/<track>/<slug>`).
   Do NOT send any email or create any Beehiiv draft — newsletters are sent
   manually, about one story every 15 days, decoupled from git pushes (see the
   note in `memory.md`). There is no auto-crosspost workflow anymore.
   The reusable email body lives at `social/email-template.html` (paste into a
   Beehiiv HTML block). When the user is about to send a story, fill its five
   placeholders (`{{TRACK_WEEK}}`, `{{TITLE}}`, `{{IMAGE_URL}}`, `{{TEASER}}`,
   `{{LINK}}`) — the teaser reuses the LinkedIn blurb; the image is the story's
   image on `https://www.orivale.com/images/...`.

7. **Commit and push**:
   ```
   git add src/content/<track>/week-<NN>-<kebab-title>.md social/linkedin-posts.md social/newsletter-queue.md
   git commit -m "Add story: <title>"
   git push -u origin <current-branch>
   ```
   Vercel auto-deploys on push — no further "update the webpage" step is
   needed. The OG image is generated automatically from the frontmatter at
   build time, and the new story's quiz questions are picked up automatically
   by the centralized `/quiz` page and the homepage's quiz preview.

8. **Report back** with: the file path, the track/week, a one-line summary
   of the plot, and the LinkedIn summary text — not the full story again.

9. **Update `memory.md`** if anything in this run revealed a preference or
   correction worth keeping (e.g. the user adjusted tone, rejected a
   character choice, changed quiz difficulty expectations). Append a dated
   entry; don't rewrite history that's already there.

## Notes

- **"AI Governance" and "AI for Artists" are not tracks.** They are two
  special read-only tiles on the Select a Story page (`src/pages/stories.astro`,
  the `comingSoon` array). Never add them to `TRACKS`, never create content
  collections for them, and never give them quiz questions or include them in
  the `/quiz` hub. They are standalone read-only stories, separate from the
  `concepts`/`evaluation`/`mlops` track and quiz machinery. Only the three real
  tracks get the full story-plus-quiz treatment described above.
- Never invent a track if the brief is genuinely ambiguous — ask the user.
- If `src/content/<track>/` has no existing stories, start at `week-01`.
- Images come only from what the user uploads with the brief — never
  generate or source images. If the user gives no images, just write the
  story with a mermaid diagram where useful, same as before.
- This skill touches story content, story images, the LinkedIn log, and
  `memory.md`. It does not modify layouts, components, or config — if the
  story needs a new capability the schema doesn't support, stop and flag it
  instead of improvising.
