$(document).ready(function() {
   $('.input-group input[required], .input-group textarea[required], .input-group select[required]').on('keyup, change', function() {
        var $group = $(this).closest('.input-group'),
			$addon = $group.find('.input-group-addon'),
			$icon = $addon.find('span'),
			state = false;
            
    	if (!$group.data('validate')) {
			state = $(this).val() ? true : false;  
		}else if ($group.data('validate') == "email") {
			state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
		}else if($group.data('validate') == 'phone') {
			state = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test($(this).val())
            a++;
		}else if ($group.data('validate') == "length") {
			state = $(this).val().length >= $group.data('length') ? true : false;
		}else if ($group.data('validate') == "number") {
			state = !isNaN(parseFloat($(this).val())) && isFinite($(this).val());
		}
		if (state) {
				$addon.removeClass('danger');
				$addon.addClass('success');
				$icon.attr('class', 'glyphicon glyphicon-ok');
		}else{
				$addon.removeClass('success');
				$addon.addClass('danger');
				$icon.attr('class', 'glyphicon glyphicon-remove');    
    	} 
 });
});




function calcDailyCals()
{
	
		var a=parseFloat($("#weight").val());
		b=(a*=1);
		//var c=parseFloat($("#feet_cm").val());
        var c=parseFloat($("#inches").val());
		b=(c=1*c);
		var d=parseFloat($("#age").val()),e=$("input[name='sex']:checked").val(),b=$("#activity_level").val(),
		a="male"==e?88.362+13.397*a+4.799*c-5.677*d:447.593+9.247*a+3.098*c-4.33*d;
		"no"===b?a*=1.2:"light"===b?a*=1.375:"moderate"===b?a*=1.55:"heavy"===b?a*=1.725:"extreme"===b&&(a*=1.9);
		a=Math.round(a+parseInt($("#gain_loss_amount").val()));
        $("#calAmount").text(500<a?a:0);
		$("#dc_results").show();
      
        	
}

function resetForm(){
    $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $(':checkbox, :radio').prop('checked', false);
    location.reload(); 
}



