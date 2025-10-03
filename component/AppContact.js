class AppContact extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
<section class="flex flex-col h-screen justify-between items-center space-y-4 pt-24 pb-4" id="contact">
<h2 class="text-3xl">Contact</h2>
<div>
<a href="tel:0678811841" class="cursor-pointer">📞 Téléphone: 06.78.81.18.41</a>
<a href="mailto:fischer.ccile@gmail.fr" class="cursor-pointer">✉️ fischer.ccile@gmail.fr</a>
</div>
<form class="flex flex-wrap gap-4 p-4 md:p-12" id="contact-form">
    <div class="flex flex-col w-full space-x-4 md:flex-row">
      <input
        name="lastname"
        type="text"
        class="bg-zinc-700 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1  transition ease-in-out duration-150 w-full"
        placeholder="Nom"
      />
        <input
        name="firstname"
        type="text"
        class="bg-zinc-700 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1  transition ease-in-out duration-150 w-full"
        placeholder="Prénom"
      />
      </div>
      <div class="flex flex-col w-full space-x-4 md:flex-row">
      <input
        name="email"
        type="email"
        class="bg-zinc-700 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 transition ease-in-out duration-150 w-full"
        placeholder="Email"
      />
      <input
        type="number"
        name="tel"
        class="bg-zinc-700 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 transition ease-in-out duration-150 w-full"
        placeholder="Numéro de téléphone"
      />
      </div>
      
       <textarea
        name="message"
        class="bg-zinc-700 h-40 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 transition ease-in-out duration-150 w-full"
        placeholder="Message"
      ></textarea>
      <button class="m-auto bg-white text-black rounded-md px-4 py-1 hover:bg-[#6a3e7c] hover:text-white transition-all duration-200" type="submit">Envoyer</button>
    </form>
</section>`
        const form = this.querySelector("#contact-form");
        form.addEventListener("submit", (event) => this.handleSubmit(event));
    }
    handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_in3ilow', // Ex: service_abc123
            'template_u4g5vm3', // Ex: template_xyz789
            e.target,'vmz6bxn1Dwj4CfEll'
        )
            .then(() => {
                alert('Message envoyé avec succès !');
            })
            .catch((error) => {
                console.error('Erreur:', error);
            });
    };
}

customElements.define('app-contact', AppContact);
