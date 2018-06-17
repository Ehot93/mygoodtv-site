var price, id, count;
var keyprice = 'ruso_q_712899_example';
var keyid = '322356_dwsdgf_nuts1058';
var keycount = '89df89d8f779f_pol336';
$(document).ready(function(){
price = window.localStorage[keyprice];
id = window.localStorage[keyid];
count = window.localStorage[keycount];
	$("#result1").html(price);
	$("#result2").html(id);
	$("#result3").html(count);
})