import { FC } from "react";
import Logo from "./logo.png";
const Loading: FC = () => {
  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
      <span
        className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
        style={{ top: "50%" }}
      >
        <img src={Logo} alt="State Change Pro Loading..." />
      </span>
    </div>
  );
};
export default Loading;
