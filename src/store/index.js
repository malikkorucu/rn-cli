export class Store {
  constructor() {
    this.state = {
      skipPrompts: false,
      action: "c",
      git: false,
      template: "ReactNative",
      name: "Yul",
      runInstall: false,
    };
  }

  setState(state){
    this.state = state
  }

  getState(){
      return this.state;
  }
}