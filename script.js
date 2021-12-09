var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function findMax() {
	index = 0;
	li.forEach(function(item) {
		i = item.getAttribute("id");
		if(i > index) {
			index = i
		}
	})

	return index;
}

function createListElement() {
	var newLi = document.createElement("li");
	newLi.appendChild(document.createTextNode(input.value));



	var delBut = document.createElement("button");
	i = findMax() + 1;
	delBut.innerHTML = "Delete";
	delBut.setAttribute("id", i);
	newLi.appendChild(delBut);
	newLi.setAttribute("id", i);




	ul.appendChild(newLi);
	input.value = "";

	ul = document.querySelector("ul");
	li = document.querySelectorAll("li");
}

function addDelButton() {
	li.forEach(function(item, i) {
		var delBut = document.createElement("button");
		delBut.innerHTML = "Delete";
		delBut.setAttribute("id", i);
		item.appendChild(delBut);
		item.setAttribute("id", i);
	})
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

function toggleDone(event) {
	li.forEach(function(item) {
		if(event.target === item) {
			item.classList.toggle('done');
		}
	})
}

function del(event) {
	if(event.srcElement.localName === "button") {
		index = event.target.getAttribute("id");
		li.forEach(function(e) {
			var id = e.getAttribute("id");
			if(id === index) {
				e.remove();
			}
		})
		
	}
}

addDelButton();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);

ul.addEventListener("click", del)