document.addEventListener('DOMContentLoaded', () => {
	const cursor = document.querySelector('.hero__cursor');
	const shapes = document.querySelectorAll('.shape');

	document.body.addEventListener('mousemove', evt => {
		var mouseX = evt.clientX;
		var mouseY = evt.clientY;

		// Cursor customizado
		gsap.set('.hero__cursor', {
			x: mouseX,
			y: mouseY,
		});

		// Shapes seguem o mouse com atraso e suavidade
		gsap.to('.shape', {
			x: mouseX,
			y: mouseY,
			stagger: -0.1,
			ease: 'elastic.out(1, 0.3)',
			duration: 1.2,
			/* x: mouseX,
		y: mouseY,
		stagger: -0.1 */
		});
	});
});

/* gsap.to('.shape', {
  x: mouseX,
  y: mouseY,
  stagger: -0.15,
  ease: 'power2.out',
  duration: 1.6,
}); */
/* 
para mobile
if (window.innerWidth > 768) {
  document.body.addEventListener('mousemove', ...);
} */
