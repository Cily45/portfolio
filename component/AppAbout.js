class AppAbout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="flex items-center justify-center p-6 h-screen" id="about">
    <img src="photo%20profile.png" alt="" class="w-1/2 h-1/2 object-cover"/>
    <p class="p-6 text-center">Ceci est un test</p>
</section>`
    }

}

customElements.define('app-about', AppAbout);
