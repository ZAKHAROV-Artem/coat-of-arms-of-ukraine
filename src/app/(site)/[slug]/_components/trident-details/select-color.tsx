"use client";

import { useTrident } from "@/hooks/state/use-trident";
import { cn } from "@/lib/utils";
import ColorPicker from "./color-picker";
import { useShallow } from "zustand/react/shallow";

export default function SelectColor() {
  const { color, setColor } = useTrident(
    useShallow((state) => ({ color: state.color, setColor: state.setColor })),
  );
  return (
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
  );
}
