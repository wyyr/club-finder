import "./club-item.js";

class ClubList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }
  render() {
    this._shadowRoot.innerHTML = "";
    this._shadowRoot.innerHTML = `
    <style>
      :host {
        margin-top: 32px!important;
        width: 100%;
        display: block;
        padding: 16px!important;
      }
      .club {
          margin-bottom: 18px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          display: block;
      }
      
      .club .fan-art-club {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
      }
      
      .club-info {
          padding: 24px;
      }
      
      .club-info > h2 {
          font-weight: lighter;
      }
      
      .club-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
      }
    </style>
    `;
    this._clubs.forEach(club => {
      const clubElement = document.createElement("club-item");
      clubElement.classList.add("club");
      clubElement.club = club;
      this._shadowRoot.appendChild(clubElement);
    });
  }
  renderError(message) {
    this._shadowRoot.innerHTML = "";
    this._shadowRoot.innerHTML += `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
      }
      </style>
      <h2 class="placeholder">${message}</h2>
    `;
  }
}

customElements.define("club-list", ClubList);
