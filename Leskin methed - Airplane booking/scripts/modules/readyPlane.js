import airplane from "./airplane.js";

const readyPlane = (forms, main, tourData) => {
	const data = [];
	forms.forEach((form) => {
		form.addEventListener('submit', (e)=> {
			e.preventDefault();
			//Блокировать все формы и добавить атрибутdisabled
			for(const element of form.elements) {
				element.disabled = true;
			}
			data.push({
				name: form.name.value,
				ticket: form.ticket.value,
			});
			//Когда заполнятся данные, длинна forms.length будет равна data, мы скрываем формы, и можем показать самолет
			if(forms.length === data.length) {
				forms.forEach(form => form.remove());
				airplane(main, data, tourData);
			}
		});
	});
};
export default readyPlane;