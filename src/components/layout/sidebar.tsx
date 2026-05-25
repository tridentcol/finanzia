"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactElement } from "react";
import { I } from "@/components/icons";
import { Logo } from "@/components/layout/logo";
import { cn } from "@/lib/utils";

interface NavItemDef {
  id: string;
  label: string;
  href: string;
  icon: ReactElement;
  badge?: string;
}

interface NavGroup {
  label: string;
  items: NavItemDef[];
}

const GROUPS: NavGroup[] = [
  {
    label: "Universo",
    items: [
      { id: "timeline", label: "Timeline", icon: I.river, href: "/app/timeline" },
      { id: "insights", label: "Insights", icon: I.sparkle, href: "/app/insights", badge: "3" },
      { id: "coach",    label: "Coach IA", icon: I.bot,     href: "/app/coach" },
    ],
  },
  {
    label: "Movimientos",
    items: [
      { id: "cuentas", label: "Cuentas",       icon: I.wallet, href: "/app/accounts" },
      { id: "tx",      label: "Transacciones", icon: I.list,   href: "/app/transactions" },
      { id: "rec",     label: "Recurrentes",   icon: I.repeat, href: "/app/recurring" },
    ],
  },
  {
    label: "Planificación",
    items: [
      { id: "presupuestos", label: "Presupuestos", icon: I.pie,    href: "/app/budgets" },
      { id: "planes",       label: "Planes",       icon: I.target, href: "/app/plans" },
      { id: "deudas",       label: "Deudas",       icon: I.debt,   href: "/app/debts" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <Logo />
      {GROUPS.map((g) => (
        <div key={g.label} className="nav-group">
          <div className="nav-group-label">{g.label}</div>
          {g.items.map((it) => {
            const active = pathname?.startsWith(it.href);
            return (
              <Link
                key={it.id}
                href={it.href}
                className={cn("nav-item", active && "active")}
              >
                {it.icon}
                <span>{it.label}</span>
                {it.badge && <span className="badge">{it.badge}</span>}
              </Link>
            );
          })}
        </div>
      ))}
      <div className="sidebar-footer">
        <div className="avatar">CS</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Carlos S.</div>
          <div style={{ fontSize: 11, color: "var(--color-text-muted)" }}>Plan Premium</div>
        </div>
        <button className="btn btn-ghost btn-icon btn-sm" aria-label="Ajustes">
          {I.settings}
        </button>
      </div>
    </aside>
  );
}
