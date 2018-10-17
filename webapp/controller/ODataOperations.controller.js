sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.ODataOperations", {

		onGetNearestAirport: function (oEvent) {
			var sLat = this.byId("latitude").getValue();
			var sLon = this.byId("longitude").getValue();

			this.byId("nearestAirport").getObjectBinding().setParameter("lat", sLat).setParameter("lon", sLon).execute();
		},

		onReset: function (oEvent) {
			this.byId("reset").getObjectBinding().execute().then(function () {
				var sSuccessMessage = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("sourceResetSuccessMessage");
				MessageToast.show(sSuccessMessage);
			}.bind(this), function (oError) {
				MessageBox.error(oError.message);
			});
		},

		onGetFavoriteAirline: function (oEvent) {
			var oModel = this.getOwnerComponent().getModel("model2"),
				oPersonContext = oEvent.getParameter("listItem").getBindingContext("model2"),
				oAction = oModel.bindContext("Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline(...)", oPersonContext);

			oAction.execute().then(
				function () {
					var oResults = oAction.getBoundContext().getObject();

					var sLabel = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("favAirlineLabelText");
					MessageBox.information(sLabel + ": " + oResults.Name);
				}.bind(this),
				function (oError) {
					MessageBox.error(oError.message);
				});
		}

	});
});