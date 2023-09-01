#!/usr/bin/env node
const fs = require("fs-extra");
const { exec } = require("child_process");
const chalk = require("chalk");
const emoji = require("node-emoji");
const ora = require("ora");

const Title =
  " $$$$$$\\  $$\\                           $$\\             $$\\                $$\\       \n" +
  "$$  __$$\\ $$ |                          $$ |            $$ |               $$ |      \n" +
  "$$ /  \\__|$$$$$$$\\  $$\\   $$\\ $$$$$$$\\  $$ |  $$\\       $$ |      $$$$$$\\  $$$$$$$  \n" +
  "$$ |      $$  __$$\\ $$ |  $$ |$$  __$$\\ $$ | $$  |      $$ |      \\____$$\\ $$  __$$\\ \n" +
  "$$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ |$$$$$$  /       $$ |      $$$$$$$ |$$ |  $$ |\n" +
  "$$ |  $$\\ $$ |  $$ |$$ |  $$ |$$ |  $$ |$$  _$$<        $$ |     $$  __$$ |$$ |  $$ |\n" +
  "\\$$$$$$  |$$ |  $$ |\\$$$$$$  |$$ |  $$ |$$ | \\$$\\       $$$$$$$$\\\\$$$$$$$ |$$$$$$$  |\n" +
  " \\______/ \\__|  \\__| \\______/ \\__|  \\__|\\__|  \\__|      \\________|\\_______|\\_______/ \n";

const loadingbar = ora();
loadingbar.spinner = "bouncingBar";

// Function to create project struc
async function createAppStructure() {
  console.log("\n");
  console.log(chalk.cyan(Title));
  console.log(chalk.green("Chunk-app creation"), emoji.emojify("🚀"));
  exec(
    "git clone https://github.com/AlexandreBillereau/chunklab-maker.git",
    (err) => {
      console.log(chalk.green("Get the code ", emoji.emojify("📦")));
      try {
        fs.copySync("./chunklab-maker/chunklab-app/", "./");
        fs.removeSync("./chunklab-maker/");

        console.log(
          chalk.green(
            "Install the",
            chalk.underline("dependencies"),
            " >>> `npm i`\n"
          )
        );
        loadingbar.start();
        exec("npm i", (error, stdout, stderr) => {
          if (error) {
            console.error("Error running npm install : ", chalk.red(error));
            return;
          }
          if (stderr) {
            console.error("npm install STDERR : ", chalk.red(stderr));
          }
          loadingbar.stopAndPersist({ symbol: emoji.emojify("✅") });
          console.log(chalk.cyan(stdout));
        });
      } catch (err) {
        console.error("An error from clonning :", err);
      }
    }
  );
}

createAppStructure();
