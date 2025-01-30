class FooterComponent extends HTMLElement {
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
                footer {
                    background-color: #111827;
                    padding: 3rem 1.5rem;
                }
                .container {
                    max-width: 80rem;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    order: 2;
                }
                .copyright {
                    margin-top: 2rem;
                    order: 1;
                    text-align: center;
                    font-size: 0.75rem;
                    line-height: 1.25rem;
                    color: #9CA3AF;
                }
                .social-icon {
                    color: #9CA3AF;
                    transition: color 0.2s;
                }
                .social-icon:hover {
                    color: #D1D5DB;
                }
                @media (min-width: 768px) {
                    .container {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                    .copyright {
                        margin-top: 0;
                        order: 1;
                    }
                    .social-links {
                        order: 2;
                    }
                }
            </style>
            <footer>
                <div class="container">
                    <div class="social-links">
                        <a href="#" class="social-icon" aria-label="Facebook">
                            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div class="copyright">
                        <p>&copy; 2024 Ståvo. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('stavo-footer', FooterComponent); 