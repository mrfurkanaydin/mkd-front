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
    url: "http://16.16.166.122:3000/v1/timers",
    headers: {
      "Content-Type": "application/json"
    },
    data: data
  };
  axios.request(config)
};

export default timerUtil;
