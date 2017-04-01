var request = require('request');
const fs = require('fs');

var ul = "https://t.co/xhZxv0ursi";
var api_key = "";
request({
          url: "http://api.smmry.com/&SM_API_KEY="+api_key+"&SM_URL="+ul,
          json: true
          }, function (err, response, data) {
           if (!err && response.statusCode == 200) {
              fs.writeFileSync("./summary.md", "---"+"\n"+"layout: post"+"\n"+"tag: blockchain ethereum"+"\n"+"title: "+data.sm_api_title+"\n"+"---"+"\n"+"\n"+data.sm_api_content+"\n\n"+"Source: "+"["+ul+"]"+"("+ul+")"+"\n")
              //console.log(data)
           }
        })