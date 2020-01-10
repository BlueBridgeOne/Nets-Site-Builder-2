{{! © 2016 NetSuite Inc. User may not copy, modify, distribute, or re-bundle or otherwise make available this code; provided, however, if you are an authorized user with a NetSuite account or log-in, you may use this code subject to the terms that govern your access and use. }} {{#if showBackToAccount}}
<a href="/" class="address-list-button-back">
		<i class="address-list-button-back-icon"></i>
		{{translate 'Back to Account'}}
	</a> {{/if}}
<section class="reports-list">
	<header class="transaction-history-list-header"><h2>{{pageHeader}}</h2></header>
	
	<div class="list-header-view-datepicker-from">
							<label class="list-header-view-from" for="from">{{rangeFilterLabel}}</label>

							<div class="list-header-view-datepicker-container-input">
								<input class="list-header-view-accordion-body-input" id="from" name="from" type="date" autocomplete="off" data-format="yyyy-mm-dd" value="{{selectedRangeFrom}}" data-action="range-filter" data-todayhighlight="true"/>

								<i class="list-header-view-accordion-body-calendar-icon"></i>
								<a class="list-header-view-accordion-body-clear" data-action="clear-value">
									<i class="list-header-view-accordion-body-clear-icon"></i>
								</a>
							</div>
						</div>

						<div class="list-header-view-datepicker-to">
							<label class="list-header-view-to" for="to">{{translate 'to'}}</label>

							<div class="list-header-view-datepicker-container-input">
								<input class="list-header-view-accordion-body-input" id="to" name="to" type="date" autocomplete="off" data-format="yyyy-mm-dd" value="{{selectedRangeTo}}" data-action="range-filter" data-todayhighlight="true"/>

								<i class="list-header-view-accordion-body-calendar-icon"></i>
								<a class="list-header-view-accordion-body-clear" data-action="clear-value">
									<i class="list-header-view-accordion-body-clear-icon"></i>
								</a>
							</div>
						</div>


	<div class="order-history-list-recordviews-container">
		<table class="order-history-list-recordviews-actionable-table">
			<thead class="order-history-list-recordviews-actionable-header">
				<tr>
					<th class="order-history-list-recordviews-actionable-title-header"><span>{{translate 'Product'}}</span></th>
					<th class="order-history-list-recordviews-actionable-title-header"><span>{{translate 'Code'}}</span></th>
					<th class="order-history-list-recordviews-actionable-title-header"><span>{{translate 'Quantity'}}</span></th>
					<th class="order-history-list-recordviews-actionable-title-header"><span>{{translate 'Amount'}}</span></th>
				</tr>
			</thead>
			{{#each rows}}
			<tbody class="order-history-list">
				<tr class="recordviews-actionable">
					<td class="recordviews-actionable-title"> <span class="recordviews-actionable-label">Product:</span> <span class="recordviews-actionable-value">{{salesdescription}}</span> </td>
					<td class="recordviews-actionable-text"> <span class="recordviews-actionable-label">Code:</span> <span class="recordviews-actionable-value">{{upccode}}</span> </td>
					<td class="recordviews-actionable-status"> <span class="recordviews-actionable-label">Quantity:</span> <span class="recordviews-actionable-value">{{quantity}}</span> </td>
					<td class="recordviews-actionable-currency" style="text-align:left;"> <span class="recordviews-actionable-label">Amount:</span> <span class="recordviews-actionable-value">£{{amount}}</span> </td>
				</tr>
				{{/each}}
			</tbody>
		</table>
	</div>
</section>