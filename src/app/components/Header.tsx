import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/c98273e8235816fbf095c3442badfd44f858eb30.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  const navLinkClasses = (href: string) =>
    `transition-colors ${
      path === href
        ? "text-blue-700 font-semibold"
        : "text-gray-700 hover:text-black"
    }`;

  const mobileNavLinkClasses = (href: string) =>
    `block py-2 px-2 rounded-md transition-colors ${
      path === href
        ? "bg-blue-50 text-blue-700 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="OELOESA Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
            <div>
              <h1 className="font-bold text-gray-900 text-sm sm:text-base">OELOESA</h1>
              <p className="hidden sm:block text-xs text-gray-600">Educate • Encourage • Empower</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="/about" className={navLinkClasses("/about")}>
              About
            </a>
            <a href="/programs" className={navLinkClasses("/programs")}>
              Programs
            </a>
            <a href="/impact" className={navLinkClasses("/impact")}>
              Impact
            </a>
            <a href="/stories" className={navLinkClasses("/stories")}>
              Stories
            </a>
            <a href="/about/gallery" className={navLinkClasses("/about/gallery")}>
              Gallery
            </a>
            <a href="/contact" className={navLinkClasses("/contact")}>
              Contact
            </a>
            <a href="/donate" className="px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-white hover:text-white visited:text-white font-semibold rounded-lg transition-colors">
              Donate Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <a
              href="/about"
              className={mobileNavLinkClasses("/about")}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/programs"
              className={mobileNavLinkClasses("/programs")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Programs
            </a>
            <a
              href="/impact"
              className={mobileNavLinkClasses("/impact")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Impact
            </a>
            <a
              href="/stories"
              className={mobileNavLinkClasses("/stories")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Stories
            </a>
            <a
              href="/about/gallery"
              className={mobileNavLinkClasses("/about/gallery")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="/contact"
              className={mobileNavLinkClasses("/contact")}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a href="/donate" className="block text-center w-full px-6 py-2.5 bg-yellow-400 hover:bg-yellow-500 text-white hover:text-white visited:text-white font-semibold rounded-lg transition-colors">
              Donate Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
