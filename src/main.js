const ncp = require("ncp");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const colors = require("colors");
import os from 'os';

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

export async function createProject(options) {
  options = {
    ...options,
    targetDirectory: options.targetDirectory || process.cwd(),
  };

  const currentFileUrl = import.meta.url;
  let templateDir = path.resolve(
    new URL(currentFileUrl).pathname,
    "../../templates",
    options.template.toLowerCase()
  )

  if(os.platform() === 'win32') templateDir = templateDir.slice(3)

  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (error) {
    console.error("%s Invalid project name", colors.red.underline("ERROR"));
    process.exit(1);
  }

  console.log("Copy project files");
  await copyTemplateFiles(options);

  console.log("%s Project ready", colors.green.bgGreen.underline("DONE"));
  return true;
}
