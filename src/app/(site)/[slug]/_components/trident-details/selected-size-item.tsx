import { cn } from "@/lib/utils";

type Props = {
  selectedSize: number;
  size: number;
  setSize: (size: number) => void;
};
export default function SelectedSizeItem({
  selectedSize,
  size,
  setSize,
}: Props) {
  return (
    <button
      className={cn(
        "grid h-10 w-10 place-content-center rounded-full border border-wheat text-white duration-200 ",
        { "bg-wheat text-black": selectedSize === size },
      )}
      onClick={() => setSize(size)}
    >
      {size}x
    </button>
  );
}
