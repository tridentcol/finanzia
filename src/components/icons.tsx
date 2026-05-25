import type { ReactElement } from "react";

/**
 * Lucide-style inline SVG set. Match the design bundle exactly.
 * Use via {I.search}, {I.river}, etc.
 */
export const I = {
  search: (
    <svg className="icon" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
  plus: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  bell: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
  arrowUp: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M7 14l5-5 5 5" />
    </svg>
  ),
  arrowRight: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  arrowLeft: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M19 12H5M11 5l-7 7 7 7" />
    </svg>
  ),
  arrowDown: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M7 10l5 5 5-5" />
    </svg>
  ),
  river: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M3 7c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2M3 12c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2M3 17c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
    </svg>
  ),
  sparkle: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
    </svg>
  ),
  bot: (
    <svg className="icon" viewBox="0 0 24 24">
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 4v4M9 14h.01M15 14h.01" />
    </svg>
  ),
  wallet: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M21 12V8a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h16v4" />
      <path d="M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h-4a2 2 0 0 1 0-4h4" />
    </svg>
  ),
  list: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
  ),
  repeat: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  ),
  pie: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  ),
  target: (
    <svg className="icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  ),
  debt: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  settings: (
    <svg className="icon" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09A1.65 1.65 0 0 0 19.4 15z" />
    </svg>
  ),
  send: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  ),
  mic: (
    <svg className="icon" viewBox="0 0 24 24">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3" />
    </svg>
  ),
  paperclip: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M21.4 11.05L12.25 20.2a5.5 5.5 0 0 1-7.78-7.78l9.19-9.19a3.67 3.67 0 0 1 5.19 5.19l-9.2 9.19a1.83 1.83 0 0 1-2.59-2.59l8.49-8.48" />
    </svg>
  ),
  check: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  utensils: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M3 2v7c0 1.1.9 2 2 2h2v11M7 11l1-9M21 15V2v0a5 5 0 0 0-5 5v6h5zm0 0v7" />
    </svg>
  ),
  shopping: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  fuel: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M3 22h12M5 22V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v18M15 8h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2" />
    </svg>
  ),
  zap: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  ),
  film: (
    <svg className="icon" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 7h5M17 17h5" />
    </svg>
  ),
  home: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
      <path d="M9 22V12h6v10" />
    </svg>
  ),
  briefcase: (
    <svg className="icon" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  trending: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M22 7l-9.5 9.5-5-5L1 18" />
      <path d="M16 7h6v6" />
    </svg>
  ),
  trendingDown: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M22 17l-9.5-9.5-5 5L1 6" />
      <path d="M16 17h6v-6" />
    </svg>
  ),
  close: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  external: (
    <svg className="icon" viewBox="0 0 24 24">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  ),
} satisfies Record<string, ReactElement>;

export type IconKey = keyof typeof I;
