import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";

import { sanityClient } from "../sanity/client";
import { blogBySlugQuery } from "../sanity/queries";
import { urlFor } from "../sanity/image";

function BlogDetails() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await sanityClient.fetch(blogBySlugQuery, {
          slug,
        });

        if (!data) {
          setError(true);
          return;
        }

        setBlog(data);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  /* =========================================================
     LOADING
  ========================================================= */
  if (loading) {
    return (
      <main className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 pb-20 pt-28 sm:px-8 lg:px-10">
          <div className="animate-pulse">
            <div className="h-3 w-32 bg-[var(--color-navy)]/10" />

            <div className="mt-8 h-14 max-w-3xl bg-[var(--color-navy)]/10 sm:h-20" />

            <div className="mt-4 h-14 max-w-xl bg-[var(--color-navy)]/10" />

            <div className="mt-8 h-4 w-48 bg-[var(--color-navy)]/10" />
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     ERROR
  ========================================================= */
  if (error || !blog) {
    return (
      <main className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-navy)]">
        <div className="mx-auto max-w-4xl px-6 pb-20 pt-28 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
            G&G Associates Journal
          </p>

          <h1 className="mt-6 font-[var(--font-heading)] text-4xl leading-tight sm:text-5xl">
            Article not found.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--color-navy)]/60">
            The article you are looking for may have been moved, unpublished,
            or the link may no longer be available.
          </p>

          <Link
            to="/blog"
            className="mt-8 inline-flex items-center border border-[var(--color-navy)]/20 px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            ← Back to Journal
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[var(--color-ivory)] text-[var(--color-navy)]">

      {/* =====================================================
          ARTICLE HEADER
      ====================================================== */}
      <header className="border-b border-[var(--color-navy)]/10">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-20 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20 lg:pt-28">

          {/* Back link */}
          <Link
            to="/blog"
            className="group inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]/50 transition hover:text-[var(--color-gold)]"
          >
            <span className="mr-3 transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Journal
          </Link>


          {/* Header content */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">

            <div className="max-w-4xl">

              {/* Category */}
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-gold)]" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  {blog.category}
                </p>
              </div>


              {/* Title */}
              <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-7xl">
                {blog.title}
              </h1>


              {/* Excerpt */}
              {blog.excerpt && (
                <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--color-navy)]/60 sm:text-lg">
                  {blog.excerpt}
                </p>
              )}

            </div>


            {/* Article metadata */}
            <div className="border-l border-[var(--color-navy)]/15 pl-6 lg:min-w-[170px] lg:pb-1">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]/40">
                Published
              </p>

              <p className="mt-2 text-sm font-medium text-[var(--color-navy)]">
                {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <div className="my-4 h-px w-10 bg-[var(--color-gold)]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]/40">
                Reading Time
              </p>

              <p className="mt-2 text-sm font-medium text-[var(--color-navy)]">
                {blog.readTime}
              </p>

            </div>

          </div>
        </div>
      </header>


      {/* =====================================================
          FEATURED IMAGE
      ====================================================== */}
      {blog.featuredImage && (
        <section className="px-6 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-7xl">

            <div className="relative lg:pr-10">

              {/* Editorial gold corner */}
              <div className="absolute -bottom-5 -left-5 z-10 hidden h-24 w-24 border-b border-l border-[var(--color-gold)] lg:block" />

              {/* Image */}
              <div className="relative overflow-hidden bg-[var(--color-navy)]">
                <div className="aspect-[16/9] sm:aspect-[16/8] lg:aspect-[16/7]">
                  <img
                    src={urlFor(blog.featuredImage)
                      .width(1800)
                      .height(900)
                      .url()}
                    alt={blog.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Image caption / journal label */}
              <div className="flex flex-col gap-2 border-x border-b border-[var(--color-navy)]/10 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                  G&G Associates Journal
                </p>

                <p className="text-xs text-[var(--color-navy)]/40">
                  Legal Insights &amp; Perspectives
                </p>

              </div>

            </div>

          </div>
        </section>
      )}


      {/* =====================================================
          ARTICLE CONTENT
      ====================================================== */}
      <article>
        <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">

          <div className="grid lg:grid-cols-[0.2fr_0.8fr] lg:gap-10 xl:grid-cols-[0.25fr_0.75fr] xl:gap-16">

            {/* SIDE LABEL */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 border-t border-[var(--color-navy)]/15 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                  G&G Associates
                </p>

                <p className="mt-3 max-w-[150px] text-xs leading-6 text-[var(--color-navy)]/45">
                  Thoughtful legal perspectives and practical insights.
                </p>
              </div>
            </aside>


            {/* CONTENT */}
            <div className="max-w-3xl">

              <div className="relative">

                {/* Reading column accent */}
                <div className="absolute -left-5 top-0 hidden h-10 w-px bg-[var(--color-gold)] lg:block" />

                <div className="prose max-w-none">
                  <PortableText
                    value={blog.content}
                    components={{

                      /* -----------------------------
                         PARAGRAPHS & HEADINGS
                      ------------------------------ */
                      block: {
                        normal: ({ children }) => (
                          <p className="mb-7 text-base leading-[1.9] text-[var(--color-navy)]/75 sm:text-[17px]">
                            {children}
                          </p>
                        ),

                        h2: ({ children }) => (
                          <h2 className="mb-5 mt-14 font-[var(--font-heading)] text-3xl font-medium leading-tight text-[var(--color-navy)] sm:text-4xl">
                            {children}
                          </h2>
                        ),

                        h3: ({ children }) => (
                          <h3 className="mb-4 mt-11 font-[var(--font-heading)] text-2xl font-medium leading-tight text-[var(--color-navy)]">
                            {children}
                          </h3>
                        ),

                        h4: ({ children }) => (
                          <h4 className="mb-3 mt-9 text-lg font-semibold text-[var(--color-navy)]">
                            {children}
                          </h4>
                        ),

                        blockquote: ({ children }) => (
                          <blockquote className="my-10 border-l-2 border-[var(--color-gold)] bg-white py-5 pl-6 pr-5 sm:pl-8">
                            <div className="font-[var(--font-heading)] text-xl italic leading-8 text-[var(--color-navy)]/70">
                              {children}
                            </div>
                          </blockquote>
                        ),
                      },


                      /* -----------------------------
                         LISTS
                      ------------------------------ */
                      list: {
                        bullet: ({ children }) => (
                          <ul className="mb-8 space-y-3 pl-6 text-base leading-8 text-[var(--color-navy)]/75 marker:text-[var(--color-gold)]">
                            {children}
                          </ul>
                        ),

                        number: ({ children }) => (
                          <ol className="mb-8 space-y-3 pl-6 text-base leading-8 text-[var(--color-navy)]/75 marker:font-semibold marker:text-[var(--color-gold)]">
                            {children}
                          </ol>
                        ),
                      },


                      /* -----------------------------
                         TEXT MARKS
                      ------------------------------ */
                      marks: {
                        strong: ({ children }) => (
                          <strong className="font-semibold text-[var(--color-navy)]">
                            {children}
                          </strong>
                        ),

                        em: ({ children }) => (
                          <em className="text-[var(--color-navy)]/80">
                            {children}
                          </em>
                        ),

                        link: ({ children, value }) => (
                          <a
                            href={value?.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[var(--color-gold)] underline decoration-[var(--color-gold)]/40 underline-offset-4 transition hover:text-[var(--color-navy)]"
                          >
                            {children}
                          </a>
                        ),
                      },


                      /* -----------------------------
                         IMAGES INSIDE ARTICLE
                      ------------------------------ */
                      types: {
                        image: ({ value }) => (
                          <figure className="my-10">
                            <img
                              src={urlFor(value)
                                .width(1200)
                                .auto("format")
                                .url()}
                              alt={value?.alt || ""}
                              className="w-full"
                            />

                            {value?.caption && (
                              <figcaption className="mt-3 text-xs leading-5 text-[var(--color-navy)]/40">
                                {value.caption}
                              </figcaption>
                            )}
                          </figure>
                        ),
                      },

                    }}
                  />
                </div>

              </div>

            </div>

          </div>

        </div>
      </article>


      {/* =====================================================
          ARTICLE FOOTER
      ====================================================== */}
      <section className="border-t border-[var(--color-navy)]/10 bg-white">

        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                Continue Reading
              </p>

              <h2 className="mt-3 font-[var(--font-heading)] text-3xl text-[var(--color-navy)] sm:text-4xl">
                Explore more from our Journal.
              </h2>
            </div>

            <Link
              to="/blog"
              className="inline-flex shrink-0 items-center justify-center border border-[var(--color-navy)]/20 px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              View All Articles
              <span className="ml-3">→</span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONSULTATION CTA
      ====================================================== */}
      {/* <section className="bg-[var(--color-navy)]">

        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">

            <div>

              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[var(--color-gold)]" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  Need Legal Guidance?
                </p>
              </div>

              <h2 className="mt-6 max-w-3xl font-[var(--font-heading)] text-4xl font-medium leading-[1.08] text-[var(--color-ivory)] sm:text-5xl lg:text-6xl">
                Legal matters deserve
                <span className="text-[var(--color-gold)]">
                  {" "}careful attention.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--color-ivory)]/60 sm:text-base">
                If you require legal consultation or representation, speak
                with a legal professional about your matter and the options
                available to you.
              </p>

            </div>


            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[var(--color-gold)] px-8 py-4 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-[var(--color-gold-light)]"
            >
              Consult a Lawyer
              <span className="ml-3">→</span>
            </a>

          </div>

        </div>

      </section> */}

    </main>
  );
}

export default BlogDetails;
