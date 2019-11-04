const pagarme = require('pagarme')

exports.client = () => pagarme.client.connect({ api_key: process.env.PAGARME_KEY })

/**
 * @function
 * @param {Client} client - uma instancia do pagarme conexão.
 * @param {Boolean} capture - Captura de transação.
 * @param  {} data
 */
exports.transaction = async (client, data, capture = false) => {
  try {
    if (!capture) return client.transactions.create(data)
    const transaction = await client.transactions.create(data)
    return client.transactions.capture(transaction)
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * @function
 * @example
 * card_number: '4018720572598048',
 * card_holder_name: 'Aardvark Silva',
 * card_expiration_date: '1122',
 * card_cvv: '123',
 * @param {Client} client - uma instancia do pagarme conexão.
 * @param  {{card_number: String, card_holder_name: String, card_expiration_date: String, card_cvv: String}} data
 * @return {Promise}
 */
exports.create_card = (client, data) => client.cards.create(data)
