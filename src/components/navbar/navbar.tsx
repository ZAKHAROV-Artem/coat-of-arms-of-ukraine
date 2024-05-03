import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex h-12 items-center justify-center rounded-b-full border-b border-wheat bg-primary sm:h-20 lg:justify-between lg:px-16">
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
