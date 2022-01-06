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
import { addTopOfFile } from "./utils/files";

const access = promisify(fs.access);
const copy = promisify(ncp);

export class Main {
  constructor(paths) {
    this.CONST = paths;
  }

  async createProject(options) {
    const { templateDir } = this.CONST;

    try {
      await access(templateDir, fs.constants.R_OK);
    } catch (error) {
      console.error("%s Invalid project name", colors.red.underline("ERROR"));
      process.exit(1);
    }

    this.initProjectFromGit(options);

    return true;
  }

  async initProjectFromGit(options) {
    const { targetDir } = this.CONST;

    const spinner = ora("React Native project initializing ...").start();
    const target_dir = targetDir;

    cmd.run(
      `cd ${target_dir} && npx react-native init ${options.name} --template react-native-template-typescript`,
      async (err, data, stderr) => {
        await this.copyTemplateFiles();
        await this.integrateFiles(options);
        cmd.run(`npx react-native run-android`)
        spinner.stop();
      }
    );
  }

  async copyTemplateFiles() {
    const { templateDir, projectDir } = this.CONST;

    await copy(templateDir, projectDir, {
      clobber: true,
    });

    this.installDependencies();
  }

  async integrateFiles(options) {
    const {
      TEMP_SETTINGS_GRADLE,
      PROJECT_SETTINGS_GRADLE,
      TEMP_MAIN_ACTIVITY_JAVA,
      PROJECT_MAIN_ACTIVITY_JAVA,
      PROJECT_BUILD_GRADLE,
      TEMP_BUILD_GRADLE,
      TEMP_MAIN_APPLICATION_JAVA,
      PROJECT_MAIN_APPLICATION_JAVA,
      TEMP_PACKAGE_JSON,
      PROJECT_PACKAGE_JSON,
      TEMP_APP_JSON,
      PROJECT_APP_JSON,
      name,
    } = this.CONST;

    // settings.gradle
    const settingsGradLe = fs
      .readFileSync(TEMP_SETTINGS_GRADLE)
      .toString()
      .replace(/%.*%/, name); // Project name

    fs.writeFileSync(path.resolve(PROJECT_SETTINGS_GRADLE), settingsGradLe);

    // MainActivity.java
    const mainActivityJava = fs
      .readFileSync(TEMP_MAIN_ACTIVITY_JAVA)
      .toString()
      .replace(/%lc%.*%lc%/, name.toLowerCase())
      .replace(/%.*%/, name);

    fs.writeFileSync(
      path.resolve(PROJECT_MAIN_ACTIVITY_JAVA),
      mainActivityJava
    );

    // mainApplication.java
    const mainApplicationJava = fs
      .readFileSync(TEMP_MAIN_APPLICATION_JAVA)
      .toString()
      .replace(/%.*%/g, name.toLowerCase());

    fs.writeFileSync(
      path.resolve(PROJECT_MAIN_APPLICATION_JAVA),
      mainApplicationJava
    );

    // build.gradle
    const buildGradle = fs
      .readFileSync(TEMP_BUILD_GRADLE)
      .toString()
      .replace(/%.*%/g, name.toLowerCase());

    fs.writeFileSync(path.resolve(PROJECT_BUILD_GRADLE), buildGradle);

    // package.json
    const packageJson = fs
      .readFileSync(TEMP_PACKAGE_JSON)
      .toString()
      .replace(/%.*%/g, name.toLowerCase());

    fs.writeFileSync(path.resolve(PROJECT_PACKAGE_JSON), packageJson);

    //app.json
    const appJson = fs
      .readFileSync(TEMP_APP_JSON)
      .toString()
      .replace(/%.*%/g, name);

    fs.writeFileSync(path.resolve(PROJECT_APP_JSON), appJson);
  }

  installDependencies() {
    const { name } = this.CONST;
    var spinner = ora("Packages are installing please wait...").start();
    cmd.run(`cd ${name} && npm install && cd ..`, () => {
      spinner.succeed();
    });
  }

  test() {}
}
