import { z } from "zod";

export const SongSchema = z.object({
  title: z.string().min(1, "Title is required"),
  artist: z.string(),
  audioUrl: z.any(),
});

export type SongSchemaType = z.infer<typeof SongSchema>;
