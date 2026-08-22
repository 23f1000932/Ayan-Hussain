"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { BlackHoleHeroSection } from "@/components/ui/blackhole-hero-section";

/* ─────────────────────────────────────────────────────────────
   Data — exact wording from original index.html, unchanged
───────────────────────────────────────────────────────────── */

const skillsData = [
  {
    category: "Languages & Scripting",
    icon: "fa-code",
    skills: ["Python", "Java", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    category: "Tools & Productivity",
    icon: "fa-screwdriver-wrench",
    skills: ["Git", "Postman", "Power BI", "Jupyter", "Excel Advanced"],
  },
  {
    category: "AI / LLM Engineering",
    icon: "fa-robot",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Multi-Agent Orchestration",
      "Prompt Engineering",
      "Gemini API (Text & Vision)",
      "Azure AI Search",
      "Azure Speech / Translator",
    ],
  },
  {
    category: "Data Science & ML",
    icon: "fa-brain",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "TensorFlow",
      "Keras",
      "Matplotlib",
      "Seaborn",
      "XGBoost",
      "LightGBM",
      "Isolation Forest",
      "Optuna",
    ],
  },
  {
    category: "Web Development",
    icon: "fa-laptop-code",
    skills: [
      "Flask",
      "Vue.js",
      "Vue 3",
      "REST APIs",
      "Jinja2",
      "FastAPI",
      "Async SQLAlchemy 2",
      "Pydantic v2",
      "JWT Auth",
      "SlowAPI Rate Limiting",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases & Caching",
    icon: "fa-database",
    skills: ["PostgreSQL (Supabase)", "SQLite"],
  },
  {
    category: "DevOps & Tools",
    icon: "fa-tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Linux",
      "Redis",
      "Celery",
      "GitHub Actions",
      "Hugging Face Spaces",
      "Vercel",
      "Railway.app",
    ],
  },
];

