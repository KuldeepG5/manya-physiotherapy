import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({
    id,
    title= "Finding the Journey to Mordor",
    description= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?",
    image= "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
}: {
   id: string,
    title?: string,
    description?: string,
    image?: string,
}) => {
  return (
    <article className="group">
      <img
        alt={title}
        src={image}
        className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />

      <div className="p-4">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900">
            {title}
          </h3>
        </a>

        <p className="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>
        <Link to={`/blog/${id}`} className="no-underline hover:underline transition-all duration-300">
          <span className="flex-center justify-start gap-1 text-blue-600">
            <h3>learn more</h3>
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
