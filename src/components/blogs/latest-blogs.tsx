import { useNavigate } from "react-router-dom";
import { CustomButton } from "../common";
import BlogCard from "./blog-card";
import { blogData } from "./blog.data";

const LatestBlogs = () => {
  const navigate = useNavigate();
  return (
    <section className="section-container ">
      <div className="grid sm:grid-cols-3">
        <div className="col-span-2">
          <h1 className="text-main mb-6">Latest Blogs</h1>
          <p>
            Latest Happenings & Hot Topics in the field of Physiotherapy along
            with updates from Manya Physiotherapy Clinic
          </p>
        </div>
        <div className="col-span-1 flex-center justify-end">
          <CustomButton
            onClick={() => navigate("/blog")}
            title="View All Blogs"
          />
        </div>
      </div>
      <div className=" mt-8 grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogData.slice(0,3).map((item, index) => (
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

export default LatestBlogs;
