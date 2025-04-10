import { StateCreator } from "zustand";

export type SliceCreator<TSlice, TState> = StateCreator<TState, [], [], TSlice>;
