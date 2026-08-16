import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function PageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <div className="hero-surface px-6 py-12 md:px-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary-foreground/85 uppercase hover:text-primary-foreground"
        >
          <ArrowLeft className="size-4" /> Volver
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-[0.18em] text-primary-foreground uppercase md:text-4xl">
          {title}
        </h1>
      </div>
      <div className="mx-auto max-w-3xl px-6 py-14">{children}</div>
    </main>
  );
}
