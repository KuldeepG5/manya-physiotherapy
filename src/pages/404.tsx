import { CustomButton } from "@/components/common";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="page-container">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h6 className="mb-8 font-extrabold text-9xl text-gray-300">
            <span className="sr-only">Error</span>404
          </h6>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            But don&apos;t worry, you can find plenty of other things on our
            homepage.
          </p>
          <div className="flex-center">
            <CustomButton
              isMain={false}
              onClick={() => navigate("/")}
              title="Back to homepage"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
