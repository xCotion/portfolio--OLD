## Core Features
- Light/Dark Mode Support
- Mobile-First Responsive Design
- Interactive & Dynamic Elements
- Modern Architecture Implementation
- Minimalist Design Patterns

## Technical Standards
- Latest Industry Best Practices
- Modern Development Languages
- Performance Optimization
- Clean Code Architecture

## Authentication System

### Guest Mode
- Access to public pages:
  - Home Page
  - Projects Page
  - Contact Page
  - About Page
- Contact form submission
- Account creation option

### Authenticated Users
- Project Management Features:
  - Custom project creation (Fiverr-style)
  - Project status tracking
  - Progress monitoring
  - Pricing transparency
  - Project roadmap visibility
- Admin-assigned jobs
- Streamlined onboarding process

## Client Access
### Non-Authenticated Users
- Full navigation of public pages
- Two pathways for engagement:
  1. Direct contact through Contact Page
  2. Account creation for streamlined onboarding

### Authenticated Clients
- Comprehensive project tracking
- Direct communication channel
- Progress monitoring dashboard
- Project documentation access

---
*Built with focus on security, usability, and professional workflow management*# Minimalist Glass Design System

## Core Color System

### Background Colors
```css
--bg-primary: #09090B;    /* zinc-950 */
--bg-secondary: #18181B;  /* zinc-900 */
--bg-gradient: linear-gradient(
    145deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
);
```

### Text Hierarchy
```css
--text-primary: #F4F4F5;    /* zinc-100: Headers, important text */
--text-secondary: #E4E4E7;  /* zinc-200: Subheaders */
--text-tertiary: #D4D4D8;   /* zinc-300: Highlighted body text */
--text-body: #A1A1AA;       /* zinc-400: Main body text */
--text-subtle: #71717A;     /* zinc-500: Supporting text */
```

### Glass Effects
```css
--glass-subtle: rgba(255, 255, 255, 0.05);  /* Background panels */
--glass-light: rgba(255, 255, 255, 0.08);   /* Hover states */
--glass-medium: rgba(255, 255, 255, 0.1);   /* Active elements */
--glass-strong: rgba(255, 255, 255, 0.15);  /* Emphasized elements */
```

### Accent Colors
```css
--accent-light: #99F6E4;  /* Teal 200: Glowing effects */
--accent-primary: #2DD4BF;  /* Teal 400: Primary actions */
--accent-dark: #0D9488;  /* Teal 600: Depth elements */
```

## Component Specifications

### Glass Cards
```css
.glass-card {
    background: var(--glass-subtle);
    backdrop-filter: blur(8px);
    border: 1px solid var(--glass-medium);
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.glass-card:hover {
    background: var(--glass-light);
    border-color: var(--glass-strong);
    transform: translateY(-1px);
    transition: all 0.2s ease;
}
```

### Interactive Elements
```css
.interactive-element {
    background: var(--glass-medium);
    border: 1px solid var(--glass-strong);
    color: var(--text-primary);
}

.interactive-element:hover {
    background: var(--glass-strong);
    box-shadow: 0 0 15px var(--accent-light);
}

.interactive-element:active {
    transform: scale(0.98);
}
```

### Text Styles
```css
.heading-primary {
    color: var(--text-primary);
    font-weight: 600;
    letter-spacing: -0.02em;
}

.heading-secondary {
    color: var(--text-secondary);
    font-weight: 500;
    letter-spacing: -0.01em;
}

.body-text {
    color: var(--text-body);
    font-weight: 400;
    line-height: 1.6;
}

.subtle-text {
    color: var(--text-subtle);
    font-weight: 400;
    font-size: 0.875em;
}
```

### Glow Effects
```css
.glow-accent {
    box-shadow: 0 0 20px rgba(45, 212, 191, 0.15);  /* Teal glow */
    transition: box-shadow 0.3s ease;
}

.glow-accent:hover {
    box-shadow: 0 0 30px rgba(45, 212, 191, 0.25);
}
```

## Layout Guidelines

### Spacing Scale
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
```

### Glass Panel Structure
```css
.glass-panel {
    background: var(--glass-subtle);
    border: 1px solid var(--glass-medium);
    padding: var(--space-lg);
    border-radius: 16px;
    backdrop-filter: blur(8px);
}
```

### Gradient Overlays
```css
.gradient-overlay {
    background: linear-gradient(
        180deg,
        rgba(9, 9, 11, 0) 0%,
        rgba(9, 9, 11, 0.8) 100%
    );
}
```

## Animation Guidelines

### Transitions
```css
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;
--transition-slow: 350ms ease;

.element {
    transition: all var(--transition-normal);
}
```

### Hover States
```css
.interactive-panel:hover {
    transform: translateY(-2px);
    background: var(--glass-light);
    border-color: var(--glass-strong);
    transition: all var(--transition-normal);
}
```

### Focus States
```css
.interactive-element:focus {
    outline: none;
    ring: 2px var(--accent-light);
    ring-offset: 2px;
    ring-offset-color: var(--bg-primary);
}
```