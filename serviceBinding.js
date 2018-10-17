function initModel() {
	var sUrl = "/ODATA_ORG/V4/TripPinService/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}