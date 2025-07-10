import { useEffect, useState } from "react";
import { GenreRepository } from "../../repositories/GenreRepository";
import GenreCard from "../molecules/GenreCard";
import type { GenreModel } from "../../models/GenreModel";

export default function GenreList() {
  const [genres, setGenres] = useState<GenreModel[]>([]);

  useEffect(() => {
    const genreRepository = new GenreRepository();
    genreRepository.readGenres().then(setGenres);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {genres.map((genre) => (
          <GenreCard key={genre.name} genre={genre} />
        ))}
      </ul>
    </div>
  );
}
