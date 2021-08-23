import request from "./request.js"

const App = {
	users: [],
	async init() {
		//const createUser = await request('/api/user', 'POST', {name: 'Elijah', surname: 'Rossinsky'})
		//console.log('createUser:', createUser)

		//const getAllUsers = await request('/api/user')
		//console.log('getAllUsers:', getAllUsers)

		//const getUser = await request('/api/user/1')
		//console.log('getUser:', getUser)
		
		//const updateUser = await request('/api/user/1', 'PUT', {name: 'Elijah-I', surname: 'Rossinsky'})
		//console.log('updateUser:', updateUser)
		
		//const deleteUser = await request('/api/user/2', 'DELETE')
		//console.log('deleteUser:', deleteUser)

		//const addPost = await request('/api/post', 'POST', {title: 'post #0', content: 'post #0 content', user_id: 1})
		//console.log('addPost:', addPost)

		//const getPostById = await request('/api/post/1')
		//console.log('getPostById:', getPostById)

		//const getPostsByUserId = await request('/api/post?id=1')
		//console.log('getPostsByUserId:', getPostsByUserId)
	}
}

document.addEventListener("DOMContentLoaded", App.init)