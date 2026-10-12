import type { ReactNode } from 'react'
import {
  earlierWork,
  education,
  experience,
  languages,
  moreProjects,
  profile,
  projects,
  skills,
  type Link,
  type Project,
} from './content'

function ExternalLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const external = href.startsWith('http')
  return (
    <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      {children}
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <p className="kind">{project.kind}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <ul className="points">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <ul className="tags" aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="card-links">
        {project.links.map((link: Link) => (
          <ExternalLink key={link.href} href={link.href} className="button small">
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </article>
  )
}

export default function App() {
  const photo = `${import.meta.env.BASE_URL}${profile.photo}`
  return (
    <>
      <a className="skip" href="#projects">
        Skip to projects
      </a>
      <header className="hero">
        <div className="hero-text">
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="intro">{profile.intro}</p>
          <p className="location">{profile.location}</p>
          <nav className="hero-links" aria-label="Profiles and contact">
            {profile.links.map((link, i) => (
              <ExternalLink key={link.href} href={link.href} className={i === 0 ? 'button primary' : 'button'}>
                {link.label}
              </ExternalLink>
            ))}
          </nav>
        </div>
        <img className="photo" src={photo} alt={`Portrait of ${profile.name}`} width={160} height={160} />
      </header>

      <main>
        <Section id="projects" title="Selected projects">
          <div className="grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <p className="more">
            Also on GitHub:{' '}
            {moreProjects.map((p, i) => (
              <span key={p.href}>
                <ExternalLink href={p.href}>{p.label}</ExternalLink> ({p.note})
                {i < moreProjects.length - 1 ? '; ' : '.'}
              </span>
            ))}
          </p>
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((role) => (
            <article className="role" key={role.title}>
              <div className="role-head">
                <h3>{role.title}</h3>
                <p className="dates">{role.dates}</p>
              </div>
              <p className="org">{role.org}</p>
              <ul className="points">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" title="Education and languages">
          {education.map((e) => (
            <div className="role-head" key={e.degree}>
              <p>
                <strong>{e.degree}</strong>, {e.school}
              </p>
              <p className="dates">{e.dates}</p>
            </div>
          ))}
          <p className="languages">{languages}</p>
        </Section>
      </main>

      <footer>
        <p>
          Earlier work:{' '}
          {earlierWork.map((link, i) => (
            <span key={link.href}>
              <ExternalLink href={link.href}>{link.label}</ExternalLink>
              {i < earlierWork.length - 1 ? ' and ' : '.'}
            </span>
          ))}
        </p>
        <p>
          <ExternalLink href="mailto:madniabdulwahab@gmail.com">madniabdulwahab@gmail.com</ExternalLink> · {profile.location}
        </p>
      </footer>
    </>
  )
}
