// smooth
// https://codepen.io/Quper/pen/RwodLGb

document.addEventListener('DOMContentLoaded', () => {
	const featureLinkElems = document.querySelectorAll('.feature__link');
	const featureSubElems = document.querySelectorAll('.feature-sub');


	// for (let i = 0; i < featureLinkElems.length; i++) {
	// 	featureLinkElems[i].addEventListener('click', () => {
	// 		featureSubElems[i].classList.toggle('hidden');
	// 		featureLinkElems[i].classList.toggle('feature__link_active');
	// 	})
	// }


//Solution1
	// const handlerAccordeon = (btn, index) => {
	// 	btn.addEventListener('click', () =>{

	// 			featureSubElems.forEach((featureSubElem, i) => {
	// 				if (index === i) {
	// 					featureSubElems[index].classList.toggle('hidden');
	// 				} else {
	// 					featureSubElem.classList.add('hidden');
	// 				}
	// 			});
	
	// 			featureLinkElems.forEach((featureLinkElem) => {
	// 				if (featureLinkElem === btn ) {
	// 					btn.classList.toggle('feature__link_active');
	// 				} else {
	// 					featureLinkElem.classList.remove('feature__link_active');
	// 				}
	// 			});	
	// 	})
	// }

	// featureLinkElems.forEach(handlerAccordeon);



// Solution 2
	featureLinkElems.forEach((btn, index) => {
		btn.addEventListener('click', () =>{

			// if (featureLinkElems[index].classList.contains('feature__link_active')) {
			// 	featureSubElems[index].classList.add('hidden');
			// 	featureLinkElems[index].classList.remove('feature__link_active');
			// } else {

			if (btn.classList.contains('feature__link_active')) {
				btn.classList.remove('feature__link_active');
				featureSubElems[index].classList.add('hidden');
			} else {

				featureSubElems.forEach((featureSubElem) => {
					featureSubElem.classList.add('hidden');
				});
	
				featureLinkElems.forEach((featureLinkElem) => {
					featureLinkElem.classList.remove('feature__link_active');
				})
	
				featureSubElems[index].classList.remove('hidden');
				btn.classList.add('feature__link_active');

			}
		})
	})


});



