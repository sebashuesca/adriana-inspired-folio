import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import foto from "@/assets/sebastian.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sebastián Huesca — Desarrollador de Software" },
      {
        name: "description",
        content:
          "Portafolio de Sebastián Huesca, desarrollador de software: proyectos, habilidades y contacto.",
      },
      { property: "og:title", content: "Sebastián Huesca — Desarrollador de Software" },
      {
        property: "og:description",
        content: "Portafolio de Sebastián Huesca: proyectos móviles, escritorio, full stack y nube.",
      },
    ],
  }),
  component: Home,
});

const links = [
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/proyectos", label: "Portafolio" },
  { to: "/habilidades", label: "Habilidades" },
  { to: "/contacto", label: "Contacto" },
] as const;

function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <section className="hero-surface w-full max-w-5xl overflow-hidden rounded-lg">
        <div className="grid items-center gap-10 px-8 py-14 md:grid-cols-2 md:px-16 md:py-20">
          <div className="flex flex-col items-center gap-8">
            <img
              src={foto.url}
              alt="Retrato de Sebastián Huesca"
              className="size-56 rounded-full object-cover ring-4 ring-primary-foreground/40 md:size-64"
            />
            <div className="flex items-center gap-6 text-primary-foreground/80">
              <a href="https://github.com" aria-label="GitHub" className="hover:text-primary-foreground">
                <Github className="size-6" />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:text-primary-foreground"
              >
                <Linkedin className="size-6" />
              </a>
              <a
                href="mailto:sebas.hra154@gmail.com"
                aria-label="Correo"
                className="hover:text-primary-foreground"
              >
                <Mail className="size-6" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
              Sebastián Huesca
            </h1>
            <p className="mt-2 text-xs font-semibold tracking-[0.28em] text-primary-foreground/85 uppercase">
              Desarrollador de Software
            </p>
            <nav className="mt-10 flex flex-col gap-4">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="nav-pill">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}
