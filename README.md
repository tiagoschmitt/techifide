## Configuring the techifide/server
### Open the directory /server and execute the follow commands

1. Install the dependencies
```
yarn install
```
2. Start the server
```
npm run start (http://localhost:8080)
```

## Configuring techifide/app (front)
### Open the directory /app and execute the follow commands

1. Install the dependencies
```
yarn install
```

2. Compiles and hot-reloads for development
```
yarn serve (http://localhost:8081)
```

3. Compiles and minifies for production (optional)
```
yarn build
```

## Running the applicaton

### Starting app and server

1. Start both servers as described above
2. Open the http://localhost:8081

### Starting the server and building the app

1. Start the node application (server)
2. Build the app (yarn build)
2. Open the http://localhost:8080, this way the server is running both application in the same server.


## Database
1. Run the tasks.sql file in your local mysql
2. Set the credentials in the server\src\config\database.js file
