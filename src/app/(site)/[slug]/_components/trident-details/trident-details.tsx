"use client";

import { cn } from "@/lib/utils";
import { Trident } from "@/types/sanity";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import ColorPicker from "./color-picker";
import ColorItem from "./color-item";

type Props = { trident: Trident };
export default function TridentDetails({
  trident: { api, width, height, name },
}: Props) {
  const [color, setColor] = useState<string>("fff");
  const [size, setSize] = useState<number>(1);
  const router = useRouter();
  return (
    <div className="container my-10">
      <div className="relative mt-10 md:mt-0">
        <button
          className="absolute top-0 -translate-y-[130%] text-4xl md:top-1/2 md:-translate-y-1/2"
          onClick={() => router.back()}
        >
          {"<-"}
        </button>
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl">{name}</h1>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="mx-auto w-full md:w-fit">
          <Image
            className="max-h-[350px] w-full object-contain lg:max-h-[400px]"
            src={`${process.env.NEXT_PUBLIC_URL}/api/v1/tridents/${api.current}?fill=${color}&size=1`}
            alt={name}
            width={width}
            height={height}
          />
        </div>
        <div className="flex h-full w-full flex-col justify-between gap-8 rounded-2xl border border-wheat bg-primary p-5 lg:p-10 ">
          <div>
            <h3>Колір тризуба: </h3>
            <div className="mt-2 flex flex-wrap gap-5">
              <div
                className={cn(
                  "rounded-full border-2 border-transparent p-1 duration-150",
                  {
                    "border-wheat": color === "fff",
                  },
                )}
              >
                <div
                  className="h-10 w-10 rounded-full bg-white"
                  onClick={() => setColor("fff")}
                />
              </div>
              <div
                className={cn(
                  "rounded-full border-2 border-transparent p-1 duration-150",
                  {
                    "border-wheat": color === "000",
                  },
                )}
              >
                <div
                  className="h-10 w-10 rounded-full bg-black"
                  onClick={() => setColor("000")}
                />
              </div>
              <div
                className={cn(
                  "rounded-full border-2 border-transparent p-1 duration-150",
                  {
                    "border-wheat": color === "ff0000",
                  },
                )}
              >
                <div
                  className="h-10 w-10 rounded-full bg-[#ff0000]"
                  onClick={() => setColor("ff0000")}
                />
              </div>
              <div
                className={cn(
                  "rounded-full border-2 border-transparent p-1 duration-150",
                  {
                    "border-wheat": color === "03AED2",
                  },
                )}
              >
                <div
                  className="h-10 w-10 rounded-full bg-[#03AED2]"
                  onClick={() => setColor("03AED2")}
                />
              </div>
              <div
                className={cn(
                  "rounded-full border-2 border-transparent p-1 duration-150",
                  {
                    "border-wheat": color === "FDDE55",
                  },
                )}
              >
                <div
                  className="h-10 w-10 rounded-full bg-[#FDDE55]"
                  onClick={() => setColor("FDDE55")}
                />
              </div>
              <div
                className={cn(
                  "rounded-full border-2 border-transparent p-1 duration-150",
                  {
                    "border-wheat": color === "2C7865",
                  },
                )}
              >
                <div
                  className="h-10 w-10 rounded-full  bg-[#2C7865] "
                  onClick={() => setColor("2C7865")}
                />
              </div>

              <ColorPicker setColor={setColor} />
            </div>
          </div>
          <div>
            <h3>Розмір тризуба: </h3>
            <div className="mt-2 flex flex-wrap items-center gap-5">
              <button
                className={cn(
                  "grid h-10 w-10 place-content-center rounded-full border border-wheat text-white duration-200 ",
                  { "bg-wheat text-black": size === 1 },
                )}
                onClick={() => setSize(1)}
              >
                1x
              </button>
              <button
                className={cn(
                  "grid h-10 w-10 place-content-center rounded-full border border-wheat text-white duration-200 ",
                  { "bg-wheat text-black": size === 2 },
                )}
                onClick={() => setSize(2)}
              >
                2x
              </button>
              <button
                className={cn(
                  "grid h-10 w-10 place-content-center rounded-full border border-wheat text-white duration-200 ",
                  { "bg-wheat text-black": size === 3 },
                )}
                onClick={() => setSize(3)}
              >
                3x
              </button>
              <div className="text-xl">
                {width * size} x {height * size}
              </div>
            </div>
          </div>
          <div>
            <a
              href={`${process.env.NEXT_PUBLIC_URL}/api/v1/tridents/${api.current}?fill=${color}&size=${size}`}
              download={name}
            >
              <button className="rounded-xl bg-wheat px-3 py-2 text-black">
                Завантажити тризуб
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
