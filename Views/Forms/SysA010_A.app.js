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

var store = [
    Ext.create('Ext.data.Store', {
        model: Ext.define(Ext.id(), {
            extend: 'Ext.data.Model',
            fields: {
                'name': 'AP_STATE', 'type': 'bool', 'HCDNM' : 'string', 'HCD' : 'string', 'E_DT' : 'string'
            }
        }),
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
            }
        }
    })
];

grd_CODE_H.eButtonAddClick = function () {
    //grd_CODE_H.reconfigure(store);
    grd_CODE_H.reconfigure();
    grd_CODE_H.add({
        HCDNM: null, HCD: null, E_DT: null
    }); //초기값 세팅 
    //grd_CODE_H.setFocus(grd_CODE_H.getTotalCount() - 1);  //마지막으로 추가된 칼럼에 포커스
}