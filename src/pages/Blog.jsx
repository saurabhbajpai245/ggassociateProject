import { Link } from "react-router-dom";
import { sanityClient } from "../sanity/client";
import { blogsQuery } from "../sanity/queries";
import { useEffect, useState } from "react";
import { urlFor } from "../sanity/image";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await sanityClient.fetch(blogsQuery);
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="bg-[var(--color-ivory)] text-[var(--color-navy)]">
     
      {/* =====================================================
          PAGE INTRO
      ====================================================== */}
      <section className="border-b border-[var(--color-navy)]/10">
        <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-8 sm:pb-14 sm:pt-20 lg:px-10 lg:pb-14 lg:pt-20">
          <div className="max-w-6xl">

            {/* <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--color-gold)]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                G&G Associates Journal
              </p>
            </div> */}

            <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-medium leading-[1.08] sm:text-5xl lg:text-7xl">
              Legal insights,
              <span className="text-[var(--color-gold)]">
                {" "}clearly considered.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[var(--color-navy)]/60 sm:text-base">
              Thoughtful perspectives on legal developments, practical
              considerations and matters that may be relevant to individuals
              and businesses.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          ARTICLES
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-14 lg:px-10 lg:py-14">

          {/* SECTION HEADER */}
          <div className="border-b border-[var(--color-navy)]/10 pb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
              Our Journal
            </p>

            <h2 className="mt-3 font-[var(--font-heading)] text-3xl sm:text-4xl">
              Latest Articles
            </h2>
          </div>


          {/* BLOG GRID */}
          {blogs.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {blogs.map((blog) => (
                <article
                  key={blog._id}
                  className="group border border-[var(--color-navy)]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/40"
                >

                  {/* IMAGE */}
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="block overflow-hidden"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[var(--color-navy)]">
                      <img
                        src={urlFor(blog.featuredImage)
                          .width(800)
                          .height(500)
                          .url()}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>


                  {/* CONTENT */}
                  <div className="p-6 sm:p-7">

                    {/* CATEGORY + READ TIME */}
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em]">
                      <span className="text-[var(--color-gold)]">
                        {blog.category}
                      </span>

                      <span className="text-[var(--color-navy)]/25">
                        /
                      </span>

                      <span className="text-[var(--color-navy)]/40">
                        {blog.readTime}
                      </span>
                    </div>


                    {/* TITLE */}
                    <h3 className="mt-4 font-[var(--font-heading)] text-2xl leading-[1.15] sm:text-3xl">
                      {blog.title}
                    </h3>


                    {/* EXCERPT */}
                    {/* <p className="mt-4 text-sm leading-7 text-[var(--color-navy)]/60">
                      {blog.excerpt}
                    </p> */}


                    {/* FOOTER */}
                    <div className="mt-7 flex items-center justify-between border-t border-[var(--color-navy)]/10 pt-5">

                      {blog.publishedAt && (
                        <span className="text-xs text-[var(--color-navy)]/40">
                          {new Date(blog.publishedAt).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </span>
                      )}

                      <Link
                        to={`/blog/${blog.slug}`}
                        className="ml-auto text-sm font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-gold)]"
                      >
                        Read More →
                      </Link>

                    </div>

                  </div>
                </article>
              ))}

            </div>
          ) : (
            <div className="mt-10 border border-[var(--color-navy)]/10 bg-white px-6 py-16 text-center">
              <p className="font-[var(--font-heading)] text-2xl text-[var(--color-navy)]">
                No articles published yet.
              </p>

              <p className="mt-3 text-sm text-[var(--color-navy)]/50">
                New legal insights will appear here soon.
              </p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
