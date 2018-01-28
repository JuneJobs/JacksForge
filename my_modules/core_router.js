var _path = __dirname + '/../Views/Forms';

router.get("/",function(req,res){
    //res.sendFile("/FormA.html", {'root': _path});
    res.sendFile("/SysA010_A.html", { 'root': _path });
});