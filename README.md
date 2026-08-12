# Ayan Hussain

B.S. Data Science & Applications student at IIT Madras (2023–2027, CGPA 7.9/10), building toward a career in AI/ML engineering — specifically LLM-based systems, agentic architectures, and the MLOps infrastructure that gets them into production.

**Contact:** ayanhussain4212@gmail.com · +91 70810 12288
**Links:** [GitHub](https://github.com/23f1000932) · [LinkedIn](https://linkedin.com/in/ayan-hussain-58752626b) · [Portfolio](https://23f1000932.github.io/Ayan-Hussain/)

## What I'm interested in

My work sits at the intersection of two things: agentic AI/RAG systems (multi-agent orchestration, tool calling, semantic retrieval, multilingual interfaces) and the MLOps discipline that makes ML systems reliable in production (data versioning, feature stores, experiment tracking, CI/CD). I like owning projects end-to-end — data engineering through model development through backend delivery through containerized deployment — rather than just one layer of the stack. I'm currently looking for AI/ML engineering roles and internships.

## What I've built

**BharatBot** is my flagship project — a multilingual multi-agent RAG assistant covering agriculture, health, and legal domains across 7 Indian languages, built on Gemini with Azure AI Search for retrieval and Azure Speech/Translator for voice. I led a five-person team on it, and it placed among the top 250 teams (out of a much larger pool) at Microsoft AI Unlocked Campus Edition 2026, an invite-only hackathon for IITs, IIMs, ISB, XLRI, and NID.

**EcoQuest India** is a full-stack gamified sustainability platform (React 19 + TypeScript, FastAPI + async SQLAlchemy 2, Supabase). The core piece is a multimodal LLM verification pipeline using Gemini 2.5 Flash Vision to classify eco-action photo uploads across 8 activity types, auto-approving above a 70% confidence threshold and routing the rest to human review — with a pHash duplicate-detection and rate-limiting layer to prevent abuse.

**MLOps Pipeline for Stock Movement Prediction** is my deepest infrastructure project, built for a proctored MLOps exam and expanded into weekly coursework: DVC for data versioning against a GCS remote, a Feast feature store with point-in-time correctness validated on rolling features, an 8-run MLflow hyperparameter sweep with model registry, and a GitHub Actions + CML pipeline for automated evaluation and reporting — all running on GCP/Vertex AI.

**LiveSports** was a client project (Beyond Thoughts) where I worked as backend developer and code reviewer on a Flask-RESTX + Vue 3/TypeScript sports event platform — 33 REST endpoints, a RAG chatbot on Groq's LLaMA-3.3-70B with function calling, Razorpay payment integration with HMAC-SHA256 webhook verification, and 65 pytest cases across the API surface.

**Gemini WebGen Agent** is an autonomous agent that takes a task brief over HTTP and generates, commits, and deploys a complete single-file web app to GitHub Pages with no manual intervention — including a "Safe Mode" that rejects any agent-generated update under 30% of the original file size to guard against destructive edits.

**Aadhaar System Optimisation Analysis** applied clustering and predictive modeling to 110M+ transactions, surfacing ~Rs 370 Cr in annual inefficiencies and a 77x rural-urban service gap, with findings shipped as a Next.js dashboard for stakeholder use.

Beyond these, I've built **Cinema Audience Forecasting** (an XGBoost/LightGBM ensemble with Optuna tuning), **KisanRoute** for the Google Solution Challenge (agricultural pricing data + Gemini recommendations), and **CarbonSense**, which placed roughly #1272 out of 34,000+ participants in the Google Prompt Wars competition.

## How I work

I lean on prompt-driven coding tools like Cursor and Claude Code for scaffolding, and I'm comfortable picking up new tooling fast — DVC, Feast, MLflow, LangGraph, and the Gemini API all went from unfamiliar to production-used within tight timelines. I'm an active part of the IIT Madras student and hackathon community, and I usually work in small, cross-functional teams where I end up owning architecture decisions alongside implementation.

## Technical skills

- **Languages:** Python, SQL, Java
- **AI/LLM Engineering:** LangChain, LangGraph, RAG pipelines, multi-agent orchestration, tool calling, prompt engineering, Gemini API (text & vision), Groq LLaMA-3.3-70B, Azure AI Search
- **MLOps:** DVC, Feast, MLflow, CML, GitHub Actions CI/CD, GCP/Vertex AI
- **ML/Data:** Scikit-Learn, XGBoost, LightGBM, Optuna, Pandas, NumPy, Matplotlib, Seaborn
- **Backend & Infra:** FastAPI, Flask, Async SQLAlchemy 2, Pydantic v2, JWT Auth, PostgreSQL/Supabase, Redis, Celery, Docker, Docker Compose

## Where I'm headed

I'm actively applying to AI/ML engineering and internship roles, tailoring resumes toward MLOps and agentic-AI positions specifically (recent targets have included Gen AI internship and AI engineer roles). The gap I'm most conscious of closing next is production vector-DB and on-prem model-serving experience, since most of my retrieval work so far has run through managed services like Azure AI Search.
