---
inclusion: fileMatch
fileMatchPattern: "**/lib/**"
---

# API Integration Guidelines

## API Service Structure
Create dedicated service files for each external API:

```typescript
// lib/services/serpapi.ts
export class SerpAPIService {
  private baseURL = '/.netlify/functions/serpapi-proxy'
  
  async searchProducts(query: string): Promise<Product[]> {
    try {
      const response = await fetch(`${this.baseURL}?q=${encodeURIComponent(query)}`)
      if (!response.ok) throw new Error('Search failed')
      return await response.json()
    } catch (error) {
      console.error('SerpAPI Error:', error)
      throw error
    }
  }
}
```

## Error Handling Patterns
- Always wrap API calls in try-catch blocks
- Provide meaningful error messages to users
- Log errors for debugging but don't expose sensitive info
- Implement retry logic for transient failures
- Use proper HTTP status code handling

## Response Validation
- Define TypeScript interfaces for all API responses
- Validate response structure before using data
- Handle partial or malformed responses gracefully
- Use type guards for runtime type checking

## Caching Strategy
- Cache frequently requested data
- Implement cache invalidation strategies
- Use appropriate cache durations
- Consider offline functionality

## Authentication
- Store API keys securely in environment variables
- Use proxy functions to hide sensitive keys
- Implement proper token refresh logic
- Handle authentication failures gracefully

## Rate Limiting
- Implement request throttling
- Queue requests when rate limited
- Provide user feedback during delays
- Use exponential backoff for retries

## Environment Configuration
```typescript
// lib/config.ts
export const config = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
  apis: {
    groq: import.meta.env.VITE_GROQ_API_KEY,
    elevenlabs: import.meta.env.VITE_ELEVENLABS_API_KEY,
  }
}
```

## Testing API Integration
- Mock external APIs in tests
- Test error scenarios
- Validate request/response formats
- Test authentication flows