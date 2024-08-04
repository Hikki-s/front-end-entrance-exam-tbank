import logos from '../../../public/index.js';
import './style.css';

const toolsData = [
	{
		title: 'DBMS',
		items: [
			{ name: 'MySQL', logoPath: logos.MySqlLogo },
			{ name: 'Redis', logoPath: logos.RedisLogo },
			{ name: 'MongoDB', logoPath: logos.MongoDBLogo }
		]
	},
	{
		title: 'Languages',
		items: [
			{ name: 'Java', logoPath: logos.JavaLogo },
			{ name: 'TypeScript', logoPath: logos.TsLogo },
			{ name: 'JavaScript', logoPath: logos.JsLogo },
			{ name: '1C', logoPath: logos.Logo1C },
			{ name: 'Python', logoPath: logos.PythonLogo }
		]
	},
	{
		title: 'Frameworks',
		items: [
			{ name: 'React', logoPath: logos.ReactLogo },
			{ name: 'Node.js', logoPath: logos.NodeLogo },
			{ name: 'MobX', logoPath: logos.MobXLogo },
			{ name: 'GraphQL', logoPath: logos.GraphQLLogo },
			{ name: 'Jest', logoPath: logos.JestLogo },
			{ name: 'Discord.js', logoPath: logos.DiscordJsLogo }
		]
	}
];

const toolsTemplate = document.createElement('template');
toolsTemplate.innerHTML = `
    <div class="editable-text tools__category"></div>
    <div>
        <ul class="tools__list">
        </ul>
    </div>
`;

export function toolsList(listContainer) {
	toolsData.forEach((tools, toolsIndex) => {
		const listItem = document.createElement('div');
		listItem.className = 'tools__item';
		const clone = document.importNode(toolsTemplate.content, true);
		listItem.appendChild(clone);

		listItem.querySelector('.tools__category').innerHTML = tools.title;
		listItem
			.querySelector('.tools__category')
			.setAttribute('data-id', `tools-category-${toolsIndex}`);

		listItem.querySelector('.tools__list').innerHTML = tools.items
			.map(
				(tool) =>
					`
            <li class="tools__list-item">
                <img src="${tool.logoPath}" alt="${tool.name}">
            </li>
        `
			)
			.join('');

		listContainer.appendChild(listItem);
	});
}
