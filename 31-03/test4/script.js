//get the form DOM Node in a variable
var elForm = document.getElementById('form')
var elInputMobile = document.getElementById('inputMobile')
var re = /^[6-9][\d]{9}$/

// attach an eventListener on form Submit
elForm.addEventListener('submit', function(event) {
	event.preventDefault()
	// on form submit check the value of inputMobile
	var mobileNo = elInputMobile.value.trim()
	// if  inputMobile is blank show error message to enter mobile number
	if (mobileNo === '') {
		alert('enter mobile number')
	} else if (mobileNo.length < 10) {
		// if inputMobile is less than 10 digit error: Please enter valid 10 digit mobile number
		alert('Please enter valid 10 digit mobile number')
	} else if (!re.test(mobileNo)) {
		//if mobile number doesn't match regex error: Please enter valid mobile number
		alert('Please enter valid mobile')
	} else {
		// if ALL OK Submit the FORM
		alert('Form Submission OK!')
		elInputMobile.value = ''
	}
})
