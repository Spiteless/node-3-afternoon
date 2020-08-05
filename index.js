const express = require ('express')
const massive = require ('massive')

app = express();

require('dotenv').config()
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
      }
}).then( db => {
    app.set("db", db)
    console.log("db connected")
}).catch(err => console.log(err))

app.use(express.json())

const api = {
    base: '/api/products',
    id: '/api/products/id'
}

app.get(api.base, ctrl.getAll)
app.get(api.id, ctrl.getOne)
app.put(api.id, ctrl.updateDescription)
app.post(api.base, ctrl.create)
app.delete(api.id, ctrl.delete)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})
