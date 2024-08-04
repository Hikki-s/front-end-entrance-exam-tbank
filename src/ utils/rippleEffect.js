export function createRipple(event) {
	const ripple = document.createElement('span');
	ripple.classList.add('ripple');

	const rect = event.target.getBoundingClientRect();
	const size = Math.max(rect.width, rect.height);

	ripple.style.width = ripple.style.height = `${size}px`;
	ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
	ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

	event.target.appendChild(ripple);

	ripple.addEventListener('animationend', () => {
		ripple.remove();
	});
}
