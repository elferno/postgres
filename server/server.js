// import
import express from 'express'
import {createServer} from 'http'
import {join, resolve} from 'path'
import reload from 'reload'
import watch from 'watch'

// var
const PORT = process.env.PORT || 3000
const started_log = () => console.log(`server rised on port ${port} ...`)

const app = express()
const baseDir = join(resolve(), 'client')
const homePage = join(baseDir, 'index.html')

// server prefs
app.use(express.json())
app.use(express.static(baseDir))

// home page
app.get('/', (req, res) => res.sendFile(homePage))

// create server
const startServer = async () => {
  const server = createServer(app)
  const reloadReturned = await reload(app)
  server.listen(PORT, started_log)
  watch.watchTree(baseDir, () => reloadReturned.reload())
}

// start
startServer()