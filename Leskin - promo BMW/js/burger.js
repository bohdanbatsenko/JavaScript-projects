const menuElem = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.humburger-menu');

const menuHandler = event => {
	const target = event.target;
	const parent = target.closest('.menu');
	if ( (!parent && target !== hamburgerMenu) || 
				target.classList.contains('menu-list__link')) {
		toggleMenu();
	}
}

const toggleMenu = () => {
	menuElem.classList.toggle('menu-active');
	hamburgerMenu.classList.toggle('hamburger-menu-active');
	if (menuElem.classList.contains('menu-active')) {
		document.body.addEventListener('click', menuHandler)
	} else {
		document.body.removeEventListener('click', menuHandler)
	}
};

hamburgerMenu.addEventListener('click', toggleMenu);