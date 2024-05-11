"use client";

import { useTrident } from "@/hooks/state/use-trident";
import { toast } from "sonner";
import { useShallow } from "zustand/react/shallow";

export default function DownloadButton() {
  const { downloadUrl, name } = useTrident(
    useShallow((state) => ({
      downloadUrl: state.downloadUrl,
      name: state.trident!.name,
    })),
  );
  return (
    <div>
      <a href={downloadUrl} download={name}>
        <button
          onClick={() =>
            toast.custom(
              () => (
                <div className="mx-auto w-60 rounded-xl border border-primary bg-wheat p-3 text-center text-black shadow-lg">
                  Завантаження почалося
                </div>
              ),
              {
                position: "top-center",
                classNames: {
                  toast: "w-full",
                },
                duration: 2500,
              },
            )
          }
          className="rounded-xl bg-wheat px-3 py-2 text-black"
        >
          Завантажити тризуб
        </button>
      </a>
    </div>
  );
}
