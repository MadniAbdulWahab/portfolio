export default function App() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 20px", fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ margin: 0, fontSize: 36 }}>Abdul Wahab Madni</h1>
        <p style={{ margin: "10px 0 0", opacity: 0.85 }}>
          Frontend UX Developer — React/TypeScript + Drupal theming (Twig)
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
          <a href="https://linkedin.com/in/abdul-wahab-madni" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://behance.net/wahab-madni" target="_blank" rel="noreferrer">Behance</a>
          <a href="https://github.com/MadniAbdulWahab" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:madniabdulwahab@gmail.com">Email</a>
        </div>
      </header>

      <section style={{ marginBottom: 18 }}>
        <h2 style={{ margin: "0 0 10px" }}>About</h2>
        <p style={{ margin: 0, lineHeight: 1.6, opacity: 0.9 }}>
          I combine front-end engineering (React, TypeScript, HTML/CSS, API integration) with UX research and design
          (Figma, usability testing, design systems). I build accessible, performance-minded interfaces and have hands-on
          Drupal theming experience through multiple Drupal projects.
        </p>
      </section>

      <section style={{ display: "grid", gap: 14 }}>
        <div style={{ border: "1px solid #ddd", borderRadius: 14, padding: 16 }}>
          <h3 style={{ margin: "0 0 8px" }}>Daily4U — Drupal Theming (Twig)</h3>
          <p style={{ margin: "0 0 12px", opacity: 0.9 }}>
            January theme customization, Twig templates + preprocess, libraries.yml asset management, DDEV + Composer/Drush workflow.
          </p>
          <a href="https://github.com/MadniAbdulWahab/daily4u-site" target="_blank" rel="noreferrer">Repository</a>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: 14, padding: 16 }}>
          <h3 style={{ margin: "0 0 8px" }}>UX Case Studies</h3>
          <p style={{ margin: "0 0 12px", opacity: 0.9 }}>
            Wireframes, prototypes, usability testing, and design system work.
          </p>
          <a href="https://behance.net/wahab-madni" target="_blank" rel="noreferrer">Behance Portfolio</a>
        </div>

        <div style={{ border: "1px solid #ddd", borderRadius: 14, padding: 16 }}>
          <h3 style={{ margin: "0 0 8px" }}>Calibench — React/TypeScript UI</h3>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Research platform UI (upload → processing → results) with robust UI states and QA. Screenshots available on request.
          </p>
        </div>
      </section>

      <footer style={{ marginTop: 28, opacity: 0.75 }}>
        Bonn, Germany • <a href="mailto:madniabdulwahab@gmail.com">madniabdulwahab@gmail.com</a>
      </footer>
    </div>
  )
}
