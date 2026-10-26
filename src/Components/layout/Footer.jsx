import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contact" className="bg-[var(--color-navy)] text-[var(--color-ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <h2 className="font-[var(--font-heading)] text-3xl">
              G&G{" "}
              <span className="text-[var(--color-gold)]">Associates</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--color-ivory)]/60">
              Strategic legal counsel grounded in experience, integrity and a
              commitment to meaningful outcomes.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blogs</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-[var(--color-ivory)]/70">
              <p>Email: contact@example.com</p>
              <p>Phone: +91 XXXXX XXXXX</p>
              <p>Location: New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 border-t border-[var(--color-ivory)]/10 pt-6 text-xs text-[var(--color-ivory)]/40">
          © 2026 G&G Associates. All Rights Reserved.
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;