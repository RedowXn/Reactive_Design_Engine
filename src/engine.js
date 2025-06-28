// src/engine.js
export class Component {
  constructor(root) {
    this.root = document.querySelector(root);
    this.state = {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    this.root.innerHTML = `<h1>${this.state.title || "Hello"}</h1>`;
  }
}
