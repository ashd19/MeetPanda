import React, { useState } from "react";
import { CircleQuestionMark, ChevronLeft, ChevronRight } from "lucide-react";

function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Arjun Patel",
      role: "Product Manager",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      quote:
        "The meeting insights and action items are very accurate. It's like having a perfect memory of every conversation. This tool has made our workflow much smoother and more efficient.",
      handle: "@arjun_patel",
    },
    {
      id: 2,
      name: "Meera Reddy",
      role: "Sales Director",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      quote:
        "MeetPanda has improved our sales process a lot. The automatic follow-up generation and meeting summaries save us many hours every week. A game changer for us.",
      handle: "@meera_reddy",
    },
    {
      id: 3,
      name: "Rahul Verma",
      role: "HR Manager",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      quote:
        "We use MeetPanda for all our candidate interviews. The detailed notes and insights help us make much better hiring decisions. This improved our hiring process significantly.",
      handle: "@rahul_verma",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-indigo-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-800 bg-purple-100 border border-purple-200 rounded-full px-3 py-1.5">
              <CircleQuestionMark className="w-3 h-3" /> Got Questions?
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Backed by Our{" "}
            <span className="text-indigo-600">Growing Community</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mb-2">
            Be part of the movement towards smarter, more efficient meetings.
          </p>

          {/* Avatar group + trusted text */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex -space-x-3">
              {testimonials.map((testimonial, idx) => (
                <img
                  key={idx}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Trusted by 100+ professionals and growing.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </p>

                    <p className="text-xs text-gray-400">
                      {testimonial.handle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
