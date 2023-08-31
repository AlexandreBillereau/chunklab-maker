#!/usr/bin/env node
const fs = require("fs-extra");
const { exec } = require("child_process");
// Fonction pour créer la structure du projet

async function createAppStructure() {
  // exec("npm install next@latest react@latest react-dom@latest");
  try {
    // Créez les répertoires et fichiers nécessaires ici
    fs.copySync(
      "C:/Users/14388/WorkSpace/chunklab-maker/npm-package/app",
      "./"
    );
  } catch (err) {
    console.error("Une erreur est survenue :", err);
  }
}

createAppStructure();
