type LinkButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

function LinkButton({ href, label, variant = "secondary" }: LinkButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
    border: "1px solid transparent",
    transition: "transform 120ms ease, background 120ms ease, border-color 120ms ease",
    userSelect: "none",
  };

  const styles: Record<string, React.CSSProperties> = {
    primary: {
      background: "#2563eb",
      color: "#ffffff",
      borderColor: "#2563eb",
    },
    secondary: {
      background: "rgba(255,255,255,0.06)",
      color: "rgba(255,255,255,0.92)",
      borderColor: "rgba(255,255,255,0.14)",
    },
  };

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      style={{ ...base, ...styles[variant] }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor =
          variant === "primary" ? "#2563eb" : "rgba(255,255,255,0.22)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0px)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor =
          variant === "primary" ? "#2563eb" : "rgba(255,255,255,0.14)";
      }}
    >
      {label}
    </a>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "5px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        color: "rgba(255,255,255,0.78)",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      {children}
    </span>
  );
}

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
  // Optional: add screenshots later by placing images in /public and using screenshotSrc="/daily4u.png"
  screenshotSrc?: string;
};

function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  links = [],
  screenshotSrc,
}: ProjectCardProps) {
  return (
    <div
      style={{
        borderRadius: 18,
        padding: 18,
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.04)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: 0.2 }}>
            {title}
          </h3>
          {subtitle ? (
            <div style={{ marginTop: 6, color: "rgba(255,255,255,0.72)", fontSize: 13 }}>
              {subtitle}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {screenshotSrc ? (
        <div style={{ marginTop: 14 }}>
          <img
            src={screenshotSrc}
            alt={`${title} screenshot`}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          />
        </div>
      ) : null}

      <p style={{ margin: "14px 0 0", lineHeight: 1.65, color: "rgba(255,255,255,0.86)" }}>
        {description}
      </p>

      {links.length ? (
        <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
          {links.map((l) => (
            <LinkButton key={l.href} href={l.href} label={l.label} variant="secondary" />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 20% -10%, rgba(37,99,235,0.35), transparent 60%)," +
          "radial-gradient(900px 500px at 90% 10%, rgba(16,185,129,0.20), transparent 55%)," +
          "#0b0f17",
        color: "rgba(255,255,255,0.92)",
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "52px 20px 44px",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        <header style={{ marginBottom: 26 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 38, letterSpacing: 0.2 }}>
                Abdul Wahab Madni
              </h1>
              <p style={{ margin: "10px 0 0", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                Frontend UX Developer — React/TypeScript + Drupal theming (Twig)
              </p>
              <p style={{ margin: "10px 0 0", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: 720 }}>
                I combine front-end engineering (React, TypeScript, HTML/CSS, API integration) with UX research and design
                (Figma, usability testing, design systems). I build accessible, performance-minded interfaces and have hands-on
                Drupal theming experience through multiple Drupal projects.
              </p>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {/* Optional: Add your CV to /public as CV.pdf and enable this */}
              <LinkButton href="/portfolio/CVMadni2.pdf" label="Download CV" variant="primary" />
              <LinkButton href="https://linkedin.com/in/abdul-wahab-madni" label="LinkedIn" variant="primary" />
              <LinkButton href="https://behance.net/wahab-madni" label="Behance" variant="secondary" />
              <LinkButton href="https://github.com/MadniAbdulWahab" label="GitHub" variant="secondary" />
              <LinkButton href="mailto:madniabdulwahab@gmail.com" label="Email" variant="secondary" />
            </div>
          </div>
        </header>

        <section style={{ display: "grid", gap: 14 }}>
          <ProjectCard
            title="Daily4U — Drupal Theming (Twig)"
            subtitle="Theme customization • Templates • Local dev"
            description="January theme customization, Twig templates + preprocess hooks, libraries.yml asset management, and a reproducible DDEV + Composer/Drush workflow."
            tags={["Drupal", "Twig", "Preprocess", "libraries.yml", "DDEV", "Accessibility"]}
            links={[
              { label: "Repository", href: "https://github.com/MadniAbdulWahab/daily4u-site" },
            ]}
            // Optional: add an image to /public and then set screenshotSrc="/daily4u.png"
            // screenshotSrc="/daily4u.png"
          />

          <ProjectCard
            title="UX Case Studies"
            subtitle="Research • Prototyping • Testing"
            description="Wireframes, prototypes, usability testing, and design system work."
            tags={["UX Research", "Figma", "Prototyping", "Usability Testing", "Design Systems"]}
            links={[
              { label: "Behance Portfolio", href: "https://behance.net/wahab-madni" },
            ]}
          />

          <ProjectCard
            title="Calibench — React/TypeScript UI"
            subtitle="Internal research platform"
            description="Research platform UI (upload → processing → results) with robust UI states and QA. Screenshots available on request."
            tags={["React", "TypeScript", "REST APIs", "UI States", "QA", "Accessibility"]}
          />
        </section>

        <footer style={{ marginTop: 26, color: "rgba(255,255,255,0.65)" }}>
          Bonn, Germany •{" "}
          <a
            href="mailto:madniabdulwahab@gmail.com"
            style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.25)" }}
          >
            madniabdulwahab@gmail.com
          </a>
        </footer>
      </div>
    </div>
  );
}
