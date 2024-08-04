import './style.css';

const contactInfo = ['bogdanpleshkov2002@gmail.com'];

export function contactInfoList(listContainer) {
	contactInfo.forEach((contact, contactIndex) => {
		const listItem = document.createElement('div');
		listItem.className = 'editable-text contact-info__list-item';
		listItem.setAttribute('data-id', `contact-info-${contactIndex}`);
		listItem.innerHTML = contact;
		listContainer.appendChild(listItem);
	});
}
