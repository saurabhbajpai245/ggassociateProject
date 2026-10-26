function BookCard({ book }) {
    return (
      <article className="grid gap-8 sm:grid-cols-[180px_1fr]">
        <div className="mx-auto aspect-[2/3] w-40 overflow-hidden bg-[var(--color-navy)] shadow-xl sm:w-44 md:w-48 lg:w-full">

          <img
            src={book.cover}
            alt={`Cover of ${book.title}`}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
  
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
            {book.year}
          </p>
  
          <h3 className="mt-3 font-[var(--font-heading)] text-3xl">
            {book.title}
          </h3>
  
          <p className="mt-2 text-sm font-medium">{book.author}</p>
  
          <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--color-navy)]/60">
            {book.description}
          </p>
  
          <a
            href={book.purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-fit items-center gap-3 border-b border-[var(--color-gold)] pb-2 text-sm font-semibold"
          >
            Purchase Book
            <span className="text-[var(--color-gold)]">→</span>
          </a>
        </div>
      </article>
    );
  }
  
  export default BookCard;