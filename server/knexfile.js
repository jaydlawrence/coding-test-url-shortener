module.exports = {
  client: process.env.DATABASE_CLIENT || 'pg',
  connection: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    port: process.env.DATABASE_PORT || 5432,
    user: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
  },
  migrations: {
    directory: __dirname + '/src/db/migrations',
  },
};