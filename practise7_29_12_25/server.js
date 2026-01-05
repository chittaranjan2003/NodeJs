const http= require('http');
const fs = require('fs');


//server start .step1
const server = http.createServer((req,res)=>{
      //step3 read file data.txt 
      fs.readFile('data.txt', 'utf8', (error,data)=>{
            //step4 error handling 
            if(error){
                  res.statusCode = 500;
                  console.log('Error reading file:', error);
                  res.write(`<h1>Internal Server Error</h1>`);
                  res.end();
            }
            // step5 process data and write to output.txt
            console.log('File data read successfully:', data);
            fs.writeFile('output.txt',data.toUpperCase(),(error,dtat)=>{
                  // step6 error handling for write file
                  if(error){
                        res.statusCode = 500;
                        console.log('Error writing file:', error);
                        res.write(`<h1>Internal Server Error</h1>`);
                        res.end();
                  }
                  // step7 read output.txt and send response

                  fs.readFile('output.txt','utf8',(error,data)=>{
                        // step8 error handling for read output file
                        if(error){
                              res.statusCode = 500;
                              console.log('Error reading output file:', error);
                              res.write(`<h1>Internal Server Error</h1>`);
                              res.end();
                        }
                        // step9 send response with file data
                        console.log('Output file data read successfully:', data);
                        // The request was successful and the server is responding correctly.
                        res.statusCode = 200;
                        // Set the Content-Type header to indicate that the response is HTML.
                        res.setHeader('Content-Type', 'text/html');
                        // Write the HTML response body.
                        res.write(`<h1>File processed successfully</h1>`);
                         // Display original and processed data
                        res.write(`<p>Original Data: ${data.toLowerCase()}</p>`); 
                        res.write(`<p>Processed Data: ${data}</p>`);
                        res.end();
                  })
            } )


      })

});

//stpe2 server listen
const PORT = 3002;

server.listen(PORT, ()=>{
      console.log(`Server running on address http://localhost:${PORT}`);

})