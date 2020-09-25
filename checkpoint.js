const axios = require('axios')

const requestOne = axios.get("api.openweathermap.org/data/2.5/weather?q=tunisia&appid=f9be1923968ccbd07a8621d401acd532");
const requestTwo = axios.get("api.openweathermap.org/data/2.5/forecast/daily?q=tunisia&cnt=5&appid=f9be1923968ccbd07a8621d401acd532");

axios
  .all([requestOne, requestTwo])
  .then(axios.spread((firstResponse, secondResponse) => {
      console.log(firstResponse.data,secondResponse.data);
    })
  )
  .catch(errors => {
    console.error(errors);
  });