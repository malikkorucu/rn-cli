import ncp from "ncp";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import colors from "colors";
import os from "os";
import Listr from "listr";
import { projectInstall } from "pkg-install";
import cmd from "node-cmd";
import ora from 'ora';

const access = promisify(fs.access);
const copy = promisify(ncp);

async function copyTemplateFiles(options) {
  const spinner = ora('React Native project initializing ...').start();
  cmd.run(
    `cd ${options.targetDirectory} && npx react-native init ${options.name} --template react-native-template-typescript`,
    function (err, data, stderr) {
      console.log(
        "examples dir now contains the example file along with : ",
        data
      );
      spinner.stop()
    }
  );

  return copy(options.templateDirectory, options.targetDirectory, {
    clobber: false,
  });
}

async function initProject(options) {
  if (result.failed) {
    return Promise.reject(new Error("Failed to initialize project"));
  }
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
  );

  if (os.platform() === "win32") templateDir = templateDir.slice(3);

  options.templateDirectory = templateDir;

  try {
    await access(templateDir, fs.constants.R_OK);
  } catch (error) {
    console.error("%s Invalid project name", colors.red.underline("ERROR"));
    process.exit(1);
  }

  const tasks = new Listr([
    {
      title: "Copy project files",
      task: () => copyTemplateFiles(options),
    },
    // {
    //   title: "Initialize git",
    //   task:() => initGit(options)
    // }
    {
      title: "Install dependencies",
      task: () =>
        projectInstall({
          pwd: options.targetDirectory,
        }),
    },
  ]);

  await tasks.run();

  console.log("%s Project ready", colors.green.bgGreen.underline("DONE"));
  return true;
}
