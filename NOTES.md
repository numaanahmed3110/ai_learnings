# Teaching Notes

## Learner
- Contact: _(kept private — not stored in this public repo)_
- Goal: **AI Engineer** — build & ship LLM apps. See [MISSION.md](./MISSION.md).
- Background: **Computer-science engineering student** with *"some coding"* —
  comfortable with CS fundamentals and basic math notation, but not an expert
  dev. Keep code approachable; CS analogies (algorithms, data structures,
  caching/RAM, APIs, compilation) land well.
- Math: **stays light**, but formulas ARE welcome when paired with plain-English
  "what it means / why it's used / where it's used" + an analogy. No heavy
  derivations or proofs. (Refined 2026-07-16.)
- Time: 2–3 hrs/day available. Can handle a solid pace and multiple lessons per
  session.

## Teaching approach
- Weight the roadmap toward the AI-Engineer destination. Phases 3–6 (math, ML
  theory, DL, NLP) taught as *light conceptual literacy* — "enough to be
  conversant and to build," not academic depth.
- Keep each lesson short and tightly scoped (working-memory limits), even though
  sessions can be long. Chain several short lessons rather than one big one.
- Every lesson ends with: a retrieval check, a recommended primary source, and a
  nudge to ask the teacher (me) followup questions.

## DEPTH + DIAGRAMS (user request, refined 2026-07-16) — IMPORTANT
The bar going forward: **complete, concrete understanding of every subtopic**,
not textbook one-liners. For each topic, a lesson should cover:
- **All the keywords / buzzwords** by name, each explained (so no jargon he'll
  hit later is a mystery).
- **How it actually works** — the mechanism, not just the definition.
- **Where & how it's used** — concrete, real examples.
- **The mental model** — "how should I think about this?" — plus analogies
  (CS analogies especially: algorithms, data structures, RAM/cache, APIs).
- **Diagrams** where they help understanding — often required, not optional.
  Self-contained **inline SVG / HTML-CSS** (work offline, on Vercel, and print);
  UML-style flow/sequence where it fits. Reusable styles in
  [assets/diagrams.css](./assets/diagrams.css). Avoid CDN libs (mermaid/PlantUML
  servers) so nothing breaks offline.
- **Math**: light but present. A formula is fine *with* plain-English meaning +
  why/where it's used + an analogy. No derivations/proofs. (Numaan is a CS eng
  student — basic notation is comfortable.)

Balance: depth ≠ bloat. Still ~one concept per lesson; go deep on that one thing
with good structure, examples, and a diagram — don't ramble.

Lessons 1–4 approved at basic depth. Full treatment starts at **Lesson 05**;
retrofit earlier lessons on request.

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
