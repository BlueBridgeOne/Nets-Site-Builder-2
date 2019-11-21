/**
 * @NApiVersion 2.0
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 * 
 *	18th April 2018		BB1 Viktor Schumann
 */

define(['N/record', 'N/search', 'N/ui/serverWidget','N/runtime'],

function(record, search, serverWidget, runtime) {
   
    /**
     * Definition of the Suitelet script trigger point.
     *
     * @param {Object} context
     * @param {ServerRequest} context.request - Encapsulation of the incoming request
     * @param {ServerResponse} context.response - Encapsulation of the Suitelet response
     * @Since 2015.2
     */
	
	function isnull(value,returnValue)
	{
		if(!value)
		{
			return returnValue;
		}

		return value;
	}
	
	function transform_date(datestring){
		var day_month = datestring.slice(0, 2) + "/" + datestring.slice(2,4);
		var result = day_month+"/"+datestring.slice(4);
		return result;
	}

//******* Customer Files ********
// https://system.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=451&deploy=1&searchname=customerfiles&customer=4710	
// https://forms.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=451&deploy=1&compid=1064113&h=23e7d77875b9eb28b4c9&&searchname=customerfiles&customer=4710
// parameter example: &searchname=customerfiles&customer=4710	
	function customerfiles(request){

		var customer = request.parameters.customer;
		
		var lookup = search.lookupFields({
		    type: search.Type.CUSTOMER,
		    id: customer,
		    columns: ['custentity_bb1_file_list_backup']
		});
		var file_list = lookup.custentity_bb1_file_list_backup;
		log.debug("","file list="+JSON.stringify(lookup)+" file list string="+file_list);
		
		var fileArray=file_list.split(",");
			
		var entitySearchObj = search.load({id: 'customsearch_bb1_customer_files'}); //customsearch_bb1_inventory_sum_by_item
		var myFilter= search.createFilter({
			name: "internalidnumber",
			operator: search.Operator.EQUALTO,
			values: customer
		})
		entitySearchObj.filters.push(myFilter);
		
		var myFilter= search.createFilter({
			name: "internalid",
			join: "file",
			operator: search.Operator.ANYOF,
			values: fileArray
		})
		entitySearchObj.filters.push(myFilter);

		var searchResultCount = entitySearchObj.runPaged().count;
		
		//log.debug("entitySearchObj result count","entitySearchObj result count="+searchResultCount+" number Of Pages="+numberofpages);
		log.debug("entitySearchObj result count","entitySearchObj result count="+searchResultCount);

		var searchResult = entitySearchObj.run().getRange(0,100);

		return searchResult;
	}


//******* Total Sales By Location Morrisons ******** !!!!! OLD !!!!!
// https://system.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=451&deploy=1&searchname=totalsalesbylocationmorrisons&datefrom=18042018&datetill=18042018&pagenumber=0
//	https://forms.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=451&deploy=1&compid=1064113&h=23e7d77875b9eb28b4c9&searchname=totalsalesbylocationmorrisons&datefrom=18042018&datetill=18042018&pagenumber=0&customer=8073
// customer 8073 Morrisons "parent" - 8196 - Morrisons Gadbrook	
//Spend By Account (between two dates) Could put period and fleet filters on here too.
			
		function total_sales_by_location_morrisons(request){

    		var searchname = request.parameters.searchname;
			var datefrom = request.parameters.datefrom;
			var datetill = request.parameters.datetill;
			var pagenumber = isnull(parseInt(request.parameters.pagenumber),0);
			var fleet = isnull(parseInt(request.parameters.fleet),0);

			var customer = isnull(request.parameters.customer,0);
			var field1 = search.lookupFields({
			    type: search.Type.CUSTOMER,
			    id: customer,
			    columns: ['parent']
			});
			var parentObj=field1.parent[0];
			log.debug("","customer="+customer+" parent="+JSON.stringify(field1)+" ="+field1.parent+" | parentObj="+parentObj.value);
			var parent=parentObj.value;

			log.debug("","date from="+datefrom+" datetill="+datetill);
			
			var logic1="noneof";
			var parent1=0;
			var logic2="noneof";
			var parent2=0;
			var fleet_logic="noneof";
			var fleet=0;
			
			if(customer==parent){
				logic1="anyof";
				parent1=parent;
			}
			if(customer!=parent){
				logic2="anyof";
				parent2=customer;
			}
			
			if(fleet!=0){
				fleet_logic="anyof";
			}
			
			var searchObj = search.create({
				   type: "transaction",
				   filters: [
					      ["type","anyof","CustCred","CustInvc"], 
					      "AND", 
					      ["account","anyof","54","301"], 
					      "AND", 
					      ["name","noneof","4509","2726"], 
					      "AND", 
					      ["customer.parent",logic1,parent1],
					      "AND",
					      ["entity",logic2,parent2],
					      "AND",
					      ["custcol_fleet_num",fleet_logic,fleet],
					      "AND",
					      ["trandate","within",transform_date(datefrom),transform_date(datetill)]
					      //["trandate","within","18/4/2018","18/4/2018"]
					   ],
				   columns:
				   [
				      search.createColumn({
				         name: "companyname",
				         join: "customer",
				         summary: "GROUP",
				         label: "Location"
				      }),
				      search.createColumn({
				         name: "formulacurrency",
				         summary: "SUM",
				         formula: "CASE WHEN {customer.category} != 'Krone' THEN {netamountnotax} ELSE 0 END",
				         label: "Formula (Currency)"
				      })
				   ]
				});

			/*	old filter
			[
		      ["type","anyof","CustCred","CustInvc"], 
		      "AND", 
		      ["account","anyof","54","301"], 
		      "AND", 
		      ["name","noneof","4509","2726"], 
		      "AND", 
		      ["location","anyof","8","9","10","51","52","5","228","225","223","224","222"], 
		      "AND", 
		      ["trandate","within",transform_date(datefrom),transform_date(datetill)]
		      //["trandate","within","18/4/2018","18/4/2018"]
		   ];
*/
			
	    	//var searchObj = search.load({id: 'customsearch_sal_sales_by_branch_3_2_3'});
			var searchResultCount = searchObj.runPaged().count;
			log.debug("searchObj result count","searchObj result count:"+searchResultCount);

	    	var searchResult = searchObj.run().getRange(pagenumber*100,pagenumber*100+100);

	    	var numberOfPages = Math.floor(searchResultCount/100);
			if(searchResultCount % 100 > 0) numberOfPages++;
			var  pageObj={searchName:searchname, resultCount:searchResultCount, pageCount:numberOfPages, currentPage:pagenumber};
			
			var result_array=[];
			//result_array.push(transform_date(datefrom));
			//result_array.push(transform_date(datetill));
			result_array.push(pageObj);
			result_array.push(searchResult);
	    	return result_array;
		}

		
//******* Total Sales by Location ********
//	https://forms.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=451&deploy=1&compid=1064113&h=23e7d77875b9eb28b4c9&searchname=totalsalesbylocation&datefrom=02052018&datetill=02052018&customer=8073&&fleet=16240pagenumber=0
//Spend By Account (between two dates) Could put period and fleet filters on here too.
// customer 8073 Morrisons "parent" - 8196 - Morrisons Gadbrook	, 848 - Dixon
		
		function total_sales_by_location(request){

    		var searchname = request.parameters.searchname;
			var datefrom = request.parameters.datefrom;
			var datetill = request.parameters.datetill;
			var customer = request.parameters.customer;
			var pagenumber = isnull(parseInt(request.parameters.pagenumber),0);
//fleet
			var fleet = isnull(parseInt(request.parameters.fleet),0);

			var field1 = search.lookupFields({
			    type: search.Type.CUSTOMER,
			    id: customer,
			    columns: ['parent']
			});
			var parentObj=field1.parent[0];
			log.debug("","customer="+customer+" parent="+JSON.stringify(field1)+" ="+field1.parent+" | parentObj="+parentObj.value);
			var parent=parentObj.value;

			log.debug("","date from="+datefrom+" datetill="+datetill);
			
			var logic1="noneof";
			var parent1=0;
			var logic2="noneof";
			var parent2=0;

			if(customer==parent){
				logic1="anyof";
				parent1=parent;
			}
			if(customer!=parent){
				logic2="anyof";
				parent2=customer;
			}

//fleet variables for fleet number filter
			var fleet_logic="noneof";
			
			if(fleet!=0){
				fleet_logic="anyof";
			}
			
/*						
			var filter1=[
			      ["type","anyof","CustCred","CustInvc"], 
			      "AND", 
			      ["account","anyof","54","301"], 
			      "AND", 
			      ["name","noneof","4509","2726"], 
			      "AND", 
			      ["location","anyof","8","9","10","51","52","5","228","225","223","224","222"], 
			      "AND", 
			      ["trandate","within",transform_date(datefrom),transform_date(datetill)]
			      //["trandate","within","18/4/2018","18/4/2018"]
			   ];
			var filter2=[
			      ["type","anyof","CustCred","CustInvc"], 
			      "AND", 
			      ["account","anyof","54","301"], 
			      "AND", 
			      ["name","noneof","4509","2726"], 
			      "AND", 
			      ["entity","is",customer], 
			      "AND", 
			      ["trandate","within",transform_date(datefrom),transform_date(datetill)]
			      //["trandate","within","18/4/2018","18/4/2018"]
			   ];
			
			if(customer==848) filter=filter2
			else filter=filter1;
	*/
			var filter=[
				      ["type","anyof","CustCred","CustInvc"], 
				      "AND", 
				      ["account","anyof","54","301"], 
				      "AND", 
				      ["name","noneof","4509","2726"], 
				      "AND", 
				      ["customer.parent",logic1,parent1],
				      "AND",
				      ["entity",logic2,parent2],
//fleet				      
				      "AND",
				      ["custcol_fleet_num",fleet_logic,fleet],
				      "AND",
				      ["trandate","within",transform_date(datefrom),transform_date(datetill)]
				      //["trandate","within","18/4/2018","18/4/2018"]
				   ];
			
			log.debug("","date from="+datefrom+" datetill="+datetill);

			var searchObj = search.create({
				   type: "transaction",
				   filters:filter,
				   columns:
				   [
				      search.createColumn({
				         name: "companyname",
				         join: "customer",
				         summary: "GROUP",
				         label: "Location"
				      }),
				      search.createColumn({
				         name: "formulacurrency",
				         summary: "SUM",
				         formula: "CASE WHEN {customer.category} != 'Krone' THEN {netamountnotax} ELSE 0 END",
				         label: "Formula (Currency)"
				      })
				   ]
				});
				
	    	//var searchObj = search.load({id: 'customsearch_sal_sales_by_branch_3_2_3'});
			var searchResultCount = searchObj.runPaged().count;
			log.debug("searchObj result count","searchObj result count:"+searchResultCount);

	    	var searchResult = searchObj.run().getRange(pagenumber*100,pagenumber*100+100);

	    	var numberOfPages = Math.floor(searchResultCount/100);
			if(searchResultCount % 100 > 0) numberOfPages++;
			var  pageObj={searchName:searchname, resultCount:searchResultCount, pageCount:numberOfPages, currentPage:pagenumber};
			
			var result_array=[];
			//result_array.push(transform_date(datefrom));
			//result_array.push(transform_date(datetill));
			result_array.push(pageObj);
			result_array.push(searchResult);
	    	return result_array;
		}
		
		
//******* Top Parts by Value ********
// https://forms.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=451&deploy=1&compid=1064113&h=23e7d77875b9eb28b4c9&searchname=toppartsbyvalue&datefrom=02052018&datetill=02052018&customer=8073&fleet=16240&pagenumber=0
// customer 8073 Morrisons "parent" - 8196 - Morrisons Gadbrook	, 848 - Dixon
		
		function top_parts_by_value(request){

			//var searchObj = search.load({id: 'customsearch1428'});
    		var searchname = request.parameters.searchname;
			var datefrom = request.parameters.datefrom;
			var datetill = request.parameters.datetill;
			var pagenumber = isnull(parseInt(request.parameters.pagenumber),0);			
			var fleet = isnull(parseInt(request.parameters.fleet),0);
			log.debug("","date from="+datefrom+" datetill="+datetill);

			var customer = request.parameters.customer;
			var field1 = search.lookupFields({
			    type: search.Type.CUSTOMER,
			    id: customer,
			    columns: ['parent']
			});
			var parentObj=field1.parent[0];
			log.debug("","customer="+customer+" parent="+JSON.stringify(field1)+" ="+field1.parent+" | parentObj="+parentObj.value);
			var parent=parentObj.value;

			log.debug("","date from="+datefrom+" datetill="+datetill);
			
			var logic1="noneof"; // "none of 0" will let to show everything
			var parent1=0;
			var logic2="noneof";
			var parent2=0;

			if(customer==parent){	// customer is a parent, we need to show all the childs
				logic1="anyof";		
				parent1=parent;
			}
			if(customer!=parent){	// customer is a child, we need to show only that one child
				logic2="anyof";
				parent2=customer;
			}

			var fleet_logic="noneof";
			if(fleet!=0){
				fleet_logic="anyof";
			}
			
/*						
				   [
				      ["type","anyof","CustInvc"], 
				      "AND", 
				      ["account","anyof","54"], 
				      "AND", 
				      ["trandate","within",transform_date(datefrom),transform_date(datetill)],
				      "AND", 
				      ["item.pricinggroup","noneof","233"], 
				      "AND", 
				      ["location.custrecord_sales_area","anyof","7","8"], 
				      "AND", 
				      ["custcol_fleet_num.custrecordfl_body_style","anyof","@ALL@"]
				   ]
	*/
			var filter=[
				["type","anyof","CustInvc"], 
				"AND", 
				["account","anyof","54"], 
				"AND", 
				["trandate","within",transform_date(datefrom),transform_date(datetill)],
				"AND", 
				["item.pricinggroup","noneof","233"], 
				"AND", 
				["custcol_fleet_num.custrecordfl_body_style","anyof","@ALL@"],
				"AND", 
				["customer.parent",logic1,parent1],
				"AND",
				["entity",logic2,parent2],
			    "AND",
			    ["custcol_fleet_num",fleet_logic,fleet]				
				];

			var searchObj = search.create({
				   type: "invoice",
				   filters:filter,
				   columns:
				   [
				      search.createColumn({
				         name: "upccode",
				         join: "item",
				         summary: "GROUP",
				         label: "Item #"
				      }),
				      search.createColumn({
				         name: "salesdescription",
				         join: "item",
				         summary: "GROUP",
				         label: "Description"
				      }),
				      search.createColumn({
				         name: "quantity",
				         summary: "SUM",
				         label: "Quantity"
				      }),
				      search.createColumn({
				         name: "formulacurrency",
				         summary: "SUM",
				         formula: "nvl(({quantity}*{item.cost})+{amount},0)",
				         sort: search.Sort.DESC,
				         label: "Formula (Currency)"
				      })
				   ]
				});
			var searchResultCount = searchObj.runPaged().count;
			log.debug("searchObj result count","searchObj result count:"+searchResultCount);

	    	var searchResult = searchObj.run().getRange(pagenumber*100,pagenumber*100+100);

	    	var numberOfPages = Math.floor(searchResultCount/100);
			if(searchResultCount % 100 > 0) numberOfPages++;
			var  pageObj={searchName:searchname, resultCount:searchResultCount, pageCount:numberOfPages, currentPage:pagenumber};
			
			var result_array=[];
			//result_array.push(transform_date(datefrom));
			//result_array.push(transform_date(datetill));
			result_array.push(pageObj);
			result_array.push(searchResult);
	    	return result_array;
	    	
		}

//******* Top Parts Summary by Quantity ********		
// https://forms.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=451&deploy=1&compid=1064113&h=23e7d77875b9eb28b4c9&searchname=toppartsbyquantity&datefrom=02052017&datetill=02052018&customer=8073&fleet=16240&pagenumber=0
// customer 8073 Morrisons "parent" - 8196 - Morrisons Gadbrook	, 848 - Dixon
		
		function top_parts_by_quantity(request){

			//var searchObj = search.load({id: 'customsearch1428'});
			var searchname = request.parameters.searchname;
			var datefrom = request.parameters.datefrom;
			var datetill = request.parameters.datetill;
			var pagenumber = isnull(parseInt(request.parameters.pagenumber),0);
			var fleet = isnull(parseInt(request.parameters.fleet),0);
			log.debug("","date from="+datefrom+" datetill="+datetill);

			var customer = request.parameters.customer;
			var field1 = search.lookupFields({
			    type: search.Type.CUSTOMER,
			    id: customer,
			    columns: ['parent']
			});
			var parentObj=field1.parent[0];
			log.debug("","customer="+customer+" parent="+JSON.stringify(field1)+" ="+field1.parent+" | parentObj="+parentObj.value);
			var parent=parentObj.value;

			log.debug("","date from="+datefrom+" datetill="+datetill);
			
			var logic1="noneof"; // "none of 0" will let to show everything
			var parent1=0;
			var logic2="noneof";
			var parent2=0;

			if(customer==parent){	// customer is a parent, we need to show all the childs
				logic1="anyof";		
				parent1=parent;
			}
			if(customer!=parent){	// customer is a child, we need to show only that one child
				logic2="anyof";
				parent2=customer;
			}

			var fleet_logic="noneof";			
			if(fleet!=0){
				fleet_logic="anyof";
			}

/*						
					[
						["type","anyof","CustInvc"], 
						"AND", 
						["account","anyof","54"], 
						"AND", 
						["trandate","within",transform_date(datefrom),transform_date(datetill)],
						"AND", 
						["item.pricinggroup","noneof","233"], 
						"AND", 
						["location.custrecord_sales_area","anyof","7","8"], 
						"AND", 
						["custcol_fleet_num.custrecordfl_body_style","anyof","@ALL@"]
						],
	*/
			var filter=[
				["type","anyof","CustInvc"], 
				"AND", 
				["account","anyof","54"], 
				"AND", 
				["trandate","within",transform_date(datefrom),transform_date(datetill)],
				"AND", 
				["item.pricinggroup","noneof","233"], 
				"AND", 
				["custcol_fleet_num.custrecordfl_body_style","anyof","@ALL@"],
				"AND", 
				["customer.parent",logic1,parent1],
				"AND",
				["entity",logic2,parent2],
			    "AND",
			    ["custcol_fleet_num",fleet_logic,fleet]
				];
			
			var searchObj = search.create({
				type: "invoice",
				filters: filter,
				columns:
					[
						search.createColumn({
							name: "upccode",
							join: "item",
							summary: "GROUP",
							label: "Item #"
						}),
						search.createColumn({
							name: "salesdescription",
							join: "item",
							summary: "GROUP",
							label: "Description"
						}),
						search.createColumn({
							name: "quantity",
							summary: "SUM",
							sort: search.Sort.DESC,
							label: "Quantity"
						}),
						search.createColumn({
							name: "formulacurrency",
							summary: "SUM",
							formula: "nvl(({quantity}*{item.cost})+{amount},0)",
							label: "Formula (Currency)"
						})
						]
			});

			var searchResultCount = searchObj.runPaged().count;
			log.debug("searchObj result count","searchObj result count:"+searchResultCount);

			var searchResult = searchObj.run().getRange(pagenumber*100,pagenumber*100+100);

			var numberOfPages = Math.floor(searchResultCount/100);
			if(searchResultCount % 100 > 0) numberOfPages++;
			var  pageObj={searchName:searchname, resultCount:searchResultCount, pageCount:numberOfPages, currentPage:pagenumber};

			var result_array=[];
			//result_array.push(transform_date(datefrom));
			//result_array.push(transform_date(datetill));
			result_array.push(pageObj);
			result_array.push(searchResult);
			return result_array;

		}
		
//******* Morrisons Top Parts Summary by Quantity ******** !!!!!!!!!!!!!!  OLD  !!!!!!!!!!!!!
// https://system.eu2.netsuite.com/app/site/hosting/scriptlet.nl?script=451&deploy=1&searchname=morrisonstoppartsbyquantity		

		function morrisons_top_parts_by_quantity_OLD(request){

			var result1 = [];
			var entitySearchObj = search.load({id: 'customsearch1429'});
			var searchResultCount = entitySearchObj.runPaged().count;
			log.debug("entitySearchObj result count","entitySearchObj result count:"+searchResultCount);

			var searchResult = entitySearchObj.run().getRange(0,100);
			//result[]
			return searchResult;
		}

		
//MOR Job and Fleet search for customer login		



//************** On Request ***************	
    function onRequest(context) {
        
        var request = context.request;
    	if (request.method === 'GET') {
    	
    		var searchname = request.parameters.searchname;
    		log.debug("**** Search Query Start **** ","- Start -"+searchname);

    		var result;
    		
    		if(searchname=="customerfiles"){
    			result=customerfiles(request);
    		}
//    		else if(searchname=="totalsalesbylocationmorrisons"){
//    			result=total_sales_by_location_morrisons(request); // OLD 
//    		}
    		else if(searchname=="totalsalesbylocation"){
    			result=total_sales_by_location(request);
    		}
    		else if(searchname=="toppartsbyvalue"){
    			result=top_parts_by_value(request);
    		}
    		else if(searchname=="toppartsbyquantity"){
    			result=top_parts_by_quantity(request);
    		}    		
    		else{
    			result="Error: Invalid search name parameter";
    		}

    		context.response.write(JSON.stringify(result)); //JSON.stringify(searchResult)
    		//context.response.write(customer); //JSON.stringify(searchResult)

    		
    	} else {
    		// POST
		}
    }

    return {
        onRequest: onRequest
    };
    
})