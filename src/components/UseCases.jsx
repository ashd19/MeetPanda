import React from "react";

const CASES = [
  {
    id: 1,
    title: "How Sales Teams Can Close Deals Faster with MeetPanda",
    tags: ["Sales", "Deals", "AI"],
    description:
      "Sales leaders know that timing and precision make the difference between winning and losing a deal. With MeetPanda, reps can rely on AI-driven summaries, action tracking, and CRM-ready exports to reduce manual note-taking and focus on building genuine connections with prospects.",
    image:
      "https://images.unsplash.com/photo-1522205408450-add114ad53fe?w=1200&q=80&auto=format&fit=crop",
    authorName: "Priyanka Joshi",
    authorRole: "Growth Strategist",
    authorAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Reinventing Recruitment and Onboarding with MeetPanda",
    tags: ["Recruitment", "Onboarding", "AI"],
    description:
      "Recruiting is a competitive landscape, and companies need to stand out. MeetPanda lets recruiters quickly find top talent, preview company culture, and schedule personalized interviews—all from an AI-powered switchboard.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop",
    authorName: "Rahul Karmakar",
    authorRole: "HR Technologist",
    authorAvatar:
      "https://images.unsplash.com/photo-1545996124-1f7b9a1f8b9a?w=200&q=80&auto=format&fit=crop",
  },
];

function Tag({ children }) {
  return (
    <span className="inline-block text-sm px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
      {children}
    </span>
  );
}

function UseCases() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm mb-4">
          Use cases
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-indigo-600">MeetPanda:</span> Built for Every
          Professional
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Whether you’re closing deals, hiring talent, teaching, or leading
          teams—MeetPanda adapts to your workflow. It removes the friction of
          traditional meetings so you can focus on outcomes.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-8">
        {CASES.map((c) => (
          <article
            key={c.id}
            className="bg-white rounded-xl shadow-sm p-6 md:p-8 grid md:grid-cols-3 gap-6 items-center"
          >
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-3">{c.title}</h2>

              <div className="flex flex-wrap gap-2 mb-4">
                {c.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <p className="text-gray-600 mb-6">{c.description}</p>
            </div>

            <div className="relative w-full md:w-56 md:ml-auto">
              <img
                src={c.image}
                alt="use case"
                className="w-full h-36 md:h-40 object-cover rounded-lg"
              />

              <div className="absolute -bottom-5 left-4 bg-white rounded-full px-3 py-2 flex items-center gap-3 shadow">
                <img
                  src={c.authorAvatar}
                  alt={c.authorName}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-sm">
                  <div className="font-medium">{c.authorName}</div>
                  <div className="text-gray-500 text-xs">{c.authorRole}</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default UseCases;
