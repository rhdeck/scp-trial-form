import { FC } from "react";
import Logo from "./logo.png";
const Loading: FC = () => {
  return (
    <div className="w-full bg-white align-center justify-around flex">
      <div className="p-6 ">
        <img
          className="h-8 w-8 animate-pulse"
          src={Logo}
          alt="State Change Pro Loading..."
        />
      </div>
    </div>
  );
};
export default Loading;
