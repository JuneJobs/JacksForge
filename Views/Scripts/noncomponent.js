/// <reference path="component.js" />
//Global value

//Global function

var ApFn = {
    toDbTyoe: function (type, value) {
        if (type == 'date') {
            return value.substr(0, 4) + value.substr(5, 2) + value.substr(8, 2);
        } else if (type == 'bool') {
            return value == true ? 'T' : 'F';
        }
    },
    setImportColor: function (text) {
        var tag = "<font color='red'>" + text + '</font>';
        return tag
    },
    setYMD: function (value) {
        value = value.substr(0, 4) + value.substr(5, 2) + value.substr(8, 2);
        return value;
    }
}

var viewPanel = ApPanel.create('content');
viewPanel.header = false;
var viewPort = '';
//make param
Ext.define('DBParam', {
});
DBParam.prototype.addParam = function (key, value) {
    eval("this." + key + "=`" + value + "`;");
};
var DBParams = {
    create: function () {
        var param = Ext.create('DBParam', {
        });
        return param;
    }
};
//ajax connection
function DBCONN(url, params) {
    var storeSet= [];
    Ext.Ajax.request({
        async: false,
        url: url,
        method: 'POST',
        params: params,
        reader: {
            type: 'json'
        },
        success: function (response, eOpt) {
            var responseStr = response.responseText;
                var jObject = Ext.JSON.decode(responseStr);
                var json = jObject[0];
                var _sModel = null;
                if (typeof (jObject) == undefined || jObject.length == 0) {
                    var _model = Ext.define(Ext.id(), { extend: 'Ext.data.Model' });
                    var store = Ext.create('Ext.data.Store', {
                        model: _model.getName(),
                        data: jObject
                    })
                } else {
                    var fieldArr = [];
                    fieldArr.push({
                        'name': 'AP_STATE', 'type': 'bool'
                    });
                    for (var i = 0; i < Object.keys(json).length ; i++) {
                        var name = Object.keys(json)[i];
                        var type = typeof (json[Object.keys(json)[i]]);
                        if (json[Object.keys(json)[i]] == 'T' || json[Object.keys(json)[i]] == 'F') {
                            type = 'bool';
                            for (var j = 0; j < jObject.length; j++) {
                                if (jObject[j][Object.keys(json)[i]] == 'T') jObject[j][Object.keys(json)[i]] = true;
                                if (jObject[j][Object.keys(json)[i]] == 'F') jObject[j][Object.keys(json)[i]] = false;

                            }

                        }
                        fieldArr.push({
                            'name': name, 'type': type
                        })
                    }
                    var store = Ext.create('Ext.data.Store', {
                        model: Ext.define(Ext.id(), {
                            extend: 'Ext.data.Model',
                            fields: fieldArr,
                        }),
                        data: jObject,
                        proxy: {
                            type: 'memory',
                            reader: {
                                type: 'json',
                            }
                        }
                    });
                }
                storeSet.push(store);
        },
        failure: function (response, options) {
            ApMsg.warning('communication fail.');
            return;
        }
    });
    return storeSet;
}

ApEvent = {
    onlaod: function () {

    }
}

Ext.onReady(function () {

    viewPort = Ext.create('Ext.container.Viewport', {
        layout: 'border',
        border: 0,
        items: [viewPanel]
    });
    ApEvent.onlaod();
    return;
});
