import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does charging take?",
      answer: "Our electric scooters typically take 4-5 hours for a full charge using a standard household outlet. With fast charging support, you can get up to 80% charge in just 2-3 hours. The charging time may vary slightly depending on the model and battery capacity."
    },
    {
      question: "What is the battery life?",
      answer: "The battery life varies by model, but most of our scooters offer a range of 60-100 km on a single charge under normal riding conditions. The lithium-ion batteries are designed to last 800-1000 charge cycles, which translates to approximately 3-5 years of regular use with proper maintenance."
    },
    {
      question: "Is subsidy available?",
      answer: "Yes, electric scooters are eligible for government subsidies under the FAME II (Faster Adoption and Manufacturing of Electric Vehicles) scheme. The subsidy amount varies by state and model. Additionally, many states offer their own EV incentives. Our team can help you navigate the subsidy application process and maximize your savings."
    },
    {
      question: "Is a license required to ride?",
      answer: "For electric scooters with a motor power up to 250W and a top speed of 25 km/h, no license is required. However, for high-speed electric scooters (above 25 km/h), you need a valid driving license. All riders must be at least 16 years old and follow local traffic regulations, including wearing a helmet."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our electric scooters, charging, maintenance, and more.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden transition-all duration-200 hover:bg-gray-50"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-black pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-black">
                  {openIndex === index ? (
                    <svg
                      className="w-5 h-5 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a
              href="#contact"
              className="text-black font-medium underline hover:no-underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}