interface Props {
  alt: string;
  src: string;
}

export default function Avatar({ alt, src }: Props) {
  return (
    <figure className="w-8 h-8 rounded-full overflow-hidden p-1 bg-[#121212]">
      <img className="w-full h-full object-cover rounded-full" alt={alt} src={src} />
    </figure>
  );
}
