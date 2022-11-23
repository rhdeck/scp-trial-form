import { FC } from "react";
import Logo from "./logo.png";
const Loading: FC = () => {
  return (
    <div className="w-full bg-white align-center justify-around flex">
      <div className="p-6 animate-pulse">
        <img
          className="h-8 w-8  inline mr-2"
          src={Logo}
          alt="State Change Pro Loading..."
        />
        Loading...
      </div>
    </div>
  );
};
export default Loading;
