import { books } from "../../data/books";
import BookCard from "./BookCard";

function BooksSection() {
  return (
    <section id="books" className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Publications
            </p>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl sm:text-5xl">
              Books &
              <br />
              Publications
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--color-navy)]/60">
              Thoughts, perspectives and expertise beyond the courtroom.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-10">
  {books.map((book) => (
    <div
      key={book.id}
      className="border border-[var(--color-navy)]/10 bg-[#E8E0D1] p-5 shadow-sm sm:p-7 lg:p-8"
    >
      <BookCard book={book} />
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
}

export default BooksSection;