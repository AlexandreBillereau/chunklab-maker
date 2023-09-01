#!/usr/bin/env node
const fs = require("fs-extra");
const { exec } = require("child_process");

// Function to create project struc
async function createAppStructure() {
  exec(
    "git clone https://github.com/AlexandreBillereau/chunklab-maker.git",
    (err) => {
      try {
        fs.copySync("./chunklab-maker/chunklab-app/", "./");
        fs.removeSync("./chunklab-maker/");

        console.log("Install the dependencies: `npm i` : ");
        exec("npm i", (error, stdout, stderr) => {
          if (error) {
            console.error("Error running 'npm i':", error);
            return;
          }
          if (stderr) {
            console.error("npm i STDERR:", stderr);
          }
          console.log("npm i STDOUT:", stdout);
        });
      } catch (err) {
        console.error("An error from clonning :", err);
      }
    }
  );
}

createAppStructure();
