class DataSource {
  static searchClub(keyword) {
    return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
      .then(res => res.json())
      .then(responseJson => {
        if (responseJson.teams) {
          return Promise.resolve(responseJson.teams);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      })
  }
}
export default DataSource;
