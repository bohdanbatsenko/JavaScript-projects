// import './modules/willberries.js';
// import './modules/mySwiper.js';
// import './modules/smoothScroll.js';
// import './modules/server.js';
const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});

{
	const scrollLinks = document.querySelectorAll('a.scroll-link');
	for(const scrollLink of scrollLinks) {
		scrollLink.addEventListener('click', event => {
			event.preventDefault();
			const id = scrollLink.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		})
	}
}


const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');
// goods
//const more = document.querySelector('.more');
const viewAll = document.querySelectorAll('.view-all');
const navigationLink = document.querySelectorAll('.navigation-link:not(.view-all)');
const longGoodsList = document.querySelector('.long-goods-list');
const showAcsessories = document.querySelectorAll('.show-acsessories');
const showClothing = document.querySelectorAll('.show-clothing');
const cartTableGoods = document.querySelector('.cart-table__goods');
const cardTableTotal = document.querySelector('.card-table__total');
const cartCount = document.querySelector('.cart-count');
const btnClear = document.querySelector('.btn-clear')


const getGoods = async() => {
	const result = await fetch('db/db.json');
	if (!result.ok) {
		throw 'Ошибка: ' + result.status;
	}
	return await result.json();
}


// Create object for cart state
const cart = {
	cartGoods: [],
	countQuantity() {
		const count = this.cartGoods.reduce((sum, item) => 
			{
			return sum + item.count
			}, 0)
			cartCount.textContent = count ? count : '';
	},
	cleaCart() {
		console.log(this);
		this.cartGoods.length = 0;
		this.countQuantity();
		this.renderCart();
	},
	renderCart() {
		cartTableGoods.textContent = '';
		this.cartGoods.forEach(({ id, name, price, count }) => {
			const trGood = document.createElement('tr');
			trGood.className = 'cart-item';
			trGood.dataset.id = id;
			trGood.innerHTML = `
				<td>${name}</td>
				<td>${price}$</td>
				<td><button class="cart-btn-minus">-</button></td>
				<td>${count}</td>
				<td><button class="cart-btn-plus">+</button></td>
				<td>${price * count}$</td>
				<td><button class="cart-btn-delete">x</button></td>			
			`;
			cartTableGoods.append(trGood);
		});
		const totalPrice = this.cartGoods
			.reduce((sum, item) => sum + (item.price * item.count), 0);
		cardTableTotal.textContent = totalPrice + `$`;
	},
	deleteGood(id) {
		this.cartGoods = this.cartGoods.filter(item => id !== item.id);
		this.renderCart();
		this.countQuantity();
	},
	minusGood(id) {
		for (const item of this.cartGoods) {
			if(item.id === id) {
				if(item.count <= 1){
					this.deleteGood(id)
				} else {
					item.count--;
				}
				break;
			}
		}
		this.renderCart();
	},
	plusGood(id) {
		for (const item of this.cartGoods) {
			if(item.id === id) {
				item.count++;
				break;
			}
		}
		this.renderCart();
		this.countQuantity();
	},
	addCartGoods(id) {
		const goodItem = this.cartGoods.find(item => item.id === id);
		if (goodItem) {
			this.plusGood(id);
		} else {
			getGoods()
				.then(data => data.find(item => item.id === id))
				.then(({ id, name, price, count }) => {
					this.cartGoods.push({
						id,
						name,
						price,
						count: 1
					});
					this.countQuantity();
				});
		}
	},
}

//using BIND
//btnClear.addEventListener('click', cart.cleaCart.bind(cart));
// using arrow function
btnClear.addEventListener('click', () =>{cart.cleaCart()});


document.body.addEventListener('click', event => {
	const addToCart = event.target.closest('.add-to-cart');
	if (addToCart) {
		cart.addCartGoods(addToCart.dataset.id);
	}
})


cartTableGoods.addEventListener('click', event => {
	const target = event.target;
	if(target.tagName === "BUTTON") {
		const id = target.closest('.cart-item').dataset.id;

		if (target.classList.contains('cart-btn-delete')) {
			cart.deleteGood(id);
		};
		if (target.classList.contains('cart-btn-minus')) {
			//const id = target.closest('.cart-item').dataset.id;
			cart.minusGood(id);
		}
		if (target.classList.contains('cart-btn-plus')) {
			//const id = target.closest('.cart-item').dataset.id;
			cart.plusGood(id);	
		}
	}
})



const openModal = () => {
	cart.renderCart();
	modalCart.classList.add('show');
};

const closeModal = () =>
	modalCart.classList.remove('show');


buttonCart.addEventListener('click', openModal);

modalCart.addEventListener('click', event => {
	const target = event.target;
	if (target.classList.contains('overlay') ||
		target.classList.contains('modal-close')) {
			closeModal();
		}
});



const createCard = ({label, name, img, description, id, price} ) => {
	const card = document.createElement('div');
	card.className = 'col-lg-3 col-sm-6';

	card.innerHTML = `
		<div class="goods-card">
			${label ? 
				`<span class="label">${label}</span>` : 
					''}
				<img src="db/${img}" alt="${name}" class="goods-image">
			<h3 class="goods-title">${name}</h3>
			<p class="goods-description">${description}</p>
			<button class="button goods-card-btn add-to-cart" data-id="${id}">
				<span class="button-price">$${price}</span>
			</button>
		</div>
	`;

	return card;
};

const renderCards = data => {
	longGoodsList.textContent = '';
	const cards = data.map(createCard)
	// cards.forEach(function(card){
	// 	longGoodsList.append(card);
	// });
	longGoodsList.append(...cards);
	document.body.classList.add('show-goods');
};



// Alternative for view all / more
const showAll = event =>{
	event.preventDefault();
	getGoods().then(renderCards);
}
viewAll.forEach(elem => {
	elem.addEventListener('click', event => {
		event.preventDefault();
		getGoods().then(renderCards);
	});	
})
// end of alternative


// Уже не нужно так как дбавили класс view-all
// more.addEventListener('click', function(event){
// 	event.preventDefault();
// 	getGoods().then(renderCards);
// });


const filterCards = (field, value) => {
	getGoods()
		.then(data => data.filter(good => good[field] === value))
		 .then(renderCards);
};

navigationLink.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
		if (link.dataset.field) {
			const field = link.dataset.field;
			const value = link.textContent;
			filterCards(field, value);
		} else {
			getGoods().then(renderCards);
		}
	})
});


showAcsessories.forEach(item => {
	item.addEventListener('click', event => {
		event.preventDefault();
		filterCards('category', 'Accessories');
	});
});
showClothing.forEach(item => {
	item.addEventListener('click', event =>{
		event.preventDefault();
		filterCards('category', 'Clothing');
	});
})



// day 4 - server php send orders

const modalForm = document.querySelector('.modal-form');

const postData = dataUser => fetch('server.php', {
	method: 'POST',
	body: dataUser,
});



modalForm.addEventListener('submit', event => {
	event.preventDefault();
	const formData = new FormData(modalForm);
	formData.append('cart', JSON.stringify(cart.cartGoods));

	postData(formData)
		.then(response => {
			if(!response.ok) {
				throw new Error(response.status);
			}
			alert('Ваш заказ успешно отправлен');
			console.log(response.statusText);
		})
		.catch(err => {
			alert('К сожалению, произошла ошибка');
			console.error(err);
		})
		.finally(() => {
			closeModal();
			modalForm.reset();
			cart.cleaCart();
			//cart.cartGoods.length = 0;
		});
});