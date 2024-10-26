import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { defineCollection, defineConfig, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  permalink: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(100),
      description: s.string().max(200),
      date: s.isodate(),
      thumbnail: s.image().optional().nullable(),
      published: s.boolean().default(false),
      body: s.mdx(),
      tags: s.array(s.string()),
    })
    .transform(computedFields),
});

const issues = defineCollection({
  name: "Issues",
  pattern: "issues/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(100),
      description: s.string().max(200),
      date: s.isodate(),
      thumbnail: s.image().optional().nullable(),
      published: s.boolean().default(false),
      body: s.mdx(),
      tags: s.array(s.string()),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, issues },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "dark-plus" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
