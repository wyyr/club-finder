class ClubItem extends HTMLElement {
  set club(club) {
    this._club = club;
    this.render();
  }
  render() {
    this.innerHTML = `
        <img class="fan-art-club" src="${this._club.strTeamBadge}" alt="Fan Art">
        <div class="club-info">
            <h2>${this._club.strTeam}</h2>
            <p>${this._club.strDescriptionEN}</p>
        </div>
    `;
  }
}

customElements.define("club-item", ClubItem);
