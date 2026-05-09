import { useEffect, useState } from "react";
import { whatsappUrl } from "../data/site";

const links = [
  ["Home", "#top"],
  ["Menu", "#menu"],
  ["About", "#about"],
  ["Gallery", "#gallery"],
  ["Reviews", "#testimonials"],
  ["Custom Orders", "#custom-orders"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 grid min-h-[76px] grid-cols-[1fr_auto_auto] items-center gap-4 px-4 transition-all duration-300 lg:min-h-[86px] lg:grid-cols-[auto_1fr_auto] lg:px-11 ${
        scrolled || open
          ? "border-b border-espresso/15 bg-cream/90 text-espresso shadow-[0_12px_38px_rgba(40,19,12,0.08)] backdrop-blur-xl"
          : "border-b border-cream/20 bg-transparent text-cream"
      }`}
    >
      <a href="#top" className="flex w-fit items-center gap-3" onClick={() => setOpen(false)}>
        <span className="grid h-11 w-11 place-items-center rounded-full border border-current bg-espresso font-serif text-xl font-bold text-cream lg:h-12 lg:w-12">
          MC
        </span>
        <span className="grid">
          <span className="font-serif text-2xl font-bold leading-none lg:text-3xl">Maison Crumb</span>
          <span className="text-[0.58rem] font-bold uppercase tracking-[0.28em] lg:text-[0.68rem]">Luxury Bakery</span>
        </span>
      </a>

      <nav
        className={`fixed left-4 right-4 top-[82px] grid gap-1 rounded-lg border border-espresso/15 bg-cream p-3 text-espresso shadow-luxury transition duration-200 lg:static lg:flex lg:justify-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:text-inherit lg:shadow-none ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0 lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
        }`}
      >
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="group relative px-2 py-2 text-sm font-semibold tracking-wide"
            onClick={() => setOpen(false)}
          >
            {label}
            <span className="absolute inset-x-2 bottom-1 h-px scale-x-0 bg-current transition group-hover:scale-x-100" />
          </a>
        ))}
      </nav>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className={`hidden min-h-12 items-center justify-center rounded-full border px-6 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-luxury lg:inline-flex ${
          scrolled ? "border-espresso bg-espresso text-cream" : "border-current bg-cream/10"
        }`}
      >
        Order on WhatsApp
      </a>

      <button
        type="button"
        className="grid h-11 w-11 place-items-center gap-1 rounded-full border border-current lg:hidden"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={`h-0.5 w-5 bg-current transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
        <span className={`h-0.5 w-5 bg-current transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
      </button>
    </header>
  );
}
