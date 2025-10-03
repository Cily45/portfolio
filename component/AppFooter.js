class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section class="flex items-center h-12 w-full bg-[#522864] opacity-80 justify-center space-x-2" id="footer">
<p>Copyright © Cecile Fischer</p>
    <a href="https://www.linkedin.com/in/fischercecile/">Linkedin</a>
    <a href="https://github.com/Cily45">Github</a>
    <a href="https://www.codingame.com/profile/e9311db520e0845cc060d125643ada197720465">Codingame</a>
</section>`
    }

}

customElements.define('app-footer', AppFooter);
