export interface NavSection {
  id: string
  num: string
  label: string
}

export const navSections: NavSection[] = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'skills', num: '02', label: 'Skills' },
  { id: 'projects', num: '03', label: 'Projects' },
  { id: 'tech-stack', num: '04', label: 'Tech Stack' },
  { id: 'tools', num: '05', label: 'Tools' },
  { id: 'contact', num: '06', label: 'Contact' },
]

export const driver = {
  name: 'A. Nayem',
  fullName: 'Alif Nayem',
  role: 'AI Architect & Builder',
  position: 'Founder — Spectre Flow',
  bio: 'Building autonomous AI systems that run themselves. From multi-agent pipelines to self-hosted infrastructure — I design for precision, zero cloud dependency, and full data ownership.',
  github: 'Darkus39',
  instagram: '@_a.nayem_',
  location: 'Dhaka, Bangladesh',
  stack: 'Python · TS · Next.js',
}

export const heroStats = [
  { label: 'Projects Built', value: '13', suffix: '+' },
  { label: 'Live Deployments', value: '5', suffix: '+' },
  { label: 'Agency', value: 'SPECTRE FLOW' },
  { label: 'Availability', value: "LET'S BUILD", alert: true },
]

export const aboutCopy = [
  "I'm Alif Nayem — a self-taught builder operating at the intersection of AI, automation, and web development. Based in Bangladesh, building globally.",
  'I founded Spectre Flow, an AI automation agency focused on helping businesses replace repetitive processes with intelligent, self-running systems.',
  "From GPT-powered voice agents to hand-drawn gesture recognition, my work leans toward the experimental. Every project is a test of what's possible with focused intent and modern tooling.",
]

export const aboutQuote = "I don't just build tools — I build systems that think for themselves."

export const focusBars = [
  { name: 'AI / Automation', pct: 90 },
  { name: 'Full-Stack Web', pct: 80 },
  { name: 'Prompt Engineering', pct: 95 },
  { name: 'UI / Design', pct: 75 },
]

export const driverProfile = [
  { k: 'Handle', v: 'A. Nayem' },
  { k: 'Role', v: 'AI Systems Architect', tone: 'red' as const },
  { k: 'Agency', v: 'Spectre Flow' },
  { k: 'Location', v: 'Dhaka, Bangladesh', tone: 'dim' as const },
  { k: 'Stack', v: 'Python · TS · Next.js', tone: 'dim' as const },
  { k: 'Focus', v: 'Autonomous AI · Infra', tone: 'dim' as const },
  { k: 'GitHub', v: 'Darkus39', tone: 'dim' as const },
  { k: 'Instagram', v: '@_a.nayem_', tone: 'dim' as const },
  { k: 'Projects', v: '13' },
  { k: 'Live Deploys', v: '5', tone: 'dim' as const },
  { k: 'Availability', v: 'Work With Me', tone: 'red' as const },
]

