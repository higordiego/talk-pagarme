module.exports = app => {
    const url = `${process.env.ROUTE_INIT}/card`
    const Controller = require('../controllers/index')

    app.route(`${url}`)
        .get(Controller.listOne)
        .post(Controller.create)

    app.route(`${url}/:_id`)
        .get(Controller.listAll)
        .delete(Controller.delete)

    app.route(`${url}/transaction`)
        .post(Controller.transaction)
}