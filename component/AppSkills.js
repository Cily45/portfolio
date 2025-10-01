class AppSkills extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<section class="flex items-center justify-center p-6 h-screen" id="skills">
</section>`
    }

}

customElements.define('app-skills', AppSkills);
