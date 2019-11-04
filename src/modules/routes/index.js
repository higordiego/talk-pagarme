module.exports = app => {
  const url = `${process.env.ROUTE_INIT}/card`
  const Controller = require('../controllers/index')
  const { create } = require('../validates/card')

  const { check, validationResult } = require('express-validator')
  app.route(`${url}`)
    .get(Controller.listOne)
    .post([
      check('amount').isInt().not().isEmpty()
    ], (req, res) => {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }
      return res.status(200).json()
    })

  app.route(`${url}/:_id`)
    .get(Controller.listAll)
    .delete(Controller.delete)

  app.route(`${url}/transaction`)
    .post(Controller.transaction)

  app.route(`${url}/transaction/capture`)
    .post(Controller.transactionCapture)
}
