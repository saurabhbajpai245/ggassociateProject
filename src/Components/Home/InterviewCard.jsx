function InterviewCard({ interview }) {
    return (
      <article className="group">
        <div className="relative aspect-video overflow-hidden bg-[var(--color-navy)]">
          <img
            src={interview.thumbnail}
            alt={interview.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
  
          <div className="absolute inset-0 bg-[var(--color-navy)]/20 transition-colors duration-300 group-hover:bg-[var(--color-navy)]/40" />
  
          <span className="absolute left-5 top-5 bg-[var(--color-ivory)] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-navy)]">
            {interview.platform}
          </span>
        </div>
  
        <div className="pt-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-wider text-[var(--color-gold)]">
            <span>{interview.category}</span>
            <span>{interview.date}</span>
          </div>
  
          <h3 className="mt-3 font-[var(--font-heading)] text-2xl leading-tight">
            {interview.title}
          </h3>
  
          <p className="mt-4 text-sm leading-7 text-[var(--color-navy)]/60">
            {interview.description}
          </p>
  
          <a
            href={interview.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold"
          >
            Watch Interview
            <span className="text-[var(--color-gold)] transition-transform group-hover/link:translate-x-1">
              →
            </span>
          </a>
        </div>
      </article>
    );
  }
  
  export default InterviewCard;