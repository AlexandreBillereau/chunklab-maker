#!/usr/bin/env node
const fs = require("fs-extra");
const { exec } = require("child_process");
// Fonction pour créer la structure du projet

async function createAppStructure() {
  exec(
    "git clone https://github.com/AlexandreBillereau/chunklab-maker.git",
    (err) => {
      try {
        fs.copySync("./chunklab-maker/chunklab-app/", "./");
        fs.removeSync("./chunklab-maker/");
        exec("npm i");
      } catch (err) {
        console.error("Une erreur est survenue :", err);
      }
    }
  );
}

createAppStructure();
