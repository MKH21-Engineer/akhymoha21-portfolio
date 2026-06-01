export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-8 py-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <span className="text-xs text-neutral-500">© 2024 akhymoha21. All rights reserved.</span>
        <div className="flex gap-6">
          {[
            { label: 'Instagram', href: 'https://instagram.com/akhymoha21' },
            { label: 'Work',      href: '#work' },
            { label: 'Contact',   href: '#contact' },
          ].map(({ label, href }) => (
            <a key={label} href={href}
              className="text-xs text-neutral-500 hover:text-neutral-100 transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}