import { projects } from "@/assets/data/dummydata"
import { Title } from "@/components/common/Title"
import { useState, useCallback, useEffect, useRef } from "react"

const FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "saas", label: "SaaS & AI" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "web", label: "Web & Branding" },
  { key: "education", label: "EdTech" },
  { key: "hiring", label: "HRTech" },
]

const ShowCase = () => {
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    )
    const elements = section.querySelectorAll('.fade-in-up')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [activeFilter, search])

  const filtered = projects.filter((p) => {
    if (activeFilter !== "all" && p.filter !== activeFilter) return false
    if (!search.trim()) return true
    const q = search.toLowerCase()
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    )
  })

  const handleFaviconError = useCallback((e) => {
    const img = e.target
    img.style.display = 'none'
    const fallback = img.nextElementSibling
    if (fallback) fallback.style.display = 'flex'
  }, [])

  return (
    <section className="showcase-section section-padding" ref={sectionRef}>
      <div className="container">
        <div className="heading-title">
          <span className="eyebrow">Portfolio</span>
          <Title title="Our Showcase" />
          <p>Real products, real impact. Explore the digital solutions we&apos;ve built for clients across 12+ countries.</p>
        </div>

        <div className="showcase-controls">
          <div className="showcase-search">
            <svg className="search-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="text"
              placeholder="Search projects by name, tech, or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="search-clear" onClick={() => setSearch("")} aria-label="Clear search">&times;</button>
            )}
          </div>

          <div className="filter-tabs">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`filter-tab ${activeFilter === f.key ? "active" : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {(search || activeFilter !== "all") && (
            <div className="results-count">
              <span>{filtered.length} project{filtered.length !== 1 ? 's' : ''} found</span>
              {(search || activeFilter !== "all") && (
                <button className="clear-filters" onClick={() => { setSearch(""); setActiveFilter("all") }}>
                  Clear All Filters
                </button>
              )}
            </div>
          )}
        </div>

        <div className="projects-grid">
          {filtered.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </div>
              <p>No projects match your search.</p>
              <button className="button-ghost" onClick={() => { setSearch(""); setActiveFilter("all") }} style={{ marginTop: '16px', padding: '10px 24px', fontSize: '12px' }}>
                Reset Filters
              </button>
            </div>
          )}
          {filtered.map((project, i) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card fade-in-up stagger-${(i % 4) + 1}`}
              key={project.name}
            >
              <div className={`project-accent accent-${project.filter}`} />
              <div className="bracket-tl" />
              <div className="bracket-br" />

              <div className="project-header">
                <div className="favicon-wrap">
                  <img
                    src={project.favicon}
                    alt=""
                    className="project-favicon"
                    onError={handleFaviconError}
                    loading="lazy"
                  />
                  <div className="favicon-fallback">
                    {project.name.charAt(0)}
                  </div>
                </div>
                <div className="project-meta">
                  <h3>{project.name}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                {project.badge && (
                  <span className={`project-badge badge-${project.badge.toLowerCase()}`}>
                    {project.badge === "HOT" && <span className="badge-dot" />}
                    {project.badge}
                  </span>
                )}
              </div>

              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-footer">
                <span className="project-link">
                  Visit Live Site <span className="arrow">&rarr;</span>
                </span>
                <span className="project-status">
                  <span className="status-dot" />
                  Live
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowCase
