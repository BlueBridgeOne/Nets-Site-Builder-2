/*
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Reports
define(
	'Reports.Value.View', ['Reports.Model', 'Backbone.CompositeView', 'ListHeader.View', 'SC.Configuration', 'reports_value.tpl'

		, 'Backbone', 'underscore', 'jQuery', 'Utils'
	],
	function (
		Model, BackboneCompositeView, ListHeaderView, Configuration

		, reports_value_tpl

		, Backbone, _, jQuery
	) {
		'use strict';

		//@class Reports.List.View List profile's addresses @extend Backbone.View
		return Backbone.View.extend({

			template: reports_value_tpl
				,
			initialize: function (options) {

				this.application = options.application;
				this.searchname = options.name;
				this._title = options.title;
				this.title=_(options.title).translate();
				this.page_header=_(options.title).translate();


				BackboneCompositeView.add(this);
				
				this.selectedRange = {};
				this.selectedRange["to"] = this.formatDate(new Date());
				var from = new Date();
				from.setMonth(from.getMonth() - 1);
				this.selectedRange["from"] = this.formatDate(from);

				this.model = new Model();
				this.update();


			},
			update: function () {
				var self = this;
				//searchname=toppartsbyvalue&datefrom=02052018&datetill=02052018&customer=8073&fleet=16240&pagenumber=0
				var datefrom = this.toNSDate(this.parseDate(this.selectedRange["from"]));
				var datetill = this.toNSDate(this.parseDate(this.selectedRange["to"]));

				this.model.fetch({
						data: {
							searchname: this.searchname,
							t: new Date().getTime(),
							datefrom: datefrom,
							datetill: datetill,
							customer: 8073,
							fleet: 16240,
							pagenumber: 0
						}
					})
					.done(function () {
						self.render();
					});
			},
			events: {

				/*
				 * range-filter focus/blur work together to update the date range when:
				 * Blur happens on a field and user don't focus on the other during a defined interval
				 */
				'focus [data-action="range-filter"]': 'clearRangeFilterTimeout',
				'blur [data-action="range-filter"]': 'rangeFilterBlur',
				'change [data-action="filter"]': 'changeFilter'
			},
			destroy: function () {
					this.clearRangeFilterTimeout();
					this._destroy();
				} // @method rangeFilterBlur
				,
			changeFilter: function (e) {

				this.currentFilter = e.target.value;

				this.render();
			},
			rangeFilterBlur: function () {
					this.clearRangeFilterTimeout();
					this.rangeFilterTimeout = setTimeout(_.bind(this.rangeFilterHandler, this), 1000);
				}

				// @method clearRangeFilterTimeout
				,
			clearRangeFilterTimeout: function () {
					if (this.rangeFilterTimeout) {
						clearTimeout(this.rangeFilterTimeout);
						this.rangeFilterTimeout = null;
					}
				}

				// @method rangeFilterHandler
				,
			rangeFilterHandler: function () {
				var selected_range = this.selectedRange,
					$ranges = this.$('[data-action="range-filter"]');

				$ranges.each(function () {
					if (this.value) {
						selected_range[this.name] = this.value;
					} else {
						delete selected_range[this.name];
					}
				});

				this.update();
				return this;
			},
			formatDate: function (d) {
				var month = '' + (d.getMonth() + 1),
					day = '' + d.getDate(),
					year = d.getFullYear();

				if (month.length < 2) {
					month = '0' + month;
				}
				if (day.length < 2) {
					day = '0' + day;
				}

				return [year, month, day].join('-');
			},
			toNSDate: function (d) {
				var month = '' + (d.getMonth() + 1),
					day = '' + d.getDate(),
					year = d.getFullYear();

				if (month.length < 2) {
					month = '0' + month;
				}
				if (day.length < 2) {
					day = '0' + day;
				}

				return [day, month, year].join('');
			},
			parseDate: function (d) {
				var parts = d.split("-");
				return new Date(parseInt(parts[0], 10),
					parseInt(parts[1], 10) - 1,
					parseInt(parts[2], 10));
			},
			twoDigits: function (num) {
				if (num > 9) {
					return num.toString();
				} else {
					return "0" + num.toString();
				}
			}
			//@method getBreadcrumbPages
			,
			getBreadcrumbPages: function () {
					return {
						text: this.title
					};
				}

				//@method getContext @return {Reports.List.View.Context}
				,
			getContext: function () {
				console.log(this.model);

				var rows = [];
				if (this.model.get(1)) {
					rows = this.model.get(1);
					//console.log("Test: " + JSON.stringify(rows, null, 4));
					for (var i = 0; i < rows.length; i++) {
						rows[i].salesdescription = rows[i].values['GROUP(item.salesdescription)'];
						rows[i].upccode = rows[i].values['GROUP(item.upccode)'];
						rows[i].amount = rows[i].values['SUM(formulacurrency)'];
						rows[i].quantity = rows[i].values['SUM(quantity)'];

					}
				}
				console.log("rows",rows);
				//@class Reports.List.View.Context
				return {
					selectedRangeTo: this.selectedRange["to"],
					selectedRangeFrom: this.selectedRange["from"],
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