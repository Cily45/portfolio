class AppContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="flex flex-col items-center space-y-4 justify-center p-6" id="contact">
<h2 class="text-xl">Contact</h2>
<p>📞 Téléphone: 06.78.81.18.41</p>
<p>✉️ fischer.ccile@gmail.fr</p>

<a href="mailto:fischer.ccile@gmail.fr"
        class="relative mt-4 px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-[#522864] hover:-[#522864] transition-all duration-300 hover:shadow-[0_0_20px_10px_rgba(168,85,247,0.6)] active:scale-95 active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] group"
    >
  ✉️ Envoyer un mail
    </a>
</section>`
    }

}

customElements.define('app-contact', AppContact);
