function initModel() {
	var sUrl = "/ODATA_ORG/TripPinRESTierService/(S(sv1mz4tmvvmdy4bxrxry2vke))/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}