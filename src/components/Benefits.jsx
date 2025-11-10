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
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-2">Auto-Join &amp; Record</h3>
            <p className="text-gray-500 mb-6">
              Hands-free calendar sync: MeetPanda joins your calls without
              downloads or bots.
            </p>
            <div className="flex justify-center">
              <img
                src="https://meetpanda.in/img/home/benefits-autojoin.svg"
                alt=""
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold mb-2">Transcription</h4>
            <p className="text-gray-500 mb-4">
              Get accurate, searchable transcripts of all your meetings.
            </p>
            <div className="flex justify-center">
              <img
                src="https://meetpanda.in/img/home/benefits-transcription.svg"
                alt=""
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
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

        {/* Bottom row: AI Summaries + Meeting card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h4 className="font-semibold mb-2">
              AI Summaries &amp; Action Items
            </h4>
            <p className="text-gray-500 mb-4">
              MeetPanda transforms every meeting into transcripts, highlights,
              and insights you can act on instantly
            </p>
            <div className="flex justify-center">
              <img
                src="https://meetpanda.in/img/home/benefits-summary.svg"
                alt=""
              />
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                🐾
              </div>
              <div className="font-semibold">MeetPanda</div>
            </div>
            <div className="font-medium mb-1">Annual General meeting</div>
            <div className="text-sm text-gray-500 mb-4">
              📅 10:00 am - 11:30 am 9th Aug 2025
            </div>
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                Transcript
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-md text-sm font-medium">
                Summary
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                For You
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                Deliverables
              </span>
            </div>
            <div className="mb-2 font-medium text-sm">Opening Remarks</div>
            <p className="text-gray-600 text-sm">
              The Chairperson, [Joe], welcomed shareholders, board members,
              employees, and stakeholders to the Annual General Meeting. The
              quorum was confirmed, and the meeting was officially called to
              order.
            </p>
          </div>
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
