import { BlogSection } from "@/components/blogs";
import { Banner, Footer, Header } from "@/components/common";

const Blog = () => {
  return (
    <main className="page-container">
      <Header />
      <Banner title="Our Blogs" />
      <BlogSection />
      <Footer />
    </main>
  );
};

export default Blog;
