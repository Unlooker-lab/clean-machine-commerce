import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/products";

const BlogPreview = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Latest from Our Blog</h2>
          <p className="text-muted-foreground">Expert insights and industry guides</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <article key={post.id} className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all">
            <div className="aspect-video overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded">{post.category}</span>
                <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              </div>
              <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogPreview;
