/*-----------------------------------------------------------------------------------*/
/*	VISUAL SLIDER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	//rotation speed and timer
	var speed = 6000;
	var run = setInterval('rotate()', speed);	
	//grab the width and calculate left value
	var item_width = $('.visual li').outerWidth(); 
	var left_value = item_width * (-1); 
    //move the last item before first item, just in case user click prev button
	$('.visual li:first').before($('.visual li:last'));
	//set the default item to the correct position 
	$('.visual ul').css({'left' : left_value});
    //if user clicked on prev button
	$('.visual a.prev').click(function() {
		//get the right position            
		var left_indent = parseInt($('.visual ul').css('left')) + item_width;
		//slide the item            
		$('.visual ul:not(:animated)').fadeOut('fast').animate({'left' : left_indent}, 300,function(){    
            //move the last item and put it as first item            	
			$('.visual li:first').before($('.visual li:last'));           
			//set the default item to correct position
			$('.visual ul').fadeIn('fast').css({'left' : left_value});
		});
		//cancel the link behavior            
		return false;
 	});
    //if user clicked on next button
	$('.visual a.next').click(function() {
		//get the right position
		var left_indent = parseInt($('.visual ul').css('left')) - item_width;
		//slide the item
		$('.visual ul:not(:animated)').fadeOut('fast').animate({'left' : left_indent}, 300, function () {            
            //move the first item and put it as last item
			$('.visual li:last').after($('.visual li:first'));			
			//set the default item to correct position
			$('.visual ul').fadeIn('fast').css({'left' : left_value});		
		});		         
		//cancel the link behavior
		return false;		
	});	
	//if mouse hover, pause the auto rotation, otherwise rotate it
	$('.visual').hover(		
		function() {
			clearInterval(run);
		}, 
		function() {
			run = setInterval('rotate()', speed);	
		}
	);         
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin :)  
function rotate() {
	$('.visual a.next').click();
} 

/*-----------------------------------------------------------------------------------*/
/*	COURSES ACCORDION
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	lastBlock = ".course_1";
	$(".courses li a.course_accordion").click(
		function(event){
			var a = $(this).parent("li").attr("class");					
			if(lastBlock != '.' + a){
				$(lastBlock + " .course" ).slideUp('fast');
				$('.' + a + " .course" ).slideDown('fast');
			}
			lastBlock = '.' + a;
			event.preventDefault(); 
		}
	);
});

/*-----------------------------------------------------------------------------------*/
/*	POPULAR TEACHER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	$(".popular_teacher .pagination li a").click(function(event){
		var item_height = $('.popular_teacher_slider li').outerHeight(true); 
		if($(this).parent("li").attr("class") != 'current'){
			$(".popular_teacher .pagination li").removeClass("current");
			$(this).parent("li").addClass("current");
			switch ($(this).attr("class")){
				case "teacher_1":
					$(".popular_teacher_slider ul").animate({top: 0,left: 0}, 500, null);				
					break;
				case "teacher_2":
					$(".popular_teacher_slider ul").animate({top: -(item_height),left: 0}, 500, null);	
					break;
				case "teacher_3":
					$(".popular_teacher_slider ul").animate({top: -(item_height * 2),left: 0}, 500, null);
					break;
			}
		}
		event.preventDefault(); 
	});
});

/*-----------------------------------------------------------------------------------*/
/*	POPULAR CLASS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
	$(".popular_class .pagination li a").click(function(event){
		var item_height = $('.popular_class_slider li').outerHeight(true); 
		if($(this).parent("li").attr("class") != 'current'){
			$(".popular_class .pagination li").removeClass("current");
			$(this).parent("li").addClass("current");
			switch ($(this).attr("class")){
				case "class_1":
					$(".popular_class_slider ul").animate({top: 0,left: 0}, 500, null);
					break;
				case "class_2":
					$(".popular_class_slider ul").animate({top: -(item_height),left: 0}, 500, null);	
					break;
				case "class_3":
					$(".popular_class_slider ul").animate({top: -(item_height * 2),left: 0}, 500, null);
					break;
			}
		}
		event.preventDefault(); 
	});
});

/*-----------------------------------------------------------------------------------*/
/*	accordion
/*-----------------------------------------------------------------------------------*/

$(document).ready(function () {
  $('.accordion li a.accordion_trigger').click(function(event){
    if ($(this).parent('li').attr('class') != 'current'){
      $('.accordion li ul').slideUp();
      $(this).next().slideToggle();
      $('.accordion li').removeClass('current');
      $(this).parent('li').addClass('current');
    }
	event.preventDefault(); 
  });
});

/*-----------------------------------------------------------------------------------*/
/*	GAME SLIDER
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
	//rotation speed and timer
	var speed = 2000;
	var run = setInterval('game_rotate()', speed);	
	//grab the width and calculate left value
	var item_width = $('.english_game_slider li').outerWidth(); 
	var left_value = item_width * (-1); 
    //move the last item before first item, just in case user click prev button
	$('.english_game_slider li:first').before($('.english_game_slider li:last'));
	//set the default item to the correct position 
	$('.english_game_slider ul').css({'left' : left_value});
    //if user clicked on prev button
	$('.english_game a.prev_game').click(function() {
		//get the right position            
		var left_indent = parseInt($('.english_game_slider ul').css('left')) + item_width;
		//slide the item            
		$('.english_game_slider ul:not(:animated)').animate({'left' : left_indent}, 300,function(){    
            //move the last item and put it as first item            	
			$('.english_game_slider li:first').before($('.english_game_slider li:last'));           
			//set the default item to correct position
			$('.english_game_slider ul').css({'left' : left_value});
		});
		//cancel the link behavior            
		return false;
 	});
    //if user clicked on next button
	$('.english_game a.next_game').click(function() {
		//get the right position
		var left_indent = parseInt($('.english_game_slider ul').css('left')) - item_width;
		//slide the item
		$('.english_game_slider ul:not(:animated)').animate({'left' : left_indent}, 300, function () {            
            //move the first item and put it as last item
			$('.english_game_slider li:last').after($('.english_game_slider li:first'));			
			//set the default item to correct position
			$('.english_game_slider ul').css({'left' : left_value});		
		});		         
		//cancel the link behavior
		return false;		
	});	
	$('.english_game_slider').hover(		
		function() {
			clearInterval(run);
		}, 
		function() {
			run = setInterval('game_rotate()', speed);	
		}
	);         
});
function game_rotate() {
	$('.english_game a.next_game').click();
}