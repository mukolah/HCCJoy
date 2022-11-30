var $ = window.jQuery;

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

var tktIdShownStatusFC;

//$(document).ready(function(){
//    pageInit();
//});

$(document).ready(function(){
	loadSettingsMainFCQ();
	injectDesignFCQ();
	pageInit();
});

function pageInit() {
	setTimeout( function() {
			if ($('div[class="heading_3Bu89 heading_gradation-4_3ZjcD heading_semibold_2nnfU mb-semilarge"]:contains("Intake information")').text() == "Intake information") {
                console.log("Load completed - Find Care DC");
				//stylingInit();
				
				if(tktIdShownStatusFC == "1"){
				$('#tktidtext').text($('a:contains("TicketID=")').text().substring(64));
				document.getElementById("tktidtext").hidden = false;
				}
				
                return;
            }
            else {
				console.log("Waiting for page to load...");
				pageInit();
            }
	}, 500)
}

var stylingTimer = 2;
function stylingInit() {
	setTimeout( function() {
			if (stylingTimer <= 1) {
				//$('button > span:contains("Preview card")').parent().parent().attr("id", "previewCard");
				//$("#previewCard").appendTo($('h1[class="workspace-disconnected-title ng-hide"]').parent());
				
				console.log("Styling completed!");
				return;
            }

            if (stylingTimer >= 2) {
				console.log("Styling waiting...");
				stylingInit();
                stylingTimer--;
            }
	}, 1000)
}

function injectDesignFCQ() {
	//Settings button
	setTimeout( function() {
		
		if ( $('#settingsBtn').text() == 'Settings') {
			loadSettingsMainFCQ();
			return;
		}
		else { console.log("Waiting for injection");
		
		injectDesignFCQ(); }
	}, 500)
}

function loadSettingsMainFCQ() {
	// Main Design Save
	chrome.storage.local.get(['sradMainLocalsave'], function(result) {
		if (result.sradMainLocalsave != "1" && result.sradMainLocalsave != "1" && result.sradMainLocalsave != "2" && result.sradMainLocalsave != "3") { colorBlackFull = ""; colorWhiteFull = ""; accent075Color = ""; colorBg = ""; colorFront = ""; accentBgColor = ""; accentHoverColor = ""; accentFrontColor = ""; accent06Color = ""; }; // No save 
		
		if (result.sradMainLocalsave == "1") { completelyWhiteStyleFC(); colorBg = "rgb(240, 240, 240)"; colorFront = "#000"; accentsWhitebgFC();}; // sraddefwhite
		if (result.sradMainLocalsave == "2") { completelyGreyStyleFC(); accentsWhitebgFC(); colorBg = "#303134"; colorFront = "#ffffff";}; // sraddarkmain
		if (result.sradMainLocalsave == "3") { completelyBlackStyleFC(); colorBg = "rgb(15, 15, 15)"; colorFront = "#dbdbdb"; accentsBlackbgFC(); }; // sradblackmain
	});
	
	chrome.storage.local.get(['crmFix6Localsave'], function(result) {
		if (result.crmFix6Localsave == "0") { tktIdShownStatusFC = "0"; } else { tktIdShownStatusFC = "1"; console,log("YREYSYESY"); };
	}); // Show TKT ID on top of the page
}


