import { fetchGOs } from "$lib/api";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, setHeaders }) => {
  const year = url.searchParams.get("year") || undefined;
  const search = url.searchParams.get("search") || undefined;
  const sort = (url.searchParams.get("sort") as "asc" | "desc") || undefined;
  try {
    const { total, gos } = await fetchGOs({ year, search, sort });
    setHeaders({ "cache-control": "public, s-maxage=604800, stale-while-revalidate=2592000" });
    return { total, gos, year, search, sort };
  } catch {
    error(
      503,
      "Unable to load Government Orders. The data service is temporarily unavailable.",
    );
  }
};
