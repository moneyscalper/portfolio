import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
      <nav className="max-w-[1200px] mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xs tracking-[0.2em] font-bold hover:text-[#D4FF00] transition-colors"
          >
            SIDDHANT SINGH RAO
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('work')}
              className="text-xs hover:text-[#D4FF00] transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-xs hover:text-[#D4FF00] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-xs hover:text-[#D4FF00] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('work')}
                className="text-xs hover:text-[#D4FF00] transition-colors text-left"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-xs hover:text-[#D4FF00] transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-xs hover:text-[#D4FF00] transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
