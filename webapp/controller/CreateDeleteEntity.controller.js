sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function (Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.CreateDeleteEntity", {

		onInit: function () {
			this.getView().setModel(new JSONModel({
				hasUIChanges: false
			}), "view");
		},

		onAddPerson: function () {
			var oBinding = this.byId("peopleList").getBinding("items");

			var oContext = oBinding.create({
				"UserName": "",
				"FirstName": "",
				"LastName": "",
				"Age": ""
			});

			oContext.created().then(function () {
				oBinding.refresh();
				var sSuccessText = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("createPersonSuccessMessage");
				MessageBox.success(sSuccessText);
			}.bind(this));

			this.getView().getModel("view").setProperty("/hasUIChanges", true);

		},

		onDeletePerson: function () {
			var oItem = this.byId("peopleList").getSelectedItem();

			if (oItem) {
				var oPersonContext = oItem.getBindingContext();

				oPersonContext.delete("$auto").then(function () {
					var sSuccessText = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("deletePersonSuccessMessage");
					MessageBox.success(sSuccessText);
				}.bind(this), function (oError) {
					var sErrorText = this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("deletePersonErrorMessage");
					MessageBox.error(sErrorText + ": " + oError.message);
				}.bind(this));
			}
		},

		onSave: function () {
			var oView = this.getView();

			function resetBusy() {
				oView.setBusy(false);
				oView.getModel("view").setProperty("/hasUIChanges", oView.getModel().hasPendingChanges());
			}

			// lock UI until submitBatch is resolved, to prevent errors caused by updates while submitBatch is pending
			oView.setBusy(true);

			oView.getModel().submitBatch("peopleGroup").then(resetBusy, resetBusy);
		},

		onResetChanges: function () {
			this.byId("peopleList").getBinding("items").resetChanges();
			this.getView().getModel("view").setProperty("/hasUIChanges", false);
		},

		onInputChange: function () {
			this.getView().getModel("view").setProperty("/hasUIChanges", true);
		}

	});

});