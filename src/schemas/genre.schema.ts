import { z } from "zod";

export const GenreSchema = z.object({
  name: z.string().min(1, "Genre name is required"),
  image: z.any(),
});

export type GenreSchemaType = z.infer<typeof GenreSchema>;
