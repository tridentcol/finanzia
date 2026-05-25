import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {children}
      </main>
    </div>
  );
}
