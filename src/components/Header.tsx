import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Featured', href: '#featured' },
  { label: 'Arrivals', href: '#arrivals' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Blog', href: '#blog' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-[3px] border-primary">
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src={logo} alt="BookStore" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-foreground hover:text-primary font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="icon" size="icon" className="hidden md:flex">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
          
          <Button variant="icon" size="icon" className="relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
              0
            </span>
          </Button>

          <Button variant="icon" size="icon" onClick={toggleTheme}>
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="icon"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="section-container pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
