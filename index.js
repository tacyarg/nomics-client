const assert = require("assert");
const Fetch = require("./fetch");

module.exports = (config = {}) => {
  assert(config.key, "config.key required.");

  const BASE_URL = "https://api.nomics.com/v1";
  const call = Fetch({ baseUrl: BASE_URL });
  const getAuthorzed = (endpoint, params = {}) =>
    call.get(endpoint, { ...params, key: config.key });

  const endpoints = {
    // currencies
    currencies: "/currencies",
    currenciesTicker: "/currencies/ticker",
    currenciesSparkline: "/currencies/sparkline",
    
    // markets
    markets: "/markets",
    marketCapHistory: '/market-cap/history',

    // volume
    volumeHistory: '/volume/history',

    // exchange rates
    exchangeRates: '/exchange-rates',
    exchangeRateHistory: '/exchange-rates/history'
  };

  return Object.keys(endpoints).reduce((memo, k) => {
    const ep = endpoints[k];
    memo[k] = p => getAuthorzed(ep, p);
    return memo;
  }, {
    endpoints,
    _getAuthorized: getAuthorzed
  });
};
