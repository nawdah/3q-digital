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
const options = {
  hostname: 'api.proxycrawl.com',
  path: '/?token=rvLNYo7Vu1XmaIteRTVE9w&css_click_selector=%23styles__signUpButtonPromoPage___3H-U-&page_wait=1000&url=' + url
};

https.request(options, (response) => {
  let body = '';
  response.on('data', chunk => body += chunk).on('end', () => console.log('Button 1 has been clicked!'));
}).end();