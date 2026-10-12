"use client";

import { useState } from "react";
import AIOrb from "./AIOrb";
import AIRobotOrbit from "./AIRobotOrbit";
import ConnectModal from "./ConnectModal";
import { Mail } from "lucide-react";
import { SiGithub, SiMedium, SiGooglescholar } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const projects = [
  {
    number: "01", title: "PowerMind AI", type: "Intelligent Q&A / RAG",
    description: "Intelligent Q&A on the book The 48 Laws of Power.",
    tags: ["GenAI", "RAG", "LLMs"],
    url: "https://github.com/shubhanghere/CogitoLibrum-Intelligent-Analysis-and-Retrieval-System-for-48-Laws-of-Power",
  },
  {
    number: "02", title: "MarketIQ", type: "AI Agent / Marketing Insights",
    description: "AI agent for marketing data insights.",
    tags: ["AI Agents", "LLMs", "Marketing Data"],
    url: "https://github.com/shubhanghere/ad-analyzer-agent",
  },
  {
    number: "03", title: "Healthcare Chatbot", type: "Healthcare NLP",
    description: "Conversational healthcare assistant that answers natural-language questions using medical knowledge resources.",
    tags: ["NLP", "Healthcare", "Conversational AI"],
    url: "https://github.com/shubhanghere/Ai-Healthcare-Chatbot-master",
  },
  {
    number: "04", title: "NewsFeedHarmony", type: "News Feed Intelligence",
    description: "RSS news workflow that organizes articles with sentiment and keyword analysis for easier discovery.",
    tags: ["Python", "RSS", "Sentiment Analysis"],
    url: "https://github.com/shubhanghere/NewsFeedHarmony",
  },
  {
    number: "05", title: "Smart City Traffic AI", type: "SMART CITY / AI TRAFFIC INTELLIGENCE",
    description: "An interactive smart-city traffic simulation featuring a 3D digital twin, congestion monitoring, scenario-based forecasting, simulated anomaly detection, adaptive signal strategies, and real-time dashboard analytics.",
    tags: ["React", "Three.js", "JavaScript", "Vite", "AI / ML Simulation"],
    url: "https://github.com/shubhanghere/smart-city-traffic-ai-ml-prediction",
    demo: "https://smart-city-traffic-ai-ml-prediction.pages.dev/",
  },
];
const experiences = [
  {
    company: "SIEC Education Pvt. Ltd.", role: "Software Developer - AI Engineer",
    period: "Jan 2026 - Present", location: "On-site / Gurugram",
    bullets: [
      "Built and scaled a production RAG-based GenAI chatbot using OpenAI GPT, with MCP-style model and data integration and familiarity with Gemini and Claude.",
      "Developed agentic LLM workflows using LangChain and LlamaIndex, with LangGraph orchestration, guardrails, response evaluation, observability, and hallucination mitigation.",
    ],
  },
  {
    company: "Infutrix Technologies", role: "Large Language Model Engineer Intern",
    period: "May 2025 - Nov 2025", location: "On-site / Mohali",
    bullets: [
      "Architected an LLM-based automated grading system using multimodal OCR and NVIDIA NeMo Megatron GPT for contextual validation.",
      "Built GenAI evaluation and testing pipelines with semantic similarity scoring, validation, monitoring, and reliability-focused safety controls.",
    ],
  },
  {
    company: "NXG Ventures", role: "Machine Learning Engineer Intern",
    period: "Feb 2025 - May 2025", location: "Remote / Gujarat",
    bullets: [
      "Built and deployed a FastAPI-based fraud detection microservice using PyTorch and transaction embeddings in a containerized environment.",
      "Improved reliability through threshold calibration, model evaluation, validation testing, and performance monitoring on imbalanced datasets.",
    ],
  },
  {
    company: "Times Network / Bennett Coleman & Co. Ltd.", role: "AI Engineer Intern",
    period: "Nov 2024 - Feb 2025", location: "On-site / Noida",
    bullets: [
      "Built an experimental 24/7 AI-driven newsroom using LLM content generation and text-to-speech, including a GPT-4o Mini editorial assistant.",
      "Implemented retrieval grounding, prompt validation, content safety controls, and response evaluation using LangChain and Azure AI Search.",
    ],
  },
  {
    company: "Frontera Health", role: "Large Language Model Engineer Intern",
    period: "Mar 2024 - Oct 2024", location: "Remote / USA",
    bullets: [
      "Built a GenAI health assistant using RAG, LlamaIndex, and Mistral 7B, integrating semantic search with MongoDB Atlas.",
      "Deployed AI services on GCP using containerized workloads, with performance tuning, monitoring, evaluation, and reliability-focused optimization.",
    ],
  },
];
const skills = [
  "Python", "SQL", "FastAPI", "REST APIs", "Microservices", "Machine Learning", "NLP", "Transformers", "Git", "GCP", "Azure", "MCP", "AI Guardrails", "LLM Orchestration", "Agentic AI", "LangGraph", "Docker", "Gemini", "Vector Databases", "Cloud Deployment", "Claude", "Monitoring", "LLM Evaluation", "Safety Controls", "GenAI Testing", "Hallucination Mitigation", "Tracing and Observability",
];
export default function Portfolio() {
  const [connectOpen, setConnectOpen] = useState(false);

  return (
    <>
      <main className="portfolio-shell">

        {/* NAVBAR */}
        <nav className="navbar">
          <a href="#home" className="brand">
            <span className="brand-mark">SD</span>
            <span>
              <strong>Shubhang Dhawan</strong>
              <small>AI / ML Engineer</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#research">Research</a>
            <button className="nav-contact" onClick={() => setConnectOpen(true)}>Contact</button>
          </div>

          <button
            className="connect-button"
            onClick={() => setConnectOpen(true)}
          >
            <span>⌁</span>
            Let&apos;s Connect
            <b>↗</b>
          </button>
        </nav>

        {/* HERO */}
        <section className="hero section-container" id="home">
          <div className="hero-copy">

            <div className="availability">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
            </div>

            <div className="experience-label">
              3+ YEARS EXPERIENCE
            </div>

            <h1>
              SHUBHANG
              <br />
              <span>DHAWAN</span>
            </h1>

            <div className="hero-role">
              DATA · AI · MACHINE LEARNING
            </div>

            <p className="hero-description">
              I work across data, artificial intelligence and machine
              learning, turning complex problems into practical,
              intelligent applications.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                View My Projects
                <span>→</span>
              </a>

              <a
                href="/resume/Shubhang_Dhawan_CV_3YOE.pdf"
                target="_blank"
                className="secondary-button"
              >
                ↓
                Download Resume
              </a>
            </div>

            <div className="social-row">
              <a href="https://www.linkedin.com/in/shubhang-dhawan-815269251/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
              <a href="https://github.com/shubhanghere" target="_blank" rel="noreferrer" aria-label="GitHub"><SiGithub size={18} /></a>
              <a href="https://medium.com/@shubhangdhawan2000" target="_blank" rel="noreferrer" aria-label="Medium"><SiMedium size={17} /></a>
              <a href="https://scholar.google.com/citations?user=w-AMYo4AAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar" title="Google Scholar"><SiGooglescholar size={17} /></a>
              <button
                onClick={() => setConnectOpen(true)}
                aria-label="Email"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <AIOrb />
          </div>

          <div className="hero-stats">
            <div>
              <strong>3+</strong>
              <span>Years Experience</span>
            </div>

            <div>
              <strong>20+</strong>
              <span>Projects Built</span>
            </div>

            <div>
              <strong>4+</strong>
              <span>Companies / Internships</span>
            </div>

            <div>
              <strong>GenAI</strong>
              <span>Production Systems</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section section-container" id="about">
          <div className="section-heading">
            <span>01 / ABOUT ME</span>
            <div />
          </div>

          <div className="about-grid">
            <div>
              <h2>
                I design and ship AI systems that combine{" "}
                <em>large language models</em>,{" "}
                <strong>retrieval pipelines</strong> and{" "}
                full-stack engineering.
              </h2>
            </div>

            <div className="about-copy">
              <p>
                My work spans data, artificial intelligence and
                machine learning, including Generative AI, retrieval
                systems, intelligent automation and scalable software.
              </p>

              <p>
                My work sits at the intersection of machine learning,
                language models, backend engineering and cloud
                technologies — with a focus on turning ideas into
                usable AI products.
              </p>
            </div>
          </div>

          <div className="capability-grid">
            <div className="capability-card">
              <span>◈</span>
              <h3>RAG Systems</h3>
              <p>
                Grounded document understanding, embeddings,
                semantic search and contextual generation.
              </p>
            </div>

            <div className="capability-card">
              <span>◇</span>
              <h3>Agentic AI</h3>
              <p>
                Intelligent workflows combining LLM reasoning,
                tools and automation.
              </p>
            </div>

            <div className="capability-card">
              <span>☁</span>
              <h3>Scalable Backend</h3>
              <p>
                FastAPI, microservices, cloud deployment and
                production-oriented architecture.
              </p>
            </div>

            <div className="capability-card">
              <span>▥</span>
              <h3>Real-World Impact</h3>
              <p>
                AI systems designed around practical business
                workflows and usable products.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section section-container" id="projects">
          <div className="section-heading">
            <span>02 / SELECTED PROJECTS</span>
            <div />
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              project.demo ? (
                <article className="project-card" key={project.number}>
                  <div className="project-top"><span>{project.number}</span><span>?</span></div>
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    <a href={project.url} target="_blank" rel="noreferrer">Source Code <span>?</span></a>
                    <a href={project.demo} target="_blank" rel="noreferrer">Live Demo <span>?</span></a>
                  </div>
                </article>
              ) : (
                <a className="project-card" key={project.number} href={project.url} target="_blank" rel="noreferrer">
                  <div className="project-top"><span>{project.number}</span><span>?</span></div>
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </a>
              )
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section section-container" id="experience">
          <div className="section-heading">
            <span>03 / EXPERIENCE</span>
            <div />
          </div>

          <div className="experience-layout">
            <div className="timeline">
              {experiences.map((experience, index) => (
                <article className="timeline-item" key={experience.company}>
                <div className="timeline-marker">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="timeline-content">
                  <div className="timeline-period">
                    {experience.period}
                  </div>

                  <h3>{experience.role}</h3>

                  <h4>{experience.company}</h4>

                  <p className="experience-location">{experience.location}</p>
                  <ul className="experience-bullets">
                    {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
                </article>
              ))}
            </div>
            <aside className="experience-ai-panel">
              <div className="experience-ai-label"><span /> AI SYSTEMS / ENGINEERED</div>
              <AIRobotOrbit />
              <div className="experience-ai-caption">
                <span>AI / ML</span><strong>Intelligent Systems</strong>
                <small>LLMs / RAG / Agents / ML / Vector Search</small>
              </div>
            </aside>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section section-container" id="skills">
          <div className="section-heading">
            <span>04 / TECHNICAL STACK</span>
            <div />
          </div>

          <div className="skills-layout">
            <div>
              <h2>
                Tools I use to turn
                <br />
                <em>AI ideas into systems.</em>
              </h2>
            </div>

            <div className="skills-cloud">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section className="section section-container" id="research">
          <div className="section-heading">
            <span>05 / PUBLICATIONS</span>
            <div />
          </div>
          <div className="publication-list">
            <article className="research-card">
              <div className="research-number">R01</div>
              <div>
                <p className="project-type">IEEE / RECOMMENDATION SYSTEMS</p>
                <h2>Drug Recommendation System using BGFT-DBi-LSTM</h2>
                <p>Built a system to recommend safer, more personalized drugs by considering individual health needs.</p>
              </div>
              <a className="research-arrow" href="https://ieeexplore.ieee.org/document/10742789" target="_blank" rel="noreferrer" aria-label="Open IEEE publication">&rarr;</a>
            </article>
            <article className="research-card">
              <div className="research-number">R02</div>
              <div>
                <p className="project-type">IJSREM / RESPONSIBLE AI</p>
                <h2>Ethical Implications of AI in Healthcare</h2>
                <p>Explored AI&apos;s impact on healthcare, focusing on ethical concerns around privacy, data security, and bias.</p>
              </div>
              <a className="research-arrow" href="https://ijsrem.com/download/ethical-implications-of-ai-in-healthcare/" target="_blank" rel="noreferrer" aria-label="Open IJSREM publication">&rarr;</a>
            </article>
          </div>
        </section>
        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-glow" />

          <div className="section-container contact-inner">
            <span className="eyebrow">06 / CONTACT</span>

            <h2>
              Have an AI problem
              <br />
              worth solving?
            </h2>

            <p>
              Let&apos;s build something intelligent, useful and
              production-ready.
            </p>

            <button
              className="primary-button"
              onClick={() => setConnectOpen(true)}
            >
              Let&apos;s Connect
              <span>↗</span>
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer section-container">
          <span>© 2026 Shubhang Dhawan</span>
          <span>Built with Next.js · AI · Curiosity</span>
        </footer>
      </main>

      <ConnectModal
        open={connectOpen}
        onClose={() => setConnectOpen(false)}
      />
    </>
  );
}
