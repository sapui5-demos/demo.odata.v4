sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v4/ODataModel"
], function (Controller, ODataModel) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.AutoSelect", {

		onInit: function () {

			var oModel = new ODataModel({
				serviceUrl: "/ODATA_ORG/TripPinRESTierService/(S(sv1mz4tmvvmdy4bxrxry2vke))/",
				synchronizationMode: "None",
				autoExpandSelect: true
			});

			this.getView().setModel(oModel, "autoSelectModel");

		},

		onPersonChange: function (oEvent) {
			var oBindingContext = this.byId("peopleList").getSelectedItem().getBindingContext("autoSelectModel");
			this.byId("tripList").setBindingContext(oBindingContext, "autoSelectModel");
		}

	});

});