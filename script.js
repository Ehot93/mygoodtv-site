var newprice, tovarid, allprice, price;
var newcount = 0;
var id = 0;
var result=0;

var info = [newprice, id, newcount];
var keyprice = 'ruso_q_712899_example';
var keyid = '322356_dwsdgf_nuts1058';
var keycount = '89df89d8f779f_pol336';
var pricei, idi, counti;

$(document).ready(function(){
	PopUpHide();
	$('.add-tovar').click(function(){
	allprice = $('#cart span#price').attr("price");
	price = $(this).attr("price");
	tovarid = $(this).attr("rel");
	newprice = Number(allprice) + Number(price);
	newcount++;
	id += " " + tovarid;
		window.localStorage[keyprice] = newprice;
		window.localStorage[keyid] = id;
		window.localStorage[keycount] = newcount;

$('#cart span#price').html(newprice+' руб. ').attr("price",newprice);
$('#cart span.count').html(newcount);

$("#clear").click(function(){ //очистка
	newprice = 0;
	newcount = 0;
	id = 0;
	window.localStorage[keyprice] = newprice;
	window.localStorage[keyid] = id;
	window.localStorage[keycount] = newcount;
	$('#cart span#price').html(newprice+' руб. ').attr("price",newprice);
	$('#cart span.count').html(newcount);
})

		$("#test").click(function (e){
		$("#test2").html(Number(newprice) + " rub").attr("allprice",newprice);
		})
	})

	pricei = window.localStorage[keyprice];
	idi = window.localStorage[keyid];
	counti = window.localStorage[keycount];
	$("#cart span#price").html(pricei + ' руб. ').attr("price",pricei);;
	$("#cart span.count").html(counti);

})

// Окно заказа
function PopUpHide(){
	$("#popup").hide();
}

function PopUpShow(){
	$("#popup").show();
	//when IE - fade immediately
  if($.browser.msie)
  {
   $('#background').height($(document).height()).toggleClass('hidden');
  }
  	else
  //in all the rest browsers - fade slowly
  	{
  	 $('#background').height($(document).height()).toggleClass('hidden').fadeTo('slow', 0.7);
  	}

}
/*
function addarr(){ //заполение массива
	for (var i =0; i<info.length; i++) {
		info[i] = tovarid;
	}
}*/
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