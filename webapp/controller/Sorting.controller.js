sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Sorter"
], function (Controller, Sorter) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.Sorting", {

		onSort: function (oEvent) {
			var oBinding = this.byId("peopleList").getBinding("items");

			oBinding.sort(
				new Sorter("LastName", false));
		},

	});

});