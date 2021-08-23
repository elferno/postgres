import pg from 'pg'
const db = new pg.Pool({
	user: 'postgres',
	password: 'postgrez',
	host: 'localhost',
	port: 5432,
	database: 'node_postgres'
})
export default db