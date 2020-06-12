window.onload = () => {
	const gamepadObject = document.querySelector('#gamepad');

	// console.log(gamepadObject)

	// gamepadObject.addEventListener('click', function (event) {
	// 	if (event.target.nodeName === "path") {
	// 		let parent = event.target.parentNode;

	// 		parent.querySelectorAll('path').forEach(elem => {
	// 			elem.classList.toggle('active')
	// 		})

	// 	}
	// })

	const elements = gamepadObject.querySelectorAll('.element');

	const modal = document.querySelector('.v-modal');
	const modalBody = modal.querySelector('.modal-body')

	modal.addEventListener('click', function (event) {
		if (event.target.dataset.close) {
			modal.classList.remove('open')
		}

	})

	elements.forEach(function (elem) {
		elem.addEventListener('click', () => {
			// alert(elem.dataset.description)
			modal.classList.toggle('open')
			modalBody.innerHTML = `<p>${elem.dataset.description || 'Сломалась эта деталь?'}</p>`
		})
	})


}