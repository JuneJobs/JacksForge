/// <reference path="../Resource/Scripts/ext-all-debug.js" />
/// <reference path="../Resource/Scripts/component.js" />
/// <reference path="../Resource/Scripts/noncomponent.js" />
/// <reference path="Main.view.js" />
/**
* @KMU Capston project
* @subject load_page 
* @brief insert new page into master form
* @param trees node
* @return 
* @auter Jack Compbel
*/
txa_input.eKeyDown = function(e) {
    if(e.keyCode == 13){
        txa_input.setValue(" " + (txa_input.getValue()).replace(/\n/g, " ").replace(/\. /g, "\.\n "));
        //txa_input.setValue(txa_input.getValue(.replace(". ", ". \n")));
        //var words = getWords(txa_input.getValue());ㅇ
        Ext.Ajax.request({
            method: 'GET',
            async:true,
            url: '/trans',
            params: {
                'string' : txa_input.getValue()
            },
            success: function (response) {
                txa_output.setValue(response.responseText);
                var origin = txa_input.getValue().split(".");
                var trans = response.responseText.split(".");
                var string = "";
                for(var i = 0; i < origin.length; i ++){
                    string = string + origin[i] + ".\n";
                    string = string + trans[i] + ".\n";
                }
                txa_dic.setValue(string);
            }
        });
    }
}
btn_input.eClick = function (){
    txa_input.setValue(" " + (txa_input.getValue()).replace(/\n/g, " ").replace(/\. /g, "\.\n "));
    //txa_input.setValue(txa_input.getValue(.replace(". ", ". \n")));
    //var words = getWords(txa_input.getValue());
    Ext.Ajax.request({
        method: 'GET',
        async:true,
        url: '/trans',
        params: {
            'string' : txa_input.getValue()
        },
        success: function (response) {
            txa_output.setValue(response.responseText);
            var origin = txa_input.getValue().split(". ");
            var trans = response.responseText.split(". ");
            var string = "";
            for(var i = 0; i < origin.length; i ++){
                string = string + origin[i] + ".\n";
                string = string + trans[i] + ".\n";
            }
            txa_dic.setValue(string);
        }
    });
   
    

}

//번역
function getWords(str) {
    var arrWords = str.split(" ")
    arrWords.forEach( function( v, i ){
        arrWords[i] = arrWords[i].replace(/\. /,"");
        arrWords[i] = arrWords[i].replace(/\,/,"");
        arrWords[i] = arrWords[i].replace(/\’/,"");
        arrWords[i] = arrWords[i].replace(/\“/,"");
        arrWords[i] = arrWords[i].replace(/\”/,"");
    });
    return remove_duplicates_es6(arrWords).sort().toString();
}

function remove_duplicates_es6(arr) {
    let s = new Set(arr);
    let it = s.values();
    return Array.from(it);
}