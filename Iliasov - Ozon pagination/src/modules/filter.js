import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter, hotsaleFilter } from "./filters";


const filter = () => {
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const checkboxInput = document.getElementById('discount-checkbox');
const checkboxSpan = document.querySelector('.filter-check_checkmark');

minInput.addEventListener('input', (e) => {
		getData().then((data)=> {
			// to link price range and hotsale functions, change data to hotsale funct
			//renderGoods(priceFilter(data, minInput.value, maxInput.value));
			renderGoods(priceFilter(hotsaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
		});
	});
	maxInput.addEventListener('input', (e) => {
		getData().then((data)=> {
		// to link price range and hotsale functions, change data to hotsale funct
		//renderGoods(priceFilter(data, minInput.value, maxInput.value));
		renderGoods(priceFilter(hotsaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
	});
});
checkboxInput.addEventListener('change', ()=> {
	if(checkboxInput.checked) {
		checkboxSpan.classList.add('checked');
	} else {
		checkboxSpan.classList.remove('checked');
	}
	getData().then((data)=> {
		renderGoods(priceFilter(hotsaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
	});
});
}
export default filter;