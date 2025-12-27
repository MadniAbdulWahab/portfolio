import { useCallback } from "react";
import type { CSSProperties } from "react";

type LinkButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

function LinkButton({ href, label, variant = "secondary" }: LinkButtonProps) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 14,
    border: "1px solid transparent",
    transition: "transform 120ms ease, background 120ms ease, border-color 120ms ease",
    userSelect: "none",
    lineHeight: 1,
  };

  const styles: Record<string, CSSProperties> = {
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

  const isMail = href.startsWith("mailto:");
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      target={isMail ? undefined : isExternal ? "_blank" : undefined}
      rel={isMail ? undefined : isExternal ? "noreferrer" : undefined}
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
        fontWeight: 700,
        color: "rgba(255,255,255,0.78)",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.14)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function ActionButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        appearance: "none",
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.06)",
        color: "rgba(255,255,255,0.92)",
        borderRadius: 12,
        padding: "10px 14px",
        fontWeight: 800,
        fontSize: 14,
        cursor: "pointer",
        transition: "transform 120ms ease, border-color 120ms ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.22)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0px)";
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.14)";
      }}
    >
      {label}
    </button>
  );
}

type ProjectCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: 0.2 }}>
            {title}
          </h3>
          {subtitle ? (
            <div
              style={{
                marginTop: 6,
                color: "rgba(255,255,255,0.72)",
                fontSize: 13,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
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

      <p
        style={{
          margin: "14px 0 0",
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.86)",
        }}
      >
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

type RoleCardProps = {
  title: string;
  summary: string;
  tags: string[];
  onView: () => void;
};

function RoleCard({ title, summary, tags, onView }: RoleCardProps) {
  return (
    <div
      style={{
        borderRadius: 18,
        padding: 18,
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.04)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        minHeight: 190,
      }}
    >
      <div>
        <h3 style={{ margin: 0, fontSize: 18, letterSpacing: 0.2 }}>{title}</h3>
        <p style={{ margin: "10px 0 0", lineHeight: 1.6, color: "rgba(255,255,255,0.82)" }}>
          {summary}
        </p>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div style={{ marginTop: "auto" }}>
        <ActionButton label="View highlights" onClick={onView} />
      </div>
    </div>
  );
}

export default function App() {
  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // IMPORTANT for GitHub Pages (/portfolio/):
  // Put CVMadni2.pdf inside /public and link via BASE_URL.
  const cvHref = `${import.meta.env.BASE_URL}CVMadni2.pdf`;

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
          maxWidth: 1020,
          margin: "0 auto",
          padding: "52px 20px 44px",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        {/* HEADER */}
        <header style={{ marginBottom: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h1 style={{ margin: 0, fontSize: 38, letterSpacing: 0.2 }}>
                Abdul Wahab Madni
              </h1>
              <p style={{ margin: "10px 0 0", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                Frontend UX Developer — React/TypeScript + Drupal theming (Twig)
              </p>
              <p
                style={{
                  margin: "10px 0 0",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                  maxWidth: 760,
                }}
              >
                I combine front-end engineering (React, TypeScript, HTML/CSS, API integration) with UX research and design
                (Figma, usability testing, design systems). I build accessible, performance-minded interfaces and have hands-on
                Drupal theming experience through multiple Drupal projects.
              </p>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <LinkButton href={cvHref} label="Download CV" variant="primary" />
              <LinkButton href="https://linkedin.com/in/abdul-wahab-madni" label="LinkedIn" variant="primary" />
              <LinkButton href="https://behance.net/wahab-madni" label="Behance" variant="secondary" />
              <LinkButton href="https://github.com/MadniAbdulWahab" label="GitHub" variant="secondary" />
              <LinkButton href="mailto:madniabdulwahab@gmail.com" label="Email" variant="secondary" />
            </div>
          </div>
        </header>

        {/* THREE SIDES / PROFILE CARDS */}
        <section style={{ marginTop: 18, marginBottom: 18 }}>
          <h2 style={{ margin: "0 0 10px", fontSize: 18, color: "rgba(255,255,255,0.86)" }}>
            Profile Focus Areas
          </h2>

          <div
            style={{
              display: "grid",
              gap: 14,
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            <RoleCard
              title="Software Engineer"
              summary="Build reliable tooling and workflows for data-heavy problems, focusing on maintainability, reproducibility, and clean architecture."
              tags={["Python/MATLAB", "Automation", "Reproducibility"]}
              onView={() => scrollToId("software-engineer")}
            />
            <RoleCard
              title="Web Developer (Front-End)"
              summary="Deliver responsive, accessible user interfaces with React/TypeScript and UX-first implementation practices."
              tags={["React/TypeScript", "Accessibility", "Drupal Theming"]}
              onView={() => scrollToId("front-end")}
            />
            <RoleCard
              title="Data Analyst"
              summary="Turn complex datasets into clear insights using Python/SQL and dashboards; strong in exploratory analysis and visualization."
              tags={["Python/SQL", "Dashboards", "EDA"]}
              onView={() => scrollToId("data-analyst")}
            />
          </div>
        </section>

        {/* ROLE HIGHLIGHTS (scroll targets) */}
        <section style={{ display: "grid", gap: 14, marginBottom: 18 }}>
          <div id="software-engineer" style={{ scrollMarginTop: 18 }}>
            <ProjectCard
              title="Software Engineer — Highlights"
              subtitle="Tooling • Automation • Research workflows"
              description="I build reliable software for data-heavy workflows, focusing on reproducibility, clean structure, and maintainable code. Comfortable working across Python/MATLAB components and shipping developer-friendly documentation."
              tags={["Automation", "Pipelines", "Documentation", "Reproducibility"]}
              links={[
                { label: "GitHub Profile", href: "https://github.com/MadniAbdulWahab" },
              ]}
            />
          </div>

          <div id="front-end" style={{ scrollMarginTop: 18 }}>
            <ProjectCard
              title="Front-End Web Developer — Highlights"
              subtitle="React/TypeScript • UX-first delivery • Drupal theming"
              description="I translate UX intent into clean UI implementations: reusable components, consistent interaction patterns, and accessibility-aware decisions. I also deliver Drupal theming work (Twig, preprocess, libraries.yml) through practical project builds."
              tags={["React", "TypeScript", "UX", "WCAG", "Drupal/Twig"]}
              links={[
                { label: "Behance Portfolio", href: "https://behance.net/wahab-madni" },
              ]}
            />
          </div>

          <div id="data-analyst" style={{ scrollMarginTop: 18 }}>
            <ProjectCard
              title="Data Analyst — Highlights"
              subtitle="EDA • Dashboards • Insight-driven analysis"
              description="I analyze data using Python/SQL and present results through clear visuals and dashboards. Strong in exploratory analysis, segmentation-style insights, and communicating findings in a stakeholder-friendly way."
              tags={["Python", "SQL", "Power BI", "Visualization"]}
            />
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section style={{ display: "grid", gap: 14 }}>
          <h2 style={{ margin: "0 0 2px", fontSize: 18, color: "rgba(255,255,255,0.86)" }}>
            Featured Work
          </h2>

          <ProjectCard
            title="Daily4U — Drupal Theming (Twig)"
            subtitle="Theme customization • Templates • Local dev"
            description="January theme customization, Twig templates + preprocess hooks, libraries.yml asset management, and a reproducible DDEV + Composer/Drush workflow."
            tags={["Drupal", "Twig", "Preprocess", "libraries.yml", "DDEV", "Accessibility"]}
            links={[{ label: "Repository", href: "https://github.com/MadniAbdulWahab/daily4u-site" }]}
            // Optional: add an image to /public and then set screenshotSrc="/daily4u.png"
            // screenshotSrc="/daily4u.png"
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
        </section>

        <footer style={{ marginTop: 26, color: "rgba(255,255,255,0.65)" }}>
          Bonn, Germany •{" "}
          <a
            href="mailto:madniabdulwahab@gmail.com"
            style={{
              color: "rgba(255,255,255,0.85)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            madniabdulwahab@gmail.com
          </a>
        </footer>
      </div>
    </div>
  );
}
