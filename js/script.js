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

	// minimal CSS injected so the svg stays hidden on desktop and menu shows on mobile
	const css = `nav{position:relative}svg.hamburguesa{display:none}@media(max-width:768px){svg.hamburguesa{display:block;position:absolute;right:8px;top:50%;transform:translateY(-50%)}nav>ul{display:none!important}.hamb-mobile-menu{display:none;position:absolute;top:100%;right:8px;background:#fff;border-radius:6px;box-shadow:0 6px 18px rgba(0,0,0,.08);min-width:180px;z-index:9999}.hamb-mobile-menu.show{display:block}.hamb-mobile-list{list-style:none;margin:0;padding:6px 0}.hamb-mobile-list a{display:block;padding:10px 14px;color:#111;text-decoration:none}}`;
	const s = document.createElement('style');
	s.id = 'hamb-mobile-styles';
	s.textContent = css;
	document.head.appendChild(s);

	function open() { menu.classList.add('show'); svg.setAttribute('aria-expanded', 'true'); }
	function close() { menu.classList.remove('show'); svg.setAttribute('aria-expanded', 'false'); }
	function toggle() { menu.classList.contains('show') ? close() : open(); }

	svg.addEventListener('click', (e) => { e.stopPropagation(); toggle(); });
	svg.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
	menu.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
	document.addEventListener('click', (e) => { if (!nav.contains(e.target)) close(); });
	window.addEventListener('resize', () => { if (window.innerWidth > 768) close(); });
});
