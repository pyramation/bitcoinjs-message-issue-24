const bitcoin = require("bitcoinjs-lib"); // v4.x.x
const bitcoinMessage = require("bitcoinjs-message");

describe(
  'straight from the docs', () => {
    it('should works', () => {

      const keyPair = bitcoin.ECPair.fromWIF('L4rK1yDtCWekvXuE6oXD9jCYfFNV2cWRpVuPLBcCU2z8TrisoyY1')
      var privateKey = keyPair.privateKey
      var message = 'This is an example of a signed message.'

      var signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed)
      console.log(signature.toString('base64'))
      // => 'G9L5yLFjti0QTHhPyFrZCT1V/MMnBtXKmoiKDZ78NDBjERki6ZTQZdSMCtkgoNmp17By9ItJr8o7ChX0XxY91nk='
      expect(signature.toString('base64')).toEqual(
        'G9L5yLFjti0QTHhPyFrZCT1V/MMnBtXKmoiKDZ78NDBjERki6ZTQZdSMCtkgoNmp17By9ItJr8o7ChX0XxY91nk=')
    })
    it('compressed works', () => {

      const keyPair = bitcoin.ECPair.fromWIF('L4rK1yDtCWekvXuE6oXD9jCYfFNV2cWRpVuPLBcCU2z8TrisoyY1')
      var privateKey = keyPair.privateKey
      var message = 'This is an example of a signed message.'

      var signature = bitcoinMessage.sign(message, privateKey, false)
      console.log(signature.toString('base64'))
      // => 'G9L5yLFjti0QTHhPyFrZCT1V/MMnBtXKmoiKDZ78NDBjERki6ZTQZdSMCtkgoNmp17By9ItJr8o7ChX0XxY91nk='
      expect(signature.toString('base64')).toEqual(
        'G9L5yLFjti0QTHhPyFrZCT1V/MMnBtXKmoiKDZ78NDBjERki6ZTQZdSMCtkgoNmp17By9ItJr8o7ChX0XxY91nk=')
    })

  }
)
