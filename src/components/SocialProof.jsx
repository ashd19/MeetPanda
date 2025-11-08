import React from "react";
import { CircleQuestionMark } from "lucide-react";
function SocialProof() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="first">
        <div className="flex items-center gap-1.5 text-xs max-w-fit font-medium text-neutral-800 bg-primary/10 border-white border-primary/20 rounded-full bg-purple-200 px-2 py-1">
          <CircleQuestionMark className="w-[12px] h-[13px]" /> Got Questions?
        </div>
      </div>
      <div className="">
        <h1 className="text-5xl  font-bold flex">
          Backed by Our <h1 className="text-blue-700"> Growing Community</h1>
        </h1>
      </div>
      <div>
        <h1>
          Be part of the movement towards smarter, more efficient meetings.
        </h1>
      </div>{" "}
      <div>
        <h1>Trusted by 100+ professionals and growin</h1>
      </div>
      {/*  Cards , 1] classic props !!! 2] animation ! doable !!! */}
    </div>
  );
}

export default SocialProof;
