const education = [
  {
    school: 'Vanderbilt University',
    detail: 'Bachelor of Science in Cognitive Sciences',
    notes: ['Minor in Legal Studies', "Dean's List ('24–'26)"],
  },
  {
    school: 'Seckinger High School',
    detail: 'High School Diploma',
    period: '2020 – 2024',
    notes: ['QuestBridge Scholar', 'AP Capstone Diploma', 'Georgia Merit Scholar'],
  },
]

const experience = [
  {
    org: 'Vanderbilt Pre-Law Society',
    role: 'Marketing Director and Events Coordinator',
    period: '2025 – Present',
  },
  { org: 'VUMA Department', role: 'Museum Operations Attendant', period: '2024 – Present' },
  { org: 'Gathrd Marketing Agency', role: 'Public Relations Intern', period: '2025 (Spring)' },
  {
    org: 'Willed by Wellness Consulting and Counseling',
    role: 'Marketing Intern',
    period: '2025 (Spring)',
  },
]

export function Resume() {
  return (
    <section id="experience" className="border-y border-border bg-sage/30">
      <div className="mx-auto grid max-w-5xl gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl font-medium text-sage-dark">Education</h2>
          <ul className="mt-10 flex flex-col gap-4">
            {education.map((item) => (
              <li key={item.school} className="rounded-xl border border-border bg-white p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl font-medium">{item.school}</h3>
                  {item.period && (
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  )}
                </div>
                <p className="mt-1 text-sage-dark">{item.detail}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.notes.map((note) => (
                    <li key={note} className="rounded-full bg-beige px-3 py-1 text-sm">
                      {note}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-4xl font-medium text-sage-dark">Experience</h2>
          <ol className="mt-10 flex flex-col">
            {experience.map((item) => (
              <li key={item.org} className="border-b border-sage/50 py-5 first:pt-0">
                <p className="text-sm text-muted-foreground">{item.period}</p>
                <h3 className="mt-1 font-serif text-xl font-medium">{item.org}</h3>
                <p className="text-sage-dark">{item.role}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
