// Marca a Tarefa como feita
$("ul").on("click", "li", function(){
	$(this).toggleClass("tarefaCompleta");
});

// Excluir tarefa
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Adicionar tarefa quando apertar tecla "ENTER"
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// Pega texto digitado no input
		var textTarefa = $(this).val();
		// Adiciona nova li (tarefa) na ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + textTarefa + "</li>");
		// limpa campo após adicionar tarefa
		$("input[type='text']").val("");
	}	
});

// Toggle campo de adicionar tarefa no icone '+'
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
