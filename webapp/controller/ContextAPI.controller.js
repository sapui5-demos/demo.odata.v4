sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.ContextAPI", {

		onInfoPress: function (oEvent) {

			var oButton = oEvent.getSource();

			var sLastName1 = oButton.getBindingContext().getProperty("LastName");
			MessageBox.show(
				"Last name: " + sLastName1, {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Context API"
				}
			);
			//
			oButton.getBindingContext().requestProperty("LastName").then(function (sLastName2) {
				MessageBox.show(
					"Last name: " + sLastName2, {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Context API"
					}
				);
			});
			//			
			var oPerson1 = oButton.getBindingContext().getObject();
			MessageBox.show(
				"Last name: " + oPerson1.LastName, {
					icon: sap.m.MessageBox.Icon.INFORMATION,
					title: "Context API"
				}
			);
			//
			oButton.getBindingContext().requestObject().then(function (oPerson2) {
				MessageBox.show(
					"Last name: " + oPerson2.LastName, {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Context API"
					}
				);
			});
		}
	});
});