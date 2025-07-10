import { z } from "zod";

export const ArtistSchema = z.object({
  name: z.string().min(1, "Artist name is required"),
  image: z.any(),
  genre: z.string(),
});

export type ArtistSchemaType = z.infer<typeof ArtistSchema>;
