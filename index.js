
import TelegramBot from 'node-telegram-bot-api';

const token = '5103489589:AAGVpnWLbjJ51KzGx4CThP3ChZKPePblx3A';
const bot = new TelegramBot(token, {polling: true});

// Конфиг клавиатуры
// const keyboard = [
//     [
//         {
//             text: 'Готовой разработка',
//             callback_data: 'siteSample'
//         }
//     ],
//     [
//         {
//             text: 'Индивидуальная разработка',
//             callback_data: 'siteIndividual'
//         }
//     ],
//     [
//         {
//             text: 'Наш сайт',
//             url: 'https://web2.agency/'
//         }
//     ]
// ];


// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(chatId, textStart, {
//         reply_markup: {
//             resize_keyboard: true,
//             keyboard: keyboard
//         }
//     });
// });

//<a href="https://yandex.ru/profile/1713373079"/>Смотреть на карте </a>

const params = {
    create: "Создание сайтов",
    support: "Техподдержка",
    promotion: "Продвижение сайтов",
    contextual: "Контекстная реклама",
    reputation: "Управление репутацией",
    smm: "SMM продвижение",
    foto: "Фотосъемка",
    video: "Видеосъемка",
    contacts: "Контакты",
    site: "Наш сайт"
}

const keyboard = [
    [params.create, params.support],
    [params.promotion, params.contextual],
    [params.reputation, params.smm],
    [params.foto, params.video],
    [params.contacts],
    [params.site]
];

bot.on('message', (msg) => {

    const chatId = msg.chat.id;
    let text = ""

    switch(msg.text) {
        case params.create:
            text = 'Разрабатываем качественные сайты-визитки, каталоги, интернет магазины, landing page. От сайтов на Tilda, до уникальных программных разработок. Достигаем целей, поставленных перед проектом.';
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Сколько стоит?',
                            callback_data: 'createPrice'
                        },
                        {
                            text: 'Хочу!',
                            callback_data: 'createDone'
                        }
                    ]]
                }
            });
            break
        case params.support:
            text = 'Поддерживаем на протяжении всей жизни проекта: наполняем, дорабатываем, восстанавливаем и улучшаем. Любой проект всегда можно доработать согласно новым целям клиента.';
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Сколько стоит?',
                            callback_data: 'supportPrice'
                        },
                        {
                            text: 'Хочу!',
                            callback_data: 'supportDone'
                        }
                    ]]
                }
            });
            break
        case params.promotion:
            text = 'Выводим сайты на первые позиции Яндекс, Google согласно запросам, по которым Вас ищут клиенты. Продвигаем сайты, разработанные другими студиями.';
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Сколько стоит?',
                            callback_data: 'promotionPrice'
                        },
                        {
                            text: 'Хочу!',
                            callback_data: 'promotionDone'
                        }
                    ]]
                }
            });
            break
        case params.contextual:
            text = 'Запускаем рекламные кампании для быстрого привлечения клиентов. Как быстро? Уже сегодня. Яндекс.Директ и Google.Adwords, РСЯ и КМС.';
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Сколько стоит?',
                            callback_data: 'contextualPrice'
                        },
                        {
                            text: 'Хочу!',
                            callback_data: 'contextualDone'
                        }
                    ]]
                }
            });
            break
        case params.reputation:
            text = 'Привлекаем отзывы и лояльных клиентов. Вытесняем негатив в сети. Контроль репутации. Максимально эффективно и необходимо для отелей и ресторанов, сферы услуг.';
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Сколько стоит?',
                            callback_data: 'reputationPrice'
                        },
                        {
                            text: 'Хочу!',
                            callback_data: 'reputationDone'
                        }
                    ]]
                }
            });
            break
        case params.smm:
            text = 'Создаем дизайн и стратегию ведения аккаунта, повышаем лояльность клиентов к Вашему бренду. Запускаем эффективную рекламу в Instagram.';
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Сколько стоит?',
                            callback_data: 'smmPrice'
                        },
                        {
                            text: 'Хочу!',
                            callback_data: 'smmDone'
                        }
                    ]]
                }
            });
            break
        case params.foto:
            text = 'Осуществляем фото сопровождение вашей компании: выезжаем на фотосеты, создаем контент для сайтов и instagram который вы потом можете использовать в рекламе. Food съемка. Интерьерная съемка. Разработка рендеров.';
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Сколько стоит?',
                            callback_data: 'fotoPrice'
                        },
                        {
                            text: 'Хочу!',
                            callback_data: 'fotoDone'
                        }
                    ]]
                }
            });
            break
        case params.video:
            text = 'От роликов для instagram до роликов со сценарием. Создаем мощную видео рекламу для использования на сайте, в instagram, на TV и в кинотеатрах. Съемка с квадрокоптера.';
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Сколько стоит?',
                            callback_data: 'videoPrice'
                        },
                        {
                            text: 'Хочу!',
                            callback_data: 'videoDone'
                        }
                    ]]
                }
            });
            break

        case params.contacts:
            text = `
            +7 988 340-29-92 \r\n pro@web2group.ru \r\n г.Новороссийск, набережная Адмирала Серебрякова 1 \r\n Пн - Пт с 9:00 до 18:00 \r\n 
            `
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: keyboard
                }
            });
            break
        case params.site:
            text = 'https://web2.agency/';
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: keyboard
                }
            });
            break
        default:
            text = `Добрый день, я бот студии WEB2!, что Вас Интересует?`;
            bot.sendMessage(chatId, text, {
                reply_markup: {
                    resize_keyboard: true,
                    keyboard: keyboard
                }
            });
            break
    }
    
})

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    let answer = ""

    if (query.data === 'createPrice') {
        answer = 'от 50 000 рублей';
    }
    if (query.data === 'createDone') {
        answer = 'Позвоните нам +7 988 340-29-92';
    }
    if (query.data === 'supportPrice') {
        answer = 'от 3 000 рублей';
    }
    if (query.data === 'supportDone') {
        answer = 'Позвоните нам +7 988 340-29-92';
    }
    if (query.data === 'promotionPrice') {
        answer = 'от 8 000 рублей';
    }
    if (query.data === 'promotionDone') {
        answer = 'Позвоните нам +7 988 340-29-92';
    }
    if (query.data === 'contextualPrice') {
        answer = 'от 10 000 рублей';
    }
    if (query.data === 'contextualDone') {
        answer = 'Позвоните нам +7 988 340-29-92';
    }

    if (query.data === 'reputationPrice') {
        answer = 'от 6 000 рублей';
    }
    if (query.data === 'reputationDone') {
        answer = 'Позвоните нам +7 988 340-29-92';
    }
    if (query.data === 'smmPrice') {
        answer = 'от 8 000 рублей';
    }
    if (query.data === 'smmDone') {
        answer = 'Позвоните нам +7 988 340-29-92';
    }
    if (query.data === 'fotoPrice') {
        answer = 'от 3 000 рублей';
    }
    if (query.data === 'fotoDone') {
        answer = 'Позвоните нам +7 988 340-29-92';
    }
    if (query.data === 'videoPrice') {
        answer = 'от 2 500 рублей';
    }
    if (query.data === 'videoDone') {
        answer = 'Позвоните нам +7 988 340-29-92';
    }


    bot.sendMessage(chatId, answer, {
        reply_markup: {
            resize_keyboard: true,
            keyboard: keyboard
        }
    });
    
})
