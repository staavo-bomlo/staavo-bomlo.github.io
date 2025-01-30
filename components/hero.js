class HeroComponent extends HTMLElement {
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
                .hero {
                    position: relative;
                    isolation: isolate;
                }
                .container {
                    overflow: hidden;
                }
                .content {
                    margin: 0 auto;
                    max-width: 80rem;
                    padding: 8rem 1.5rem 2rem;
                }
                @media (min-width: 640px) {
                    .content {
                        padding-top: 15rem;
                    }
                }
                @media (min-width: 1024px) {
                    .content {
                        padding: 8rem 2rem 2rem;
                    }
                }
                .grid {
                    margin: 0 auto;
                    max-width: 42rem;
                    gap: 3.5rem;
                }
                @media (min-width: 1024px) {
                    .grid {
                        margin: 0;
                        display: flex;
                        max-width: none;
                        align-items: center;
                    }
                }
                .text-content {
                    width: 100%;
                    max-width: 36rem;
                }
                @media (min-width: 1024px) {
                    .text-content {
                        flex-shrink: 0;
                    }
                }
                h1 {
                    font-size: 2.25rem;
                    font-weight: bold;
                    letter-spacing: -0.025em;
                    color: #111827;
                    margin: 0;
                }
                @media (min-width: 640px) {
                    h1 {
                        font-size: 3.75rem;
                    }
                }
                .description {
                    margin-top: 1.5rem;
                    font-size: 1.125rem;
                    line-height: 2rem;
                    color: #4B5563;
                }
                .actions {
                    margin-top: 2.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }
                .image-grid {
                    margin-top: 3.5rem;
                    display: flex;
                    justify-content: flex-end;
                    gap: 2rem;
                }
                @media (min-width: 640px) {
                    .image-grid {
                        margin-top: -11rem;
                        justify-content: flex-start;
                        padding-left: 5rem;
                    }
                }
                @media (min-width: 1024px) {
                    .image-grid {
                        margin-top: 0;
                        padding-left: 0;
                    }
                }
                .image-column {
                    width: 11rem;
                    flex: none;
                    space-y: 2rem;
                }
                .image-column:first-child {
                    margin-left: auto;
                    padding-top: 8rem;
                }
                @media (min-width: 640px) {
                    .image-column:first-child {
                        margin-left: 0;
                        padding-top: 20rem;
                    }
                }
                @media (min-width: 1024px) {
                    .image-column:first-child {
                        padding-top: 9rem;
                    }
                }
                .image-wrapper {
                    position: relative;
                }
                img {
                    width: 100%;
                    aspect-ratio: 2/3;
                    border-radius: 0.75rem;
                    object-fit: cover;
                    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
                }
                .image-border {
                    position: absolute;
                    inset: 0;
                    border-radius: 0.75rem;
                    pointer-events: none;
                    border: 1px solid rgba(17, 24, 39, 0.1);
                }
            </style>
            <div class="hero">
                <div class="container">
                    <div class="content">
                        <div class="grid">
                            <div class="text-content">
                                <slot name="title">
                                    <h1>Me er Ståvo</h1>
                                </slot>
                                <slot name="description">
                                    <p class="description">
                                        Ei ståve for design, leik, kreativitet og samarbeid mellom små, mellomstore og store.
                                    </p>
                                </slot>
                                <div class="actions">
                                    <slot name="actions"></slot>
                                </div>
                            </div>
                            <slot name="images">
                                <div class="image-grid">
                                    <div class="image-column">
                                        <div class="image-wrapper">
                                            <img src="images/legoman.jpg" alt="Lego Design">
                                            <div class="image-border"></div>
                                        </div>
                                    </div>
                                    <div class="image-column">
                                        <div class="image-wrapper">
                                            <img src="images/dress.jpg" alt="Sewing">
                                            <div class="image-border"></div>
                                        </div>
                                        <div class="image-wrapper">
                                            <img src="images/print.jpg" alt="3D Printing">
                                            <div class="image-border"></div>
                                        </div>
                                    </div>
                                </div>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('stavo-hero', HeroComponent); 