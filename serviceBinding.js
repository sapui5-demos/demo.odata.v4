function initModel() {
	var sUrl = "/ODATA_ORG/V2/(S(pqjkdr2ckimklrwdlp2eoet1))/OData/OData.svc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}