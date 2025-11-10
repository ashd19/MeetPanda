import { Sparkle } from "lucide-react";

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
      <div className="max-w-6xl mx-auto px-6  text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          One <span className="text-indigo-600">Product</span> Many{" "}
          <span className="text-indigo-600">Benefits</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Reclaim 3+ hours every week, keep your team aligned with instant
          summaries, and find any moment across meetings in seconds.
        </p>
      </div>

      <div className="md:flex ">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1  md:flex  gap-6">
          {/* Left large card */}
          <div className="col-span-1 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-2">Auto-Join &amp; Record</h3>
            <p className="text-gray-500 mb-6">
              Hands-free calendar sync: MeetPanda joins your calls without
              downloads or bots.
            </p>
            <div>
              <img
                src="https://meetpanda.in/img/home/benefits-autojoin.svg"
                alt=""
              />
            </div>
          </div>
          {/* Middle column top */}

          <div className="md:flex md:gap-3">
            <div className="col-span-1 mb-5 h-fit  w-full bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold mb-2">Transcription</h4>
              <p className="text-gray-500 mb-4">
                Get accurate, searchable transcripts of all your meetings.
              </p>
              <div className="flex justify-center">
                <img
                  src="
                https://meetpanda.in/img/home/benefits-transcription.svg"
                  alt=""
                />
              </div>
            </div>
            {/* Right column top */}
            <div className="col-span-1 h-fit bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold mb-2">Search Across Meetings</h4>
              <p className="text-gray-500 mb-4">
                Quickly find key moments, topics, or decisions from any past
                meeting.
              </p>
              <div className="mt-4">
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21l-4.35-4.35"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <input
                    className="bg-transparent flex-1 outline-none text-sm text-gray-600"
                    placeholder="Search In Meetings"
                  />
                  <div className="text-xs text-gray-400">⌘ K</div>
                </div>
              </div>
            </div>
          </div>
          {/* Full width below: AI summaries left, MeetPanda card right */}
        </div>
      </div>
    </section>
  );
}

//  <div className="lg:col-span-2 flex md:flex-row flex-col gap-15 h-fit w-full md:h-full md:w-[1200px] bg-white rounded-xl p-6 shadow-sm border border-gray-100 mt-2">
//             <div>
//               <h4 className="font-semibold mb-2">
//                 AI Summaries &amp; Action Items
//               </h4>
//               <p className="text-gray-500">
//                 MeetPanda transforms every meeting into transcripts, highlights,
//                 and insights you can act on instantly
//               </p>
//             </div>
//             <div>
//               <img
//                 src="https://meetpanda.in/img/home/benefits-summary.svg"
//                 alt=""
//               />
//             </div>
//           </div>
