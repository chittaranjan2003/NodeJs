// Import Node.js file system module
const fs = require("fs");

// This function reads a file and returns a Promise
//step 8.1
function readFile() {

    // Return a new Promise
    //step 8.2
    return new Promise((resolve, reject) => {

        // Read data.txt file asynchronously
        //8.3
        fs.readFile("data.txt", "utf-8", (err, data) => {

            // If error occurs while reading file
            //8.3.1
            if (err) {
                reject(err); // Promise failed
            }
            //8.3.2
            else {
                resolve(data); // Promise successful
            }
        });

    });
}

// Export function so other files can use it
module.exports = readFile;
