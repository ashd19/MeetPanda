import React from "react";

function AiSummaries() {
  return (
    <div className="grid grid-cols-1 md:flex w-full gap-6 mt-6">
      <div className="md:flex w-full  bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col gap-5">
          <h4 className="font-semibold mb-2">
            AI Summaries &amp; Action Items
          </h4>
          <p className="text-gray-500 mb-4">
            MeetPanda transforms every meeting into transcripts, highlights, and
            insights you can act on instantly
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://meetpanda.in/img/home/benefits-summary.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AiSummaries;
