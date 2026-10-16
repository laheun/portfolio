const highlights = [
  "Selected for inclusion in Vanderbilt University's Being Human Showcase as part of the Undergraduate Writing Symposium, an annual event celebrating outstanding undergraduate writing.",
  'Written works are recognized through a competitive blind review process, earning one of the highest rankings across multiple faculty and staff reviewers.',
  'The academic research study delves into the dietary habits and attitudes of low-income consumers living in metro Atlanta in the United States, aged between 18 and 40.',
]

export function WrittenWorks() {
  return (
    <section id="writing" className="bg-beige">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="font-serif text-4xl font-medium text-sage-dark">Written works</h2>
        <article className="mt-10 bg-white p-8 md:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
            Academic Research · 2025 Undergraduate Writing Symposium
          </p>
          <h3 className="mt-4 font-serif text-2xl font-medium leading-snug text-balance md:text-3xl">
            Comparative Analysis of Low-Income Consumer Dietary Habits and Attitudes Towards Mass
            Food Corporations Based on BMI Status
          </h3>
          <p className="mt-3 italic text-muted-foreground">
            17th Annual Undergraduate Writing Symposium — Nominated Essay
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span className="mt-2.5 size-1.5 shrink-0 bg-sage" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
