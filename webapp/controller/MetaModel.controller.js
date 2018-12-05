sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.MetaModel", {

		onPress: function () {
			var oModel = this.getOwnerComponent().getModel();
			var oMetaModel = oModel.getMetaModel();

			oMetaModel.requestObject("/Microsoft.OData.Service.Sample.TrippinInMemory.Models.Container/People/UserName").then(function (oValue) {
				var sData = JSON.stringify(oValue);
				MessageBox.show(sData, {
					title: "Meta Model"
				});
			});
		}
	});
});