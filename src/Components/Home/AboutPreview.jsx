import { Link } from "react-router-dom";
import aboutLawyerImage from "../../assets/images/about-lawyer.png"
import aboutOfficeImage from "../../assets/images/about-office.png"


const stats = [
  {
    value: "15+",
    label: "Years of Experience",
  },
  {
    value: "500+",
    label: "Matters Handled",
  },
  {
    value: "20+",
    label: "Legal Publications",
  },
];

function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      {/* Decorative gold line */}
      <div className="absolute right-0 top-24 h-px w-32 bg-[var(--color-gold)]/40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* TOP LABEL */}
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-[var(--color-gold)]" />

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
            The Firm
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-12 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* IMAGE COLLAGE */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-navy)]">
              <img
                src={aboutLawyerImage}
                alt="Lawyer at G&G Associates"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/50 to-transparent" />
            </div>

            {/* Secondary image */}
            <div className="absolute -bottom-10 -right-5 aspect-[4/3] w-44 overflow-hidden border-8 border-white bg-[var(--color-navy)] shadow-xl sm:-right-10 sm:w-52">
              <img
                src={aboutOfficeImage}
                alt="G&G Associates office"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Gold frame */}
            <div className="absolute -left-5 -top-5 h-28 w-28 border-l border-t border-[var(--color-gold)] sm:-left-8 sm:-top-8" />

            {/* Experience badge */}
            <div className="absolute bottom-7 left-5 bg-[var(--color-navy)] px-6 py-5 text-white shadow-xl sm:left-8">
              <span className="block font-[var(--font-heading)] text-3xl text-[var(--color-gold)]">
                15+
              </span>

              <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-white/60">
                Years of Experience
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="max-w-3xl font-[var(--font-heading)] text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A practice built on
              <span className="text-[var(--color-gold)]">
                {" "}
                experience,
              </span>{" "}
              integrity and trust.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-navy)]/70">
              G&G Associates represents a commitment to thoughtful legal
              practice and principled advocacy. Every matter deserves more
              than an answer — it deserves careful analysis, strategic
              thinking and dedicated representation.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-navy)]/55">
              Our approach combines legal knowledge with an understanding of
              the people and circumstances behind every case. We believe that
              effective advocacy begins with listening, continues with
              preparation and is ultimately measured by the confidence we
              provide our clients.
            </p>

            {/* Quote */}
            <div className="mt-9 border-l-2 border-[var(--color-gold)] pl-6">
              <p className="font-[var(--font-heading)] text-xl italic leading-8 text-[var(--color-navy)]/80">
                "Justice is not merely about knowing the law, but about
                understanding its purpose."
              </p>
            </div>

            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-4 bg-[var(--color-navy)] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)]"
            >
              Discover Our Firm

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-24 border-y border-[var(--color-navy)]/10">
          <div className="grid sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-6 py-9 text-center sm:px-8 ${
                  index !== stats.length - 1
                    ? "border-b border-[var(--color-navy)]/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <p className="font-[var(--font-heading)] text-4xl text-[var(--color-gold)] sm:text-5xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;