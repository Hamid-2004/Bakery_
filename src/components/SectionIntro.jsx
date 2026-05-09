import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

export default function SectionIntro({ kicker, title, children, centered = false }) {
  return (
    <motion.div
      className={centered ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 grid gap-6 lg:grid-cols-[0.9fr_0.55fr] lg:items-end"}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div>
        {kicker && <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em]">{kicker}</p>}
        <h2 className="font-serif text-5xl font-semibold leading-[0.95] md:text-7xl">{title}</h2>
      </div>
      {children && <div className="text-sm leading-7 text-espresso/70 md:text-base">{children}</div>}
    </motion.div>
  );
}
