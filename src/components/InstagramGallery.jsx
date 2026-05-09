import { motion } from "framer-motion";
import { galleryImages } from "../data/site";
import SectionIntro from "./SectionIntro";

export default function InstagramGallery() {
  return (
    <section id="gallery" className="mx-auto w-[min(100%-2rem,1560px)] py-16 lg:py-24">
      <SectionIntro centered title="From the Maison">
        <p>A quiet gallery of cakes, pastries, and dessert tables made for beautiful moments.</p>
      </SectionIntro>

      <div className="grid auto-rows-[240px] gap-4 md:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image}
            className={`overflow-hidden rounded-lg ${index === 0 || index === 3 ? "lg:row-span-2" : ""} ${index === 2 ? "lg:col-span-2" : ""}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
          >
            <img
              src={image}
              alt={`Maison Crumb bakery gallery ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <a
        href="https://instagram.com/maisoncrumb.pk"
        target="_blank"
        rel="noreferrer"
        className="mx-auto mt-8 block w-fit border-b border-espresso pb-1 text-sm font-bold"
      >
        Follow us on Instagram
      </a>
    </section>
  );
}
