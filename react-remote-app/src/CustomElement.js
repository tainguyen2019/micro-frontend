import ReactDOM from 'react-dom/client';
import App from './App';

class MyWebComponent extends HTMLElement {
  constructor() {
    super();
    this.root = null;
  }

  connectedCallback() {
    this.root = ReactDOM.createRoot(this);
    this.root.render(<App />);
  }

  disconnectedCallback() {
    this.root?.unmount();
  }
}

const ELEMENT_NAME = 'react-app-element';
if (!customElements.get(ELEMENT_NAME)) {
  customElements.define(ELEMENT_NAME, MyWebComponent);
}
