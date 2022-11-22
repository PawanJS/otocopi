import type { AppProps } from "next/app";

import { Layout } from "../App/common/Layout/layout";
import { wrapper } from "../store/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
