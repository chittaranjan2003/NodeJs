// Import readFile function from fileService.js
// This function reads data from a file asynchronously
const readFile = require("./fileService");

// This function handles all incoming HTTP requests
async function fileRoute(req, res) {

    // Step 5: This function is called when request comes to server
    console.log("step 5");

    // If user hits home URL "/"
    if (req.url === "/") {

        // Step 5.1: Set response type as HTML
        console.log("step 5.1 home route head set");
        res.setHeader("Content-Type", "text/html");

        // Step 5.2: Send HTML content to browser
        console.log("step 5.2 home route response sent");
        res.write(`
            <h1>Welcome to Home page</h1>
            <a href="/file">Go to file read page</a>
        `);

        // End the response
        res.end();
    }

    // If user hits "/file" route
    else if (req.url === "/file") {

        // Step 7: Inform user that file reading started
        console.log("step 7 read file");
        res.write("Reading file...\n");

        // Step 8: Read file using async/await
        try {
            const data = await readFile(); // wait until file is read

            // Send file data as response
            res.end(`File Data: ${data}`);
        }
        //step 9: Handle any errors during file read
        catch (err) {
            // If error occurs while reading file
            res.statusCode = 500;
            res.end(`Error reading file: ${err.message}`);
        }
    }
}

// Export function so server can use it
module.exports = fileRoute;
