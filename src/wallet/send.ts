import {parseEther} from 'viem'
import {main} from './main'

export const sendEth = async (addr : `0x${string}`, amt: number) => {
    try {
       const client =  await main();

       const url = 'https://sepolia.basescan.org/tx/'
    
    const send = await client.sendTransaction({
        account: client.account,
        to: addr,
        value: parseEther(amt.toString())
    });
    console.log(`The transaction hash is: ${send}`);
    console.log(`You can view the transaction on the explorer at: ${url}${send}`);
    return send;

    } catch (error) {
        console.error("Error sending ether:", error);
    };

    
}