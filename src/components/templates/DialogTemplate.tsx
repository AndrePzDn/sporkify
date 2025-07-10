import type { ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export default function DialogTemplate({
  open,
  onClose,
  children,
  title,
}: Props) {
  return (
    <div
      className={
        open
          ? `absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/30 z-10`
          : "hidden"
      }
    >
      <dialog
        open={open}
        className="top-1/2 left-1/2 w-1/3 h-fit transform -translate-x-1/2 -translate-y-1/2 bg-[#121212] flex flex-col rounded-lg text-white p-4"
      >
        <header className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-white hover:text-gray-400 cursor-pointer">&times;</button>
        </header>
        {children}
      </dialog>
    </div>
  );
}
