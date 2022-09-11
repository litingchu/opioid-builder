import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from 'hooks/auth';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      retry(failureCount, error) {
        if (error instanceof Error && error) {
          return false;
        } else if (failureCount < 2) {
          return true;
        }
        return false;
      }
    }
  }
});

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
