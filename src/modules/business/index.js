const { create_card, client, transaction } = require('../../helper/pagarme')

exports.transaction = async (body, capture = false) => {
  try {
    const connectPagarme = await client()
    body.capture = capture
    return transaction(connectPagarme, body)
  } catch (err) {
    throw new Error(err)
  }
}
