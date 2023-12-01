import axios from "axios";

const apikey = "32d3d425093a322d51caeccf86680295";
const apiCountry = "https://countryflagsapi.com/png/br";

export const dados = axios
  .get(
    "https://api.openweathermap.org/data/2.5/weather?q=são paulo&appid=32d3d425093a322d51caeccf86680295"
  )
  .then((response) => response.data);

export const url = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const getCity = (name: string) =>
  url.get("/weather?q=" + name + "&appid=32d3d425093a322d51caeccf86680295");
