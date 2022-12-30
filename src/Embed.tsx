import { FC, Fragment } from "react";

const Embed: FC = () => {
  return (
    <Fragment>
      <div id="my-reform"></div>

      <script>{`window.Reform=window.Reform||function(){(Reform.q=Reform.q||[]).push(arguments)};`}</script>
      <script
        id="reform-script"
        async
        src="https://embed.reform.app/v1/embed.js"
      ></script>
      <script>
        {`Reform('init', {
            url: 'https://forms.reform.app/jpVWm8/request-guest-pass/veybxq',
            target: '#my-reform',
            background: 'default',
        })`}
      </script>
    </Fragment>
  );
};
export default Embed;
