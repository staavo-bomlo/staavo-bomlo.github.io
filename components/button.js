class ButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['variant', 'href'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const variant = this.getAttribute('variant') || 'primary';
        const href = this.getAttribute('href');
        const isLink = !!href;

        const baseStyles = `
            display: inline-block;
            padding: 0.625rem 0.875rem;
            font-size: 0.875rem;
            font-weight: 600;
            border-radius: 0.375rem;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.2s;
        `;

        const variants = {
            primary: `
                background-color: #4f46e5;
                color: white;
                &:hover {
                    background-color: #4338ca;
                }
            `,
            secondary: `
                background-color: transparent;
                color: #111827;
                &:hover {
                    color: #4f46e5;
                }
            `
        };

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                }
                ${isLink ? 'a' : 'button'} {
                    ${baseStyles}
                    ${variants[variant]}
                    border: none;
                    font-family: inherit;
                }
            </style>
            ${isLink 
                ? `<a href="${href}"><slot></slot></a>`
                : `<button type="button"><slot></slot></button>`
            }
        `;
    }
}

customElements.define('stavo-button', ButtonComponent); 