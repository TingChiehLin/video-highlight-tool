"use client";

import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

import { useMockAIData } from "@/libs/query/useMockAIData";
import { useVideoStore } from "@/store/useVideoStore";

export default function VideoUploader() {
  const setVideo = useVideoStore((state) => state.setVideo);
  const { refetch, isFetched } = useMockAIData();

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const uploadedVideo = event.target.files[0];
      setVideo(uploadedVideo);

      if (isFetched) {
        await refetch();
      }
    }
  };

  return (
    <label
      className="w-xl
              flex justify-center items-center
              mx-auto p-14 border-2 border-gray-200 rounded cursor-pointer"
    >
      <div className="flex justify-center items-center flex-col">
        <ArrowUpTrayIcon className="h-auto w-16 text-blue-500 mb-4" />
        <span className="text-gray-900 text-xl font-bold mb-2">
          Upload your video
        </span>
        <input
          type="file"
          accept="video/*"
          className="hidden"
          onChange={handleFileUpload}
        />
        <span className="text-center text-gray-400 text-xs">
          Please Upload a video to preview.
        </span>
      </div>
    </label>
  );
}
