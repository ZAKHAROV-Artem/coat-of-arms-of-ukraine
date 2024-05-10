import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid grow place-content-center gap-y-4 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-6xl ">
        Сторінка не знайдена
      </h2>
      <p className="text-xk">Не вдалося знайти запитуваний ресурс</p>
      <Link className="text-xl text-wheat underline" href="/">
        На головну
      </Link>
    </div>
  );
}
