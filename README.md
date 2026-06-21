# A. Nayem Portfolio

The original red/black HTML design, ported faithfully into TanStack Start
(React + Vite + Nitro). The sim-racing/HUD concept has been fully removed
per a later revision — this is back to the source aesthetic.

## Run it

```
npm install
npm run dev
```
Open http://localhost:3000

## Build / Preview

```
npm run build
npx vite preview --port 3005
```
(`vite preview` only works after a build — it serves `.output`, it doesn't create it.)

## Deploying to Vercel

Still requires the Nitro Vite plugin (`nitro/vite`) in `vite.config.ts` —
without it Vercel can't build TanStack Start into Functions. Push and
import the repo; Vercel auto-detects the framework.

## What's in this version

- **Ported 1:1 from the original HTML**: custom cursor + magnetic hover ring,
  canvas particle/grid background, glitch-on-hover hero name, scroll progress
  bar, 3D-tilt skill cards, original red/black/Barlow Condensed/DM Mono
  design system.
- **Sections**: Hero → 01 About → 02 Skills → 03 Projects → 04 Tech Stack →
  05 Tools → 06 Contact. No racing/garage/sector language anywhere.
- **Kept from the TanStack rebuild, by request**: the horizontal scroll-snap
  project cards, and the right-side spiral nav rail (restyled red, relabeled
  to the new section names, desktop-only ≥1400px).
- **New — Tech Stack** (04): sourced directly from your GitHub profile
  README (`stack.conf` and `htop --skills` blocks) — Security & Infra, AI &
  Automation, Development, Data & Databases, plus the skill-usage bars.
- **New — Tools** (05): Dev Environment (VS Code, Claude, Claude Code, Git,
  GitHub, Docker Desktop, Postman) and four offensive-security categories
  (Recon & Scanning, Exploitation, Credential & Wireless, Platform) covering
  Nmap, Shodan, Wireshark, Maltego, Metasploit, Burp Suite, sqlmap, Hydra,
  John the Ripper, Hashcat, Aircrack-ng, Kali Linux.

## Worth checking when you run it

- The Tools list is curated from your memory'd CV tools (Nmap, Burp Suite,
  Metasploit, Hydra) plus Shodan as you named it, plus standard adjacent
  tools (sqlmap, John the Ripper, Hashcat, Aircrack-ng, Maltego) to round
  out the categories. Trim/edit `toolCategories` in `src/data/content.ts`
  to match exactly what you actually use.
- `prefers-reduced-motion` disables the canvas animation (renders one static
  frame instead), the cursor stays normal, and all reveal/scan animations
  are skipped.
