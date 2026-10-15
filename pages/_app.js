import { useEffect } from "react";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { ThemeProvider } from "next-themes";
import { config } from "@fortawesome/fontawesome-svg-core";
import { asset } from "../lib/asset";

// Tailwind provides the CSS reset, so Chakra's own preflight must not apply.
// `preflight: false` is avoided on purpose: Chakra 3.37 then emits an empty
// `@layer reset` that swallows the following base layer (keyframes, globals),
// which breaks every Chakra animation. Scoping it to an unused class keeps the
// layer valid while matching nothing.
const system = createSystem(defaultConfig, {
  preflight: { scope: ".chakra-preflight-unused", level: "element" },
});

// FontAwesome's CSS is imported (layered) from globals.css instead of injected at runtime.
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  // aos.css is bundled into the shared stylesheet, so AOS must run on every
  // page or elements with data-aos stay in their hidden start state.
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Head>
        <link rel="icon" href={asset("/favicon.ico")} key="icon" />
      </Head>
      <ChakraProvider value={system}>
        <Layout>
          <NextNProgress
            color="#FF7A19"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
            options={{ showSpinner: false }}
          />

          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
