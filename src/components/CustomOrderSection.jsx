import { motion } from "framer-motion";
import { whatsappUrl } from "../data/site";

export default function CustomOrderSection() {
  return (
    <section id="custom-orders" className="mx-auto grid w-[min(100%-2rem,1560px)] gap-8 py-16 lg:grid-cols-[0.82fr_1.08fr] lg:py-24">
      <motion.div
        className="grid content-center rounded-lg border border-espresso/15 p-8 md:p-14"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em]">Custom orders</p>
        <h2 className="font-serif text-5xl font-semibold leading-[0.95] md:text-7xl">
          Wedding cakes, birthday cakes, and dessert tables with a personal signature.
        </h2>
        <p className="mt-7 max-w-xl leading-8 text-espresso/70">
          Tell us the occasion, your preferred palette, guest count, and delivery date. We will guide you toward a polished dessert experience that feels considered from first message to final slice.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-espresso px-7 text-sm font-bold text-cream transition hover:-translate-y-0.5 hover:shadow-luxury"
        >
          Discuss on WhatsApp
        </a>
      </motion.div>
      <motion.div
        className="h-[430px] overflow-hidden rounded-lg lg:h-auto"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, delay: 0.08 }}
      >
        <img
          src="/images/custom-celebration-cake.jpg"
          alt="Elegant custom celebration cake"
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
      </motion.div>
    </section>
  );
}
