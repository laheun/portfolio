type Role = {
  org: string
  descriptor: string
  location: string
  role: string
  period: string
  bullets: string[]
}

const professional: Role[] = [
  {
    org: 'Office of Family Justice Center',
    descriptor: 'Nashville Government Agency',
    location: 'Nashville, Tennessee',
    role: 'Advocate and Outreach Intern',
    period: 'September 2026 – Present',
    bullets: [
      'Assist clients with obtaining Orders of Protection and coordinated referrals to court advocacy and legal services',
      'Support outreach across 13+ government, legal, nonprofit, and social service partners throughout Metro Nashville County',
      'Analyze marketing data and KPIs across 4+ marketing channels to inform outreach strategy and evaluate performance',
    ],
  },
  {
    org: 'ALO Yoga',
    descriptor: 'Luxury and Wellness Brand',
    location: 'Multiple Locations',
    role: 'Operations Associate',
    period: 'May 2026 – Present',
    bullets: [
      'Collaborate with Green Hills Visual Team to execute floor set updates and seasonal launches, ensuring brand alignment',
      'Process and reconcile 600+ units weekly across inbound shipments and transfers, supporting sales performance goals',
      "Serve as a founding operations team member for Alo Yoga's grand opening in Avalon, GA premium shopping complex",
    ],
  },
  {
    org: 'Vanderbilt Conferences & Events',
    descriptor: 'Summer Operations Department',
    location: 'Nashville, Tennessee',
    role: 'Logistics Manager',
    period: 'May 2025 – August 2025',
    bullets: [
      'Led staff to execute high-volume management logistics such as check-ins, client communication, and customer service',
      'Oversaw end-to-end event planning, supporting efficient workflows and high satisfaction for 25 groups (950+ guests)',
      'Worked with professional staff to supervise summer hires, ensuring consistent service delivery and operational support',
    ],
  },
  {
    org: 'Gathrd',
    descriptor: 'Marketing Agency',
    location: 'Lehi, Utah',
    role: 'Campaign Management Intern',
    period: 'December 2024 – May 2025',
    bullets: [
      'Optimized segmented email campaigns for 500K+ subscriber base, scaling partnership brand exposure and revenue growth',
      'Promoted sweepstakes bundles that value $10k–$20k to reach target entry goals of 25k–60k entries per marketing campaign',
    ],
  },
]

const leadership: Role[] = [
  {
    org: 'Vanderbilt Pre-Law Society',
    descriptor: 'VU Organization',
    location: 'Nashville, Tennessee',
    role: 'Public Relations Chair',
    period: 'August 2025 – Present',
    bullets: [
      'Optimize the VPLS brand lifecycle by producing high-impact content, resulting in 798.7% increase in Instagram reach',
      'Orchestrate networking symposiums with venue coordination and budget allocation for engagement of 140+ members',
    ],
  },
  {
    org: 'Vanderbilt Fashion Club',
    descriptor: 'VU Organization',
    location: 'Nashville, Tennessee',
    role: 'Head Committee of Media and Marketing',
    period: 'February 2026 – Present',
    bullets: [
      "Develop VFC's media presence across Instagram and Substack, connecting 400+ members to events and opportunities",
      'Curate editorial presence to showcase relationships with LVMH, Condé Nast, CHANEL, Vogue, Roller Rabbit, AERIN',
    ],
  },
]

const memberships = [
  'Vanderbilt Women in Business',
  'Kefi Art Collective',
  'Running Club',
  'Culinary Club',
  'UNICEF',
]

const skills = [
  'Microsoft Office',
  'Google Workspace',
  'Adobe Creative Suite',
  'Figma',
  'AutoCAD',
  'Canva',
  'ReadyMag',
  'Tableau',
  'WordPress',
  'SEO',
  'R Studio',
  'SAS',
  'HubSpot',
  'Airtable',
  'UI Design',
  'Meta Business Suite',
  'Client Service',
  'Visual Merchandising',
]

const interests = [
  'Acrylic Painting',
  'Aesthetics Philosophy',
  'IP Law',
  'Chess',
  'Piano',
  'Zone 2 Cardio',
  'Iced Americanos',
  'Live Jazz House',
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">{children}</h3>
  )
}

function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ol className="mt-6 flex flex-col">
      {roles.map((item) => (
        <li
          key={item.org}
          className="grid gap-2 border-t border-sage/50 py-8 md:grid-cols-[14rem_1fr] md:gap-10"
        >
          <div>
            <p className="text-sm text-muted-foreground">{item.period}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
          </div>
          <div>
            <h4 className="font-serif text-2xl font-medium">{item.org}</h4>
            <p className="text-sm text-muted-foreground">{item.descriptor}</p>
            <p className="mt-2 font-medium text-sage-dark">{item.role}</p>
            <ul className="mt-4 flex flex-col gap-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-relaxed text-pretty">
                  <span className="mt-2.5 size-1.5 shrink-0 bg-sage" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}

function TagGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <SectionLabel>{label}</SectionLabel>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="border border-sage/60 bg-white px-3 py-1 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Resume() {
  return (
    <section id="experience" className="border-y border-border bg-sage/30">
      <div className="mx-auto flex max-w-5xl flex-col gap-20 px-6 py-24">
        <div>
          <h2 className="font-serif text-4xl font-medium text-sage-dark">Education</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-[2fr_1fr]">
            <article className="border border-border bg-white p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-2xl font-medium">Vanderbilt University</h3>
                <span className="text-sm text-muted-foreground">Expected May 2028</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Nashville, Tennessee</p>
              <p className="mt-4 text-sage-dark">B.S. in Cognitive Studies</p>
              <p className="text-sage-dark">Minor in Legal Studies, Innovation Design Strategy</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                <li className="bg-beige px-3 py-1 text-sm">GPA: 3.88/4.00</li>
                <li className="bg-beige px-3 py-1 text-sm">{"Dean's List (Spring '24 – Present)"}</li>
                <li className="bg-beige px-3 py-1 text-sm">QuestBridge National Scholar</li>
              </ul>
            </article>
            <article className="border border-border bg-white p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-xl font-medium">Seckinger High School</h3>
                <span className="text-sm text-muted-foreground">2020 – 2024</span>
              </div>
              <p className="mt-1 text-sage-dark">High School Diploma</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                <li className="bg-beige px-3 py-1 text-sm">AP Capstone Diploma</li>
                <li className="bg-beige px-3 py-1 text-sm">Georgia Merit Scholar</li>
              </ul>
            </article>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-4xl font-medium text-sage-dark">Experience</h2>
          <div className="mt-10">
            <SectionLabel>Professional</SectionLabel>
            <RoleList roles={professional} />
          </div>
          <div className="mt-12">
            <SectionLabel>{'Extracurriculars & Leadership'}</SectionLabel>
            <RoleList roles={leadership} />
          </div>
        </div>

        <div>
          <h2 className="font-serif text-4xl font-medium text-sage-dark">
            {'Skills & Interests'}
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <TagGroup label="Technical Skills" items={skills} />
            <div className="flex flex-col gap-10">
              <TagGroup label="Memberships" items={memberships} />
              <TagGroup label="Interests" items={interests} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
