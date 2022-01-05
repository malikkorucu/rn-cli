import ncp from "ncp";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import colors from "colors";
import os from "os";
import Listr from "listr";
import { projectInstall } from "pkg-install";
import cmd from "node-cmd";
import ora from "ora";
import { paths } from "./constant/paths";

let CONST = "";

const access = promisify(fs.access);
const copy = promisify(ncp);

async function initProjectFromGit(options) {
  console.log(CONST.templateDir);
  console.log(CONST.targetDir);
  console.log(CONST.projectDir);

  const spinner = ora("React Native project initializing ...").start();
  const target_dir = CONST.targetDir;

  cmd.run(
    `cd ${target_dir} && npx react-native init ${options.name} --template react-native-template-typescript`,
    async function (err, data, stderr) {
      await copyTemplateFiles();
      await integrateFiles(options);
      spinner.stop();
    }
  );
}

async function copyTemplateFiles() {
  console.log("template", CONST.templateDir);
  console.log("project", CONST.projectDir);

  await copy(CONST.templateDir, CONST.projectDir, {
    clobber: true,
  });
}

async function integrateFiles(options) {
  const settings_gradle_data = fs
    .readFileSync(CONST.TEMP_SETTINGS_GRADLE)
    .toString()
    .split("\n");

  settings_gradle_data.splice(0, 0, `rootProject.name = '${options.name}'`);
  let last_data = settings_gradle_data.join("\n");

  fs.writeFileSync(
    path.resolve(CONST.PROJECT_SETTINGS_GRADLE),
    last_data,
    () => {
      console.log("aa");
    }
  );
}

async function initProject(options) {
  if (result.failed) {
    return Promise.reject(new Error("Failed to initialize project"));
  }
}

export async function createProject(options) {
  CONST = paths(options);
  console.log(CONST.TEMP_SETTINGS_GRADLE , CONST.PROJECT_SETTINGS_GRADLE)

  try {
    await access(CONST.templateDir, fs.constants.R_OK);
  } catch (error) {
    console.error("%s Invalid project name", colors.red.underline("ERROR"));
    process.exit(1);
  }

  initProjectFromGit(options);

  // const tasks = new Listr([
  //   {
  //     title: "İnitialize",
  //     task: () => initProjectFromGit(options),
  //   },
  //   // {
  //   //   title: "Integrations",
  //   //   task: () => integrateFiles(options),
  //   // },
  //   // {
  //   //   title: "Initialize git",
  //   //   task:() => initGit(options)
  //   // // }
  //   // {
  //   //   title: "Install dependencies",
  //   //   task: () =>
  //   //     projectInstall({
  //   //       pwd: options.targetDirectory,
  //   //     }),
  //   // },
  // ]);

  // await tasks.run();

  // console.log("%s Project ready", colors.green.bgGreen.underline("DONE"));
  return true;
}
