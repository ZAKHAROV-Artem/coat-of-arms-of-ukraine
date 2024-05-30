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

// I guess this component should work with those props instead.
type Props = React.PropsWithChildren & {
  isSelected: boolean; // size === selectedSize
  setSize: () => void; // You already know "size" outside - no reason to pass it inside
}

// In this case this component is more generic. It is now basically a presentation. You can pass any callback here and any text.
export default const SelectedSizeItem = ({ isActive, children, setSize }: Props) => (
  <button
    className={cn("grid h-10 w-10 place-content-center rounded-full border border-wheat text-white duration-200", isSelected && "bg-wheat text-black")}
    onClick={setSize}
  >
    {children}
  </button>
);
