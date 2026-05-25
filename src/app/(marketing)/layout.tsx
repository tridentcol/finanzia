import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="relative inline-flex h-7 w-7 items-center justify-center">
              <span
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--gradient-aurora)", filter: "blur(8px)", opacity: 0.6 }}
              />
              <span
                className="relative inline-block h-3 w-3 rounded-full"
                style={{ background: "var(--gradient-aurora)" }}
              />
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg font-medium tracking-tight">
              finanzia
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[var(--color-text-secondary)] md:flex">
            <Link href="/#features" className="hover:text-[var(--color-text-primary)]">
              Concepto
            </Link>
            <Link href="/#how" className="hover:text-[var(--color-text-primary)]">
              Cómo funciona
            </Link>
            <Link href="/#pricing" className="hover:text-[var(--color-text-primary)]">
              Planes
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] sm:inline">
              Entrar
            </Link>
            <Button asChild variant="aurora" size="sm">
              <Link href="/signup">Empezar</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="pt-16">{children}</main>
      <footer className="border-t border-[var(--color-border-subtle)] py-10 mt-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-[var(--color-text-muted)] sm:flex-row">
          <span>© {new Date().getFullYear()} Finanzia — Decisiones inteligentes</span>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-[var(--color-text-secondary)]">
              Privacidad
            </Link>
            <Link href="/legal/terms" className="hover:text-[var(--color-text-secondary)]">
              Términos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
