/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Reports.js
// ----------
// Handles fetching, creating and updating addresses
// @module Reports
define('Reports.Model'
,	[
		'SC.Model'
	,	'Models.Init'

	,	'Backbone.Validation'
	,	'underscore'
	]
,	function (
		SCModel
	,	ModelsInit

	,	BackboneValidation
	,	_
	)
{
	'use strict';

	var countries
	,	states = {};

	// @class Reports.Model Defines the model used by the Reports frontent module.
	// @extends SCModel
	return SCModel.extend({
		name: 'Reports'


		// @method get
		// @param {Number} id
		// @returns {Object} address
	,	get: function (id)
		{
			
			return {};
		}
		// @method list
		// @returns {Array<Object>} all user addresses
	,	list: function ()
		{
			return [];
		}
	});
});

//@class Reports.Data.Model This is the model to send address to the backend