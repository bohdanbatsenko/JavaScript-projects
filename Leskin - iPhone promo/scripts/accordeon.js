document.addEventListener('DOMContentLoaded', () => {

	const accordion = () => {
	
		// toggle
	// const characteristicsTitle = document.querySelectorAll('.characteristics__title');
	// const characteristicsdescription = document.querySelectorAll('.characteristics__description');
	// characteristicsTitle.forEach((elem, i) => {
	// 	elem.addEventListener('click', () => {
	// 		elem.classList.toggle('active');
	// 		characteristicsdescription[i].classList.toggle('active');
	// 	});
	// });

	const characteristicsListElem = document.querySelector('.characteristics__list');
	const characteristicsItemElems = document.querySelectorAll('.characteristics__item');	

	characteristicsItemElems.forEach(elem => {
		if (elem.children[1].classList.contains('active')) {
				elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
		}
	})

	const open = (button, dropDown) => {
		closeAllDrops();
		dropDown.style.height = dropDown.scrollHeight + 'px';
		button.classList.add('active');
		dropDown.classList.add('active');
	}

	const close = (button, dropDown) => {
		button.classList.remove('active');
		dropDown.classList.remove('active');
		dropDown.style.height = '';
	}

	const closeAllDrops = (button, dropDown) => {
		characteristicsItemElems.forEach((elem) => {
			if(elem.children[0] !== button && elem.children[1] !== dropDown) {
				close(elem.children[0], elem.children[1]);
			}
		});
	}

	characteristicsListElem.addEventListener('click', (event) => {
		const target = event.target;
		if (target.classList.contains('characteristics__title')) {
			const parent = target.closest('.characteristics__item');
			const description = parent.querySelector('.characteristics__description');
			description.classList.contains('active') ?
				close(target, description) :
					open(target, description);
		} else if (target.closest);
	});
};

accordion();

});

