import axios from "axios";

const getDatas = async () => {
  try {
    const res = await Promise.all([
      axios.get("https://pokeapi.co/api/v2/pokemon/"),
      axios.get("https://api.coindesk.com/v1/bpi/currentprice.json"),
      axios.get("https://www.boredapi.com/api/activity"),
    ]);

    const data = res.map((res) => res.data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getDatas();
