var $ = window.jQuery;
var clicksbeforelogout = 3;
var onceonlyGroupPlsChat = 0;

var settingsModal;
var settingsBtn;
var unlockBtn;
var settingsBtncloser;
var spanSettingsCloser;

var redesignStatusChat;
var benefitsWalletStatusChat;
var triclicksLogoutStatusChat;
var addSearchgroupStatusChat;
var blockerElementChat;
var designSelectedChatMagic; // Not used

var colorTransparent = "rgba(0, 0, 0, 0)";
var colorBlackFull = "#000";
var colorWhiteFull = "#fff";
var accent075Color = "rgba(0, 0, 0, 0.075)";
var colorBg = "";
var colorFront = "";
var accentBgColor = "";
var accentHoverColor = "";
var accentFrontColor = "";
var accent06Color = "";
var greyPageBg = "#1a1d21";
//Panel left .panel-left { background-color: #1c2e42; }

var settingsbuttoncode = '<button class="btn btn-brand-primary btn-logout" id="settingsBtnChat" style="margin-left: 10px;">⚙️</button>';

var cssWhiteChatInjector = 'body { background-color: #fff; color: #1c2e42; } .content-header { background: #fff; color: #000; } .content-helper { background: #fff; color: #000; } .form-control { color: #1c2e42; } .dropdown-menu { background-color: #fff; } .workspace-customerSearch .dropdown-menu__item { color: #1c2e42; } .dropdown-menu__item.ng-binding:hover { background-color: inherit; } .btn.btn-brand-white { background-color: #fff; color: #2899ce; } .btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); } .chat-date-human { background: #fff; } .chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #fff; color: #1c2e42; } .content .entry.user-unread { background-color: #dbc5ca; } .content .chat-message-sender { color: #2c3e50; } .form-control { background-color: #fff; } .dropdown-menu > li > a { color: #555; border: none; } .chat-form .chat-tools-area { background-color: #bcdaff; border: none; } .chat-upload .drop-zone { background-color: #d1e2ff; } .notification-modal .modal-content { background-color: #fff; } .notification-modal { background: rgba(40, 153, 206, 0.7); } .right-sidebar { background: #fff; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #fafafa; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #fafafa; color: #000; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgba(227, 227, 227, 0.3); color: #1c2e42; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: none; color: #2899ce; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #1c2e42; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #fff; } .typeahead-custom .typeahead-custom-i { background-color: #fff; } .typeahead-custom .typeahead-custom-i:hover { background: rgba(40, 153, 206, 0.1); } .loader-cover-area { background-color: rgba(40, 153, 206, 0.75); } .btn.btn-brand-alert { background: linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%); } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%); } .panel-left { background-color: #1c2e42; } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; } .chat-message-time-tolltip { color: #1c2e42; } .chat-message-component .chat-icr-component-resolved button { color: #1c2e42; } .content .entry.user { background-color: #f1faec; } .content .entry.bot { background-color: #EAF5FA; } .chat-message-download-title { color: #1c2e42; }';

var cssGreyChatInjector = 'body { background-color: #1a1d21; color: #fff; } .content-header { background: #1a1d21; color: #fff; }  .content-helper { background: #1a1d21; color: #fff; } .form-control { color: #fff; } .dropdown-menu { background-color: #1a1d21; } .workspace-customerSearch .dropdown-menu__item { color: #fff; } .dropdown-menu__item.ng-binding:hover { background-color: #7e7e7e; } .btn.btn-brand-white { background-color: #1a1d21; color: #34beff; } .btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); } .chat-date-human { background: #1a1d21; } .chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #1a1d21; color: #fff; } .content .entry.user-unread { background-color: #3c0713; } .content .chat-message-sender { color: #63aef9; } .form-control { background-color: #1a1d21; } .dropdown-menu > li > a { color: #fff; border: 1px solid #747474; } .chat-form .chat-tools-area { background-color: #1a1d21; border: 1px solid #000; } .chat-upload .drop-zone { background-color: #d1e2ff; } .notification-modal .modal-content { background-color: #1a1d21; } .notification-modal { background: rgb(2 22 42 / 70%); } .right-sidebar { background: #1a1d21; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #1a1d21; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #1a1d21; color: #fff; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgb(36 36 36); color: #fff; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: #000; color: #0fa6ed; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #fff; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #1a1d21; } .typeahead-custom .typeahead-custom-i { background-color: #000; } .typeahead-custom .typeahead-custom-i:hover { background: rgb(40 40 40 / 70%); } .loader-cover-area { background-color: rgb(7 21 28 / 83%); } .btn.btn-brand-alert { background: #780101; } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: #d33030; } .panel-left { background-color: #04101e; } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; } .chat-message-time-tolltip { color: #fff; } .chat-message-component .chat-icr-component-resolved button { color: #fff; } .content .entry.user { background-color: #172c0c; } .content .entry.bot { background-color: #122934; } .chat-message-download-title { color: #2e85e5; }';

var cssBlackChatInjector = 'body { background-color: #000; color: #fff; } .content-header { background: #000; color: #fff; } .content-helper { background: #000; color: #fff; } .form-control { color: #fff; } .dropdown-menu { background-color: #000; } .workspace-customerSearch .dropdown-menu__item { color: #fff; } .dropdown-menu__item.ng-binding:hover { background-color: #545454; } .btn.btn-brand-white { background-color: #000; color: #34beff; } .btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); } .chat-date-human { background: #000; } .chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #000; color: #fff; } .content .entry.user-unread { background-color: #3c0713; } .content .chat-message-sender { color: #63aef9; } .form-control { background-color: #000; } .dropdown-menu > li > a { color: #fff; border: 1px solid #747474; } .chat-form .chat-tools-area { background-color: #000; border: 1px solid #666; } .chat-upload .drop-zone { background-color: #181818; } .notification-modal .modal-content { background-color: #000; } .notification-modal { background: rgb(2 22 42 / 70%); } .right-sidebar { background: #000; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #000; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #000; color: #fff; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgb(36 36 36); color: #fff; } .profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: #000; color: #0fa6ed; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #e9e9e9; } .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #000; } .typeahead-custom .typeahead-custom-i { background-color: #000; } .typeahead-custom .typeahead-custom-i:hover { background: rgb(40 40 40 / 70%); } .loader-cover-area { background-color: rgb(7 21 28 / 83%); } .btn.btn-brand-alert { background: #780101; } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: #d33030; } .panel-left { background-color: rgb(1 6 12); } .btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; } .chat-message-time-tolltip { color: #fff; } .chat-message-component .chat-icr-component-resolved button { color: #fff; } .content .entry.user { background-color: #0b1c02; } .content .entry.bot { background-color: #06161e; } .chat-message-download-title { color: #1863b7; }';

