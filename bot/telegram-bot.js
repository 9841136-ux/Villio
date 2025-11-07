const TelegramBot = require('node-telegram-bot-api');
const token = '8495701863:AAE-RkG8lmrYLAqJGh-6AY1w2jvBRKAMHig'; // впиши сюда токен от BotFather

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Добро пожаловать! Выберите параметры поиска виллы:');
});
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Добро пожаловать! Выберите параметры поиска виллы:');
});

// Добавь свою логику обращения к /api/listings и бронирования!
