sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.training.demo.odata.v4.controller.Parameters", {

		// Setting the header context for a property binding to $count
		/* Note: The header context needs to be set when the list binding has been resolved, for example
		   after a relative binding has been given its context with sap.ui.base.ManagedObject#setBindingContext or
		   by binding on a parent element with sap.ui.core.Element#bindElement.
		   In case the list binding is resolved initially, it is sufficient to set the header context
		   in sap.ui.core.mvc.Controller#onBeforeRendering. */
		onBeforeRendering: function () {

			var oView = this.getView();

			// The ODataListBinding provides a header context which holds header information like inline count for the list.
			// Request the header context which allows binding to $count
			var oHeaderContext = oView.byId("peopleList").getBinding("items").getHeaderContext();

			// Set the binding context for the relative property binding with path "$count" to the header context.
			// With this, the property binding's value is the list's inline count.
			oView.byId("peopleTitle").setBindingContext(oHeaderContext);

		}

	});

});