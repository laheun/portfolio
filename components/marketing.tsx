import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const posters = [
  '/images/marketing/prelaw-1.png',
  '/images/marketing/prelaw-2.png',
  '/images/marketing/prelaw-3.jpg',
  '/images/marketing/prelaw-4.png',
  '/images/marketing/prelaw-5.png',
  '/images/marketing/prelaw-6.png',
]

const stats = [
  { value: '798.7%', label: 'surge in Instagram profile reach' },
  { value: '44k+', label: 'Instagram page views within 50 days' },
]

export function Marketing() {
  return (
    <section id="marketing" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-serif text-4xl font-medium text-sage-dark">Marketing projects</h2>

      <article className="mt-10 grid gap-10 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-6">
          <Image
            src="/images/marketing/prelaw-logo.png"
            alt="Vanderbilt Pre-Law Society seal"
            width={96}
            height={96}
            className="size-24"
          />
          <div>
            <h3 className="font-serif text-2xl font-medium">Vanderbilt Pre-Law Society</h3>
            <p className="text-sage-dark">Marketing Director</p>
            <p className="mt-2 text-muted-foreground">Promotional content</p>
          </div>
          <dl className="flex flex-col gap-4">
            {stats.map((stat) => (
              <div key={stat.value} className="rounded-xl bg-sage/30 p-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-serif text-3xl font-medium text-sage-dark">
                    {stat.value}
                  </span>
                  <span className="text-sm">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {posters.map((src, index) => (
            <li key={src}>
              <Image
                src={src}
                alt={`Vanderbilt Pre-Law Society promotional post ${index + 1}`}
                width={640}
                height={800}
                sizes="(min-width: 1024px) 200px, 45vw"
                className="h-auto w-full rounded-lg border border-border"
              />
            </li>
          ))}
        </ul>
      </article>

      <article className="mt-16 rounded-xl bg-beige p-8 md:p-10">
        <h3 className="font-serif text-2xl font-medium">Gathrd | Marketing Agency</h3>
        <p className="text-sage-dark">Public Relations Intern</p>
        <p className="mt-4 max-w-2xl leading-relaxed">
          Instagram Reel content promoting the &lsquo;Luxury in the Tropics&rsquo; Giveaway Bundle
          in collaboration with various brands.
        </p>
        <a
          href="https://gathrd.co"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 font-medium text-sage-dark underline-offset-4 hover:underline"
        >
          Gathrd.co
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </article>
    </section>
  )
}
