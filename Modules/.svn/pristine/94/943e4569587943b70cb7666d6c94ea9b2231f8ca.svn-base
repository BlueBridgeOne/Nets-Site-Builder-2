/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Reports
define(
	'Reports.Value.View', ['Backbone.CompositeView', 'ListHeader.View', 'SC.Configuration', 'reports_value.tpl'

		, 'Backbone', 'underscore', 'jQuery', 'Utils'
	],
	function(
		BackboneCompositeView, ListHeaderView, Configuration

		, reports_value_tpl

		, Backbone, _, jQuery
	) {
		'use strict';

		//@class Reports.List.View List profile's addresses @extend Backbone.View
		return Backbone.View.extend({

			template: reports_value_tpl

				,
			page_header: _('Top Parts by Value').translate()

				,
			title: _('Top Parts by Value').translate()

				,
			initialize: function(options) {
				BackboneCompositeView.add(this);
				var self = this;
				this.application = options.application;

				//This is a fake collection object that gets called by the list header.
				this.callbackObj = {
					update: function(options) {
						
						var Today=new Date();
						Today=self.twoDigits(Today.getDay())+""+self.twoDigits(Today.getMonth())+""+self.twoDigits(Today.getFullYear());
						console.log(Today);
						if(options&&options.range&&options.range.from&&options.range.to){
						console.log(options);
						var datefrom=options.range.from.split("-").reverse().join("");
						var datetill=options.range.to.split("-").reverse().join("");
						console.log(datefrom+" "+datetill);
						}
					},
					filter: function() {

						var rows = [];
						if (self.model.get(1)) {
							return { length: self.model.get(1) };
						} else {
							return { length: 0 };
						}
					}
				};
				this.listHeader = new ListHeaderView({
					view: this,
					collection: this.callbackObj,
					application: this.application,
					rangeFilter: 'date',
					rangeFilterLabel: _('From').translate(),
					hidePagination: true
				});

			},
twoDigits:function(num){
if(num>9){
return num.toString();
}else{
return "0"+num.toString();
}
}
			,
			childViews: {
				'ListHeader.View': function() {
					return this.listHeader;
				}
			}
			//@method getBreadcrumbPages
			,
			getBreadcrumbPages: function() {
					return {
						text: this.title,
						href: '/reports/top-parts-by-value'
					};
				}

				//@method getContext @return {Reports.List.View.Context}
				,
			getContext: function() {
				console.log(this.model);

				var rows = [];
				if (this.model.get(1)) {
					rows = this.model.get(1);
					console.log("Test: " + JSON.stringify(rows, null, 4));
					for (var i = 0; i < rows.length; i++) {
						rows[i].salesdescription = rows[i].values['GROUP(item.salesdescription)'];
						rows[i].upccode = rows[i].values['GROUP(item.upccode)'];
						rows[i].amount = rows[i].values['SUM(formulacurrency)'];
						rows[i].quantity = rows[i].values['SUM(quantity)'];

					}
				}
				console.log(rows);
				//@class Reports.List.View.Context
				return {
					//@property {String} pageHeader
					pageHeader: this.page_header
						//@property {Boolean} showBackToAccount
						,
					showBackToAccount: Configuration.get('siteSettings.sitetype') === 'STANDARD',
					rows: rows
				};
			}
		});
	});