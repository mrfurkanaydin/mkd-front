import axios from "axios";
const timerUtil = (timer, userId, App) => {
  const data = JSON.stringify({
    timer: timer,
    userId: userId,
    application: App
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/v1/timers",
    headers: {
      "Content-Type": "application/json"
    },
    data: data
  };
  axios.request(config).then((response) => {
    console.log(response.data);
  });
};

export default timerUtil;
