import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  rootstockTestnet,
  rootstock,
  polygon,
  sepolia,
  lisk,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: "YOUR_PROJECT_ID",
  chains: [
     rootstockTestnet,
    mainnet,
    lisk,
    polygon,
    optimism,
    arbitrum,
    rootstock,
    base,
    ...(import.meta.env.ENABLE_TESTNETS === "true" ? [sepolia, lisk] : []),
  ],
  ssr: true,
});
