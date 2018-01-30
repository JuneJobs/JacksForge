/// <reference path="../Scripts/ext-all-debug.js" />
/// <reference path="../Scripts/component.js" />
/// <reference path="../Scripts/noncomponent.js" />
/// <reference path="SysA010_A.view.js" />
/**
* @Qualcomm Institute Personal Test
* @subject load_page 
* @brief insert new page into master form
* @param trees node
* @return 
* @auter Jack Park
*/

var store = Ext.create('Ext.data.Store', {
        model: Ext.define(Ext.id(), {
            extend: 'Ext.data.Model',
            fields: [
                { 'name': 'AP_STATE', 'type': 'bool' }, { 'HCDNM': 'text' }, { 'HCD': 'text' }, { 'E_DT': 'text'}
            ]
        }),
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
            }
        }
    }
);

grd_CODE_H.eButtonAddClick = function () {
    //grd_CODE_H.reconfigure(store);
    grd_CODE_H.reconfigure(store);
    store.add({
        HCDNM: null, HCD: null, E_DT: null
    }); //초기값 세팅 
    grd_CODE_H.setFocus(grd_CODE_H.getTotalCount() - 1);  //마지막으로 추가된 칼럼에 포커스
}

grd_CODE_H.eButtonDeleteClick = function () {
    var deleteArray = [];
    var index= 0;
    if (grd_CODE_H.selModel.getSelection() == 0) {
        Ext.Msg.alert("Error", "There is no row.");
    } else {
        for (var i = 0; i < grd_CODE_H.getSelection().length; i++) {
            var HCD = grd_CODE_H.getSelection()[i].data.HCD;
            deleteArray.push(HCD);
        }   //delete 한 행의 UP_KEY를 deleteArray에 저장 후 sync시 db에서 삭제
        index = grd_CODE_H.selModel.getCurrentPosition().rowIdx - 1
        if (index == -1) index = 0;
        grd_CODE_H.getStore().remove(grd_CODE_H.getSelection());
        grd_CODE_H.setFocus(index);
    }
}
//grd_CODE_H
btn_CODE_H_UPDATE.eClick = function() {
    
}