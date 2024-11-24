"use client";

import { FC, useRef } from "react";
import { useVideoStore } from "@/store/useVideoStore";
import { Trash2 } from "lucide-react";

import VideoUploader from "./VideoUploader";
import TranscriptEditor from "./TranscriptEditor";

const VideoPreview: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { video, selectedSentences } = useVideoStore();

  const handleTimestampClick = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      videoRef.current.play();
    }
  };

  const handleDelete = (index: number) => {
    const newSelectedSentences = [...selectedSentences];
    newSelectedSentences.splice(index, 1);
    useVideoStore.setState({ selectedSentences: newSelectedSentences });
  };

  return (
    <div className="w-full">
      {!video ? (
        <div className="flex justify-center items-center">
          <VideoUploader />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-x-14 gap-y-14">
          <div className="col-span-3 md:col-span-2">
            <video
              ref={videoRef}
              controls
              className="w-full mb-4 border border-gray-900 rounded-xl"
            >
              <source src={URL.createObjectURL(video)} />
            </video>
            <div className="space-y-2 col-span-2">
              <span className="font-bold text-4xl my-10 block">
                Highlight Note
              </span>
              {selectedSentences.map((sentence, index) => (
                <div
                  key={index}
                  className="group cursor-pointer text-sm px-7 py-5 bg-gray-900 rounded-xl hover:bg-gray-700 relative"
                  onClick={() => {
                    const [minutes, seconds] = sentence.timestamp
                      .split(":")
                      .map(Number);
                    handleTimestampClick(minutes * 60 + seconds);
                  }}
                >
                  <span className="text-blue-400 font-mono">
                    {sentence.timestamp}
                  </span>
                  <p className="text-white">{sentence.text}</p>

                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-600 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(index);
                    }}
                    aria-label="Delete highlight"
                  >
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <TranscriptEditor />
        </div>
      )}
    </div>
  );
};

export default VideoPreview;
