# Nomics Client

This library provides a simple interface to utilize the [Nomics API](https://nomics.com) Platform. The existing libraries are not always compatible with the current platform and are fairly complex to maintain and extend.

## Available Endpoints

> Internally we map the namespaces to the api endpoints to make them easier to intuitively utilize.

```js
const endpoints = {
  // currencies
  currencies: "/currencies",
  currenciesTicker: "/currencies/ticker",
  currenciesSparkline: "/currencies/sparkline",

  // markets
  markets: "/markets",
  marketCapHistory: "/market-cap/history",

  // volume
  volumeHistory: "/volume/history",

  // exchange rates
  exchangeRates: "/exchange-rates",
  exchangeRateHistory: "/exchange-rates/history"
};
```

## Setup

> This is how we expect the library to be utilized. This library has been built with extendability in mind, if the current interface is missing an endpoint you need you can call them directly by extending the interface.

### Configuration

```js
const config = {
  key: "YOUR_API_KEY"
};
```

### Library

```js
const Nomics = require("nomics-client")


module.exports => config => {
  const api = Nomics(config);

  return {
    ...api,
    someCustomMethod: p => {
      return api._getAuthorized("/some/endpoint", {
        some: "param",
        someOther: ["arg", "ments"]
      })
    }
  }
}
```

## Utilization

> Simple example of how to call the api.

```js
const api = require("nomics-client")({ key: "YOUR_API_KEY" });

api
  .currenciesTicker({
    ids: ["BTC", "ETH"]
  })
  .then(console.log);
```
