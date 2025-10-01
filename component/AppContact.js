class AppContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="flex items-center justify-center p-6 h-screen" id="contact">
    <!-- From Uiverse.io by themrsami --> 
  <div class="w-full bg-gray-800 rounded-lg shadow-md p-6 m-6">
    <h2 class="text-2xl font-bold text-gray-200 mb-4">Formulaire de contact</h2>

    <form class="flex flex-wrap gap-4">
      <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%]"
        placeholder="Nom"
      />
        <input
        type="text"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%]"
        placeholder="Prénom"
      />
      <input
        type="email"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%]"
        placeholder="Email"
      />
      <input
        type="number"
        class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%]"
        placeholder="Numéro de téléphone"
      />
      <textarea
        name="message"
        class="bg-gray-700 h-40 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
        placeholder="Message"
      ></textarea>

      <button
        type="submit"
        class="bg-gradient-to-r from-[#522864] to-zinc-900 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
      >
        Envoyer
      </button>
    </form>
</div>

</section>`
    }

}

customElements.define('app-contact', AppContact);
