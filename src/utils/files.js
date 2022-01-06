import fs from 'fs'
import path from 'path'

export const addTopOfFile = async({readDir, writeDir, data}) => {
  const readContent = fs
    .readFileSync(readDir) // TEMP_SETTINGS_GRADLE
    .toString()
    .split("\n");

  readContent.splice(0, 0, data); // `rootProject.name = '${options.name}'`
  let last_data = readContent.join("\n");

  fs.writeFileSync(path.resolve(writeDir), last_data, () => {
    //PROJECT_SETTINGS_GRADLE
    console.log("Completed");
  });
};
