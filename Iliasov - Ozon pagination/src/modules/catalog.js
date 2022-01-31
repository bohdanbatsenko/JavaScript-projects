import getData  from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilter } from "./filters";

const catalog = () => {
	//const btnCatalog = document.querySelector('.catalog-button > button');
	const catalogModal = document.querySelector('.catalog');
	//const catalogModalItems = document.querySelectorAll('.catalog li');


	//https://github.com/Rootdiv/ozon-js/blob/main/src/modules/catalog.js
  document.addEventListener('click', event => {
    const target = event.target;
    if (target.closest('.catalog-button')) {
      catalogModal.style.display = 'block';
      if (target.matches('li')) {
        const text = target.textContent;
        getData().then(data => renderGoods(categoryFilter(data, text)));
        catalogModal.removeAttribute('style');
      }
    } else if (!target.closest('.catalog-button')) {
      catalogModal.removeAttribute('style');
    }
  });

	// let isOpen = false;

	// btnCatalog.addEventListener('click', ()=>{
	// 	isOpen = !isOpen;
	// 	if(isOpen) {
	// 		catalogModal.style.display = 'block';
	// 	} else {
	// 		catalogModal.style.display = '';
	// 	}
	// });
	// catalogModalItems.forEach(item => {
	// 	item.addEventListener('click', () => {

	// 		const text = item.textContent;
	// 		getData().then((data)=> {
	// 			renderGoods(categoryFilter(data, text));
	// 		});
	// 		catalogModal.style.display = '';
	// 	})
	// })


}
export default catalog;