const projectsData = [
  {
    title: "EcoQuest India",
    desc: "Full-stack gamified sustainability platform (React 19 + FastAPI + async SQLAlchemy 2) with a multimodal verification pipeline using Gemini 2.5 Flash Vision to classify eco-action photo uploads across 8 activity types, auto-approving above a 70% confidence threshold and routing low-confidence cases to human review. Includes a pHash duplicate-detection anti-abuse layer and is containerized with Docker Compose.",
    tech: ["React 19", "TypeScript", "FastAPI", "Async SQLAlchemy 2", "Gemini 2.5 Flash Vision", "Supabase"],
    link: "https://github.com/23f1000932",
  },
  {
    title: "BharatBot",
    desc: "Multilingual multi-agent AI assistant (Agriculture, Health, Legal) serving web and voice across 8 Indian languages with auto language detection. Selected among the Top 250 teams at Microsoft AI Unlocked Campus Edition 2026, an invite-only hackathon for IITs, IIMs, ISB, XLRI, and NID. Led a 5-person team to a production-ready Docker deployment on Hugging Face.",
    tech: ["Python", "FastAPI", "Gemini", "Azure AI Search", "Azure Speech/Translator", "Docker"],
    link: "https://github.com/23f1000932",
  },
  {
    title: "LiveSports",
    desc: "Full-stack sports event management platform built for real client Beyond Thoughts, shipping 33 REST endpoints with Flask-RESTX + Vue 3/TypeScript. Built a RAG chatbot on Groq's LLaMA-3.3-70B with function calling, integrated Razorpay payments with HMAC-SHA256 webhook verification, and wrote/reviewed 65 pytest cases.",
    tech: ["Flask-RESTX", "Vue 3", "TypeScript", "Groq LLaMA-3.3-70B", "Razorpay"],
    link: "https://github.com/23f1000932",
  },
  {
    title: "Gemini WebGen Agent",
    desc: "Autonomous LLM agent that receives task briefs via HTTP POST, generates complete single-file web apps, and auto-commits/deploys to GitHub Pages with zero manual intervention. Engineered a multi-round, tool-using pipeline with a Safe Mode that auto-rejects outputs under 30% of original file size, deployed on Hugging Face Spaces with live log streaming.",
    tech: ["Python", "FastAPI", "Gemini 2.5 Flash", "Docker", "GitHub API"],
    link: "https://github.com/23f1000932",
  },
  {
    title: "Cinema Audience Forecasting",
    desc: "Time-series forecasting model for daily cinema audience counts using a LightGBM/XGBoost ensemble across 80+ engineered features, tuned with Optuna and validated with TimeSeriesSplit — achieving an R² of 0.995+.",
    tech: ["Python", "LightGBM", "XGBoost", "Optuna", "Time Series"],
    link: "https://github.com/23f1000932",
  },
  {
    title: "Optimising Furniture Sales",
    desc: "Applied data analysis on real furniture business sales data (a family-run business in Prayagraj) to identify key revenue drivers and inventory bottlenecks.",
    tech: ["Data Analysis", "Python", "EDA"],
    link: "https://github.com/23f1000932/optimising-furniture-sales-potential",
  },
  {
    title: "Quiz Master",
    desc: "An interactive quiz platform allowing users to take timed tests and view performance analytics. Built with Flask and SQL.",
    tech: ["Flask", "SQL", "HTML/CSS"],
    link: "https://github.com/23f1000932/Quiz-Master",
  },
  {
    title: "Vehicle Parking System",
    desc: "Full-stack application to manage parking slot booking and user ticketing in real-time.",
    tech: ["Flask", "Vue.js", "Redis", "Celery"],
    link: "https://github.com/23f1000932/vehicle-parking-system",
  },
  {
    title: "Flight Price Prediction",
    desc: "End-to-end machine learning model to predict flight prices based on historical data.",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    link: "https://www.kaggle.com/code/ayanhussain00/kaggle-assingnment-1",
  },
  {
    title: "Customer Churn Prediction",
    desc: "Classification model to predict customer churn, providing a tool to identify at-risk customers.",
    tech: ["ML", "Classification", "Python"],
    link: "https://www.kaggle.com/code/ayanhussain00/kaggle-assingnment-2",
  },
  {
    title: "Image Classification (CNN)",
    desc: "Designed and trained a Convolutional Neural Network from scratch to classify a large dataset of images.",
    tech: ["TensorFlow", "Keras", "Deep Learning"],
    link: "https://www.kaggle.com/code/ayanhussain00/notebook402f91525c",
  },
];

const certsData = [
  {
    title: "Programming with GenAI",
    issuer: "NPTEL, IISc Bangalore",
    desc: "Coursework on leveraging LLMs and GenAI tooling for software development.",
  },
  {
    title: "5-Day AI Agents Intensive",
    issuer: "Google & Kaggle",
    desc: "Learned to build and deploy AI agents using Google's generative AI tools.",
  },
  {
    title: "SQL Advanced",
    issuer: "HackerRank",
    desc: "Advanced certification covering complex queries, joins, and optimization.",
  },
  {
    title: "Power BI Dashboards",
    issuer: "IIT Madras",
    desc: "Building interactive dashboards and data visualizations with Power BI.",
  },
  {
    title: "ML using Python",
    issuer: "Simplilearn",
    desc: "Foundational and applied machine learning techniques implemented in Python.",
  },
  {
    title: "Applied Vibe Coding",
    issuer: "IIT Madras - CODE",
    desc: "Practical application of coding principles in a competitive environment.",
  },
  {
    title: "Hands-on Dynamic Programming",
    issuer: "IIT Madras",
    desc: "Workshop focused on building optimal solutions using DP techniques.",
  },
  {
    title: "Implementing ML Techniques",
    issuer: "Numpy",
    desc: "Deep dive into implementing algorithms from scratch using only Numpy.",
  },
];

const TYPEWRITER_ROLES = ["AI/ML Engineer", "LLM & RAG Systems Builder", "Backend Developer"];

/* ─────────────────────────────────────────────────────────────
   Hooks
───────────────────────────────────────────────────────────── */

function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, [query]);
  return narrow;
}

function useTypewriter(roles: string[], typingSpeed = 200, deletingSpeed = 100) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      timeout = setTimeout(() => {}, 500);
    } else {
      timeout = setTimeout(
        () =>
          setText(
            isDeleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1)
          ),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting, roles, typingSpeed, deletingSpeed]);

  return text;
}

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─────────────────────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────────────────────── */

