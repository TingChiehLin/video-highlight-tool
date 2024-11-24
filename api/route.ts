import { NextResponse } from 'next/server';

interface TranscriptSection {
  id: string;
  title: string;
  startTime: number;
  endTime: number;
  sentences: {
    id: string;
    text: string;
    startTime: number;
    endTime: number;
    isHighlight: boolean;
  }[];
}

// Mock API response type
interface ProcessedVideoData {
  videoId: string;
  fullTranscript: string;
  sections: TranscriptSection[];
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const video = formData.get('video');

    if (!video) {
      return NextResponse.json(
        { error: 'No video file provided' },
        { status: 400 }
      );
    }

    // Mock AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock API response
    const mockResponse: ProcessedVideoData = {
      videoId: 'mock-video-1',
      fullTranscript: 'This is the full transcript of the video...',
      sections: [
        {
          id: 'section-1',
          title: 'Introduction',
          startTime: 0,
          endTime: 30,
          sentences: [
            {
              id: 'sentence-1',
              text: 'Welcome to our presentation.',
              startTime: 0,
              endTime: 5,
              isHighlight: true,
            },
            // Add more mock sentences...
          ],
        },
        // Add more mock sections...
      ],
    };

    return NextResponse.json(mockResponse);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to process video, Error: ${error}` },
      { status: 500 }
    );
  }
}