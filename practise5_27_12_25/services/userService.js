function getUserFromDB() {
  //5.3
  console.log("step5.3");
  return new Promise((resolve, reject) => {
    //5.4
    console.log("step5.4");
    const dbWork = true;
    if (dbWork) {
      console.log("step5.4.1");
      //5.4.1
      resolve({ id: 1, name: "Admin" });
    } else {
      //5.5
      console.log("step5.5");
      reject("Error in getting user from DB");
    }
  });
}
module.exports = getUserFromDB;
