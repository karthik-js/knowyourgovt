import { fetchGO } from "$lib/api";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, setHeaders }) => {
  try {
    const go = await fetchGO(params.id);
    setHeaders({
      "cache-control":
        "public, s-maxage=604800, stale-while-revalidate=2592000",
    });
    return { go };
  } catch {
    error(404, "Government Order not found");
  }
};
