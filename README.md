# Sowmiya R K — Portfolio

A premium, top 1% developer portfolio built with React (Vite), Tailwind CSS, and Framer Motion.

## ✨ Features

- **Animated Hero** — Mesh gradient background, typing animation, floating stats
- **Custom Cursor** — Glowing circular cursor with follower, expands on hover
- **Glass Navbar** — Sticky, blurred, active section highlight
- **3D Project Cards** — Mouse-tracking tilt, glow border, click-to-open modal
- **Animated Timeline** — Alternating experience timeline with Framer Motion
- **Dark/Light Mode** — Toggle in navbar
- **Loading Screen** — Animated rings with progress bar
- **Scroll Animations** — Fade-in, slide-up, stagger throughout
- **Contact Form** — Glassmorphism card with animated focus states
- **Fully Responsive** — Mobile, tablet, desktop

## 🛠 Tech Stack

- **React 18** (Vite)
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React** (icons)
- **Syne + DM Sans + JetBrains Mono** (Google Fonts)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Cursor.jsx          # Custom glowing cursor
│   ├── Loader.jsx          # Loading screen animation
│   ├── Navbar.jsx          # Sticky glass navbar
│   ├── Hero.jsx            # Hero with mesh bg + typing
│   ├── About.jsx           # About + stats cards
│   ├── Skills.jsx          # Skills grid with glow pills
│   ├── Projects.jsx        # Projects section
│   ├── ProjectCard.jsx     # 3D tilt card + modal
│   ├── Experience.jsx      # Animated timeline
│   ├── Achievements.jsx    # Achievement cards
│   ├── Contact.jsx         # Contact form + info
│   └── Footer.jsx          # Footer
├── data/
│   └── portfolio.js        # All portfolio data
├── hooks/
│   └── index.js            # Custom hooks (tilt, typing, active section)
├── styles/
│   └── index.css           # Global styles + Tailwind
├── App.jsx
└── main.jsx
```

## 🎨 Customization

Edit `src/data/portfolio.js` to update:
- Your name, bio, skills
- Projects (title, description, tech stack, GitHub link)
- Work experience
- Achievements
- Contact info

## 📦 Deploy

Works with Vercel, Netlify, or any static hosting:
```bash
npm run build
# Upload dist/ folder
```
