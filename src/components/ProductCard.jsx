import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.article
      layout
      className="group overflow-hidden rounded-lg border border-espresso/15 bg-cream/80"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="h-72 overflow-hidden md:h-80">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="grid min-h-56 content-start p-6">
        <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.2em] text-espresso/70">{product.label}</p>
        <h3 className="font-serif text-3xl font-semibold leading-none">{product.name}</h3>
        <p className="mt-4 text-sm leading-6 text-espresso/70">{product.description}</p>
        <strong className="mt-auto pt-6 text-base tracking-wide">{product.price}</strong>
      </div>
    </motion.article>
  );
}
