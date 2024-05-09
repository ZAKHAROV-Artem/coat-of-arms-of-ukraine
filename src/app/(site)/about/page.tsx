import { RefLink } from "./_components";
import Image from "next/image";

export default function About() {
  return (
    <div className="container space-y-3 py-10">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Lesser_Coat_of_Arms_of_Ukraine.svg"
        width={330}
        height={361}
        className="mx-auto h-60 object-contain sm:float-right md:m-5"
        alt="Trident"
      />
      <p>
        {`Держа́вний герб України, або малий Державний Герб України — офіційний
        символ держави `}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0">
          Україна
        </RefLink>
        {" у вигляді золотого "}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%A2%D1%80%D0%B8%D0%B7%D1%83%D0%B1">
          тризуба
        </RefLink>
        {` на синьому щиті. Один із трьох державних символів України нарівні з `}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D0%BF%D0%BE%D1%80_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8">
          прапором
        </RefLink>
        {` і `}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%93%D1%96%D0%BC%D0%BD_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8">
          гімном.
        </RefLink>
      </p>

      <p>
        Тризуб був затверджений як малий герб України 19 лютого 1992 року
        постановою Верховної Ради разом із своїм графічним зображенням. У 1996
        році його статус був закріплений у Статті 20{" "}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B8%D1%82%D1%83%D1%86%D1%96%D1%8F_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8">
          Конституції України
        </RefLink>
        , де він також згадується як «Знак{" "}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%9A%D0%B8%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0_%D0%A0%D1%83%D1%81%D1%8C">
          Княжої Держави
        </RefLink>{" "}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%A1%D0%B2%D1%8F%D1%82%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B8%D1%87">
          Володимира Великого»
        </RefLink>
        .
      </p>
      <p>
        Герб походить від{" "}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%97%D0%BD%D0%B0%D0%BA%D0%B8_%D0%A0%D1%8E%D1%80%D0%B8%D0%BA%D0%BE%D0%B2%D0%B8%D1%87%D1%96%D0%B2">
          знаків Рюриковичів
        </RefLink>{" "}
        X—XII століття, з часів Київської Русі. Традиція використання
        герба-тризуба веде свій початок від герба{" "}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B0_%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D1%96%D0%BA%D0%B0">
          Української Народної Республіки
        </RefLink>
        , від ухвал 12 лютого 1918 Малої ради у Коростені та 22 березня того ж
        року{" "}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0_%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0_%D0%A0%D0%B0%D0%B4%D0%B0">
          Української Центральної Ради{" "}
        </RefLink>{" "}
        в Києві. Окрім тризуба історичними гербами українських державних
        утворень були руський лев, руська погоня, лицар із самопалом Війська
        Запорозького тощо.
      </p>
      <p>
        Відповідно до Конституції тризуб має стати головним елементом{" "}
        <RefLink href="https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%B3%D0%B5%D1%80%D0%B1_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8">
          великого Державного Герба України
        </RefLink>
        , що має бути прийнятий конституційною більшістю Верховної Ради (2/3
        голосів) із урахуванням герба Війська Запорізького. Водночас незважаючи
        на проведення декількох конкурсів на проєкт великого герба, жоден із них
        так і не був затверджений.
      </p>
    </div>
  );
}
