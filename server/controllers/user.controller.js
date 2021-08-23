import db from '../../postgres/db.js'

class UserController {
	async createUser(req, res) {
		// read user data
		const {name, surname} = req.body
		// create new user
		const new_user = await db.query(
			`INSERT INTO "user" ("name", "surname") VALUES ($1, $2) RETURNING *;`,
			[name, surname]
		)
		// return created user: {id, name, surname}
		res.json(new_user.rows[0])
	}
	async getAllUsers(req, res) {
		// read all (*) users
		const users = await db.query(`SELECT * FROM "user";`)
		// return user list: [{id, name, surname}, {...}, ...]
		res.json(users.rows)
	}
	async getUser(req, res) {
		// read id
		const id = req.params.id
		// read all (*) users
		const user = await db.query(
			`SELECT * FROM "user" WHERE "id"=$1 LIMIT 1;`,
			[id]
		)
		// return user with ID: {id, name, surname}
		res.json(user.rows[0])
	}
	async updateUser(req, res) {
		// read user data
		const {name, surname} = req.body
		const id = req.params.id
		// update user with ID
		const new_user = await db.query(
			`UPDATE "user" SET "name"=$2, "surname"=$3 WHERE "id"=$1 RETURNING *;`,
			[id, name, surname]
		)
		// return created user: {id, name, surname}
		res.json(new_user.rows[0])
	}
	async deleteUser(req, res) {
		// read id
		const id = req.params.id
		// delete user with ID
		await db.query(
			`DELETE FROM "user" WHERE "id"=$1;`,
			[id]
		)
		// return status removed
		res.json({id, status: 'removed'})
	}
}

export default UserController