---
inclusion: always
---

# goCartAI Project Standards

## Project Overview
goCartAI is a universal AI shopping agent that integrates into e-commerce platforms as a smart, conversational shopping companion. The project uses React, TypeScript, Supabase, and various AI APIs to provide personalized shopping experiences.

## Technology Stack
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions), Netlify Functions
- **AI Services**: Groq API (Llama), ElevenLabs (Voice), SerpAPI (Product Data)
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom components

## Code Standards

### TypeScript
- Use strict TypeScript configuration
- Define proper interfaces for all data structures
- Use type guards for API responses
- Prefer `interface` over `type` for object definitions

### React Components
- Use functional components with hooks
- Implement proper prop typing with interfaces
- Use React.FC for component typing
- Follow the pattern: imports → interfaces → component → export

### File Structure
- Components in `src/components/` with PascalCase naming
- Utilities in `src/lib/` with camelCase naming
- Store files in `src/store/` using Zustand patterns
- Server functions in `src/server/` or `netlify/functions/`

### Styling
- Use Tailwind CSS utility classes
- Implement responsive design (mobile-first)
- Use consistent color scheme: indigo/purple gradients for primary, emerald for success
- Follow component-based styling patterns

### State Management
- Use Zustand for global state
- Keep store slices focused and minimal
- Implement proper TypeScript typing for store
- Use localStorage for persistence where appropriate

### API Integration
- Implement proper error handling for all API calls
- Use environment variables for API keys
- Create typed interfaces for API responses
- Handle loading and error states in UI

## Security Best Practices
- Never expose API keys in client-side code
- Use Supabase RLS (Row Level Security) policies
- Validate all user inputs
- Implement proper authentication flows
- Use HTTPS for all API communications

## Performance Guidelines
- Implement lazy loading for components
- Optimize images and assets
- Use React.memo for expensive components
- Implement proper caching strategies
- Minimize bundle size with tree shaking

## Testing Standards
- Write unit tests for utility functions
- Test component rendering and interactions
- Mock external API calls in tests
- Maintain good test coverage for critical paths

## Accessibility
- Use semantic HTML elements
- Implement proper ARIA labels
- Ensure keyboard navigation support
- Maintain good color contrast ratios
- Support screen readers

## Git Workflow
- Use conventional commit messages
- Create feature branches for new development
- Implement proper code review process
- Keep commits atomic and focused