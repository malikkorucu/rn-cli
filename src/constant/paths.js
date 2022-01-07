import path from "path";

export const paths = (options) => {
const contentsDir = path.resolve(__dirname, "../../templates/contents")
const projectDir = path.resolve(options.targetDirectory || process.cwd(),`./${options.name}`)

return {
     currentFileUrl : import.meta.url,
     contentsDir,
     targetDir : options.targetDirectory || process.cwd(),
     projectDir,
     templateDir : path.resolve(__dirname,"../../templates/",options.template.toLowerCase()),
     TEMP_SETTINGS_GRADLE : path.resolve(contentsDir, "./settings.gradle"),
     PROJECT_SETTINGS_GRADLE : path.resolve(projectDir,"./android/settings.gradle"),
     TEMP_MAIN_ACTIVITY_JAVA: path.resolve(contentsDir , `./MainActivity.java`),
     PROJECT_MAIN_ACTIVITY_JAVA: path.resolve(projectDir , `./android/app/src/main/java/com/${options.name.toLowerCase()}/MainActivity.java`),
     TEMP_MAIN_APPLICATION_JAVA: path.resolve(contentsDir , `./MainApplication.java`),
     PROJECT_MAIN_APPLICATION_JAVA: path.resolve(projectDir , `./android/app/src/main/java/com/${options.name.toLowerCase()}/MainApplication.java`),
     TEMP_BUILD_GRADLE: path.resolve(contentsDir , `./build.gradle`),
     PROJECT_BUILD_GRADLE: path.resolve(projectDir , `./android/app/build.gradle`),
     TEMP_APP_JSON: path.resolve(contentsDir , `./app.json`),
     PROJECT_APP_JSON: path.resolve(projectDir , `./app.json`),
     TEMP_PACKAGE_JSON: path.resolve(contentsDir , `./package.json`),
     PROJECT_PACKAGE_JSON: path.resolve(projectDir , `./package.json`),
     
     TEMP_PODFILE: path.resolve(contentsDir , `./Podfile`),
     PROJECT_PODFILE: path.resolve(projectDir , `./ios/Podfile`),
     TEMP_FONTS_FILE: path.resolve(contentsDir , `./fonts`),
     PROJECT_FONTS_FILE: path.resolve(projectDir , `./ios/`),
     TEMP_INFO_PLIST: path.resolve(contentsDir , `./Info.plist`),
     PROJECT_INFO_PLIST: path.resolve(projectDir , `./ios/${options.name}/Info.plist`),
     TEMP_PROJECT_PBXPROJ: path.resolve(contentsDir , `./project.pbxproj`),
     PROJECT_PROJECT_PBXPROJ: path.resolve(projectDir , `./ios/${options.name}.xcodeproj/project.pbxproj`),
     ...options
 }
}