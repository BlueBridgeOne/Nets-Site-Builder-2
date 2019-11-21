{{! © 2016 NetSuite Inc. User may not copy, modify, distribute, or re-bundle or otherwise make available this code; provided, however, if you are an authorized user with a NetSuite account or log-in, you may use this code subject to the terms that govern your access and use. }} {{#if showBackToAccount}}
<a href="/" class="address-list-button-back">
		<i class="address-list-button-back-icon"></i>
		{{translate 'Back to Account'}}
	</a> {{/if}}
<section class="reports-list">
	<header class="transaction-history-list-header"><h2>{{pageHeader}}</h2></header>
	<div data-view="ListHeader.View"></div>
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