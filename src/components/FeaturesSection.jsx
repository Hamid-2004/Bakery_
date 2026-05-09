import { motion } from "framer-motion";
import { features } from "../data/site";

export default function FeaturesSection() {
  return (
    <section className="mx-auto grid w-[min(100%-2rem,1560px)] gap-px py-16 md:grid-cols-2 lg:grid-cols-5 lg:py-20">
      {features.map(([title, text], index) => (
        <motion.article
          key={title}
          className="min-h-48 border border-espresso/15 bg-cream/70 p-7"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: index * 0.05, duration: 0.55 }}
        >
          <span className="mb-6 block h-8 w-8 rounded-full border border-espresso" aria-hidden="true" />
          <h2 className="font-serif text-2xl font-semibold leading-none">{title}</h2>
          <p className="mt-4 text-sm leading-6 text-espresso/70">{text}</p>
        </motion.article>
      ))}
    </section>
  );
}
