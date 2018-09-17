sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.RefreshSingleEntity", {

		onRefreshSelectedPerson: function () {

			var oPersonContext = this.byId("peopleList2").getSelectedItem().getBindingContext();

			if (!oPersonContext.hasPendingChanges()) {
				oPersonContext.refresh();
			}

		}
		
		
	});

});