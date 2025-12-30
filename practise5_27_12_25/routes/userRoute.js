const getUserFromDb = require("../services/userService");

async function userRoute(req, res) {
  //step 4 check
  if (req.url === "/") {
    //step4.1
    console.log("step4.1");
    res.setHeader("Content-Type", "text/html");
    //step4.2
    console.log("step4.2");
    res.write(`<h1>Wlcome to Home page</h1>`);
    return res.end();
  }
  //step 5 check
  if (req.url === "/user") {
    //step 5.1
    console.log("step5.1");
    res.write("Fetching user...\n");
    //step 5.2
    console.log("step5.2");
    const user = await getUserFromDb();
    //5.6
    console.log("step5.3");
    res.end(`User Name is ${user.name} and id is ${user.id}`);
  }
}
module.exports = userRoute;
