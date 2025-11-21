import React from "react";
import ReactDOM from "react-dom/client";
import WebComponent from "./Web-component";

class CalendarElement extends HTMLElement {
  connectedCallback() {
    // (Optional) Shadow DOM – remove if you want global Tailwind styles
    const mountPoint = this.attachShadow({ mode: "open" });

    this.root = ReactDOM.createRoot(mountPoint);

    this.renderComponent();
  }

  renderComponent() {
    this.root.render(<WebComponent />);
  }

  disconnectedCallback() {
    if (this.root) this.root.unmount();
  }
}

if (!customElements.get("calendar-webcomponent")) {
  customElements.define("calendar-webcomponent", CalendarElement);
}

