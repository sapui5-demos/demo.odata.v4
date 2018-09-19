sap.ui.define(["sap/ui/model/odata/v4/ODataModel"], function (ODataModel) {

	return {
		createODataModel: function () {

			var oModel = new ODataModel({
				serviceUrl: "/ODATA_ORG/TripPinRESTierService/(S(sv1mz4tmvvmdy4bxrxry2vke))/",
				synchronizationMode: "None"
			});

			return oModel;
		}
	};
});