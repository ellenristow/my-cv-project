document.addEventListener('DOMContentLoaded', () => {
	fetch('../navbar.html')
		.then(res => res.text())
		.then(data => {
			document.getElementById('navbar-placeholder').innerHTML = data;

			const navBar = document.querySelector('nav');
			window.addEventListener('scroll', function () {
				if (window.scrollY > 0) {
					navBar.classList.add('navbar-background');
				} else {
					navBar.classList.remove('navbar-background');
				}
			});
		});
});
