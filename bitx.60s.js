#!/usr/local/bin/node

var https = require('https');

https.get('https://api.mybitx.com/api/1/ticker?pair=XBTZAR', function(res) {
  var body = '';
  res.on('data', function(data) {
    body += data;
  }).on('error', function(err) {
    console.log('...')
  }).on('end', function() {
    printStats(JSON.parse(body));
  });
})

function printStats(body) {
  console.log('R ' + body.bid + '/B⃦| color=#333333');
  console.log('---');
  console.log('Ask: R', body.ask, '| color=#cc0000');
  console.log('Bid: R', body.bid, '| color=#00cc00');
}
