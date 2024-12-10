export type Sentence = {
  text: string;
  timestamp: string;
}

export type TranscriptSection =  {
  sectionTitle: string;
  sentences: Sentence[];
}

export interface MockApiResponse {
  transcript: TranscriptSection[];
}

export const mockApiResponse: MockApiResponse = {
  transcript: [
    {
      sectionTitle: "Introduction",
      sentences: [
        { text: "Welcome to my channel", timestamp: "00:00" },
        { text: "Today, we'll be showcasing our latest innovation.", timestamp: "00:05" },
      ],
    },
    {
      sectionTitle: "Key Features",
      sentences: [
        { text: "Our product has three main features.", timestamp: "00:20" },
        { text: "First, it's incredibly easy to use.", timestamp: "00:25" },
        { text: "Second, it's highly efficient.", timestamp: "00:32" },
        { text: "And third, it's cost-effective.", timestamp: "00:40" },
      ],
    },
    {
      sectionTitle: "Demonstration",
      sentences: [
        { text: "Simply press this button to start", timestamp: "00:43" },
        { text: "The interface is intuitive and user-friendly", timestamp: "00:50" },
      ],
    },
    {
      sectionTitle: "Summary",
      sentences: [
        { text: "We're excited to bring our the latest technology to market", timestamp: "01:00" },
        { text: "Thank you for your attention", timestamp: "01:30" },
      ],
    },
  ],
};

export const fetchMockAIProcessing = async (): Promise<MockApiResponse> => {
  return new Promise((resolve) => 
    setTimeout(()=> {
      resolve(mockApiResponse)
    }, 1000)
  )
}