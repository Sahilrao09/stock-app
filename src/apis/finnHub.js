import axios from "axios";

const TOKEN = "cj2ab7pr01qi64tg0lm0cj2ab7pr01qi64tg0lmg";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
