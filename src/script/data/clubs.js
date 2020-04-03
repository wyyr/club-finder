const getClubs = async () => {
  try {
    const response = await fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League");
    const data = await response.json();
    return data.teams;
  }catch(error) {
    alert(error);
  }

}
// {
//   name: "Everton",
//   stadium: "Goodison Park",
//   fanArt:
//     "https://www.thesportsdb.com/images/media/team/fanart/yyuypw1420393451.jpg",
//   description: "Everton Football Club /ˈɛvərtən/ ."
// }

export default getClubs;