import "../global.css";
import { InjectedConnector, StarknetConfig } from "@starknet-react/core";

import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  const connectors = [
    new InjectedConnector({ options: { id: "argentX" } }),
    new InjectedConnector({ options: { id: "braavos" } }),
  ];

  return (
    <StarknetConfig connectors={connectors}>
      {/* <style jsx global>{`
        html {
          font-family: ${montSerrat.style.fontFamily} !important;
        }
      `}</style> */}
      <Component {...pageProps} />
    </StarknetConfig>
  );
}
