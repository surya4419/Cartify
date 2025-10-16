---
inclusion: fileMatch
fileMatchPattern: "**/components/**"
---

# Component Development Patterns

## Component Structure
Follow this consistent structure for all React components:

```typescript
import React from 'react'
import { ComponentProps } from './types' // if needed

interface ComponentNameProps {
  // Props interface
}

export const ComponentName: React.FC<ComponentNameProps> = ({ 
  prop1, 
  prop2 
}) => {
  // Component logic
  
  return (
    <div className="component-wrapper">
      {/* JSX content */}
    </div>
  )
}
```

## Naming Conventions
- **Components**: PascalCase (e.g., `ProductCard`, `CartModal`)
- **Props interfaces**: ComponentName + Props (e.g., `ProductCardProps`)
- **Files**: PascalCase matching component name (e.g., `ProductCard.tsx`)
- **CSS classes**: kebab-case with Tailwind utilities

## Component Types
- **Presentational Components**: Focus on UI rendering
- **Container Components**: Handle state and business logic
- **Layout Components**: Structure and positioning
- **Form Components**: Input handling and validation

## Props Guidelines
- Use TypeScript interfaces for all props
- Make props optional with default values when appropriate
- Use union types for limited options
- Document complex props with JSDoc comments

## State Management
- Use `useState` for local component state
- Use Zustand store for global state
- Avoid prop drilling - use context or global state
- Keep state as close to where it's used as possible

## Event Handling
- Use descriptive handler names (e.g., `handleAddToCart`)
- Pass minimal data in event handlers
- Use `useCallback` for expensive event handlers
- Implement proper error handling in async handlers

## Styling Guidelines
- Use Tailwind CSS utility classes
- Group related classes logically
- Use responsive prefixes (sm:, md:, lg:)
- Extract complex class combinations to constants

## Accessibility
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain focus management
- Test with screen readers