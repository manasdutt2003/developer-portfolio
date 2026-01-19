import { useState } from 'react'
import projectsData from './data/projects.json'

function App() {
  const [projects] = useState(projectsData)

  return (
    <div className="container">
      <nav className="navbar">
        <h2>DevPortfolio.</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="about" className="hero">
        <h1>Hi, I'm Manas Dutt.</h1>
        <p style={{ fontSize: '1.25rem', color: '#cbd5e1', marginBottom: '1rem' }}>
          Student at <strong>Vellore Institute Of Technology, Chennai</strong>.
        </p>
        <p>
          I build scalable web applications and intuitive user interfaces.
          Specializing in the MERN stack and modern web technologies.
        </p>
        <a href="#contact" className="btn">Get in Touch</a>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">My Work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, index) => (
                    <span key={index} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" style={{ marginTop: '1rem', display: 'inline-block', fontSize: '0.9rem' }}>View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">Let's Connect</h2>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
          Open for opportunities and collaborations.
        </p>
        <a href="mailto:hello@example.com" className="btn">Send Email</a>
      </section>

      <footer>
        <p>© 2026 Developer Portfolio. Built with React & Vite.</p>
      </footer>
    </div>
  )
}

export default App
