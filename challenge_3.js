function checkCookies(){
    
    var elements = ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5', 'nav-6', 'nav-7', 'nav-8', 'nav-9', 'nav-10', 'level0'];
    
    for(i=0; elements.length; i++){
        var top_menu = document.querySelector(elements[i]).addEventListener("click", function(){
            var browserClick = getCookie("browserClick");
            if (browserClick != "") {
            alert("Cookie has been set! Value: " + browserClick);
            } else {
                browserClick = prompt(top_menu.textContent, "");
            }
        })
    }
};
    
//     var nike = document.querySelector('nav-1').addEventListener("click", function(){

//     })
//     var jordan = 
//     var adidas = 
//     var yeezy = 
//     var shoes = 
//     var women =
//     var streetwear =
//     var trophycase =
//     var stadiumgoods = 
//     var gifts =
//     var journal =

// }


    // var elements = [];

    // var top_menu = document.getElementsByClassName("nav-primary").childNodes;

    // // Loop through the children of the <ol>
    // for(i=0;i<top_menu.length;i++) {
    // // Test that the node is indeed an <li>
    // if(top_menu[i].nodeName=='LI') {
    //     // Change this line to manipulate the text however you need
    //     elements.push(top_menu[i].className);
    //     };
    // };