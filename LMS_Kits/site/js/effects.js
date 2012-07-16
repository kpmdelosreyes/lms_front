//field input box return to default and change text
$(".input_account").live("blur", function(){
	var default_value = $(this).attr("rel");
	if ($(this).val() == ""){
		$(this).val(default_value);
	}
}).live("focus", function(){
	var default_value = $(this).attr("rel");
	if ($(this).val() == default_value){
		$(this).val("");
	}
});
$(".input_password").live("blur", function(){
	var default_value = $(this).attr("rel");
	if ($(this).val() == ""){
		$(this).val(default_value);
		$(".input_password").get(0).type = 'text';
	}
	
}).live("focus", function(){
	var default_value = $(this).attr("rel");
	if ($(this).val() == default_value){
		$(this).val("");
	}
	$(".input_password").get(0).type = 'password';
});


$(".item_head").click(function(){
  alert();
});

	
	



   
   