export interface SkillCategory {
  icon: string
  name: string
  sub: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    icon: '⚡',
    name: 'Agentic AI',
    sub: 'Systems & Orchestration',
    items: [
      'Multi-Agent Orchestration — n8n',
      'RAG Pipeline Design — Pinecone',
      'LLM API Integration — OpenAI / Gemini',
      'Self-Hosted AI — Ollama',
      'Autonomous Workflow Architecture',
      'Tool-Use & Function Calling',
    ],
  },
  {
    icon: '💻',
    name: 'Development',
    sub: 'Languages & Frameworks',
    items: [
      'Python — Async / FastAPI',
      'TypeScript — Next.js App Router',
      'React — Hooks & State Architecture',
      'Zustand / Context — State Management',
      'Apache Cordova — Android APK',
      'REST & Webhook API Design',
    ],
  },
  {
    icon: '🏗',
    name: 'Infrastructure',
    sub: 'DevOps & Self-Hosted',
    items: [
      'Docker — Containerised Deployment',
      'Vercel Edge — CI/CD Pipelines',
      'Cloudflare Tunnel & Zero Trust',
      'PostgreSQL — Schema Design',
      'Self-Hosted Server Architecture',
      'Linux — Ubuntu / Kali',
    ],
  },
  {
    icon: '🧠',
    name: 'ML & Vision',
    sub: 'Models & Pipelines',
    items: [
      'Computer Vision — MediaPipe',
      'Whisper STT — Real-Time Pipelines',
      'Scikit-Learn — Model Training',
      'Vector Embeddings & Semantic Search',
      'Multimodal AI — Gemini Vision',
      'NumPy / Pandas — Data Processing',
    ],
  },
  {
    icon: '🔐',
    name: 'Security',
    sub: 'Offensive & Network',
    items: [
      'Network Analysis — Wireshark',
      'Penetration Testing — Kali Linux',
      'Zero Trust Architecture',
      'SSL / TLS — Cert Management',
      'GDPR / PIPEDA Compliant Design',
      'Threat Modelling — AI Systems',
    ],
  },
  {
    icon: '📦',
    name: 'Product Shipping',
    sub: 'End-to-End Delivery',
    items: [
      'Next.js — Full-Stack App Architecture',
      'Zustand — Complex State Management',
      'Monaco Editor — Browser IDE Integration',
      'Apache Cordova — Native Android APK',
      'Vercel — Edge Deployment & CI/CD',
      'API-First Product Design',
    ],
  },
  {
    icon: '🎨',
    name: 'UI & Design',
    sub: 'Interface & Experience',
    items: [
      'Tailwind CSS — Utility-First Styling',
      'Framer Motion — UI Animations',
      'Figma — Wireframes & Prototyping',
      'Design Systems & Token Architecture',
      'Responsive & Mobile-First Layouts',
      'Dark Mode & Theming Systems',
    ],
  },
  {
    icon: '🔗',
    name: 'Integrations',
    sub: 'APIs & Automation',
    items: [
      'n8n — Visual Workflow Automation',
      'Supabase — Realtime & Auth',
      'Webhook Design & Event Handling',
      'OAuth 2.0 — Third-Party Auth Flows',
      'Stripe — Payment Integration',
      'SSE & WebSocket Streaming',
    ],
  },
]

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  num: string
  name: string
  desc: string
  stack: string[]
  status?: string
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    num: '001',
    name: 'SpectreFlow Agent System',
    desc: '6-agent autonomous AI system with a custom Perceive-Assess-Decide-Act-Reflect cognitive loop. Runs entirely on local Ollama inference — no cloud API, no per-call cost. Live agent dashboard via FastAPI + SSE.',
    stack: ['Python', 'FastAPI', 'asyncio', 'Ollama', 'Docker', 'SSE'],
    status: 'PRODUCTION',
    links: [{ label: 'GitHub', href: 'https://github.com/Darkus39' }],
  },
  {
    num: '002',
    name: 'Spectre Vault',
    desc: 'Unified knowledge system combining a 4-agent AI layer (Researcher, Summarizer, Task Manager, Connector) with a Monaco-based .md vault. Agents research, synthesize, and persist notes automatically.',
    stack: ['Next.js', 'TypeScript', 'Zustand', 'Ollama', 'Monaco', 'SSE'],
    links: [{ label: 'GitHub', href: 'https://github.com/Darkus39' }],
  },
  {
    num: '003',
    name: 'Spectre CRM',
    desc: 'Fully self-hosted CRM replacing ~$200/year in SaaS tools. 4-stage Kanban pipeline, AI lead scoring, funnel analytics, and n8n webhook ingestion with real-time Supabase sync under 500ms.',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind'],
    status: 'SELF-HOSTED',
    links: [{ label: 'GitHub', href: 'https://github.com/Darkus39' }],
  },
  {
    num: '004',
    name: 'Oblivion',
    desc: 'Self-hosted web knowledge base built as an Obsidian alternative. Monaco Editor with live GFM preview, multi-tab workspace, full-text search, file tree, tag panel, command palette, and dark/light theme.',
    stack: ['Next.js', 'TypeScript', 'Monaco', 'Zustand', 'D3.js'],
    status: 'LIVE',
    links: [
      { label: 'Demo ↗', href: 'https://oblivion-nu.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Darkus39/oblivion' },
    ],
  },
  {
    num: '005',
    name: 'Second Brain',
    desc: 'AI-powered personal knowledge management system. 4 specialist agents (Researcher, Summarizer, Task Manager, Connector) with streaming SSE, Zustand persistence, and EventBus cross-agent communication.',
    stack: ['Next.js', 'TypeScript', 'Ollama', 'Zustand', 'Vercel'],
    status: 'LIVE',
    links: [
      { label: 'Demo ↗', href: 'https://second-brain-darkus39.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Darkus39' },
    ],
  },
  {
    num: '006',
    name: 'MindForge',
    desc: 'Fully offline Android quiz app with 300+ DSA/CS questions across 4 difficulty tiers. XP/levelling, 30-min session caps, streak tracking, and speed bonuses — zero backend, zero network calls.',
    stack: ['JavaScript', 'Cordova', 'Android', 'LocalStorage'],
    links: [
      { label: 'Download ↗', href: 'https://github.com/Darkus39/Mind-Forge/releases/latest' },
      { label: 'GitHub', href: 'https://github.com/Darkus39/Mind-Forge' },
    ],
  },
]

