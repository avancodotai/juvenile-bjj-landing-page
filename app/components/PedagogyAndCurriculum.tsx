"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function PedagogyAndCurriculum() {
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
            BJJ PROGRAM AT NEXT SCHOOL
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Curriculum & Training System
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Age-appropriate training that combines technical excellence with character development
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Age-Specific Programs</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ages 4-7</h3>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Little Champions</strong> — Learning through play and games
              </p>
              <div className="bg-emerald-50 p-3 rounded-lg mb-3">
                <p className="text-xs font-semibold text-emerald-700 mb-1">🎮 Focus: Play-Based Learning</p>
                <p className="text-xs text-gray-600">All techniques taught through fun games and activities</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Interactive games and movement exploration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Basic positions discovered through play</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Coordination and motor skill development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Social skills and following instructions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🧒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ages 8-12</h3>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Core Program</strong> — Structured curriculum with systematic progression
              </p>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-xs font-semibold text-blue-700 mb-1">📋 Focus: Structured Learning</p>
                <p className="text-xs text-gray-600">Systematic curriculum with clear progression path</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Comprehensive technique curriculum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Live drilling and controlled sparring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Competition preparation (optional)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Problem-solving and strategy development</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">👦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ages 13-18</h3>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Advanced Athletes</strong> — Advanced structured training
              </p>
              <div className="bg-purple-50 p-3 rounded-lg mb-3">
                <p className="text-xs font-semibold text-purple-700 mb-1">🎯 Focus: Advanced Curriculum</p>
                <p className="text-xs text-gray-600">Intensive structured program for competitive edge</p>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Advanced techniques and concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Competition training and strategy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Strength and conditioning integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Leadership development opportunities</span>
                </li>
              </ul>
            </motion.div>
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🛡️", title: "Guard", desc: "Defensive and attacking positions from bottom" },
              { icon: "🚀", title: "Passing", desc: "Techniques to overcome opponent's guard" },
              { icon: "⚓", title: "Control", desc: "Dominant positions and weight distribution" },
              { icon: "🔒", title: "Submissions", desc: "Joint locks and chokes (age-appropriate)" },
              { icon: "🤸", title: "Takedowns", desc: "Standing techniques and wrestling integration" },
              { icon: "🏃", title: "Escapes", desc: "Defensive movements and position recovery" },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-emerald-100"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="text-3xl mb-2">{pillar.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1">{pillar.title}</h4>
                <p className="text-sm text-gray-600">{pillar.desc}</p>
              </motion.div>
            ))}
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Class Details</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
                Schedule at Next School
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
                  <span className="text-emerald-600 font-semibold mr-2 mt-0.5">40%</span>
                  <span><strong>Attendance & Consistency</strong> — Regular training and commitment to learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-semibold mr-2 mt-0.5">30%</span>
                  <span><strong>Respect & Attitude</strong> — Behavior towards coaches, peers, and the mat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-semibold mr-2 mt-0.5">30%</span>
                  <span><strong>Technical Skill</strong> — Understanding and execution of techniques</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-emerald-50 rounded-lg">
                <p className="text-xs text-emerald-800">
                  <strong>Note:</strong> Every student progresses at their own pace. We celebrate effort and growth over perfection.
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
                  <span className="text-gray-700">Yellow Belt (8-15 years)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-gradient-to-r from-orange-400 to-white border-2 border-gray-400 rounded mr-3"></div>
                  <span className="text-gray-700">Orange Belt (8-15 years)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-4 bg-gradient-to-r from-green-500 to-white border-2 border-gray-400 rounded mr-3"></div>
                  <span className="text-gray-700">Green Belt (13-15 years)</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-4 italic">
                Each belt has multiple stripes earned through progression
              </p>
            </div>
          </div>

          <div className="bg-white/80 p-6 rounded-xl text-center">
            <p className="text-sm text-gray-700">
              <strong className="text-emerald-700">Grading Ceremony:</strong> Conducted by a certified Black Belt near term end at Next School campus. Students receive belts and stripes in recognition of their dedication and progress in front of their peers and families.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
