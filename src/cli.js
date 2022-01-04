import arg from "arg";
import inquirer from "inquirer";
import { createProject } from "./main.js";
import ora from 'ora';

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
    name:args._[1],
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

  if (!options.name) {
    questions.push({
      type: "input",
      name: "name",
      message: "What's your project name ?",
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

  console.log(answers)
  return {
    ...options,
    template: options.template || answers.template,
    name: options.name || answers.name
  };
};

export async function cli(args){
  let options = pasteArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);

  const spinner = ora('Loading ...').start();

  setTimeout(async()=> {
    await createProject(options)
    spinner.stop();
  },3000)
};
