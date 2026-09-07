// EDITA AQUÍ los productos y precios. Cada categoría tiene su lista.
export const WHATSAPP_URL = "https://wa.me/593980704490";
export const TELEFONO_TEL = "+593980704490";
export const TELEFONO_VISIBLE = "098 070 4490";
export const WHATSAPP_VISIBLE = "099 383 5082";
export const DIRECCION = "Pío Jaramillo y Amazonas, esquina";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=P%C3%ADo+Jaramillo+y+Amazonas+Zamora+Ecuador";
export const HORARIO = "9:30am a 8:00pm";

export function waLink(mensaje: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(mensaje)}`;
}

export type Producto = { nombre: string; precio: string };
export type Categoria = { id: string; nombre: string; icono: IconoTipo; productos: Producto[] };
export type IconoTipo =
  | "laptop"
  | "desktop"
  | "accesorio"
  | "impresora"
  | "componente"
  | "mantenimiento";

export const CATEGORIAS: Categoria[] = [
  {
    id: "laptops",
    nombre: "Laptops",
    icono: "laptop",
    productos: [
      { nombre: "Laptop Core i5 8GB/256GB SSD", precio: "Desde $450" },
      { nombre: "Laptop Core i7 16GB/512GB SSD", precio: "Desde $680" },
      { nombre: "Laptop para oficina básica 4GB/128GB", precio: "Desde $320" },
    ],
  },
  {
    id: "escritorio",
    nombre: "PC de escritorio",
    icono: "desktop",
    productos: [
      { nombre: "PC armada básica (oficina/estudio)", precio: "Desde $380" },
      { nombre: "PC armada gama media (multitarea)", precio: "Desde $550" },
      { nombre: "PC gamer/diseño a la medida", precio: "Cotización según requerimiento" },
    ],
  },
  {
    id: "accesorios",
    nombre: "Accesorios y periféricos",
    icono: "accesorio",
    productos: [
      { nombre: "Teclado y mouse combo", precio: "$15" },
      { nombre: "Audífonos con micrófono", precio: "$12" },
      { nombre: "Webcam HD", precio: "$18" },
      { nombre: "Estabilizador de voltaje", precio: "$25" },
    ],
  },
  {
    id: "impresoras",
    nombre: "Impresoras y suministros",
    icono: "impresora",
    productos: [
      { nombre: "Impresora multifunción tinta continua", precio: "$180" },
      { nombre: "Cartuchos y tintas", precio: "Desde $8" },
      { nombre: "Resmas de papel", precio: "$4" },
    ],
  },
  {
    id: "componentes",
    nombre: "Componentes",
    icono: "componente",
    productos: [
      { nombre: "Memoria RAM 8GB DDR4", precio: "$28" },
      { nombre: "Disco sólido SSD 480GB", precio: "$35" },
      { nombre: "Disco duro 1TB", precio: "$40" },
      { nombre: "Tarjeta madre", precio: "Desde $60" },
    ],
  },
  {
    id: "mantenimiento",
    nombre: "Mantenimiento de equipos",
    icono: "mantenimiento",
    productos: [
      { nombre: "Limpieza y cambio de pasta térmica", precio: "$15" },
      { nombre: "Formateo y respaldo de información", precio: "$12" },
      { nombre: "Revisión general y diagnóstico", precio: "Gratis con el servicio" },
    ],
  },
];
