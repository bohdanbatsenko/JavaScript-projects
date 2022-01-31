import renderCart from "./renderCart";
//import postData from './postData';

const cart = () => {
	const cartBtn = document.getElementById('cart');
	const cartModal = document.querySelector('.cart');
	const cartCloseBtn = cartModal.querySelector('.cart-close');
	const goodsWrapper = document.querySelector('.goods');
	const cartTotal = cartModal.querySelector('.cart-total > span');
	const cartWrapper = document.querySelector('.cart-wrapper');
	const cartSendbtn = document.querySelector('.cart-confirm');
	const cartCounter = document.querySelector('.counter');
	
	const openCart = () => {
		const cart = localStorage.getItem('cart') 
		? JSON.parse(localStorage.getItem('cart')) : [];		
		cartModal.style.display = 'flex';
		renderCart(cart);
		cartTotal.textContent = cart.reduce((sum, cartItem) => {
			return sum + cartItem.price;
		}, 0);
		cartCounter.textContent = cart.length;
	}

	const closeCart = () => {
		cartModal.style.display = '';
	}
		
	cartBtn.addEventListener('click', openCart);
	cartCloseBtn.addEventListener('click', closeCart);



	goodsWrapper.addEventListener('click', (e)=> {
		if (e.target.classList.contains('btn-primary')) {
			const card = e.target.closest('.card');
			const key = card.dataset.key;
			const goods = JSON.parse(localStorage.getItem('goods'));
			const cart = localStorage.getItem('cart') 
			? JSON.parse(localStorage.getItem('cart')) : [];
			const goodItem = goods.find((item) => {
				return item.id === +key;
			});	
			cart.push(goodItem);
			localStorage.setItem('cart', JSON.stringify(cart));
			cartCounter.textContent = cart.length;
		}
	});
	cartWrapper.addEventListener('click', (e)=>{
		if (e.target.classList.contains('btn-primary')) {
			const cart = localStorage.getItem('cart') 
			? JSON.parse(localStorage.getItem('cart')) : [];	
			const card = e.target.closest('.card');
			const key = card.dataset.key;		
			const index = cart.findIndex((item) => {
				return item.id === +key;
			});
			cart.splice(index, 1);

			localStorage.setItem('cart', JSON.stringify(cart));
			renderCart(cart);
			cartTotal.textContent = cart.reduce((sum, cartItem) => {
				return sum + cartItem.price;
			}, 0);
			cartCounter.textContent = cart.length;
		}
	});
	cartSendbtn.addEventListener('click', ()=> {
		const cart = localStorage.getItem('cart') 
		? JSON.parse(localStorage.getItem('cart')) : [];
		postData(cart).then(()=> {
			localStorage.removeItem('cart');
			renderCart([]);
			cartTotal.textContent = 0;
			cartCounter.textContent = 0
		});
	});

	const cart = localStorage.getItem('cart') ?
	JSON.parse(localStorage.getItem('cart')) : []
	cartCounter.textContent = cart.length;

}

export default cart;