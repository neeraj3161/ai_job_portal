export class BaseAgent {
    constructor(name) {
      this.name = name;
    }
  
    async run(state) {
      throw new Error("Agent must implement run()");
    }
  }
  