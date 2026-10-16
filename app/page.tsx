import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Studies } from '@/components/studies'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Studies />
        <Contact />
      </main>
      <footer className="border-t border-border bg-sage-dark">
        <p className="mx-auto max-w-5xl px-6 py-8 text-sm text-white/80">
          {'© '}
          {new Date().getFullYear()} Haeun (Grace) Lee
        </p>
      </footer>
    </>
  )
}