//CSS 
/*
.content-header { width: calc(100% - 53.8em); }
.workspace-customerSearch { justify-content: start; }
.workspace-customerSearch .form-control { width: 17em; }
.panel-right.animate-show { padding-top: 0px; z-index: 201; }
.right-sidebar { margin-top: 0px; }
.profile-info .profile-info-header { height: 10.1em; }
.profile-info .profile-info-header .profile-info-header-title .profile-info-header-description .profile-info-header-actions { flex-direction: row; }
.profile-info .profile-info-content .profile-info-tabset .tab-content { top: 15.6em; height: calc(100% - 19em); }
.profile-info .profile-info-footer .profile-info-footer-btns { padding: 0.1em 0 0 0; }
.profile-info .profile-info-footer { height: 3.5em; }
*/

//CSS White
/*
body { background-color: #fff; color: #1c2e42; }
.content-header { background: #fff; color: #000; }
.content-helper { background: #fff; color: #000; }
.form-control { color: #1c2e42; }
.dropdown-menu { background-color: #fff; }
.workspace-customerSearch .dropdown-menu__item { color: #1c2e42; }
.dropdown-menu__item.ng-binding:hover { background-color: inherit; }
.btn.btn-brand-white { background-color: #fff; color: #2899ce; }
.btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); }
//Chat
.chat-date-human { background: #fff; }
.chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #fff; color: #1c2e42; }
.content .entry.user-unread { background-color: #dbc5ca; }
.content .chat-message-sender { color: #2c3e50; }
.form-control { background-color: #fff; }
.dropdown-menu > li > a { color: #555; border: none; }
.chat-form .chat-tools-area { background-color: #bcdaff; border: none; }
.chat-upload .drop-zone { background-color: #d1e2ff; }
//Chatout
.notification-modal .modal-content { background-color: #fff; }
.notification-modal { background: rgba(40, 153, 206, 0.7); }
//Right sidebar
.right-sidebar { background: #fff; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #fafafa; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #fafafa; color: #000; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgba(227, 227, 227, 0.3); color: #1c2e42; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: none; color: #2899ce; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #1c2e42; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #fff; }
.typeahead-custom .typeahead-custom-i { background-color: #fff; }
.typeahead-custom .typeahead-custom-i:hover { background: rgba(40, 153, 206, 0.1); }
.loader-cover-area { background-color: rgba(40, 153, 206, 0.75); }
.btn.btn-brand-alert { background: linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%); }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%); }
.panel-left { background-color: #1c2e42; }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; }

.chat-message-time-tolltip { color: #1c2e42; }
.chat-message-component .chat-icr-component-resolved button { color: #1c2e42; }
.content .entry.user { background-color: #f1faec; }
.content .entry.bot { background-color: #EAF5FA; }
.chat-message-download-title { color: #1c2e42; }
*/

//$("TAGTAGTAG").css({"background": "#fff"});
//$("TAGTAGTAG").css({"background": "#fff", "color": "#000"});
//$("TAGTAGTAG").css({"background-color": "#fff", "color": "#000"});


//CSS Dark
/*
body { background-color: #1a1d21; color: #fff; }
.content-header { background: #1a1d21; color: #fff; } 
.content-helper { background: #1a1d21; color: #fff; }
.form-control { color: #fff; }
.dropdown-menu { background-color: #1a1d21; }
.workspace-customerSearch .dropdown-menu__item { color: #fff; }
.dropdown-menu__item.ng-binding:hover { background-color: #7e7e7e; }
.btn.btn-brand-white { background-color: #1a1d21; color: #34beff; }
.btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); }
//Chat
.chat-date-human { background: #1a1d21; }
.chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #1a1d21; color: #fff; }
.content .entry.user-unread { background-color: #3c0713; }
.content .chat-message-sender { color: #63aef9; }

.form-control { background-color: #1a1d21; }
.dropdown-menu > li > a { color: #fff; border: 1px solid #747474; }
.chat-form .chat-tools-area { background-color: #1a1d21; border: 1px solid #000; }
.chat-upload .drop-zone { background-color: #181818; }
//Chatout
.notification-modal .modal-content { background-color: #1a1d21; }
.notification-modal { background: rgb(2 22 42 / 70%); }
//Right sidebar
.right-sidebar { background: #1a1d21; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #1a1d21; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #1a1d21; color: #fff; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgb(36 36 36); color: #fff; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: #000; color: #0fa6ed; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #fff; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #1a1d21; }
.typeahead-custom .typeahead-custom-i { background-color: #000; }
.typeahead-custom .typeahead-custom-i:hover { background: rgb(40 40 40 / 70%); }
.loader-cover-area { background-color: rgb(7 21 28 / 83%); }
.btn.btn-brand-alert { background: #780101; }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: #d33030; }
.panel-left { background-color: #04101e; }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; }

.chat-message-time-tolltip { color: #fff; }
.chat-message-component .chat-icr-component-resolved button { color: #fff; }
.content .entry.user { background-color: #172c0c; }
.content .entry.bot { background-color: #122934; }
.chat-message-download-title { color: #2e85e5; }
*/

