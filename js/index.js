window.addEventListener('load', () => {
	const yourName = document.querySelector('#yourName');

	const username = localStorage.getItem('username') || '';

	yourName.value = username;

	yourName.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})
})
