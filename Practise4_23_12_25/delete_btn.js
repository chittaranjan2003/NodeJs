const fs = require("fs");

// Delete a user based on index from query param
const delete_btn = (req, res) => {
  const urlObj = new URL(req.url, `http://localhost:3000`);
  const deleteIndex = Number(urlObj.searchParams.get("index"));

  // Read existing users from JSON file
  fs.readFile("users.json", "utf-8", (error, data) => {
    if (error) {
      res.statusCode = 500;
      return res.end("Error reading file");
    }

    let userArray = JSON.parse(data);

    // Filter out the user to delete
    const newArr = userArray.filter((user, index) => {
      return index !== deleteIndex;
    });

    // Save updated array back to JSON file
    fs.writeFile("users.json", JSON.stringify(newArr), (error) => {
      if (error) {
        res.statusCode = 500;
        return res.end("Error writing file");
      }

      // Redirect to users page after deletion
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      res.end();
    });
  });
};

module.exports = delete_btn;
