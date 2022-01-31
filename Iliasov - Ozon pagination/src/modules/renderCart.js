const renderCart = (goods) => {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const cartCounter = document.querySelector('.counter');
	
	cartWrapper.innerHTML = '';
	if(goods.length === 0){
		cartWrapper.insertAdjacentHTML('beforeend', `
			<div id="cart-empty">
				Ваша корзина пока пуста
			</div>		
		`)
	} else {
		goods.forEach(cartItem => {
			cartWrapper.insertAdjacentHTML('beforeend', `
	
				<div class="card" data-key="${cartItem.id}">
				${cartItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
					<div class="card-img-wrapper">
						<span class="card-img-top"
							style="background-image: url('${cartItem.img}')"></span>
					</div>
					<div class="card-body justify-content-between">
						<div class="card-price">${cartItem.price} ₽</div>
						<h5 class="card-title">${cartItem.title}</h5>
						<button class="btn btn-primary">Удалить</button>
					</div>
				</div>
			
			`)

		});
		cartCounter.textContent = goods.reduce((sum, item) => 
		{
		return sum + item.count
		}, 0);				
	}

}

export default renderCart;