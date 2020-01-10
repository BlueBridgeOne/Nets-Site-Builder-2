/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Reports
define('Reports.Model'
,	[	'underscore'
	,	'Backbone'
	,	'Utils'
	]
,	function (
		_
	,	Backbone
	)
{
	'use strict';

	

	// @class Reports.Model @extend Backbone.Model
	return Backbone.Model.extend(
	{
		// @property {String} urlRoot
		aurlRoot: 'services/Reports.Service.ss',
		urlRoot:'/app/site/hosting/scriptlet.nl?script=451&deploy=1&compid=1064113&h=23e7d77875b9eb28b4c9'
}
		
	);
});