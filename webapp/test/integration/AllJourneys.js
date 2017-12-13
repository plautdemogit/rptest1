jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"namegit1/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"namegit1/test/integration/pages/Worklist",
		"namegit1/test/integration/pages/Object",
		"namegit1/test/integration/pages/NotFound",
		"namegit1/test/integration/pages/Browser",
		"namegit1/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "namegit1.view."
	});

	sap.ui.require([
		"namegit1/test/integration/WorklistJourney",
		"namegit1/test/integration/ObjectJourney",
		"namegit1/test/integration/NavigationJourney",
		"namegit1/test/integration/NotFoundJourney",
		"namegit1/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});