import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Blogs", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--color-gold)]/20 bg-[var(--color-ivory)]/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group relative font-[var(--font-heading)] text-xl font-semibold tracking-wide"
        >
          G&G
          <span className="ml-1 text-[var(--color-gold)] transition-colors duration-300 group-hover:text-[var(--color-navy)]">
            Associates
          </span>

          {/* Small gold underline */}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `group relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[var(--color-gold)]"
                    : "text-[var(--color-navy)] hover:text-[var(--color-gold)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[var(--color-gold)] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>


        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((previous) => !previous)}
          className="group relative flex h-10 w-10 items-center justify-center md:hidden"
        >
          {/* Outer frame */}
          <span
            className={`absolute inset-0 border transition-all duration-300 ${
              isOpen
                ? "rotate-90 border-[var(--color-gold)]/50"
                : "border-[var(--color-navy)]/15 group-hover:border-[var(--color-gold)]/50"
            }`}
          />

          {/* Hamburger */}
          <span className="relative flex h-5 w-5 flex-col items-center justify-center">

            <span
              className={`absolute h-px w-5 bg-[var(--color-navy)] transition-all duration-300 ${
                isOpen
                  ? "rotate-45"
                  : "-translate-y-1.5"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-[var(--color-navy)] transition-all duration-200 ${
                isOpen
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-[var(--color-navy)] transition-all duration-300 ${
                isOpen
                  ? "-rotate-45"
                  : "translate-y-1.5"
              }`}
            />

          </span>
        </button>
      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}
      
{/* =====================================================
    MOBILE NAVIGATION
====================================================== */}
<div
  className={`px-4 md:hidden ${
    isOpen ? "pointer-events-auto" : "pointer-events-none"
  }`}
>
  <nav
    className={`origin-top overflow-hidden rounded-b-xl border border-t-0 border-[var(--color-gold)]/20 bg-[var(--color-ivory)] shadow-[0_18px_45px_rgba(11,31,51,0.12)] transition-all duration-500 ease-out ${
      isOpen
        ? "max-h-[320px] translate-y-0 scale-y-100 opacity-100"
        : "max-h-0 -translate-y-3 scale-y-95 opacity-0"
    }`}
  >
    <div className="px-6 py-4">
      <div className="flex flex-col">
        {navigation.map((item, index) => (
          <NavLink
            key={item.label}
            to={item.to}
            onClick={closeMenu}
            style={{
              transitionDelay: isOpen
                ? `${index * 70 + 100}ms`
                : "0ms",
            }}
            className={({ isActive }) =>
              `border-b border-[var(--color-navy)]/10 py-4 text-base font-medium transition-all duration-500 last:border-b-0 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-5 opacity-0"
              } ${
                isActive
                  ? "text-[var(--color-gold)]"
                  : "text-[var(--color-navy)]"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
</div>


    </header>
  );
}

export default Navbar;
