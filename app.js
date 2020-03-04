// initialize required dependencies
const Nightmare = require('nightmare');
const cheerio = require('cheerio');

//initialize url
const nightmare = Nightmare({show: true});
const url = 'https://www.target.com/p/playstation-174-4-1tb-console/-/A-52416598'


//creates function that pulls product from the DOM and returns a dictionary
function challenge_1(url){

    //opening up Electron to start scraping of target's html 
    //& allowing for an error report in the console
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
    

    //extract data from the html
    let getData = html => {

        //initialize a list to store data parsed
        data = [];

        //read through the html
        const $ = cheerio.load(html);
        $('div.h-padding-b-default').each((row, element) => {
            $(element).find('div div').each((i, el) => {
                //locate where price is and extract the text
                let priceElement = $(el).find('.fwkyhU').text();

                //parse through the price text to extract the symbol and value of price
                var currency_symbol = priceElement.charAt(0);
                var price = priceElement.slice(1);

                //if wanted, you could parse the string price into a number value
                //var numPrice = parseFloat(price);

                //create a dictionary of all associated symbol keys and their name values
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

                //iterate through the dictionary
                Object.keys(currency_name).forEach(function(key) {
                    // console.log(key, dictionary[key]);

                    //assign the value for the currency name based on the symbol
                    if (currency_symbol == key){
                        currency = currency_name[key];
                    }
                });

                //append the values saved to 
                if (priceElement){
                    data.push({
                        price: price , //numPrice
                        currency: currency 
                    });
                }
            });
        });
        var obj = data[0];
        return obj;
    }
};

//calling function
challenge_1(url);
