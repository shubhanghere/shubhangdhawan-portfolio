const orbitSkills = [
  { label: "LLM", className: "skill-orbit-one" },
  { label: "RAG", className: "skill-orbit-two" },
  { label: "AI AGENTS", className: "skill-orbit-three" },
  { label: "NLP / ML", className: "skill-orbit-four" },
  { label: "VECTOR SEARCH", className: "skill-orbit-five" },
];

export default function AIRobotOrbit() {
  return (
    <div className="ai-orbit-scene" aria-label="Animated AI skills orbiting a planet">
      <div className="experience-orbit experience-orbit-outer"><i /><i /></div>
      <div className="experience-orbit experience-orbit-inner"><i /><i /></div>
      <div className="experience-orbit experience-orbit-tilt" />
      <div className="experience-planet"><span>AI</span></div>
      {orbitSkills.map((skill) => (
        <span className={`experience-skill-chip ${skill.className}`} key={skill.label}>
          {skill.label}
        </span>
      ))}
    </div>
  );
}
