import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import Layout from '../components/layouts/layout';
import '../assets/css/bootstrap.min.css';
import '../assets/css/icons.min.css';
import '../assets/libs/@iconscout/unicons/css/line.css';
import '../assets/css/style.min.css';
const activeChainId = ChainId.Mainnet;
const URL = process.env.NEXT_PUBLIC_ALCHEMY_API_URL
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId} chainRpc={{ [ChainId.Mainnet]: URL }}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp
