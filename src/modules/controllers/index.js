const Card = require('../models/card')
const { transaction } = require('../business')

exports.transactionCapture = async (req, res) => {
  try {
    const result = await transaction(req.body, true)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.transaction = async (req, res) => {
  try {
    const result = await transaction(req.body, false)
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.delete = async (req, res, next) => {
  try {
    res.status(200).json({ msg: 'delete' })
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.listAll = async (req, res, next) => {
  try {
    const result = await Card.find({ deleted: false })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.listOne = async (req, res, next) => {
  try {
    const result = await Card.findOne({ ...req.params, ...{ deleted: false } })
    res.status(200).json(result)
  } catch (err) {
    res.status(500).json(err)
  }
}

exports.create = async (req, res, next) => {
  try {
    const connectPagarme = await client()
    const result = await create_card(connectPagarme, req.body)
    result.cvv = req.body.card_cvv
    const cardCreate = await Card.create(result)
    res.status(200).json(cardCreate)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}
