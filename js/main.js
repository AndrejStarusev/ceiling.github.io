$(document).ready(function(){
    $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
			console.log(form_data);
            $.ajax({
				type: "POST", //Метод отправки
				url: "send.php", //путь до php фаила отправителя
				data: form_data,
				success: function() {
					//код в этом блоке выполняется при успешной отправке сообщения
					console.log(1);
				}
		});
	});  
});

//Initial slick slider
$('#slider-wrap').slick({
	autoplay: true,
	arrows: false,
	dots: true,
	fade: true
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.751990, lng: 37.625456},
    zoom: 12,
	scrollwheel: false});
  for (let i=0; i<25; i++){
	  let k= Math.random() * (100 - 1).toFixed(0) / 1000;
	  let m= Math.random() * (100 - 1).toFixed(0) / 1000;
	  let marker = new google.maps.Marker({
			position: {lat: 55.7 + k, lng: 37.6 + m},
			map: map
		});
  }
}


