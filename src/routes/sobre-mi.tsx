import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Sebastián Huesca" },
      {
        name: "description",
        content:
          "Estudiante de Ingeniería en Desarrollo de Software con base en soluciones móviles, escritorio, full stack y nube.",
      },
      { property: "og:title", content: "Sobre mí — Sebastián Huesca" },
      {
        property: "og:description",
        content: "Perfil profesional de Sebastián Huesca, desarrollador de software.",
      },
    ],
  }),
  component: SobreMi,
});

function SobreMi() {
  return (
    <PageShell title="Sobre mí">
      <p className="text-base leading-relaxed text-muted-foreground">
        Estudiante de Ingeniería en Desarrollo de Software con base en soluciones móviles, escritorio,
        full stack y en la nube. Me enfoco en resolver problemas complejos, experimentar con nuevas
        tecnologías y escribir código eficiente.
      </p>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground">
        Soy proactivo, me adapto rápido al cambio y busco una oportunidad para sumar valor al equipo y
        seguir creciendo profesionalmente.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {[
          { k: "Formación", v: "Ing. en Desarrollo de Software" },
          { k: "Enfoque", v: "Móvil, escritorio, full stack y nube" },
          { k: "Ubicación", v: "México" },
          { k: "Disponibilidad", v: "Abierto a nuevas oportunidades" },
        ].map((i) => (
          <div key={i.k} className="rounded-lg border border-border bg-card p-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">{i.k}</p>
            <p className="mt-2 text-sm text-card-foreground">{i.v}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
