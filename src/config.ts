import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Mainnet) as WalletAdapterNetwork;

export const rpcHost =
  "https://fittest-bold-smoke.solana-mainnet.discover.quiknode.pro/724c0f3ca62c79d270f7dcf47583e3591e0a9b31/";

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "5ncMWxnT9Ai679DdZen1zXAnmCa2kXN5pgd8UYaQ6qUH"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined;

export const whitelistedWallets = [
];
