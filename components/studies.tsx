const studies = ['Cognitive Sciences', 'Legal Studies', 'Innovation Design Strategy']

export function Studies() {
  return (
    <section id="studies" className="border-y border-border bg-sage/30">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="font-serif text-4xl font-medium text-sage-dark">What I study</h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {studies.map((study, index) => (
            <li
              key={study}
              className="border border-border bg-white p-8"
            >
              <span className="font-serif text-lg italic text-sage" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 font-serif text-2xl font-medium">{study}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
