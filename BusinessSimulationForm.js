import { useState } from "react";
import { Slider } from "@mui/material";
import { Switch } from "@headlessui/react";
import { Button } from "@/components/ui/button";

export default function BusinessSimulationForm() {
  const [marketSize, setMarketSize] = useState(1);
  const [teamSize, setTeamSize] = useState(1);
  const [selfFinancing, setSelfFinancing] = useState("");
  const [securedFunding, setSecuredFunding] = useState("");
  const [difficulty, setDifficulty] = useState(0.5);
  const [blackSwan, setBlackSwan] = useState(false);

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Market Size</h2>
      <Slider
        value={marketSize}
        onChange={(e, v) => setMarketSize(v)}
        step={1}
        marks
        min={0}
        max={2}
        valueLabelDisplay="off"
      />
      <p className="text-sm">Small(&lt;1M) | Medium(1M-100M) | Large(&gt;100M)</p>
      
      <h2 className="text-xl font-semibold mt-4">Funding Status</h2>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Self-financing $"
          className="border p-2 rounded w-full"
          value={selfFinancing}
          onChange={(e) => setSelfFinancing(e.target.value)}
        />
        <input
          type="text"
          placeholder="Secured funding $"
          className="border p-2 rounded w-full"
          value={securedFunding}
          onChange={(e) => setSecuredFunding(e.target.value)}
        />
      </div>
      
      <h2 className="text-xl font-semibold mt-4">Team Size</h2>
      <Slider
        value={teamSize}
        onChange={(e, v) => setTeamSize(v)}
        step={1}
        marks
        min={0}
        max={2}
        valueLabelDisplay="off"
      />
      <p className="text-sm">Small(1-5) | Medium(5-20) | Large(&gt;20)</p>
      
      <h2 className="text-xl font-semibold mt-4">Pricing Strategy</h2>
      <div className="flex gap-2 flex-wrap">
        {['Cost-based pricing', 'Market-based pricing', 'Penetration pricing', 'Premium pricing'].map((strategy) => (
          <button key={strategy} className="px-4 py-2 border rounded-lg text-sm">
            {strategy}
          </button>
        ))}
      </div>
      
      <h2 className="text-xl font-semibold mt-4">Industry Environment Difficulty Level</h2>
      <Slider
        value={difficulty}
        onChange={(e, v) => setDifficulty(v)}
        step={0.1}
        min={0.1}
        max={1.0}
        valueLabelDisplay="auto"
      />
      
      <h2 className="text-xl font-semibold mt-4">Black Swan Events (Enable + Frequency)</h2>
      <div className="flex items-center gap-2">
        <Switch
          checked={blackSwan}
          onChange={setBlackSwan}
          className={`${blackSwan ? "bg-blue-600" : "bg-gray-300"} relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span className="sr-only">Enable Black Swan Events</span>
          <span
            className={`${blackSwan ? "translate-x-6" : "translate-x-1"} inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
        <span className="text-sm">0.1%–1%</span>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <Button className="px-6 py-2 rounded-lg bg-blue-500 text-white">Next →</Button>
        <div className="flex items-center space-x-2 border rounded-lg px-3 py-2">
          <span>What can I help you?</span>
          <span className="text-lg">🤖</span>
        </div>
      </div>
    </div>
  );
}
