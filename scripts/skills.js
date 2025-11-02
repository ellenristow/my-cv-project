document.addEventListener('DOMContentLoaded', () => {
	const skillsData1 = document.getElementById('skills__data1');

	const skillsData2 = document.getElementById('skills__data2');

	fetch('../data/skills_data.json')
		.then(response => {
			if (!response.ok) {
				console.error('HTTP Error:', response.status, response.statusText, 'URL:', response.url);
				throw new Error(`HTTP Error! status: ${response.status}, ${response.statusText}, URL: ${response.url}`);
			}
			return response.json();
		})
		.then(skills => {
			skillsData1.innerHTML = '';

			skills.slice(0, 3).forEach(skill => {
				const itemDiv = document.createElement('div');
				itemDiv.classList.add('skills__text-section1');
				itemDiv.setAttribute('skills_data_id', skills.id);

				const type = document.createElement('h3');
				type.textContent = `${skill.type}`;

				const name = document.createElement('h5');
				name.textContent = `${skill.name}`;

				itemDiv.appendChild(type);
				itemDiv.appendChild(name);

				skillsData1.appendChild(itemDiv);
			});

			skillsData2.innerHTML = '';

			skills.slice(3, 4).forEach(skill => {
				const itemDiv = document.createElement('div');
				itemDiv.classList.add('skills__text-section2');
				itemDiv.setAttribute('skills_data_id', skills.id);

				const type = document.createElement('h3');
				type.textContent = `${skill.type}`;

				const name = document.createElement('h5');
				name.textContent = `${skill.name}`;

				itemDiv.appendChild(type);
				itemDiv.appendChild(name);

				skillsData2.appendChild(itemDiv);
			});
		})
		.catch(error => {
			console.error('Erro ao carregar a informação:', error);
			skillsData1.textContent = 'Erro ao carregar as informações';
			skillsData2.textContent = 'Erro ao carregar as informações';
		});
});
