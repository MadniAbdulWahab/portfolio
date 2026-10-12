// Everything shown on the page. Keep it in line with the CV: verified facts only.

export type Link = { label: string; href: string }

export type Project = {
  title: string
  kind: string
  summary: string
  points: string[]
  tech: string[]
  links: Link[]
}

export type Role = {
  title: string
  org: string
  dates: string
  points: string[]
}

export const profile = {
  name: 'Abdul Wahab Madni',
  headline: 'Software and data engineer',
  intro:
    "I'm a research software engineer at the University of Bonn's Hertz Chair for Artificial Intelligence and " +
    'Neuroscience, finishing my M.Sc. in Computer Science. I build data pipelines, research tools and web ' +
    'applications in Python, SQL, Java, C++ and TypeScript, and I check them with tests and reconciled results.',
  location: 'Bonn, Germany',
  photo: 'profile.jpeg',
  links: [
    { label: 'GitHub', href: 'https://github.com/MadniAbdulWahab' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-wahab-madni' },
    { label: 'Email', href: 'mailto:madniabdulwahab@gmail.com' },
  ] satisfies Link[],
}

export const experience: Role[] = [
  {
    title: 'Research Software Engineer (student research assistant)',
    org: 'Hertz Chair for Artificial Intelligence and Neuroscience, University of Bonn',
    dates: 'Jan 2024 – present',
    points: [
      'Develop Python and MATLAB research software for neuroscience data, including functions in the PsPM toolkit.',
      'Build features for Calibench, a platform for benchmarking physiological data-analysis methods ' +
        '(Java/Spring Boot, FastAPI, SQL Server, Docker): user administration, a password-reset flow and ' +
        'recovery of interrupted benchmark jobs.',
      'Built Python tools that convert multi-site experiment data to the BIDS standard and validate datasets ' +
        'against its naming rules and JSON Schemas.',
      'Query, validate and transform research data with SQL and Python, and make application and environment ' +
        'changes on the Linux server that runs Calibench.',
    ],
  },
  {
    title: 'Freelance BI & Data Analyst',
    org: 'Self-employed',
    dates: 'Sep 2021 – Mar 2023',
    points: [
      'Prepared business data from platform APIs and exports with Python, SQL and Databricks, and maintained ' +
        'Power BI dashboards for revenue, product and campaign KPIs.',
    ],
  },
]

const gh = (repo: string) => `https://github.com/MadniAbdulWahab/${repo}`

export const projects: Project[] = [
  {
    title: 'Supply Chain Operations Lakehouse',
    kind: 'Data engineering',
    summary:
      'A bronze, silver and gold pipeline for 250,000 synthetic shipments and 1.25 million events, built with ' +
      'DuckDB and ported to Microsoft Fabric.',
    points: [
      'Checks schemas and file hashes before loading; reruns skip unchanged files.',
      '15 data-quality rules quarantine bad rows with lineage, while late-arriving events are kept and measured.',
      'The Fabric version (PySpark, Delta Lake, Data Factory pipeline) matches the DuckDB results on all 40 ' +
        'reconciliation checks.',
    ],
    tech: ['Python', 'SQL', 'DuckDB', 'PySpark', 'Delta Lake', 'Microsoft Fabric', 'Power BI'],
    links: [{ label: 'Code', href: gh('supply-chain-operations') }],
  },
  {
    title: 'DataPipe',
    kind: 'C++ data processing',
    summary:
      'A C++20 engine that processes CSV files in chunks, with schema validation, filtering, projection and ' +
      'grouped aggregation.',
    points: [
      'A thread pool with bounded in-flight work merges chunk results deterministically.',
      'The same core runs as a command-line tool and as a pybind11 Python module.',
      'CMake, CTest, sanitizers and CI on GCC and Clang.',
    ],
    tech: ['C++20', 'CMake', 'pybind11', 'Python'],
    links: [{ label: 'Code', href: gh('cpp-data-processing-engine') }],
  },
  {
    title: 'GymTrack',
    kind: 'Web app',
    summary:
      'A local-first workout tracker I use myself. Every action is saved on the phone first and synced to ' +
      'Supabase in the background.',
    points: [
      'Keyset-paginated sync with ownership checks, so data from different accounts never mixes.',
      'PostgreSQL migrations with row-level security.',
      'The sync engine and data layer are published as a tested public core with CI.',
    ],
    tech: ['React', 'TypeScript', 'IndexedDB', 'Supabase', 'PostgreSQL', 'Cloudflare'],
    links: [
      { label: 'Live app', href: 'https://gym-tracker.madniabdulwahab.workers.dev' },
      { label: 'Core code', href: gh('gymtrack-core') },
    ],
  },
  {
    title: 'Running Low',
    kind: 'Web app',
    summary: 'A shared list app for two people that syncs live between phones and works offline.',
    points: [
      'Firestore security rules limit each list to its members, covered by 24 emulator tests.',
      'A Cloudflare Worker verifies Firebase sign-in tokens before it sends Web Push notifications.',
      'End-to-end tests drive two simulated iPhones with Playwright.',
    ],
    tech: ['React', 'TypeScript', 'Firebase', 'Cloudflare Workers', 'Playwright'],
    links: [
      { label: 'Live app', href: 'https://running-low.web.app' },
      { label: 'Code', href: gh('running-low') },
    ],
  },
  {
    title: 'GraphRAG question answering',
    kind: 'Applied AI',
    summary: 'Builds a knowledge graph from SQuAD passages with an LLM and uses it to answer questions.',
    points: [
      '11,684 nodes and 14,340 edges from 2,067 contexts, grouped into communities with Louvain.',
      'Compares semantic, FAISS and hybrid BM25 + FAISS retrieval.',
      'Evaluated with BLEU, ROUGE and BERTScore, plus Recall@k, MRR and a text-only RAG baseline.',
    ],
    tech: ['Python', 'PyTorch', 'Transformers', 'Llama 3.2', 'NetworkX', 'FAISS'],
    links: [{ label: 'Code', href: gh('graphrag') }],
  },
  {
    title: 'FIFA 26 Companion',
    kind: 'Web app',
    summary: 'A World Cup 2026 app with fixtures, standings, a knockout bracket and a tournament simulation.',
    points: [
      'Adapters turn data from external football APIs into one set of TypeScript types.',
      'A seeded Monte Carlo simulation estimates who advances from each group.',
      '49 tests and CI, deployed to GitHub Pages.',
    ],
    tech: ['React', 'TypeScript', 'TanStack Query', 'Vitest'],
    links: [
      { label: 'Live app', href: 'https://madniabdulwahab.github.io/fifa26/' },
      { label: 'Code', href: gh('fifa26') },
    ],
  },
]

export const moreProjects: (Link & { note: string })[] = [
  { label: 'Cowboy Shootout', href: gh('cowboy-shootout'), note: 'Java 21 simulation with 30 JUnit tests' },
  { label: 'Insurance Sales BI', href: gh('sap-insurance-sales-bi'), note: 'star schema, data-quality checks, SAP Analytics Cloud' },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'SQL', 'Java', 'C++', 'TypeScript', 'MATLAB'] },
  { group: 'Data', items: ['DuckDB', 'PySpark', 'Delta Lake', 'Microsoft Fabric', 'Databricks', 'Power BI', 'PostgreSQL', 'SQL Server'] },
  { group: 'Backend and web', items: ['Spring Boot', 'FastAPI', 'React', 'Firebase', 'Supabase', 'Cloudflare Workers'] },
  { group: 'Engineering', items: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'pytest', 'Vitest', 'Playwright', 'CMake'] },
]

export const education = [
  { degree: 'M.Sc. Computer Science', school: 'University of Bonn', dates: 'Apr 2023 – Dec 2026 (expected)' },
  { degree: 'B.Sc. Computer Science', school: 'University of the Punjab, Pakistan', dates: 'Nov 2018 – Jul 2022' },
]

export const languages = 'English (C2), German (B1), Urdu (native)'

export const earlierWork: Link[] = [
  { label: 'Drupal theming', href: gh('daily4u-site') },
  { label: 'UX case studies on Behance', href: 'https://www.behance.net/wahab-madni' },
]
