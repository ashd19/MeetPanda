import { Sparkle } from "lucide-react";
import AutoJoinRecord from "./subcomponents/AutoJoinRecord";
import Transcription from "./subcomponents/Transcription";
import SearchAcrossMeetings from "./subcomponents/SearchAcrossMeetings";
import AiSummaries from "./subcomponents/AiSummaries";

export default function Benefits() {
  return (
    <section
      style={{
        backgroundImage: "url('https://meetpanda.in/img/home/benefits-bg.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="py-16 bg-gray-50 relative"
    >
      <div className="max-w-8xl mx-auto px-6 text-center">
        <p className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm mb-4">
          <Sparkle className="w-3 h-3" />
          <span>Benefits</span>
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          One <span className="text-indigo-600">Product</span> Many{" "}
          <span className="text-indigo-600">Benefits</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Reclaim 3+ hours every week, keep your team aligned with instant
          summaries, and find any moment across meetings in seconds.
        </p>
      </div>
      {/* on mobile one after the other in col so flex-col works easily!  */}

      <div className="w-full px-5 ">
        {/* for mobile , one after the other  */}
        <div className="flex flex-col gap-5 ">
          <div className="md:flex md:gap-3">
            <AutoJoinRecord />
            <div>

              <div className="md:flex md:flex-col ">
                <div className="md:flex md:gap-3  ">
                  <Transcription />
                  <SearchAcrossMeetings />
                </div>

                <AiSummaries />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
