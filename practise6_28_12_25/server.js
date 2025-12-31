const http=require("http");
const fileRoute = require("./fileRoute");

//step 1 : create server
const server=http.createServer((req,res)=>{
    //step 3 : route the request
    fileRoute(req,res)

});
//step 2 : listen server

const PORT=3002;
server.listen(PORT,()=>{
     console.log(`Server running on address http://localhost:${PORT}`);
});