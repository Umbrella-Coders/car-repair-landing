
$(document).ready(function() {
		$("#dropzone").dropzone({ url: "engine/upload.php" });




				$('a[href^="#"]').bind('click.smoothscroll',function (e) {
				 e.preventDefault();
				 
				var target = this.hash,
				 $target = $(target);
				  
				$('html, body').stop().animate({
				 'scrollTop': $target.offset().top
				 }, 500, 'swing', function () {
				 //window.location.hash = target;
				 });
					});


});

new WOW().init();



$('.send').click(function(){

    $.notify("Send Clicked", "success", { position:"right",autoHideDelay: 5000 });

    var form = jQuery(this).parent();
	
	var fio = form[0].fio.value;
	var phone = form[0].phone.value;

  
    $(".dz-filename").each(function( index ) {
    	var filename = $( this ).text();
    	  form.append('<input type="hidden" name="file'+index+'" value="'+filename+'"/>');
		});

	var formdata = new FormData($(form)[0]);
		
	if(fio.length >= 3 && phone.length >= 6){
	

    $.ajax({
       url: 'engine/send.php',
       type: 'POST',
       dataType: 'html',
       async: true,
    cache: false,
    contentType: false,
    processData: false,
       data: formdata, 
        success: function(response) {
									$.notify({
						title: '<strong>Спасибо!</strong>',
						message: 'Ваша заявка на оценку авто успешно направлена нашим специалистам. Мы свяжемся с Вами в ближайшее время.'
					},{
						type: 'success'
					});
		   },
        error: function(response) {
	         $.notify({
						title: '<strong>Ошибка!</strong>',
						message: 'При отправке данных получена ошибка, проверьте правильность ввода данных!'
					},{
						type: 'danger'
					});
          } 
	});
	}else {
		         $.notify({
						title: '<strong>Ошибка!</strong>',
						message: 'При отправке данных получена ошибка, проверьте правильность ввода данных!'
					},{
						type: 'danger'
					});
			 return false;
	};

});

			



