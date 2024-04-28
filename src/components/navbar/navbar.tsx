export default function Navbar() {
  return (
    <nav className="border-wheat flex h-24 items-center justify-center rounded-b-full border-b bg-primary px-10 md:px-20 lg:justify-between">
      <div className="text-3xl">Український тризуб</div>
      <div className="hidden gap-x-4 lg:flex">
        <div className="cursor-pointer underline duration-100 hover:text-white">
          Про сервіс
        </div>
        <div className="cursor-pointer underline duration-100 hover:text-white">
          Корисні посилання
        </div>
        <div className="cursor-pointer underline duration-100 hover:text-white">
          Про герб
        </div>
        <div className="cursor-pointer underline duration-100 hover:text-white">
          Збір
        </div>
      </div>
    </nav>
  );
}
