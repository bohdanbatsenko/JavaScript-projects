import getData from './getData';
import renderGoods from './renderGoods';
import paginate from './pagination/paginate';
import displayButtons from './pagination/displayButtons';

const btnContainer = document.querySelector('.btn-container');
let index = 0;
let pages = [];

const setupUI = () => {
	renderGoods(pages[index]);
	displayButtons(btnContainer, pages, index);
}

const load = () => {
		getData().then((data)=> {
			// without pagination - renderGoods(data);
			//renderGoods(paginate(data)[0]);
			pages = paginate(data);
			setupUI();	
		});				
}

btnContainer.addEventListener('click', (e) => {
	if(e.target.classList.contains('btn-container')) return;
	if(e.target.classList.contains('page-btn')){
		index = parseInt(e.target.dataset.index);
	}
	if(e.target.classList.contains('next-btn')){
		index++;
		if(index > pages.length - 1){
			index = 0;
		}
	}
	if(e.target.classList.contains('prev-btn')){
		index--;
		if(index < 0){
			index = pages.length -1;
		}
	}
	setupUI();
});

export default load;