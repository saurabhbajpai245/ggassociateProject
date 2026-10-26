import { Link } from "react-router-dom";
import lawyerImg from "../assets/images/placeholderlawyer.jpeg"
import aboutUsImg from "../assets/images/aboutus.jpg"


const lawyers = [
  {
    name: "Adv. [Lawyer Name]",
    designation: "Advocate", 
    experience: "[X]+ Years",
    image: lawyerImg,
    description:
      "A practicing advocate with experience in litigation, legal consultation and client representation.",
    practiceAreas: [
      "Civil Litigation",
      "Criminal Law",
      "Legal Consultation",
    ],
  },
  {
    name: "Adv. [Lawyer Name]",
    designation: "Advocate",
    experience: "[X]+ Years",
    image: lawyerImg,
    description:
      "A practicing advocate focused on providing considered legal advice and professional representation.",
    practiceAreas: [
      "Civil Litigation",
      "Property Matters",
      "Legal Consultation",
    ],
  },
  {
    name: "Adv. [Lawyer Name]",
    designation: "Advocate",
    experience: "[X]+ Years",
    image: lawyerImg,
    description:
      "A legal professional committed to understanding each matter carefully and providing practical representation.",
    practiceAreas: [
      "Criminal Law",
      "Family Matters",
      "Legal Consultation",
    ],
  },
];

const practiceAreas = [
  {
    number: "01",
    title: "Civil Litigation",
    description:
      "Representation and legal assistance in civil disputes and proceedings.",
  },
  {
    number: "02",
    title: "Criminal Law",
    description:
      "Legal representation and consultation in criminal matters.",
  },
  {
    number: "03",
    title: "Legal Consultation",
    description:
      "Practical legal guidance to help clients understand their rights, options and available remedies.",
  },
  {
    number: "04",
    title: "Property & Real Estate",
    description:
      "Legal assistance concerning property-related disputes, transactions and documentation.",
  },
  {
    number: "05",
    title: "Corporate & Commercial",
    description:
      "Legal assistance and advisory services relating to business and commercial matters.",
  },
  {
    number: "06",
    title: "Family & Matrimonial",
    description:
      "Legal assistance in family and matrimonial matters.",
  },
];

