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
  - Character names must have distinct first letters: each story renders
    its characters as colored circles with just the initial, so e.g.
    "Drift"/"The Monitor"/"The Dashboard" was renamed to
    "Drift"/"Monitor"/"Status" to avoid two characters both showing "T".
  - No image-generation API is available in this environment — the
    character "faces" are CSS/SVG colored circles with initials, not actual
    generated art. If an image-gen tool becomes available later, this is
    the place to swap it in (`src/components/CharacterAvatars.astro`).
  - When the user shares a mockup/screenshot and later says "I don't see
    the PR," that means: don't just push to the feature branch and stop —
    open an actual PR via the GitHub MCP tools once changes are pushed.
