import { Sparkle } from "lucide-react";

function Workflow() {
  return (
    <div className="flex flex-col items-center px-2 gap-5">
      <p className=" inline-flex gap-2 bg-indigo-50  text-indigo-600 px-3 py-1 rounded-full text-sm mb-4">
        <Sparkle width={10} height={10} className="mt-1" />
        Our WorkFlow
      </p>
      <h1 className="text-3xl font-bold">
        Your <span className="text-blue-800 font-bold"> AI Teammate</span>,
        Always in the room
      </h1>
      <h1 className="text-lg">
        MeetPanda's AI seamlessly integrates into your favourite meeting
        platforms—whether it's Google Meet, <br /> or Microsoft Teams. No
        installs, no disruptions.
      </h1>
      <div className="flex items-center gap-5">

        
      </div>
    </div>
  );
}

export default Workflow;
