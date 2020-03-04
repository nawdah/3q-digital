const Nightmare = require('nightmare');
const cheerio = require('cheerio');

const nightmare = Nightmare({show: true});
const url = 'https://www.target.com/p/playstation-174-4-1tb-console/-/A-52416598'


function challenge_1(url){
    nightmare
        .goto(url)
        .wait('body')
        .evaluate(() => document.querySelector('body').innerHTML)
        .end()
        .then(response => {
            console.log(getData(response));
            }).catch(err => {
                console.log(err);
            });

    let getData = html => {
        data = [];
        const $ = cheerio.load(html);
        $('div.h-padding-b-default').each((row, element) => {
            $(element).find('div div').each((i, el) => {
                let priceElement = $(el).find('.fwkyhU').text();

                var currency_symbol = priceElement.charAt(0);
                var price = priceElement.slice(1);

                var currency_name = {
                    '$' : 'USD', // US Dollar
                    '€' : 'EUR', // Euro
                    '₡' : 'CRC', // Costa Rican Colón
                    '£' : 'GBP', // British Pound Sterling
                    '₪' : 'ILS', // Israeli New Sheqel
                    '₹' : 'INR', // Indian Rupee
                    '¥' : 'JPY', // Japanese Yen
                    '₩' : 'KRW', // South Korean Won
                    '₦' : 'NGN', // Nigerian Naira
                    '₱' : 'PHP', // Philippine Peso
                    'zł' : 'PLN', // Polish Zloty
                    '₲' : 'PYG', // Paraguayan Guarani
                    '฿' : 'THB', // Thai Baht
                    '₴' : 'UAH', // Ukrainian Hryvnia
                    '₫' : 'VND', // Vietnamese Dong
                };

                if (price){
                    data.push({
                        price: price,
                        currency: currency
                    });
                }
            });
        });
        var obj = data[0];
        return obj;
    }
};

challenge_1(url);
