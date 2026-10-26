
export const blogsQuery = `*[
  _type == "blog" &&
  defined(slug.current) &&
  defined(publishedAt) &&
  publishedAt <= now()
] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  featuredImage,
  publishedAt,
  readTime
}`;

export const blogBySlugQuery = `*[
  _type == "blog" &&
  slug.current == $slug &&
  publishedAt <= now()
][0] {
  _id,
  title,
  "slug": slug.current,
  category,
  featuredImage,
  publishedAt,
  readTime,
  content
}`;
