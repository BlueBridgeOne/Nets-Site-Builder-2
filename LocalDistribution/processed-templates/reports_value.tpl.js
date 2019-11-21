define('reports_value.tpl', ['Handlebars','Handlebars.CompilerNameLookup'], function (Handlebars, compilerNameLookup){ var template = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <a href=\"/\" class=\"address-list-button-back\"><i class=\"address-list-button-back-icon\"></i> "
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Back to Account", {"name":"translate","hash":{},"data":data})))
    + " </a> ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " <tbody class=\"order-history-list\"><tr class=\"recordviews-actionable\"><td class=\"recordviews-actionable-title\"><span class=\"recordviews-actionable-label\">Product:</span><span class=\"recordviews-actionable-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"salesdescription") || (depth0 != null ? compilerNameLookup(depth0,"salesdescription") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"salesdescription","hash":{},"data":data}) : helper)))
    + "</span></td><td class=\"recordviews-actionable-text\"><span class=\"recordviews-actionable-label\">Code:</span><span class=\"recordviews-actionable-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"upccode") || (depth0 != null ? compilerNameLookup(depth0,"upccode") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"upccode","hash":{},"data":data}) : helper)))
    + "</span></td><td class=\"recordviews-actionable-status\"><span class=\"recordviews-actionable-label\">Quantity:</span><span class=\"recordviews-actionable-value\">"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"quantity") || (depth0 != null ? compilerNameLookup(depth0,"quantity") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"quantity","hash":{},"data":data}) : helper)))
    + "</span></td><td class=\"recordviews-actionable-currency\" style=\"text-align:left;\"><span class=\"recordviews-actionable-label\">Amount:</span><span class=\"recordviews-actionable-value\">£"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"amount") || (depth0 != null ? compilerNameLookup(depth0,"amount") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"amount","hash":{},"data":data}) : helper)))
    + "</span></td></tr> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = " ";
  stack1 = compilerNameLookup(helpers,"if").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"showBackToAccount") : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " <section class=\"reports-list\"><header class=\"transaction-history-list-header\"><h2>"
    + escapeExpression(((helper = (helper = compilerNameLookup(helpers,"pageHeader") || (depth0 != null ? compilerNameLookup(depth0,"pageHeader") : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"pageHeader","hash":{},"data":data}) : helper)))
    + "</h2></header><div data-view=\"ListHeader.View\"></div><div class=\"order-history-list-recordviews-container\"><table class=\"order-history-list-recordviews-actionable-table\"><thead class=\"order-history-list-recordviews-actionable-header\"><tr><th class=\"order-history-list-recordviews-actionable-title-header\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Product", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"order-history-list-recordviews-actionable-title-header\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Code", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"order-history-list-recordviews-actionable-title-header\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Quantity", {"name":"translate","hash":{},"data":data})))
    + "</span></th><th class=\"order-history-list-recordviews-actionable-title-header\"><span>"
    + escapeExpression(((compilerNameLookup(helpers,"translate") || (depth0 && compilerNameLookup(depth0,"translate")) || helperMissing).call(depth0, "Amount", {"name":"translate","hash":{},"data":data})))
    + "</span></th></tr></thead> ";
  stack1 = compilerNameLookup(helpers,"each").call(depth0, (depth0 != null ? compilerNameLookup(depth0,"rows") : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " </tbody></table></div></section>";
},"useData":true}); template.Name = 'reports_value'; return template;});