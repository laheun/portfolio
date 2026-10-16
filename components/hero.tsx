import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="bg-beige">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:py-28">
        <div className="flex-1">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-sage-dark">
            Vanderbilt University
          </p>
          <h1 className="font-serif text-5xl font-medium leading-tight text-balance md:text-7xl">
            Haeun <span className="italic text-sage-dark">(Grace)</span> Lee
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            I attend Vanderbilt University, studying Cognitive Sciences, Legal Studies, &amp;
            Innovation Design Strategy.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="border border-sage-dark px-6 py-3 text-sm font-medium text-sage-dark transition-colors hover:bg-white"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-sage/30 md:w-80">
          <Image
            src="/images/about/headshot.png"
            alt="Portrait of Haeun (Grace) Lee"
            fill
            priority
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover object-right"
          />
        </div>
      </div>
    </section>
  )
}
