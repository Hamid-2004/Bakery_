import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "../data/site";
import SectionIntro from "./SectionIntro";

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="mx-auto w-[min(100%-2rem,1560px)] py-16 lg:py-24">
      <SectionIntro centered title="Client Notes">
        <p>Words from customers who order for birthdays, intimate dinners, and family celebrations.</p>
      </SectionIntro>

      <div className="relative mx-auto mt-10 min-h-[330px] max-w-5xl md:min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.article
            key={testimonials[active].name}
            className="absolute inset-0 grid content-center rounded-lg border border-espresso/15 bg-cream/80 px-6 py-10 text-center md:px-16"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45 }}
          >
            <p className="font-serif text-3xl leading-tight md:text-5xl">{testimonials[active].quote}</p>
            <cite className="mt-7 text-sm font-bold not-italic">{testimonials[active].name}</cite>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-7 flex justify-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Show testimonial ${index + 1}`}
            className={`h-0.5 w-10 transition ${active === index ? "scale-x-125 bg-espresso" : "bg-espresso/30"}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
