class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                nav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1.5rem;
                }
                .logo {
                    height: 2rem;
                    width: auto;
                }
                .nav-links {
                    display: none;
                }
                .nav-links a {
                    font-size: 0.875rem;
                    font-weight: 600;
                    line-height: 1.5rem;
                    color: #111827;
                    text-decoration: none;
                    margin: 0 1.5rem;
                }
                .menu-button {
                    display: flex;
                }
                @media (min-width: 1024px) {
                    nav {
                        padding: 1.5rem 2rem;
                    }
                    .nav-links {
                        display: flex;
                        gap: 3rem;
                    }
                    .menu-button {
                        display: none;
                    }
                }
            </style>
            <header class="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global">
                    <div class="flex lg:flex-1">
                        <a href="/" class="-m-1.5 p-1.5">
                            <span class="sr-only">Ståvo</span>
                            <img class="logo" src="images/legodesign.svg" alt="Ståvo">
                        </a>
                    </div>
                    <div class="menu-button">
                        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span class="sr-only">Open main menu</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div class="nav-links">
                        <a href="/">Heim</a>
                        <a href="/index.html#tema">Tema</a>
                        <a href="/index.html#om">Om</a>
                        <a href="paamelding.html">Påmelding →</a>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('stavo-header', HeaderComponent); 