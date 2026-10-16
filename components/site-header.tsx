const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Art' },
  { href: '#writing', label: 'Writing' },
  { href: '#marketing', label: 'Marketing' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4"
      >
        <a href="#top" className="shrink-0 font-serif text-xl font-semibold text-sage-dark">
          Grace Lee
        </a>
        <ul className="flex items-center gap-5 overflow-x-auto text-sm whitespace-nowrap">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-sage-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
