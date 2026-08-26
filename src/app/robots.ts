import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Acceso estándar para buscadores tradicionales (Google, Bing, etc.)
        userAgent: '*',
        allow: '/',
      },
      {
        // Acceso explícito y prioritario para Answer Engines y LLMs (AEO)
        userAgent: [
          'GPTBot',             // OpenAI web crawler
          'ChatGPT-User',       // ChatGPT browsing plugin
          'OAI-SearchBot',      // SearchGPT
          'ClaudeBot',          // Anthropic web crawler
          'anthropic-ai',       // Anthropic legacy
          'Claude-Web',         // Anthropic web 
          'PerplexityBot',      // Perplexity AI
          'Google-Extended',    // Gemini / Google AI
          'Applebot-Extended'   // Apple Intelligence
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://www.espinlabs.com/sitemap.xml',
  }
}
