"use client";

import { useTrident } from "@/hooks/state/use-trident";
import {
  DownloadButton,
  SelectColor,
  SelectSize,
  TridentDetailsHeader,
  TridentImage,
} from ".";
import { Trident } from "@/types/sanity";
import { useEffect, useState } from "react";

type Props = { trident: Trident };
export default function TridentDetails({ trident }: Props) {
  const [loading, setLoading] = useState<boolean>(true);
  const setTrident = useTrident((state) => state.setTrident);

  useEffect(() => {
    setTrident(trident);
    setLoading(false);
  }, [trident, setTrident]);

  return (
    <div className="container my-10 flex grow flex-col">
      <TridentDetailsHeader />
      {loading ? (
        <div className="grid grow place-content-center text-2xl">
          Зачекайте трошечки...
        </div>
      ) : (
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          <TridentImage />
          <div className="flex h-full w-full flex-col justify-between gap-8 rounded-2xl border border-wheat bg-primary p-5 lg:p-10 ">
            <SelectColor />
            <SelectSize />
            <DownloadButton />
          </div>
        </div>
      )}
    </div>
  );
}
