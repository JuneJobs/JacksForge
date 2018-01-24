const translate = require('google-translate-api');
 ;
router.get("/trans",function(req,response){
    
    translate(req.query.string, {to: 'ko'}).then(res => {
        console.log(req.query.string);

        response.send(res.text);
        //=> nl 
    }).catch(err => {
        console.error(err);
    });
});