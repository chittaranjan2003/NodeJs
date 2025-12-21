const Register = (req, res) => {
  // set response type as HTML
  res.setHeader("Content-Type", "text/html");

  // send form UI
  res.write(`
    <html>
      <head>
        <title>Register Page</title>
      </head>
      <body>
        <h1>Enter Your Details</h1>

        <!-- On submit, POST request goes to /submit -->
        <form action="/submit" method="POST">
          
          <input type="text" name="name" placeholder="Enter your name"><br><br>

          <label>Gender:</label>
          <input type="radio" name="gender" value="male"> Male
          <input type="radio" name="gender" value="female"> Female
          <br><br>

          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);

  return res.end();
};

module.exports = Register;
