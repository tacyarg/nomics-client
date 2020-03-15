require('dotenv').config()
const test = require('tape')
const API = require('./index')

const API_KEY = "2d5185513c8ef5b55d2df92b0d406121"

test('try api', t => {
  let api
  t.test('init', t => {
    api = API({key: API_KEY})
    t.ok(api)
    t.end()
  })

  t.test('get currency ticker', async t => {
    let r = await api.currenciesTicker({
      ids: ["BTC","ETH"]
    })

    console.log('c', r)

    t.ok(r)
    t.end()
  })
})
