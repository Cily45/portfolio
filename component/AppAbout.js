class AppAbout extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="flex flex-col justify-between pt-20 min-h-screen" id="about">
    <h2 class="text-3xl text-center mt-4">À propos de moi</h2>
    <div class="flex items-center flex-wrap justify-around">
        <img src="/img/photo%20profile.webp" alt="" class="p-4 w-50 md:h-max-[60vh] object-cover"/>
        <p class="p-6  md:w-1/2">Passionné par l’informatique depuis mon plus jeune âge. Ma curiosité m’a naturellement conduit à explorer le domaine de la programmation. Après avoir débuté avec le langage Java, j’ai élargi mes compétences et suis désormais capable de développer des applications mobiles à l’aide d’Android Studio.
Rigoureuse et organisée, je suis à la recherche d’une alternance de deux ans à partir de septembre 2025, pour mettre à profit mes compétences techniques et développer des applications innovantes.</p>
    </div>
    <div class="relative h-fit flex flex-col items-center justify-center">
        <div class="absolute inset-0 bg-[url('/img/bg-about.webp')] bg-cover bg-center opacity-20"></div>
        <div class="relative flex flex-col items-center text-center
         justify-center p-2">
            <p class="font-semibold text-xl">Actuellement</p>
            <p>En alternance en tant que développeuse junior web fullstack chez</p>
            <img src="/img/sora.webp" alt="Logo de Sora" class="h-10"/>
            <p>avec l'école</p>
            <img src="/img/coda.webp" alt="Logo de Coda" class="h-10"/>
        </div>
    </div>
</section>`
    }

}

customElements.define('app-about', AppAbout);
