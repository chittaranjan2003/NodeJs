// Sum calculate karne ka function
const sumReqeuestHandler = (req, res) => {
  console.log("Sum request handler working");
  // Body data collect karne ke liye
  const body = [];
  //on() ka matlab → event listener lagana

  // Data chunks receive karne ke liye event listener
  req.on("data", (chunk) => {
    //“Jab bhi data ka ek chunk aaye, mujhe batao”
    //Yahi kaam "data" event karta hai.

    body.push(chunk);
  });

  /*Jab data aata hai → "data" event fire hota hai
  data" event ke saath callback call hota hai                                                                                
 Jab data aana band ho jaata hai → "data" event band ho jaata hai                                  
Uske baad "end" event fire hota hai*/

  // Jab saara data aa jaaye
  req.on("end", () => {
    /*Jab request aati hai, to data chunks ke form me aata hai.

Har chunk ek Buffer hota hai aur usko hum apne banaye hue body array me store karte hain.

Jab saare chunks aa jaate hain, tab Buffer.concat(body) se un sab buffers ko jod diya jaata hai aur .toString() se unhe string me convert kar diya jaata hai, jise bodyStr me store karte hain.

Ye string URL-encoded form me hoti hai, isliye usko use karne ke liye URLSearchParams me pass karte hain.

URLSearchParams is encoded string ko internally decode karke key-value pairs me convert kar deta hai, jisse hum easily data access kar sakte hain.*/

    // Buffer ko string me convert
    const bodyStr = Buffer.concat(body).toString();

    // Query string ko parse
    const params = new URLSearchParams(bodyStr); //URLSearchParams is used to parse URL-encoded form data into key-value pairs.and eaa eake class ka constructor hai
    /*Object JavaScript ka built-in constructor function hai, aur hum uske static method (fromEntries) ko use kar rahe hain, jo internally ek naya plain object create karke return karta hai.*/

    // Object banaya
    const bodyObj = Object.fromEntries(params);
    // Number me convert karke sum nikala
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
        <head>
        <title>Home Page.</title>
        </head>
        <body>
        <h1>Your sum id ${result}</h1>
        <a href="/calculator">Back</a>
        </body>
        </html>`);
    return res.end();
  });
};
// Export function
exports.sumReqeuestHandler = sumReqeuestHandler;
