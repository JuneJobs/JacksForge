//로그인 윈도우
/// <reference path="../Scripts/ext-all-debug.js" />
/// <reference path="../Scripts/component.js" />
/// <reference path="../Scripts/noncomponent.js" />

var pnl_CODE_H = ApPanel.create();
pnl_CODE_H.header = false;

var tbl_CODE_H = ApTable.create();

var grd_CODE_H = ApGrid.create(true, true);
grd_CODE_H.addColumn('text','Code Name', 60);

var pnl_CODE_D = ApPanel.create();
pnl_CODE_D.header = false;


ApEvent.onlaod = function(){
    viewPanel.divideH(pnl_CODE_H, pnl_CODE_D);
    pnl_CODE_H.divideH(tbl_CODE_H, grd_CODE_H);
}
