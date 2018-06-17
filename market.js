var newprice, tovarid, allprice, price;
var newcount ;//= 0;
var id ;//= 0;
var result ;// = 0;
//Массив и ключи
var info = [newprice, id, newcount];
var keyprice = 'ruso_q_712899_example';
var keyid = '322356_dwsdgf_nuts1058';
var keycount = '89df89d8f779f_pol336';
var pricei, idi, counti;

$(document).ready(function(){
	console.log(newcount, id, result);
/////////////////////////////////////////////////
	//Добавление товара	
	$('.add-tovar').click(function(){
	allprice = $('#cart span#price').attr("price");
	price = $(this).attr("price");
	tovarid = $(this).attr("rel");
	newprice = Number(allprice) + Number(price);
	// newcount++;
	newcount = 99;//Number(newcount) + Number(price);
	id += " " + tovarid;
		window.localStorage[keyprice] = newprice;
		window.localStorage[keyid] = id;
		window.localStorage[keycount] = newcount;

		$('#cart span#price').html(newprice+' руб. ').attr("price",newprice);
		$('#cart span.count').html(newcount);
})/////////////////////////////////////////////////
			//Кнопка "очистить"
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
	//Запись из localstorage
	pricei = window.localStorage[keyprice];
	idi = window.localStorage[keyid];
	counti = window.localStorage[keycount];
	$("#cart span#price").html(pricei + ' руб. ').attr("price",pricei);;
	$("#cart span.count").html(counti);

})
/**********************************************/
/*$("#send").click(function(e) {
    window.localStorage[key] = info; //*
    getMessageFromLocalStorage();
    alert("успех");
})

// Приём сообщения
function getMessageFromLocalStorage() {
    result.textContent = window.localStorage[key];
}
window.addEventListener('storage', function(event) {
    if (event.key !== key) {
        return;  // Если прислали не наши данные, ничего не делаем
    }
    getMessageFromLocalStorage();
});

// Если какие-то данные уже лежат в сессии, отображаем
// их сразу после загрузки страницы
getMessageFromLocalStorage();*/