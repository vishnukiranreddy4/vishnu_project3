/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"vishnu_project2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
