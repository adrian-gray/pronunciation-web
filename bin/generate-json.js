const fs = require("fs");
const glob = require("glob");

const output = { phonemes: {} };

glob("src/data/sounds/*.json", (error, files) => {
  files.forEach(filename => {
    const contents = JSON.parse(fs.readFileSync(filename, "utf8"));
    const key = Object.keys(contents)[0];
    output.phonemes[key] = contents[key];
  });

  fs.writeFileSync("src/data/sounds.json", JSON.stringify(output));
});
