import { cn } from "@/lib/utils";

type Props = {
  className: string;
  selectedColor: string;
  color: string;
  setColor: (color: string) => void;
};
export default function SelectColorItem({
  className,
  selectedColor,
  color,
  setColor,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-full border-2 border-transparent p-1 duration-150",
        {
          "border-wheat": selectedColor === color,
        },
      )}
    >
      <div
        className={cn("h-10 w-10 rounded-full", className)}
        onClick={() => setColor(color)}
      />
    </div>
  );
}
