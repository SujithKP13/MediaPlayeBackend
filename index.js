// Creating JSON server
//1. Import json server library
const jsonServer = require('json-server')
//2. Connect json server using create() method
const mediaPlayerServer = jsonServer.create();
//3. Connect json server with db.json file using router method
const router = jsonServer.router('db.json');
//4. Create a middleware that process request and response
const middleware = jsonServer.defaults()
//5. use middleware
mediaPlayerServer.use(middleware)
//6. use router
mediaPlayerServer.use(router)

const PORT = 5000;

// Running the mediaPlayerServer

mediaPlayerServer.listen(PORT,() =>{
    console.log(`Media Player Server is running on port ${PORT}`)
})