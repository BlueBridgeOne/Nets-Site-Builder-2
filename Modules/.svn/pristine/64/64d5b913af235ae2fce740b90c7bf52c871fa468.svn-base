/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Reports
define('Reports.Router', [

	'Reports.Model', 'Reports.Value.View', 'Profile.Model', 'Backbone'
], function(

	Model, ReportsValueView, ProfileModel, Backbone
) {
	'use strict';

	//@class Reports.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'reports/top-parts-by-value': 'topPartsByValue',
			'reports/top-parts-by-quantity': 'topPartsByQuantity',
			'reports/job-and-fleet': 'jobAndFleet',
			'reports/spend-by-account': 'spendByAccount',
			'reports/documents': 'documents'
		}

		,
		initialize: function(application) {
				this.application = application;
			}


			,
		topPartsByValue: function() {
			var model = new Model();
			var view = new ReportsValueView({ application: this.application, model: model });


			model.fetch()
				.done(function(doc) {
					view.showContent();
				});
		},
		topPartsByQuantity: function() {
			var view = new ReportsValueView({ application: this.application });
			view.showContent();
		},
		jobAndFleet: function() {
			var view = new ReportsValueView({ application: this.application });
			view.showContent();
		},
		spendByAccount: function() {
			var view = new ReportsValueView({ application: this.application });
			view.showContent();
		},
		documents: function() {
			var view = new ReportsValueView({ application: this.application });
			view.showContent();
		}


	});
});