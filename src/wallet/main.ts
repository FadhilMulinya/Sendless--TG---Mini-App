import {createWalletClient, http} from 'viem';
import { baseSepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import dotenv from 'dotenv';
dotenv.config();


export const main = async () => {
    const account = privateKeyToAccount(process.env.PRIVATE_KEY! as `0x${string}`);

    const client = createWalletClient({
      account, 
      chain: baseSepolia,
      transport: http(process.env.RPC_URL!)
    });
    return client;
};
