export default function Footer() {
  return (
    <footer id="contact" className="border-t border-espresso/15 bg-cream">
      <div className="mx-auto grid w-[min(100%-2rem,1560px)] gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex w-fit items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-espresso bg-espresso font-serif text-xl font-bold text-cream">
              MC
            </span>
            <span className="grid">
              <span className="font-serif text-3xl font-bold leading-none">Maison Crumb</span>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em]">Luxury Bakery</span>
            </span>
          </a>
          <p className="mt-6 max-w-sm text-sm leading-7 text-espresso/70">
            Premium cakes, pastries, dessert boxes, breads, drinks, and bespoke bakery orders in Karachi.
          </p>
        </div>

        <div className="grid content-start gap-2 text-sm text-espresso/70">
          <h2 className="mb-2 font-serif text-2xl text-espresso">Quick Links</h2>
          <a href="#top">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#gallery">Instagram Gallery</a>
          <a href="#custom-orders">Custom Orders</a>
        </div>

        <div className="grid content-start gap-2 text-sm text-espresso/70">
          <h2 className="mb-2 font-serif text-2xl text-espresso">Contact</h2>
          <a href="https://instagram.com/maisoncrumb.pk" target="_blank" rel="noreferrer">Instagram: @maisoncrumb.pk</a>
          <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">WhatsApp: +92 300 1234567</a>
          <span>Location: Karachi, Pakistan</span>
          <span>Hours: 11 AM - 10 PM</span>
        </div>

        <div className="grid content-start gap-2 text-sm text-espresso/70">
          <h2 className="mb-2 font-serif text-2xl text-espresso">Orders</h2>
          <span>Wedding cakes</span>
          <span>Birthday cakes</span>
          <span>Dessert tables</span>
          <span>Corporate gifts</span>
        </div>
      </div>
      <p className="border-t border-espresso/15 py-4 text-center text-xs">(c) 2025 Maison Crumb. All Rights Reserved.</p>
    </footer>
  );
}
