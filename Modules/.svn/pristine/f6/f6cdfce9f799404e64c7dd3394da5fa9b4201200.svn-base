{{!
© 2016 NetSuite Inc.
User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
provided, however, if you are an authorized user with a NetSuite account or log-in, you
may use this code subject to the terms that govern your access and use.
}}
<tr id="{{lineId}}" data-item-id="{{itemId}}" data-type="order-item" itemscope itemtype="http://schema.org/Product" {{#if showGeneralClass}} class="{{generalClass}}" {{/if}}>
	<td class="item-views-cell-actionable-table-first">
		<div class="item-views-cell-actionable-thumbnail">
			{{#if isNavigable}}
			<a {{linkAttributes}}>
				<img src="{{resizeImage item._thumbnail.url 'thumbnail'}}" alt="{{item._thumbnail.altimagetext}}">
			</a>
			{{else}}
			<img src="{{resizeImage item._thumbnail.url 'thumbnail'}}" alt="{{item._thumbnail.altimagetext}}">
			{{/if}}
		</div>
	</td>
	<td class="item-views-cell-actionable-table-middle">
		<div class="item-views-cell-actionable-name">
			{{#if isNavigable}}
			<h4><a {{linkAttributes}}>{{{item.storedescription}}}</a></h4>
			{{else}}
			<h4>{{{item.storedescription}}}</h4>
			{{/if}}
		</div>
		<p>
			{{#if isNavigable}}
			<a {{linkAttributes}} class="item-views-cell-actionable-name-link">
				<b>Product Code:</b> {{item._name}}
			</a>
			{{else}}
			<span class="item-views-cell-actionable-name-viewonly"><b>Product Code:</b> {{item._name}}</span>
			{{/if}}
		</p>
		
		<div class="item-views-cell-actionable-price">
			<div data-view="Item.Price"></div>
		</div>
		<div class="item-views-cell-actionable-options">
			<div data-view="Item.SelectedOptions"></div>
		</div>
		{{#if showSummaryView}}
		<div class="item-views-cell-actionable-summary" data-view="Item.Summary.View"></div>
		{{/if}}
		<div class="item-views-cell-actionable-stock" data-view="ItemViews.Stock.View">
		</div>
		
	</td>
	<td class="item-views-cell-actionable-table-last">
		<div data-view="Item.Actions.View"></div>
		
		{{#if showAlert}}
		<div class="item-views-cell-actionable-alert-placeholder" data-type="alert-placeholder"></div>
		{{/if}}
		{{#if showCustomAlert}}
		<div class="alert alert-{{customAlertType}}">
			{{item._cartCustomAlert}}
		</div>
		{{/if}}
	</td>
</tr>