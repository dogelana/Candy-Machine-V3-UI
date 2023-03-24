import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Mainnet) as WalletAdapterNetwork;

export const rpcHost =
  "https://misty-compatible-feather.solana-mainnet.discover.quiknode.pro/3b8afc50d896f3dd0fd4e509976105552b48411c/";

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "5ncMWxnT9Ai679DdZen1zXAnmCa2kXN5pgd8UYaQ6qUH"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined;

export const whitelistedWallets = [
];
