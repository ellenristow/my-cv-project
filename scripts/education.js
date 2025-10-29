document.addEventListener('DOMContentLoaded', () => {
	const educationData = document.getElementById('education__data');

	fetch('../data/education_data.json')
		.then(response => {
			if (!response.ok) {
				console.error('HTTP Error:', response.status, response.statusText, 'URL:', response.url);
				throw new Error(`HTTP Error! status: ${response.status}, ${response.statusText}, URL: ${response.url}`);
			}
			return response.json();
		})
		.then(institutions => {
			educationData.innerHTML = '';

			institutions.forEach(institution => {
				const itemDiv = document.createElement('div');
				itemDiv.classList.add('education__item');
				itemDiv.setAttribute('education__item-id', institution.id);

				const institutionName = document.createElement('h3');
				institutionName.textContent = `${institution.institution_name}`;

				const courseTitle = document.createElement('h4');
				courseTitle.textContent = `${institution.title}`;

				const year = document.createElement('h6');
				year.textContent = `${institution.year}`;

				itemDiv.appendChild(institutionName);
				itemDiv.appendChild(courseTitle);
				itemDiv.appendChild(year);

				educationData.appendChild(itemDiv);
			});
		})
		.catch(error => {
			console.error('Erro ao carregar a informação:', error);
			educationData.textContent = 'Erro ao carregar as informações';
		});
});
