type LinkButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

function LinkButton({ href, label, variant = "secondary" }: LinkButtonProps) {
  const isMail = href.startsWith("mailto:");
  const isExternal = !isMail && (href.startsWith("http://") || href.startsWith("https://"));

  return (
    <a
      className={`btn ${variant}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {label}
      {isExternal ? <span className="btnIcon" aria-hidden>↗</span> : null}
    </a>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="tag">{children}</span>;
}

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];

  // Teaser thumbnail (cropped) and optional full image link
  thumbnailSrc?: string;
  fullImageHref?: string;
};

function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  links = [],
  thumbnailSrc,
  fullImageHref,
}: ProjectCardProps) {
  return (
    <article className="card">
      <div className="cardHeader">
        <div>
          <h3 className="cardTitle">{title}</h3>
          {subtitle ? <div className="cardSubtitle">{subtitle}</div> : null}
        </div>

        <div className="tags">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {thumbnailSrc ? (
        <a
          className="thumbWrap"
          href={fullImageHref || thumbnailSrc}
          target="_blank"
          rel="noreferrer"
          title="Open screenshot"
        >
          <img className="thumb" src={thumbnailSrc} alt={`${title} thumbnail`} />
          <div className="thumbHint">View screenshot ↗</div>
        </a>
      ) : null}

      <p className="cardBody">{description}</p>

      {links.length ? (
        <div className="cardLinks">
          {links.map((l) => (
            <LinkButton key={l.href} href={l.href} label={l.label} variant="secondary" />
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function App() {
  const baseUrl = import.meta.env.BASE_URL;

  // Base-aware links for GitHub Pages (/portfolio/)
  const cvHref = `${baseUrl}CVMadni2.pdf`;
  const profileSrc = `${baseUrl}profile.jpeg`;

  // Put screenshots in /public (full page screenshots are fine)
  // Example filenames (use your own):
  const daily4uShot = `${baseUrl}screenshots/home_full.png`;
  //const unmsShot = `${baseUrl}unms-home.png`;

  return (
    <div className="page">
      <div className="container">
        {/* HERO */}
        <header className="hero">
          <div className="heroGrid">
            <div className="heroText">
              <h1 className="name">Abdul Wahab Madni</h1>

              <div className="roleRow">
                <span className="role">Frontend UX Developer — React/TypeScript + Drupal theming (Twig)</span>
              </div>

              <p className="summary">
                I combine front-end engineering (React, TypeScript, HTML/CSS, API integration) with UX research and design
                (Figma, usability testing, design systems). I build accessible, performance-minded interfaces and have hands-on
                Drupal theming experience through multiple Drupal projects.
              </p>

              <div className="actions">
                <LinkButton href={cvHref} label="Download CV" variant="primary" />
                <LinkButton href="https://linkedin.com/in/abdul-wahab-madni" label="LinkedIn" variant="secondary" />
                <LinkButton href="https://behance.net/wahab-madni" label="Behance" variant="secondary" />
                <LinkButton href="https://github.com/MadniAbdulWahab" label="GitHub" variant="secondary" />
                <LinkButton href="mailto:madniabdulwahab@gmail.com" label="Email" variant="secondary" />
              </div>
            </div>

            <div className="avatarWrap" aria-label="Profile photo">
              <img className="avatar" src={profileSrc} alt="Abdul Wahab Madni" />
            </div>
          </div>
        </header>

        {/* SECTION TITLE */}
        <div className="sectionTitle">
          <h2>Featured work</h2>
          <p>Selected projects aligned with Frontend + UX + Drupal delivery.</p>
        </div>

        <section className="grid">
          <ProjectCard
            title="Daily4U — Drupal Theming (Twig)"
            subtitle="Theme customization • Templates • Local dev"
            description="January theme customization, Twig templates + preprocess hooks, libraries.yml asset management, and a reproducible DDEV + Composer/Drush workflow."
            tags={["Drupal", "Twig", "Preprocess", "libraries.yml", "DDEV", "Accessibility"]}
            links={[{ label: "Repository", href: "https://github.com/MadniAbdulWahab/daily4u-site" }]}
            // Teaser screenshot (small strip)
            thumbnailSrc={daily4uShot}
            fullImageHref={daily4uShot}
          />

          <ProjectCard
            title="UX Case Studies"
            subtitle="Research • Prototyping • Testing"
            description="Wireframes, prototypes, usability testing, and design system work."
            tags={["UX Research", "Figma", "Prototyping", "Usability Testing", "Design Systems"]}
            links={[{ label: "Behance Portfolio", href: "https://behance.net/wahab-madni" }]}
          />

          <ProjectCard
            title="Calibench — React/TypeScript UI"
            subtitle="Internal research platform"
            description="Research platform UI (upload → processing → results) with robust UI states and QA. Screenshots available on request."
            tags={["React", "TypeScript", "REST APIs", "UI States", "QA", "Accessibility"]}
          />

          <ProjectCard
            title="University Notes Management System"
            subtitle="Django web app • Auth • Upload/Download • Admin dashboard"
            description="A centralized platform for students to upload, organize (department/semester/subject), search, and download academic notes. Includes anti-abuse controls and admin management for users and permissions."
            tags={["Django", "Python", "Auth", "CRUD", "Admin", "Upload/Download"]}
            links={[{ label: "Repository", href: "https://github.com/MadniAbdulWahab/UniversityNotesManagementSystem" }]}
            thumbnailSrc={unmsShot}
            fullImageHref={unmsShot}
          />
        </section>

        <footer className="footer">
          <span>Bonn, Germany</span>
          <span className="dot">•</span>
          <a className="footerLink" href="mailto:madniabdulwahab@gmail.com">
            madniabdulwahab@gmail.com
          </a>
        </footer>
      </div>

      <style>{`
        :root{
          --bg1:#f8fafc;
          --bg2:#eef2ff;
          --text: rgba(15,23,42,0.92);
          --muted: rgba(15,23,42,0.62);
          --muted2: rgba(15,23,42,0.52);
          --border: rgba(15,23,42,0.10);
          --card: rgba(255,255,255,0.72);
          --card2: rgba(255,255,255,0.85);
          --shadow: 0 18px 50px rgba(15,23,42,0.10);
          --shadow2: 0 22px 70px rgba(15,23,42,0.14);
          --primary:#2563eb;
          --primary2:#1d4ed8;
        }

        * { box-sizing: border-box; }
        html, body { height: 100%; }
        body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; color: var(--text); }

        .page{
          min-height:100vh;
          background:
            radial-gradient(1200px 700px at 12% -10%, rgba(37,99,235,0.18), transparent 60%),
            radial-gradient(900px 600px at 92% 0%, rgba(16,185,129,0.10), transparent 55%),
            linear-gradient(180deg, var(--bg1) 0%, var(--bg2) 36%, #ffffff 100%);
        }

        .container{
          max-width: 1000px;
          margin: 0 auto;
          padding: 46px 20px 44px;
        }

        .hero{
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 22px;
          padding: 26px;
          box-shadow: var(--shadow);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .heroGrid{
          display:grid;
          grid-template-columns: 1fr auto;
          gap: 18px;
          align-items: start;
        }

        .name{
          margin: 0;
          font-size: 44px;
          letter-spacing: 0.2px;
          line-height: 1.05;
        }

        .roleRow{ margin-top: 10px; }

        .role{
          display:inline-flex;
          align-items:center;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(37,99,235,0.08);
          border: 1px solid rgba(37,99,235,0.18);
          color: rgba(15,23,42,0.78);
          font-weight: 650;
          font-size: 13px;
          line-height: 1;
        }

        .summary{
          margin: 12px 0 0;
          line-height: 1.7;
          color: var(--muted);
          max-width: 760px;
        }

        .actions{
          margin-top: 16px;
          display:flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .avatarWrap{
          width: 132px;
          height: 132px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(15,23,42,0.10);
          background: var(--card2);
          box-shadow: var(--shadow);
          position: relative;
        }
        .avatarWrap::after{
          content:"";
          position:absolute;
          inset:0;
          border-radius: 22px;
          pointer-events:none;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.55);
        }
        .avatar{
          width:100%;
          height:100%;
          object-fit: cover;
          display:block;
        }

        .sectionTitle{
          margin: 20px 2px 14px;
        }
        .sectionTitle h2{
          margin: 0;
          font-size: 16px;
          letter-spacing: 0.2px;
          text-transform: uppercase;
          color: rgba(15,23,42,0.72);
        }
        .sectionTitle p{
          margin: 6px 0 0;
          color: var(--muted2);
          line-height: 1.6;
        }

        .grid{
          display:grid;
          gap: 14px;
        }

        .card{
          border-radius: 18px;
          padding: 18px;
          border: 1px solid var(--border);
          background: var(--card);
          box-shadow: var(--shadow);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease;
        }
        .card:hover{
          transform: translateY(-2px);
          box-shadow: var(--shadow2);
          border-color: rgba(37,99,235,0.18);
        }

        .cardHeader{
          display:flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          align-items: flex-start;
        }

        .cardTitle{
          margin: 0;
          font-size: 18px;
          letter-spacing: 0.1px;
        }
        .cardSubtitle{
          margin-top: 6px;
          font-size: 13px;
          color: var(--muted2);
          line-height: 1.4;
        }
        .cardBody{
          margin: 12px 0 0;
          line-height: 1.7;
          color: var(--muted);
        }
        .cardLinks{
          margin-top: 14px;
          display:flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tags{
          display:flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .tag{
          display:inline-flex;
          align-items:center;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 650;
          color: rgba(15,23,42,0.70);
          background: rgba(255,255,255,0.78);
          border: 1px solid rgba(15,23,42,0.10);
          box-shadow: 0 8px 18px rgba(15,23,42,0.06);
          white-space: nowrap;
        }

        /* Thumbnail teaser */
        .thumbWrap{
          margin-top: 12px;
          display: block;
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(15,23,42,0.10);
          background: rgba(255,255,255,0.80);
          box-shadow: 0 14px 32px rgba(15,23,42,0.10);
          text-decoration: none;
        }
        .thumb{
          width: 100%;
          height: 120px;        /* teaser height */
          object-fit: cover;    /* crops full-page screenshots nicely */
          object-position: top; /* keeps the top of the webpage visible */
          display:block;
          filter: saturate(1.02);
          transition: transform 180ms ease, filter 180ms ease;
        }
        .thumbHint{
          position: absolute;
          right: 10px;
          bottom: 10px;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(15,23,42,0.78);
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(15,23,42,0.10);
          box-shadow: 0 10px 22px rgba(15,23,42,0.10);
        }
        .thumbWrap:hover .thumb{
          transform: scale(1.02);
          filter: saturate(1.06);
        }

        .btn{
          display:inline-flex;
          align-items:center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          text-decoration:none;
          font-weight: 700;
          font-size: 14px;
          border: 1px solid transparent;
          transition: transform 120ms ease, background 120ms ease, border-color 120ms ease, box-shadow 120ms ease;
          user-select:none;
          white-space:nowrap;
        }
        .btn .btnIcon{
          font-size: 12px;
          opacity: 0.75;
          transform: translateY(-0.5px);
        }
        .btn.primary{
          background: var(--primary);
          color: #fff;
          border-color: var(--primary);
          box-shadow: 0 10px 26px rgba(37,99,235,0.22);
        }
        .btn.primary:hover{
          background: var(--primary2);
          border-color: var(--primary2);
          transform: translateY(-1px);
          box-shadow: 0 14px 34px rgba(37,99,235,0.26);
        }
        .btn.secondary{
          background: rgba(255,255,255,0.86);
          color: rgba(15,23,42,0.88);
          border-color: rgba(15,23,42,0.10);
          box-shadow: 0 10px 24px rgba(15,23,42,0.08);
        }
        .btn.secondary:hover{
          background: rgba(255,255,255,0.96);
          border-color: rgba(37,99,235,0.18);
          transform: translateY(-1px);
          box-shadow: 0 14px 34px rgba(15,23,42,0.10);
        }

        .footer{
          margin-top: 22px;
          color: rgba(15,23,42,0.58);
          display:flex;
          align-items:center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .dot{ opacity: 0.7; }
        .footerLink{
          color: rgba(15,23,42,0.78);
          text-decoration:none;
          border-bottom: 1px solid rgba(15,23,42,0.20);
        }
        .footerLink:hover{
          border-bottom-color: rgba(37,99,235,0.35);
        }

        @media (max-width: 760px){
          .heroGrid{
            grid-template-columns: 1fr;
          }
          .avatarWrap{
            width: 112px;
            height: 112px;
          }
          .name{
            font-size: 38px;
          }
          .thumb{
            height: 110px;
          }
        }
      `}</style>
    </div>
  );
}
