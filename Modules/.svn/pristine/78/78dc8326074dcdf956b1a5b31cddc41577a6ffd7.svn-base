/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

// Reports.js
// -----------------
// Defines the Reports  module (Model, Collection, Views, Router)
define('Reports', ['Reports.Router'

	, 'underscore', 'Utils'
], function(
	Router

	, _
) {
	'use strict';

	return {
		MenuItems: {
			id: 'reports',
			name: _('Reports').translate(),
			index:3,
			children: [{
				id: 'toppartsbyvalue',
				name: _('Top Parts By Value').translate(),
				url: 'reports/top-parts-by-value',
				index:1
			},
			{
				id: 'toppartsbyquantity',
				name: _('Top Parts By Quantity').translate(),
				url: 'reports/top-parts-by-quantity',
				index:2
			},
			{
				id: 'jobandfleet',
				name: _('Job and Fleet').translate(),
				url: 'reports/job-and-fleet',
				index:3
			},
			{
				id: 'spendbyaccount',
				name: _('Spend by Account').translate(),
				url: 'reports/spend-by-account',
				index:4
			},
			{
				id: 'documents',
				name: _('Documents').translate(),
				url: 'reports/documents',
				index:5
			}]
		}

		,
		mountToApp: function(application) {
			// Initializes the router
			return new Router(application);
		}
	};
});