import { QueryClient, QueryClientProvider } from "react-query";

const queryConfig = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 0,
      cacheTime: 0,
    },
  },
});

export const reactQueryWrapper = ({ children }) => (
  <QueryClientProvider client={queryConfig}>{children}</QueryClientProvider>
);