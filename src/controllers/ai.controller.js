import { AgentOrchestrator } from "../orchestrator/AgentOrchestrator.js";
import { GoogleJobDiscoveryAgent } from "../agents/GoogleJobDiscoveryAgent.js";
import { MatchingAgent } from "../agents/MatchingAgent.js";
import { OutreachAgent } from "../agents/OutreachAgent.js";
import { PersistenceAgent } from "../agents/PersistenceAgent.js";

export async function runAgenticFlow(req, res) {
  const orchestrator = new AgentOrchestrator({
    googleDiscovery: new GoogleJobDiscoveryAgent(),
    matching: new MatchingAgent(),
    outreach: new OutreachAgent(),
    persistence: new PersistenceAgent()
  });

  const finalState = await orchestrator.run(
    "Discover jobs via Google and prepare outreach",
    {
      user: req.body.user
    }
  );

  res.json(finalState);
}
