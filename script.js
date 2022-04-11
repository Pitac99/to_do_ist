var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li_holder = document.querySelectorAll("li");
var delete_bot = document.getElementsByClassName("del_bot");

function clickEventAd(){
	var new_li_holder = document.querySelectorAll("li");
	var new_delete_bot = document.getElementsByClassName("del_bot");
	
	for (var j=0; j<new_li_holder.length; j++){
		new_li_holder[j].addEventListener("click", itemDone);
		new_delete_bot[j].addEventListener("click", stergeLista);
	}
}

for (var i=0; i<li_holder.length; i++){
	li_holder[i].addEventListener("click", itemDone);

}
for(var n=0; n<delete_bot.length; n++){
	delete_bot[n].addEventListener("click", stergeLista);
}
function itemDone()
{ 	this.classList.toggle("done");
}
function inputLength() {
	return input.value.length;
}
function createListElement() {
	var li = document.createElement("li");
	var div = document.createElement("div");
	var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	btn.innerHTML="Delete";
	btn.setAttribute('class', 'del_bot');
	div.setAttribute('class', 'wrapper');
	btn.setAttribute('id', 'delete');
	div.appendChild(li);
	ul.appendChild(div)
	div.appendChild(btn);
	input.value = "";
	clickEventAd();
    }
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function stergeLista(){
	console.log(this.parentNode);
	this.parentElement.remove(this);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

