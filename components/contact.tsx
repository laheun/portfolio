import { Mail, ArrowUpRight } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-serif text-4xl font-medium text-sage-dark">Get in touch</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <a
          href="mailto:haeun.lee@vanderbilt.edu"
          className="group flex items-center justify-between rounded-xl bg-beige p-6 transition-colors hover:bg-sage/25"
        >
          <span className="flex items-center gap-3">
            <Mail className="size-5 text-sage-dark" aria-hidden="true" />
            <span>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <span className="font-medium break-all">haeun.lee@vanderbilt.edu</span>
            </span>
          </span>
          <ArrowUpRight className="size-5 shrink-0 text-sage-dark transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
        <a
          href="https://linkedin.com/in/haeunele"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between rounded-xl bg-beige p-6 transition-colors hover:bg-sage/25"
        >
          <span>
            <span className="block text-xs uppercase tracking-widest text-muted-foreground">
              LinkedIn
            </span>
            <span className="font-medium">linkedin.com/in/haeunele</span>
          </span>
          <ArrowUpRight className="size-5 shrink-0 text-sage-dark transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </section>
  )
}
