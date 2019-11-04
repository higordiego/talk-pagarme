const { check, validationResult } = require('express-validator')

exports.errorHandler = (req, res, next) => {
  const errors = validationResult(req)
  console.log(errors)
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() })
  else next()
}
exports.create = [
  check('amount').not().isEmpty(),
  check('password').isLength({ min: 5 })
]
