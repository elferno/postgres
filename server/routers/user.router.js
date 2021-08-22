// imports
import { Router } from 'express'
import Controller from '../controllers/user.controller.js'

// var
const router = new Router()
const controller = new Controller()

// routing
router.post  ('/',    controller.createUser)
router.get   ('/',    controller.getAllUsers)
router.get   ('/:id', controller.getUser)
router.put   ('/:id', controller.updateUser)
router.delete('/:id', controller.deleteUser)

// export
export default router