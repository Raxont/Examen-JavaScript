
export const getInfo = async () => {
    try {
      let res = await fetch("https://search.imdbot.workers.dev/?q=Niram");
      let data = await res.json();
      let datas=data.description;
      let dataUpdate = [];
      datas.forEach(val => {
        dataUpdate.push({
          Actors:val["#ACTORS"],
          AKA: val["#AKA"],
          IMDB_ID: val["#IMDB_ID"],
          IMDB_IV: val["#IMDB_IV"],
          IMDB_URL: val["#IMDB_URL"],
          RANK: val["#RANK"],
          TITLE: val["#TITLE"],
          YEAR: val["#YEAR"]
        });
      });
      return dataUpdate;
    } catch (error) {
      console.error("Error al obtener los pedidos:", error);
      return [];
    }
  };