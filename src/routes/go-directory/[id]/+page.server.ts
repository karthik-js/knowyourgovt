import { fetchGO } from "$lib/api";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  try {
    const go = await fetchGO(params.id);
    return { go };
  } catch {
    error(404, "Government Order not found");
  }
};
