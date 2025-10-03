class AppHome extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="flex w-full pt-20 items-center justify-center h-screen bg-center bg-[url(/img/bg-home.webp)] bg-cover" id="home">
  <div class="flex items-center text-xl flex-col space-y-2 justify-between border-4 border-[#522864]  bg-zinc-800 p-6 shadow-[8px_8px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]">
    <p>Cecile Fischer<p/>
    <p>Développeuse web fullstack</p>
    <p>Bienvenue dans mon univers !</p>
    <a href="#about"
        class="relative mt-4 px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-[#522864] hover:-[#522864] transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
    >
        Qui suis-je?
    </a>

  </div>
</section>`
    }

}

customElements.define('app-home', AppHome);
