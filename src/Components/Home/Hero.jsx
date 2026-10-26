import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import lawyer1 from "../../assets/images/lawyer-1.png"
import lawyer2 from "../../assets/images/lawyer-2.png"
import lawyer3 from "../../assets/images/lawyer-3.png"
import { Link } from "react-router-dom";


const slides = [
  {
    image: lawyer1,
    alt: "G&G Associates",
  },
  {
    image: lawyer2,
    alt: "G&G Associates legal practice",
  },
  {
    image: lawyer3,
    alt: "G&G Associates lawyer",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section
      className="relative overflow-hidden bg-[var(--color-ivory)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:pt-24 lg:pb-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          
          {/* LEFT - STATIC CONTENT */}
          <div className="relative z-10 max-w-xl">
            <div className="mt- 4 mb-5 flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[var(--color-gold)]" /> */}

              {/* <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                G&G Associates
              </span> */}
            </div>

            <h1 className="font-[var(--font-heading)] text-4xl font-medium leading-[1.08] tracking-tight text-[var(--color-navy)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Experience.
              <br />
              <span className="text-[var(--color-gold)]">Integrity.</span>
              <br />
              Justice.
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Thoughtful legal counsel built on experience, integrity and a
              commitment to protecting what matters most to our clients.
            </p>

            <div className="mt-8 hidden flex flex-col gap-3 sm:flex sm:flex-row">
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-navy-light)]"
              >
                Explore G&G Associates
              </Link>

              <a
                href="https://wa.me/918630339551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center border border-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-[var(--color-navy)] hover:text-white"
              >
                <FaWhatsapp className="text-lg" /> Get in Touch
              </a>
            </div>

            {/* Small credibility line */}
            <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-slate-500">
              <span>Trusted Counsel</span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-gold)]" />
              <span>Personal Attention</span>
            </div>
          </div>

          {/* RIGHT - IMAGE CAROUSEL ONLY */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -right-5 -top-5 h-full w-full border border-[var(--color-gold)] sm:-right-7 sm:-top-7" />

            <div className="relative overflow-hidden bg-[var(--color-navy)]">
  <div className="relative aspect-[4/4.6] sm:aspect-[4/4.2] lg:h-[560px] xl:h-[620px]">
    
    {/* Slider Track */}
    <div
      className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
      style={{
        transform: `translateX(-${activeSlide * 100}%)`,
      }}
    >
      {slides.map((slide) => (
        <div
          key={slide.image}
          className="relative h-full min-w-full flex-shrink-0"
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>

    {/* Dark gradient */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

    {/* Controls */}
    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between sm:bottom-7 sm:left-7 sm:right-7">
      
      <div className="text-xs font-medium tracking-[0.2em] text-white">
        <span className="text-[var(--color-gold-light)]">
          {String(activeSlide + 1).padStart(2, "0")}
        </span>

        <span className="mx-2 text-white/50">/</span>

        <span>
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous image"
          className="flex h-10 w-10 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[var(--color-navy)]"
        >
          ←
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next image"
          className="flex h-10 w-10 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[var(--color-navy)]"
        >
          →
        </button>
      </div>

    </div>
  </div>
</div>

            {/* Gold corner detail */}
            <div className="absolute -bottom-3 -left-3 h-14 w-14 border-b border-l border-[var(--color-gold)]" />
          </div>
          
          <div className="mt-2 lg:hidden flex flex-col gap-3 sm:flex sm:flex-row">
              <Link
                to="/about"
                className="inline-flex items-center justify-center bg-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-navy-light)]"
              >
                Explore G&G Associates
              </Link>

              <a
                href="https://wa.me/918630339551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 justify-center border border-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-[var(--color-navy)] hover:text-white"
              >
                <FaWhatsapp className="text-lg" /> Get in Touch
              </a>
            </div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="hidden items-center justify-center gap-3 pb-5 text-[10px] uppercase tracking-[0.3em] text-slate-400 sm:flex">
        <span>Scroll to explore</span>
        <span className="h-8 w-px bg-[var(--color-gold)]" />
      </div>
    </section>
  );
}

export default Hero;