const http=require("http");
const fs=require("fs").promises;


//create server step1 
const server=http.createServer((req,res)=>{
    // asynchronous function to read and write files step 3
    const  processFile=async()=>{
        //step 4 read data from data.txt file and write to output.txt in uppercase if any error handle it
        try{
            // in side try block then log reading started step 5
            console.log("File reading started");
             
            // read data from data.txt file step 6
            const data= await fs.readFile("data.txt","utf-8");
            console.log("File reading completed");
            //  writing started in another text file
            await fs.writeFile("output.txt",data.toUpperCase());
            console.log("File writing completed");

            // read data from output.txt file step 7
            const newData= await fs.readFile("output.txt","utf-8");
            console.log("final out put:");
            console.log(newData);
            res.setHeader("Content-Type","text/html");
            res.write(`<h1>${newData}</h1>`);
            res.end();
        }
        
         // catch block to handle error step 8
        catch(err){
            console.log("Error:",err);
            res.statusCode=500;
            res.end("Internal Server Error");
        }


    }

    processFile();
})
//step2 start server and listen to port
const PORT=3002;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
})