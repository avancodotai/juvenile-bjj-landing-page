"use client";

import { motion } from "framer-motion";
import { fadeInUp, cardVariants } from "../utils/animations";
import { useState } from "react";

export default function PedagogyAndCurriculum() {
  const [currentPillarSlide, setCurrentPillarSlide] = useState(0);
  const [currentAgeSlide, setCurrentAgeSlide] = useState(0);

  const pillars = [
    {
      icon: "🛡️",
      title: "Guard",
      desc: "Defensive and attacking positions from bottom",
      image: "/guard.jpg",
    },
    {
      icon: "🚀",
      title: "Passing",
      desc: "Techniques to overcome opponent's guard",
      image: "/passing.jpg",
    },
    {
      icon: "⚓",
      title: "Control",
      desc: "Dominant positions and weight distribution",
      image: "/control.jpg",
    },
    {
      icon: "🔒",
      title: "Submissions",
      desc: "Joint locks and chokes (age-appropriate)",
      image: "/submission.jpg",
    },
    {
      icon: "🤸",
      title: "Takedowns",
      desc: "Standing techniques and wrestling integration",
      image: "/takedown.jpg",
    },
    {
      icon: "🏃",
      title: "Escapes",
      desc: "Defensive movements and position recovery",
      image: "/escape.jpg",
    },
  ];

  const ageGroups = [
    {
      title: "Ages 4-7",
      subtitle: "Little Champions",
      description: "Learning through play and games",
      image: "/four-seven.jpg",
      focus: "Play-Based Learning",
      focusIcon: "🎮",
      focusDesc: "All techniques taught through fun games and activities",
      focusColor: "emerald",
      items: [
        "Interactive games and movement exploration",
        "Basic positions discovered through play",
        "Coordination and motor skill development",
        "Social skills and following instructions",
      ],
    },
    {
      title: "Ages 8-12",
      subtitle: "Core Program",
      description: "Structured curriculum with systematic progression",
      image: "/eight-twelve.jpg",
      focus: "Structured Learning",
      focusIcon: "📋",
      focusDesc: "Systematic curriculum with clear progression path",
      focusColor: "blue",
      items: [
        "Comprehensive technique curriculum",
        "Live drilling and controlled sparring",
        "Competition preparation (optional)",
        "Problem-solving and strategy development",
      ],
    },
    {
      title: "Ages 13-18",
      subtitle: "Advanced Athletes",
      description: "Advanced structured training",
      image: "/thirteen-above.jpg",
      focus: "Advanced Curriculum",
      focusIcon: "🎯",
      focusDesc: "Intensive structured program for competitive edge",
      focusColor: "purple",
      items: [
        "Advanced techniques and concepts",
        "Competition training and strategy",
        "Strength and conditioning integration",
        "Leadership development opportunities",
      ],
    },
  ];

  const nextPillarSlide = () => {
    setCurrentPillarSlide((prev) => (prev + 1) % pillars.length);
  };

  const prevPillarSlide = () => {
    setCurrentPillarSlide((prev) => (prev - 1 + pillars.length) % pillars.length);
  };

  const nextAgeSlide = () => {
    setCurrentAgeSlide((prev) => (prev + 1) % ageGroups.length);
  };

  const prevAgeSlide = () => {
    setCurrentAgeSlide((prev) => (prev - 1 + ageGroups.length) % ageGroups.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-base font-semibold leading-7 text-emerald-600">
            WESTBAY BJJ AT NEXT SCHOOL
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Curriculum & Training System
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Age-appropriate training that combines technical excellence with
            character development
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-yellow-100 border border-yellow-300 px-6 py-3 rounded-full">
            <span className="text-2xl">✨</span>
            <p className="text-sm font-semibold text-gray-900">
              It's never too late to start! All levels welcome.
            </p>
          </div>
        </motion.div>

        {/* Age Groups */}
        <div className="mx-auto max-w-6xl mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Age-Specific Programs
          </h3>

          {/* Desktop Grid View */}
          <div className="hidden md:grid gap-8 md:grid-cols-3">
            {ageGroups.map((group, index) => (
              <motion.div
                key={group.title}
                className="relative bg-white rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all overflow-hidden"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={group.image}
                    alt={`${group.title} BJJ training`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-2xl font-bold">{group.title}</h3>
                    <p className="text-sm text-gray-100">
                      <strong>{group.subtitle}</strong> — {group.description}
                    </p>
                  </div>
                </div>
                {/* Content Section */}
                <div className="p-6">
                  <div className={`bg-${group.focusColor}-50 p-3 rounded-lg mb-3`}>
                    <p className={`text-xs font-semibold text-${group.focusColor}-700 mb-1`}>
                      {group.focusIcon} Focus: {group.focus}
                    </p>
                    <p className="text-xs text-gray-600">{group.focusDesc}</p>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-emerald-500 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentAgeSlide * 100}%)` }}
              >
                {ageGroups.map((group, index) => (
                  <div key={group.title} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
                      {/* Image Section */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={group.image}
                          alt={`${group.title} BJJ training`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-4 left-6 text-white">
                          <h3 className="text-2xl font-bold">{group.title}</h3>
                          <p className="text-sm text-gray-100">
                            <strong>{group.subtitle}</strong> — {group.description}
                          </p>
                        </div>
                      </div>
                      {/* Content Section */}
                      <div className="p-6">
                        <div className={`bg-${group.focusColor}-50 p-3 rounded-lg mb-3`}>
                          <p className={`text-xs font-semibold text-${group.focusColor}-700 mb-1`}>
                            {group.focusIcon} Focus: {group.focus}
                          </p>
                          <p className="text-xs text-gray-600">{group.focusDesc}</p>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2">
                          {group.items.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-emerald-500 mr-2">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevAgeSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/90 hover:bg-white text-emerald-600 rounded-full p-3 shadow-lg transition-all z-10"
              aria-label="Previous age group"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextAgeSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/90 hover:bg-white text-emerald-600 rounded-full p-3 shadow-lg transition-all z-10"
              aria-label="Next age group"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {ageGroups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAgeSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentAgeSlide
                      ? "bg-emerald-600 w-8"
                      : "bg-emerald-300 hover:bg-emerald-400"
                  }`}
                  aria-label={`Go to age group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Curriculum Framework */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Six Pillars of Our Curriculum
          </h3>

          {/* Desktop Grid View */}
          <div className="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden hover:shadow-xl transition-all"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={`${pillar.title} technique demonstration`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <div className="flex items-center mb-2">
                      <span className="text-3xl mr-2">{pillar.icon}</span>
                      <h4 className="font-bold text-white text-2xl">{pillar.title}</h4>
                    </div>
                  </div>
                </div>
                {/* Content Section */}
                <div className="p-6">
                  <p className="text-sm text-gray-700 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentPillarSlide * 100}%)` }}
              >
                {pillars.map((pillar, index) => (
                  <div key={pillar.title} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={pillar.image}
                          alt={`${pillar.title} technique demonstration`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-4 left-6">
                          <div className="flex items-center mb-2">
                            <span className="text-3xl mr-2">{pillar.icon}</span>
                            <h4 className="font-bold text-white text-2xl">{pillar.title}</h4>
                          </div>
                        </div>
                      </div>
                      {/* Content Section */}
                      <div className="p-6">
                        <p className="text-base text-gray-700 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevPillarSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/90 hover:bg-white text-emerald-600 rounded-full p-3 shadow-lg transition-all z-10"
              aria-label="Previous pillar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextPillarSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/90 hover:bg-white text-emerald-600 rounded-full p-3 shadow-lg transition-all z-10"
              aria-label="Next pillar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {pillars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPillarSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentPillarSlide
                      ? "bg-emerald-600 w-8"
                      : "bg-emerald-300 hover:bg-emerald-400"
                  }`}
                  aria-label={`Go to pillar ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Class Schedule & Format */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-emerald-200 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Class Details
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                Class Schedule
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">📅</span>
                  <span>Two classes per week (1 hour each)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">🕐</span>
                  <span>Tuesdays & Thursdays after school</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">🏋️</span>
                  <span>Optional Saturday open mat at Next School</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                Class Structure
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">🙏</span>
                  <span>Warm-up & respect protocol (5 min)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">📖</span>
                  <span>Technique instruction (20 min)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">🤼</span>
                  <span>Drilling & live practice (30 min)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">💬</span>
                  <span>Cool-down & Q&A (5 min)</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600 mt-3 italic">
                * Little Champions (4-7): More game-based, less drilling
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                Guest Instructors
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">🥋</span>
                  <span>Judo specialists</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">🤼</span>
                  <span>Wrestling coaches</span>
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-2">🎓</span>
                  <span>Visiting black belts</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Grading System */}
        <motion.div
          className="bg-gradient-to-br from-emerald-100 to-teal-100 p-8 rounded-2xl border border-emerald-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Grading & Belt Progression
          </h3>

          <div className="grid gap-8 md:grid-cols-2 mb-8">
            <div className="bg-white/80 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🎯</span>
                Evaluation Criteria
              </h4>
              <p className="text-xs text-gray-600 mb-4 italic">
                We prioritize character development alongside technical growth
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 font-semibold mr-2 mt-0.5">
                    40%
                  </span>
                  <span>
                    <strong>Attendance & Consistency</strong> — Regular training
                    and commitment to learning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-semibold mr-2 mt-0.5">
                    30%
                  </span>
                  <span>
                    <strong>Respect & Attitude</strong> — Behavior towards
                    coaches, peers, and the mat
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-semibold mr-2 mt-0.5">
                    30%
                  </span>
                  <span>
                    <strong>Technical Skill</strong> — Understanding and
                    execution of techniques
                  </span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                <p className="text-xs text-emerald-800">
                  <strong>Note:</strong> Every student progresses at their own
                  pace. We celebrate effort and growth over perfection.
                </p>
              </div>
            </div>

            <div className="bg-white/80 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-2">🥋</span>
                Juvenile Belt System
              </h4>
              <p className="text-sm text-gray-700 mb-4">
                Kids under 16 follow a specialized ranking system:
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-white border-2 border-gray-400 rounded mr-3"></div>
                  <span className="text-gray-700">White Belt (Beginner)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-gradient-to-r from-gray-200 to-white border-2 border-gray-400 rounded mr-3"></div>
                  <span className="text-gray-700">Grey Belt (8-15 years)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-gradient-to-r from-yellow-400 to-white border-2 border-gray-400 rounded mr-3"></div>
                  <span className="text-gray-700">
                    Yellow Belt (8-15 years)
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-gradient-to-r from-orange-400 to-white border-2 border-gray-400 rounded mr-3"></div>
                  <span className="text-gray-700">
                    Orange Belt (8-15 years)
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-gradient-to-r from-green-500 to-white border-2 border-gray-400 rounded mr-3"></div>
                  <span className="text-gray-700">
                    Green Belt (13-15 years)
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-4 italic">
                Each belt has multiple stripes earned through progression
              </p>
            </div>
          </div>

          <div className="bg-white/80 p-6 rounded-xl text-center">
            <p className="text-sm text-gray-700">
              <strong className="text-emerald-700">Grading Ceremony:</strong>{" "}
              Conducted by a certified Westbay BJJ Black Belt near term end at Next School
              campus. Students receive belts and stripes in recognition of their
              dedication and progress in front of their peers and families.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
