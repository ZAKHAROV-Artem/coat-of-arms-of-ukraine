"use client";

import { useTrident } from "@/state/use-trident";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useShallow } from "zustand/react/shallow";

export default function TridentImage() {
  const { trident, color, loading, setLoading } = useTrident(
    useShallow((state) => ({
      trident: state.trident!,
      color: state.color,
      loading: state.loading,
      setLoading: state.setLoading,
    })),
  );
  return (
    <div className="relative p-1">
      <div
        className={cn(
          "absolute grid h-full w-full place-content-center bg-bg/50 backdrop-blur-sm duration-100",
          {
            "opacity-0": !loading,
          },
        )}
      >
        Завантаження...
      </div>
      <div className="mx-auto md:w-fit">
        <Image
          className="max-h-[350px] w-full object-contain lg:max-h-[400px]"
          src={`${process.env.NEXT_PUBLIC_URL}/api/v1/tridents/${trident.api.current}?fill=${color}&size=1`}
          alt={trident.name}
          onLoadingComplete={() => {
            setLoading(false);
          }}
          width={trident.width}
          height={trident.height}
        />
      </div>
    </div>
  );
}
