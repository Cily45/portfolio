class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="flex items-center h-fit w-screen bg-[#522864] justify-center p-6" id="footer">
    footer
</section>`
    }

}

customElements.define('app-footer', AppFooter);
