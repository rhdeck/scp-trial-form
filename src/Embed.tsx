import { FC, Fragment, useEffect } from "react";
import "./reform-embed";
declare global {
  interface Window {
    Reform: any;
  }
}
const Embed: FC = () => {
  useEffect(() => {
    const Reform =
      window.Reform ||
      function () {
        (window.Reform.q = window.Reform.q || []).push(arguments);
      };
    Reform("init", {
      url: "https://forms.reform.app/jpVWm8/request-guest-pass/veybxq",
      target: "#my-reform",
      background: "default",
    });
  }, []);
  return (
    <Fragment>
      <div id="my-reform"></div>
    </Fragment>
  );
};
export default Embed;
