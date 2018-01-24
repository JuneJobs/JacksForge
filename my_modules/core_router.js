var _path = __dirname + '/../Views/Forms';

router.get("/",function(req,res){
    res.sendFile("/FormA.html", {'root': _path});
});