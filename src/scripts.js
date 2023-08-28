// Получаем элементы-кнопки, модальные окна и кнопки закрытия
const modalWindows = document.querySelectorAll(
	"#modalContent, #modalNotes, #modalAddNote",
)
// #modalDictionary
const openModalButtons = document.querySelectorAll(
	"#openModalContent, #openModalNotes, #openModalAddNote",
)
// #openModalDictionary
const modalLoading = document.querySelector("#modalLoading")
const closeButtons = document.querySelectorAll(".modal-heading__close")

// При нажатии на элементы-кнопки, отобразить модальное окно
for (let i = 0; i < modalWindows.length; i++) {
	if (openModalButtons[i]) {
		openModalButtons[i].addEventListener("click", () => {
			modalWindows[i].classList.remove("modal--hidden")
			document.body.style.overflow = "hidden"
		})
	}
}

// Мок модального окна загрузки
if (modalLoading) {
	modalLoading.classList.remove("modal--hidden")
	setTimeout(() => {
		modalLoading.classList.add("modal--hidden")
	}, 3000)
}

// При нажатии на кнопки закрытия, скрыть модальное окно
for (let closeButton of closeButtons) {
	closeButton.onclick = function () {
		modalContent.classList.add("modal--hidden")
		modalNotes.classList.add("modal--hidden")
		modalAddNote.classList.add("modal--hidden")
		modalDictionary.classList.add("modal--hidden")
	}
}

const navBurger = document.querySelector(".burger-menu")
const burgerButton = document.querySelectorAll(".header-nav__burger-button")
let visibilityFlag = false

for (let button of burgerButton) {
	const navBurger = document.querySelector(".burger-menu")
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

if (fullScreenButton) {
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
}

const addButtons = document.querySelectorAll(".description-block-control__add")
let addedFlag = false

for (let addButton of addButtons) {
	addButton.onclick = function (e) {
		addedFlag = !addedFlag
		if (addedFlag) {
			e.preventDefault()
			addButton.style.display = "none"
			const removeButtons = document.querySelectorAll(
				".description-block-control__remove",
			)
			for (let removeButton of removeButtons) {
				removeButton.style.display = "flex"
			}
		} else {
			e.preventDefault()
			addButton.style.display = "block"
			const removeButtons = document.querySelectorAll(
				".description-block-control__remove",
			)
			for (let removeButton of removeButtons) {
				removeButton.style.display = "flex"
			}
		}
	}
}

const popupButton = document.getElementById("popupButton")
const popup = document.getElementById("popup")

if (popupButton) {
	popupButton.onclick = function () {
		if (window.innerWidth <= 480) {
			popup.classList.add("popup--mobile")
		} else {
			if (popup.style.display === "none" || popup.style.display === "") {
				popup.style.display = "block"
			} else {
				popup.style.display = "none"
			}
		}
	}
}

const changeThemeButton = document.querySelectorAll(".base-button.white")
let themeStatus = "light"
if (changeThemeButton[1]) {
	changeThemeButton[1].addEventListener("click", () => {
		const affectedElements = document.querySelectorAll(
			".header--blue, .header--blue-nav__button, .reader, .reader-navigation__back, .reader-navigation__book-name, .reader-control, .base-button.white, .base-button, .footer",
		)

		for (let el of affectedElements) {
			el.style.transition = "all 600ms"
		}

		if (themeStatus == "light") {
			themeStatus = "dark"
			console.log(themeStatus)
			changeThemeButton[1].children[0].src = "../src/img/icons/moon.svg"
			for (let el of affectedElements) {
				el.classList.add("dark")
			}
		} else if (themeStatus == "dark") {
			themeStatus = "sepia"
			console.log(themeStatus)
			changeThemeButton[1].children[0].src = "../src/img/icons/sepia.svg"
			for (let el of affectedElements) {
				el.classList.remove("dark")
				el.classList.add("sepia")
			}
		} else if (themeStatus == "sepia") {
			themeStatus = "light"
			console.log(themeStatus)
			changeThemeButton[1].children[0].src = "../src/img/icons/sun.svg"
			for (let el of affectedElements) {
				el.classList.remove("sepia")
			}
		}
	})
}

const showPasswordButtons = document.querySelectorAll(
	".authorization-form-inputs__button",
)

if (showPasswordButtons) {
	for (let button of showPasswordButtons) {
		button.addEventListener("click", (e) => {
			e.preventDefault()
			const passwordInput = e.currentTarget.previousElementSibling
			if (passwordInput && passwordInput.type == "password") {
				passwordInput.type = "text"
			} else {
				passwordInput.type = "password"
			}
		})
	}
}
