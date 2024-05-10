"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  children: ReactNode;
  href: string;
  bottom: string;
};
export default function FloatingNavbarItem({
  href,
  onClick,
  children,
  bottom,
}: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "fm-item absolute right-0 grid h-14 w-14 place-content-center rounded-full border border-wheat bg-bg/10 backdrop-blur-sm",
        bottom,
      )}
    >
      {children}
    </Link>
  );
}
