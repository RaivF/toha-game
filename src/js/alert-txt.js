let alert = document.getElementById('alert')
let txtPole = document.getElementById('txt-pole')
function setVisible(status) {
	if (status) {
		alert.classList.remove('none')
	} else {
		alert.classList.add('none')
	}
}
setVisible(false)

function myAlert(text) {
	setVisible(true)
	txtPole.textContent = text
	setTimeout(setVisible, 3000, false)
}

export { myAlert }
