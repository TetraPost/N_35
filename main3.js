console.log('3 File');
const request = require('request');
const cheerio = require('cherio');
const url = 'http://dou.ua';

request(url, function(err, res, body){
    if(err){console.log(err);}
    else{ 
      $ = cheerio.load(body);
      var cards = [];
      $('.items.table > .row > a').each(function(){
          //console.log(this);
        cards.push({
            // title:$('.img',this).text(),
            // url:$('a',this).attr('href'),
            src:$('img',this).attr('src'),
        });
      });
      
    }
    console.log(cards);
  })