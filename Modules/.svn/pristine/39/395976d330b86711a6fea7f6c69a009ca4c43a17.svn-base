{{!
	© 2016 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
}}

<tr class="item-views-cell-navigable {{cellClassName}} item-{{itemId}}" data-id="{{itemId}}" data-item-type="{{itemType}}">
	<td class="item-views-cell-navigable-item-image" name="item-image">
		<img src="{{resizeImage itemImageURL 'thumbnail'}}" alt="{{itemImageAltText}}">
	</td>
	<td class="item-views-cell-navigable-details" name="item-details">
		<div class="item-views-cell-actionable-name">
			{{#if isNavigable}}
			<h5><a {{{itemURLAttributes}}}>{{{itemStoreDescription}}}</a></h5>
			{{else}}
			<h5>{{{itemStoreDescription}}}</h4>
			{{/if}}
		</div>
		<p>
			<span class="item-views-cell-navigable-item-unit-price-label">Product Code:</span>
			<span class="item-views-cell-navigable-item-reason-value"> {{itemName}}</span>
		</p>
		<p>
			<div data-view="Item.Price"></div>
		</p>
		{{#if showOptions}}
			<div data-view="Item.Options"></div>
		{{/if}}
		<p>
			<span class="item-views-cell-navigable-stock" data-view="ItemViews.Stock.View">
		</p>
	</td>
	<td class="item-views-cell-navigable-item-unit-price" name="item-totalprice">
	{{#if showBlockDetail2}}
		<p>
		{{#if showDetail2Title}}
			<span class="item-views-cell-navigable-item-unit-price-label">{{detail2Title}}</span>
		{{/if}}
		<span class="item-views-cell-navigable-item-reason-value"> {{detail2}}</span>
		</p>
	{{/if}}
	</td>
	<td class="item-views-cell-navigable-item-quantity" name="item-quantity">
		<p>
			<span class="item-views-cell-navigable-item-quantity-label">{{translate 'Quantity:'}}</span>
			<span class="item-views-cell-navigable-item-quantity-value"> {{quantity}}</span>
		</p>
	</td>
	<td class="item-views-cell-navigable-amount" name="item-amount">
		<p>
		{{#if showDetail3Title}}
			<span class="item-views-cell-navigable-item-amount-label">{{detail3Title}}</span>
		{{/if}}
		<span class="item-views-cell-navigable-item-amount-value"> {{detail3}}</span>
		{{#if showComparePrice}}
			<small class="item-views-cell-navigable-item-old-price">{{comparePriceFormatted}}</small>
		{{/if}}
		</p>
	</td>
</tr>
