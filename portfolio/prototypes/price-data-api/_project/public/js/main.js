

(function(){

  'use strict'

  const fetchOption = {
    headers: {
      'Content-Type' : 'application/json'
    },
    mode: 'cors'
  }

  const flatten = (a,b) => [...a,...b];

  $('form').on('submit', function(e){
    e.preventDefault();
    let pairs = $("#currencyPair").val();
    let base = pairs.substr(0, 3);
    let quote = pairs.substr(4, 7);
    let urlBase = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=';
    let urlMid = '&to_currency=';
    let urlKey = '&apikey=9M51ZTRK47NJM3VG';
    let url = `${ urlBase }${ base }${ urlMid }${ quote }${ urlKey }`;
    let exchangeRateCall = fetch(url, fetchOption);
    console.log(url);

console.log(exchangeRateCall);


  });





  function getPromiseData(promisesArray) {
    return new Promise((resolve, reject) => {
      Promise.all(promisesArray)
        .then(res => {
          return res.map( type => type.json() );
        })
        .then(res => {
          Promise.all(res)
            .then(resolve);
        })
        .catch(reject);
    });
  }



})();

/*
An Array Of Possible Currency Pairs

Hard Code Array Of Pairs
AUD/CAD
AUD/CHF
AUD/JPY
AUD/NZD
AUD/USD

CAD/CHF
CAD/JPY

CHF/JPY

EUR/AUD
EUR/CAD
EUR/CHF
EUR/GBP
EUR/JPY
EUR/NOK
EUR/NZD
EUR/SEK
EUR/TRY
EUR/USD

GBP/AUD
GBP/CAD
GBP/CHF
GBP/JPY
GBP/NZD
GBP/USD

NZD/CAD
NZD/CHF
NZD/JPY
NZD/USD

TRY/JPY

USD/CAD
USD/CHF
USD/CNH
USD/JPY
USD/MXN
USD/NOK
USD/SEK
USD/TRY
USD/ZAR

ZAR/JPY
*/
/*
PRE VALIDATION
Input auto fill the punctuation of a phone number to look like this (xxx) xxx-xxxx.
*/
(function(){
  console.log('pairs has loaded..');
  $("#currencyPair").on("change keyup paste", function () {
      var output;
      var input = $("#currencyPair").val();
      input = input.replace(/[^a-zA-Z 0-9]+/g, '');
      var base = input.substr(0, 3);
      var quote = input.substr(3, 3);

      if (base.length < 3) {
          output = base;
      } else if (base.length == 3 && quote.length < 3) {
          output = base + "/" + quote;
      } else if (base.length == 3 && quote.length == 3) {
          output = base + "/" + quote;
      }


      $("#currencyPair").val(output);

  });

})();
