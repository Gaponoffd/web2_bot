
import { Telegraf } from 'telegraf';
import fetch from 'node-fetch';

const bot = new Telegraf('5103489589:AAGVpnWLbjJ51KzGx4CThP3ChZKPePblx3A')


// const url = "https://ameksrent.ru/telegram-bot-api.json";

// let response = await fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify()
// });

// let result = await response.json();


bot.start( ctx => ctx.reply(`
Здравствуй дружочек ${ctx.from.first_name}!
Получить список доступных авто по команде /help."
`))



bot.help( ctx => ctx.reply(
    str
))

bot.launch()
