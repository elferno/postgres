// import
import express from 'express'
import {createServer} from 'http'
import {join, resolve} from 'path'
import reload from 'reload'
import config from 'config'
import watch from 'watch'
import UserRouter from './routers/user.router.js'

// const
const API = {
  user: config.get('api.user'),
  post: config.get('api.post')
}
const ROUTER = {
  user: UserRouter
}
const SERVER = {
  port: config.get('server.port') || 3000,
  started_log: () => console.log(`server rised on port ${SERVER.port} ...`)
}

// var
const app = express()
const baseDir = join(resolve(), 'client')
const homePage = join(baseDir, 'index.html')

// server prefs
app.use(express.json())
app.use(express.static(baseDir))

// routing
app.use(API.user, ROUTER.user)

// home page
app.get('/', (req, res) => res.sendFile(homePage))

// create server
const startServer = async () => {
  const server = createServer(app)
  const reloadReturned = await reload(app)
  server.listen(SERVER.port, SERVER.started_log)
  watch.watchTree(baseDir, () => reloadReturned.reload())
}

// start
startServer()