// Получаем элементы кнопки, модального окна и кнопки закрытия
const modalContent = document.getElementById("modalContent")
const openModalContent = document.getElementById("openModalContent")
const modalNotes = document.getElementById("modalNotes")
const openModalNotes = document.getElementById("openModalNotes")
const modalAddNote = document.getElementById("modalAddNote")
const openModalAddNote = document.getElementById("openModalAddNote")
const modalLoading = document.getElementById("modalLoading")
const openModalLoading = document.getElementById("openModalLoading")
const modalDictionary = document.getElementById("modalDictionary")
const openModalDictionary = document.getElementById("openModalDictionary")
const closeButtons = document.querySelectorAll(".modal-heading__close")

// При нажатии на кнопки модалок, отобразить модальное окно
if (openModalContent) {
	openModalContent.onclick = function () {
		modalContent.classList.remove("modal--hidden")
		document.body.style.overflow = "hidden"
	}
}
if (openModalNotes) {
	openModalNotes.onclick = function () {
		modalNotes.classList.remove("modal--hidden")
		document.body.style.overflow = "hidden"
	}
}
if (openModalAddNote) {
	openModalAddNote.onclick = function () {
		modalAddNote.classList.remove("modal--hidden")
		document.body.style.overflow = "hidden"
	}
}
if (openModalDictionary) {
	openModalDictionary.onclick = function () {
		modalDictionary.classList.remove("modal--hidden")
		document.body.style.overflow = "hidden"
	}
}

if (modalLoading) {
	modalLoading.classList.remove("modal--hidden")
	setTimeout(function () {
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
	const burgerButton = document.querySelectorAll(".header-nav__burger-button")
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

popupButton.onclick = function () {
	if (window.innerWidth <= 480) {
		console.log("boobs", popup)
		popup.classList.add("popup--mobile")
		console.log("boobs", popup.classList)
	} else {
		if (popup.style.display === "none" || popup.style.display === "") {
			popup.style.display = "block"
		} else {
			popup.style.display = "none"
		}
	}
}

const changeThemeButton = document.querySelectorAll(".base-button.white")
let themeStatus = "light"
changeThemeButton[1].onclick = function () {
	const affectedElements = document.querySelectorAll(
		".header-blue, .header-blue-nav__button, .reader, .reader-navigation__back, .reader-navigation__book-name, .reader-control, .base-button.white, .base-button, .footer",
	)

	if (themeStatus == "light") {
		themeStatus = "dark"
		console.log(themeStatus)
		changeThemeButton[1].children[0].src = "../src/img/icons/moon.svg"
		for (let el of affectedElements) {
			el.style.transition = "all 600ms"
			el.classList.add("dark")
		}
	} else if (themeStatus == "dark") {
		themeStatus = "sepia"
		console.log(themeStatus)
		changeThemeButton[1].children[0].src = "../src/img/icons/sepia.svg"
		for (let el of affectedElements) {
			el.style.transition = "all 600ms"
			el.classList.remove("dark")
			el.classList.add("sepia")
		}
	} else if (themeStatus == "sepia") {
		themeStatus = "light"
		console.log(themeStatus)
		changeThemeButton[1].children[0].src = "../src/img/icons/sun.svg"
		for (let el of affectedElements) {
			el.style.transition = "all 600ms"
			el.classList.remove("sepia")
		}
	}
}
