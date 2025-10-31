document.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('nav');
	if (!nav) return;

	const svg = nav.querySelector('svg.hamburguesa');
	const ul = nav.querySelector('ul');
	if (!svg || !ul || nav.dataset.hambInit) return;
	nav.dataset.hambInit = '1';

	svg.setAttribute('role', 'button');
	svg.tabIndex = 0;
	svg.setAttribute('aria-expanded', 'false');

	const menu = document.createElement('div');
	menu.className = 'hamb-mobile-menu';
	const cloned = ul.cloneNode(true);
	cloned.classList.add('hamb-mobile-list');
	menu.appendChild(cloned);
	nav.insertBefore(menu, svg.nextSibling);

	function open() { menu.classList.add('show'); svg.setAttribute('aria-expanded', 'true'); }
	function close() { menu.classList.remove('show'); svg.setAttribute('aria-expanded', 'false'); }
	function toggle() { menu.classList.contains('show') ? close() : open(); }

	svg.addEventListener('click', (e) => { e.stopPropagation(); toggle(); });
	svg.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
	menu.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
	document.addEventListener('click', (e) => { if (!nav.contains(e.target)) close(); });
	window.addEventListener('resize', () => { if (window.innerWidth > 768) close(); });
});


// Cerrar el menú móvil al hacer clic en un enlace
const mobileLinks = document.querySelectorAll('.hamb-mobile-list li a');
mobileLinks.forEach(link => {
	link.addEventListener('click', () => {
		const menu = document.querySelector('.hamb-mobile-menu');
		if (menu) {
			menu.classList.remove('show');
			const svg = document.querySelector('nav svg.hamburguesa');
			if (svg) {
				svg.setAttribute('aria-expanded', 'false');
			}
		}
	});
});

// Cerrar el menú móvil al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
	if (window.innerWidth > 768) {
		const menu = document.querySelector('.hamb-mobile-menu');
		if (menu) {
			menu.classList.remove('show');
			const svg = document.querySelector('nav svg.hamburguesa');
			if (svg) {
				svg.setAttribute('aria-expanded', 'false');
			}
		}
	}
});
