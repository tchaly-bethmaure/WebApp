var button = document.getElementById('my_button');
var txt_input = document.getElementById('some_input');
var bool_first_click = true;

button.addEventListener('click',function(){
	var text = txt_input.value;
	alert(text);
})

txt_input.addEventListener('click',function(){
	if(bool_first_click){ txt_input.value=''; bool_first_click = false; }
})