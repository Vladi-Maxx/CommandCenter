# Command Center

Personal AI tools dashboard with brutalist industrial design.

## Features

- **6 AI Chatbots**: Claude, ChatGPT, Gemini, Grok, AI Studio, NotebookLM
- **Tab Navigation**: Animated tab indicator with keyboard support
- **Hover Animations**: Card lift effect with orange glow
- **Clock Widget**: Bulgarian time format (24h, DD.MM.YYYY)
- **Responsive Grid**: 2 columns on mobile, 3 on desktop
- **Dark Mode Only**: Brutalist industrial aesthetic

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- Motion (Framer Motion v12)

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Adding New Tools

Edit `src/data/tools.ts`:

```typescript
// Add to the tools array in the appropriate tab
{
  id: 'newtool',
  name: 'New Tool',
  url: 'https://example.com',
  logo: 'newtool.svg',
  description: 'Optional tooltip text'
}
```

Place the SVG logo in `public/logos/`.

## Project Structure

```
src/
├── components/
│   ├── ClockWidget/    # Live clock with Bulgarian locale
│   ├── Layout/         # Base layout with CSS variables
│   ├── PlaceholderCard/# Empty state card
│   ├── TabBar/         # Tab navigation
│   ├── ToolCard/       # Individual tool card
│   └── ToolGrid/       # Responsive grid with animations
├── data/
│   └── tools.ts        # Tool and tab configuration
└── App.tsx             # Main app component
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Design Tokens

CSS variables in `src/index.css`:

```css
--bg-primary: #0a0a0a      /* Main background */
--bg-card: #141414         /* Card background */
--accent-orange: #FF6B35   /* Primary accent */
--accent-cyan: #00D9FF     /* Secondary accent */
--text-primary: #E8E6E3    /* Main text */
--text-secondary: #6B6B6B  /* Muted text */
```

## License

MIT
