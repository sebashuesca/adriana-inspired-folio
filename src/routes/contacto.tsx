import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Sebastián Huesca" },
      {
        name: "description",
        content: "Contacta a Sebastián Huesca por teléfono o correo para proyectos y oportunidades.",
      },
      { property: "og:title", content: "Contacto — Sebastián Huesca" },
      {
        property: "og:description",
        content: "Datos de contacto de Sebastián Huesca, desarrollador de software.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <PageShell title="Contacto">
      <p className="text-base leading-relaxed text-muted-foreground">
        ¿Tienes un proyecto o una oportunidad? Escríbeme y con gusto conversamos.
      </p>
      <div className="mt-8 grid gap-4">
        <a
          href="tel:+522294207731"
          className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:bg-secondary"
        >
          <Phone className="size-5 text-primary" />
          <span>
            <span className="block text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Teléfono
            </span>
            <span className="text-sm text-card-foreground">229 420 7731</span>
          </span>
        </a>
        <a
          href="mailto:sebas.hra154@gmail.com"
          className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:bg-secondary"
        >
          <Mail className="size-5 text-primary" />
          <span>
            <span className="block text-xs font-semibold tracking-[0.16em] text-primary uppercase">
              Email
            </span>
            <span className="text-sm text-card-foreground">sebas.hra154@gmail.com</span>
          </span>
        </a>
      </div>
    </PageShell>
  );
}