function accentsWhitebgFC() {
	chrome.storage.local.get(['sradAccentLocalsave'], function(result) {
		if (result.sradAccentLocalsave != "1" && result.sradAccentLocalsave != "2" && result.sradAccentLocalsave != "3" && result.sradAccentLocalsave != "4" && result.sradAccentLocalsave != "5" && result.sradAccentLocalsave != "6" && result.sradAccentLocalsave != "7" && result.sradAccentLocalsave != "8") { accentBgColor = "#8213a1"; accentHoverColor = "#8213a1"; accentFrontColor = "#8d0eb0"; accent06Color = "rgba(141, 14, 176, 0.6)"; }; // No save
		
		if (result.sradAccentLocalsave == "1") { accentBgColor = "#636363"; accentHoverColor = "#636363"; accentFrontColor = "#7d7d7d"; accent06Color = "rgba(125, 125, 125, 0.6)"; }; // sradgrey
		if (result.sradAccentLocalsave == "2") { accentBgColor = "#2899ce"; accentHoverColor = "#2899ce"; accentFrontColor = "#249dd6"; accent06Color = "rgba(36, 157, 214, 0.6)"; }; // sradblue
		if (result.sradAccentLocalsave == "3") { accentBgColor = "#13a126"; accentHoverColor = "#13a126"; accentFrontColor = "#0eb324"; accent06Color = "rgba(14, 179, 36, 0.6)"; }; // sradgreen
		if (result.sradAccentLocalsave == "4") { accentBgColor = "#c5c500"; accentHoverColor = "#c5c500"; accentFrontColor = "#d1d100"; accent06Color = "rgba(209, 209, 0, 0.6)"; }; // sradyellow
		if (result.sradAccentLocalsave == "5") { accentBgColor = "#c51818"; accentHoverColor = "#c51818"; accentFrontColor = "#d41313"; accent06Color = "rgba(212, 19, 19, 0.6)"; }; // sradred
		if (result.sradAccentLocalsave == "6") { accentBgColor = "#a16813"; accentHoverColor = "#a16813"; accentFrontColor = "#b8740f"; accent06Color = "rgba(184, 116, 15, 0.6)"; }; // sradorange
		if (result.sradAccentLocalsave == "7") { accentBgColor = "#8213a1"; accentHoverColor = "#8213a1"; accentFrontColor = "#8d0eb0"; accent06Color = "rgba(141, 14, 176, 0.6)"; }; // sradpurple
		if (result.sradAccentLocalsave == "8") { accentBgColor = "#c20ea4"; accentHoverColor = "#c20ea4"; accentFrontColor = "#d108b0"; accent06Color = "rgba(209, 8, 176, 0.6)"; }; // sradpink
	});
}

function accentsBlackbgFC() {
	chrome.storage.local.get(['sradAccentLocalsave'], function(result) {
		if (result.sradAccentLocalsave != "1" && result.sradAccentLocalsave != "2" && result.sradAccentLocalsave != "3" && result.sradAccentLocalsave != "4" && result.sradAccentLocalsave != "5" && result.sradAccentLocalsave != "6" && result.sradAccentLocalsave != "7" && result.sradAccentLocalsave != "8") { accentBgColor = "#71118d"; accentHoverColor = "#5c1d6e"; accentFrontColor = "#8213a1"; accent06Color = "rgba(112, 22, 138, 0.6)"; }; // No save
		
		if (result.sradAccentLocalsave == "1") { accentBgColor = "#4a4a4a"; accentHoverColor = "#404040"; accentFrontColor = "#878787"; accent06Color = "rgba(94, 94, 94, 0.6)"; }; // sradgrey
		if (result.sradAccentLocalsave == "2") { accentBgColor = "#0c519b"; accentHoverColor = "#076ddb"; accentFrontColor = "#117bed"; accent06Color = "rgba(7, 109, 219, 0.6)"; }; // sradblue
		if (result.sradAccentLocalsave == "3") { accentBgColor = "#158d11"; accentHoverColor = "#206e1d"; accentFrontColor = "#24a113"; accent06Color = "rgba(32, 138, 22, 0.6)"; }; // sradgreen
		if (result.sradAccentLocalsave == "4") { accentBgColor = "#bfb90b"; accentHoverColor = "#6d6e1d"; accentFrontColor = "#a19c13"; accent06Color = "rgba(138, 130, 22, 0.6)"; }; // sradyellow
		if (result.sradAccentLocalsave == "5") { accentBgColor = "#8d1111"; accentHoverColor = "#6e1d1d"; accentFrontColor = "#a11313"; accent06Color = "rgba(138, 22, 22, 0.6)"; }; // sradred
		if (result.sradAccentLocalsave == "6") { accentBgColor = "#8d4b11"; accentHoverColor = "#6e4f1d"; accentFrontColor = "#a15f13"; accent06Color = "rgba(138, 88, 22, 0.6)"; }; // sradorange
		if (result.sradAccentLocalsave == "7") { accentBgColor = "#71118d"; accentHoverColor = "#5c1d6e"; accentFrontColor = "#8213a1"; accent06Color = "rgba(112, 22, 138, 0.6)"; }; // sradpurple
		if (result.sradAccentLocalsave == "8") { accentBgColor = "#8d1170"; accentHoverColor = "#6e1d5c"; accentFrontColor = "#a1138c"; accent06Color = "rgba(138, 22, 134, 0.6)"; }; // sradpink
	});
}

