import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
// import Layout from '../components/layouts/layout';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
      <ThirdwebProvider desiredChainId={activeChainId} chainRpc={{ [ChainId.Mainnet]: "https://polygon-mumbai.g.alchemy.com/v2/ueAZv5okiE4r3841xGA02EZkF04E8zOx" }}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    // </Layout>
  );
}

export default MyApp
