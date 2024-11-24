import { create } from "zustand";

interface TranscriptState {
  video: File | null;
  selectedSentences: { text: string; timestamp: string }[];
  setVideo: (file: File) => void;
  toggleSentence: (sentence: { text: string; timestamp: string }) => void;
}

export const useVideoStore = create<TranscriptState>((set) => ({
  video: null,
  selectedSentences: [],
  setVideo: (file) => set({ video: file }),
  toggleSentence: (sentence) =>
    set((state) => {
      const exists = state.selectedSentences.some(
        (s) => s.timestamp === sentence.timestamp
      );
      return {
        selectedSentences: exists
          ? state.selectedSentences.filter(
              (s) => s.timestamp !== sentence.timestamp
            )
          : [...state.selectedSentences, sentence],
      };
    }),
}));
