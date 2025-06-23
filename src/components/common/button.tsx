import { ArrowRight } from "lucide-react";

const CustomButton = ({
  title = "click me",
  onClick = () => console.log("clicked"),
  isMain = true,
}: {
  title?: string;
  onClick?: () => void;
  isMain?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden group hover-shadow ${
        isMain ? "bg-light" : "bg-white"
      }`}
    >
      <div className="absolute w-full h-full -translate-x-full z-10 bg-main top-0 left-0 group-hover:translate-x-0 transition-all duration-500 rounded-full"></div>
      <p className="z-20 group-hover:text-white">{title}</p>
      <span className="z-20 group-hover:bg-white">
        <ArrowRight className="icon group-hover:text-main" />
      </span>
    </button>
  );
};

export default CustomButton;
