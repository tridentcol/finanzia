import Link from "next/link";

interface LogoProps {
  size?: number;
  href?: string;
}

export function Logo({ size = 18, href = "/" }: LogoProps) {
  return (
    <Link href={href} className="sidebar-logo" style={{ fontSize: size }}>
      <span className="sidebar-logo-mark" style={{ width: size + 6, height: size + 6 }} />
      <span style={{ letterSpacing: "-0.025em" }}>Finanzia</span>
    </Link>
  );
}
