import './style.css';

const educations = [
	{
		date: '2020 - 2024',
		name: 'Software Engineering',
		type: 'Ryazan State Radio Engineering University',
		tags: [
			'#Automation and Information Technologies in Control',
			'#Computer Science',
			'#Engineering'
		]
	},
	{
		date: '2023',
		name: '1C Certificate',
		type: '1C Exam',
		tags: ['#1C:Enterprise', '#Engineering']
	}
];

const educationTpl = document.createElement('template');
educationTpl.innerHTML = `
    <div>
        <div class="editable-text education__date"></div>
        <div>
            <div class="editable-text education__title"></div>
            <ul class="education__tags">
            </ul>
        </div>
    </div>
    <div class="editable-text education__type"></div>
`;

export function educationsList(listContainer) {
	educations.forEach((education, educationIndex) => {
		const listItem = document.createElement('div');
		listItem.className = 'education__list-item';
		const clone = document.importNode(educationTpl.content, true);
		listItem.appendChild(clone);

		listItem.querySelector('.education__date').innerHTML = education.date;
		listItem
			.querySelector('.education__date')
			.setAttribute('data-id', `education-date-${educationIndex}`);

		listItem.querySelector('.education__title').innerHTML = education.name;
		listItem
			.querySelector('.education__title')
			.setAttribute('data-id', `education-title-${educationIndex}`);

		const tagsList = listItem.querySelector('.education__tags');
		education.tags.forEach((tag, tagIndex) => {
			const listItemTag = document.createElement('li');
			listItemTag.className = 'editable-text';
			listItemTag.innerHTML = tag;
			listItemTag.setAttribute(
				'data-id',
				`education-tag-${educationIndex}-${tagIndex}`
			);
			tagsList.appendChild(listItemTag);
		});

		listItem.querySelector('.education__type').innerHTML = education.type;
		listItem
			.querySelector('.education__type')
			.setAttribute('data-id', `education-type-${educationIndex}`);

		listContainer.appendChild(listItem);
	});
}
