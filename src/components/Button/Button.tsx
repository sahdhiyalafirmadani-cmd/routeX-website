"use client";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
}

export default function Button({ text, href, variant = "primary" }: ButtonProps) {
  const base = "inline-block text-center font-semibold w-[180px] h-[60px] leading-[60px] rounded-full transition duration-300";
  const styles = {
    primary: "bg-[#9ade1c] text-[#003c2f] border-none hover:bg-[#7ec50f]",
    secondary: "bg-transparent text-[#003c2f] border-[1.5px] border-[#9ade1c] hover:bg-[#9ade1c]",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {text} →
    </Link>
  );
}
