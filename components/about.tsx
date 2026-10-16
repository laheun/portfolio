const funFacts = [
  'An iced Americano is usually in my hand',
  'I love jazz and hip-hop music',
  'Enjoy meandering in new cities',
  'Enthusiastic about philosophy and seminar classes',
  'I can play piano and guitar',
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <h2 className="font-serif text-4xl font-medium text-sage-dark">{"Hi, I'm Haeun"}</h2>
        <div className="flex flex-col gap-10">
          <p className="text-lg leading-relaxed text-pretty">
            Here, I showcase a variety of my skills and creative interests that I am passionate
            about. I have a piqued interest in strategically integrating my artistic creativity
            into the projects I engage in.
          </p>
          <div className="rounded-xl bg-beige p-8">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
              Fun facts about me
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {funFacts.map((fact) => (
                <li key={fact} className="flex gap-3 leading-relaxed">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
