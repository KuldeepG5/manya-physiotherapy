import BlogCard from "./blog-card";
import { blogData } from "./blog.data";

const BlogSection = () => {
  return (
    <section className="section-container ">
      <div className="grid sm:grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-main mb-6">Our Blogs</h1>
          <p>
            Latest Happenings & Hot Topics in the field of Physiotherapy along
            with updates from Manya Physiotherapy Clinic
          </p>
        </div>
        <div className="col-span-1 flex-center justify-end"></div>
      </div>
      <div className=" mt-8 grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.map((item, index) => (
          <BlogCard
            key={index}
            description={item.description}
            image={item.image}
            link={item.link}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