export interface TechModule {
  id: string
  label: string
  tools: string[]
}

// Sourced directly from github.com/Darkus39 profile README (stack.conf block).
export const techStackModules: TechModule[] = [
  {
    id: 'security',
    label: 'Security & Infrastructure',
    tools: ['Kali Linux', 'Linux', 'Docker', 'Cloudflare'],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    tools: ['n8n', 'LangChain', 'Anthropic', 'Gemini', 'OpenAI', 'Ollama'],
  },
  {
    id: 'dev',
    label: 'Development',
    tools: ['Python', 'JavaScript', 'TypeScript', 'Java'],
  },
  {
    id: 'data',
    label: 'Data & Databases',
    tools: ['NumPy', 'Pandas', 'Scikit-Learn', 'PostgreSQL', 'NocoDB', 'Pinecone'],
  },
]

// Sourced directly from github.com/Darkus39 profile README (htop --skills block).
export const skillUsage = [
  { name: 'Cybersecurity & Ethical Hacking', pct: 90 },
  { name: 'AI Infrastructure & Agents', pct: 80 },
  { name: 'Automation Pipeline Engineering', pct: 70 },
  { name: 'Data Science & ML', pct: 50 },
  { name: 'Web Development', pct: 40 },
]

export interface ToolCategory {
  id: string
  label: string
  sub: string
  tools: string[]
}

export const toolCategories: ToolCategory[] = [
  {
    id: 'dev-env',
    label: 'Dev Environment',
    sub: 'Daily Drivers',
    tools: ['VS Code', 'Claude', 'Claude Code', 'Git', 'GitHub', 'Docker Desktop', 'Postman'],
  },
  {
    id: 'recon',
    label: 'Recon & Scanning',
    sub: 'Offensive Security',
    tools: ['Nmap', 'Shodan', 'Wireshark', 'Maltego', 'Netcat'],
  },
  {
    id: 'exploitation',
    label: 'Exploitation',
    sub: 'Offensive Security',
    tools: ['Metasploit', 'Burp Suite', 'sqlmap', 'Hydra'],
  },
  {
    id: 'cracking',
    label: 'Credential & Wireless',
    sub: 'Offensive Security',
    tools: ['John the Ripper', 'Hashcat', 'Aircrack-ng'],
  },
  {
    id: 'platform',
    label: 'Platform',
    sub: 'OS & Runtime',
    tools: ['Kali Linux', 'Ubuntu', 'WSL2'],
  },
]

export const contactChannels = [
  { label: 'Agency', value: 'spectre-flow.vercel.app', href: 'https://spectre-flow.vercel.app' },
  { label: 'LinkedIn', value: 'Alif Nayem', href: 'https://linkedin.com/in/alifnayem-spectreflow' },
  { label: 'Instagram', value: '@_a.nayem_', href: 'https://instagram.com/_a.nayem_' },
  { label: 'GitHub', value: 'Darkus39', href: 'https://github.com/Darkus39' },
]
