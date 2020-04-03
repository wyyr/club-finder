import "./club-list.js";

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }
  get value() {
    return this._shadowRoot.querySelector("#searchElement").value;
  }
  render() {
    this._shadowRoot.innerHTML = `
      <style>
        :host {
          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          position: sticky;
          top: 10px;
          background-color: white;
          margin: 30px auto 0;
          display: flex;
        }
        
        input {
          width: 75%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid cornflowerblue;
          font-weight: bold;
        }
        
        input:focus {
            outline: 0;
            border-bottom: 2px solid cornflowerblue;
        }
        
        input:focus::placeholder {
            font-weight: bold;
        }
        
        input::placeholder {
            color: cornflowerblue;
            font-weight: normal;
        }
        
        button {
          width: 23%;
          cursor: pointer;
          margin-left: auto;
          padding: 16px;
          background-color: cornflowerblue;
          color: white;
          border: 0;
          text-transform: uppercase;
        }
        .custom {
          padding: 16px;
          flex: 1;
        }
        @media screen and (max-width: 550px){
          :host {
              flex-direction: column;
              position: static;
          }
      
          :host > input {
              width: 100%;
              margin-bottom: 12px;
          }
      
          :host > button {
              width: 100%;
          }
        }
      </style>
      <div class="custom">
        <input placeholder="Search football club" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
    `;

    this._shadowRoot.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
