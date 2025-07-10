import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongRepository } from "../../repositories/SongRepository";
import type { SongModel } from "../../models/SongModel";

export default function SongList() {
  const { id } = useParams<{ id: string }>();
  const [songs, setSongs] = useState<SongModel[]>([]);

  useEffect(() => {
    if (!id) return;

    const songRepository = new SongRepository();
    songRepository.readSongsByArtist(id).then(setSongs);
  }, [id]);

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mt-4">
      {songs.map((song) => (
        <li key={song.id} className="bg-[#121212] p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{song.title}</h3>
          <audio controls className="mt-2">
            <source src={song.audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </li>
      ))}
    </ul>
  );
}
