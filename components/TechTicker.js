const techStack = [
  "React", "Next.js", "Node.js", "Python", "Flutter", "React Native",
  "TypeScript", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker",
  "Kubernetes", "GraphQL", "TailwindCSS", "Firebase", "OpenAI",
  "WhatsApp API", "Stripe", "Vercel",
]

const TechTicker = () => {
  const items = [...techStack, ...techStack]

  return (
    <section className="tech-ticker">
      <div className="ticker-track">
        {items.map((tech, i) => (
          <span className="ticker-item" key={i}>
            {tech}
          </span>
        ))}
      </div>
    </section>
  )
}

export default TechTicker
