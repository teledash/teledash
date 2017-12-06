import express from 'express'
import router from './api'
import bodyParser from 'body-parser'
import volleyball from 'volleyball'
import chalk from 'chalk'
import { db } from './db'

const app = express()

db.sync().then(() => chalk.blue('Database is synced'));

app.use(volleyball)
// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })) // for HTML form submits
app.use(bodyParser.json()) // would be for AJAX requests

// start the server
const PORT = 2001
const server = app.listen(PORT, function () {
  console.log(chalk.green('Test server is running on port ' + PORT))
})

app.use('/api/', router)
