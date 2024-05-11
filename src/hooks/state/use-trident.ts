import { Nullable } from "@/types";
import { Trident } from "@/types/sanity";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  trident: Nullable<Trident>;
  color: string;
  size: number;
  loading: boolean;
  downloadUrl: string;
};

type Actions = {
  setTrident: (trident: Trident) => void;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
  setLoading: (loading: boolean) => void;
  changeDownloadUrl: (trident?: Trident) => void;
};

export const useTrident = create<State & Actions>()(
  immer((set) => ({
    trident: null,
    color: "fff",
    size: 1,
    loading: true,
    downloadUrl: "",
    setTrident: (trident) =>
      set((state) => {
        state.trident = trident;
        state.changeDownloadUrl(trident);
      }),
    setColor: (color) =>
      set((state) => {
        state.loading = true;
        state.color = color;
        state.changeDownloadUrl();
      }),
    setSize: (size) =>
      set((state) => {
        state.size = size;
        state.changeDownloadUrl();
      }),
    setLoading: (loading) =>
      set((state) => {
        state.loading = loading;
      }),
    changeDownloadUrl: (trident) =>
      set((state) => {
        state.downloadUrl = `${process.env.NEXT_PUBLIC_URL}/api/v1/tridents/${trident?.api.current || state.trident!.api.current}?fill=${state.color}&size=${state.size}`;
      }),
  })),
);
