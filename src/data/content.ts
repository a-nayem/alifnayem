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
    icon: '👾',
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
  category: 'main' | 'creative'
  nfc?: boolean
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    num: '001',
    name: 'Portfolio Website',
    desc: 'This site. Sim-racing HUD aesthetic built with TanStack Start, WebGL canvas background, Zustand telemetry state, RAF scroll physics, and a live ELUSIVE terminal. Deployed on Vercel with zero framework compromise.',
    stack: ['TanStack Start', 'TypeScript', 'Zustand', 'WebGL', 'Vite'],
    status: 'LIVE',
    category: 'main',
    links: [{ label: 'Live ↗', href: 'https://alifnayem.vercel.app' }],
  },
  {
    num: '002',
    name: 'SpectreFlow — Agency Site',
    desc: 'Marketing site for Spectre Flow with an OrbitalMesh hero — Canvas 2D perspective projection, orbital card layout, and animated agent nodes. Designed to convert cold visitors into booked calls.',
    stack: ['Next.js', 'TypeScript', 'Canvas 2D', 'Tailwind'],
    status: 'LIVE',
    category: 'main',
    links: [{ label: 'Live ↗', href: 'https://spectre-flow.vercel.app' }],
  },
  {
    num: '003',
    name: 'Spectre Vault',
    desc: '4-agent agentic second brain — Analyst, Negotiator, Researcher, Communicator — running on self-hosted Deepseek-R1 with Qdrant vector memory, 342-node 3D knowledge graph, and live agent metrics dashboard. Deployed per client as part of Spectre Flow infrastructure.',
    stack: ['HTML', 'JavaScript', 'Qdrant', 'Deepseek-R1', 'Canvas 3D'],
    category: 'main',
    links: [{ label: 'GitHub', href: 'https://github.com/Darkus39' }],
  },
  {
    num: '004',
    name: 'Spectre CRM',
    desc: 'Self-hosted agentic CRM with 4-stage Kanban pipeline, AI lead scoring via n8n, real-time Supabase sync under 500ms, and multi-market support (CA, DE, AU, NL). Replaces ~$200/year in SaaS. Cut lead processing time by 90%.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'n8n'],
    status: 'LIVE',
    category: 'main',
    links: [{ label: 'Demo ↗', href: 'https://sample-crm-nine.vercel.app' }],
  },
  {
    num: '005',
    name: 'MindForge',
    desc: 'Fully offline Android quiz app for 6 domains — DSA, AI/ML, Logic, Databases, Negotiation, Mind Control — with 400 questions each across easy/medium/hard/killer tiers. 30s per question, XP tracking, level system, and a 30-minute daily lock to enforce intentional practice.',
    stack: ['Apache Cordova', 'JavaScript', 'Android', 'LocalStorage'],
    category: 'main',
    links: [{ label: 'GitHub', href: 'https://github.com/Darkus39/Mind-Forge' }],
  },
  {
    num: '006',
    name: 'Second Brain',
    desc: 'AI knowledge management system with 5 agents — Researcher, Summarizer, Connector, Daily Digest, Custom — running on Gemini 2.5 Flash. Features a knowledge graph, notes, tasks, projects, and a daily digest. Browser-local key storage, zero server.',
    stack: ['Next.js', 'TypeScript', 'Gemini API', 'Zustand', 'Vercel'],
    status: 'LIVE',
    category: 'main',
    links: [
      { label: 'Demo ↗', href: 'https://second-brain-darkus39.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Darkus39/Second-brain-Darkus39' },
    ],
  },
  {
    num: '007',
    name: 'Elusive — Story of Safety',
    desc: 'A universe built for someone. 24 feelings, each mapped to a story, a mood, and a letter. Delivered as a physical NFC card with a custom sticker — tap to enter. An emotion-driven web experience that lives outside the screen.',
    stack: ['Next.js', 'TypeScript', 'NFC'],
    category: 'creative',
    nfc: true,
    links: [{ label: 'Live ↗', href: 'https://elusive-story-of-safety.vercel.app' }],
  },
  {
    num: '008',
    name: 'Sketch the Air Muse',
    desc: 'An AI muse for an aspiring artist. Pick a mood and scene, summon a drawing idea, receive a message. Built as a personal gift — delivered on a handmade NFC card with a custom sticker.',
    stack: ['Next.js', 'TypeScript', 'NFC'],
    category: 'creative',
    nfc: true,
    links: [{ label: 'Live ↗', href: 'https://sketch-the-air.vercel.app' }],
  },
  {
    num: '009',
    name: 'Mood Dice',
    desc: 'Roll a dice, get a positive action or mini challenge for the day. A tiny wellness tool with a big idea — that small spontaneous acts shift your mood. Delivered as an NFC card you tap when you need a nudge.',
    stack: ['Next.js', 'TypeScript', 'NFC'],
    category: 'creative',
    nfc: true,
    links: [{ label: 'Live ↗', href: 'https://mood-dice-rouge.vercel.app' }],
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
