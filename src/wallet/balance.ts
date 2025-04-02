import {formatEther, publicActions} from 'viem'
import {main} from './main'

export const balances = async (addr: `0x${string}`) => {
    try {
        const client = (await main()).extend(publicActions);

        const balance = formatEther(await client.getBalance({
            address: addr,
            blockTag: 'safe'
        }))
        return balance;
    } catch (error) {
        console.error("Error getting balance:", error);
    }
}