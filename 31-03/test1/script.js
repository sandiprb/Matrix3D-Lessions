var elColorInput = document.getElementById('colorInput')
var elText = document.getElementById('text')

function colorChange(e) {
	elText.style.color = this.value
}

elColorInput.addEventListener('change', colorChange)