function completelyBlackStyleFC(){
	addCSSFC('/* Top panel BG */.content-header {background: '+colorBlackFull+' !important; border-bottom: none !important;} /* Body */ body {background-color: '+colorBlackFull+' !important; color: '+colorFront+' !important;} /* Bottomlest level */ #decision-center {background-color: '+colorBlackFull+' !important;} /* Behing TKT DESICION CODE:: */ .decision-otrs-ticket {background: '+colorBlackFull+' !important;} /* DC TKT Background */ #decision-form {background: '+colorBlackFull+' !important;} /* Text forms background and text */ .form-control {background-color: '+colorBg+' !important; color: '+colorFront+' !important; } /* Text line field imput background */ input {background-color: '+colorBg+' !important;} /* Selectors background and each option text */ option {background-color: '+colorBg+' !important; color: '+colorWhiteFull+' !important;} select option {color: '+colorWhiteFull+' !important;} option:hover,option:focus {background: '+accentBgColor+' !important;} option:active,option:checked {background: '+accentFrontColor+' !important;} .css-1n7v3ny-option {background-color: '+accentHoverColor+' !important; color: '+colorWhiteFull+' !important;} ::selection {background: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important;} /* OLD DC - NEW STYLE */ #decision-form .select-div_multiple select.form-control option {color: '+colorFront+' !important;} #decision-form .decision-form_block label {color: '+colorFront+' !important;} /* Decision Details Header etc text */ #decision-form .decision-form_block-title {color: '+accentFrontColor+' !important;} /* Insurance add + current neworks bars */ .css-yk16xz-control {background-color: '+colorBg+' !important;} .css-5duvv3-control {background-color: '+colorBg+' !important;} .css-1pahdxg-control {background-color: '+colorBlackFull+' !important;} .css-1g6gooi {color: '+colorFront+' !important;} .css-26l3qy-menu {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} .form-control {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} /* Messages */ .rdw-editor-main {background: '+colorWhiteFull+' !important;} .rdw-editor-toolbar {background: '+colorBlackFull+' !important;} /* Dropdown (message font, etc) */ .rdw-dropdown-wrapper {background: '+colorBlackFull+' !important;} .rdw-dropdown-optionwrapper {background: '+colorBlackFull+' !important;} .rdw-dropdownoption-active {background: '+accentFrontColor+' !important;} .rdw-dropdownoption-highlighted {background: '+accentHoverColor+' !important;} .rdw-colorpicker-modal {background: '+colorBlackFull+' !important;} .rdw-link-modal { background: '+colorBlackFull+' !important;} .rdw-link-modal-btn {background: '+colorBlackFull+' !important; } .rdw-image-modal {background: '+colorBlackFull+' !important;} .rdw-image-modal-btn {background: '+colorBlackFull+' !important;} /* DC Select option or office */ .nav-tabs > li > a {background-color: '+colorBg+' !important; color: '+colorFront+' !important;} .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {background-color: '+accentBgColor+' !important; color: '+colorFront+' !important;} /* BOrder when text area clicked */ .form-control:focus {border-color: '+accentBgColor+' !important; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important;} /* Radio buttons */ input[type="radio"] {accent-color: '+accentBgColor+' !important;} /* Buttons Bgs */ .btn-primary {background-color: '+accentBgColor+' ; border: none;} /* Radio buttons */ input[type="checkbox"] {accent-color: '+accentBgColor+' !important;} /* Top shelf buttons */ .btn.btn-brand-primary { background: '+accentBgColor+'; background-color: '+accentBgColor+' !important; } /* BTNs on hover */ .btn-primary:hover { background-color: '+accentFrontColor+' !important; } .btn.btn-brand-primary:hover { background-color: '+accentFrontColor+' !important; background: '+accentFrontColor+' !important; } /* After call menu */ .dropdown-menu { background-color: '+colorBlackFull+' !important; color: '+colorFront+' !important; } .dropdown-menu>li>a { color: '+colorFront+' !important; } .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus { background-color: '+accent06Color+' !important; } .ng-scope active { background-color: '+accentBgColor+' !important; color: '+colorFront+' !important; } .modal-body { background-color: '+colorBlackFull+' !important; color: '+colorFront+' !important; } ');
	
	addCSSFC('/* CRM dropuot */ .right-sidebar {background: '+colorBlackFull+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name {color: '+colorFront+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select {background: '+colorBlackFull+' !important; color: '+colorWhiteFull+' !important;} .panel-right {background-color: '+colorBlackFull+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content {background: '+colorBg+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .individual, .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .family {color: '+colorFront+' !important;} ');
	
	addCSSFC('/* Begining of each title */ .label-wrapper_3WkJc {color: '+colorFront+' !important;} /* Backgrounds on each block - Neon lights */ .content-section_zxWIF {background-color: '+colorTransparent+' !important;} /* Background of fields (locked) */ .select_mpPsz .select__control {background-color: '+colorBg+' !important;} /* Background of fields + txt */ .input_qJhde { background-color: '+colorBg+' !important; color: '+colorFront+' !important; } /* Selector texts */ .css-qc6sy-singleValue {color: '+colorFront+' !important;} /* ??? */ .css-vwja0k {color: '+colorFront+' !important;} /* ??? */ .table-data-grid_3R8Ob .grid-row__cell_2f-ej {background: '+colorBlackFull+' !important; color: '+colorFront+' !important;} /* Text area bg */ .textarea_1GbKJ {background-color: '+colorBg+' !important;} /* ??? */ .datepicker-wrapper_UKndU .react-datepicker-wrapper .react-datepicker__input-container input {color: '+colorFront+' !important;} /* ??? */ .tabs-wrapper-panel__item_1FD7X.tabs-panel__item_active_25sDN {color: '+accentFrontColor+' !important;} /* ??? */ .table_UwGGW .pagination_3MR1P .pagination-controls__page_2cqhr {color: '+colorWhiteFull+' !important;}');
}

function completelyWhiteStyleFC(){
	// Page preloaded
	// Make initial load be fuuly black ,then preload starts and makes it transparent
	addCSSFC('/* Top panel BG */.content-header {background: '+colorWhiteFull+' !important; border-bottom: none !important; } /* Body */ body {background-color: '+colorWhiteFull+' !important; color: '+colorFront+' !important;} /* Bottomlest level */ #decision-center {background-color: '+colorWhiteFull+' !important;} /* Behing TKT DESICION CODE:: */ .decision-otrs-ticket {background: '+colorWhiteFull+' !important;} /* DC TKT Background */ #decision-form {background: '+colorWhiteFull+' !important;} /* Text forms background and text */ .form-control {background-color: '+colorBg+' !important; color: '+colorFront+' !important; } /* Text line field imput background */ input {background-color: '+colorBg+' !important;} /* Selectors background and each option text */ option {background-color: '+colorBg+' !important; color: '+colorBlackFull+' !important;} select option {color: '+colorBlackFull+' !important;} option:hover,option:focus {background: '+accent06Color+' !important; color: '+colorWhiteFull+' !important;} option:active,option:checked {background: '+accentFrontColor+' !important; color: '+colorWhiteFull+' !important;} .css-1n7v3ny-option {background-color: '+accentHoverColor+' !important; color: '+colorWhiteFull+' !important;} ::selection {background: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important;} /* OLD DC - NEW STYLE */ #decision-form .select-div_multiple select.form-control option {color: '+colorFront+';} #decision-form .decision-form_block label {color: '+colorFront+' !important;} /* Decision Details Header etc text */ #decision-form .decision-form_block-title {color: '+accentFrontColor+' !important;} /* Insurance add + current neworks bars */ .css-yk16xz-control {background-color: '+colorBg+' !important;} /* Color of Current insurance network accepted */ .css-1in3il5 {color: '+accentFrontColor+' !important;}  .css-5duvv3-control {background-color: '+colorBg+' !important;} .css-1pahdxg-control {background-color: '+colorWhiteFull+' !important;} .css-1g6gooi {color: '+colorFront+' !important;} .css-26l3qy-menu {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} .form-control {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} /* Messages */ .rdw-editor-main {background: '+colorWhiteFull+' !important;} .rdw-editor-toolbar {background: '+colorWhiteFull+' !important;} /* Dropdown (message font, etc) */ .rdw-dropdown-wrapper {background: '+colorWhiteFull+' !important;} .rdw-dropdown-optionwrapper {background: '+colorWhiteFull+' !important;} .rdw-dropdownoption-active {background: '+accentFrontColor+' !important;} .rdw-dropdownoption-highlighted {background: '+accentHoverColor+' !important;} .rdw-colorpicker-modal {background: '+colorWhiteFull+' !important;} .rdw-link-modal { background: '+colorWhiteFull+' !important;} .rdw-link-modal-btn {background: '+colorWhiteFull+' !important; } .rdw-image-modal {background: '+colorWhiteFull+' !important;} .rdw-image-modal-btn {background: '+colorWhiteFull+' !important;} /* DC Select option or office */ .nav-tabs > li > a {background-color: '+colorBg+' !important; color: '+colorBlackFull+' !important;} .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {background-color: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important;} /* BOrder when text area clicked */ .form-control:focus {border-color: '+accentBgColor+' !important; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important;} /* Radio buttons */ input[type="radio"] {accent-color: '+accentBgColor+' !important;} /* Buttons Bgs */ .btn-primary {background-color: '+accentBgColor+' ; border: none;} /* Radio buttons */ input[type="checkbox"] {accent-color: '+accentBgColor+' !important;} /* Top shelf buttons */ .btn.btn-brand-primary { background: '+accentBgColor+'; background-color: '+accentBgColor+' !important; } /* BTNs on hover */ .btn-primary:hover { background-color: '+accentFrontColor+' !important; } .btn.btn-brand-primary:hover { background-color: '+accentFrontColor+' !important; background: '+accentFrontColor+' !important; } /* After call menu */ .dropdown-menu { background-color: '+colorWhiteFull+' !important; color: '+colorBlackFull+' !important; } .dropdown-menu>li>a { color: '+colorBlackFull+' !important; } .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus { background-color: '+accent06Color+' !important; } .ng-scope active { background-color: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important; } .modal-body { background-color: '+colorWhiteFull+' !important; color: '+colorBlackFull+' !important; } ');
	
	addCSSFC('/* CRM dropuot */ .right-sidebar {background: '+colorWhiteFull+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name {color: '+colorFront+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select {background: '+colorWhiteFull+' !important; color: '+colorBlackFull+' !important;} .panel-right {background-color: '+colorWhiteFull+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content {background: '+colorBg+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .individual, .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .family {color: '+colorFront+' !important;}');
	
	addCSSFC('/* Begining of each title */ .label-wrapper_3WkJc {color: '+colorFront+' !important;} /* Backgrounds on each block - Neon lights */ .content-section_zxWIF {background-color: '+colorTransparent+' !important;} /* Background of fields (locked) */ .select_mpPsz .select__control {background-color: '+colorBg+' !important;} /* Background of fields + txt */ .input_qJhde { background-color: '+colorBg+' !important; color: '+colorFront+' !important; } /* Selector texts */ .css-qc6sy-singleValue {color: '+colorFront+' !important;} /* ??? */ .css-vwja0k {color: '+colorFront+' !important;} /* ??? */ .table-data-grid_3R8Ob .grid-row__cell_2f-ej {background: '+colorBlackFull+' !important; color: '+colorFront+' !important;} /* Text area bg */ .textarea_1GbKJ {background-color: '+colorBg+' !important;} /* ??? */ .datepicker-wrapper_UKndU .react-datepicker-wrapper .react-datepicker__input-container input {color: '+colorFront+' !important;} /* ??? */ .tabs-wrapper-panel__item_1FD7X.tabs-panel__item_active_25sDN {color: '+accentFrontColor+' !important;} /* ??? */ .table_UwGGW .pagination_3MR1P .pagination-controls__page_2cqhr {color: '+colorWhiteFull+' !important;}');
}

function completelyGreyStyleFC(){
	// Page preloaded
	// Make initial load be fuuly black ,then preload starts and makes it transparent
	addCSSFC('/* Top panel BG */.content-header {background: '+greyPageBg+' !important; border-bottom: none !important;} /* Body */ body {background-color: '+greyPageBg+' !important; color: '+colorFront+' !important;} /* Bottomlest level */ #decision-center {background-color: '+colorTransparent+' !important;} /* Behing TKT DESICION CODE:: */ .decision-otrs-ticket {background: '+colorTransparent+' !important;} /* DC TKT Background */ #decision-form {background: '+colorTransparent+' !important;} /* Text forms background and text */ .form-control {background-color: '+colorBg+' !important; color: '+colorFront+' !important; } /* Text line field imput background */ input {background-color: '+colorBg+' !important;} /* Selectors background and each option text */ option {background-color: '+colorBg+' !important; color: '+colorWhiteFull+' !important;} select option {color: '+colorWhiteFull+' !important;} option:hover,option:focus {background: '+accentBgColor+' !important;} option:active,option:checked {background: '+accentFrontColor+' !important;} .css-1n7v3ny-option {background-color: '+accentHoverColor+' !important; color: '+colorWhiteFull+' !important;} ::selection {background: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important;} /* OLD DC - NEW STYLE */ #decision-form .select-div_multiple select.form-control option {color: '+colorFront+' !important;} #decision-form .decision-form_block label {color: '+colorFront+' !important;} /* Decision Details Header etc text */ #decision-form .decision-form_block-title {color: '+accentFrontColor+' !important;} /* Insurance add + current neworks bars */ .css-yk16xz-control {background-color: '+colorBg+' !important;} .css-5duvv3-control {background-color: '+colorBg+' !important;} .css-1pahdxg-control {background-color: '+colorBlackFull+' !important;} .css-1g6gooi {color: '+colorFront+' !important;} .css-26l3qy-menu {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} .form-control {color: '+colorFront+' !important; background-color: '+colorBg+' !important;} /* Messages */ .rdw-editor-main {background: '+colorWhiteFull+' !important;} .rdw-editor-toolbar {background: '+greyPageBg+' !important;} /* Dropdown (message font, etc) */ .rdw-dropdown-wrapper {background: '+colorBlackFull+' !important;} .rdw-dropdown-optionwrapper {background: '+colorBlackFull+' !important;} .rdw-dropdownoption-active {background: '+accentFrontColor+' !important;} .rdw-dropdownoption-highlighted {background: '+accentHoverColor+' !important;} .rdw-colorpicker-modal {background: '+colorBlackFull+' !important;} .rdw-link-modal { background: '+colorBlackFull+' !important;} .rdw-link-modal-btn {background: '+colorBlackFull+' !important; } .rdw-image-modal {background: '+colorBlackFull+' !important;} .rdw-image-modal-btn {background: '+colorBlackFull+' !important;} /* DC Select option or office */ .nav-tabs > li > a {background-color: '+colorBg+' !important; color: '+colorFront+' !important;} .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {background-color: '+accentBgColor+' !important; color: '+colorFront+' !important;} /* BOrder when text area clicked */ .form-control:focus {border-color: '+accentBgColor+' !important; -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important; box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px '+accent06Color+' !important;} /* Radio buttons */ input[type="radio"] {accent-color: '+accentBgColor+' !important;} /* Buttons Bgs */ .btn-primary {background-color: '+accentBgColor+' ; border: none;} /* Radio buttons */ input[type="checkbox"] {accent-color: '+accentBgColor+' !important;} /* Top shelf buttons */ .btn.btn-brand-primary { background: '+accentBgColor+'; background-color: '+accentBgColor+' !important; } /* BTNs on hover */ .btn-primary:hover { background-color: '+accentFrontColor+' !important; } .btn.btn-brand-primary:hover { background-color: '+accentFrontColor+' !important; background: '+accentFrontColor+' !important; } /* After call menu */ .dropdown-menu { background-color: '+greyPageBg+' !important; color: '+colorWhiteFull+' !important; } .dropdown-menu>li>a { color: '+colorWhiteFull+' !important; } .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus { background-color: '+accent06Color+' !important; } .ng-scope active { background-color: '+accentBgColor+' !important; color: '+colorWhiteFull+' !important; } .modal-body { background-color: '+greyPageBg+' !important; color: '+colorWhiteFull+' !important; } ');
	
	addCSSFC('/* CRM dropuot */ .right-sidebar {background: '+greyPageBg+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.family .profile-info-tab-l .profile-info-tab-i-name {color: '+colorFront+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .custom_select {background: '+greyPageBg+' !important; color: '+colorFront+' !important;} .panel-right {background-color: '+greyPageBg+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content .profile-table .table-body .preview-content {background: '+greyPageBg+' !important;} .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .individual, .profile-info .profile-info-content .profile-info-tabset .tab-content .profile-info-tab-content.insurance .benefits-container .benefits-i-group-td .family {color: '+colorFront+' !important;}');
	
	addCSSFC('/* Begining of each title */ .label-wrapper_3WkJc {color: '+colorFront+' !important;} /* Backgrounds on each block - Neon lights */ .content-section_zxWIF {background-color: '+colorTransparent+' !important;} /* Background of fields (locked) */ .select_mpPsz .select__control {background-color: '+colorBg+' !important;} /* Background of fields + txt */ .input_qJhde { background-color: '+colorBg+' !important; color: '+colorFront+' !important; } /* Selector texts */ .css-qc6sy-singleValue {color: '+colorFront+' !important;} /* ??? */ .css-vwja0k {color: '+colorFront+' !important;} /* ??? */ .table-data-grid_3R8Ob .grid-row__cell_2f-ej {background: '+colorBlackFull+' !important; color: '+colorFront+' !important;} /* Text area bg */ .textarea_1GbKJ {background-color: '+colorBg+' !important;} /* ??? */ .datepicker-wrapper_UKndU .react-datepicker-wrapper .react-datepicker__input-container input {color: '+colorFront+' !important;} /* ??? */ .tabs-wrapper-panel__item_1FD7X.tabs-panel__item_active_25sDN {color: '+accentFrontColor+' !important;} /* ??? */ .table_UwGGW .pagination_3MR1P .pagination-controls__page_2cqhr {color: '+colorWhiteFull+' !important;}');
}

function addCSSFC(css){
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