class AppProjects extends HTMLElement {
    projects = [
        {
            name: "Farm My Farm",
            description: "Farm My Farm est un jeu de simulation en JavaFX où vous incarnez un fermier gérant une petite exploitation agricole. Achetez des graines, cultivez vos champs, élevez des animaux et optimisez vos ressources pour faire prospérer votre ferme.",
            link: "https://github.com/Cily45/farm-my-farm",
            image: "/img/farmMyFarm.webp"
        },
        {
            name: "Pawfect match",
            description: "Pawfect Match est une application de rencontre intuitive conçue pour faciliter la mise en relation entre propriétaires de chiens. Elle propose une interface fluide, une gestion sécurisée des profils et une expérience utilisateur optimisée.",
            link: "https://github.com/Cily45/app-loove",
            image: "/img/pawfectMatch.webp"
        }
    ]

    cardTemplate(project) {
        return `
<div class="shrink-0 snap-center w-[80vw] md:w-[40vw] h-[60vh] rounded-3xl p-4 flex flex-col items-center justify-between gap-4 hover:bg-gray-900 hover:shadow-xl hover:shadow-[#522864] transition-shadow">
        <p class="font-extrabold">${project.name}</p> 
  <img src="${project.image}" class="rounded-3xl h-[60vh]" alt="image représentant le porjet"/>
  <div>
      <p>${project.description}</p>
  </div>
  <a href="${project.link}" class="bg-purple-900 font-extrabold p-2 px-6 rounded-xl hover:bg-purple-500 transition-colors">Lien vers le repo</a>
</div>
    `;
    }

    getCards() {
        return this.projects.map(p => this.cardTemplate(p)).join("");
    }

    connectedCallback() {
        this.innerHTML = `
      <section class="flex flex-wrap gap-6 items-center justify-center pt-20 min-h-screen" id="projects">
        <h2 class="w-full text-center text-3xl font-bold mb-6">Mes projets</h2>
        <div class="flex flex-col m-auto md:flex-row space-y-8 md:space-x-8 overflow-x-auto scrollbar-none px-4 py-10">
        ${this.getCards()}
        </div>
      </section>
    `;
    }
}

customElements.define("app-projects", AppProjects);
