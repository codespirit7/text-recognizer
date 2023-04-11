var Tesseract = require("tesseract.js");
var request = require("request");
var fs = require("fs");
var url = " https://i.ibb.co/jTKYQqP/Captcha-United.png";
var filename = "file.png";

var writeFile = fs.createWriteStream(filename);

//downloading and recognizing image
request(url)
  .pipe(writeFile)
  .on("close", function () {
    console.log(url, "saved to", filename);

    Tesseract.recognize(filename)
      .catch((err) => console.error(err))
      .then(function (result) {
        console.log(result.data.text);
        process.exit(0);
      });
  });
