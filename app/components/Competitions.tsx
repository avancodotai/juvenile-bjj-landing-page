"use client";

import { motion } from "framer-motion";
import { fadeInUp, cardVariants } from "../utils/animations";
import { useState } from "react";

export default function Competitions() {
  const [currentInternationalSlide, setCurrentInternationalSlide] = useState(0);
  const [currentYouthSlide, setCurrentYouthSlide] = useState(0);

  const internationalChampionships = [
    {
      icon: "🏆",
      title: "IBJJF World Championship",
      desc: "The most prestigious BJJ tournament in the world, held annually in California.",
    },
    {
      icon: "🥋",
      title: "IBJJF Pan Championship",
      desc: "Pan-American Championship featuring top competitors from the Americas.",
    },
    {
      icon: "🌏",
      title: "IBJJF Asian Championship",
      desc: "Premier Asian tournament bringing together the best BJJ athletes from across Asia.",
    },
    {
      icon: "⚔️",
      title: "ADCC World Championship",
      desc: "The Olympics of submission grappling, held every two years.",
      link: "https://adcc-official.com/pages/adcc-youth",
      linkText: "Learn about ADCC Youth",
    },
  ];

  const youthTournaments = [
    {
      icon: "👶",
      title: "IBJJF Kids Tournaments",
      desc: "Age-specific competitions for kids (4-15 years) held throughout the year across multiple locations.",
      items: [
        "Organized by age and weight",
        "Safe, supervised environment",
        "Build competitive experience",
      ],
    },
    {
      icon: "🎓",
      title: "School & Academy Tournaments",
      desc: "Local and regional tournaments perfect for first-time competitors to gain experience.",
      items: [
        "Beginner-friendly format",
        "Supportive atmosphere",
        "Build confidence",
      ],
    },
    {
      icon: "🌟",
      title: "National Championships",
      desc: "Indian National BJJ Championships and other country-level competitions for youth athletes.",
      items: [
        "Represent your region",
        "Pathway to international events",
        "Scholarships & recognition",
      ],
    },
  ];

  const nextInternationalSlide = () => {
    setCurrentInternationalSlide((prev) => (prev + 1) % internationalChampionships.length);
  };

  const prevInternationalSlide = () => {
    setCurrentInternationalSlide((prev) => (prev - 1 + internationalChampionships.length) % internationalChampionships.length);
  };

  const nextYouthSlide = () => {
    setCurrentYouthSlide((prev) => (prev + 1) % youthTournaments.length);
  };

  const prevYouthSlide = () => {
    setCurrentYouthSlide((prev) => (prev - 1 + youthTournaments.length) % youthTournaments.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-base font-semibold leading-7 text-orange-600">
            COMPETE ON THE WORLD STAGE
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Championship Opportunities Await
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            From local tournaments to international championships, Westbay BJJ
            prepares students to compete at the highest levels across the globe.
          </p>
          <div className="mt-6">
            <a
              href="https://ibjjf.com/events/championships"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-orange-700 transition-colors"
            >
              View IBJJF Championships
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Major International Competitions */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Prestigious International Championships
          </h3>

          {/* Desktop Grid View */}
          <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {internationalChampionships.map((championship, index) => (
              <motion.div
                key={championship.title}
                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="text-4xl mb-3">{championship.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {championship.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {championship.desc}
                </p>
                {championship.link && (
                  <a
                    href={championship.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    {championship.linkText}
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentInternationalSlide * 100}%)` }}
              >
                {internationalChampionships.map((championship, index) => (
                  <div key={championship.title} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                      <div className="text-4xl mb-3">{championship.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {championship.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {championship.desc}
                      </p>
                      {championship.link && (
                        <a
                          href={championship.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                        >
                          {championship.linkText}
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevInternationalSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/90 hover:bg-white text-orange-600 rounded-full p-3 shadow-lg transition-all z-10"
              aria-label="Previous championship"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextInternationalSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/90 hover:bg-white text-orange-600 rounded-full p-3 shadow-lg transition-all z-10"
              aria-label="Next championship"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {internationalChampionships.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentInternationalSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentInternationalSlide
                      ? "bg-orange-600 w-8"
                      : "bg-orange-300 hover:bg-orange-400"
                  }`}
                  aria-label={`Go to championship ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Youth & Juvenile Competitions */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Youth & Juvenile Tournaments
          </h3>

          {/* Desktop Grid View */}
          <div className="hidden md:grid gap-6 md:grid-cols-3">
            {youthTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.title}
                className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border border-orange-200"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="text-3xl mb-3">{tournament.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {tournament.title}
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  {tournament.desc}
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  {tournament.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentYouthSlide * 100}%)` }}
              >
                {youthTournaments.map((tournament, index) => (
                  <div key={tournament.title} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border border-orange-200">
                      <div className="text-3xl mb-3">{tournament.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {tournament.title}
                      </h4>
                      <p className="text-sm text-gray-700 mb-3">
                        {tournament.desc}
                      </p>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {tournament.items.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevYouthSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/90 hover:bg-white text-orange-600 rounded-full p-3 shadow-lg transition-all z-10"
              aria-label="Previous tournament"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextYouthSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/90 hover:bg-white text-orange-600 rounded-full p-3 shadow-lg transition-all z-10"
              aria-label="Next tournament"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {youthTournaments.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentYouthSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentYouthSlide
                      ? "bg-orange-600 w-8"
                      : "bg-orange-300 hover:bg-orange-400"
                  }`}
                  aria-label={`Go to tournament ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Competition Benefits */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Why Competition Matters
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl mb-2">💪</div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Build Mental Toughness
              </h4>
              <p className="text-sm text-gray-600">
                Learn to perform under pressure and overcome nerves
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Set & Achieve Goals
              </h4>
              <p className="text-sm text-gray-600">
                Experience the journey from training to championship
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-semibold text-gray-900 mb-1">
                Sportsmanship & Respect
              </h4>
              <p className="text-sm text-gray-600">
                Learn to win graciously and lose with dignity
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6 italic">
            Note: Competition participation is optional and based on individual
            readiness and interest. Westbay BJJ will host one friendly in-house competition
            per term at Next School!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
