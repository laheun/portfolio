import Image from 'next/image'

type Artwork = { title: string; src: string; width: number; height: number; size?: string }

const florals: Artwork[] = [
  { title: 'Lillium', src: '/images/floral/lillium.jpg', width: 800, height: 591 },
  { title: 'Coexistence', src: '/images/floral/coexistence.jpg', width: 800, height: 603 },
  { title: 'Pot', src: '/images/floral/pot.jpg', width: 800, height: 622 },
  { title: 'Freshly Picked', src: '/images/floral/freshly-picked.jpg', width: 797, height: 799 },
  {
    title: 'Mom’s Favorite Color',
    src: '/images/floral/moms-favorite-color.jpg',
    width: 800,
    height: 791,
  },
  { title: 'Yellows', src: '/images/floral/yellows.jpg', width: 655, height: 799 },
]

const places: Artwork[] = [
  { title: 'Paris, France', src: '/images/places/paris-1.jpg', width: 799, height: 784, size: '9 x 9' },
  { title: 'Himeji, Japan', src: '/images/places/himeji.jpg', width: 608, height: 799, size: '9 x 11' },
  { title: 'Portofino, Italy', src: '/images/places/portofino.jpg', width: 531, height: 799, size: '18 x 30' },
  { title: 'Santorini, Greece', src: '/images/places/santorini.jpg', width: 800, height: 604, size: '16 x 14' },
  { title: 'Hanoi, Vietnam', src: '/images/places/hanoi.jpg', width: 800, height: 592, size: '16 x 14' },
  { title: 'Paris, France', src: '/images/places/paris-2.jpg', width: 797, height: 800, size: '9 x 9' },
  { title: 'Venice, Italy', src: '/images/places/venice.jpg', width: 800, height: 628, size: '9 x 11' },
  { title: 'Barcelona, Spain', src: '/images/places/barcelona.jpg', width: 594, height: 799, size: '14 x 18' },
]

function Gallery({ items }: { items: Artwork[] }) {
  return (
    <ul className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
      {items.map((art) => (
        <li key={art.src} className="mb-6 break-inside-avoid">
          <figure>
            <Image
              src={art.src}
              alt={`${art.title} painting by Haeun Lee`}
              width={art.width}
              height={art.height}
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full rounded-lg"
            />
            <figcaption className="mt-3 flex items-baseline justify-between gap-2">
              <span className="font-serif text-lg font-medium">{art.title}</span>
              {art.size && <span className="text-sm text-muted-foreground">{art.size}</span>}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}

export function ArtWorks() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage-dark">Art works</p>

      <div id="florals" className="mt-4 scroll-mt-20">
        <h2 className="font-serif text-4xl font-medium text-sage-dark">Florals</h2>
        <Gallery items={florals} />
      </div>

      <div id="infrastructure" className="mt-20 scroll-mt-20">
        <h2 className="font-serif text-4xl font-medium text-sage-dark">
          Infrastructure <span className="italic">— inspired through admiration</span>
        </h2>
        <blockquote className="mt-4 font-serif text-xl italic text-muted-foreground">
          {'“to understand a culture, look at the spaces they create”'}
        </blockquote>
        <Gallery items={places} />
      </div>
    </section>
  )
}
