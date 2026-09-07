import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CATEGORIAS,
  DIRECCION,
  HORARIO,
  MAPS_URL,
  TELEFONO_TEL,
  TELEFONO_VISIBLE,
  WHATSAPP_VISIBLE,
  waLink,
} from "@/data/catalogo";
import { IconoCategoria, PowerIcon } from "@/components/iconos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Power Computers Zamora | Computadoras, reparación y soporte" },
      {
        name: "description",
        content:
          "Local de tecnología en Zamora: laptops, PC armadas, accesorios, impresoras, componentes y mantenimiento. Soporte a domicilio y diagnóstico antes de cobrar.",
      },
      { property: "og:title", content: "Power Computers | Tu equipo, siempre encendido" },
      {
        property: "og:description",
        content:
          "Venta de computadoras, reparación y soporte técnico a domicilio en Zamora. Escríbenos por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const NAV = [
  { href: "#catalogo", label: "Catálogo" },
  { href: "#porque", label: "Por qué elegirnos" },
  { href: "#visitanos", label: "Visítanos" },
];

function BotonWhatsApp({
  mensaje,
  children,
  variante = "primario",
  className = "",
}: {
  mensaje: string;
  children: React.ReactNode;
  variante?: "primario" | "outline" | "blanco";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center px-5 py-3 text-sm font-semibold transition-colors";
  const estilos = {
    primario: "bg-brand text-white hover:bg-brand-deep",
    outline: "border border-white/40 text-white hover:bg-white hover:text-ink",
    blanco: "bg-white text-brand hover:bg-smoke",
  }[variante];
  return (
    <a href={waLink(mensaje)} target="_blank" rel="noopener noreferrer" className={`${base} ${estilos} ${className}`}>
      {children}
    </a>
  );
}

function Landing() {
  const [activa, setActiva] = useState(CATEGORIAS[0].id);
  const categoria = CATEGORIAS.find((c) => c.id === activa) ?? CATEGORIAS[0];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 md:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2">
            <PowerIcon className="h-6 w-6 shrink-0 text-brand" />
            <span className="truncate font-display text-lg font-bold tracking-tight">
              Power Computers
            </span>
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm font-medium text-steel hover:text-ink"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <BotonWhatsApp mensaje="Hola, quiero hacer una consulta a Power Computers." className="shrink-0">
              Escribir por WhatsApp
            </BotonWhatsApp>
          </div>
        </div>
      </header>

      <main id="top" className="pt-[68px]">
        {/* Hero */}
        <section className="bg-ink text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.25fr_1fr] md:items-center md:gap-6 md:px-6 md:py-24">
            <div>
              <h1 className="font-display text-4xl leading-[1.05] font-bold sm:text-5xl md:text-6xl">
                Tu equipo,
                <br />
                siempre encendido
              </h1>
              <p className="mt-5 max-w-md text-base text-white/70">
                Vendemos, reparamos y damos soporte a computadoras en Zamora, también a domicilio.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <BotonWhatsApp mensaje="Hola, quiero información de Power Computers.">
                  Escribir por WhatsApp
                </BotonWhatsApp>
                <a
                  href={`tel:${TELEFONO_TEL}`}
                  className="inline-flex items-center justify-center border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
                >
                  Llamar ahora
                </a>
              </div>
            </div>
            <div className="relative flex justify-center md:justify-end">
              <PowerIcon className="h-48 w-48 text-brand sm:h-64 sm:w-64 md:h-72 md:w-72" />
            </div>
          </div>
        </section>

        {/* Franja de confianza */}
        <section className="border-b border-line bg-smoke">
          <div className="mx-auto grid max-w-6xl divide-y divide-line px-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-6">
            {[
              `Atendemos de ${HORARIO}`,
              "Visitas a domicilio en Zamora",
              "Diagnóstico antes de cobrar",
            ].map((t) => (
              <p key={t} className="px-0 py-4 text-sm font-medium text-ink md:px-6">
                {t}
              </p>
            ))}
          </div>
        </section>

        {/* Catálogo */}
        <section id="catalogo" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Catálogo</h2>
            <p className="mt-3 text-steel">
              Elige una categoría y consulta lo que necesites por WhatsApp. Si no ves algo, igual
              pregúntanos: conseguimos equipos y repuestos.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 border-b border-line pb-4" role="tablist">
            {CATEGORIAS.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={c.id === activa}
                onClick={() => setActiva(c.id)}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  c.id === activa
                    ? "bg-ink text-white"
                    : "border border-line text-steel hover:border-ink hover:text-ink"
                }`}
              >
                {c.nombre}
              </button>
            ))}
          </div>

          <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {categoria.productos.map((p) => (
              <li key={p.nombre} className="flex flex-col bg-white p-6">
                <div className="flex h-28 items-center justify-center bg-smoke">
                  <IconoCategoria tipo={categoria.icono} className="h-12 w-12 text-brand" />
                </div>
                <h3 className="mt-5 font-display text-lg leading-snug font-bold">{p.nombre}</h3>
                <p className="mt-1 text-sm font-medium text-steel">{p.precio}</p>
                <BotonWhatsApp
                  mensaje={`Hola, quiero consultar por: ${p.nombre}`}
                  className="mt-5 w-full"
                >
                  Consultar por WhatsApp
                </BotonWhatsApp>
              </li>
            ))}
          </ul>
        </section>

        {/* Por qué elegirnos */}
        <section id="porque" className="border-y border-line bg-smoke">
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Por qué elegirnos</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {[
                {
                  t: "Primero revisamos, después cobramos",
                  d: "Te decimos qué tiene tu equipo y cuánto cuesta antes de tocar nada.",
                },
                {
                  t: "Vamos a tu casa u oficina",
                  d: "Soporte a domicilio dentro de Zamora, sin que cargues la torre.",
                },
                {
                  t: "Un local de barrio, fácil de ubicar",
                  d: "Estamos en la esquina de Pío Jaramillo y Amazonas, y aquí seguimos.",
                },
              ].map((item, i) => (
                <li key={item.t} className="border-t-2 border-brand pt-5">
                  <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-xl font-bold">{item.t}</h3>
                  <p className="mt-2 text-sm text-steel">{item.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Visítanos */}
        <section id="visitanos" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Visítanos</h2>
          <div className="mt-10 grid gap-px bg-line md:grid-cols-2">
            <div className="bg-white md:pr-10">
              <dl className="divide-y divide-line">
                <div className="py-4">
                  <dt className="text-xs font-semibold tracking-wide text-steel">Dirección</dt>
                  <dd className="mt-1">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-lg font-bold underline decoration-brand decoration-2 underline-offset-4"
                    >
                      {DIRECCION}
                    </a>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-xs font-semibold tracking-wide text-steel">Horario</dt>
                  <dd className="mt-1 font-display text-lg font-bold">{HORARIO}</dd>
                </div>
                <div className="py-4">
                  <dt className="text-xs font-semibold tracking-wide text-steel">Teléfono</dt>
                  <dd className="mt-1">
                    <a href={`tel:${TELEFONO_TEL}`} className="font-display text-lg font-bold hover:text-brand">
                      {TELEFONO_VISIBLE}
                    </a>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-xs font-semibold tracking-wide text-steel">WhatsApp</dt>
                  <dd className="mt-1">
                    <a
                      href={waLink("Hola, escribo desde la página de Power Computers.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-lg font-bold hover:text-brand"
                    >
                      {WHATSAPP_VISIBLE}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col justify-center bg-brand p-8 text-white md:p-12">
              <h3 className="font-display text-2xl leading-tight font-bold sm:text-3xl">
                ¿Buscas un equipo o necesitas soporte? Escríbenos por WhatsApp
              </h3>
              <BotonWhatsApp
                mensaje="Hola, necesito ayuda con un equipo."
                variante="blanco"
                className="mt-8 w-full px-6 py-4 text-base sm:w-auto sm:self-start"
              >
                Escribir por WhatsApp
              </BotonWhatsApp>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-ink py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 md:px-6">
          <PowerIcon className="h-5 w-5 text-brand" />
          <span className="font-display font-bold">Power Computers</span>
          <span className="text-sm text-white/60">
            {DIRECCION} — Zamora, Ecuador
          </span>
        </div>
      </footer>
    </div>
  );
}
