// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';

'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3();


/**
  * 
 */
exports.lambdaHandler = async event  => {
  
        //console.log("event", event.Records[0].s3 );

        var params = { 
            Bucket: 'alexadbload-mydbloadbucket-1nev4d4m336wm',
            Key: 'minecraft.json',
        };
    
        const data = await s3.getObject(params).promise();
       
        let minecraft = JSON.parse(data.Body.toString());
        var itemssArray = minecraft['ITEMS'];
        var resArray = minecraft['RECIPES'];
       
        resArray.forEach(function(elems) {
            elems.forEach(function (elem) {
              console.log("iD is " + elem.id);
              console.log("DES esd" + elem.desc);
            })
          })
          
          itemssArray.forEach(function (elems) {
              elems.forEach(function (elem) {
                  console.log(elem.id);
                  console.log(elem.desc);

              })
          })

        const response = {
            statusCode: 200,
            body: JSON.stringify(data.Body),
        };
        return response;
    };
   


