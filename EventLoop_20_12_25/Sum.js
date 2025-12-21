const SumHandler = (req, res) => {
  // Array to collect incoming request body data
  const body = [];

  let result;

  // This event runs whenever a chunk of data is received
  req.on("data", (chunk) => {
    // "data" event is triggered when a part of request body arrives
    body.push(chunk);
  });

  // This event runs after all data is received
  req.on("end", () => {
    // Combine all chunks into a single string
    const bodyStr = Buffer.concat(body).toString();

    // Parse URL-encoded form data
    const params = new URLSearchParams(bodyStr);

    // Convert parsed data into a normal object
    const bodyObj = Object.fromEntries(params);

    // Calculate the sum of two numbers
    result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
  });

  // Send HTML response to the browser
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

  // End the response
  return res.end();
};

exports.SumHandler = SumHandler;
