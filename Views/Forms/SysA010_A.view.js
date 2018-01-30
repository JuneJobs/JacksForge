//로그인 윈도우
/// <reference path="../Scripts/ext-all-debug.js" />
/// <reference path="../Scripts/component.js" />
/// <reference path="../Scripts/noncomponent.js" />

var pnl_CODE_H = ApPanel.create();
pnl_CODE_H.header = false;

var tbl_CODE_H = ApTable.create();
tbl_CODE_H.setTarget();
var btn_CODE_H_UPDATE = ApButton.create('UPDATE');

var grd_CODE_H = ApGrid.create(true, true);
grd_CODE_H.addColumn('text', 'Code','HCDNM', 200);
grd_CODE_H.addColumn('text', 'Code Name','HCD',200);
grd_CODE_H.addColumn('date', 'Last Updated', 'E_DT', 120);

var pnl_CODE_D = ApPanel.create();
pnl_CODE_D.header = false;


ApEvent.onlaod = function(){
    viewPanel.divideV(pnl_CODE_H, pnl_CODE_D);
    pnl_CODE_H.divideV(tbl_CODE_H, grd_CODE_H);
    tbl_CODE_H.setHeight(50);
}
