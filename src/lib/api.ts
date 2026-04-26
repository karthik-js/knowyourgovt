const API_BASE = "https://ap-go-scraper.vercel.app";

export interface GO {
  id: string;
  year: string;
  title: string;
  description: string;
  pdfUrl: string;
  aiOverview: string;
  status: "pending" | "done" | "failed";
  scrapedAt: string;
  pdfText?: string;
}

export interface GOListResponse {
  total: number;
  gos: GO[];
}

export async function fetchGOs(opts?: {
  year?: string;
  search?: string;
  sort?: "asc" | "desc";
}): Promise<GOListResponse> {
  const url = new URL(`${API_BASE}/api/gos`);
  if (opts?.year) url.searchParams.set("year", opts.year);
  if (opts?.search) url.searchParams.set("search", opts.search);
  if (opts?.sort) url.searchParams.set("sort", opts.sort);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Failed to fetch GOs: ${res.status}`);
  return res.json();
}

export async function fetchGO(id: string): Promise<GO> {
  const res = await fetch(`${API_BASE}/api/gos/${encodeURIComponent(id)}`);
  if (!res.ok) throw new Error(`Failed to fetch GO: ${res.status}`);
  return res.json();
}

export async function chatWithGO(
  goId: string,
  question: string,
): Promise<ReadableStream<Uint8Array> | null> {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ goId, question }),
  });
  if (!res.ok) throw new Error(`Chat failed: ${res.status}`);
  return res.body;
}
