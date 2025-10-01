class AppHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="flex items-center justify-center p-6 h-screen" id="home">
    <img src="photo%20profile.png" alt="" class="w-1/2 h-1/2 object-cover"/>
    <p class="p-6 text-center">Bonjour, je suis Cecile Fischer, développeuse web fullstack. J’aime donner vie à des
        projets modernes et performants.
        Bienvenue dans mon univers !</p>
</section>`
    }

}

customElements.define('app-home', AppHome);
