"use client";

import { FC } from "react";
import { useMockAIData } from "@/libs/query/useMockAIData";
import { useVideoStore } from "@/store/useVideoStore";

interface TranscriptEditorProps {
  onTimestampClick?: (time: number) => void;
}

const TranscriptEditor: FC<TranscriptEditorProps> = ({ onTimestampClick }) => {
  const { selectedSentences, toggleSentence } = useVideoStore();
  const { data, isLoading, error } = useMockAIData();

  if (isLoading) return <p>Loading transcript...</p>;
  if (error) return <p>Failed to load transcript.</p>;

  return (
    <div className="py-10 px-8 md:px-10 bg-white rounded shadow-md border border-gray-200 col-span-3 md:col-span-1 ">
      {data?.transcript.map((section, index) => (
        <div
          key={index}
          className={`mb-5 ${data?.transcript.length === index + 1 && "mb-0"}`}
        >
          <h3 className="font-bold text-lg text-gray-900 mb-2">
            {section.sectionTitle}
          </h3>
          <div className="space-y-3">
            {section.sentences.map((sentence, idx) => (
              <div
                key={idx}
                className={`cursor-pointer px-2 py-1 rounded ${
                  selectedSentences.some(
                    (s) => s.timestamp === sentence.timestamp
                  )
                    ? "bg-blue-100 border border-blue-400"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  toggleSentence(sentence);
                  if (onTimestampClick) {
                    const [minutes, seconds] = sentence.timestamp
                      .split(":")
                      .map(Number);
                    onTimestampClick(minutes * 60 + seconds);
                  }
                }}
              >
                <span className="text-blue-500 font-mono">
                  {sentence.timestamp}
                </span>
                <span className="ml-2 text-gray-700">{sentence.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TranscriptEditor;
