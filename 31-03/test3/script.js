var textDisplay = document.getElementById('textDisplay')

var btnBold = document.getElementById('btnBold')
var btnCaseChange = document.getElementById('btnCaseChange')
var btnUnderline = document.getElementById('btnUnderline')

btnBold.addEventListener('click', function(e) {
	if (textDisplay.style.fontWeight === 'bold') {
		textDisplay.style.fontWeight = ''
	} else {
		textDisplay.style.fontWeight = 'bold'
	}
})

btnCaseChange.addEventListener('click', function(e) {
	if (textDisplay.style.textTransform === 'uppercase') {
		textDisplay.style.textTransform = 'lowercase'
	} else if (textDisplay.style.textTransform === ' lowercase') {
		textDisplay.style.textTransform = 'uppercase'
	} else {
		textDisplay.style.textTransform = 'uppercase'
	}
})

btnUnderline.addEventListener('click', function(e) {
	if (textDisplay.style.textDecoration === 'underline') {
		textDisplay.style.textDecoration = ''
	} else {
		textDisplay.style.textDecoration = 'underline'
	}
})