function Nav() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const isDark = theme === "dark";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: scrolled
          ? isDark
            ? "rgba(5,5,5,0.97)"
            : "rgba(255,255,255,0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        zIndex: 1000,
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 70,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--p-accent)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "-1px",
            textShadow: isDark ? "0 0 5px var(--p-accent-glow)" : "none",
          }}
        >
          AH_
        </div>

        {/* Desktop nav */}
        <div
          id="nav-actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
          className="hidden md:flex"
        >
          <ul style={{ display: "flex", gap: 30 }}>
            {["about", "skills", "projects", "certifications", "contact"].map(
              (s, i) => (
                <li key={s}>
                  <a
                    href={`#${s}`}
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      fontFamily: "var(--font-mono)",
                      color: "var(--p-text-secondary)",
                      position: "relative",
                    }}
                    className="hover:text-[var(--p-accent)] transition-colors"
                  >
                    0{i + 1}. {s.charAt(0).toUpperCase() + s.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
          {mounted && (
            <button
              id="theme-toggle"
              aria-label="Toggle Light/Dark Mode"
              onClick={toggleTheme}
              style={{
                cursor: "pointer",
                color: "var(--p-text-secondary)",
                fontSize: "1.2rem",
                background: "none",
                border: "none",
                padding: 5,
                transition: "color 0.3s ease, transform 0.3s ease",
              }}
              className="hover:text-[var(--p-accent)] hover:rotate-[15deg]"
            >
              <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`}></i>
            </button>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: "block",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "var(--foreground)",
            background: "none",
            border: "none",
          }}
          className="md:hidden"
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            background: "var(--background)",
            borderBottom: "1px solid var(--border)",
            padding: "20px 0",
          }}
          className="md:hidden flex flex-col items-center gap-4"
        >
          {["about", "skills", "projects", "certifications", "contact"].map(
            (s, i) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--p-text-secondary)",
                }}
                className="hover:text-[var(--p-accent)]"
              >
                0{i + 1}. {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            )
          )}
          {mounted && (
            <button
              onClick={toggleTheme}
              style={{
                marginTop: 8,
                background: "none",
                border: "none",
                color: "var(--p-text-secondary)",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
              aria-label="Toggle theme"
            >
              <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`}></i>
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="reveal section-title"
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "2.5rem",
        marginBottom: "3rem",
        textAlign: "center",
        position: "relative",
        textTransform: "uppercase",
        letterSpacing: 2,
        zIndex: 2,
      }}
    >
      <span style={{ color: "var(--p-accent)", opacity: 0.7 }}>// </span>
      {children}
      <span
        style={{
          display: "block",
          width: 60,
          height: 4,
          background: "var(--p-accent)",
          margin: "15px auto 0",
          boxShadow: "0 0 10px var(--p-accent-glow)",
          transition: "width 0.3s ease",
        }}
      />
    </h2>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main page
───────────────────────────────────────────────────────────── */

export default function Home() {
  const narrow = useNarrow();
  const typeText = useTypewriter(TYPEWRITER_ROLES);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const backToTopRef = useRef<HTMLButtonElement>(null);

  useScrollReveal();

  // Back-to-top visibility
  useEffect(() => {
    const onScroll = () => {
      if (backToTopRef.current) {
        backToTopRef.current.style.opacity = window.scrollY > 300 ? "1" : "0";
        backToTopRef.current.style.pointerEvents =
          window.scrollY > 300 ? "auto" : "none";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <Nav />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section
        id="hero"
        style={{ minHeight: "100vh", position: "relative", paddingTop: 70 }}
      >
        <BlackHoleHeroSection
          focus={narrow ? [0.5, 0.76] : [0.72, 0.46]}
          scrim={narrow ? "top" : "left"}
          scrimStrength={0.9}
          distance={24}
          elevation={narrow ? -7 : -5.5}
          fov={narrow ? 58 : 42}
          glow={narrow ? 0.85 : 1}
          steps={narrow ? 200 : 300}
          resolution={narrow ? 0.6 : 0.7}
          style={{ minHeight: "calc(100vh - 70px)" }}
        >
          {/* Hero content */}
          <div
            style={{
              display: "flex",
              alignItems: narrow ? "flex-start" : "center",
              minHeight: "calc(100vh - 70px)",
              padding: narrow ? "40px 24px 20px" : "40px 60px",
            }}
          >
            <div style={{ maxWidth: narrow ? "100%" : "50%" }}>
              <p
                style={{
                  color: "var(--p-accent)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "1rem",
                  fontSize: "1rem",
                }}
              >
                Hi, my name is
              </p>

              <h1
                style={{
                  fontSize: narrow ? "2.5rem" : "3.5rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-1px",
                  marginBottom: 10,
                  color: "white",
                }}
              >
                Ayan{" "}
                <span
                  style={{
                    color: "var(--p-accent)",
                    textShadow: "0 0 15px var(--p-accent-glow)",
                  }}
                >
                  Hussain.
                </span>
              </h1>

              <h2
                style={{
                  fontSize: "1.4rem",
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "var(--font-mono)",
                  minHeight: "1.6em",
                  marginBottom: "2rem",
                }}
              >
                I am a{" "}
                <span id="typewriter" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {typeText}
                </span>
                <span className="typewriter-cursor">|</span>
              </h2>

              {/* Social links */}
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { href: "https://github.com/23f1000932", icon: "fab fa-github", label: "GitHub" },
                  {
                    href: "https://www.linkedin.com/in/ayan-hussain-58752626b",
                    icon: "fab fa-linkedin-in",
                    label: "LinkedIn",
                  },
                  {
                    href: "mailto:23f1000932@ds.study.iitm.ac.in",
                    icon: "fas fa-envelope",
                    label: "Email",
                  },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    title={label}
                    rel="noreferrer"
                    style={{
                      fontSize: "1.4rem",
                      color: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      width: 50,
                      height: 50,
                      borderRadius: 5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      background: "rgba(0,0,0,0.3)",
                    }}
                    className="hover:bg-[var(--p-accent)] hover:border-[var(--p-accent)] hover:text-black hover:-translate-y-1"
                  >
                    <i className={icon}></i>
                  </a>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
                <a
                  href="#projects"
                  style={{
                    display: "inline-block",
                    padding: "12px 30px",
                    background: "transparent",
                    border: "1px solid var(--p-accent)",
                    color: "var(--p-accent)",
                    borderRadius: 4,
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    zIndex: 1,
                    transition: "all 0.3s",
                    boxShadow: "0 0 5px var(--p-accent-glow)",
                  }}
                  className="group"
                >
                  Check out my work!
                </a>
                <a
                  href="https://drive.google.com/file/d/1m30SbHwWaSgmrQL6zzkxWCWfVz1ZklYd/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "12px 30px",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "rgba(255,255,255,0.8)",
                    borderRadius: 4,
                    fontFamily: "var(--font-mono)",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  className="hover:border-white hover:text-white"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </BlackHoleHeroSection>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────── */}
      <section id="about" style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle>About Me</SectionTitle>
          <div
            className="reveal"
            style={{
              background: "var(--p-card-bg)",
              border: "1px solid var(--border)",
              backdropFilter: "blur(5px)",
              boxShadow: "var(--p-shadow)",
              borderRadius: 10,
              padding: 30,
              flex: 1,
            }}
          >
            <p style={{ marginBottom: "1.5rem", color: "var(--p-text-secondary)" }}>
              I am a B.S. Data Science &amp; Applications undergraduate at the{" "}
              <strong style={{ color: "var(--p-accent)" }}>
                Indian Institute of Technology (IIT) Madras
              </strong>
              , with hands-on experience shipping production-grade RAG and agentic AI systems.
            </p>
            <p style={{ marginBottom: "1.5rem", color: "var(--p-text-secondary)" }}>
              I work across{" "}
              <strong style={{ color: "var(--p-accent)" }}>
                multi-agent LLM pipelines, multimodal vision-based verification, and autonomous
                tool-using agents
              </strong>
              , built on Python/FastAPI backends with containerized deployment. I'm comfortable
              across the full AI engineering lifecycle: retrieval pipelines, model integration,
              async APIs, and end-to-end delivery — including real client projects alongside
              coursework and hackathons.
            </p>
            <p style={{ color: "var(--p-text-secondary)" }}>
              Currently seeking{" "}
              <strong style={{ color: "var(--p-accent)" }}>AI Engineer</strong> internship and
              full-time opportunities where I can build and ship LLM-powered products.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 20, marginTop: "2rem", flexWrap: "wrap" }}>
              {[
                { val: "7.9", label: "CGPA" },
                { val: "11+", label: "Projects" },
                { val: "8+", label: "Certificates" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  style={{
                    textAlign: "center",
                    padding: 20,
                    background: "var(--p-card-bg)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    minWidth: 120,
                    fontFamily: "var(--font-mono)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "default",
                  }}
                  className="hover:-translate-y-1 hover:border-[var(--p-accent)] hover:shadow-[var(--p-shadow-hover)]"
                >
                  <h3
                    style={{
                      fontSize: "2rem",
                      color: "var(--p-accent)",
                      marginBottom: 5,
                      textShadow: isDark ? "0 0 5px var(--p-accent-glow)" : "none",
                    }}
                  >
                    {val}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--p-text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────── */}
      <section id="skills" style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle>Technical Skills</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 30,
            }}
          >
            {skillsData.map((cat) => (
              <div
                key={cat.category}
                className="reveal"
                style={{
                  padding: 30,
                  background: "var(--p-card-bg)",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(5px)",
                  boxShadow: "var(--p-shadow)",
                  borderRadius: 4,
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-7px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--p-accent)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--p-shadow-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--p-shadow)";
                }}
              >
                <h3
                  style={{
                    marginBottom: 20,
                    fontSize: "1.1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "var(--font-mono)",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: 10,
                  }}
                >
                  <i
                    className={`fas ${cat.icon}`}
                    style={{ color: "var(--p-accent)" }}
                  ></i>{" "}
                  {cat.category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: "rgba(0, 255, 65, 0.05)",
                        color: "var(--p-accent)",
                        padding: "5px 12px",
                        border: "1px solid rgba(0, 255, 65, 0.2)",
                        borderRadius: 2,
                        fontSize: "0.85rem",
                        fontFamily: "var(--font-mono)",
                        transition: "all 0.3s ease",
                        cursor: "default",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────── */}
      <section id="projects" style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle>Featured Projects</SectionTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 30,
            }}
          >
            {projectsData.map((proj) => (
              <div
                key={proj.title}
                className="reveal"
                style={{
                  background: "var(--p-card-bg)",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(5px)",
                  boxShadow: "var(--p-shadow)",
                  borderRadius: 4,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  top: 0,
                  transition: "top 0.3s, border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.top = "-10px";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--p-accent)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--p-shadow-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.top = "0";
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--p-shadow)";
                }}
              >
                <div
                  style={{
                    padding: 25,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 15,
                    }}
                  >
                    <i
                      className="far fa-folder"
                      style={{ color: "var(--p-accent)", fontSize: "2rem" }}
                    ></i>
                    <div>
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="External Link"
                        style={{
                          color: "var(--p-text-secondary)",
                          fontSize: "1.2rem",
                          marginLeft: 15,
                          transition: "color 0.3s, transform 0.3s",
                        }}
                        className="hover:text-[var(--p-accent)]"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: 10,
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      transition: "color 0.3s ease",
                      color: "var(--foreground)",
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--p-text-secondary)",
                      fontSize: "0.9rem",
                      marginBottom: 20,
                      flexGrow: 1,
                    }}
                  >
                    {proj.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 10,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--p-text-secondary)",
                      marginTop: "auto",
                    }}
                  >
                    {proj.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ─────────────────────────────────── */}
      <section id="certifications" style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle>Certifications &amp; Achievements</SectionTitle>
          <div
            style={{
              position: "relative",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                width: 2,
                background: "var(--border)",
              }}
            />
            {certsData.map((cert) => (
              <div
                key={cert.title}
                className="reveal"
                style={{
                  marginLeft: 30,
                  marginBottom: 40,
                  position: "relative",
                  padding: 20,
                  background: "var(--p-card-bg)",
                  border: "1px solid var(--border)",
                  backdropFilter: "blur(5px)",
                  boxShadow: "var(--p-shadow)",
                  borderRadius: 4,
                  transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(10px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--p-accent)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--p-shadow-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--p-shadow)";
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -37,
                    top: 25,
                    width: 12,
                    height: 12,
                    background: "var(--background)",
                    border: "2px solid var(--p-accent)",
                    borderRadius: "50%",
                    zIndex: 1,
                  }}
                />
                <h3
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: 5,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {cert.title}
                </h3>
                <span
                  style={{
                    color: "var(--p-accent)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    marginBottom: 10,
                    display: "block",
                    textTransform: "uppercase",
                  }}
                >
                  {cert.issuer}
                </span>
                <p style={{ color: "var(--p-text-secondary)", fontSize: "0.95rem" }}>
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <SectionTitle>Get In Touch</SectionTitle>
          <div
            className="reveal"
            style={{
              textAlign: "center",
              maxWidth: 700,
              margin: "0 auto",
              padding: 40,
              background: "var(--p-card-bg)",
              border: "1px solid var(--border)",
              backdropFilter: "blur(5px)",
              boxShadow: "var(--p-shadow)",
              borderRadius: 10,
            }}
          >
            <p style={{ color: "var(--p-text-secondary)", marginBottom: "2rem" }}>
              I am currently looking for AI Engineer internships and full-time roles, especially
              in LLM/RAG and agentic AI systems. Whether you have a question or just want to say
              hi, I'll try my best to get back to you!
            </p>
            <a
              href="mailto:23f1000932@ds.study.iitm.ac.in"
              style={{
                display: "inline-block",
                padding: "12px 30px",
                background: "var(--p-card-bg)",
                border: "1px solid var(--p-accent)",
                color: "var(--p-accent)",
                borderRadius: 4,
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                zIndex: 1,
                transition: "all 0.3s",
                boxShadow: "0 0 5px var(--p-accent-glow)",
              }}
            >
              Say Hello
            </a>

            <div
              style={{
                marginTop: "2.5rem",
                borderTop: "1px solid var(--border)",
                paddingTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 25,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <a
                  href="tel:+917081012288"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "var(--p-text-secondary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    transition: "color 0.3s ease",
                  }}
                  className="hover:text-[var(--p-accent)]"
                >
                  <i className="fas fa-phone-alt" style={{ color: "var(--p-accent)" }}></i>
                  <span>+91 7081012288</span>
                </a>
                <a
                  href="mailto:ayanhussain4212@gmail.com"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "var(--p-text-secondary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    transition: "color 0.3s ease",
                  }}
                  className="hover:text-[var(--p-accent)]"
                >
                  <i className="fas fa-envelope" style={{ color: "var(--p-accent)" }}></i>
                  <span>ayanhussain4212@gmail.com</span>
                </a>
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <a
                  href="https://github.com/23f1000932"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  style={{
                    color: "var(--p-text-secondary)",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                  className="hover:text-[var(--p-accent)] hover:-translate-y-1"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ayan-hussain-58752626b"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  style={{
                    color: "var(--p-text-secondary)",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                  className="hover:text-[var(--p-accent)] hover:-translate-y-1"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px 0",
          borderTop: "1px solid var(--border)",
          color: "var(--p-text-secondary)",
          fontSize: "0.9rem",
          fontFamily: "var(--font-mono)",
          background: "var(--background)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <p>Designed &amp; Built by Ayan Hussain</p>
          <p style={{ fontSize: "0.8rem", marginTop: 5, opacity: 0.7 }}>
            &copy; 2026 All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── BACK TO TOP ────────────────────────────────────── */}
      <button
        ref={backToTopRef}
        id="backToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
          background: "var(--p-card-bg)",
          border: "2px solid var(--p-accent)",
          color: "var(--p-accent)",
          width: 45,
          height: 45,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.3s, background 0.3s, color 0.3s, transform 0.3s",
          zIndex: 999,
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        }}
        className="hover:bg-[var(--p-accent)] hover:text-black hover:-translate-y-1"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}
