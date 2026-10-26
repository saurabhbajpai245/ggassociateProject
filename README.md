# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<div className="border border-[var(--color-navy)]/10 bg-white p-6 sm:p-8 lg:p-10">
              <div className="flex items-end justify-between gap-6 border-b border-[var(--color-navy)]/10 pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                    Legal Enquiry
                  </p>

                  <h2 className="mt-3 font-[var(--font-heading)] text-3xl">
                    Send us a message
                  </h2>
                </div>

                <span className="hidden font-[var(--font-heading)] text-5xl text-[var(--color-gold)]/40 sm:block">
                  01
                </span>
              </div>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)]/60"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full border-0 border-b border-[var(--color-navy)]/20 bg-transparent px-0 py-3 text-sm text-[var(--color-navy)] outline-none transition placeholder:text-[var(--color-navy)]/30 focus:border-[var(--color-gold)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)]/60"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="mt-2 w-full border-0 border-b border-[var(--color-navy)]/20 bg-transparent px-0 py-3 text-sm text-[var(--color-navy)] outline-none transition placeholder:text-[var(--color-navy)]/30 focus:border-[var(--color-gold)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)]/60"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full border-0 border-b border-[var(--color-navy)]/20 bg-transparent px-0 py-3 text-sm text-[var(--color-navy)] outline-none transition placeholder:text-[var(--color-navy)]/30 focus:border-[var(--color-gold)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="matter"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)]/60"
                  >
                    Nature of Matter
                  </label>

                  <select
                    id="matter"
                    defaultValue=""
                    className="mt-2 w-full border-0 border-b border-[var(--color-navy)]/20 bg-transparent px-0 py-3 text-sm text-[var(--color-navy)] outline-none transition focus:border-[var(--color-gold)]"
                  >
                    <option value="" disabled>
                      Select a practice area
                    </option>
                    <option>Civil Litigation</option>
                    <option>Criminal Law</option>
                    <option>Legal Consultation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)]/60"
                  >
                    Briefly Describe Your Matter
                  </label>

                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us briefly about your legal matter..."
                    className="mt-2 w-full resize-none border-0 border-b border-[var(--color-navy)]/20 bg-transparent px-0 py-3 text-sm text-[var(--color-navy)] outline-none transition placeholder:text-[var(--color-navy)]/30 focus:border-[var(--color-gold)]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center bg-[var(--color-navy)] px-7 py-4 text-sm font-semibold text-[var(--color-ivory)] transition hover:bg-[var(--color-navy-light)] sm:w-auto"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>