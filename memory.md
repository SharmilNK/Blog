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
