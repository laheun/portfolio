export function Hero() {
  return (
    <section id="top" className="bg-beige">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-36">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-sage-dark">
          Vanderbilt University
        </p>
        <h1 className="font-serif text-5xl font-medium leading-tight text-balance md:text-7xl">
          Haeun <span className="italic text-sage-dark">(Grace)</span> Lee
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          I attend Vanderbilt University, studying Cognitive Sciences, Legal Studies, &amp;
          Innovation Design Strategy.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href="#about"
            className="rounded-full border border-sage-dark px-6 py-3 text-sm font-medium text-sage-dark transition-colors hover:bg-white"
          >
            About me
          </a>
        </div>
      </div>
    </section>
  )
}
