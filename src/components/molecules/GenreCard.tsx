import { useNavigate } from "react-router-dom";
import type { GenreModel } from "../../models/GenreModel";

interface Props {
  genre: GenreModel;
}

export default function GenreCard({ genre }: Props) {
  const navigate = useNavigate();
  const tailwindColors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-green-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "bg-rose-500",
    "bg-slate-500",
    "bg-gray-500",
    "bg-zinc-500",
    "bg-neutral-500",
    "bg-stone-500",
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * tailwindColors.length);
    return tailwindColors[randomIndex];
  };
  return (
    <li
      className={`relative flex flex-col gap-2 rounded-lg shadow-sm overflow-hidden h-32 w-64 p-2 hover:cursor-pointer ${getRandomColor()}`}
      onClick={() => {navigate(`/genre/${genre.id}`)}}
    >
      <h3 className="font-semibold">{genre.name}</h3>
      <figure className="absolute w-24 h-24 overflow-hidden transform rotate-[24deg] -right-3 -bottom-3 rounded-lg">
        <img
          src={genre.image}
          alt={genre.name}
          className="object-cover w-full h-full"
        />
      </figure>
    </li>
  );
}
