export interface NavSection {
  id: string
  num: string
  label: string
}

export const navSections: NavSection[] = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'skills', num: '02', label: 'Skills' },
  { id: 'projects', num: '03', label: 'Projects (9)' },
  { id: 'tech-stack', num: '04', label: 'Tech Stack' },
  { id: 'tools', num: '05', label: 'Tools' },
  { id: 'contact', num: '06', label: 'Contact' },
]

export const driver = {
  name: 'A. Nayem',
  fullName: 'Alif Nayem',
  role: 'Cyber Security Engineer | AI Architect | AI Engineer',
  position: 'Founder — Trisien Automence',
  bio: 'Building autonomous AI systems that run themselves. From multi-agent pipelines to self-hosted infrastructure — I design for precision, zero cloud dependency, and full data ownership.',
  github: 'Darkus39',
  instagram: '@_a.nayem_',
  location: 'Dhaka, Bangladesh',
  stack: 'Python · TS · Next.js',
}

export const heroStats = [
  { label: 'Projects Built', value: '13', suffix: '+' },
  { label: 'Live Deployments', value: '5', suffix: '+' },
  { label: 'Agency', value: 'TRISIEN AUTOMENCE' },
  { label: 'Availability', value: "LET'S BUILD", alert: true },
]

export const aboutCopy = [
  "I'm Alif Nayem — a self-taught builder operating at the intersection of AI, automation, and cybersecurity. Based in Bangladesh, building globally.",
  'I founded Trisien Automence, an AI infrastructure agency focused on helping businesses replace repetitive processes with intelligent, self-running systems — zero recurring SaaS fees, full data ownership.',
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
  { k: 'Agency', v: 'Trisien Automence' },
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

export interface ProjectTimelineEntry {
  date: string
  event: string
}

export interface Project {
  num: string
  slug: string
  name: string
  desc: string
  fullDesc: string
  stack: string[]
  status?: string
  category: 'main' | 'creative'
  nfc?: boolean
  thumbnail: string
  links: ProjectLink[]
  timeline: ProjectTimelineEntry[]
  challenges: string[]
  learned: string[]
}

export const projects: Project[] = [
  {
    num: '001',
    slug: 'portfolio-website',
    thumbnail: '/thumbnails/portfolio-website.svg',
    name: 'Portfolio Website',
    desc: 'This site. Sim-racing HUD aesthetic built with TanStack Start, WebGL canvas background, Zustand telemetry state, RAF scroll physics, and a live ELUSIVE terminal. Deployed on Vercel with zero framework compromise.',
    fullDesc: 'This portfolio is not a template — it is a purpose-built system designed to communicate identity at a glance. The sim-racing HUD aesthetic draws from Assetto Corsa and cinematic game-engine UI. Every visual decision is intentional: the carbon-fiber texture, JetBrains Mono terminal, racing-red accents, and the ELUSIVE terminal that types live in the hero. Built on TanStack Start with Vite, it uses a single RAF scroll physics loop for smooth section transitions, Zustand for HUD telemetry state, and a WebGL canvas background running continuously without blocking the main thread. The spiral navigation rail on the right acts as a live section indicator. No UI library, no component kit — every element is hand-coded to spec.',
    stack: ['TanStack Start', 'TypeScript', 'Zustand', 'WebGL', 'Vite', 'CSS'],
    status: 'LIVE',
    category: 'main',
    links: [{ label: 'Live ↗', href: 'https://alifnayem.vercel.app' }],
    timeline: [
      { date: 'Early June 2026', event: 'Concept locked — sim-racing HUD aesthetic chosen' },
      { date: 'Week 1', event: 'TanStack Start scaffold, WebGL canvas background, base layout' },
      { date: 'Week 2', event: 'ELUSIVE terminal, Zustand state, RAF scroll loop' },
      { date: 'Week 3', event: 'Spiral rail, section reveals, glassmorphism cards' },
      { date: 'Week 4', event: 'Projects section with 9 projects, creative split, NFC labels' },
      { date: 'Present', event: 'Active iteration — project detail pages, favicon, performance tuning' },
    ],
    challenges: [
      'Designing a scroll physics loop that felt mechanical and precise without using any animation library',
      'Getting TanStack Start SSR hydration to not conflict with client-only WebGL canvas on Vercel',
      'Building the ELUSIVE terminal typing sequence with accurate timing and state without causing React re-render storms',
      'Making the spiral rail navigation work as a live position indicator across all scroll positions',
      'Keeping the backdrop-filter blur on glassmorphism cards from causing text blurring on hover — solved by separating the transform and blur into two compositor layers',
    ],
    learned: [
      'Deep understanding of browser compositor layers and how transform, blur, and will-change interact',
      'How to architect a single RAF loop that drives multiple independent systems without coupling them',
      'SSR hydration strategies for client-only canvas elements in TanStack Start',
      'The value of design constraints — the racing aesthetic made every decision faster and more deliberate',
    ],
  },
  {
    num: '002',
    slug: 'spectreflow-site',
    thumbnail: '/thumbnails/spectreflow-site.svg',
    name: 'Trisien Automence — Agency Site',
    desc: 'Marketing site for Trisien Automence with an OrbitalMesh hero — Canvas 2D perspective projection, orbital card layout, and animated agent nodes. Designed to convert cold visitors into booked calls.',
    fullDesc: 'The Trisien Automence agency site is the public face of the agency — built to communicate trust, capability, and momentum to cold visitors in under 10 seconds. The OrbitalMesh hero is a Canvas 2D gyroscope-ring sphere with six agent cards orbiting it using 3D XYZ rotation math and perspective projection — no Three.js, no WebGL, pure Canvas 2D math. The site features a glassmorphism design system built on void blacks, electric indigo, liquid teal, and gold accents. Magnetic buttons, pipeline visualizations, card tilt interactions, and shimmer animations are all CSS and vanilla JS — zero animation libraries. Copy targets Canada, Germany, Australia, and the Netherlands markets with tailored objection handling and pricing. The site was rebuilt multiple times from scratch as the agency brand evolved.',
    stack: ['Next.js', 'TypeScript', 'Canvas 2D', 'Tailwind', 'Vercel'],
    status: 'LIVE',
    category: 'main',
    links: [{ label: 'Live ↗', href: 'https://trisien-automence.vercel.app' }],
    timeline: [
      { date: '~5 months ago', event: 'Initial build — basic React site with glassmorphism system' },
      { date: '~3 months ago', event: 'First major rebuild — 3D knowledge graph, magnetic buttons, pipeline viz' },
      { date: '~2 months ago', event: 'OrbitalMesh hero added — Canvas 2D 3D rotation math, perspective projection' },
      { date: '~6 weeks ago', event: 'Site-wide brightness lift, updated pricing tiers, Netherlands market copy' },
      { date: '~4 weeks ago', event: 'Objection-handling section added, hero section redesign finalized' },
    ],
    challenges: [
      'Implementing 3D orbital motion on a 2D Canvas without a 3D library — required writing XYZ rotation matrices and perspective projection from scratch',
      'Making the OrbitalMesh feel alive and physics-driven while staying perfectly performant on mid-range hardware',
      'Writing market-specific copy for four distinct enterprise markets (CA, DE, AU, NL) without losing a unified brand voice',
      'Rebuilding the site multiple times without losing the core aesthetic — each rebuild had to feel like an evolution, not a reset',
      'No paid AI tools used at any point — all design, copy, and code iterations were done through free-tier tooling and manual AI engineering',
    ],
    learned: [
      '3D rotation math and perspective projection on Canvas 2D — a skill that transferred directly to Trisien Vault',
      'How to write conversion-focused copy for B2B enterprise markets across different cultural registers',
      'The discipline of iterating on a live marketing site without breaking it for active prospects',
      'Building magnetic and physics-feeling UI interactions with pure CSS transforms and vanilla JS',
    ],
  },
  {
    num: '003',
    slug: 'spectre-vault',
    thumbnail: '/thumbnails/spectre-vault.svg',
    name: 'Trisien Vault',
    desc: '4-agent agentic second brain — Analyst, Negotiator, Researcher, Communicator — running on self-hosted Deepseek-R1 with Qdrant vector memory, 342-node 3D knowledge graph, and live agent metrics dashboard. Deployed per client as part of Trisien Automence infrastructure.',
    fullDesc: 'Trisien Vault is the flagship product of the Trisien Automence agency — a multi-agent second brain deployed per client on their own self-hosted infrastructure. The MVP demo showcases four specialized agents: Analyst handles statistical modelling and anomaly detection, Negotiator runs Nash equilibrium models and strategy trees, Researcher indexes papers and maps concepts, and Communicator handles tone calibration and message framing across markets. All agents run on a self-hosted Deepseek-R1 70B model via Qdrant vector memory with 128-dimensional embeddings and episodic recall. The 3D knowledge graph renders 342 nodes using perspective projection on Canvas 2D with drag-to-rotate and scroll-to-zoom. The client-facing version is built in Next.js and deployed inside the client\'s own infrastructure — zero cloud dependency, full data ownership.',
    stack: ['HTML', 'JavaScript', 'Qdrant', 'Deepseek-R1', 'Canvas 3D', 'Next.js'],
    status: 'LIVE',
    category: 'main',
    links: [{ label: 'Demo ↗', href: 'https://spectre-vault.vercel.app' }],
    timeline: [
      { date: '~6 months ago', event: 'Architecture design — 4-agent system with episodic memory' },
      { date: '~5 months ago', event: 'MVP HTML demo built — terminal interface, agent loop, basic metrics' },
      { date: '~4 months ago', event: '3D knowledge graph added — Canvas 2D with perspective projection and force-directed layout' },
      { date: '~3 months ago', event: 'Deep blue dark mode, restructured layout, analytics section' },
      { date: 'Ongoing', event: 'Next.js client version in development — per-client self-hosted deployment' },
    ],
    challenges: [
      'Designing a coherent system architecture for 4 agents with distinct cognitive roles before writing a single line of code',
      'Building a RAG pipeline without paid vector database subscriptions — self-hosted Qdrant was the solution',
      'Getting 128-dimensional embeddings to produce meaningful recall without a fine-tuned model',
      'Rendering a 342-node 3D knowledge graph in real time on Canvas 2D without Three.js or WebGL',
      'Designing the agent communication protocol so agents could share context without stepping on each other\'s outputs',
    ],
    learned: [
      'End-to-end RAG pipeline architecture — from chunking and embedding to retrieval and generation',
      'How to design agent cognitive roles that complement rather than duplicate each other',
      'Canvas 2D 3D math — force-directed layouts, perspective projection, drag interaction',
      'Self-hosting AI infrastructure at zero cost using open-source models and free-tier compute',
    ],
  },
  {
    num: '004',
    slug: 'spectre-crm',
    thumbnail: '/thumbnails/spectre-crm.svg',
    name: 'Trisien CRM',
    desc: 'Self-hosted agentic CRM with 4-stage Kanban pipeline, AI lead scoring via n8n, real-time Supabase sync under 500ms, and multi-market support (CA, DE, AU, NL). Replaces ~$200/year in SaaS. Cut lead processing time by 90%.',
    fullDesc: 'Trisien CRM is a self-hosted agentic sales pipeline built to replace paid CRM tools entirely. It features a 4-stage Kanban board (Inbound → Qualified → Proposal → Closed) with AI lead scoring powered by n8n automation webhooks. Each lead is automatically scored by an AI agent on inbound, routed by market (Canada, Germany, Australia, Netherlands), and surfaced with priority flags. Real-time sync via Supabase keeps the pipeline under 500ms latency. The demo version shows a live pipeline with plausible leads across all four markets — each with AI scores, source tracking, and stage history. The production version connects to live lead sources via WhatsApp, form submissions, and Apollo.io enrichment.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'n8n', 'Vercel'],
    status: 'LIVE',
    category: 'main',
    links: [{ label: 'Demo ↗', href: 'https://sample-crm-nine.vercel.app' }],
    timeline: [
      { date: '~5 months ago', event: 'Initial build — basic Kanban with Supabase backend' },
      { date: '~4 months ago', event: 'n8n webhook integration — AI lead scoring pipeline connected' },
      { date: '~3 months ago', event: 'Multi-market support added — CA, DE, AU, NL flags and routing' },
      { date: '~2 months ago', event: 'Demo build with plausible pipeline data, sidebar nav fixes, demo banner' },
      { date: '~1 month ago', event: 'Auth layer added to production build, Apollo.io enrichment connected' },
    ],
    challenges: [
      'Designing the n8n webhook pipeline so AI scoring happened automatically on lead inbound without manual triggers',
      'Getting Supabase real-time sync below 500ms consistently across different network conditions',
      'Building multi-market routing logic that correctly identified and tagged leads by source country',
      'Debugging non-functional sidebar nav items that appeared correctly but routed to empty views',
      'Populating a convincing demo pipeline with plausible multi-market data that would resonate with enterprise prospects',
    ],
    learned: [
      'End-to-end webhook pipeline design — from inbound trigger to AI scoring to CRM update',
      'Supabase real-time architecture and how to keep latency low under concurrent updates',
      'How to design a demo product that closes prospects — the data and framing matter as much as the features',
      'n8n as a serious automation backbone for production agentic systems',
    ],
  },
  {
    num: '005',
    slug: 'mindforge',
    thumbnail: '/thumbnails/mindforge.svg',
    name: 'MindForge',
    desc: 'Fully offline Android quiz app for 6 domains — DSA, AI/ML, Logic, Databases, Negotiation, Mind Control — with 400 questions each across easy/medium/hard/killer tiers. 30s per question, XP tracking, level system, and a 30-minute daily lock to enforce intentional practice.',
    fullDesc: 'MindForge is a fully offline Android application built with Apache Cordova 12. It covers 6 knowledge domains — DSA, AI/ML, Logic, Databases, Negotiation, and Mind Control — with 400 questions per domain across four difficulty tiers: Easy, Medium, Hard, and Killer. Each question runs on a 30-second countdown timer. The XP and levelling system rewards correct answers and speed bonuses, while the 30-minute daily lock mechanic enforces intentional practice — after 30 minutes, XP and level progression pause for the day. Users can still practice beyond 30 minutes but gain no progression rewards. The app is entirely self-contained with no internet dependency, no external API calls, and no data leaving the device. Two more domains are currently in development.',
    stack: ['Apache Cordova 12', 'JavaScript', 'Android', 'LocalStorage', 'HTML/CSS'],
    category: 'main',
    links: [{ label: 'GitHub', href: 'https://github.com/Darkus39/Mind-Forge' }],
    timeline: [
      { date: '~7 months ago', event: 'Concept and domain selection — 6 domains, 400 questions each' },
      { date: '~6 months ago', event: 'Cordova 12 scaffold, question engine, 30s timer mechanic' },
      { date: '~5 months ago', event: 'XP system, level tracking, correct answer rate metrics' },
      { date: '~4 months ago', event: '30-minute daily lock mechanic implemented' },
      { date: 'Ongoing', event: '2 additional domains in development' },
    ],
    challenges: [
      'Architecting 2,400+ questions across 6 domains with consistent difficulty calibration',
      'Building a reliable 30-second countdown timer in Cordova that stayed accurate even on low-end Android hardware',
      'Designing the 30-minute lock mechanic so it felt like a feature, not a restriction — the framing was as important as the implementation',
      'Getting LocalStorage to persist XP and level state reliably across Cordova app restarts on Android',
      'No internet, no cloud, no subscription — every feature had to work entirely on-device',
    ],
    learned: [
      'Apache Cordova architecture and the bridge between web and native Android',
      'How to design gamification mechanics that reinforce healthy habits rather than addictive loops',
      'Offline-first data architecture using LocalStorage as a reliable persistence layer',
      'Question design and difficulty calibration across multiple knowledge domains',
    ],
  },
  {
    num: '006',
    slug: 'second-brain',
    thumbnail: '/thumbnails/second-brain.svg',
    name: 'Second Brain',
    desc: 'AI knowledge management system with 5 agents — Researcher, Summarizer, Connector, Daily Digest, Custom — running on Gemini 2.5 Flash. Features a knowledge graph, notes, tasks, projects, and a daily digest. Browser-local key storage, zero server.',
    fullDesc: 'Second Brain is a fully client-side AI knowledge management system running on Gemini 2.5 Flash. Five agents handle distinct cognitive tasks: Researcher surfaces relevant papers and insights, Summarizer auto-tags and condenses new notes, Connector finds hidden relationships between nodes in the knowledge graph, Daily Digest compiles a morning brief from recent activity, and a Custom Agent slot for user-defined tasks. All data stays in the browser — no server, no database, no cloud. The API key is stored locally and never touches any server except Google\'s. The knowledge graph auto-links nodes by AI-detected relationships and renders with drag-to-rotate interaction. Notes, tasks, projects, and agent outputs are all unified in a single dashboard.',
    stack: ['Next.js', 'TypeScript', 'Gemini API', 'Zustand', 'Vercel'],
    status: 'LIVE',
    category: 'main',
    links: [
      { label: 'Demo ↗', href: 'https://second-brain-darkus39.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/Darkus39/Second-brain-Darkus39' },
    ],
    timeline: [
      { date: '~4 months ago', event: 'Scaffold — Next.js App Router, BaseAgent class, EventBus, AgentRegistry' },
      { date: '~3 months ago', event: '5 agent implementations, Zustand store, per-agent chat windows' },
      { date: '~2 months ago', event: 'Knowledge graph with AI auto-linking, notes/tasks/projects modules' },
      { date: '~1 month ago', event: 'Daily Digest agent, model adapter routing, Gemini 2.5 Flash integration' },
      { date: 'Recent', event: 'API key validation bug fixed — AQ-prefix keys now accepted alongside AIza' },
    ],
    challenges: [
      'Building a multi-agent system where 5 agents could run concurrently without blocking the UI thread',
      'Designing an EventBus architecture that let agents communicate without direct coupling',
      'Hardcoded API key validation was rejecting valid Gemini keys starting with AQ instead of AIza — a subtle bug that broke the entire onboarding flow',
      'Building a knowledge graph that auto-linked nodes by AI-detected semantic relationships without a vector database',
      'Keeping all data strictly browser-local while still supporting complex multi-agent state across sessions',
    ],
    learned: [
      'How to architect a multi-agent system with an EventBus and AgentRegistry pattern that scales cleanly',
      'Browser-local AI systems are viable for serious applications — no server required for meaningful intelligence',
      'The importance of API key validation logic — a single hardcoded prefix check broke the entire product for a class of valid users',
      'Zustand as a clean state backbone for complex multi-agent dashboards',
    ],
  },
  {
    num: '007',
    slug: 'elusive-story-of-safety',
    thumbnail: '/thumbnails/elusive-story-of-safety.svg',
    name: 'Elusive — Story of Safety',
    desc: 'A universe built for someone. 24 feelings, each mapped to a story, a mood, and a letter. Delivered as a physical NFC card with a custom sticker — tap to enter. An emotion-driven web experience that lives outside the screen.',
    fullDesc: 'Elusive — Story of Safety is a deeply personal web experience built as a gift. It maps 24 human feelings to individual stories, moods, and handwritten letters — each one a small universe. The experience is designed to be discovered, not searched for. It is delivered as a physical NFC card with a hand-applied custom sticker. Tapping the card opens the experience directly — no app, no login, no friction. The design is soft, intimate, and deliberately different from every other project in this portfolio. The idea, the narrative, the emotional architecture — all entirely original. AI was used only in the code, never in the concept.',
    stack: ['Next.js', 'TypeScript', 'NFC', 'Vercel'],
    category: 'creative',
    nfc: true,
    links: [{ label: 'Live ↗', href: 'https://elusive-story-of-safety.vercel.app' }],
    timeline: [
      { date: '~3 months ago', event: 'Concept — 24 feelings mapped to stories, moods, and letters' },
      { date: '~3 months ago', event: 'Web experience built and deployed on Vercel' },
      { date: '~2 months ago', event: 'NFC card written, custom sticker applied, physically delivered' },
    ],
    challenges: [
      'Translating a deeply personal emotional concept into a web interface without losing its intimacy',
      'Designing navigation that felt like exploration rather than clicking through pages',
      'Making the NFC delivery seamless — the tap-to-open experience had to work instantly without any app or login',
    ],
    learned: [
      'Emotion-driven UI design requires entirely different instincts than functional product design',
      'NFC as a physical delivery mechanism for web experiences opens up a new category of product',
      'The constraint of building something for one specific person produces more original work than building for a general audience',
    ],
  },
  {
    num: '008',
    slug: 'sketch-the-air-muse',
    thumbnail: '/thumbnails/sketch-the-air-muse.svg',
    name: 'Sketch the Air Muse',
    desc: 'An AI muse for an aspiring artist. Pick a mood and scene, summon a drawing idea, receive a message. Built as a personal gift — delivered on a handmade NFC card with a custom sticker.',
    fullDesc: 'Sketch the Air Muse is an AI-powered creative prompt generator built as a gift for an aspiring artist. The experience is built around a single question: what is stirring in you right now? The user picks a mood and a scene, and the muse generates a drawing idea tailored to that combination. A hidden personal message is embedded in the experience — visible only to the intended recipient. Like the other NFC projects, it is delivered as a physical card with a custom sticker. Tap to open. No app, no login. The concept, the narrative character of the muse, and the personal message are entirely original ideas — AI was used only to assist with the code.',
    stack: ['Next.js', 'TypeScript', 'NFC', 'Vercel'],
    category: 'creative',
    nfc: true,
    links: [{ label: 'Live ↗', href: 'https://sketch-the-air.vercel.app' }],
    timeline: [
      { date: '~2 months ago', event: 'Concept — AI muse character, mood + scene mechanic designed' },
      { date: '~2 months ago', event: 'Built and deployed on Vercel' },
      { date: '~2 months ago', event: 'NFC card written, sticker applied, delivered as a physical gift' },
    ],
    challenges: [
      'Designing an AI prompt system that felt like a muse rather than a tool — the tone and character had to feel alive',
      'Embedding a personal message that only the intended recipient would notice',
      'Building something that felt magical in under a second of interaction — the NFC tap had to feel like opening a letter',
    ],
    learned: [
      'How to design AI interactions that feel personal and human rather than transactional',
      'Character-driven UI design — giving the interface a personality changes how users interact with it',
      'The phygital product format (physical NFC + digital experience) creates a completely different emotional response than a URL alone',
    ],
  },
  {
    num: '009',
    slug: 'mood-dice',
    thumbnail: '/thumbnails/mood-dice.svg',
    name: 'Mood Dice',
    desc: 'Roll a dice, get a positive action or mini challenge for the day. A tiny wellness tool with a big idea — that small spontaneous acts shift your mood. Delivered as an NFC card you tap when you need a nudge.',
    fullDesc: 'Mood Dice is the simplest of the NFC projects — and the most immediate. Roll a dice, get a positive action or mini challenge for the day. The idea is that small spontaneous acts — a walk, a message to a friend, a minute of stillness — shift your emotional state more reliably than planned routines. The experience is designed to be used in a moment of low mood or restlessness. It takes three seconds. The dice roll is animated, the result is clear, and the card sits on your desk ready to tap whenever you need a nudge. Like the other NFC projects, the concept is entirely original. AI assisted only with the code.',
    stack: ['Next.js', 'TypeScript', 'NFC', 'Vercel'],
    category: 'creative',
    nfc: true,
    links: [{ label: 'Live ↗', href: 'https://mood-dice-rouge.vercel.app' }],
    timeline: [
      { date: '~2 months ago', event: 'Concept — dice mechanic for spontaneous positive action' },
      { date: '~2 months ago', event: 'Built and deployed on Vercel' },
      { date: '~2 months ago', event: 'NFC card written, sticker applied, delivered' },
    ],
    challenges: [
      'Making a single-mechanic experience feel satisfying and complete rather than thin',
      'Designing the dice animation to feel physical and weighted, not just a random number generator',
      'Curating actions and challenges that were genuinely useful without feeling generic or preachy',
    ],
    learned: [
      'Constraint-driven design — a single mechanic forces you to make everything around it count',
      'The minimum viable emotional experience — how little you need to make someone feel something',
      'Wellness product design requires honesty and specificity, not motivation-poster language',
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
  { label: 'Agency', value: 'trisien-automence.vercel.app', href: 'https://trisien-automence.vercel.app' },
  { label: 'Book a Call', value: 'cal.com/ayanokouji', href: 'https://cal.com/ayanokouji-j98vjt' },
  { label: 'LinkedIn', value: 'Alif Nayem', href: 'https://linkedin.com/in/alifnayem-trisienautomence' },
  { label: 'Instagram', value: '@_a.nayem_', href: 'https://instagram.com/_a.nayem_' },
  { label: 'GitHub', value: 'Darkus39', href: 'https://github.com/Darkus39' },
]
