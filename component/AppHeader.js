class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<header class="fixed top-0 w-full bg-[#522864] h-20 opacity-70" id="header">
<img src="/img/img.png" class="absolute top-1 left-4 h-18"/>
<nav class="flex flex-col md:flex-row bg-[#522864] items-center p-6 justify-center md:space-x-4 hidden md:flex" id="nav">
   <a class="hover:underline" href="#home" id="home-link">Accueil</a>
   <a class="hover:underline" href="#about" id="about-link">À propos de moi</a>
   <a class="hover:underline" href="#skills" id="skills-link">Mes compétences</a>   
   <a class="hover:underline" href="#projects">Mes projets</a>
   <a class="hover:underline" href="#contact"> Contact</a>
</nav>
<!-- From Uiverse.io by Shubh0408 --> 
<label class="visible absolute top-4 right-4 md:invisible">
  <div
    class="w-9 h-10 cursor-pointer flex flex-col items-center justify-center"
  >
    <input class="hidden peer" type="checkbox"  id="burger"/>
    <div
      class="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
    ></div>
    <div
      class="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"
    ></div>
    <div
      class="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
    ></div>
  </div>
</label>

</header>`
        const burger = document.querySelector("#burger");
        burger.addEventListener("click", () => {
            this.handleMenu(burger.checked)
        })
    }

    handleMenu(isOpen) {
        const nav = document.querySelector("nav");
        if (isOpen) {
            nav.classList.remove("hidden")
        } else {
            nav.classList.add("hidden")
        }
    }
}


customElements.define('app-header', AppHeader);
