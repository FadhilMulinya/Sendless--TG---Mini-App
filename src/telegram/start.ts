import {Context, Telegraf} from 'telegraf';
import dotenv from 'dotenv';
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN!);

bot.start(ctx => {
    const user = ctx.from.first_name;
    ctx.reply(`Hello, ${user}! Welcome to sendless.`);
});

bot.launch(() => console.log('Bot is running'));
