import Pool from 'pg'
const db = new Pool({
	user: 'postgres',
	password: 'postgrez',
	host: 'localhost',
	port: 5432,
	database: 'node_postgres'
})
export default db