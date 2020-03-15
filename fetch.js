const assert = require("assert");
const fetch = require("node-fetch");
const utils = require("./utils");

module.exports = (config = {}) => {
  assert(config.baseUrl, "config.baseUrl required");

  const fetchJSON = (url, params) =>{
      // console.log(url, params)
      return fetch(url, params)
      .then(res => {
        assert(res.ok, `${res.status} - ${res.statusText}`)
        return res;
      })
      .then(res => res.json());
  }

  return {
    get(endpoint, params) {
      return fetchJSON(
        `${config.baseUrl}${endpoint}?${utils.objToUrlParams(params)}`
      );
    },
    post(endpoint, params) {
      return fetchJSON(`${config.baseUrl}${endpoint}`, {
        method: "POST",
        body: params
      });
    }
  };
};
