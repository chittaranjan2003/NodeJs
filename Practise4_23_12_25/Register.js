// Show the registration form page
const register = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(` <html>
      <head>
        <title>Register Page</title>
      </head>
      <body>
        <h1>Enter Your Details</h1>

        <!-- On submit, POST request goes to /submit -->
        <form action="/submit" method="POST">

          <label>Enter your Name:</label>  
          <input type="text" name="name" placeholder="Enter your name"><br><br>

          <label>Gender:</label>
          <input type="radio" name="gender" value="male"> Male
          <input type="radio" name="gender" value="female"> Female
          <br><br>

          <label>Emial Address:</label>
          <input type="email" name="email" placeholde="Enter your email address"/><br><br>

          <label>Feedback:</label><br><br>
          <select name="feedback">
            <option value="">-select Feedback type-</option>
            <option value="suggestion">Suggestion</option>
            <option value="complaint">Complaint</option>
            <option value="appreciation">Appreciation</option>
          </select><br><br>

          <label>Feedback Message:</label><br><br>
          <textarea name="message" rows="4" cols="20"></textarea><br><br>

          <button type="submit">Submit</button><br><br>
          <a href="/">Go to Home page</a>
        </form>
      </body>
    </html>`);
  return res.end();
};

module.exports = register;
