const express = require ('express')
const massive = require ('massive')

app = express();

require('dotenv').config()
const ctrl = null

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

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})
