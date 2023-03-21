import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Mainnet) as WalletAdapterNetwork;

export const rpcHost =
  "https://alien-greatest-lake.solana-mainnet.quiknode.pro/aed83dd41840eb8aefb83ef7e0353a876eb19e77/";

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "7gUYJ9wZkT5koVk6Hf1ARe7oqdv2mBX9LkaXiEd3QNQd"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined;

export const whitelistedWallets = [
];
