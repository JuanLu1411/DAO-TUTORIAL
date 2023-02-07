import "../styles/globals.css";

// Setting Chains
const { chains, provider } = configureChains(
  [chain.goerli],
  [publicProvider()]
);

// Application Configs
const { connectors } = getDefaultWallets({
  appName: "My Amazing App",
  chains,
});

// Wagmi Config
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
