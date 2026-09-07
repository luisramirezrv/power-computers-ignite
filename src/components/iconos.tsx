import type { IconoTipo } from "@/data/catalogo";

export function PowerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none">
      <path
        d="M50 8 V44"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="square"
      />
      <path
        d="M23.5 22.5a37 37 0 1 0 53 0"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="square"
      />
    </svg>
  );
}

const paths: Record<IconoTipo, React.ReactNode> = {
  laptop: (
    <>
      <rect x="6" y="7" width="28" height="18" strokeWidth="2.2" />
      <path d="M2 29h36" strokeWidth="2.2" />
    </>
  ),
  desktop: (
    <>
      <rect x="8" y="4" width="15" height="26" strokeWidth="2.2" />
      <path d="M27 10h6M27 16h6" strokeWidth="2.2" />
      <path d="M13 9h5" strokeWidth="2.2" />
    </>
  ),
  accesorio: (
    <>
      <rect x="3" y="12" width="22" height="13" strokeWidth="2.2" />
      <path d="M7 17h14M7 21h14" strokeWidth="2.2" />
      <rect x="29" y="12" width="8" height="13" rx="4" strokeWidth="2.2" />
    </>
  ),
  impresora: (
    <>
      <path d="M11 12V4h18v8" strokeWidth="2.2" />
      <rect x="5" y="12" width="30" height="12" strokeWidth="2.2" />
      <path d="M11 24h18v8H11z" strokeWidth="2.2" />
    </>
  ),
  componente: (
    <>
      <rect x="9" y="9" width="22" height="22" strokeWidth="2.2" />
      <rect x="16" y="16" width="8" height="8" strokeWidth="2.2" />
      <path d="M13 9V4M27 9V4M13 36v-5M27 36v-5M9 13H4M9 27H4M36 13h-5M36 27h-5" strokeWidth="2.2" />
    </>
  ),
  mantenimiento: (
    <>
      <path d="M24 6a7 7 0 0 0 9.5 9.5L20 29 11 20 24.5 6.5z" strokeWidth="2.2" />
      <path d="M11 20 5 26l4 4 6-6" strokeWidth="2.2" />
    </>
  ),
};

export function IconoCategoria({ tipo, className }: { tipo: IconoTipo; className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
    >
      {paths[tipo]}
    </svg>
  );
}
