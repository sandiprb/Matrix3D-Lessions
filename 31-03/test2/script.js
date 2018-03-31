var eltextName = document.getElementById('textNameInput')
var eltextNameDisplay = document.getElementById('textNameDisplay')

eltextName.addEventListener('input', function(e) {
	eltextNameDisplay.innerText = this.value.toUpperCase()
})
