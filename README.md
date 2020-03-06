# 3q-digital
JavaScript Coding Callenge

## Challenge 1

* On this URL, write a function that pulls the product price and currency from the DOM, then returns an object with the price as a number, and the currency as a currency code. Ie:

> obj = {
>  price: 19.99,
>  currency: ‘USD’ 
> }

Before beginning to solve the challenge, I needed to become familiar with Target's HTML and what I wanted to parse from the website. By highlighting the price of the playstation and right-clicking Inspect, I am taken to the exact <div> tag where the price is encoded. 

The full class name for the price attribute is `style__PriceFontSize-gob4i1-0 fwkyhU h-text-bold`. For the console to read it, I used one of Google Chrome's toolsm called gadget selector, to return the unique CSS class. Now I could begin constructing the code for my function. 

Below I have attached my code for the first challenge, with commentary: 

````
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

price();

````
returned in the console will be:
`{price: 299.00, currency: 'USD'}`

