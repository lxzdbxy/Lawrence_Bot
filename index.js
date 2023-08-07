const TelegramApi = require('node-telegram-bot-api')
const token = '5619905086:AAF6impi5zUpSPg16gd6Hu0a7zHejF-6Rew'
const bot = new TelegramApi(token, { polling: true })

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
let mas = ['купить пивка', 'заняться спортом', 'купить что-нибудь вкусное', 'поиграть на гитаре', 'помыться уже блять...']
bot.on('message', async msg => {
    const text = msg.text
    const chatId = msg.chat.id
    if (text.toLowerCase() === 'лаврентий статус' || text.toLowerCase() === 'лаврентий, статус') {
        await bot.sendMessage(chatId, `У тебя 0 оливок`)
    }
    if (text.toLowerCase() === 'лаврентий магазин' || text.toLowerCase() === 'лаврентий, магазин') {
        await bot.sendMessage(chatId, `10 оливок - Пиво\n20 оливок - Вкусняшки\n30 оливок - Тортик (маленький)\n40 оливок - Шаурма\n50 оливок - Капо`)
    }
    if (text.toLowerCase() === 'лаврентий совет' || text.toLowerCase() === 'лаврентий, совет') {
        await bot.sendMessage(chatId, `${msg.from.first_name}, сегодня ты должен ${mas[getRandomNumber(0, 4)]}`)
    }
    if (text.toLowerCase() === '/help') {
        await bot.sendMessage(chatId, `Мои команды:\n1) Статус\n2) Магазин\n3) Совет\n(Перед комндой нужно ввести имя бота)`)
    }
})