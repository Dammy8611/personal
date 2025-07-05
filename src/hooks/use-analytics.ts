import { staticAnalytics } from "../data/static-data";

export function useAnalytics() {
  return {
    data: staticAnalytics,
    isLoading: false,
    error: null,
  };
}

export function useIncrementPageViews() {
  return {
    mutate: () => {
      // No-op for static site
    },
    isPending: false,
  };
}
