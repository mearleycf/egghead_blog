import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: "My Blog",
    description: "My personal blog",
    site: context.site?.toString() ?? "https://example.com",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${post.slug}`,
      content: parser.render(sanitizeHtml(post.body)),
    })),
  });
}
