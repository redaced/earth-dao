import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Layout from '../components/layouts/layout';
import '../assets/css/bootstrap.min.css';
import '../assets/css/icons.min.css';
import '../assets/libs/@iconscout/unicons/css/line.css';
import '../assets/css/style.min.css';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId} chainRpc={{ [ChainId.Mainnet]: "https://polygon-mumbai.g.alchemy.com/v2/ueAZv5okiE4r3841xGA02EZkF04E8zOx" }}>
      
      <Layout>
          <Component {...pageProps} />
        
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp
