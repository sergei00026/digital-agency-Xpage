// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const html = document.querySelector('html');
const headerList = document.querySelector('.main-header__navigation');

document.addEventListener("click", function (e) {
	if (headerList.classList.contains('_active-menu') && !e.target.closest('.main-header__list')) {
		html.classList.toggle('menu-open')
		headerList.classList.toggle('_active-menu')
	} else if (e.target.closest('.menu__icon')) {
		html.classList.toggle('menu-open')
		headerList.classList.toggle('_active-menu')
	}
});
