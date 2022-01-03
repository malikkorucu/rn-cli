import arg from "arg";
import inquirer from "inquirer";
import { createProject } from "./main.js";

function pasteArgumentsIntoOptions (rawArgs){
  const args = arg(
    {
      "--git": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-g": "--git",
      "-y": "--yes",
      "-i": "--install",
    },
    { argv: rawArgs.slice(2) }
  );

  return {
    skipPrompts: args["--yes"] || false,
    git: args["--git"] || false,
    template: args._[0],
    runInstall: args["--install"] || false,
  };
};

async function promptForMissingOptions (options){
  const defaultTemplate = "ReactNative";

  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  const questions = [];

  if (!options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "please choose whic project ?",
      choices: ["React", "ReactNative"],
      default: defaultTemplate,
    });
  }

  // if (!options.git) {
  //   questions.push({
  //     type: "list",
  //     name: "template",
  //     message: "please choose whic project ?",
  //     choices: ["React", "ReactNative"],
  //   });
  // }

  const answers = await inquirer.prompt(questions);

  return {
    ...options,
    template: options.template || answers.template,
  };
};

export async function cli(args){
  let options = pasteArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  await createProject(options)
};
