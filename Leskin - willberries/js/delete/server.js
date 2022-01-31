// day 4

const modalForm = document.querySelector('.modal-form');

const postData = dataUser => fetch('server.php', {
	method: 'POST',
	body: dataUser,
});
postData('Hellow wolrd');


modalForm.addEventListener('submit', event => {
	event.preventDefault();
});