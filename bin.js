#!/usr/bin/env node
const fs = require("fs-extra");
const { exec } = require("child_process");
// Fonction pour créer la structure du projet

async function createAppStructure() {
  // exec("npm install next@latest react@latest react-dom@latest");
  exec(
    "git clone https://github.com/AlexandreBillereau/chunklab-maker.git",
    (err) => {
      try {
        fs.cpSync("./chunklab-maker/chunklab-app");
      } catch (err) {
        console.error("Une erreur est survenue :", err);
      }
    }
  );
}

createAppStructure();
