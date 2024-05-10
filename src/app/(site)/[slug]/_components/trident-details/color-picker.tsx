"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDebounce } from "@/hooks/use-debounce";
import { useEffect, useState } from "react";
import Wheel from "@uiw/react-color-wheel";

type Props = { setColor: (color: string) => void };
export default function ColorPicker({ setColor }: Props) {
  const [localColor, setLocalColor] = useState<string>("fff");
  const deboundedValue = useDebounce(localColor, 500);
  useEffect(() => {
    setColor(deboundedValue);
  }, [deboundedValue, setColor]);
  return (
    <Popover>
      <PopoverTrigger className="p-1">
        <div className="bg-gradient h-10 w-10 rounded-full" />
      </PopoverTrigger>
      <PopoverContent>
        <Wheel
          width={150}
          height={150}
          color={localColor}
          onChange={(newcolor) => {
            setLocalColor(newcolor.hex.substring(1));
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
