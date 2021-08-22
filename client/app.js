import request from "./request.js"

const App = {
	users: [],
	async init() {
		this.users = await request('/api/user')
		console.log(this.users)
	}
}

document.addEventListener("DOMContentLoaded", App.init)