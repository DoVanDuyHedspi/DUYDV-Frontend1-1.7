var nodeList = document.getElementsByTagName("li");
var i;
for(i=0;i<nodeList.length;i++){
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	nodeList[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
for(i=0;i<close.length;i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}
var list = document.querySelector("ul");
list.addEventListener('click',function(event){
	if(event.target.tagName === "LI"){
		event.target.classList.toggle('checked');
	}
},false);

function newElement() {
	var li = document.createElement("LI");
	var txt = document.getElementById("myInput").value;
	var t = document.createTextNode(txt);
	li.appendChild(t);
	if(txt === '') {
		alert('you must write something!');
	}else {
		document.getElementById('myUL').appendChild(li);
	}
	document.getElementById('myInput').value = '';
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
function deleteAll() {
	var elements = document.getElementsByTagName("LI");
	for(i=0;i<elements.length;i++){
		if (hasClass(elements[i],'checked')) {
			elements[i].style.display = "none";
		}
	}
}

function selectAll(){
	var list = document.getElementsByTagName("LI");
	for(i=0;i<list.length;i++){
		if(!hasClass(list[i],'checked')){
			list[i].className = "checked";
		}
	}
}