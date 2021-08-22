class UserController {
	async createUser(req, res) {

	}
	async getAllUsers(req, res) {
		res.send([
			{id: 0, name: 'user_0', surname: 'user_surname_0'},
			{id: 1, name: 'user_1', surname: 'user_surname_1'}
		])
	}
	async getUser(req, res) {
		res.send(
			{id: 1, name: 'user_1', surname: 'user_surname_1'}
		)
	}
	async updateUser(req, res) {
		
	}
	async deleteUser(req, res) {
		
	}
}

export default UserController