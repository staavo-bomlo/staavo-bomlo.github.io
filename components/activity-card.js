class ActivityCardComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title', 'time', 'status', 'spond-link'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || '';
        const price = this.getAttribute('price') || '';
        const time = this.getAttribute('time') || '';
        const ages = this.getAttribute('ages') || '';
        const capacity = this.getAttribute('capacity') || '';
        const status = this.getAttribute('status') || 'open'; // open, closed, full
        const spondLink = this.getAttribute('spond-link') || '';

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .card {
                    background-color: white;
                    padding: 1.5rem;
                    border-radius: 1.5rem;
                    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
                    margin-bottom: 1rem;
                }
                h2 {
                    font-size: 1.875rem;
                    font-weight: bold;
                    color: #111827;
                    margin-bottom: 1.5rem;
                }
                .content {
                    margin: 1.5rem 0;
                    font-size: 1.125rem;
                    line-height: 1.75rem;
                    color: #4B5563;
                }
                .time {
                    font-weight: bold;
                    margin-top: 1.5rem;
                }
                .ages {
                    font-weight: bold;
                    margin-top: 1.5rem;
                }
                .price {
                    font-weight: bold;
                    margin-top: 1.5rem;
                }
                .capacity {
                    font-weight: bold;
                    margin-top: 1.5rem;
                }
                .status-banner {
                    padding: 1rem;
                    border-radius: 0.375rem;
                    margin: 1.5rem 0;
                }
                .status-banner.full {
                    background-color: #FEE2E2;
                    color: #991B1B;
                }
                .status-banner.closed {
                    background-color: #F3F4F6;
                    color: #374151;
                }
                .button {
                    display: inline-block;
                    padding: 0.625rem 0.875rem;
                    background-color: #4f46e5;
                    color: white;
                    text-decoration: none;
                    border-radius: 0.375rem;
                    font-weight: 600;
                    font-size: 0.875rem;
                    transition: background-color 0.2s;
                }
                .button:hover {
                    background-color: #4338ca;
                }
            </style>
            <div class="card">
                <h2>${title}</h2>
                <div class="content">
                    <slot></slot>
                </div>
                ${capacity ? `<p class="capacity">Kapasitet: ${capacity}</p>` : ''}
                ${ages ? `<p class="ages">Aldersgrense: ${ages}</p>` : ''}
                ${time ? `<p class="time">Tid: ${time}</p>` : ''}
                ${status === 'full' ? `
                    <div class="status-banner full">
                        <p>Dette Temaet er dessverre fullbooket. Dersom vi får flere frivillige foreldre med oss, kan det være vi kan åpne en klasse til. Send oss en e-post om du ønsker å bidra i ståvo. post@skaparen.no</p>
                    </div>
                ` : ''}
                ${status === 'closed' ? `
                    <div class="status-banner closed">
                        <p>Påmeldingen er nå stengt</p>
                    </div>
                ` : ''}
                ${status === 'open' && spondLink ? `
                    ${price ? `<p class="price">Pris: ${price} (alle samlinger)</p>` : ''}
                    <a href="${spondLink}" class="button">
                        Klikk her for påmelding
                    </a>
                ` : ''}
            </div>
        `;
    }
}

customElements.define('stavo-activity-card', ActivityCardComponent); 