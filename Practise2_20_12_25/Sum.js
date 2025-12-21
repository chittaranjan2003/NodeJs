// Function to calculate the sum
const sumReqeuestHandler = (req, res) => {
  console.log("Sum request handler working");

  // Array to collect incoming body data
  const body = [];

  // on() means attaching an event listener

  // Event listener to receive data chunks
  req.on("data", (chunk) => {
    // This event fires whenever a chunk of data is received
    body.push(chunk);
  });

  /*
    When request data arrives, the "data" event fires.
    When all data is received, the "end" event fires.
  */

  // Runs when all data has been received
  req.on("end", () => {
    /*
      Request body comes in chunks as Buffers.
      All buffers are stored in the body array.
      Buffer.concat(body) joins all chunks into one buffer.
      toString() converts it into a string.
    */

    // Convert buffer data to string
    const bodyStr = Buffer.concat(body).toString();

    // Parse URL-encoded form data into key-value pairs
    const params = new URLSearchParams(bodyStr);

    /*
      Object.fromEntries is a static method
      that converts key-value pairs into a plain object.
    */

    // Convert parsed data into an object
    const bodyObj = Object.fromEntries(params);

    // Convert values to numbers and calculate sum
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);

    // Send HTML response with the result
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Your sum is ${result}</h1>
        <a href="/calculator">Back</a>
        </body>
        </html>`);
    return res.end();
  });
};

// Export the function
exports.sumReqeuestHandler = sumReqeuestHandler;
