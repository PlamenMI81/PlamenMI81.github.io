let remote = (() => {
  const BASE_URL = 'https://api-arrivals.sofiatraffic.bg/api/v1/arrivals/'

  // request method (GET, POST, PUT)
  // kinvey module (user/appdata)
  // url endpoint
  // auth
  function makeRequest (method, endpoint) {
    let proxy = 'https://cors-anywhere.herokuapp.com/'
    return {
      url: proxy + BASE_URL + endpoint + '/',
      method: method
    }
  }

  function get (endpoint) {
    return $.ajax(makeRequest('GET', endpoint))
  }

  return {
    get
  }
})()
