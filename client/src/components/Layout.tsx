import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/degrees", label: "Degrees" },
    { href: "/certificates", label: "Certificates" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-[#0D3B1F] text-[#FFFFF0] py-2 text-sm">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:1-877-EPP-LEAD" className="flex items-center gap-2 hover:text-[#C9A227] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">1-877-EPP-LEAD</span>
            </a>
            <a href="mailto:info@echopoinsette.com" className="flex items-center gap-2 hover:text-[#C9A227] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@echopoinsette.com</span>
            </a>
          </div>
          <div className="text-[#C9A227] font-medium tracking-wide text-xs sm:text-sm">
            Veteran-Founded Institution
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-[#FFFFF0] border-b-2 border-[#C9A227] sticky top-0 z-50 shadow-md">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-[#0D3B1F] rounded-full flex items-center justify-center border-2 border-[#C9A227] group-hover:border-[#D4AF37] transition-colors">
                <span className="text-[#C9A227] font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>EPP</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-[#0D3B1F] text-xl font-bold tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
                  EchoPoinsettePower
                </h1>
                <p className="text-[#5C5C5C] text-xs tracking-widest uppercase">Faith-Based Education</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                    isActive(link.href)
                      ? "text-[#0D3B1F]"
                      : "text-[#5C5C5C] hover:text-[#0D3B1F]"
                  }`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A227]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/apply">
                <Button className="bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold px-6 py-2 tracking-wide uppercase text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Apply Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#0D3B1F]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-[#D4C9A8] pt-4">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-4 text-sm font-medium tracking-wide uppercase transition-colors ${
                      isActive(link.href)
                        ? "text-[#0D3B1F] bg-[#F0EDE5]"
                        : "text-[#5C5C5C] hover:text-[#0D3B1F] hover:bg-[#F0EDE5]"
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#C9A227] hover:bg-[#D4AF37] text-[#0D3B1F] font-semibold py-3 tracking-wide uppercase text-sm mt-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Apply Now
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0D3B1F] text-[#FFFFF0]">
        {/* Main Footer */}
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#1A5C32] rounded-full flex items-center justify-center border-2 border-[#C9A227]">
                  <span className="text-[#C9A227] font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>EPP</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>EchoPoinsettePower</h3>
                </div>
              </div>
              <p className="text-[#B8B8A8] text-sm leading-relaxed mb-4">
                A veteran-founded, faith-based educational institution dedicated to transforming lives through accessible, affordable doctoral education.
              </p>
              <div className="flex items-center gap-2 text-[#C9A227] text-sm">
                <span>🎖️</span>
                <span>Founded by a Disabled Combat Veteran</span>
              </div>
            </div>

            {/* Programs Column */}
            <div>
              <h4 className="text-[#C9A227] font-semibold uppercase tracking-wide text-sm mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Programs</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/degrees" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">Doctoral Degrees</Link></li>
                <li><Link href="/certificates" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">Certificate Programs</Link></li>
                <li><Link href="/degrees" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">Honorary Doctorates</Link></li>
                <li><Link href="/degrees" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">International Programs</Link></li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 className="text-[#C9A227] font-semibold uppercase tracking-wide text-sm mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">About Us</Link></li>
                <li><Link href="/apply" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">Apply Now</Link></li>
                <li><Link href="/contact" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">Contact Us</Link></li>
                <li><Link href="/about" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">Accreditation</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-[#C9A227] font-semibold uppercase tracking-wide text-sm mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C9A227]" />
                  <a href="tel:1-877-EPP-LEAD" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">1-877-EPP-LEAD</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C9A227]" />
                  <a href="mailto:info@echopoinsette.com" className="text-[#B8B8A8] hover:text-[#C9A227] transition-colors">info@echopoinsette.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#1A5C32]">
          <div className="container py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#B8B8A8]">
              <p>© 2026 EchoPoinsettePower. All Rights Reserved.</p>
              <p className="text-center">Accredited by the Echo Christian Accreditation Council (ECAC)</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
