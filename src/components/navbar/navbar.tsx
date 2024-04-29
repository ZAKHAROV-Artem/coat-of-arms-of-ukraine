import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-center rounded-b-full border-b border-wheat bg-primary px-10 sm:h-24 md:px-20 lg:justify-between">
      <Logo />
      <div className="hidden gap-x-4 lg:flex">
        <Link
          href="/service"
          className="cursor-pointer underline duration-100 hover:text-white"
        >
          Про сервіс
        </Link>
        <Link
          href="/links"
          className="cursor-pointer underline duration-100 hover:text-white"
        >
          Корисні посилання
        </Link>
        <Link
          href="/about"
          className="cursor-pointer underline duration-100 hover:text-white"
        >
          Про герб
        </Link>
        <Link
          href="/about"
          className="cursor-pointer underline duration-100 hover:text-white"
        >
          Збір
        </Link>
      </div>
    </nav>
  );
}
