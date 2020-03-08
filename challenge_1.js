// setting a self-executing, anonymous function called price()

(function price(){

    // initialize a const variable called priceElement 
    // that query selects any HTML with attribute data-test="product-price" 
    const priceElement = document.querySelector("[data-test='product-price']")

    //create an error case if our variable is null
    if (priceElement == null){
        throw new Error('priceElement is null')
    }

    // initialize a const variable called priceString that 
    // generates the text content of priceElement
    const priceString = priceElement.textContent;

    // create a dictionary of all associated symbol keys and their name values
    var currencyName = {
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
        '₲' : 'PYG', // Paraguayan Guarani
        '฿' : 'THB', // Thai Baht
        '₴' : 'UAH', // Ukrainian Hryvnia
        '₫' : 'VND', // Vietnamese Dong
        'zł' : 'PLN' // Polish Zloty
    };

    // initialize an empty let variable that we will use later
    let priceNum = "";
    
    // iterate through the dictionary currencyName by declaring two const variables
    // called symbol and code that we will can access the key and values of 
    // currencyName
    for(const [symbol, code] of Object.entries(currencyName)){
        //console.log(symbol, code);

        // initialize a const variable named currencySymbol that will slice
        // the position of the symbol from priceString
        const currencySymbol = priceString.slice(0, symbol.length);

        // check to see if currencySymbol is equivalent to symbol
        if (currencySymbol == symbol){

            // if true, assign the code to a new variable named currency
            var currency = code;

            // now assign priceNum the remaining string after parsing out the currency
            priceNum = priceString.slice(symbol.length, -1);
            // console.log(priceNum)

            // break once we find our match
            break;
        }
    }

    // initialize a const variable that change the priceNum into a float value
    // with two decimal points 
    const priceFloat = parseFloat(priceNum).toFixed(2);

    // check if the returned value of priceFloat is not a numeric value
    if (isNaN(priceFloat)){
        throw new Error("priceFloat returns NaN")
    }
    
    // return the price and currency in a json format
    return {
        price: priceFloat,
        currency: currency 
    };
})();