//CSS Black
/*
body { background-color: #000; color: #fff; }
.content-header { background: #000; color: #fff; }
.content-helper { background: #000; color: #fff; }
.form-control { color: #fff; }
.dropdown-menu { background-color: #000; }
.workspace-customerSearch .dropdown-menu__item { color: #fff; }
.dropdown-menu__item.ng-binding:hover { background-color: #545454; }
.btn.btn-brand-white { background-color: #000; color: #34beff; }
.btn.btn-brand-white:hover { border: 2px solid rgb(43 228 255 / 89%); }
//Chat
.chat-date-human { background: #000; }
.chat-date-human span, .chat-delimiter span, .chat-completed-component span { background: #000; color: #fff; }
.content .entry.user-unread { background-color: #3c0713; }
.content .chat-message-sender { color: #63aef9; }

.form-control { background-color: #000; }
.dropdown-menu > li > a { color: #fff; border: 1px solid #747474; }
.chat-form .chat-tools-area { background-color: #000; border: 1px solid #666; }
.chat-upload .drop-zone { background-color: #181818; }
//Chatout
.notification-modal .modal-content { background-color: #000; }
.notification-modal { background: rgb(2 22 42 / 70%); }
//Right sidebar
.right-sidebar { background: #000; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content { background: #000; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select { background: #fafafa; color: #fff; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li a { background: rgb(36 36 36); color: #fff; }
.profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a { background: #000; color: #0fa6ed; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name { color: #e9e9e9; }
.profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input { background-color: #000; }
.typeahead-custom .typeahead-custom-i { background-color: #000; }
.typeahead-custom .typeahead-custom-i:hover { background: rgb(40 40 40 / 70%); }
.loader-cover-area { background-color: rgb(7 21 28 / 83%); }
.btn.btn-brand-alert { background: #780101; }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus { background: #d33030; }
.panel-left { background-color: rgb(1 6 12); }
.btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus { background-color: #d70000; }

.chat-message-time-tolltip { color: #fff; }
.chat-message-component .chat-icr-component-resolved button { color: #fff; }
.content .entry.user { background-color: #0b1c02; }
.content .entry.bot { background-color: #06161e; }
.chat-message-download-title { color: #1863b7; }
*/

function saveDesMain1Chat() {
	chrome.storage.local.set({"desChatMainLocalsave": "1"});
}
function saveDesMain2Chat() {
	chrome.storage.local.set({"desChatMainLocalsave": "2"});
}
function saveDesMain3Chat() {
	chrome.storage.local.set({"desChatMainLocalsave": "3"});
}

