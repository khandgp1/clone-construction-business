import { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Basement Finishing',
    'Home Additions',
    'Flooring',
    'Painting',
  ];

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-dark-800 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:3015655854"
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Phone size={13} />
              <span>(301) 565-5854</span>
            </a>
            <a
              href="mailto:expertsremodel@gmail.com"
              className="flex items-center gap-2 hover:text-gold-400 transition-colors"
            >
              <Mail size={13} />
              <span>expertsremodel@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock size={13} />
            <span>Mon–Fri: 8am–5pm | Sat: 9am–2pm | Closed Sun</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'fixed top-0 bg-white shadow-md'
            : 'relative bg-white/95 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 shrink-0">
              <div className="bg-olive-800 text-white px-2 py-1 rounded text-xs font-bold leading-tight">
                <div>Experts</div>
                <div className="flex items-center gap-0.5">
                  <div className="w-3 h-px bg-gold-400" />
                  <div className="text-gold-400 text-[10px]">Remodel</div>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-gray-900 leading-tight">Experts Remodel</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Maryland's Remodeling Experts</div>
              </div>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors">
                  Services <ChevronDown size={14} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 rounded-md py-2 min-w-[200px] z-50">
                    {services.map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gold-50 hover:text-gold-700 transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
            </div>

            {/* CTA button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:3015655854"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gold-600 transition-colors"
              >
                <Phone size={15} />
                <span className="hidden xl:block">(301) 565-5854</span>
              </a>
              <a
                href="#quote"
                className="bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors whitespace-nowrap"
              >
                Get A Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-gold-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {['Home', 'About', 'Projects', 'Gallery', 'Blog', 'Contact Us'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gold-600 hover:bg-gold-50 rounded transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-100">
                {services.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gold-600 hover:bg-gold-50 rounded transition-colors pl-6"
                  >
                    {s}
                  </a>
                ))}
              </div>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="tel:3015655854"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <Phone size={15} /> (301) 565-5854
                </a>
                <a
                  href="#quote"
                  className="bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors text-center"
                >
                  Get A Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gold-600 transition-colors"
    >
      {children}
    </a>
  );
}
