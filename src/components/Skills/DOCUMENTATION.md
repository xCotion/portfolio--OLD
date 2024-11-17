# 3D Floating Skills Animation System

## Overview
The 3D Floating Skills system creates an immersive, interactive experience where skill cards float in 3D space behind the hero section and transition into a organized carousel layout on scroll.

## Components

### FloatingCardField
Main container component that:
- Manages the 3D space and perspective
- Handles scroll-based transitions
- Controls card positioning and state changes

### FloatingCard
Individual 3D card component with:
- True 3D structure with multiple layers
- Independent floating animation
- Scroll-based transition capabilities

## Animation States

### 1. Initial Floating State
- Cards float freely in 3D space behind hero content
- Random positions within defined boundaries
- Continuous, independent movement
- Depth range: -2000px to -1000px on Z-axis

### 2. Scroll Transition
- Triggered by page scroll
- Cards stop floating
- Smooth transition to carousel positions
- Progressive movement from back to front

### 3. Carousel State
- Organized grid layout
- Hover interactions enabled
- Fixed positions with subtle animations
- Front-facing alignment

## Technical Implementation

### 3D Space Setup
```css
.floating-card-field {
  perspective: 2000px;
  transform-style: preserve-3d;
  position: fixed;
  z-index: -1; /* Behind hero */
}
```

### Card Structure
```css
.floating-card {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  /* Glass effect */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}
```

### Animation Controls
```typescript
// Floating animation
useAnimation({
  x: random(-500, 500),
  y: random(-300, 300),
  z: random(-2000, -1000),
  rotateX: random(-30, 30),
  rotateY: random(-30, 30),
  transition: { duration: 10, ease: "easeInOut" }
});

// Scroll transition
useTransform(scrollProgress, 
  [0, 1], 
  [randomPos, gridPos]
);
```

## Usage

```tsx
<FloatingCardField skills={skillsData}>
  {/* Cards will automatically handle states */}
</FloatingCardField>
```

## Performance Considerations
- Uses GPU-accelerated transforms
- Optimized animation frames
- Lazy loading for off-screen cards
- Reduced reflows and repaints

## Browser Support
- Modern browsers with WebGL support
- Fallback to basic grid for older browsers
- Progressive enhancement approach
