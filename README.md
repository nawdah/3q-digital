# 3q-digital
JavaScript Coding Callenge

## Challenge 1

### On this URL, write a function that pulls the product price and currency from the DOM, then returns an object with the price as a number, and the currency as a currency code. Ie:

> obj = {
>  price: 19.99,
>  currency: ‘USD’ 
> }

Before beginning to solve the challenge, I needed to become familiar with Target's HTML and what I wanted to parse from the website. By highlighting the price of the playstation and right-clicking Inspect, I am taken to the exact div tag where the price is encoded. 

Rather than using the class name to select my value, I access the exact attribute for my product price called `data-test="product-price"`. Now I could begin constructing the code for my function. 

Below I have attached my code for the first challenge, with commentary: 

````
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

````
returned in the console will be:
`{price: 299.00, currency: 'USD'}`


## Challenge 2

### On this page, write a function that assigns a click handler to all the ‘Sign Up Now’ buttons on the page. The click handler should trigger an ‘alert’, with text that indicates which button was clicked. Ie:

> ‘Clicked button 1’, ‘Clicked button 2’, etc.

I took the objective of the first challenge very similarly as the last one, but rather than parse a string, I attached an event listener to each button. At first glance, I made the assumption that the only two button's I'd need to access were the top Sign Up and Sign Up Now buttons. However, using querySelectorAll to grab all buttons with the href attribute "/signup" showed me two extra buttons that were hidden. 

The code below shows how to add a click handler to each button that alerts when a button is clicked:

````
// setting a self-executing, anonymous function called clickHandler()

(function clickHandler(){

    // initialize a const variable called buttonArray
    // that query selects all attributes with the href as /signup

    const buttonArray = document.querySelectorAll("[href='/signup']" );

    // iterate through the buttonArray to attach click listeners
    
    for(let i = 0; i < buttonArray.length; i++){

        // adding a listener to each button on a click 
        // creating a function that alerts when a button has been clicked
        
        buttonArray[i].addEventListener("click", function(){ 
            alert(`Clicked Button ${i+1}`);
            
        })

    };

})();



````

## Challenge 3

### On this page, write a function that attaches click listeners to all the buttons in the top menu (Nike, Yeezy, etc.). 

### The click handler should first check whether or not a document cookie named ‘browserClick’ has been set on the page. If the cookie has not been set, the function should set the cookie to the text of the button clicked; if it has been set, the function should trigger an alert that displays the cookie value. 

While the challenge specifies adding a click listener to the top menu, I decided to also attach a click listener on the subsequent buttons produced from the drop downs within the header. To do that I needed to find what class contained the ordered list of buttons and their children. Once I figured that out, I created a similar code as last challenge and adapted it to encoding cookies and reassigning the document cookie. Although cookies was not something I was familiar with prior to the challenge, this was a wonderful learning experience. 

Below is the code: 

````
// setting a self-executing, anonymous function called checkCookies()


(function checkCookies(){

    // creating a function that takes in a parameter called cname
    // and decodes the cookie name of the document
    function getCookie(cname) {
        console.log(cname)
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        console.log(ca);
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    // initialize a const topMenu that query selects all the button attributes
    const topMenu = document.querySelector(".nav-primary")
           .querySelectorAll("li.level0, li.level1, li.level2");

    // iterate through topMenu to attach click listeners
    for(let i=0; i < topMenu.length; i++){

        // initialize a const variable that assigns the innerText string
        // of each button HTML
        let linkValue = topMenu[i].innerText;

        // attach an event listener on click for each button
        topMenu[i].addEventListener("click", function(){
            
            // alert("Clicked!");

            // initialize a variable that takes in the value of the getCookie function
            // with parameters 'name'
            var browserClick = getCookie('browserClick');
            //console.log(browserClick);

            // check to see if the cookie is not "browserClick"
            if (browserClick != "browserClick") {

                // set the document cookie to the linkValue that we grabbed previously
                document.cookie = `name=${linkValue}`;
                // alert the browser of the cookie 
                alert(getCookie("name"));

            } else {
                // alert that the cookie does exist
                alert("Cookie exists! Value: " + document.cookie);
            }
        })

    }
})();

````
To ensure that this works, I checked the devTools inside Chrome's inspect panel and opened up 'Applications'>'Storage'>'Cookies'. There I checked to see if the cookie that I set for document truly appeared. I also wanted to make sure that 'browserCookie' ever existed, which I was unable to find for the buttons. 
