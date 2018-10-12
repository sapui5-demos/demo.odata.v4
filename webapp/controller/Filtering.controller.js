sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter"
], function (Controller, Filter) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.Filtering", {

		onPersonChange: function (oEvent) {
			var oBindingContext = this.byId("peopleList").getSelectedItem().getBindingContext();
			this.byId("tripList").setBindingContext(oBindingContext);
		},

		onFilter1: function (oEvent) {
			var oBinding = this.byId("peopleList").getBinding("items");

			oBinding.filter(
				new Filter({
					path: "Trips",
					operator: sap.ui.model.FilterOperator.Any
				}));
		},

		onFilter2: function (oEvent) {
			var oBinding = this.byId("peopleList").getBinding("items");

			oBinding.filter(
				new Filter({
					path: "Trips",
					operator: sap.ui.model.FilterOperator.Any,
					variable: "trip",
					condition: new Filter("trip/Budget", sap.ui.model.FilterOperator.GT, 2700)
				}));
		},

		onFilter3: function (oEvent) {
			var oBinding = this.byId("peopleList").getBinding("items");

			oBinding.filter(
				new Filter({
					path: "Trips",
					operator: sap.ui.model.FilterOperator.All,
					variable: "trip",
					condition: new Filter("trip/Budget", sap.ui.model.FilterOperator.GT, 2700)
				}));
		}
	});
});