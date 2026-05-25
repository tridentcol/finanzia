"use client";

import { Fragment } from "react";
import { I } from "@/components/icons";
import { useCommandBar } from "@/components/command/command-bar-context";

interface TopbarProps {
  crumbs: string[];
}

export function Topbar({ crumbs }: TopbarProps) {
  const { open } = useCommandBar();
  return (
    <div className="topbar">
      <div className="breadcrumbs">
        {crumbs.map((c, i) => (
          <Fragment key={i}>
            {i > 0 && <span className="sep">›</span>}
            <span className={i === crumbs.length - 1 ? "current" : ""}>{c}</span>
          </Fragment>
        ))}
      </div>
      <button type="button" className="cmd-trigger" onClick={open}>
        {I.search}
        <span style={{ flex: 1, textAlign: "left" }}>Busca, navega, pregunta…</span>
        <span className="kbd">⌘K</span>
      </button>
      <button className="btn btn-secondary btn-sm">
        {I.plus} Nueva
      </button>
      <button className="btn btn-ghost btn-icon btn-sm" aria-label="Notificaciones">
        {I.bell}
      </button>
    </div>
  );
}
