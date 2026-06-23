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
  role: 'AI Engineer | Autonomous Systems | Secure Infrastructure',
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
  "I'm Alif Nayem — a self-taught builder operating at the intersection of AI, automation, and cybersecurity. Based in Bangladesh, building globally.",
  'I founded Spectre Flow, an AI infrastructure agency focused on helping businesses replace repetitive processes with intelligent, self-running systems — zero recurring SaaS fees, full data ownership.',
  "From 6-agent autonomous pipelines to self-hosted CRMs and offensive security tooling, my work leans toward the experimental. Every project is a test of what's possible with focused intent and modern tooling.",
]

export const aboutQuote = "I don't just build tools — I build systems that think for themselves."

export const focusBars = [
  { name: 'Cybersecurity & Ethical Hacking', pct: 90 },
  { name: 'AI Infrastructure & Agents', pct: 80 },
  { name: 'Automation Pipeline Engineering', pct: 70 },
  { name: 'Data Science & ML', pct: 50 },
  { name: 'Web Development', pct: 40 },
]

export const driverProfile = [
  { k: 'Handle', v: 'A. Nayem' },
  { k: 'Role', v: 'AI Systems Architect', tone: 'red' as const },
  { k: 'Agency', v: 'Spectre Flow' },
  { k: 'Location', v: 'Dhaka, Bangladesh', tone: 'dim' as const },
  { k: 'Stack', v: 'Python · TS · FastAPI', tone: 'dim' as const },
  { k: 'Focus', v: 'Autonomous AI · Security', tone: 'dim' as const },
  { k: 'GitHub', v: 'Darkus39', tone: 'dim' as const },
  { k: 'Instagram', v: '@_a.nayem_', tone: 'dim' as const },
  { k: 'Projects', v: '13' },
  { k: 'Live Deploys', v: '5', tone: 'dim' as const },
  { k: 'Cert', v: 'CDA — Coursera 2023', tone: 'dim' as const },
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
      'LLM API Integration — OpenAI / Gemini / Anthropic',
      'Self-Hosted AI — Ollama / Deepseek-r1',
      'Autonomous Workflow Architecture',
      'Tool-Use & Function Calling',
    ],
  },
  {
    icon: '💻',
    name: 'Development',
    sub: 'Languages & Frameworks',
    items: [
      'Python — Async / FastAPI / asyncio',
      'TypeScript — Next.js App Router',
      'React — Hooks & State Architecture',
      'Zustand / Context — State Management',
      'Apache Cordova — Android APK',
      'SQL · HTML/CSS · Bash',
    ],
  },
  {
    icon: '🏗',
    name: 'Infrastructure',
    sub: 'DevOps & Self-Hosted',
    items: [
      'Docker — Containerised Deployment',
      'Cloudflare Tunnel & Zero Trust',
      'Supabase — Realtime & Auth',
      'PostgreSQL / SQLite — Schema Design',
      'systemd — Service Management',
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
      'Vector Embeddings — Pinecone / RAG',
      'Multimodal AI — Gemini Vision',
      'NumPy / Pandas — Data Processing',
    ],
  },
  {
    icon: '🔐',
    name: 'Security',
    sub: 'Offensive & Network',
    items: [
      'Penetration Testing — Kali Linux',
      'Network Analysis — Wireshark',
      'Exploitation — Metasploit / sqlmap',
      'Credential Attacks — Hydra / Hashcat',
      'Recon — Nmap / Shodan / Maltego',
      'Wireless — Aircrack-ng',
    ],
  },
  {
    icon: '📦',
    name: 'Product Shipping',
    sub: 'End-to-End Delivery',
    items: [
      'Next.js — Full-Stack App Architecture',
      'Monaco Editor — Browser IDE Integration',
      'D3.js — Data Visualization',
      'Apache Cordova — Native Android APK',
      'Vercel — Edge Deployment & CI/CD',
      'API-First Product Design',
    ],
  },
  {
    icon: '🔗',
    name: 'Automation',
    sub: 'Pipelines & Integrations',
    items: [
      'n8n — Visual Workflow Automation',
      'Gmail API · Google Calendar',
      'WhatsApp Business · Twilio',
      'Discord · Apollo.io',
      'Webhook Design & Event Handling',
      'SSE & WebSocket Streaming',
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
    desc: '6-agent autonomous AI system with a Perceive-Assess-Decide-Act-Reflect cognitive loop. Sub-3s response, 40% fewer task failures via episodic memory. Runs entirely on local Ollama inference — zero cloud cost, 24/7 uninterrupted operation via SharedMemory priority bus.',
    stack: ['Python', 'FastAPI', 'asyncio', 'Deepseek-r1', 'Docker', 'SSE'],
    status: 'PRODUCTION',
    links: [{ label: 'GitHub', href: 'https://github.com/Darkus39' }],
  },
  {
    num: '002',
    name: 'Spectre Vault',
    desc: 'Unified knowledge system combining a 4-agent AI layer (Researcher, Summarizer, Task Manager, Connector) with a Monaco .md vault. Agents research, synthesize, and persist notes autonomously. Zustand + localStorage EventBus preserves 500 events across reloads.',
    stack: ['Next.js', 'TypeScript', 'Zustand', 'Ollama', 'Monaco', 'D3.js'],
    links: [{ label: 'GitHub', href: 'https://github.com/Darkus39' }],
  },
  {
    num: '003',
    name: 'Spectre CRM',
    desc: 'Self-hosted CRM replacing ~$200/year in SaaS tools. 4-stage Kanban (Inbound→Qualified→Proposal→Won), AI lead scoring, n8n webhook pipeline, real-time Supabase sync under 500ms. Cut lead processing time by ~90%.',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'n8n'],
    status: 'SELF-HOSTED',
    links: [{ label: 'GitHub', href: 'https://github.com/Darkus39' }],
  },
  {
    num: '004',
    name: 'Oblivion',
    desc: 'Self-hosted Obsidian alternative. Monaco Editor with live GFM preview, split-pane mode, multi-tab dirty-state tracking, autosave under 500ms. Shipped 7+ features (full-text search, tag panel, command palette, backlinks, wiki-links) in a single release cycle.',
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
    desc: 'AI-powered knowledge management on Vercel with contextual retrieval and note synthesis. Surfaces cross-note connections across 100+ stored notes automatically via AI-driven synthesis, contextual retrieval, and knowledge graph generation.',
    stack: ['Next.js', 'TypeScript', 'Ollama', 'Zustand', 'Vercel'],
    status: 'LIVE',
    links: [
      { label: 'Demo ↗', href: 'https://second-brain-darkus39.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Darkus39/Second-brain-Darkus39' },
    ],
  },
  {
    num: '006',
    name: 'MindForge',
    desc: 'Fully offline Android APK with 300+ DSA/CS questions across 4 difficulty tiers. XP/levelling, 30-min caps, streak tracking, speed bonuses. CSP locked to self-hosted assets only — zero external network calls by design.',
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

export const techStackModules: TechModule[] = [
  {
    id: 'security',
    label: 'Security & Infrastructure',
    tools: ['Kali Linux', 'Linux', 'Docker', 'Cloudflare', 'systemd', 'Wireshark'],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    tools: ['n8n', 'LangChain', 'Anthropic', 'Gemini', 'OpenAI', 'Ollama', 'Pinecone'],
  },
  {
    id: 'dev',
    label: 'Development',
    tools: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML/CSS', 'Bash'],
  },
  {
    id: 'data',
    label: 'Data & Databases',
    tools: ['PostgreSQL', 'SQLite', 'Supabase', 'NocoDB', 'NumPy', 'Pandas', 'Scikit-Learn'],
  },
]

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
    tools: ['Nmap', 'Shodan', 'Wireshark', 'Maltego', 'Netcat', 'Nikto', 'Gobuster'],
  },
  {
    id: 'exploitation',
    label: 'Exploitation',
    sub: 'Offensive Security',
    tools: ['Metasploit', 'Burp Suite', 'sqlmap', 'Hydra', 'John the Ripper'],
  },
  {
    id: 'wireless',
    label: 'Credential & Wireless',
    sub: 'Offensive Security',
    tools: ['Hashcat', 'Aircrack-ng', 'Wifite', 'Reaver'],
  },
  {
    id: 'automation',
    label: 'Automation Stack',
    sub: 'Pipelines & Integrations',
    tools: ['n8n', 'Gmail API', 'Google Calendar', 'WhatsApp Business', 'Twilio', 'Discord', 'Apollo.io'],
  },
  {
    id: 'ai-tools',
    label: 'AI Tooling',
    sub: 'Models & APIs',
    tools: ['Ollama', 'Gemini API', 'OpenAI API', 'Anthropic API', 'LangChain', 'Pinecone'],
  },
  {
    id: 'platform',
    label: 'Platform & OS',
    sub: 'Runtime & Infra',
    tools: ['Kali Linux', 'Ubuntu', 'WSL2', 'Docker', 'Cloudflare', 'Vercel', 'systemd'],
  },
  {
    id: 'data-tools',
    label: 'Data & Storage',
    sub: 'Databases & Processing',
    tools: ['PostgreSQL', 'Supabase', 'SQLite', 'NocoDB', 'NumPy', 'Pandas', 'Scikit-Learn'],
  },
]

export const contactChannels = [
  { label: 'Agency', value: 'spectre-flow.vercel.app', href: 'https://spectre-flow.vercel.app' },
  { label: 'Book a Call', value: 'cal.com/ayanokouji', href: 'https://cal.com/ayanokouji-j98vjt' },
  { label: 'LinkedIn', value: 'Alif Nayem', href: 'https://linkedin.com/in/alifnayem-spectreflow' },
  { label: 'Instagram', value: '@_a.nayem_', href: 'https://instagram.com/_a.nayem_' },
  { label: 'GitHub', value: 'Darkus39', href: 'https://github.com/Darkus39' },
]
