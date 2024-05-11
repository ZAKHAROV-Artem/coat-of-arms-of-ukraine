"use client";

import { useTrident } from "@/hooks/state/use-trident";
import { useRouter } from "next/navigation";

export default function TridentDetailsHeader() {
  const router = useRouter();
  const name = useTrident((state) => state.trident?.name);

  return (
    <div className="relative mt-10 md:mt-0">
      <button
        className="absolute top-0 -translate-y-[130%] text-4xl md:top-1/2 md:-translate-y-1/2"
        onClick={() => router.back()}
      >
        {"<-"}
      </button>
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl">{name}</h1>
    </div>
  );
}
