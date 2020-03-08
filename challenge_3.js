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
            var browserClick = getCookie('name');
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
