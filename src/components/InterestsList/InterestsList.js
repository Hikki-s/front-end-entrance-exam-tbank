import './style.css';

const interests = [
	'social networks',
	'photography',
	'music',
	'travel',
	'programming',
	'airsoft',
	'games',
	'dron pilot'
];

export function interestsList(listContainer) {
	interests.forEach((interest, interestIndex) => {
		const listItem = document.createElement('div');
		listItem.className = 'editable-text interests__list-item';
		listItem.innerHTML = interest;
		listItem.setAttribute('data-id', `interest-${interestIndex}`);
		listContainer.appendChild(listItem);
	});
}
