import db from '../../postgres/db.js'

class PostController {
	async createPost(req, res) {
		// read post data
		const {title, content, user_id} = req.body
		// insert new post into DB
		const new_post = await db.query(
			`INSERT INTO "post" ("title", "content", "user_id") VALUES ($1, $2, $3) RETURNING *;`,
			[title, content, user_id]
		)
		// return new post: {id, title, content, user_id}
		res.json(new_post.rows[0])
	}
	async getPostsByUserId(req, res) {
		// get user id
		const user_id = req.query.id
		// read all posts from user with ID
		const posts = await db.query(
			`SELECT * FROM "post" WHERE "user_id"=$1;`,
			[user_id]
		)
		// return all posts: [{id, title, content, user_id}, {...}, ...]
		res.json(posts.rows)
	}
	async getPostById(req, res) {
		// read ID
		const post_id = req.params.id
		// read post with ID
		const post = await db.query(
			`SELECT * FROM "post" WHERE "id"=$1 LIMIT 1;`,
			[post_id]
		)
		//return post: {id, title, content, user_id}
		res.json(post.rows[0])
	}
}

export default PostController