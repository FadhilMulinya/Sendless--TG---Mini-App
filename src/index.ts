import { Telegraf } from 'telegraf';
import { sendEth } from './wallet/send';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN || "");

// User session states
interface UserState {
  state: string;
  address?: string;
}

const userStates: Record<number, UserState> = {};

// Start command
bot.start((ctx) => {
  ctx.reply('Welcome to Sendless! Enter a valid Base Address.');
  userStates[ctx.from.id] = { state: 'waiting_for_address' };
});

// Handle all text messages
bot.on('text', async (ctx) => {
  const userId = ctx.from.id;
  const userState = userStates[userId] || { state: 'waiting_for_address' };
  
  if (userState.state === 'waiting_for_address') {
    const address = ctx.message.text;
    
    // Basic validation
    if (!address.startsWith('0x') || address.length !== 42) {
      ctx.reply("Invalid Ethereum address. Please enter a valid address starting with 0x:");
      return;
    }
    
    // Store address and ask for amount
    userStates[userId] = { 
      state: 'waiting_for_amount',
      address: address
    };
    
    ctx.reply("Enter the amount of ETH to send:");
    
  } else if (userState.state === 'waiting_for_amount') {
    const amount = parseFloat(ctx.message.text);
    
    if (isNaN(amount) || amount <= 0) {
      ctx.reply("Invalid amount. Please enter a positive number:");
      return;
    }
    
    const address = userState.address;
    
    ctx.reply(`Sending ${amount} ETH to ${address}...`);
    
    try {
      // Assuming sendEth now returns the transaction hash
      const txHash = await sendEth(address as `0x${string}`, amount);
      
      // Send transaction details to the user
      await ctx.reply("✅ Transaction completed successfully!");
      await ctx.reply(`The transaction hash is: ${txHash}`);
      await ctx.reply(`You can view the transaction on the explorer at: https://sepolia.basescan.org/tx/${txHash}`);
    } catch (error) {
      console.error("Transaction error:", error);
      ctx.reply(`❌ Transaction failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    
    // Reset state to allow for another transaction
    userStates[userId] = { state: 'waiting_for_address' };
    ctx.reply("Enter another Ethereum address to make another transaction.");
  }
});

// Launch bot
bot.launch()
  .then(() => console.log("ETH sender bot is running on Telegram 🚀"))
  .catch((err) => console.error("Failed to start bot:", err));

