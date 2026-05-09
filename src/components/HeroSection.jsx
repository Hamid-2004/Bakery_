import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroSlides, whatsappUrl } from "../data/site";

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % heroSlides.length);
    }, 6200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-espresso text-cream">
      <AnimatePresence mode="sync">
        <motion.img
          key={heroSlides[active].image}
          src={heroSlides[active].image}
          alt={heroSlides[active].alt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.13 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.1 }, scale: { duration: 7.2, ease: "easeOut" } }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(40,19,12,0.9),rgba(40,19,12,0.5)_42%,rgba(40,19,12,0.18)),linear-gradient(0deg,rgba(40,19,12,0.44),rgba(40,19,12,0.08))]" />

      <div className="relative z-10 mx-auto grid min-h-screen w-[min(100%-2rem,1560px)] content-end pb-24 pt-32 md:content-center md:pb-20">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em]">Baked with love, made for memories</p>
          <h1 className="max-w-4xl font-serif text-[4rem] font-semibold leading-[0.88] md:text-[7rem] xl:text-[9rem]">
            Indulgence, composed with quiet luxury.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-cream/85 md:text-lg">
            A premium digital bakery menu of handcrafted cakes, pastries, dessert boxes, breads, and bespoke celebration creations for refined moments in Pakistan.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex min-h-12 items-center justify-center rounded-full bg-cream px-7 text-sm font-bold text-espresso transition hover:-translate-y-0.5 hover:shadow-luxury" href="#menu">
              Explore Menu
            </a>
            <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-cream px-7 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-cream hover:text-espresso" href={whatsappUrl} target="_blank" rel="noreferrer">
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            className={`h-0.5 w-9 transition ${active === index ? "scale-x-125 bg-cream" : "bg-cream/45"}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
