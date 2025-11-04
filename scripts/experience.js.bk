document.addEventListener('DOMContentLoaded', () => {
	const experiencesData1 = document.getElementById('experience__data1');
	const experiencesData2 = document.getElementById('experience__data2');

	fetch('../data/experience_data.json') //requisição para o arquivo JSON
		.then(response => {
			if (!response.ok) {
				console.error('HTTP Error:', response.status, response.statusText, 'URL:', response.url);
				throw new Error(`HTTP Error! status: ${response.status}, ${response.statusText}, URL: ${response.url}`);
			}
			return response.json(); //Converte a resposta para JSON
		})
		.then(experiences => {
			experiencesData1.innerHTML = '';

			experiences.slice(0, 4).forEach(experience => {
				const itemDiv = document.createElement('div');
				itemDiv.classList.add('experience__text-section1');
				itemDiv.setAttribute('experience_data_id', experience.id);

				const companyName = document.createElement('h3');
				companyName.textContent = `${experience.company_name}`;

				const role = document.createElement('h4');
				role.textContent = `${experience.role}`;

				const type = document.createElement('h5');
				type.textContent = `${experience.type}`;

				const duration = document.createElement('h6');
				duration.textContent = `${experience.duration}`;

				const location = document.createElement('span');
				location.textContent = `${experience.location}`;

				const description = document.createElement('p');
				description.textContent = `${experience.description}`;

				itemDiv.appendChild(companyName);
				itemDiv.appendChild(role);
				itemDiv.appendChild(type);
				itemDiv.appendChild(duration);
				itemDiv.appendChild(location);
				itemDiv.appendChild(description);

				experiencesData1.appendChild(itemDiv);
			});

			experiencesData2.innerHTML = '';

			experiences.slice(4, 9).forEach(experience => {
				const itemDiv = document.createElement('div');
				itemDiv.classList.add('experience__text-section2');
				itemDiv.setAttribute('experience_data_id', experience.id);

				const companyName = document.createElement('h3');
				companyName.textContent = `${experience.company_name}`;

				const role = document.createElement('h4');
				role.textContent = `${experience.role}`;

				const type = document.createElement('h5');
				type.textContent = `${experience.type}`;

				const duration = document.createElement('h6');
				duration.textContent = `${experience.duration}`;

				const location = document.createElement('span');
				location.textContent = `${experience.location}`;

				const description = document.createElement('p');
				description.textContent = `${experience.description}`;

				itemDiv.appendChild(companyName);
				itemDiv.appendChild(role);
				itemDiv.appendChild(type);
				itemDiv.appendChild(duration);
				itemDiv.appendChild(location);
				itemDiv.appendChild(description);

				experiencesData2.appendChild(itemDiv);
			});
		})
		.catch(error => {
			console.error('Erro ao carregar a informação:', error);
			experiencesData1.textContent = 'Erro ao carregar as informações';
			experiencesData2.textContent = 'Erro ao carregar as informações';
		});
});
