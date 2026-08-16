import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/habilidades")({
  head: () => ({
    meta: [
      { title: "Habilidades técnicas — Sebastián Huesca" },
      {
        name: "description",
        content:
          "Tecnologías y habilidades de Sebastián Huesca: móvil, escritorio, web full stack, bases de datos y nube.",
      },
      { property: "og:title", content: "Habilidades técnicas — Sebastián Huesca" },
      {
        property: "og:description",
        content: "Stack técnico y habilidades profesionales de Sebastián Huesca.",
      },
    ],
  }),
  component: Habilidades,
});

const grupos = [
  { titulo: "Móvil", items: ["Kotlin", "Android Studio", "Jetpack Compose"] },
  { titulo: "Escritorio", items: ["C#", "Java", "WPF / Swing"] },
  { titulo: "Web full stack", items: ["React", "TypeScript", "Node.js"] },
  { titulo: "Datos y nube", items: ["SQL Server", "PostgreSQL", "Docker"] },
];

function Habilidades() {
  return (
    <PageShell title="Habilidades">
      <div className="grid gap-5 sm:grid-cols-2">
        {grupos.map((g) => (
          <div key={g.titulo} className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              {g.titulo}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li
                  key={i}
                  className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
