/* eslint-disable no-unused-vars */
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

function Transcription() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 95, { duration: 5 });
    return () => controls.stop();
  }, []);
  const text = {
    text: "%",
    fontSize: 64,
    color: "blue",
    fontWeight: "semibold",
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border mt-3 md:mt-0 border-gray-100">
      <h4 className="font-semibold mb-2">Transcription</h4>
      <p className="text-gray-500 mb-4">
        Get accurate, searchable transcripts of all your meetings.
      </p>
      <div className="flex justify-center">
        {/* <img
          src="https://meetpanda.in/img/home/benefits-transcription.svg"
          alt=""
        /> */}
        <motion.pre style={text}>{rounded}</motion.pre>
        <span
          style={{
            fontSize: 64,
            color: "blue",
          }}
          className="mb-"
        >
          %
        </span>
      </div>
    </div>
  );
}

export default Transcription;
