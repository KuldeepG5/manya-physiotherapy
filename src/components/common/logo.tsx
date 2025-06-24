import { useNavigate } from "react-router-dom";

const Logo = ({ isLight = true }: { isLight?: boolean }) => {
  const navigate = useNavigate();
  return (
    <div className="h-14" onClick={() => navigate("/")}>
      <img
        src={isLight ? "/logo-light.png" : "/logo-dark.png"}
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default Logo;
