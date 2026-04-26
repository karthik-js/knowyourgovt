You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available Svelte MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

---

## AP GO Scraper API

This project consumes the AP GO Scraper API. The OpenAPI 3.0.3 spec is hosted at:

**Spec URL:** https://ap-go-scraper.vercel.app/openapi.yaml

Do NOT save a local copy of the spec. Always fetch it from the URL above when you need endpoint details.

**Base URL:** `https://ap-go-scraper.vercel.app`

### Key Endpoints

| Method | Path | Description | Query Params |
|--------|------|-------------|--------------|
| GET | `/api/gos` | List all Government Orders | `year`, `search`, `sort=asc\|desc` |
| GET | `/api/gos/{id}` | Get a specific GO | — |
| POST | `/api/chat` | Ask AI about a GO (streamed) | Body: `{ goId, question }` |

### GO Object Shape

```ts
interface GO {
  id: string;        // e.g. "2024-go-ms42"
  year: string;
  title: string;
  description: string;
  pdfUrl: string;
  aiOverview: string; // AI-generated summary
  status: "pending" | "done" | "failed";
  scrapedAt: string;  // ISO date-time
}
```

### Usage in this project

- API client: `src/lib/api.ts` — exports `fetchGOs()`, `fetchGO()`, `chatWithGO()`
- Server loads in `src/routes/go-directory/+page.server.ts` and `[id]/+page.server.ts`
