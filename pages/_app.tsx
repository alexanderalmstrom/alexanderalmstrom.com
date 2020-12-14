import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@lib/apolloClient";

import "@assets/global.scss";

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
