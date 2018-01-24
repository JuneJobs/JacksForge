//로그인 윈도우
var tbl_search = ApTable.create(1);
tbl_search.setTarget();
var btn_input = ApButton.create("Translate to Korean");
btn_input.setMargin("0, 0, 0, 90");

var pnl_options = ApPanel.create("");
pnl_options.header = false;

var tbl_input = ApTable.create(2);
tbl_input.setTarget();
var txa_input = ApTextArea.create("Input");
var txa_output = ApTextArea.create(">>>>>>>>>");
txa_output.setReadOnly(true);
var pnl_down =ApPanel.create("Options");
pnl_down.header = false;
var pnl_dic = ApPanel.create("");
pnl_dic.header = false;

var tbl_dic = ApTable.create(2);
tbl_dic.setTarget();
var txa_dic = ApTextArea.create("");
txa_dic.setReadOnly(true);

ApEvent.onlaod = function(){
    viewPanel.divideV(tbl_search, pnl_options);
    tbl_search.setHeight(50);
    pnl_options.divideV(tbl_input, pnl_down,pnl_down);
    tbl_input.setHeight(600);
    pnl_down.divideH(pnl_dic, tbl_dic);
    pnl_dic.setWidth(400);
    txa_input.setWidth(tbl_input.getWidth()/2-30);
    txa_input.setHeight(tbl_input.getHeight()-20);
    btn_input.setSize(tbl_search.getWidth()-140,40)
    txa_output.setWidth(tbl_input.getWidth()/2-30);
    txa_output.setHeight(tbl_input.getHeight()-20);
    txa_dic.setWidth(tbl_dic.getWidth()-53);
    txa_dic.setHeight(tbl_dic.getHeight()-20);
    

    pnl_dic.add({
        html: '<iframe src="http://qualcomminst.com:8080" width="100%" height="100%" frameborder="0"></iframe>',
        closable: true,
        header: false         
    });
}

// http://endic.naver.com/small_search.nhn