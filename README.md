.env file configuration - 
NODE_ENV=development
DB_CLIENT=mysql2
DB_HOST=<define>
DB_USER=<define>
DB_PASSWORD=<define>
DB_NAME=<define>
PORT=3000

In command line run these commands - 
1. npx knex migration:make create_authors
2. npx knex migration:make create_books
3. npx knex seed:run
4. npm start 
