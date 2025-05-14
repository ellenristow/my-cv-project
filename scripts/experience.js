fetch('data.json')
	.then(response => response.json())
	.then(experiences => {
		const experienceContainer = document.querySelector('.experience__wrapper');

		experiences.forEach(exp => {
			const experienceHTML = `
                <div class="experience__text">
                    <div class="experience__company">
                        <h4>${exp.company_name}</h4>
                    </div>
                    <div class="experience__role">
                        <h4><span>${exp.role}</span></h4>
                    </div>
                    <div class="experience__type">
                        <h5>${exp.type}</h5>
                    </div>
                </div>
                <div class="experience__duration">
                    <h6>${exp.duration}</h6>
                </div>
                <div class="experience__location">
                    <p>${exp.location}</p>
                </div>
                <div class="experience__description">
                    <p>${exp.description}</p>
                </div>
            `;
			experienceContainer.insertAdjacentHTML('beforeend', experienceHTML);
		});
	})
	.catch(error => console.error('Erro ao carregar os dados', error));
