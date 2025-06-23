import { Banner, Footer, Header } from "@/components/common";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { blogId } = useParams();
  return (
    <main className="page-container">
      <Header />
      <Banner title={`Our Blog : ${blogId}`} />
      {/* <BlogSection /> */}
      <Footer />
    </main>
  );
};

export default BlogDetails;
