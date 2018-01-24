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
// function load_page(node) {
//     var exist = true;
//     for (var i = 0; i < tab_main.items.length; i++) {
//         if (tab_main.items.items[i].title == node.text.substr(4, node.text.length))
//             exist = false;
//     }
//     if (exist) {
//         tab_main.addTab(node.text.substr(4, node.text.length), true).full({
//             html: '<iframe src="../Form/Form' + node.text.substr(1,2) + '.html?" id=' + node.value.getValue('FORMCD') + '" width="100%" height="100%" frameborder="0"></iframe>',
//             closable: true,
//             header: false,
//             id: node.value.getValue('FORMCD'),
//             title: node.text.substr(4, node.text.length)
//         });
//         tab_main.setActiveTab(tab_main.items.items.length - 1)
//     } else {
//         for (var i = 0; i < tab_main.items.length; i++) {
//             if (tab_main.items.items[i].title == node.text.substr(4,node.text.length))
//                 tab_main.setActiveTab(i);
//         }
//     }
// }
// tre_sideBar.eDbclick = function (node) {
//     if (node.leaf) load_page(node);
// }
btn_input.eClick = function (){
    console.log(txa_input.getValue());
}
