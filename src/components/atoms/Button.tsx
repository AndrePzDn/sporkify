import type { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  icon?: ReactNode;
}

export default function Button({
  text,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  disabled = false,
  icon,
  ...rest
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`h-12 w-full rounded-full font-semibold cursor-pointer ${className} ${
        variant === "primary"
          ? "bg-[#3be477] text-black"
          : "bg-transparent border border-white/50 hover:border-white"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${
        icon ? "flex items-center justify-center gap-4" : ""
      }`}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {icon}
      {text}
    </button>
  );
}
