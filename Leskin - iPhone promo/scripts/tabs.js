// document.addEventListener('DOMContentLoaded', () => {
// 	'use strict'
// 	const tabs = () => {
// 		const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
// 		const cardDetailsTitleElems = document.querySelectorAll('.card-details__title');
// 		const cardImageElems = document.querySelectorAll('.card__image');

// 		const hideAll = () => {
// 			for(let i =0; i < cardDetailChangeElems.length; i++) {
// 				cardDetailChangeElems[i].classList.remove('active');
// 				cardDetailsTitleElems[i].classList.remove('active');
// 				cardImageElems[i].classList.remove('active');
// 			}
// 		};

// 		for(let i = 0; i < cardDetailChangeElems.length; i++) {
// 			cardDetailChangeElems[i].addEventListener('click', () => {
// 				hideAll();
// 				cardDetailChangeElems[i].classList.add('active');
// 				cardDetailsTitleElems[i].classList.add('active');
// 				cardImageElems[i].classList.add('active');
// 			})
// 		};
		
// 	};
// 	tabs();
// });

document.addEventListener('DOMContentLoaded', () => {


	// XMLHttprequest
	// const getData = (url, callback) => {
	// 	const request = new XMLHttpRequest();
	// 	request.open('GET', url);
	// 	request.send();
	// 	request.addEventListener('readystatechange', () => {
	// 		if (request.readyState !== 4) return;
	// 		if (request.status === 200) {
	// 			const response = JSON.parse(request.response)
	// 			callback(response);
	// 		} else {
	// 			console.log(new Error('Ошибка:' + request.status));
	// 		}
	// 	});
	// }


	// fetch
	const getData = (url, callback) => {
		fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(response.statusText);
		})	
		.then(callback)
		.catch((err) => {
			console.log(err);
		});

	};






	// tabs
	'use strict'
	const tabs = () => {
		const cardDetailChangeElems = document.querySelectorAll('.card-detail__change');
		const cardDetailsTitleElem = document.querySelector('.card-details__title');
		const cardImageItemElem = document.querySelector('.card__image_item');
		const cardDetailsPriceElem = document.querySelector('.card-details__price');
		const descriptionMemory = document.querySelector('.description__memory');

		const data = [
			{
				name: 'Смартфон Apple iPhone 12 Pro 128GB Graphite',
				img: 'img/iPhone-graphite.png',
				price: '95.990',
				memoryROM: 128
			},
			{
				name: 'Смартфон Apple iPhone 12 Pro 128GB Silver',
				img: 'img/iPhone-silver.png',
				price: '97.990',
				memoryROM: 256
			},
			{
				name: 'Смартфон Apple iPhone 12 Pro 128GB Pacific Blue',
				img: 'img/iPhone-blue.png',
				price: '90.990',
				memoryROM: 128
			}
		];
		
		const deactivate = () => {
			cardDetailChangeElems.forEach(btn => btn.classList.remove('active'));
		}

		cardDetailChangeElems.forEach((btn, i) => {
			btn.addEventListener('click', () => {
				if(!btn.classList.contains('active')) {
					deactivate();
					btn.classList.add('active');
					cardDetailsTitleElem.textContent = data[i].name;
					cardImageItemElem.src = data[i].img;
					cardImageItemElem.alt = data[i].name;
					cardDetailsPriceElem.textContent = data[i].price + '₽';
					descriptionMemory.textContent = `Встроенная память (ROM) ${data[i].memoryROM} ГБ`;
				}
			});
		});
	};


	const modal = () => {
		const cardDetailsButtonBuy = document.querySelector('.card-details__button_buy');
		const cardDetailsButtonDelivery = document.querySelector('.card-details__button_delivery');
		const modal = document.querySelector('.modal');
		const cardDetailsTitle = document.querySelector('.card-details__title');
		const modalTitle = document.querySelector('.modal__title');
		const modalSubtitle = modal.querySelector('.modal__subtitle');
		const modalTitleSubmit = document.querySelector('.modal__title-submit');

		const openModal = event => {
			const target = event.target;
			modal.classList.add('open');
			document.addEventListener('keydown', escapeHandler);
			modalTitle.textContent = cardDetailsTitle.textContent;
			modalTitleSubmit.value = cardDetailsTitle.textContent;
			modalSubtitle.textContent = target.dataset.buttonBuy;
		};

		const closeModal = () => {
			modal.classList.remove('open');
			document.removeEventListener('keydown', escapeHandler);
		}

		const escapeHandler = event => {
			if (event.code === 'Escape') {
				closeModal();
			}
		}
	
		modal.addEventListener('click', event => {
			const target = event.target;
			if (target.classList.contains('modal__close') || target === modal) {
				closeModal();
				
			}
		});

		cardDetailsButtonBuy.addEventListener('click', openModal)
		cardDetailsButtonDelivery.addEventListener('click', openModal)
	}




	
	const renderCrossSell = () => {
		const COUNT_ROW_GOODS = 4;	
		const crossSellList = document.querySelector('.cross-sell__list');
		const crossSellMore = document.querySelector('.cross-sell__more');
		const allGoods = [];
		let wrapRender = null;
		// Функция рандомного перемешивания
		const shuffle = arr => arr.sort(()=> Math.random() - 0.5);

		const createCrossSellItem = (good) => {
			const { photo: picture, name, price } = good;
			const liItem = document.createElement('li');
			liItem.innerHTML = `
				<article class="cross-sell__item">
					<img class="cross-sell__image" src="${picture}" alt="${name}">
					<h3 class="cross-sell__title">${name}</h3>
					<p class="cross-sell__price">${price}</p>
					<button type="button" class="button button_buy cross-sell__button">Купить</button>
			</article>
			`;
			return liItem;
		}


		const render = arr => {
			arr.forEach(item => {
				crossSellList.append(createCrossSellItem(item));
			})		
		}

		const wrapper = (fn, count) => {
			let counter = 0;
			return(...args) => {
				if (counter === count) return;
				counter++;
				return fn(...args)
			}
		};

		//const wrapRender = wrapper(render, 2)

		const createCrossSellList = (goods) => {
			wrapRender = wrapper(render, parseInt(goods.length/COUNT_ROW_GOODS) + 1);
			allGoods.push(...shuffle(goods));
			//crossSellList.textContent = '';
		//	const shuffleGoods = shuffle(allGoods);
			const fourItems = allGoods.splice(0, COUNT_ROW_GOODS);
			//wrapRender(fourItems.splice(0,4));
			render(fourItems);
			//setTimeout(createCrossSellList, 5000)
		};
		
		crossSellMore.addEventListener('click', () => {
			wrapRender(allGoods.splice(0, COUNT_ROW_GOODS));
			//crossSellMore.remove();
		})
		
		getData('cross-sell-dbase/dbase.json', createCrossSellList);		
	}

	
	tabs();
	modal();
	renderCrossSell();
	amenu(
		'.header__menu', 
		'.header-menu__list',
		'.header-menu__item',
		'.header-menu__burger' );
});