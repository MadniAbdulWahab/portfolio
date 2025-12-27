import React from "react";

type LinkButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

function LinkButton({ href, label, variant = "secondary" }: LinkButtonProps) {
  const isMail = href.startsWith("mailto:");

  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "10px 14px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 650,
    fontSize: 14,
    border: "1px solid transparent",
    transition: "transform 120ms ease, background 120ms ease, border-color 120ms ease, box-shadow 120ms ease",
    userSelect: "none",
    whiteSpace: "nowrap",
  };

  const styles: Record<NonNullable<LinkButtonProps["variant"]>, React.CSSProperties> = {
    primary: {
      background: "#2563eb",
      color: "#ffffff",
      borderColor: "#2563eb",
      boxShadow: "0 8px 20px rgba(37,99,235,0.22)",
    },
    secondary: {
      background: "rgba(255,255,255,0.72)",
      color: "rgba(17,24,39,0.92)",
      borderColor: "rgba(17,24,39,0.10)",
      boxShadow: "0 8px 20px rgba(17,24,39,0.06)",
    },
  };

  const hoverBorder = variant === "primary" ? "#1d4ed8" : "rgba(17,24,39,0.16)";
  const hoverBg = variant === "primary" ? "#1d4ed8" : "rgba(255,255,255,0.90)";

  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      style={{ ...base, ...styles[variant] }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = hoverBorder;
        (e.currentTarget as HTMLAnchorElement).style.background = hoverBg;
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          variant === "primary"
            ? "0 10px 26px rgba(37,99,235,0.26)"
            : "0 10px 26px rgba(17,24,39,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0px)";
        (e.currentTarget as HTMLAnchorElement).style.borderColor = styles[variant].borderColor as string;
        (e.currentTarget as HTMLAnchorElement).style.background = styles[variant].background as string;
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = styles[variant].boxShadow as string;
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
        padding: "6px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 650,
        color: "rgba(17,24,39,0.72)",
        background: "rgba(255,255,255,0.80)",
        border: "1px solid rgba(17,24,39,0.10)",
        boxShadow: "0 6px 16px rgba(17,24,39,0.05)",
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
  screenshotSrc?: string;
};

function ProjectCard({ title, subtitle, description, tags, links = [], screenshotSrc }: ProjectCardProps) {
  return (
    <div
      style={{
        borderRadius: 18,
        padding: 18,
        border: "1px solid rgba(17,24,39,0.10)",
        background: "rgba(255,255,255,0.62)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 18px 50px rgba(17,24,39,0.10)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h3 style={{ margin: 0, fontSize: 18, letterSpacing: 0.1, color: "rgba(17,24,39,0.92)" }}>{title}</h3>
          {subtitle ? (
            <div style={{ marginTop: 6, color: "rgba(17,24,39,0.60)", fontSize: 13, lineHeight: 1.4 }}>
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
              border: "1px solid rgba(17,24,39,0.10)",
              boxShadow: "0 14px 34px rgba(17,24,39,0.10)",
            }}
          />
        </div>
      ) : null}

      <p style={{ margin: "14px 0 0", lineHeight: 1.65, color: "rgba(17,24,39,0.78)" }}>{description}</p>

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
  // Base-aware links (work on GitHub Pages project site: /portfolio/)
  const baseUrl = import.meta.env.BASE_URL;
  const cvHref = `${baseUrl}CVMadni2.pdf`;

  // Put your image in: public/profile.jpg  (or change filename here)
  const profileSrc = `${baseUrl}profile.jpeg`;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 700px at 15% -10%, rgba(37,99,235,0.16), transparent 60%)," +
          "radial-gradient(900px 600px at 90% 0%, rgba(16,185,129,0.10), transparent 55%)," +
          "linear-gradient(180deg, #f8fafc 0%, #eef2ff 35%, #ffffff 100%)",
        color: "rgba(17,24,39,0.92)",
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "56px 20px 44px",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        }}
      >
        <header style={{ marginBottom: 22 }}>
          {/* Top section with image on the right */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 18,
              alignItems: "start",
            }}
          >
            <div>
              <h1 style={{ margin: 0, fontSize: 40, letterSpacing: 0.2, color: "rgba(17,24,39,0.92)" }}>
                Abdul Wahab Madni
              </h1>

              <p style={{ margin: "10px 0 0", color: "rgba(17,24,39,0.70)", lineHeight: 1.5 }}>
                Frontend UX Developer — React/TypeScript + Drupal theming (Twig)
              </p>

              <p style={{ margin: "10px 0 0", color: "rgba(17,24,39,0.66)", lineHeight: 1.65, maxWidth: 760 }}>
                I combine front-end engineering (React, TypeScript, HTML/CSS, API integration) with UX research and design
                (Figma, usability testing, design systems). I build accessible, performance-minded interfaces and have hands-on
                Drupal theming experience through multiple Drupal projects.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
                <LinkButton href={cvHref} label="Download CV" variant="primary" />
                <LinkButton href="https://linkedin.com/in/abdul-wahab-madni" label="LinkedIn" variant="secondary" />
                <LinkButton href="https://behance.net/wahab-madni" label="Behance" variant="secondary" />
                <LinkButton href="https://github.com/MadniAbdulWahab" label="GitHub" variant="secondary" />
                <LinkButton href="mailto:madniabdulwahab@gmail.com" label="Email" variant="secondary" />
              </div>
            </div>

            {/* Profile image (top-right) */}
            <div
              style={{
                width: 124,
                height: 124,
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(17,24,39,0.10)",
                background: "rgba(255,255,255,0.75)",
                boxShadow: "0 18px 50px rgba(17,24,39,0.12)",
              }}
              aria-label="Profile photo"
            >
              <img
                src={profileSrc}
                alt="Abdul Wahab Madni"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </header>

        <section style={{ display: "grid", gap: 14 }}>
          <ProjectCard
            title="Daily4U — Drupal Theming (Twig)"
            subtitle="Theme customization • Templates • Local dev"
            description="January theme customization, Twig templates + preprocess hooks, libraries.yml asset management, and a reproducible DDEV + Composer/Drush workflow."
            tags={["Drupal", "Twig", "Preprocess", "libraries.yml", "DDEV", "Accessibility"]}
            links={[{ label: "Repository", href: "https://github.com/MadniAbdulWahab/daily4u-site" }]}
            // Optional: add an image in /public and enable below
            // screenshotSrc={`${baseUrl}daily4u.png`}
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

        <footer style={{ marginTop: 26, color: "rgba(17,24,39,0.58)" }}>
          Bonn, Germany •{" "}
          <a
            href="mailto:madniabdulwahab@gmail.com"
            style={{
              color: "rgba(17,24,39,0.82)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(17,24,39,0.22)",
            }}
          >
            madniabdulwahab@gmail.com
          </a>
        </footer>

        {/* Mobile responsiveness (no extra CSS file): stack image below on small screens */}
        <style>
          {`
            @media (max-width: 720px) {
              header > div {
                grid-template-columns: 1fr !important;
              }
              header img {
                border-radius: 16px !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}
