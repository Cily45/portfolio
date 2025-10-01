class AppProjects extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="flex items-center justify-center p-6 h-screen" id="projects">
    <img src="photo%20profile.png" alt="" class="w-1/2 h-1/2 object-cover"/>
    <p class="p-6 text-center">Ceci est un test, projets</p>
</section>`
    }

}

customElements.define('app-projects', AppProjects);
