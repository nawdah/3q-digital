function price(){
    var priceElement = document.querySelector('.fwkyhU').textContent;
var data = [];
    //parse through the price text to extract the symbol and value of price
    var currency_symbol = priceElement.charAt(0);
    var price = priceElement.slice(1);

    //create a dictionary of all associated symbol keys and their name values
    var currency_name = {
        '$' : 'USD', // US Dollar
        '€' : 'EUR', // Euro
        '₡' : 'CRC', // Costa Rican Colón
        '£' : 'GBP', // British Pound Sterling
        '₪' : 'ILS', // Israezli New Sheqel
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

    var obj = data[0];
    console.log(obj);
}