function About() {
  return (
    <main className="bg-[var(--color-ivory)] text-[var(--color-navy)]">
      {/* =========================================================
          HERO / INTRODUCTION
      ========================================================= */}
    <section className="border-b border-[var(--color-navy)]/10 bg-[var(--color-ivory)]">
  <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-18 lg:px-10 lg:py-20">
    

    {/* Editorial introduction */}
    <div className="mt-14 grid gap-10 border-[var(--color-navy)]/10 lg:mt-16 lg:grid-cols-[0.8fr_0.65fr_0.55fr] lg:gap-14">
      {/* Image */}
      <div className="relative">
        <div className="absolute -bottom-3 -left-3 h-16 w-16 border-b border-l border-[var(--color-gold)]" />

        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-navy)] sm:aspect-[16/10]">
          <img
            src={aboutUsImg}
            alt="G&G Associates"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Main introduction */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
          The Firm
        </p>

        <h2 className="mt-4 font-[var(--font-heading)] text-3xl leading-tight text-[var(--color-navy)] sm:text-4xl">
          A Firm Built on Trust
        </h2>

        <p className="mt-6 text-sm leading-7 text-[var(--color-navy)]/65">
          G&G Associates provides professional legal representation and
          consultation with a focus on understanding the circumstances behind
          every matter.
        </p>

        <p className="mt-5 text-sm leading-7 text-[var(--color-navy)]/65">
          We believe effective legal counsel begins with listening carefully,
          examining the details and providing clear, practical advice. Our
          approach combines legal knowledge with careful attention to the
          individual needs of each client.
        </p>
      </div>

      {/* Philosophy / side note */}
      <div className="flex flex-col justify-between border-t border-[var(--color-navy)]/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
        <div>
          <span className="font-[var(--font-heading)] text-5xl text-[var(--color-gold)]">
            “
          </span>

          <p className="mt-2 font-[var(--font-heading)] text-xl leading-8 text-[var(--color-navy)] sm:text-2xl">
            Every legal matter deserves careful attention.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]/40">
            Our Principles
          </p>

          <div className="mt-4 space-y-3 text-sm text-[var(--color-navy)]/60">
            <p>01 — Integrity</p>
            <p>02 — Confidentiality</p>
            <p>03 — Diligence</p>
            <p>04 — Client Focus</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =========================================================
          FIRM PHILOSOPHY
      ========================================================= */}
      <section className="bg-[var(--color-navy)] text-[var(--color-ivory)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold-light)]">
                A Firm Built on Trust
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl font-[var(--font-heading)] text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
                Legal representation with clarity, discretion and purpose.
              </h2>

              <div className="mt-10 grid gap-7 text-sm leading-7 text-white/65 sm:grid-cols-2 sm:gap-10">
                <p>
                  We believe that effective legal counsel requires more than
                  knowledge of the law. It requires listening carefully,
                  understanding the circumstances of each client and
                  approaching every matter with diligence.
                </p>

                <p>
                  Our practice is built around professional representation,
                  confidentiality and a client-focused approach. We aim to
                  provide practical legal guidance that helps clients make
                  informed decisions about their legal matters.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <span className="h-px w-12 bg-[var(--color-gold)]" />

                <span className="text-xs uppercase tracking-[0.25em] text-white/45">
                  Counsel · Representation · Trust
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LEGAL TEAM
      ========================================================= */}
      <section className="bg-[var(--color-ivory)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-gold)]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                Our Legal Team
              </p>
            </div>

            <h2 className="mt-5 font-[var(--font-heading)] text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              The Lawyers Behind
              <br />
              G&G Associates
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--color-navy)]/60 sm:text-base">
              Our team brings together legal professionals with experience
              across diverse areas of practice, combining legal knowledge,
              practical experience and a commitment to professional
              representation.
            </p>
          </div>

          {/* Team grid */}
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {lawyers.map((lawyer) => (
              <article
                key={lawyer.name}
                className="group border border-[var(--color-navy)]/10 bg-white p-4 shadow-[0_8px_30px_rgba(11,31,51,0.05)] transition-shadow duration-300 hover:shadow-[0_14px_40px_rgba(11,31,51,0.10)] sm:p-5"
              >
                {/* Lawyer image */}
                <div className="relative overflow-hidden bg-[var(--color-navy)]">
                  <div className="aspect-[4/5]">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Gold corner */}
                  <div className="absolute bottom-3 left-3 h-10 w-10 border-b border-l border-[var(--color-gold)]" />
                </div>

                {/* Lawyer details */}
                <div className="px-1 pb-2 pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                      {lawyer.designation}
                    </p>

                    <p className="text-xs text-[var(--color-navy)]/45">
                      {lawyer.experience}
                    </p>
                  </div>

                  <h3 className="mt-3 font-[var(--font-heading)] text-2xl text-[var(--color-navy)]">
                    {lawyer.name}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--color-navy)]/60">
                    {lawyer.description}
                  </p>

                  {/* Practice areas */}
                  <div className="mt-6 border-t border-[var(--color-navy)]/10 pt-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]/40">
                      Practice Areas
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {lawyer.practiceAreas.map((area) => (
                        <span
                          key={area}
                          className="border border-[var(--color-navy)]/10 px-2.5 py-1 text-[11px] text-[var(--color-navy)]/65"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRACTICE AREAS
      ========================================================= */}
      <section id="practice-areas" className="border-t border-[var(--color-navy)]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            {/* Heading */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-gold)]" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  Our Expertise
                </p>
              </div>

              <h2 className="mt-5 font-[var(--font-heading)] text-4xl font-medium leading-tight sm:text-5xl">
                Areas of
                <br />
                Practice
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--color-navy)]/55">
                Our team provides legal assistance across a range of practice
                areas, with an approach focused on understanding each matter
                and providing clear, considered legal guidance.
              </p>
            </div>

            {/* Practice areas */}
            <div className="border-t border-[var(--color-navy)]/10">
              {practiceAreas.map((area) => (
                <div
                  key={area.number}
                  className="group grid gap-4 border-b border-[var(--color-navy)]/10 py-7 sm:grid-cols-[70px_1fr] sm:gap-8 lg:py-8"
                >
                  <span className="font-[var(--font-heading)] text-xl text-[var(--color-gold)]">
                    {area.number}
                  </span>

                  <div>
                    <h3 className="font-[var(--font-heading)] text-2xl text-[var(--color-navy)] transition-colors duration-300 group-hover:text-[var(--color-gold)] sm:text-3xl">
                      {area.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--color-navy)]/55">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-[var(--color-ivory)]">
  <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
      
      {/* Left */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
          Start a Conversation
        </p>

        <h2 className="mt-5 max-w-3xl font-[var(--font-heading)] text-4xl font-medium leading-[1.08] text-[var(--color-navy)] sm:text-5xl lg:text-6xl">
          Legal Matters Deserve
          <br />
          <span className="text-[var(--color-gold)]">
            Careful Attention.
          </span>
        </h2>
      </div>

      {/* Right */}
      <div className="border-l border-[var(--color-navy)]/10 pl-6 lg:pl-10">
        <p className="max-w-md text-sm leading-7 text-[var(--color-navy)]/65 sm:text-base">
          Speak with a legal professional to understand your matter and
          the options available to you.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
        <a
  href="https://wa.me/918630339551?text=Hello%20G%26G%20Associates%2C%20I%20would%20like%20to%20consult%20a%20lawyer."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-[var(--color-ivory)] transition hover:bg-[var(--color-navy-light)]"
>
  Consult a Lawyer
</a>

          <a
            href="#practice-areas"
            className="inline-flex items-center justify-center border border-[var(--color-navy)]/25 px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            Explore Practice Areas
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}

export default About;