var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var deletes = document.querySelectorAll(".removeBtn");

// ***ADD TO LIST***

// calculates length of input
function inputLength() {
	return input.value.length;
}

//solved on stack overflow
function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

// creates new list element with button
function createListElement() {
	var li = document.createElement("li");
	var addButton = document.createElement("button");
	addButton.className = "removeBtn";
	addButton.textContent = "Delete";
	addButton.onclick = removeParent;
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(addButton)
	li.onclick = liClick;
	ul.appendChild(li);
	input.value = "";
}

// adds to list once button is clicked
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// adds to list once enter is hit
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// ***LINE THROUGH***

// adds event listener to each li
for(var i=0; i<list.length; i++){
 list[i].addEventListener("click", liClick);
}

// line through li element when clicked
function liClick(){
  this.classList.toggle("done");
}

// ***DELETE BUTTON***

// adds listener to each delete button
deletes.forEach(btn => {
  btn.addEventListener('click', function () {
    var li = this.parentNode
    li.remove()
  })
})

// removes li element
function deleteList() {
  var li = this.parentNode
  li.remove()
}