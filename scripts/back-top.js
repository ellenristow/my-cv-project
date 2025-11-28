const backToTop = document.getElementById('back-top-button');

const handleBackToTop = () => {
	window.scrollTo({
		top: 0,
		left: 100,
		behavior: 'smooth',
	});
};

backToTop.addEventListener('click', handleBackToTop);

const elementToObserve = document.querySelectorAll('.about, .skills, .contact');

const options = {
	root: null,
	threshold: 0.1,
};

const handleBackToTopVisibility = entries => {
	const anyVisible = entries.some(entry => entry.isIntersecting);

	if (anyVisible) {
		backToTop.classList.add('back-top-visible');
	} else {
		backToTop.classList.remove('back-top-visible');
	}
};

const observer = new IntersectionObserver(handleBackToTopVisibility, options);

elementToObserve.forEach(section => observer.observe(section));
