import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { categories, products } from "../data/products";
import ProductCard from "./ProductCard";
import SectionIntro from "./SectionIntro";

export default function ProductGrid() {
  const [active, setActive] = useState("all");

  const filteredProducts = useMemo(() => {
    if (active === "all") return products;
    return products.filter((product) => product.category.includes(active));
  }, [active]);

  return (
    <section id="menu" className="mx-auto w-[min(100%-2rem,1560px)] py-16 lg:py-24">
      <SectionIntro kicker="Luxury bakery catalog" title="Our Creations">
        <p>
          Browse a curated menu of premium bakes. This is a visual showcase only, with orders handled through WhatsApp.
        </p>
      </SectionIntro>

      <div className="-mx-4 mb-9 flex gap-2 overflow-x-auto px-4 pb-3 md:mx-0 md:flex-wrap md:px-0">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            onClick={() => setActive(category.value)}
            className={`min-h-11 flex-none rounded-full border px-5 text-sm font-bold transition hover:-translate-y-0.5 ${
              active === category.value
                ? "border-espresso bg-espresso text-cream"
                : "border-espresso/30 text-espresso hover:bg-espresso hover:text-cream"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
