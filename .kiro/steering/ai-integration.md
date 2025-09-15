---
inclusion: fileMatch
fileMatchPattern: "**/components/goCart*"
---

# AI Integration Guidelines

## AI Services Integration

### Groq API (Llama Model)
- Use for conversational AI and product recommendations
- Implement proper prompt engineering for shopping contexts
- Handle rate limiting and error responses
- Structure prompts for consistent JSON responses

### ElevenLabs Voice API
- Implement voice synthesis for shopping assistance
- Use appropriate voice models for brand consistency
- Handle audio streaming and playback
- Implement voice input/output controls

### SerpAPI Integration
- Fetch real-time Walmart product data
- Implement proper search query optimization
- Handle product data normalization
- Cache responses appropriately

## Conversation Flow
1. **Intent Recognition**: Understand user shopping intent
2. **Context Awareness**: Maintain conversation context
3. **Product Discovery**: Search and filter products based on criteria
4. **Recommendation Engine**: Suggest products based on mood, budget, preferences
5. **Cart Management**: Add/remove items through conversation
6. **Checkout Assistance**: Guide users through purchase process

## AI Response Patterns
- Always respond in helpful, friendly tone
- Provide specific product recommendations with reasoning
- Include price comparisons and savings information
- Offer alternatives when products are unavailable
- Maintain shopping context throughout conversation

## Error Handling
- Graceful degradation when AI services are unavailable
- Fallback to basic product search when AI fails
- Clear error messages for users
- Retry mechanisms for transient failures

## Performance Optimization
- Implement response caching for common queries
- Use streaming responses for long conversations
- Optimize prompt sizes for faster responses
- Implement request queuing for rate limiting