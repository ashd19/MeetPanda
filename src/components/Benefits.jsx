import { Sparkle } from "lucide-react";
import AutoJoinRecord from "./subcomponents/AutoJoinRecord";

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

      <div className="max-w-8xl mx-auto px-6">
        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        </div>

        

      </div>
    </section>
  );
}
