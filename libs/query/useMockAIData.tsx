import { useQuery } from "@tanstack/react-query";
import { fetchMockAIProcessing } from "@/libs/mock";

export const useMockAIData = () => {
  return useQuery({
    queryKey: ["mockAIData"],
    queryFn: fetchMockAIProcessing,
    staleTime: Infinity,
  });
};
