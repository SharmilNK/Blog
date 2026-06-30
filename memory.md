# Agent memory

When you learn something new about how this project should be run —
a correction, a preference, a recurring mistake to avoid — add a dated
entry below. Read this file before running the `new-story` skill (or any
other automation here) so corrections compound across sessions instead of
resetting every time.

## Preferences

- 2026-06-23: No MCP servers for this project. Git push, the Beehiiv
  cross-post, and OG image generation are single deterministic actions —
  handled with plain scripts/GitHub Actions, not MCP tools. Revisit only if
  a backlog tool (e.g. Notion) or multiple distribution channels get added.
- 2026-06-23: Every published story also gets a 2-4 line LinkedIn summary,
  appended to `social/linkedin-posts.md` (see `new-story` skill).
- 2026-06-23: First real `new-story` run came in at 442 words (target is
  800-1200) — the skill's word-count instruction wasn't forceful enough,
  the model stopped once the plot beats were covered rather than checking
  length. Fixed by adding an explicit word-count check to the skill's
  validation step. Always count the body words before finalizing, not just
  eyeball the prose.
- 2026-06-23: When invoking the `new-story` skill via the Skill tool, the
  rendered prompt can be a stale cached copy of `SKILL.md` if the file was
  edited earlier in the same session. If the skill's behavior doesn't match
  the file on disk, trust the file on disk and follow it directly rather
  than the tool's rendered output.
- 2026-06-23: Redesign based on user mockup screenshots changed several
  defaults — keep these in mind for future stories and pages:
  - Stories are flowing prose with character dialogue, not `## Scene N`
    headers. Don't reintroduce scene headings.
  - Quizzes are centralized: one `QuizWidget.astro` (used on `/quiz` and as
    a homepage preview) pulls questions from every story's frontmatter.
    Stories still need the `quiz` array in frontmatter, but never embed a
    quiz block inside the story body itself.
  - Story frontmatter now requires `tagline` (<=40 chars) and `icon` (one
    emoji) in addition to the original fields — used for the gradient story
    cards and header.
  - When the user shares a mockup/screenshot and later says "I don't see
    the PR," that means: don't just push to the feature branch and stop —
    open an actual PR via the GitHub MCP tools once changes are pushed.
- 2026-06-23: Removed the auto-generated `CharacterAvatars` (colored circles
  with initials) — the user wants to upload their own images per story
  instead. `new-story` now copies any user-uploaded images into
  `public/images/<track>/week-<NN>/` and references them with markdown
  `![alt](/images/...)` syntax in the body. Never generate or invent images;
  if the user doesn't provide any, just skip images for that story (a
  mermaid diagram still covers structural concepts where useful).
- 2026-06-23: `@astrojs/sitemap` (^3.2.1) crashes Vercel builds on
  `astro:build:done` with "Cannot read properties of undefined (reading
  'reduce')" — happens regardless of page content, looks like a version
  mismatch with `astro@^4.16.0` rather than anything in this repo's pages.
  Disabled the integration in `astro.config.mjs` to unblock deploys; RSS
  still works. Don't re-add `sitemap()` without testing a real
  `npm install && npm run build` first — this sandbox can't run npm
  (registry blocked), so it was never verified, only disabled.
- 2026-06-23: User rejected the free-form prose style and gave a fixed
  paragraph structure for every story going forward: (1) scene-setting
  paragraph, (2) introduce every character by a name derived from what
  they represent plus a matching personality, (3) the situation/conflict,
  (4) each character reaching for their tool/method to address it,
  (5) resolution, (6) a closing glossary paragraph mapping each technical
  term to a one-line plain summary. Also: no hyphens or dashes joining
  words anywhere in the prose, and every quoted dialogue line must sit on
  its own line, never embedded inside a narration paragraph. Full detail
  is in `.claude/skills/new-story/SKILL.md` under "Story structure" and
  "Writing rules" — this supersedes the earlier "flowing narrative prose"
  note above; both stories already published predate this rule and have
  not been retrofitted yet.
- 2026-06-24: Refining the "Story structure" paragraphs from a real
  rewrite (Attention Heist) surfaced more concrete rules, now in
  `SKILL.md`:
  - Paragraph 1 (scene) must state the actual task/question the lead
    character needs answered, not just "she needed to know what was
    behind every door" in the abstract. Use a concrete example (an actual
    sentence, an actual metric, an actual input) the whole story can
    reference by name.
  - When dramatizing scoring/weighting (the "situation" and "tools"
    paragraphs), explain each door/option's content and the reasoning for
    its score using the concrete example once, then move on. Don't restate
    the same numbers and reasoning again in the very next paragraph when
    describing normalization or blending; that reads as repetitive and
    wordy. State a fact once, reuse it by reference afterward.
  - When the same word doubles as both a literal object and a concept
    (e.g. "content" behind a door, the "prize" at the end), tie it
    explicitly back to the concrete example so it's clear what it
    literally is, not just narratively.
  - Use "clones" for the parallel-instances-of-the-same-mechanism beat
    (e.g. "a thousand clones of Query running the same job in parallel"),
    not generic phrasing like "a thousand other Queries."
  - The scaling/cost-blowup paragraph should be dramatized as a moment of
    panic among the characters (dialogue, exclamation, stakes), not stated
    as a matter-of-fact technical aside.
  - The mitigation techniques (local-window attention, caching, splitting
    into parallel sub-crews) should be delivered as a short verse/poem
    from an authority-figure character, not a flat prose list.
  - All six refinements above are now also written directly into
    `SKILL.md`'s "Story structure" section, not just here.
- 2026-06-24: Numbers and percentages must be written with numerals and
  symbols in story prose, not spelled out, e.g. "3%" not "three percent",
  "80%" not "eighty percent". Added to `SKILL.md`'s "Writing rules".
- 2026-06-28: Additional formatting rules for story prose clarity:
  - Character names (personified concepts) must stay in *italics* throughout
    the entire story, not just in the introduction paragraph.
  - Important terminology and technical concepts must be in **bold** throughout,
    every time they are referenced, not just the first mention.
  - All questions must end with a question mark, even short interrogatives
    in dialogue.
  - Line breaks for readability: dialogue exchanges should have visual
    separation, narrative beats should be spaced to avoid dense paragraphs.
  - User-provided character sketch images should be integrated after the
    character introduction section to reinforce the visual identity of the team.
  - When embedding an uploaded image, the markdown `![](...)` path must use the
    image's ACTUAL filename as uploaded (e.g. `MLOps1.jpeg`, `Concepts1.jpeg`),
    not a guessed or invented name. A mismatch silently renders a broken image.
    Confirm the real filename the user gives before writing the reference.
  - 2026-06-28: User does NOT want a separate image folder per article. Do not
    create `public/images/<track>/week-<NN>/` subfolders per story. The user
    keeps images in a single shared folder (currently
    `public/images/mlops/week-02/`) and will tell you the exact path/filename to
    reference (e.g. `/images/mlops/week-02/Concepts1.jpeg`). Reference that path
    directly; do not reorganize images into per-story folders.
  - 2026-06-28: Quiz questions must be COMPLETELY TECHNICAL. They test the
    concept, its real world failure modes, and the fix, never recall of the
    story. Do not reference characters, plot, or setting (no "what does Query
    ask Key", no "why did Status stay green", no "in Archi's relay team"). The
    reader should remember the concept, its issues, and its fixes, not the
    narrative. Write each question as if it were a plain technical quiz on that
    topic. Also vary which option is correct across the three tiers rather than
    always putting the answer first. All four existing stories' quizzes were
    rewritten this way; same rule now lives in `SKILL.md`.
