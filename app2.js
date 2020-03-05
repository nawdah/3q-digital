// // initialize required dependencies
// const Nightmare = require('nightmare');
// const cheerio = require('cheerio');

// //initialize url
// const nightmare = Nightmare({show: true});
// const url = 'https://curiositystream.com/'


// //creates function that pulls product from the DOM and returns a dictionary
// function challenge_2(url){

//     //opening up Electron to start scraping of target's html 
//     //& allowing for an error report in the console
//     nightmare
//         .goto(url)
//         .wait('body')
//         .evaluate(() => document.querySelector('body').innerHTML)
//         .end()
//         .then(response => {
//             console.log(getData(response));
//             }).catch(err => {
//                 console.log(err);
//             });
    

//     //extract data from the html
//     let getData = html => {

//         //initialize a list to store data parsed
//         //data = [];

//         //read through the html
//         const $ = cheerio.load(html);
//         //return $;
//     //     $('div.styles__app___4Dync').each((row, element) => {
//     //         $(element).find('div div div div').each((i, el) => {
//     //             $(el).click(function(){
//     //                return alert( "Button 1 has been clicked" );
//     //             })
//     //         });
//     //     });
//         }
// };

// //calling function
// challenge_2(url);


const https = require('https');

const url = encodeURIComponent('https://curiositystream.com/');

function challenge_2(url){

    button1 = '&css_click_selector=%23styles__signUpButtonPromoPage___3H-U-'
    button2 = '&css_click_selector=%23styles__tryFreeButton___1r0YY'
    
    const options = {
        hostname: 'api.proxycrawl.com',
        path: '/?token=rvLNYo7Vu1XmaIteRTVE9w&page_wait=1000&url=' + url
    };

    // https.request(options, (response) => {
    //     let body = '';
    //     response.on('data', chunk => body += chunk).on('end', () => console.log(body));
    // }).end();

    if(true){
        const b1 = {
            hostname: 'api.proxycrawl.com',
            path: '/?token=rvLNYo7Vu1XmaIteRTVE9w' + button1 + '&page_wait=1000&url=' + url
        };

        const b2 = {
            hostname: 'api.proxycrawl.com',
            path: '/?token=rvLNYo7Vu1XmaIteRTVE9w' + button2 + '&page_wait=1000&url=' + url
        };

        https.request(b1, (response) => {
            let body = '';
            response.on('data', chunk => body += chunk).on('end', () => {return console.log('Button 1 has been clicked!')});
        }).end();

        https.request(b2, (response) => {
            let body = '';
            response.on('data', chunk => body += chunk).on('end', () => {return console.log('Button 2 has been clicked!')});
        }).end();
    };
};

challenge_2(url);