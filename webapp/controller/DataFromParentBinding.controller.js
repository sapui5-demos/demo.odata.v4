sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.DataFromParentBinding", {

		onPersonChange: function (oEvent) {
			var oBindingContext = this.byId("peopleList").getSelectedItem().getBindingContext();
			this.byId("tripList").setBindingContext(oBindingContext);
		}

	});

});