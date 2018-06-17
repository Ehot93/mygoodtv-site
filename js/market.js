var price, newprice, allprice;
var tovarid, id, newid;
var count, newcount;
var keyprice = 'ruso_q_712899_example';
var keyid = '322356_dwsdgf_nuts1058';
var keycount = '89df89d8f779f_pol336';
var pricei, idi, counti;

$(document).ready(function(){
	//Добавление товара
	$('.add-tovar').click(function(){
	allprice = $('#cart span#price').attr("price");
	price = $(this).attr("price");
	newprice = Number(allprice) + Number(price);

	newid = window.localStorage[keyid];
	tovarid = $(this).attr("rel");
	id = newid + " " + tovarid; 
	
	newcount = window.localStorage[keycount];
	newcount ++;
	
		window.localStorage[keyprice] = newprice;
		window.localStorage[keyid] = id;
		window.localStorage[keycount] = newcount;

		$('#cart span#price').html(newprice+' руб. ').attr("price",newprice);
		$('#cart span.count').html(newcount);
	})////*********************************************************
			//Очистка текущих данных
			$("#clear").click(function(){ 
			newprice = 0;
			newcount = 0;
			id = 0;
			window.localStorage[keyprice] = newprice;
			window.localStorage[keyid] = id;
			window.localStorage[keycount] = newcount;
			$('#cart span#price').html(newprice+' руб. ').attr("price",newprice);
			$('#cart span.count').html(newcount);
			})
	//Копирование данных из хранилища
	pricei = window.localStorage[keyprice];
	idi = window.localStorage[keyid];
	counti = window.localStorage[keycount];
	$("#cart span#price").html(pricei + ' руб. ').attr("price",pricei);;
	$("#cart span.count").html(counti);

})
/**********************************************/