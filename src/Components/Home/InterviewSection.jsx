import { interviews } from "../../data/interview";
import InterviewCard from "./InterviewCard";

function InterviewSection() {
  return (
    <section id="interviews" className="bg-[var(--color-ivory)] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Media & Conversations
          </p>

          <h2 className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl">
            In Conversation
          </h2>

          <p className="mt-5 leading-7 text-[var(--color-navy)]/60">
            Interviews, insights and conversations on law, society and
            justice.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {interviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InterviewSection;