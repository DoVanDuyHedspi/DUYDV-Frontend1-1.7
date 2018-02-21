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
	$(document).on('dblclick',"#myUL li",function(){
		var text = $(this).find('p').text();
		
		$(this).before('<div class="fix"><input type="text" id="fixInput" value="'+text+'"></div>');
		$(this).remove();
		$("#fixInput").focus();
		$("#fixInput").blur(function(event) {
			var txt = $('#fixInput').val();
			$("#fixInput").before('<li><p>'+txt+'</p><span class="close">x</span></li>');
			$("#fixInput").remove();
		});
		$("#fixInput").keyup(function(event) {
		if(event.keyCode == 13){
			var txt = $('#fixInput').val();
			$(this).parent().before('<li><p>'+txt+'</p><span class="close">x</span></li>');
			$(this).parent().remove();

		}
	});
	})
	$(document).on('click',"#clearCompleted",clearCompleted);
	$("#completedAll").click(function(){
		$('#myUL li').addClass('checked');
	})

});
