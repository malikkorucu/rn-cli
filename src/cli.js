import arg from "arg";
import inquirer from "inquirer";
import ora from "ora";
import { Main } from "./main.js";
import { paths } from "./constant/paths.js";

export class Cli {
  constructor() {}

  pasteArgumentsIntoOptions(rawArgs) {
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
      action: args._[0] || "create-project",
      git: args["--git"] || false,
      template: args._[1],
      name: args._[2],
      runInstall: args["--install"] || false,
    };
  }

  async promptForMissingOptions(options) {
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
        message: "please choose which project ?",
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

    console.log(answers);
    return {
      ...options,
      template: options.template || answers.template,
      name: options.name || answers.name,
    };
  }

  async cli(args) {
    let options = this.pasteArgumentsIntoOptions(args);
    options = await this.promptForMissingOptions(options);

    const spinner = ora("Loading ...").start();
    const main = new Main(paths(options));
    await main.createProject(options)
    // main.test();

    spinner.stop();
  }
}
