# Teaching Notes

## Learner
- Contact: _(kept private — not stored in this public repo)_
- Goal: **AI Engineer** — build & ship LLM apps. See [MISSION.md](./MISSION.md).
- Background: *"some coding"* — can write scripts / small apps, not an expert.
  Keep code approachable; explain, don't assume.
- Math: **explicitly minimal.** Intuition only, no derivations. Firm preference —
  respect it in every lesson.
- Time: 2–3 hrs/day available. Can handle a solid pace and multiple short
  lessons per session.

## Teaching approach
- Weight the roadmap toward the AI-Engineer destination. Phases 3–6 (math, ML
  theory, DL, NLP) taught as *light conceptual literacy* — "enough to be
  conversant and to build," not academic depth.
- Keep each lesson short and tightly scoped (working-memory limits), even though
  sessions can be long. Chain several short lessons rather than one big one.
- Every lesson ends with: a retrieval check, a recommended primary source, and a
  nudge to ask the teacher (me) followup questions.

## DEPTH + DIAGRAMS (user request, 2026-07-16) — important
- User wants **richer, more detailed explanations**, not compressed one-line
  textbook definitions. Explain *why* and *how*, build real intuition, use
  concrete examples and analogies. "A solid edge / solid understanding."
- **Include diagrams.** As topics get more complex, a diagram is often required,
  not optional. Prefer **self-contained inline SVG or CSS diagrams** (they work
  offline via file://, on Vercel, and print) over CDN-dependent libraries like
  mermaid. Build reusable diagram components in `./assets/` (e.g. `diagrams.css`
  or small SVG snippets) so lessons stay consistent.
- Balance with the "short lesson" rule: depth ≠ bloat. Go deeper per concept, but
  still one tight concept per lesson. Longer, well-structured prose + a diagram is
  fine; rambling is not.
- Lessons 1–4 (foundations) were approved as-is at basic depth. Apply the fuller
  treatment from **Lesson 05 onward**, and retrofit earlier lessons on request.

## Hosting / deployment
- Repo: `github.com/numaanahmed3110/ai_learnings` — **PUBLIC**, on branch `main`.
- Deploy: **Vercel**, static site, Root Directory `./` (repo root). Auto-deploys
  on every push to `main`.
- `.vercelignore` keeps personal files (`NOTES.md`, `learning-records/`,
  `.claude/`) off the deployed public site.
- **Guardrail:** the repo is public — never commit secrets or personal data.
  User's email was redacted from tracked files (2026-07-16); by their choice it
  remains in old commit history (not scrubbed).

## Open questions to resolve later
- Preferred programming language for hands-on lessons (Python is the default for
  AI engineering; JS/TS also viable). Ask when we reach the first coding/API
  lesson (Phase 7).
- Which model provider for hands-on API work (Claude / OpenAI / open-source).
  Ask at Phase 7.
