// Получаем элементы кнопки, модального окна и кнопки закрытия
const modalContent = document.getElementById("modalContent")
const openModalContent = document.getElementById("openModalContent")
const modalNotes = document.getElementById("modalNotes")
const openModalNotes = document.getElementById("openModalNotes")
const closeButtons = document.querySelectorAll(".modal-heading__close")

// При нажатии на кнопки модалок, отобразить модальное окно
if(openModalContent && openModalNotes) {
	openModalContent.onclick = function () {
		modalContent.style.display = "block"
	}
	openModalNotes.onclick = function () {
		modalNotes.style.display = "block"
	}
}

// При нажатии на кнопки закрытия, скрыть модальное окно
for (let closeButton of closeButtons) {
	closeButton.onclick = function () {
		modalContent.style.display = "none"
		modalNotes.style.display = "none"
	}
}

const navBurger = document.querySelector('.burger-menu')
const burgerButton = document.querySelectorAll('.header-blue-nav__burger-button')

for(let button of burgerButton) {
	button.onclick = function () {
		navBurger.classList.toggle('burger-menu--active')
	}
}
