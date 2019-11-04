require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { connect } = require('./src/db')

const app = express()

app.use(bodyParser.json())
app.use(cors())

require('./src/modules/routes')(app)

connect(process.env.DB_URL_MONGODB)
  .then(() => app.listen(process.env.PORT_EXPRESS, () => console.log(`Flying the witch... http://localhost:${process.env.PORT_EXPRESS}`)))
  .catch(err => console.log('Error em conectar no banco de dados!'))
