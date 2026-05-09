import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto grid w-[min(100%-2rem,1560px)] gap-12 py-16 lg:grid-cols-[0.95fr_0.85fr] lg:items-center lg:gap-20 lg:py-24">
      <motion.div
        className="h-[420px] overflow-hidden rounded-lg lg:h-[640px]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/images/about-baker.jpg"
          alt="Baker finishing pastries in a warm bakery kitchen"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, delay: 0.08 }}
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em]">About the baker</p>
        <h2 className="font-serif text-5xl font-semibold leading-[0.95] md:text-7xl">
          Every dessert begins with patience, texture, and feeling.
        </h2>
        <p className="mt-7 max-w-2xl leading-8 text-espresso/70">
          Maison Crumb was created for people who notice the quiet details: the gloss of ganache, the softness of sponge, the edge of a perfectly baked pastry, and the emotion a beautiful dessert brings to a table.
        </p>
        <p className="mt-5 max-w-2xl leading-8 text-espresso/70">
          Our work is handcrafted in small batches, shaped by classic technique and a modern boutique sensibility. From birthday cakes to intimate dessert boxes, each creation is designed to feel personal, refined, and memorable.
        </p>
      </motion.div>
    </section>
  );
}
