import { useState } from "react";

export function Component() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const faqs = [
    {
      q: "What is EUB Mobility and Erasmus+?",
      a: "EUB Mobility provides Erasmus+ funded internships in Italy — work experience, language practice, cultural growth.",
    },
    {
      q: "Who can join?",
      a: "Students and young people aged 16–30. No experience required — motivation is enough.",
    },
    {
      q: "Do I pay for the internship?",
      a: "No. Erasmus+ covers stay, insurance, travel support + pocket money.",
    },
    {
      q: "How does recruitment work?",
      a: "Apply → short interview → documents → preparation → internship assignment.",
    },
    {
      q: "Do I need Italian language?",
      a: "Not required — support from mentors, international environments, natural learning on place.",
    },
    {
      q: "How long does mobility take?",
      a: "Usually 2–4 weeks depending on the project.",
    },
  ];

  return (
    <section className="px-6 py-16 md:py-24 bg-[var(--gray-bg-color)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--black-color)] leading-tight">
          Frequently Asked Questions
        </h2>

        <p className="text-[var(--gray-text-color)] mt-4 mb-10 md:mb-14 text-sm md:text-base">
          Everything you need to know about our Erasmus+ mobility in Italy.
        </p>

        {/* FAQ */}
        <div className="space-y-4 text-left">
          {faqs.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-4 md:py-5 border-b border-gray-300 group"
              >
                <span
                  className={`font-medium md:text-lg transition
                  ${
                    openIndex === index
                      ? "text-[var(--green-text-color)]"
                      : "text-[var(--black-color)]"
                  }`}
                >
                  {item.q}
                </span>

                <svg
                  className={`w-5 h-5 transition-transform duration-300 
                    ${
                      openIndex === index
                        ? "rotate-180 text-[var(--green-text-color)]"
                        : "text-gray-500 group-hover:text-[var(--green-text-color)]"
                    }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 text-sm md:text-base text-[var(--gray-text-color)] leading-relaxed
                ${openIndex === index ? "max-h-32 py-2" : "max-h-0"}`}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
