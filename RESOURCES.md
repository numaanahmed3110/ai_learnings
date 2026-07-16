# AI Engineer Resources

Curated, high-trust sources for the [mission](./MISSION.md). Knowledge for
lessons is drawn from here — not from parametric guesses. Every non-Reddit URL
below was fetched and confirmed to resolve (2026-07-16).

## Knowledge

### Orientation & the role
- [Roadmap: AI Engineer — roadmap.sh](https://roadmap.sh/ai-engineer)
  Your spine for the whole journey. Reach for it first to see the ordered topic
  map and how the AI Engineer role differs from ML Engineer / AI Researcher.
- [Essay: The Rise of the AI Engineer — swyx (Latent.Space)](https://www.latent.space/p/ai-engineer)
  The essay that coined "AI Engineer." Read up front to understand why the role
  is distinct from ML research and what the job actually is.
- [Book (free companion repo): AI Engineering — Chip Huyen](https://github.com/chiphuyen/aie-book)
  The definitive reference for this exact path. Use the free chapter summaries,
  notes, and curated links for the end-to-end stack (full book is paid).

### Foundations (AI / ML / DL / LLMs) — intuition-first, low math
- [Video: AI, ML, Deep Learning & Generative AI Explained — IBM Technology](https://www.youtube.com/watch?v=qYNweeDHiyU)
  10-min whiteboard explainer. Day-one resource for the AI vs ML vs DL vs GenAI
  nesting. **Primary source for Lesson 01.**
- [Course: Machine Learning Crash Course — Google for Developers](https://developers.google.com/machine-learning/crash-course)
  Free, interactive, intuition-first. Use for light ML/DL literacy (models,
  data, overfitting, neural nets, embeddings) without heavy math.
- [Video series: Neural Networks — 3Blue1Brown](https://www.3blue1brown.com/topics/neural-networks)
  Best visual math-intuition on the web. Reach for it when you want to *feel*
  how neural nets, GPTs, and attention work without doing the algebra.
- [Lecture: Deep Dive into LLMs like ChatGPT — Andrej Karpathy](https://www.youtube.com/watch?v=7xTGNNLPyMI)
  3.5-hr general-audience walkthrough of the full LLM stack (tokens, pretraining,
  inference, fine-tuning, RLHF, hallucination). Best single "LLM foundations"
  resource. Build-from-scratch follow-up: [Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html).
- [Explainer: The Illustrated Transformer — Jay Alammar](https://jalammar.github.io/illustrated-transformer/)
  Classic picture-by-picture transformer breakdown. Reach for it when attention,
  embeddings, and context windows need to click visually.

### The AI-Engineer stack
- [Guide: Prompt Engineering Guide — DAIR.AI](https://www.promptingguide.ai/)
  Vendor-neutral, well-maintained. Go-to for prompting plus later techniques
  (chain-of-thought, ReAct, function calling, RAG).
- [Docs: Claude / Anthropic Developer Docs](https://docs.claude.com)
  Primary source for building on Claude: Messages API, tool use, vision,
  prompt-engineering best practices.
- [Docs: OpenAI API Platform](https://platform.openai.com/docs)
  Primary source for OpenAI: Responses API, embeddings, structured outputs,
  function calling, Agents SDK.
- [Docs: Google Gemini API](https://ai.google.dev/gemini-api/docs)
  Primary source for Gemini: long-context and multimodal (text/image/audio/
  video), generous free tier for experimenting.
- [Docs: Hugging Face](https://huggingface.co/docs)
  The open-source hub: Transformers, tokenizers, datasets, embeddings, running/
  fine-tuning open models. Pair with the free [HF courses](https://huggingface.co/learn).
- [Learn center: Pinecone Learn](https://www.pinecone.io/learn/)
  Mostly vendor-neutral explainers on embeddings, vector search, indexing (HNSW)
  before you pick Pinecone/Chroma/FAISS/Qdrant/Weaviate.
- [Docs: LangChain (Python)](https://docs.langchain.com/oss/python/langchain/overview)
  Wiring LLMs to tools and data. Reach for it when building RAG pipelines and
  tool-calling/agent apps (pairs with LangSmith for tracing).
- [Docs: LlamaIndex](https://developers.llamaindex.ai/python/framework/)
  The data-framework for RAG: ingesting, indexing, querying your own documents.
- [Article: Building Effective Agents — Anthropic](https://www.anthropic.com/engineering/building-effective-agents)
  Reference for agent design: composable workflow patterns and when *not* to use
  a framework.
- [Docs: Model Context Protocol (MCP)](https://modelcontextprotocol.io)
  Open standard for connecting models to tools/data in a portable way.

### Production
- [Courses: DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/)
  Free ~1-hr hands-on courses with framework authors. Get practical fast on RAG,
  agents, vector DBs, function calling, evaluating AI apps.
- [Article: Your AI Product Needs Evals — Hamel Husain](https://hamel.dev/blog/posts/evals/)
  Go-to playbook for evaluation. Reach for it when moving from prototype to
  production and you need to measure/improve output quality systematically.

## Wisdom (Communities)

- [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/)
  Best signal-to-noise for practical hands-on LLM work: open models,
  quantization, inference, fine-tuning, hardware (~775k members).
- [r/MachineLearning](https://www.reddit.com/r/MachineLearning/)
  Heavily moderated research hub. Use the weekly "Simple Questions" thread for
  beginner questions.
- [Hugging Face Forums](https://discuss.huggingface.co/)
  Official, beginner-friendly Discourse for Transformers, datasets, fine-tuning,
  and Spaces deployment. Good for concrete library/tooling problems.

_Community note: the two subreddit URLs were confirmed via web search (Reddit
blocks automated fetching), not directly opened. Both are canonical, long-stable
URLs, active in 2026._

## Gaps

- **AI vs ML text explainer:** IBM's written version is bot-blocked (403), so the
  IBM Technology *video* stands in — same ground, fully verifiable.
- **Multimodal:** No single high-trust free explainer stands out; learn it from
  the provider docs directly (Gemini, OpenAI, Claude vision guides).
- **Guardrails & observability:** No single canonical free primer. Learn
  evaluation first (Hamel + Chip Huyen), then read tool docs (LangSmith/Langfuse
  for tracing; provider safety/moderation docs for guardrails).
- **AI system design (cost/latency/architecture):** Chip Huyen's *AI Engineering*
  is the closest coherent free-ish treatment; no comparable standalone free guide.
