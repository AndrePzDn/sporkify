import { useEffect, useState } from "react";
import type { ArtistModel } from "../../models/ArtistModel";
import ArtistCard from "../molecules/ArtistCard";
import { useParams } from "react-router-dom";
import { ArtistRepository } from "../../repositories/ArtistRepository";

export default function ArtistList() {
  const { id } = useParams<{ id: string }>();
  const [artists, setArtists] = useState<ArtistModel[]>([]);

  useEffect(() => {
    const artistRepository = new ArtistRepository();
    artistRepository.readArtistByGenre(id || "").then(setArtists);
  }, [id]);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-4">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </ul>
  );
}
