import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Portafolio de proyectos — Sebastián Huesca" },
      {
        name: "description",
        content:
          "Proyectos de desarrollo móvil, escritorio, full stack y nube realizados por Sebastián Huesca.",
      },
      { property: "og:title", content: "Portafolio de proyectos — Sebastián Huesca" },
      {
        property: "og:description",
        content: "Selección de proyectos de software: apps móviles, sistemas de escritorio y web.",
      },
    ],
  }),
  component: Proyectos,
});

const proyectos = [
  {
    nombre: "App de perfil profesional",
    tipo: "Android · Kotlin",
    desc: "Aplicación móvil con tarjeta de presentación, sección de perfil y diálogo de contacto.",
  },
  {
    nombre: "Sistema de gestión de escritorio",
    tipo: "Escritorio · C# / Java",
    desc: "Aplicación con CRUD, control de usuarios y reportes conectada a base de datos relacional.",
  },
  {
    nombre: "API y panel full stack",
    tipo: "Web · React + Node",
    desc: "Servicio REST con autenticación y panel de administración para consultar y editar registros.",
  },
  {
    nombre: "Despliegue en la nube",
    tipo: "Cloud · Docker",
    desc: "Contenerización y publicación de servicios con variables de entorno y despliegue continuo.",
  },
];

function Proyectos() {
  return (
    <PageShell title="Portafolio">
      <div className="grid gap-5">
        {proyectos.map((p) => (
          <article
            key={p.nombre}
            className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">{p.tipo}</p>
            <h2 className="mt-2 text-lg font-semibold text-card-foreground">{p.nombre}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
