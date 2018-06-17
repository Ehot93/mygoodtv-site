var price, id, count;
var keyprice = 'ruso_q_712899_example';
var keyid = '322356_dwsdgf_nuts1058';
var keycount = '89df89d8f779f_pol336';
$(document).ready(function(){
	// PopUpHide();
	//BasketHide();
    //DataHide();
    //DeliveryHide();
price = window.localStorage[keyprice];
id = window.localStorage[keyid];
count = window.localStorage[keycount];
	$("#result1").html(price);
	$("#result2").html(id);
	$("#result3").html(count);

    $('#countProduct').html(count);
    $('#coast').html(price);
    // $("#counter").html(count);
})
	
// $(".hide9").click(function(){
// $('.hide1').hide();
// });
    //корзина
	function BasketShow(){
        $(".hide1").show();
    }
    function BasketHide(){
        $(".hide1").hide();
        
    }
    //данные
    function DataShow(){
        $(".hide2").show();
    }
    function DataHide(){
        $(".hide2").hide();
        
    }

    //доставка
    function DeliveryShow(){
        $(".hide3").show();
    }
    function DeliveryHide(){
        $(".hide3").hide();
        
    }

    // //оплата
    function PaymentShow(){
        $(".hide4").show();
    }
    function PaymentHide(){
        $(".hide4").hide();
    }

    // //Подтверждение
    function AgreeShow(){
        $(".hide5").show();
    }
    function AgreeHide(){
        $(".hide5").hide();
    }