$(document).ready(function(){
	$("body").append('<a href="#" id="unlockScreenBlockers" class="unlockScreenBlockersStyle">🔓</a>');	
	
	/*
	$('.logo').parent().append('<span>\
	<input type="radio" id="toggle3radio1des" class=radio1des name="toggle3" onchange=\'$("body").css({"background-color": "#fff", "color": "#1c2e42"}); $(".content-header").css({"background": "#fff", "color": "#000"}); $(".content-helper").css({"background": "#fff", "color": "#000"}); $(".form-control").css({"color": "#1c2e42"}); $(".dropdown-menu").css({"background-color": "#fff"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#1c2e42"}); $(".dropdown-menu__item.ng-binding:hover").css({"background-color": "#293d48"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#293d48"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#fff", "color": "#2899ce"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#fff"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#fff", "color": "#1c2e42"}); $(".content .entry.user-unread").css({"background-color": "#dbc5ca"}); $(".content .chat-message-sender").css({"color": "#2c3e50"}); $(".form-control").css({"background-color": "#fff"}); $(".dropdown-menu > li > a").css({"border": "none", "color": "#555"}); $(".chat-form .chat-tools-area").css({"background-color": "#bcdaff", "border": "none"}); $(".chat-upload .drop-zone").css({"background-color": "#d1e2ff"}); $(".notification-modal .modal-content").css({"background-color": "#fff"}); $(".notification-modal").css({"background": "rgba(40, 153, 206, 0.7)"}); $(".right-sidebar").css({"background": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#fafafa"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgba(227, 227, 227, 0.3)", "color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "none", "color": "#2899ce"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgba(40, 153, 206, 0.1)"}); $(".loader-cover-area").css({"background-color": "rgba(40, 153, 206, 0.75)"}); $(".btn.btn-brand-alert").css({"background": "linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%)"}); $(".panel-left").css({"background-color": "#1c2e42"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\' checked/>\
	<input type="radio" id="toggle3radio2des" class=radio2des name="toggle3" onchange=\'$("body").css({"background-color": "#1a1d21", "color": "#fff"}); $(".content-header").css({"background": "#1a1d21", "color": "#fff"}); $(".content-helper").css({"background": "#1a1d21", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#1a1d21"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#7e7e7e"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#1a1d21", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#1a1d21"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#1a1d21", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#1a1d21"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#1a1d21", "border": "1px solid #000"}); $(".chat-upload .drop-zone").css({"background-color": "#000"}); $(".notification-modal .modal-content").css({"background-color": "#1a1d21"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#1a1d21", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "#000", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "rgb(36 36 36)", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#1a1d21"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "#04101e"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\'/>\
	<input type="radio" id="toggle3radio3des" class=radio3des name="toggle3" onchange=\'$("body").css({"background-color": "#000", "color": "#fff"}); $(".content-header").css({"background": "#000", "color": "#fff"}); $(".content-helper").css({"background": "#000", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#000"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#545454"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#000", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#000"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#000", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#000"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#000", "border": "1px solid #666"}); $(".chat-upload .drop-zone").css({"background-color": "#181818"}); $(".notification-modal .modal-content").css({"background-color": "#000"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgb(36 36 36)", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "#000", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#e9e9e9"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "rgb(1 6 12)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\'/><span class=sliderContainer> <label class="label1des" for="toggle3radio1des"></label> <label class="label2des" for="toggle3radio2des"></label> <label class="label3des" for="toggle3radio3des"></label> <span class="slider"></span></span></span>');
	*/
	
	
	//saveDesMain2Chat(); saveDesMain3Chat(); saveDesMain1Chat();
	
	
	//$('.logo').parent().append('<span id="stylerChangerChatik"> <a href="#" id="chatwhitedes" onclick=\'document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = false; document.getElementById("chatblackdes").hidden = true; $("body").css({"background-color": "#1a1d21", "color": "#fff"}); $(".content-header").css({"background": "#1a1d21", "color": "#fff"}); $(".content-helper").css({"background": "#1a1d21", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#1a1d21"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#7e7e7e"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#1a1d21", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#1a1d21"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#1a1d21", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#1a1d21"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#1a1d21", "border": "1px solid #000"}); $(".chat-upload .drop-zone").css({"background-color": "#000"}); $(".notification-modal .modal-content").css({"background-color": "#1a1d21"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#1a1d21", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "#000", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "rgb(36 36 36)", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#1a1d21"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "#04101e"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\' style="text-decoration: none;" hidden>☀️</a> <a href="#" id="chatbluedes" onclick=\'document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = false; $("body").css({"background-color": "#000", "color": "#fff"}); $(".content-header").css({"background": "#000", "color": "#fff"}); $(".content-helper").css({"background": "#000", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#000"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#545454"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#000", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#000"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#000", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#000"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#000", "border": "1px solid #666"}); $(".chat-upload .drop-zone").css({"background-color": "#181818"}); $(".notification-modal .modal-content").css({"background-color": "#000"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgb(36 36 36)", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "#000", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#e9e9e9"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "rgb(1 6 12)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\' style="text-decoration: none;" hidden>🔆</a> <a href="#" id="chatblackdes" onclick=\'document.getElementById("chatwhitedes").hidden = false; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = true; $("body").css({"background-color": "#fff", "color": "#1c2e42"}); $(".content-header").css({"background": "#fff", "color": "#000"}); $(".content-helper").css({"background": "#fff", "color": "#000"}); $(".form-control").css({"color": "#1c2e42"}); $(".dropdown-menu").css({"background-color": "#fff"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#1c2e42"}); $(".dropdown-menu__item.ng-binding:hover").css({"background-color": "#293d48"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#293d48"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#fff", "color": "#2899ce"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#fff"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#fff", "color": "#1c2e42"}); $(".content .entry.user-unread").css({"background-color": "#dbc5ca"}); $(".content .chat-message-sender").css({"color": "#2c3e50"}); $(".form-control").css({"background-color": "#fff"}); $(".dropdown-menu > li > a").css({"border": "none", "color": "#555"}); $(".chat-form .chat-tools-area").css({"background-color": "#bcdaff", "border": "none"}); $(".chat-upload .drop-zone").css({"background-color": "#d1e2ff"}); $(".notification-modal .modal-content").css({"background-color": "#fff"}); $(".notification-modal").css({"background": "rgba(40, 153, 206, 0.7)"}); $(".right-sidebar").css({"background": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#fafafa"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgba(227, 227, 227, 0.3)", "color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "none", "color": "#2899ce"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgba(40, 153, 206, 0.1)"}); $(".loader-cover-area").css({"background-color": "rgba(40, 153, 206, 0.75)"}); $(".btn.btn-brand-alert").css({"background": "linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%)"}); $(".panel-left").css({"background-color": "#1c2e42"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});\' style="text-decoration: none;" hidden>🌙</a> </span>');
	
	
	
	
	
	if (document.getElementById("unlockScreenBlockers") != null) { document.getElementById("unlockScreenBlockers").onclick = function deleteAllBlockers(){
		if(document.getElementsByClassName("modal")[0] != undefined){ blockerElementChat = document.getElementsByClassName("modal")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("react-confirm-alert-body")[0] != undefined){ blockerElementChat = document.getElementsByClassName("react-confirm-alert-body")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("loader-wrapper_AaVrp")[0] != undefined){ blockerElementChat = document.getElementsByClassName("loader-wrapper_AaVrp")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("react-confirm-alert-overlay")[0] != undefined){ blockerElementChat = document.getElementsByClassName("react-confirm-alert-overlay")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("popup-modal_1z-N8")[0] != undefined){ blockerElementChat = document.getElementsByClassName("popup-modal_1z-N8")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("popup-modal_fullscreen_2Nimt")[0] != undefined){ blockerElementChat = document.getElementsByClassName("popup-modal_fullscreen_2Nimt")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("hj-decision-loader")[0] != undefined){ blockerElementChat = document.getElementsByClassName("hj-decision-loader")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("loader-cover-area")[0] != undefined){ blockerElementChat = document.getElementsByClassName("loader-cover-area")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("modal-backdrop")[0] != undefined){ blockerElementChat = document.getElementsByClassName("modal-backdrop")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
		if(document.getElementsByClassName("popup_3xxDP")[0] != undefined){ blockerElementChat = document.getElementsByClassName("popup_3xxDP")[0]; blockerElementChat.parentNode.removeChild(blockerElementChat); }
	}} else { console.log("unlockScreenBlockers DOES NOT EXIST"); };
});

(window.onload = function() {
	createSettingsMainQChat();
})();


function createSettingsMainQChat() {
	setTimeout( function() {
		
		if ( $('#settingsBtnChat').text() == '⚙️') {
			loadSettingsMainQChat();
			saveSettingsMainQChat();
			logoutMagicChat();
			level1FixesChat();
			benefitsWalletMagicChat();
			cleanStyleCSSChat();
			console.log("Settings injected");
			return;
		}
		else { console.log("Waiting for injection");
		
	$('button:contains("My profile")').parent().parent().append(settingsbuttoncode);
	
	$("body").append('<div id="settingsModal" class="settingsModalcss"> <div class="modal-content-css-setchat"> <span id="settingsBtncloser" class="closesettings">Save & Close</span> <!-- Main Design --> <div class="tg-wrap"> <table class="tg"> <thead> <div class="tg-wrap"> <table class="tg"> <thead> <tr hidden> <th class="tg-c3ow" colspan="8">Chat CRM Settings</th> </tr> </thead> <tbody> <tr style="border-bottom: 1px solid #424242;"> <td class="tg-c3ow" colspan="4" style="text-align: right; font-size: 28px;">Page style:</td> <td class="tg-c3ow" colspan="2"> <span id="stylerChangerChatik"> <a href="#" id="chatwhitedes" onclick=\'document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = false; document.getElementById("chatblackdes").hidden = true; $("body").css({"background-color": "#1a1d21", "color": "#fff"}); $(".content-header").css({"background": "#1a1d21", "color": "#fff"}); $(".content-helper").css({"background": "#1a1d21", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#1a1d21"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#7e7e7e"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#1a1d21", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#1a1d21"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#1a1d21", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#1a1d21"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#1a1d21", "border": "1px solid #000"}); $(".chat-upload .drop-zone").css({"background-color": "#000"}); $(".notification-modal .modal-content").css({"background-color": "#1a1d21"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#1a1d21"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#1a1d21", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "#000", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "rgb(36 36 36)", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#1a1d21"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "#04101e"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"}); $(".chat-message-time-tolltip").css({"color": "#fff"}); $(".chat-message-component .chat-icr-component-resolved button").css({"color": "#fff"}); $(".content .entry.user").css({"background-color": "#172c0c"}); $(".content .entry.bot").css({"background-color": "#122934"}); $(".chat-message-download-title").css({"color": "#2e85e5"});\' style="text-align: left; text-decoration: none; font-size: 28px;" hidden>☀️Bright</a> <a href="#" id="chatbluedes" onclick=\'document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = false; $("body").css({"background-color": "#000", "color": "#fff"}); $(".content-header").css({"background": "#000", "color": "#fff"}); $(".content-helper").css({"background": "#000", "color": "#fff"}); $(".form-control").css({"color": "#fff"}); $(".dropdown-menu").css({"background-color": "#000"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#545454"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#000", "color": "#34beff"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#000"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#000", "color": "#fff"}); $(".content .entry.user-unread").css({"background-color": "#3c0713"}); $(".content .chat-message-sender").css({"color": "#63aef9"}); $(".form-control").css({"background-color": "#000"}); $(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"}); $(".chat-form .chat-tools-area").css({"background-color": "#000", "border": "1px solid #666"}); $(".chat-upload .drop-zone").css({"background-color": "#181818"}); $(".notification-modal .modal-content").css({"background-color": "#000"}); $(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"}); $(".right-sidebar").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#000", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgb(36 36 36)", "color": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "#000", "color": "#0fa6ed"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#e9e9e9"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"}); $(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"}); $(".btn.btn-brand-alert").css({"background": "#780101"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"}); $(".panel-left").css({"background-color": "rgb(1 6 12)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"}); $(".chat-message-time-tolltip").css({"color": "#fff"}); $(".chat-message-component .chat-icr-component-resolved button").css({"color": "#fff"}); $(".content .entry.user").css({"background-color": "#0b1c02"}); $(".content .entry.bot").css({"background-color": "#06161e"}); $(".chat-message-download-title").css({"color": "#1863b7"});\' style="text-align: left; text-decoration: none; font-size: 28px;" hidden>🔆Dark</a> <a href="#" id="chatblackdes" onclick=\'document.getElementById("chatwhitedes").hidden = false; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = true; $("body").css({"background-color": "#fff", "color": "#1c2e42"}); $(".content-header").css({"background": "#fff", "color": "#000"}); $(".content-helper").css({"background": "#fff", "color": "#000"}); $(".form-control").css({"color": "#1c2e42"}); $(".dropdown-menu").css({"background-color": "#fff"}); $(".workspace-customerSearch .dropdown-menu__item").css({"color": "#1c2e42"}); $(".dropdown-menu__item.ng-binding:hover").css({"background-color": "#293d48"}); $( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css("background-color", "#293d48"); }, function() { $( this ).css("background", "inherit"); } ); $(".btn.btn-brand-white").css({"background-color": "#fff", "color": "#2899ce"}); $(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"}); $(".chat-date-human").css({"background": "#fff"}); $(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#fff", "color": "#1c2e42"}); $(".content .entry.user-unread").css({"background-color": "#dbc5ca"}); $(".content .chat-message-sender").css({"color": "#2c3e50"}); $(".form-control").css({"background-color": "#fff"}); $(".dropdown-menu > li > a").css({"border": "none", "color": "#555"}); $(".chat-form .chat-tools-area").css({"background-color": "#bcdaff", "border": "none"}); $(".chat-upload .drop-zone").css({"background-color": "#d1e2ff"}); $(".notification-modal .modal-content").css({"background-color": "#fff"}); $(".notification-modal").css({"background": "rgba(40, 153, 206, 0.7)"}); $(".right-sidebar").css({"background": "#fff"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#fafafa"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#000"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgba(227, 227, 227, 0.3)", "color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "none", "color": "#2899ce"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#1c2e42"}); $(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i").css({"background-color": "#fff"}); $(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgba(40, 153, 206, 0.1)"}); $(".loader-cover-area").css({"background-color": "rgba(40, 153, 206, 0.75)"}); $(".btn.btn-brand-alert").css({"background": "linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%)"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%)"}); $(".panel-left").css({"background-color": "#1c2e42"}); $(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"}); $(".chat-message-time-tolltip").css({"color": "#1c2e42"}); $(".chat-message-component .chat-icr-component-resolved button").css({"color": "#1c2e42"}); $(".content .entry.user").css({"background-color": "#f1faec"}); $(".content .entry.bot").css({"background-color": "#EAF5FA"}); $(".chat-message-download-title").css({"color": "#1c2e42"});\' style="text-align: left; text-decoration: none; font-size: 28px;" hidden>🌙Void</a> </span> </td> </tr> <tr> <td colspan="1"></td> <td class="hasTooltip" colspan="1" style="text-align: right;">💬<span>While enabled, will rearange some items on screen to make space usage more efficient</span></td> <td class="tg-c3ow" colspan="3">Tidy up design</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="chatFix1"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td colspan="1"></td> </tr> <tr> <td class="hasTooltip">💬<span>While enabled, will expand call recording preview to full width of the screen</span></td> <td class="tg-c3ow" colspan="2">Expanded Recording Preview</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="chatFix2"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>Will load Benefits Wallet inside of Insurance tab and no longer blocks the whole screen. To close/reload simply change tab to any other than Insurance</span></td> <td class="tg-c3ow" colspan="1">Inline Benefits Wallet</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="chatFix3"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> <tr> <td class="hasTooltip">💬<span>When enabled, near the group name there will be quick link that will open search in KB for a group name, only useful when for some reason the group in CRM profile is not a link and just a text</span></td> <td class="tg-c3ow" colspan="2">Add group search button</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="chatFix4"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> <td class="hasTooltip">💬<span>While enabled, you will need to press Logout button 3 times to log yourself out (prevents accidental logout)</span></td> <td class="tg-c3ow" colspan="1">Require 3 clicks to logout</td> <td class="tg-c3ow" colspan="1"> <div class="setswitchbutton-mini r switch-settings-div-style-mini button-cover-mini"> <input type="checkbox" class="setswitchcheckboxmini" name="chatFix5"> <div class="knobs-mini"> <span></span> </div> <div class="layer-mini"></div> </div> </td> </tr> </tbody> </table> </div> </thead> </table> </div> </div></div>')
	
	
	settingsModal = document.getElementById("settingsModal");
	settingsBtn = document.getElementById("settingsBtnChat");
	settingsBtncloser = document.getElementById("settingsBtncloser");
	spanSettingsCloser = document.getElementsByClassName("closesettings")[0];
	if (settingsBtn != null) { settingsBtn.onclick = function() { settingsModal.style.display = "block"; } }
	
		createSettingsMainQChat(); }
	}, 500)
}

function loadSettingsMainQChat() {
	chrome.storage.local.get(['chatFix1Localsave'], function(result) {
		if (result.chatFix1Localsave == "0") { $("input[name=chatFix1]").prop('checked', false); redesignStatusChat = "0"; } else { $("input[name=chatFix1]").prop('checked', true); redesignStatusChat = "1"; };
	}); // Redesign
	chrome.storage.local.get(['crmFix7Localsave'], function(result) {
		if (result.crmFix7Localsave == "0") { $("input[name=chatFix2]").prop('checked', false); } else { $("input[name=chatFix2]").prop('checked', true); };
	}); // Expanded Recording Preview
	chrome.storage.local.get(['crmFix2Localsave'], function(result) {
		if (result.crmFix2Localsave == "0") { $("input[name=chatFix3]").prop('checked', false); benefitsWalletStatusChat = "0"; } else { $("input[name=chatFix3]").prop('checked', true); benefitsWalletStatusChat = "1"; };
	}); // Inline Benefits Wallet
	chrome.storage.local.get(['crmFix5Localsave'], function(result) {
		if (result.crmFix5Localsave == "0") { $("input[name=chatFix4]").prop('checked', false); addSearchgroupStatusChat = "0"; } else { $("input[name=chatFix4]").prop('checked', true); addSearchgroupStatusChat = "1"; };
	}); // Add group search button
	chrome.storage.local.get(['crmFix4Localsave'], function(result) {
		if (result.crmFix4Localsave == "0") { $("input[name=chatFix5]").prop('checked', false); triclicksLogoutStatusChat = "0"; } else { $("input[name=chatFix5]").prop('checked', true); triclicksLogoutStatusChat = "1"; };
	}); // Require 3 clicks to logout
	
	
	chrome.storage.local.get(['desChatMainLocalsave'], function(result) {
		if (result.desChatMainLocalsave == "1") { document.getElementById("chatwhitedes").hidden = false; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = true; designSelectedChatMagic = "1"; }
		
		else if (result.desChatMainLocalsave == "2") { document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = false; document.getElementById("chatblackdes").hidden = true; designSelectedChatMagic = "2"; addCSSChat(cssGreyChatInjector); }
		
		else if (result.desChatMainLocalsave == "3") { document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = false; designSelectedChatMagic = "3"; addCSSChat(cssBlackChatInjector); }
		
		else { document.getElementById("chatwhitedes").hidden = true; document.getElementById("chatbluedes").hidden = true; document.getElementById("chatblackdes").hidden = false; }
	});
}

function saveSettingsMainQChat() {
	if (settingsBtncloser != null) { settingsBtncloser.onclick = function() { settingsModal.style.display = "none"; 
		if ($("input[name=chatFix1]").prop("checked") == true) { chrome.storage.local.set({"chatFix1Localsave": "1"}); } else { chrome.storage.local.set({"chatFix1Localsave": "0"}); };
		if ($("input[name=chatFix2]").prop("checked") == true) { chrome.storage.local.set({"crmFix7Localsave": "1"}); } else { chrome.storage.local.set({"crmFix7Localsave": "0"}); };
		if ($("input[name=chatFix3]").prop("checked") == true) { chrome.storage.local.set({"crmFix2Localsave": "1"}); } else { chrome.storage.local.set({"crmFix2Localsave": "0"}); };
		if ($("input[name=chatFix4]").prop("checked") == true) { chrome.storage.local.set({"crmFix5Localsave": "1"}); } else { chrome.storage.local.set({"crmFix5Localsave": "0"}); };
		if ($("input[name=chatFix5]").prop("checked") == true) { chrome.storage.local.set({"crmFix4Localsave": "1"}); } else { chrome.storage.local.set({"crmFix4Localsave": "0"}); };
		
		if (document.getElementById("chatwhitedes").hidden == false) { chrome.storage.local.set({"desChatMainLocalsave": "1"}); }
		else if (document.getElementById("chatbluedes").hidden == false) { chrome.storage.local.set({"desChatMainLocalsave": "2"}); }
		else if (document.getElementById("chatblackdes").hidden == false) { chrome.storage.local.set({"desChatMainLocalsave": "3"}); }
	} }
	
	
	
}

function level1FixesChat() {
	setTimeout( function() {
			if (addSearchgroupStatusChat == "0") { return; }
			else if (addSearchgroupStatusChat == "1" && document.getElementsByClassName("profile-info-header-plan")[0] != undefined && onceonlyGroupPlsChat === 0) {
				document.getElementsByClassName("profile-info-header-plan")[0].setAttribute("id","groupNameAreaBOP");
				var mmGroupLink = ($("#groupNameAreaBOP").children().next().html());
				$('#groupNameAreaBOP').append('| <a id="openChatButtonBOP" target="_blank" href="https://healthjoy.atlassian.net/wiki/search?text=' + mmGroupLink + '">Search group in KB</a> |');
				onceonlyGroupPlsChat = 1;
			}
			else { level1FixesChat(); }
	}, 650)
}

function benefitsWalletMagicChat() {
	if (benefitsWalletStatusChat == "1") {
		setTimeout( function() {
			if ($('workspace-web-view-preview-directive[type="wallet"]').html() != undefined && document.getElementById("insertBenefitsWalletDiv") == null) {
				$('workspace-web-view-preview-directive[type="wallet"]').parent().parent().append('<div style="width: auto; height: auto;" id="insertBenefitsWalletDiv"></div>');
			}
			if ($('workspace-web-view-preview-directive[type="wallet"]').html() != undefined && $('div[class="modal-layout-click-handler ng-scope"]').html() != undefined && document.getElementById("insertedBenefitsWallet") == null) {
				$('div[class="modal-layout-click-handler ng-scope"]').parent().parent().parent().attr("id","walletMovedbgRemoved1");
				$('div[class="modal-layout-click-handler ng-scope"]').attr("id","walletMovedbgRemoved2");
				$('#insertBenefitsWalletDiv').append($('div[class="modal-layout-click-handler ng-scope"]').parent().parent());
				$('#walletMovedbgRemoved1').remove();
				$('#walletMovedbgRemoved2').remove();
				$('#insertBenefitsWalletDiv').children().attr("id","insertedBenefitsWallet");
				$('button[class="btn btn-xs btn-brand-white ng-scope"]').text('Benefits Wallet').remove();
			}
		benefitsWalletMagicChat();
		}, 750)
	}
}

function logoutMagicChat() {
	if (triclicksLogoutStatusChat == "1") {
		//removes one-click logout and makes you have to click it 3 times to prevent accidental logout and loosing all tkt progress
		$('button:contains("Logout")').parent().removeAttr('ng-click');
		$('button:contains("Logout")').parent().removeAttr('href');
		$('button:contains("Logout")').text('Logout in ' + clicksbeforelogout);
		$('button:contains("Logout")').click(function() { 
			if (clicksbeforelogout<=1) { 
			window.location.href = 'https://crm.healthjoy.com/logout';
			} 
			else if (clicksbeforelogout==2) {
				clicksbeforelogout--;
			$('button:contains("Logout")').text('Logout!');	}
			else { 
			clicksbeforelogout--;
			$('button:contains("Logout")').text('Logout in ' + clicksbeforelogout);
			}
		});
	}
}

function cleanStyleCSSChat() {
	if (redesignStatusChat == "1") {
		addCSSChat('.content-header { width: calc(100% - 53.8em); } .workspace-file-upload { min-width: 220px; }  .workspace-customerSearch { justify-content: start; } .workspace-customerSearch .form-control { width: 19.5em; } .workspace-customerSearch .dropdown-menu { left: -24.4em; }  .panel-right.animate-show { padding-top: 0px; z-index: 201; } .right-sidebar { margin-top: 0px; } .profile-info .profile-info-header { height: 10.1em; } .profile-info .profile-info-header .profile-info-header-title .profile-info-header-description .profile-info-header-actions { flex-direction: row; } .profile-info .profile-info-content .profile-info-tabset .tab-content { top: 14.4em; height: calc(100% - 17.9em); } .profile-info .profile-info-footer .profile-info-footer-btns { padding: 0.1em 0 0 0; } .profile-info .profile-info-footer { height: 3.5em; } .panel-left { margin-top: 6.8em; height: calc(100% - 102px); } .content-helper { left: 0em; } ');
	}
}

function whiteStylerLiveChat() {
	$("body").css({"background-color": "#fff", "color": "#1c2e42"});
	$(".content-header").css({"background": "#fff", "color": "#000"});
	$(".content-helper").css({"background": "#fff", "color": "#000"});
	$(".form-control").css({"color": "#1c2e42"});
	$(".dropdown-menu").css({"background-color": "#fff"});
	$(".workspace-customerSearch .dropdown-menu__item").css({"color": "#1c2e42"});
	$(".dropdown-menu__item.ng-binding:hover").css({"background-color": "#293d48"});
	$( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css('background-color', '#293d48'); }, function() { $( this ).css('background', 'inherit'); } );
	$(".btn.btn-brand-white").css({"background-color": "#fff", "color": "#2899ce"});
	$(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"});
	$(".chat-date-human").css({"background": "#fff"});
	$(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#fff", "color": "#1c2e42"});
	$(".content .entry.user-unread").css({"background-color": "#dbc5ca"});
	$(".content .chat-message-sender").css({"color": "#2c3e50"});
	$(".form-control").css({"background-color": "#fff"});
	$(".dropdown-menu > li > a").css({"border": "none", "color": "#555"});
	$(".chat-form .chat-tools-area").css({"background-color": "#bcdaff", "border": "none"});
	$(".chat-upload .drop-zone").css({"background-color": "#d1e2ff"});
	$(".notification-modal .modal-content").css({"background-color": "#fff"});
	$(".notification-modal").css({"background": "rgba(40, 153, 206, 0.7)"});
	$(".right-sidebar").css({"background": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#fafafa"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#fafafa", "color": "#000"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgba(227, 227, 227, 0.3)", "color": "#1c2e42"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "none", "color": "#2899ce"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#1c2e42"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#fff"});
	$(".typeahead-custom .typeahead-custom-i").css({"background-color": "#fff"});
	$(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgba(40, 153, 206, 0.1)"});
	$(".loader-cover-area").css({"background-color": "rgba(40, 153, 206, 0.75)"});
	$(".btn.btn-brand-alert").css({"background": "linear-gradient(to bottom, #ff5a5f 0%, #ff5a5f 90%, #ef3c41 100%)"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "linear-gradient(to bottom, #ff7373 0%, #ff7373 90%, #ff4a50 100%)"});
	$(".panel-left").css({"background-color": "#1c2e42"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});
}

function greyStylerLiveChat() {
	$("body").css({"background-color": "#1a1d21", "color": "#fff"});
	$(".content-header").css({"background": "#1a1d21", "color": "#fff"});
	$(".content-helper").css({"background": "#1a1d21", "color": "#fff"});
	$(".form-control").css({"color": "#fff"});
	$(".dropdown-menu").css({"background-color": "#1a1d21"});
	$(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"});
	$( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css('background-color', '#7e7e7e'); }, function() { $( this ).css('background', 'inherit'); } );
	$(".btn.btn-brand-white").css({"background-color": "#000", "color": "#34beff"});
	$(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"});
	$(".chat-date-human").css({"background": "#1a1d21"});
	$(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#1a1d21", "color": "#fff"});
	$(".content .entry.user-unread").css({"background-color": "#3c0713"});
	$(".content .chat-message-sender").css({"color": "#63aef9"});
	$(".form-control").css({"background-color": "#1a1d21"});
	$(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"});
	$(".chat-form .chat-tools-area").css({"background-color": "#1a1d21", "border": "1px solid #000"});
	$(".chat-upload .drop-zone").css({"background-color": "#000"});
	$(".notification-modal .modal-content").css({"background-color": "#1a1d21"});
	$(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"});
	$(".right-sidebar").css({"background": "#1a1d21"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#1a1d21"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#1a1d21", "color": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "#000", "color": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "rgb(36 36 36)", "color": "#0fa6ed"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#1a1d21"});
	$(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"});
	$(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"});
	$(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"});
	$(".btn.btn-brand-alert").css({"background": "#780101"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"});
	$(".panel-left").css({"background-color": "#04101e"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});
}

function blackStylerLiveChat() {
	$("body").css({"background-color": "#000", "color": "#fff"});
	$(".content-header").css({"background": "#000", "color": "#fff"});
	$(".content-helper").css({"background": "#000", "color": "#fff"});
	$(".form-control").css({"color": "#fff"});
	$(".dropdown-menu").css({"background-color": "#000"});
	$(".workspace-customerSearch .dropdown-menu__item").css({"color": "#fff"});
	$( ".dropdown-menu__item.ng-binding" ).hover( function() { $( this ).css('background-color', '#545454'); }, function() { $( this ).css('background', 'inherit'); } );
	$(".btn.btn-brand-white").css({"background-color": "#000", "color": "#34beff"});
	$(".btn.btn-brand-white:hover").css({"border": "2px solid rgb(43 228 255 / 89%)"});
	$(".chat-date-human").css({"background": "#000"});
	$(".chat-date-human span, .chat-delimiter span, .chat-completed-component span").css({"background": "#000", "color": "#fff"});
	$(".content .entry.user-unread").css({"background-color": "#3c0713"});
	$(".content .chat-message-sender").css({"color": "#63aef9"});
	$(".form-control").css({"background-color": "#000"});
	$(".dropdown-menu > li > a").css({"border": "1px solid #747474", "color": "#fff"});
	$(".chat-form .chat-tools-area").css({"background-color": "#000", "border": "1px solid #666"});
	$(".chat-upload .drop-zone").css({"background-color": "#181818"});
	$(".notification-modal .modal-content").css({"background-color": "#000"});
	$(".notification-modal").css({"background": "rgb(2 22 42 / 70%)"});
	$(".right-sidebar").css({"background": "#000"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content").css({"background": "#000"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select").css({"background": "#000", "color": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li a").css({"background": "rgb(36 36 36)", "color": "#fff"});
	$(".profile-info .profile-info-content .profile-info-tabset .nav-tabs li.active a").css({"background": "#000", "color": "#0fa6ed"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name").css({"color": "#e9e9e9"});
	$(".profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content input").css({"background-color": "#000"});
	$(".typeahead-custom .typeahead-custom-i").css({"background-color": "#000"});
	$(".typeahead-custom .typeahead-custom-i:hover").css({"background": "rgb(40 40 40 / 70%)"});
	$(".loader-cover-area").css({"background-color": "rgb(7 21 28 / 83%)"});
	$(".btn.btn-brand-alert").css({"background": "#780101"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:focus").css({"background": "#d33030"});
	$(".panel-left").css({"background-color": "rgb(1 6 12)"});
	$(".btn.btn-brand-alert:hover, .btn.btn-brand-alert:active, .btn.btn-brand-alert:focus, .btn.btn-brand-alert:active:focus").css({"background-color": "#d70000"});
}


function addCSSChat(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) {   // IE
        s.styleSheet.cssText = css;
    } else {                // the world
        s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);
}