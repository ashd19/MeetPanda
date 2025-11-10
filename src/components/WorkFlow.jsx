import {
  Calendar,
  Activity,
  CalendarCheck,
  Sparkle,
  Shield,
} from "lucide-react";

function Workflow() {
  return (
    <div className="flex flex-col items-center px-2 gap-5 ">
      <p className=" inline-flex gap-2 bg-indigo-50  text-indigo-600 px-3 py-1 rounded-full text-sm mb-4">
        <Sparkle width={10} height={10} className="mt-1" />
        Our WorkFlow
      </p>
      <h1 className="text-3xl font-bold">
        Your <span className="text-blue-800 font-bold"> AI Teammate</span>,
        Always in the room
      </h1>
      <h1 className="text-lg mb-10">
        MeetPanda's AI seamlessly integrates into your favourite meeting
        platforms—whether it's Google Meet, <br /> or Microsoft Teams. No
        installs, no disruptions.
      </h1>
      <div className="flex md:flex-row flex-col items-center gap-10">
        <div className="bg-white flex flex-col gap-2  items-center w-full h-full">
          <CalendarCheck />
          <div>
            <h1>WorkFlows</h1>
          </div>
        </div>{" "}
        <div className="bg-white flex flex-col gap-2  items-center w-full h-full">
          <Calendar />
          <div>
            <h1>Analysis</h1>
          </div>
        </div>{" "}
        <div className="bg-white flex flex-col gap-2  items-center w-[150px] h-[100px]">
          <Activity className="mt-5" />
          <div className="flex  ">
            <h1 className="whitespace-nowrap">Real Time</h1>
          </div>
        </div>{" "}
        <div className="bg-white flex flex-col gap-2  items-center w-full h-full">
          <Shield />
          <div>
            <h1>Secure</h1>
          </div>
        </div>
      </div>

      <div
        className="w-3/4 md:w-1/2 h-72 md:h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://meetpanda.in/img/home/workflow-bg.svg')",
        }}
      >
        <div className="flex flex-col items-center gap-5">
          <img
            className="w-64 h-64 md:w-[500px] md:h-[450px] object-contain"
            src="https://meetpanda.in/img/home/workflow.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Workflow;
