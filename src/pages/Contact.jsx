
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import aboutUsImg from "../assets/images/contactus.png";

const contactDetails = [
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "contact@ggassociates.in",
    href: "mailto:contact@ggassociates.in",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Office",
    value: "New Delhi, India",
  },
];

export default function Contact() {
  return (
    <main className="bg-[var(--color-ivory)] text-[var(--color-navy)]">

      {/* =====================================================
          INTRODUCTION + IMAGE
      ====================================================== */}
      <section className="border-b border-[var(--color-navy)]/10">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 sm:px-8 sm:py-16 sm:pt-24 lg:px-10 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            {/* IMAGE */}
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

            {/* CONTENT */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-gold)]" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  Contact G&G Associates
                </p>
              </div>

              <h1 className="mt-6 max-w-3xl font-[var(--font-heading)] text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-6xl">
                Let's discuss your
                <span className="text-[var(--color-gold)]">
                  {" "}legal matter.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--color-navy)]/60 sm:text-base">
                For legal consultation, representation or enquiries regarding
                your matter, you may get in touch with our office. We believe
                every matter deserves careful attention and clear
                communication.
              </p>

              <div className="mt-8 h-px w-20 bg-[var(--color-gold)]/60" />
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            {/* LEFT */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                Get in Touch
              </p>

              <h2 className="mt-4 max-w-md font-[var(--font-heading)] text-3xl leading-[1.15] text-[var(--color-navy)] sm:text-4xl">
                We are here to listen.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[var(--color-navy)]/60 sm:text-base">
                For legal consultation, representation or enquiries regarding
                your matter, please get in touch with our office.
              </p>

              <p className="mt-6 max-w-md text-sm leading-7 text-[var(--color-navy)]/50">
                When contacting us, you may briefly share the nature of your
                enquiry and the assistance you are seeking.
              </p>
            </div>


            {/* RIGHT - CONTACT DETAILS */}
            <div className="border-t border-[var(--color-navy)]/10">

              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="group flex gap-5 border-b border-[var(--color-navy)]/10 py-7 sm:py-8"
                  >

                    {/* ICON */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[var(--color-gold)]/40 transition-colors duration-300 group-hover:border-[var(--color-gold)]">
                      <Icon
                        className="text-[var(--color-navy)]"
                        size={16}
                      />
                    </div>

                    {/* DETAILS */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-navy)]/40">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-2 block text-sm font-medium text-[var(--color-navy)] transition-colors hover:text-[var(--color-gold)] sm:text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm font-medium text-[var(--color-navy)] sm:text-base">
                          {item.value}
                        </p>
                      )}
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          PROFESSIONAL NOTE
      ====================================================== */}
      {/* <section className="border-t border-[var(--color-navy)]/10 bg-[var(--color-navy)]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                A Conversation Begins Here
              </p>

              <h2 className="mt-5 max-w-3xl font-[var(--font-heading)] text-3xl leading-[1.12] text-[var(--color-ivory)] sm:text-4xl lg:text-5xl">
                Legal matters deserve
                <span className="text-[var(--color-gold)]">
                  {" "}careful attention.
                </span>
              </h2>
            </div>

            <div className="border-l border-[var(--color-ivory)]/15 pl-6 lg:pl-10">
              <p className="text-sm leading-7 text-[var(--color-ivory)]/60 sm:text-base">
                We encourage you to share only the information necessary to
                help us understand your enquiry.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex text-sm font-semibold text-[var(--color-ivory)] transition-colors hover:text-[var(--color-gold)]"
              >
                Learn More About the Firm
                <span className="ml-2">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section> */}


      {/* =====================================================
          FUTURE: LEGAL ENQUIRY FORM
          
          Keep this section commented until the enquiry form
          and EmailJS functionality are required.

          Suggested fields:
          - Full Name
          - Phone
          - Email Address
          - Nature of Matter
          - Briefly Describe Your Matter

          EmailJS flow:

          React Form
              ↓
          EmailJS
              ↓
          G&G Associates Email

      ======================================================

      <form>
        ...
      </form>

      ====================================================== */}
    </main>
  );
}
