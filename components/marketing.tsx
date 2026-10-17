import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const posters = [
  '/images/marketing/prelaw-1.png',
  '/images/marketing/prelaw-2.png',
  '/images/marketing/prelaw-3.jpg',
  '/images/marketing/prelaw-4.png',
  '/images/marketing/prelaw-5.png',
  '/images/marketing/prelaw-6.png',
  '/images/marketing/prelaw-vandy-verdicts.png',
  '/images/marketing/prelaw-headshot-event.png',
]

const fashionPosts = [
  { src: '/images/marketing/fashion/emi-cho.png', alt: 'Speaker event poster for Émi Cho of Collectif N°9' },
  { src: '/images/marketing/fashion/tish-weinstock.png', alt: 'Speaker event poster for Tish Weinstock of British Vogue' },
  { src: '/images/marketing/fashion/derek-blasberg.png', alt: 'Speaker event poster for Derek Blasberg' },
  { src: '/images/marketing/fashion/gbm.png', alt: 'General body meeting poster' },
  { src: '/images/marketing/fashion/join-vfc.png', alt: 'Illustrated Vanderbilt Fashion Club membership QR code poster' },
  { src: '/images/marketing/fashion/finals-week.png', alt: "Finals Week Pick-Me-Up poster with gifts from Bloomingdale's" },
  { src: '/images/marketing/fashion/recap-fall-2025.png', alt: 'Fall 2025 semester recap post' },
  { src: '/images/marketing/fashion/recap-spring-2026.png', alt: 'Spring 2026 semester recap post' },
  { src: '/images/marketing/fashion/hustler-feature.png', alt: 'The Vanderbilt Hustler article on the Fashion Club spring speaker series' },
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
              <div key={stat.value} className="bg-sage/30 p-5">
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
                className="h-auto w-full border border-border"
              />
            </li>
          ))}
        </ul>
      </article>

      <article className="mt-16 grid gap-10 border-t border-border pt-16 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-serif text-2xl font-medium">Vanderbilt Fashion Club</h3>
            <p className="text-sage-dark">Head Committee of Media and Marketing</p>
            <p className="mt-2 text-muted-foreground">Event posters and Instagram content</p>
          </div>
          <a
            href="https://www.instagram.com/vanderbiltfashionclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-sage-dark underline-offset-4 hover:underline"
          >
            @vanderbiltfashionclub
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {fashionPosts.map((post) => (
            <li key={post.src}>
              <Image
                src={post.src}
                alt={post.alt}
                width={336}
                height={448}
                sizes="(min-width: 1024px) 200px, 45vw"
                className="aspect-[3/4] h-auto w-full border border-border object-cover"
              />
            </li>
          ))}
        </ul>
      </article>

      <article className="mt-16 bg-beige p-8 md:p-10">
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
