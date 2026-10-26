import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const initialForm = {
  title: "",
  category: "",
  excerpt: "",
  image: "",
  readTime: "5 min read",
};

const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

export default function CreateBlog() {
  const [form, setForm] = useState(initialForm);

  const [content, setContent] = useState([
    {
      type: "paragraph",
      text: "",
    },
  ]);

  const [showPreview, setShowPreview] = useState(false);

  const slug = useMemo(() => createSlug(form.title), [form.title]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleContentChange = (index, value) => {
    setContent((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              text: value,
            }
          : item
      )
    );
  };

  const handleContentTypeChange = (index, type) => {
    setContent((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index
          ? {
              ...item,
              type,
            }
          : item
      )
    );
  };

  const addContentSection = (type = "paragraph") => {
    setContent((current) => [
      ...current,
      {
        type,
        text: "",
      },
    ]);
  };

  const removeContentSection = (index) => {
    setContent((current) =>
      current.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const blog = {
      id: Date.now(),
      slug,
      category: form.category,
      title: form.title,
      excerpt: form.excerpt,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readTime: form.readTime,
      image: form.image,
      content: content.filter((item) => item.text.trim()),
    };

    console.log("New Blog:", blog);

    // Later:
    // Send `blog` to your backend API here.

    alert("Blog created successfully.");

    setForm(initialForm);

    setContent([
      {
        type: "paragraph",
        text: "",
      },
    ]);

    setShowPreview(false);
  };

  return (
    <main className="min-h-screen bg-[var(--color-ivory)] text-[var(--color-navy)]">

      {/* =====================================================
          HEADER
      ====================================================== */}
      <section className="border-b border-[var(--color-navy)]/10">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8 sm:pt-24 lg:px-10 lg:pb-12 lg:pt-28">

          <Link
            to="/blog"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]/40 transition-colors hover:text-[var(--color-gold)]"
          >
            ← Back to Journal
          </Link>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Journal Administration
            </p>

            <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Create a New Article
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-navy)]/55 sm:text-base">
              Create and publish a new legal insight, article or update for
              the G&G Associates journal.
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          FORM
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          <div className="grid gap-12 lg:grid-cols-[1fr_0.4fr] lg:gap-20">

            {/* =================================================
                EDITOR
            ================================================== */}
            <form onSubmit={handleSubmit}>

              {/* BASIC INFORMATION */}
              <div className="border-t border-[var(--color-navy)]/10">

                <div className="border-b border-[var(--color-navy)]/10 py-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                    01 — Article Information
                  </p>
                </div>


                {/* TITLE */}
                <div className="border-b border-[var(--color-navy)]/10 py-7">
                  <label
                    htmlFor="title"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-navy)]/50"
                  >
                    Article Title
                  </label>

                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Enter article title"
                    required
                    className="mt-3 w-full border-0 border-b border-[var(--color-navy)]/15 bg-transparent px-0 py-3 font-[var(--font-heading)] text-2xl outline-none transition-colors placeholder:text-[var(--color-navy)]/20 focus:border-[var(--color-gold)] sm:text-3xl"
                  />
                </div>


                {/* CATEGORY + READ TIME */}
                <div className="grid gap-7 border-b border-[var(--color-navy)]/10 py-7 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="category"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-navy)]/50"
                    >
                      Category
                    </label>

                    <input
                      id="category"
                      name="category"
                      type="text"
                      value={form.category}
                      onChange={handleChange}
                      placeholder="Legal Awareness"
                      required
                      className="mt-3 w-full border border-[var(--color-navy)]/15 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-navy)]/25 focus:border-[var(--color-gold)]"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="readTime"
                      className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-navy)]/50"
                    >
                      Reading Time
                    </label>

                    <select
                      id="readTime"
                      name="readTime"
                      value={form.readTime}
                      onChange={handleChange}
                      className="mt-3 w-full border border-[var(--color-navy)]/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-gold)]"
                    >
                      <option>3 min read</option>
                      <option>4 min read</option>
                      <option>5 min read</option>
                      <option>6 min read</option>
                      <option>8 min read</option>
                      <option>10 min read</option>
                    </select>
                  </div>

                </div>


                {/* SLUG */}
                <div className="border-b border-[var(--color-navy)]/10 py-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-navy)]/50">
                    URL Slug
                  </p>

                  <p className="mt-3 bg-white px-4 py-3 font-mono text-xs text-[var(--color-navy)]/50 sm:text-sm">
                    /blog/{slug || "your-article-title"}
                  </p>
                </div>


                {/* EXCERPT */}
                <div className="border-b border-[var(--color-navy)]/10 py-7">
                  <label
                    htmlFor="excerpt"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-navy)]/50"
                  >
                    Short Description
                  </label>

                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={form.excerpt}
                    onChange={handleChange}
                    placeholder="Write a short description of the article..."
                    rows={4}
                    required
                    className="mt-3 w-full resize-none border border-[var(--color-navy)]/15 bg-white px-4 py-4 text-sm leading-7 outline-none transition-colors placeholder:text-[var(--color-navy)]/25 focus:border-[var(--color-gold)]"
                  />
                </div>


                {/* IMAGE */}
                <div className="border-b border-[var(--color-navy)]/10 py-7">
                  <label
                    htmlFor="image"
                    className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-navy)]/50"
                  >
                    Featured Image URL
                  </label>

                  <input
                    id="image"
                    name="image"
                    type="text"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="/images/blog/legal-rights.jpg"
                    required
                    className="mt-3 w-full border border-[var(--color-navy)]/15 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-navy)]/25 focus:border-[var(--color-gold)]"
                  />

                  {form.image && (
                    <div className="mt-5 aspect-[16/8] overflow-hidden bg-[var(--color-navy)]">
                      <img
                        src={form.image}
                        alt="Blog preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>

              </div>


              {/* =================================================
                  ARTICLE CONTENT
              ================================================== */}
              <div className="mt-14 border-t border-[var(--color-navy)]/10">

                <div className="flex items-center justify-between border-b border-[var(--color-navy)]/10 py-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                      02 — Article Content
                    </p>

                    <p className="mt-2 text-xs text-[var(--color-navy)]/40">
                      Build your article section by section.
                    </p>
                  </div>
                </div>


                <div className="space-y-8 pt-8">

                  {content.map((section, index) => (
                    <div
                      key={index}
                      className="border border-[var(--color-navy)]/10 bg-white p-5 sm:p-7"
                    >

                      <div className="flex items-center justify-between gap-4">

                        <div className="flex items-center gap-3">
                          <span className="font-[var(--font-heading)] text-xl text-[var(--color-gold)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <select
                            value={section.type}
                            onChange={(event) =>
                              handleContentTypeChange(
                                index,
                                event.target.value
                              )
                            }
                            className="border-0 bg-transparent text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-navy)] outline-none"
                          >
                            <option value="paragraph">
                              Paragraph
                            </option>

                            <option value="heading">
                              Heading
                            </option>
                          </select>
                        </div>


                        {content.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              removeContentSection(index)
                            }
                            className="text-xs font-semibold text-[var(--color-navy)]/40 transition-colors hover:text-red-600"
                          >
                            Remove
                          </button>
                        )}

                      </div>


                      <textarea
                        value={section.text}
                        onChange={(event) =>
                          handleContentChange(
                            index,
                            event.target.value
                          )
                        }
                        placeholder={
                          section.type === "heading"
                            ? "Enter section heading..."
                            : "Write your article content..."
                        }
                        rows={section.type === "heading" ? 2 : 7}
                        required
                        className={`mt-5 w-full resize-none border border-[var(--color-navy)]/10 bg-[var(--color-ivory)] px-4 py-4 outline-none transition-colors placeholder:text-[var(--color-navy)]/25 focus:border-[var(--color-gold)] ${
                          section.type === "heading"
                            ? "font-[var(--font-heading)] text-xl"
                            : "text-sm leading-7"
                        }`}
                      />

                    </div>
                  ))}

                </div>


                {/* ADD CONTENT */}
                <div className="mt-8 flex flex-wrap gap-3">

                  <button
                    type="button"
                    onClick={() => addContentSection("paragraph")}
                    className="border border-[var(--color-navy)]/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-navy)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  >
                    + Add Paragraph
                  </button>

                  <button
                    type="button"
                    onClick={() => addContentSection("heading")}
                    className="border border-[var(--color-navy)]/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-navy)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  >
                    + Add Heading
                  </button>

                </div>

              </div>


              {/* =================================================
                  ACTIONS
              ================================================== */}
              <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-navy)]/10 pt-8 sm:flex-row">

                <button
                  type="submit"
                  className="bg-[var(--color-navy)] px-7 py-3.5 text-sm font-semibold text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-navy-light)]"
                >
                  Publish Article
                </button>

                <button
                  type="button"
                  onClick={() => setShowPreview((current) => !current)}
                  className="border border-[var(--color-navy)]/20 px-7 py-3.5 text-sm font-semibold text-[var(--color-navy)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                >
                  {showPreview ? "Hide Preview" : "Preview Article"}
                </button>

              </div>

            </form>


            {/* =================================================
                SIDEBAR
            ================================================== */}
            <aside className="lg:sticky lg:top-24 lg:self-start">

              <div className="border-t border-[var(--color-navy)]/10 pt-7">

                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                  Publishing Guide
                </p>

                <div className="mt-6 space-y-6">

                  <div>
                    <p className="font-[var(--font-heading)] text-lg">
                      Keep it clear.
                    </p>

                    <p className="mt-2 text-xs leading-6 text-[var(--color-navy)]/50">
                      Use a clear title that communicates exactly what the
                      reader will learn.
                    </p>
                  </div>

                  <div>
                    <p className="font-[var(--font-heading)] text-lg">
                      Keep it useful.
                    </p>

                    <p className="mt-2 text-xs leading-6 text-[var(--color-navy)]/50">
                      Focus on practical legal information and avoid
                      unnecessary complexity.
                    </p>
                  </div>

                  <div>
                    <p className="font-[var(--font-heading)] text-lg">
                      Keep it accurate.
                    </p>

                    <p className="mt-2 text-xs leading-6 text-[var(--color-navy)]/50">
                      Legal content should be reviewed carefully before
                      publication.
                    </p>
                  </div>

                </div>

              </div>


              {/* PREVIEW */}
              {showPreview && (
                <div className="mt-12 border-t border-[var(--color-navy)]/10 pt-7">

                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">
                    Preview
                  </p>

                  <div className="mt-6">

                    {form.image && (
                      <div className="aspect-[16/9] overflow-hidden bg-[var(--color-navy)]">
                        <img
                          src={form.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">
                      {form.category || "Category"}
                    </p>

                    <h2 className="mt-3 font-[var(--font-heading)] text-2xl leading-tight">
                      {form.title || "Your article title"}
                    </h2>

                    <p className="mt-4 text-xs leading-6 text-[var(--color-navy)]/60">
                      {form.excerpt ||
                        "Your article description will appear here."}
                    </p>

                  </div>

                </div>
              )}

            </aside>

          </div>

        </div>
      </section>

    </main>
  );
}
