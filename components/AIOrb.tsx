import Image from "next/image";

const disciplines = [
  { title: "LLM", detail: "GPT-3 / Gemini", className: "orbit-tag-llm" },
  { title: "RAG", detail: "Retrieval systems", className: "orbit-tag-rag" },
  { title: "AGENTS", detail: "Agentic workflows", className: "orbit-tag-agents" },
  { title: "NLP", detail: "Language intelligence", className: "orbit-tag-nlp" },
  { title: "ML", detail: "Learning systems", className: "orbit-tag-ml" },
  { title: "VECTOR SEARCH", detail: "Embeddings / Azure AI", className: "orbit-tag-vector" },
];

export default function AIOrb() {
  return (
    <div className="hero-ai-scene" aria-label="AI and machine learning systems visual">
      <div className="scene-nebula" />
      <div className="scene-planet scene-planet-one" />
      <div className="scene-planet scene-planet-two" />
      <div className="scene-orbit scene-orbit-one"><i /><i /></div>
      <div className="scene-orbit scene-orbit-two"><i /><i /></div>
      <div className="scene-orbit scene-orbit-three" />
      <div className="hero-human-card">
        <Image src="/images/my-image.jpg" alt="Shubhang Dhawan" fill priority sizes="(max-width: 900px) 45vw, 280px" />
        <span className="human-card-glint" />
      </div>
      <div className="hero-robot-art">
        <Image src="/images/Neon Circuitry Android Profile.png" alt="Neon AI android" fill priority sizes="(max-width: 900px) 62vw, 480px" />
      </div>
      {disciplines.map((item) => (
        <div className={`orbit-skill-tag ${item.className}`} key={item.title}>
          <strong>{item.title}</strong><span>{item.detail}</span>
        </div>
      ))}
      <div className="scene-live-label"><span /> WORK IN PROGRESS <b>/</b> BUILDING AI SYSTEMS</div>
    </div>
  );
}
