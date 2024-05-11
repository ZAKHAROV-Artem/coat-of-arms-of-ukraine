"use client";

import { useTrident } from "@/state/use-trident";
import { useShallow } from "zustand/react/shallow";
import SelectedSizeItem from "./selected-size-item";

/* Maybe, I had to create folder data under src and 
  file something like index.ts where put this array */
const sizes = [1, 2, 3];

export default function SelectSize() {
  const { selectedSize, width, height, setSize } = useTrident(
    useShallow((state) => ({
      selectedSize: state.size,
      width: state.trident!.width,
      height: state.trident!.height,
      setSize: state.setSize,
    })),
  );
  return (
    <div>
      <h3>Розмір тризуба: </h3>
      <div className="mt-2 flex flex-wrap items-center gap-5">
        {sizes.map((size) => (
          <SelectedSizeItem
            key={size}
            selectedSize={selectedSize}
            size={size}
            setSize={setSize}
          />
        ))}

        <div className="text-xl">
          {width * selectedSize} x {height * selectedSize}
        </div>
      </div>
    </div>
  );
}
