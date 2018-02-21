function addListItem(){
	var text=$('#myInput').val();
	$('#myUL').append('<li>'+text+'<span class="close">x</span></li>');
	$('#myInput').val('');
}


function clearCompleted() {
	$('#myUL .checked').remove();
}
$(document).ready(function(){
	$("#myInput").keyup(function(event) {
		if(event.keyCode == 13){
			addListItem();
		}
	});
	$(".addBtn").click(function(){
		addListItem();
	})
	$(document).on('click',"#myUL li span",function(){
		$(this).parent().remove();
	})
	$(document).on('click',"#myUL li",function(){
		$(this).toggleClass('checked');
	})
	$(document).on('click',"#clearCompleted",clearCompleted);
	$("#completedAll").click(function(){
		$('#myUL li').addClass('checked');
	})
});
