"use server";

import { z } from "zod";

const ShortenResponseSchema = z.object({
  original_url: z.string(),
  shorten_url: z.string()
});

export type ShortenResponse = z.infer<typeof ShortenResponseSchema>;

export async function postShorten(originalURL: string) {
    try {
      const res = await fetch(
        `${process.env.API_BASE_URL}/api/shorten`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ original_url: originalURL }),
        },
      );

      if (res.ok) {
        const data = await res.json();
        const validatedData = ShortenResponseSchema.parse(data);
        return validatedData;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
      return null;
    }
}