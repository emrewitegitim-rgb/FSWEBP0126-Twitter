import axios from "axios";

export function getTweets() {
  return axios
    .get("https://6811d4a43ac96f7119a5c08b.mockapi.io/tweets")
    .then((res) => {
      return res.data;
    });
}
