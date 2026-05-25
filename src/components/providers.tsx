"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "sonner";
import { CommandBarProvider } from "@/components/command/command-bar-context";
import { CommandBar } from "@/components/command/command-bar";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60_000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <CommandBarProvider>
        {children}
        <CommandBar />
        <Toaster
          position="bottom-right"
          theme="dark"
          toastOptions={{
            style: {
              background: "rgba(15, 17, 32, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#f0f2ff",
              backdropFilter: "blur(24px)",
            },
          }}
        />
      </CommandBarProvider>
    </QueryClientProvider>
  );
}
