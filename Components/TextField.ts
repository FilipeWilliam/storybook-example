import '../Styles/TextField/TextField.css';

interface ITextField {
    onClick: () => void,
    label: string,
    type: 'outlined' | 'filled',
    name: string
}

export default class TextField extends HTMLElement {
    private onClick: () => void;
    private type: 'outlined' | 'filled';
    private label: string;
    private name: string;
    
    constructor({onClick, name, label, type} : ITextField) {
        super();
   
        this.onClick = onClick;
        this.label = label;
        this.name = name;
        this.type = type;

        if (this.type === 'filled') {
            this.classList.add('text-field--filled');
        }
    }

    connectedCallback(): void {
        this.innerHTML = `<input name="${this.name}" placeholder="${this.label}"/>`;
        this.addEventListener('click', () => this.onClick());
    }
}

customElements.define('text-field', TextField);