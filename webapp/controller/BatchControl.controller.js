sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.BatchControl", {

		onSavePerson: function (oEvent) {
			this.getView().getModel().submitBatch("PersonUpdateGroup");
		},
		
		onCancelPerson: function (oEvent) {
			this.getView().getModel().resetChanges("PersonUpdateGroup");
		},
		
		onShowPerson: function (oEvent) {
			this.getView().getModel().submitBatch("PersonReadGroup");
		},
 
	});

});