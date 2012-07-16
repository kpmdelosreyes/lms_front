$(document).ready(function() {
	  $('input').each(function() {
	    var default_value = this.value;
	    $(this).focus(function() {
	        if(this.value == default_value) {
	            this.value = '';
	        }
	    });
	    $(this).blur(function() {
	        if(this.value == '') {
	            this.value = default_value;
	        }
	    });
	 });
});
/* 
 $(document).ready(function(){
			$(".category_list li").hover(
				function() { } 
			);
	  	if (document.all) {
				$(".category_list li").hoverClass ("sfHover");
			}
});
	  
$.fn.hoverClass = function(c) {
	return this.each(function(){
		$(this).hover( 
			function() { $(this).addClass(c);  },
			function() { $(this).removeClass(c); }
		);
	});
};	

*/
