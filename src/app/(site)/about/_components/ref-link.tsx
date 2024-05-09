import Link from "next/link";
import { ReactNode } from "react";

type Props = { href: string; children: ReactNode };
export default function RefLink({ href, children }: Props) {
  return (
    <Link href={href} target="_blank" className="text-wheat underline">
      {children}
    </Link>
  );
}
