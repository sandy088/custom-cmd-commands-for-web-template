#!/usr/bin/env node
const fs = require("fs");
const { exec } = require("shelljs");
const { program } = require("commander");

program.arguments("<folder>").action((folder) => {
  exec(`mkdir ${folder}`, (code, stdout, stderr) => {
    if (stderr) {
      console.log(stderr);
    } else {
      console.log("Folder created");
    }
    // Change into the new directory
    process.chdir(folder);
    // Define HTML content
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>Hello, from Sandeep!</h1>
      <script src="index.js"></script>
    </body>
    </html>`;

    fs.writeFile("index.html", htmlContent, (err) => {
      if (stderr) {
        console.log(stderr);
      } else {
        console.log("index.html created");
      }

      exec(
        ` echo "# write styles here" > styles.css`,
        (code, stdout, stderr) => {
          if (stderr) {
            console.log(stderr);
          } else {
            console.log("styles.css created");
          }

          exec(
            ` echo "// write scripts here" > scripts.js`,
            (code, stdout, stderr) => {
              if (stderr) {
                console.log(stderr);
              } else {
                console.log("scripts.js created");
              }
            }
          );
        }
      );
    });
  });
});

program.parse(process.argv);
