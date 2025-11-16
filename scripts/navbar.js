const navBar = document.querySelector('.nav');
window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		navBar.classList.add('navbar-background');
	} else {
		navBar.classList.remove('navbar-background');
	}
});
