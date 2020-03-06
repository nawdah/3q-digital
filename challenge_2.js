function clickHandler(){
    var button1 = document
        .querySelector(".styles__tryFreeButton___1r0YY ")
        .addEventListener("click", function(){ 
            alert("Clicked Button 1");
            console.log("Clicked Button 1");
    });

    var button2 = document
        .querySelector(".styles__signUpButtonPromoPage___3H-U- ")
        .addEventListener("click", function(){ 
            alert("Clicked Button 2");
            console.log("Clicked Button 2");
    });

    return (button1 || button2); 
};
