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
     ...options
 }
}
