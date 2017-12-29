

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
