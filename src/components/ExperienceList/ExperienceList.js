import './style.css';

const experiences = [
	{
		date: 'October 2023 — May 2024',
		role: 'Frontend Developer',
		company: 'INTERNET PROMOTION LLC',
		schedule: 'Full-time',
		tasks: [
			"Worked on the company's internal services as a FullStack developer. Such as (CRM, Page Indexing System, Site Administration System, Company Website).",
			'Developed parsers and scripts in Python.'
		]
	},
	{
		date: 'October 2022 — October 2023',
		role: '1C Developer',
		company: 'RIL',
		schedule: 'Full-time',
		tasks: [
			'Carried out orders for the creation of reports and treatments, for standard solutions.',
			'Maintained and developed the system of working with the USAIS.'
		]
	}
];

const experienceTpl = document.createElement('template');
experienceTpl.innerHTML = `
    <div class="editable-text experience__date" data-id></div>
    <div class="experience__body">
        <div class="experience__title-item">
            <div class="editable-text experience__role" data-id></div>
            <div class="experience__company-info">
                <div class="editable-text experience__company" data-id></div>
                <div class="experience__company-separator">|</div>
                <div class="editable-text experience__schedule" data-id></div>
            </div>
        </div>
        <ul class="experience__body-list">
        </ul>
    </div>
`;

export function experienceList(listContainer) {
	experiences.forEach((experience, experienceIndex) => {
		const listItem = document.createElement('div');
		listItem.className = 'experience-list__item';

		const clone = document.importNode(experienceTpl.content, true);
		listItem.appendChild(clone);

		listItem.querySelector('.experience__date').innerHTML = experience.date;
		listItem
			.querySelector('.experience__date')
			.setAttribute('data-id', `experience-date-${experienceIndex}`);

		listItem.querySelector('.experience__role').innerHTML = experience.role;
		listItem
			.querySelector('.experience__role')
			.setAttribute('data-id', `experience-role-${experienceIndex}`);

		listItem.querySelector('.experience__company').innerHTML =
			experience.company;
		listItem
			.querySelector('.experience__company')
			.setAttribute('data-id', `experience-company-${experienceIndex}`);

		listItem.querySelector('.experience__schedule').innerHTML =
			experience.schedule;
		listItem
			.querySelector('.experience__schedule')
			.setAttribute('data-id', `experience-schedule-${experienceIndex}`);

		const tasksList = listItem.querySelector('.experience__body-list');
		experience.tasks.forEach((task, taskIndex) => {
			const listItemTask = document.createElement('li');
			listItemTask.className = 'editable-text';
			listItemTask.innerHTML = task;
			listItemTask.setAttribute(
				'data-id',
				`experience-task-${experienceIndex}-${taskIndex}`
			);
			tasksList.appendChild(listItemTask);
		});

		listContainer.appendChild(listItem);
	});
}
