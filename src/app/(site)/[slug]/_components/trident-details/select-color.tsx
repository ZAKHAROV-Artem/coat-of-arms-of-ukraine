"use client";

import { useTrident } from "@/state/use-trident";
import { useShallow } from "zustand/react/shallow";
import { SelectColorItem, ColorPicker } from ".";

/* Maybe, I had to create folder data under src and 
  file something like index.ts where put this array */
const colors = [
  { color: "fff", className: "bg-white" },
  { color: "000", className: "bg-black" },
  { color: "ff0000", className: "bg-[#ff0000]" },
  { color: "03AED2", className: "bg-[#03AED2]" },
  { color: "FDDE55", className: "bg-[#FDDE55]" },
  { color: "2C7865", className: "bg-[#2C7865]" },
];

export default function SelectColor() {
  const { selectedColor, setColor } = useTrident(
    useShallow((state) => ({
      selectedColor: state.color,
      setColor: state.setColor,
    })),
  );
  return (
    <div>
      <h3>Колір тризуба: </h3>
      <div className="mt-2 flex flex-wrap gap-5">
        {colors.map((color) => (
          <SelectColorItem
            key={color.color}
            selectedColor={selectedColor}
            setColor={setColor}
            color={color.color}
            className={color.className}
          />
        ))}

        <ColorPicker setColor={setColor} />
      </div>
    </div>
  );
}
