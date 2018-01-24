//로그인 윈도우
var pnl_login = ApPanel.create();
pnl_login.header = false;

var tbl_img = ApTable.create(1);
tbl_img.setTarget();
var img = ApImg.create('../Resource/Themes/administrator.png');
img.setMargin('10 0 0 0');
img.setSize(142, 142);

var tbl_login = ApTable.create(1);
tbl_login.setTarget();
var txt_ID = ApText.create('');
txt_ID.emptyText = 'Admin Id'
var txt_PW = ApText.create('');
txt_PW.emptyText = '******'
txt_PW.inputType = 'password';
var btn_login = ApButton.create('Log-in');
btn_login.setWidth(87);
var lbl_message = ApLabel.create('');

//top bar
var pnl_topBar = ApPanel.create('Upbar');
pnl_topBar.header = false;
pnl_topBar.addCls('panel-back');
var tbl_LOGO = ApTable.create();
tbl_LOGO.setTarget();
//var btn_LogOn2 = ApButton.create("로그인");
//tbl_LOGO.cellShare(2);


//data selector
var tbl_selecor = ApTable.create(1);
tbl_selecor.setTarget();

//downarea
var pnl_downArea = ApPanel.create('downArea');
pnl_downArea.header = false;


var pnl_sideBar = ApPanel.create('QI 업무정리');
var tre_sideBar = ApTree.create('menu');
tre_sideBar.header = false;
tre_sideBar.bindNode(getNode('[A]규격서', false, false), 1, false);
tre_sideBar.bindNode(getNode('[A1]규격서 타이틀관리', true, false), 2, false);
tre_sideBar.bindNode(getNode('[A2]규격서 이슈 관리(회의록)', true, false), 2, false);
//tre_sideBar.bindNode(getNode('[A2]영역 관리', true, false), 2, false);
//tre_sideBar.bindNode(getNode('[A3]섹션 관리', true, false), 2, false);
//tre_sideBar.bindNode(getNode('[B]데이터분석', false, false), 1, false);
//tre_sideBar.bindNode(getNode('[B1]배터리 분석', true, false), 2, false);
//tre_sideBar.bindNode(getNode('[B2]전체 데이터분석', true, false), 2, false);
//tre_sideBar.bindNode(getNode('[B3]실시간 데이터', true, false), 2, false);

var pnl_map = ApPanel.create();
pnl_sideBar.setCollapsed(true);
pnl_map.header = false;
var pnl_mapData = ApPanel.create('위치정보');
pnl_mapData.setCollapsed(true);
//main
var tab_main = ApTab.create();

var pnl_mid = ApPanel.create();
pnl_mid.header = false;



var pnl_main = ApPanel.create('main');

var myLatlng = { lat: -25.363, lng: 131.044 };
var marker;

var pnl_group = ApPanel.create();
pnl_group.header = false;


var iframe;
var map;
ApEvent.onlaod = function(){
    viewPanel.divideH(pnl_sideBar, tab_main);
    pnl_sideBar.divideV(tbl_LOGO, tre_sideBar);
    tbl_LOGO.setHeight(110);
    pnl_sideBar.setWidth(200);

    tab_main.addTab('Home').divideV(tbl_selecor, pnl_mid);
    tbl_selecor.setHeight(0);
    pnl_mid.divideH(pnl_map, pnl_mapData, pnl_mapData);
    pnl_mapData.setWidth(350);

    //------------ Google Map source--------
    //create map
   

    btn_login.eClick = function () {
        window.close();
    }
    pnl_sideBar.setCollapsed(false);
}
