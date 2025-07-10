import { useNavigate } from "react-router-dom";
import type { ArtistModel } from "../../models/ArtistModel";

interface Props {
  artist: ArtistModel;
}

export default function ArtistCard({ artist }: Props) {
  const navigate = useNavigate();

  return (
    <li
      key={artist.id}
      className="mb-4 justify-center flex flex-col items-center hover:cursor-pointer"
      onClick={() => navigate(`/artist/${artist.id}`)}
    >
      <figure className="rounded-full w-32 h-32 overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-contain"
        />
      </figure>
      <h3 className="text-sm">{artist.name}</h3>
    </li>
  );
}
