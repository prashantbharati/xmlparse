const fs = require("fs");
const { parseString, Builder } = require("xml2js");

// Load the XML
const xml = fs.readFileSync("data.xml").toString();
parseString(xml, function (err, data) {
  // Show the XML
  console.log(data.people.person);

  // Modify the XML
  data.people.person[0].$.id = 2;
  console.log(data.people.person[0].$.id);

  // Saved the XML
  const builder = new Builder();
  const xml = builder.buildObject(data);
  fs.writeFileSync("data.xml", xml, function (err, file) {
    if (err) throw err;
    console.log("Saved!");
  });
});
