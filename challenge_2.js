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
