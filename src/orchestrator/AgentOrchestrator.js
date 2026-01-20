export class AgentOrchestrator {
    constructor(agents) {
      this.agents = agents;
    }
  
    async run(goal, initialState) {
      let state = {
        goal,
        ...initialState,
        completed: false,
        history: []
      };
  
      console.log("🎯 Goal:", goal);
  
      while (!state.completed) {
        const agent = this.decideNextAgent(state);
  
        console.log(`🤖 Running agent: ${agent.name}`);
  
        const result = await agent.run(state);
  
        state = { ...state, ...result };
  
        state.history.push({
          agent: agent.name,
          result
        });
      }
  
      return state;
    }
  
    decideNextAgent(state) {
        if (!state.jobs) return this.agents.googleDiscovery;
        if (!state.scoredJobs) return this.agents.matching;
        if (!state.outreach) return this.agents.outreach;
        if (!state.persisted) return this.agents.persistence;
        return { name: "Done", run: async () => ({ completed: true }) };
      }
      
  }
  