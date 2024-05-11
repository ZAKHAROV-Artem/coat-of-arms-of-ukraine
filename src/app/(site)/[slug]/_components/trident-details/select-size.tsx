"use client";

import { useTrident } from "@/state/use-trident";
import { cn } from "@/lib/utils";
import { useShallow } from "zustand/react/shallow";

export default function SelectSize() {
  const { size, width, height, setSize } = useTrident(
    useShallow((state) => ({
      size: state.size,
      width: state.trident!.width,
      height: state.trident!.height,
      setSize: state.setSize,
    })),
  );
  return (
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
  );
}
