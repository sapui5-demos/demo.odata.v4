sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.BindingEvents", {

		onUserChange: function (oEvent) {

			var oView = this.getView();

			var oSelectedItem = this.byId("users").getSelectedItem();
			var sUser = oSelectedItem.getText();

			var oSimpleForm = this.byId("userData");
			oSimpleForm.bindElement({
				path: "/People('" + sUser + "')",
				events: {
					dataRequested: function (oEvent) {
						oView.setBusy(true);
					},

					dataReceived: function (oEvent) {
						oView.setBusy(false);
						var oError = oEvent.getParameter("error");
						if (oError) {
							MessageBox.error(oError.message, {
								title: oError.statusText
							});
						}
					}
				}
			});
		}
	});
});