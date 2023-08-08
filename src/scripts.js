// Получаем элементы кнопки, модального окна и кнопки закрытия
const modalContent = document.getElementById("modalContent")
const openModalContent = document.getElementById("openModalContent")
const modalNotes = document.getElementById("modalNotes")
const openModalNotes = document.getElementById("openModalNotes")
const modalAddNote = document.getElementById("modalAddNote")
const openModalAddNote = document.getElementById("openModalAddNote")
const closeButtons = document.querySelectorAll(".modal-heading__close")

// При нажатии на кнопки модалок, отобразить модальное окно
if (openModalContent && openModalNotes && openModalAddNote) {
	openModalContent.onclick = function () {
		modalContent.style.display = "block"
		document.body.style.overflow = "hidden"
	}
	openModalNotes.onclick = function () {
		modalNotes.style.display = "block"
		document.body.style.overflow = "hidden"
	}

	openModalAddNote.onclick = function () {
		modalAddNote.style.display = "block"
		document.body.style.overflow = "hidden"
	}
}

// При нажатии на кнопки закрытия, скрыть модальное окно
for (let closeButton of closeButtons) {
	closeButton.onclick = function () {
		modalContent.style.display = "none"
		modalNotes.style.display = "none"
		modalAddNote.style.display = "none"
	}
}

const navBurger = document.querySelector(".burger-menu")
const burgerButton = document.querySelectorAll(
	".header-blue-nav__burger-button",
)

let visibilityFlag = false
for (let button of burgerButton) {
	button.onclick = function () {
		visibilityFlag = !visibilityFlag
		if (visibilityFlag) {
			document.body.style.overflow = "hidden"
			navBurger.classList.add("burger-menu--active")
		} else {
			document.body.style.overflow = ""
			navBurger.classList.remove("burger-menu--active")
		}
	}
}

const fullScreenButton = document.querySelector(".base-button-hidden")

let fullScreenFlag = false
fullScreenButton.onclick = function () {
	fullScreenFlag = !fullScreenFlag
	if (fullScreenFlag) {
		if (document.body.mozRequestFullScreen) {
			// This is how to go into fullscren mode in Firefox
			// Note the "moz" prefix, which is short for Mozilla.
			document.body.mozRequestFullScreen()
		} else if (document.body.webkitRequestFullScreen) {
			// This is how to go into fullscreen mode in Chrome and Safari
			// Both of those browsers are based on the Webkit project, hence the same prefix.
			document.body.webkitRequestFullScreen()
		}
	} else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen()
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen()
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen()
		}
	}
}
