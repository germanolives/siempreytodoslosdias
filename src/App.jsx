export function App() {
  const whatsappLink = "https://wa.me/5492235552442";
  const emailLink = "mailto:siempreytodoslosdias@gmail.com";

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-slate-950 px-6 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(192,132,252,0.2),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(45,212,191,0.12),transparent_30%)]" />

      <section className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm sm:p-12">
        <p className="mb-4 inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
          siempreytodoslosdias
        </p>

        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">
          Desarrollo web en construccion
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-base text-slate-300 sm:text-lg">
          En siempreytodoslosdias estamos construyendo nuestro nuevo sitio para
          mostrar servicios de desarrollo web modernos, rapidos y a medida.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
            React
          </span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
            Tailwind
          </span>
          <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200">
            Desarrollo web
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Contactar por WhatsApp
          </a>
          <a
            href={emailLink}
            className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/5"
          >
            Enviar email
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          Respondemos consultas por WhatsApp y email.
        </p>
      </section>
    </main>
  );
}
