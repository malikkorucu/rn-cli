import ncp from "ncp";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import colors from "colors";
import cmd from "node-cmd";
import ora from "ora";

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
        await this.copyTemplateFiles(options);
        spinner.stop();
      }
    );
  }

  async copyTemplateFiles(options) {
    const { templateDir, projectDir } = this.CONST;

    await copy(templateDir, projectDir, {
      clobber: true,
    });

    await this.installDependencies(options);
  }

  async integrateFiles() {
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
      TEMP_PODFILE,
      PROJECT_PODFILE,
      PROJECT_INFO_PLIST,
      TEMP_INFO_PLIST,
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

    //info.plist
    const infoPlist = fs
      .readFileSync(TEMP_INFO_PLIST)
      .toString()
      .replace(/%lc%.*%lc%/g, name.toLowerCase())
      .replace(/%.*%/g, name);

    fs.writeFileSync(path.resolve(PROJECT_INFO_PLIST), infoPlist);

    this.copyPasteFontFiles();

    //Podfile
    const podfile = fs
      .readFileSync(TEMP_PODFILE)
      .toString()
      .replace(/%.*%/g, name);

    fs.writeFileSync(path.resolve(PROJECT_PODFILE), podfile);
  }

  async installDependencies(options) {
    const { name } = this.CONST;
    var spinner = ora("Packages are installing please wait...").start();
    cmd.run(`cd ${name} && npm install --save && cd ..`, async () => {
      spinner.succeed();
      await this.integrateFiles(options);
    });
    return true;
  }

  async copyPasteFontFiles() {
    const { TEMP_FONTS_FILE, PROJECT_FONTS_FILE_IOS,PROJECT_FONTS_FILE_ANDROID } = this.CONST;
    var targetFolderIos = path.join(PROJECT_FONTS_FILE_IOS, path.basename("fonts"));
    let targetFolderAndroid = path.join(PROJECT_FONTS_FILE_ANDROID, path.basename("assets"));
    let targetFolderFontsAndroid;

    if (!fs.existsSync(targetFolderIos)) {
      fs.mkdirSync(targetFolderIos);
    }

    if(!fs.existsSync(targetFolderAndroid)){
      fs.mkdirSync(targetFolderAndroid);
      targetFolderFontsAndroid = path.join(targetFolderAndroid , path.basename('fonts'))
    }

    await copy(TEMP_FONTS_FILE, targetFolderFontsAndroid, {
      clobber: true,
    });

    await copy(TEMP_FONTS_FILE, targetFolderIos, {
      clobber: true,
    });
  }

  async test() {
  }
}