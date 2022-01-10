import path from "path";

export const paths = (options) => {
  const contentsDir = path.resolve(__dirname, "../../templates/contents");
  const projectDir = path.resolve(options.targetDirectory || process.cwd(),`./${options.name}`) //prettier-ignore

  return {
    currentFileUrl: import.meta.url,
    contentsDir,
    targetDir: options.targetDirectory || process.cwd(),
    projectDir,
    templateDir : path.resolve(__dirname,"../../templates/",options.template.toLowerCase()), //prettier-ignore
    // Settings Gradle File
    TEMP_SETTINGS_GRADLE : path.resolve(contentsDir, "./settings.gradle"), //prettier-ignore
    PROJECT_SETTINGS_GRADLE : path.resolve(projectDir,"./android/settings.gradle"), //prettier-ignore
    //Main Activity Java File
    TEMP_MAIN_ACTIVITY_JAVA: path.resolve(contentsDir , `./MainActivity.java`), //prettier-ignore
    PROJECT_MAIN_ACTIVITY_JAVA: path.resolve(projectDir , `./android/app/src/main/java/com/${options.name.toLowerCase()}/MainActivity.java`), //prettier-ignore
    //Main Application Java File
    TEMP_MAIN_APPLICATION_JAVA: path.resolve(contentsDir , `./MainApplication.java`), //prettier-ignore
    PROJECT_MAIN_APPLICATION_JAVA: path.resolve(projectDir , `./android/app/src/main/java/com/${options.name.toLowerCase()}/MainApplication.java`), //prettier-ignore
    //BuildGradle File
    TEMP_BUILD_GRADLE: path.resolve(contentsDir , `./build.gradle`), //prettier-ignore
    PROJECT_BUILD_GRADLE: path.resolve(projectDir , `./android/app/build.gradle`), //prettier-ignore
    //App.json File
    TEMP_APP_JSON: path.resolve(contentsDir , `./app.json`), //prettier-ignore
    PROJECT_APP_JSON: path.resolve(projectDir , `./app.json`), //prettier-ignore
    //Package.json File
    TEMP_PACKAGE_JSON: path.resolve(contentsDir , `./package.json`), //prettier-ignore
    PROJECT_PACKAGE_JSON: path.resolve(projectDir , `./package.json`), //prettier-ignore
    //Podfile
    TEMP_PODFILE: path.resolve(contentsDir , `./Podfile`), //prettier-ignore
    PROJECT_PODFILE: path.resolve(projectDir , `./ios/Podfile`), //prettier-ignore
    //Font Files
    TEMP_FONTS_FILE: path.resolve(contentsDir , `./fonts`), //prettier-ignore
    PROJECT_FONTS_FILE_IOS: path.resolve(projectDir , `./ios/`), //prettier-ignore
    PROJECT_FONTS_FILE_ANDROID: path.resolve(projectDir , `./android/app/src/main/`), //prettier-ignore
    //Info Plist File
    TEMP_INFO_PLIST: path.resolve(contentsDir , `./Info.plist`), //prettier-ignore
    PROJECT_INFO_PLIST: path.resolve(projectDir , `./ios/${options.name}/Info.plist`), //prettier-ignore
    //PbxProject File
    TEMP_PROJECT_PBXPROJ: path.resolve(contentsDir , `./project.pbxproj`), //prettier-ignore
    PROJECT_PROJECT_PBXPROJ: path.resolve(projectDir , `./ios/${options.name}.xcodeproj/project.pbxproj`), //prettier-ignore
    //All Other Options
    ...options,
  };
};
