// imports
import { Router } from 'express'
import Controller from '../controllers/post.controller.js'

// var
const router = new Router()
const controller = new Controller()

// routing
router.post('/',    controller.createPost)
router.get ('/',    controller.getPostsByUserId)
router.get ('/:id', controller.getPostById)

// export
export default router