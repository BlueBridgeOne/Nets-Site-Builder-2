/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Reports.ServiceController.js
// ----------------
// Service to manage addresses requests
define(
	'Reports.ServiceController'
,	[
		'ServiceController'
	,	'Application'
	,	'Reports.Model'
	]
,	function(
		ServiceController
	,	Application
	,	ReportsModel
	)
	{
		'use strict';

		// @class Reports.ServiceController Manage addresses requests
		// @extend ServiceController
		return ServiceController.extend({

			// @property {String} name Mandatory for all ssp-libraries model
			name:'Reports.ServiceController'

			// @property {Service.ValidationOptions} options. All the required validation, permissions, etc.
			// The values in this object are the validation needed for the current service.
			// Can have values for all the request methods ('common' values) and specific for each one.
		,	options: {
				common: {
					requireLogin: true
				}
			}

			// @method get The call to Reports.Service.ss with http method 'get' is managed by this function
			// @return {Reports.Model.Attributes | Array<Reports.Model.Attributes>} one or all user addresses
		,	get: function()
			{
				var id = this.request.getParameter('internalid');
				return id ? ReportsModel.get(id) : (ReportsModel.list() || []);
			}
		});
	}
);