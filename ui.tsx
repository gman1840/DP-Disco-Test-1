export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur border-b border-ruby/30">
      <div className="container h-16 flex items-center justify-between">
        <a href="#home" className="font-display text-xl text-ruby tracking-wide no-underline">Dana Point Disco</a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="text-ink hover:text-ruby no-underline">Home</a>
          <a href="#packages" className="text-ink hover:text-ruby no-underline">Packages</a>
          <a href="#whats" className="text-ink hover:text-ruby no-underline">What’s a Silent Disco?</a>
          <a href="#events" className="text-ink hover:text-ruby no-underline">Events</a>
          <a href="#quote" className="text-ink hover:text-ruby no-underline">Request a Quote</a>
          <a href="#contact" className="text-ink hover:text-ruby no-underline">Contact Us</a>
          <a href="#about" className="text-ink hover:text-ruby no-underline">About Us</a>
        </div>
      </div>
    </nav>
  );
}

export function Section({ className, children, id }: { className?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className={`w-full py-20 ${className || ''}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-4xl text-ink text-center mb-10">{children}</h2>;
}

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white border border-sand rounded-2xl shadow-dpd p-6 text-center">{children}</div>;
}

export function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-block bg-sunset hover:bg-coral transition-colors text-white text-lg px-6 py-4 rounded-2xl shadow-dpd no-underline">
      {children}
    </a>
  );
}
