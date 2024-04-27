document.getElementById('burger-menu').addEventListener('click', function () {
	this.classList.toggle('active')
	document.querySelector('.menu-items').classList.toggle('hidden')
})
