"use client";

import VideoPreview from "@/components/VideoPreview";
import Navigation from "@/layouts/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="container mx-auto px-9 md:px-12 py-24 flex flex-col items-center justify-center min-h-screen">
        <div className="my-14 text-center max-w-4xl">
          <h1 className="font-bold text-5xl md:text-6xl mb-6 leading-snug">
            Video Highlight Tool
          </h1>
          <span className="text-sm md:text-base text-gray-700">
            Transform your videos with the Video Highlight Tool, an AI-powered
            solution that crafts dynamic highlights and lets you refine them
            effortlessly with a sleek transcript editor.
          </span>
        </div>
        <VideoPreview />
      </main>
    </>
  );
};

export default Home;
