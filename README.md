# Battula Bhargav — Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live-thenovember22.github.io%2Fcv-0A84FF.svg)](https://thenovember22.github.io/cv/)
[![Design](https://img.shields.io/badge/Design-Custom%20%26%20Original%20by%20Battula%20Bhargav-30D158.svg)](https://thenovember22.github.io/cv/)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-BF5AF2.svg)](https://developer.mozilla.org/)
[![License](https://img.shields.io/badge/License-MIT-FF9F0A.svg)](LICENSE)

An ultra-sleek, cinematic developer portfolio for **Battula Bhargav** (M.Tech CSE at NIT Goa, Former Systems Engineer at Infosys, GATE CSE 2025 AIR 10,139, Amazon ML Summer School Fellowship).

> **Note on Original Design**: Every component, visual concept, interactive mechanism, and layout in this portfolio was **designed, conceived, and engineered completely from scratch by Battula Bhargav** on his own. From the scroll-driven flight path and the Yggdrasil leaf pods to the playing-card achievement fan and the personal developer contact desk, all UI/UX flows and CSS animation systems are custom, bespoke creations built with pure vanilla web technologies.

---

## 🎨 Original Design Architecture & Highlights

### 1. Career Flight Path (`#experience`)
- **Scroll-Controlled Aircraft**: An interactive SVG flight path where scrolling propels a minimal aircraft across career destinations:
  - **Infosys Limited** (Systems Engineer — Software & Data Engineering, Hyderabad)
  - **National Institute of Technology Goa** (Graduate Teaching Assistant — C/C++, Python & Data Structures)
  - **National Institute of Technology Goa** (Placement Coordinator — M.Tech CSE)
  - **Amazon India Machine Learning Team** (Amazon ML Summer School 2024 Participant)
- **Zero-Jargon Milestones**: Clean destination stops displaying only essential organizational and role metadata, with secondary frosted liquid-glass flyouts expanding smoothly on hover without colliding with section headings.

### 2. Yggdrasil Tree of Knowledge (`#education`)
- **Organic Leaf Pods**: Education milestones are represented as stylized leaves growing organically from the branches of the Tree of Knowledge (Yggdrasil).
- **Interactive Veins & Highlights**: Hovering over a leaf pod triggers an SVG pulsating glow tracing through the central vein, connecting degrees and coursework at NIT Goa and B.Tech.

### 3. Achievements & Accreditations Fan (`#achievements`)
- **Physical Playing Cards on a Luxury Surface**: Replaces standard bento grids with 5 physical playing cards fanned out in a smooth semicircular spread:
  - **Card 1 (Leftmost, -10°)**: GATE CSE & DA 2025 National Qualifications (AIR 10,139 in CSE, AIR 9,572 in DA)
  - **Card 2 (Mid-Left, -5°)**: Amazon ML Summer School (MLSS 2024 Fellowship)
  - **Card 3 (Centerpiece Hero, 0°)**: **National Cadet Corps (NCC) — Corporal 'C' Certificate** (17A BN NCC)
  - **Card 4 (Mid-Right, +5°)**: LeetCode Algorithmic Mastery (300+ Solved, DP & Graph Theory)
  - **Card 5 (Rightmost, +10°)**: Infosys Technical Accreditations (Certified Python & Certified Database/SQL)
- **Jitter-Free 3D Hover Lift**: Hardware-accelerated CSS transforms using individual custom properties (`--card-x`) so hovered cards elevate upward (`translateY(-26px) scale(1.04)`) and come forward (`z-index: 50`) with zero horizontal displacement or layout reflow.
- **Responsive Stack**: Automatically transitions to a clean single-column vertical card arrangement on mobile devices with zero horizontal overflow.

### 4. Personal Developer Contact Desk (`#contact`)
- **Authentic Stationery Aesthetic**: Designed as a personal developer letter desk:
  - Greeting: *"Dear future collaborator,"*
  - Message: *"I'm currently open to software engineering, AI/ML, and research opportunities. Let's build something useful."*
  - Direct communication capsules: Email, GitHub (with subtle emerald identity accent), LinkedIn, and downloadable Resume.
- **Initially Hidden Expandable Form**: Clicking **`WRITE TO BHARGAV →`** smoothly unfolds a direct compose slip (Name, Email, Subject, Message) directly on the desk canvas.

### 5. Liquid Glass & Dual Theme System
- **Obsidian Dark Mode**: Deep black base with ambient radial illumination, frosted glass panels (`backdrop-filter: blur(36px) saturate(200%)`), and specular hairline borders.
- **Frost Light Mode**: 1-click switcher to crisp frosted glass with high-contrast typography and subtle reflections.
- **Pure Vanilla Stack**: 100% handcrafted HTML5, modern CSS3 (Custom Properties, Flexbox, Grid, 3D Transforms), and lightweight Vanilla JavaScript without external framework overhead.

---

## 🛠️ Tech Stack

- **Markup**: Semantic HTML5 (Custom SVG illustrations, semantic containers)
- **Styles**: Pure CSS3 (Hardware-accelerated 3D transforms, CSS Custom Properties, Liquid-Glass Frosted Glassmorphism, Responsive Media Queries)
- **Logic**: Vanilla JavaScript (Scroll observer, interactive theme switcher, custom desk & card controllers, clipboard copy utility)
- **Icons**: FontAwesome 6.5.2
- **Typography**: Apple SF Pro / Inter font stack with monospace accenting

---

## 🚀 Local Development & Preview

You can open `index.html` directly in any web browser, or launch a lightweight local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js npx
npx serve .
```

Then visit `http://localhost:8000` in your browser.

---

## 📦 Deployment to GitHub Pages

To update live GitHub Pages at `https://thenovember22.github.io/cv/`:

```bash
git add .
git commit -m "docs: update README with original design attribution by Battula Bhargav"
git push origin main
```

---

## 📄 License
MIT © 2026 [Battula Bhargav](https://github.com/theNovember22)
