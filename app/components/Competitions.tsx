"use client";

import { motion } from "framer-motion";
import { fadeInUp, cardVariants } from "../utils/animations";

export default function Competitions() {
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
            From local tournaments to international championships, our BJJ
            program at Next School prepares students to compete at the highest
            levels across the globe.
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                IBJJF World Championship
              </h4>
              <p className="text-sm text-gray-600">
                The most prestigious BJJ tournament in the world, held annually
                in California.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="text-4xl mb-3">🥋</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                IBJJF Pan Championship
              </h4>
              <p className="text-sm text-gray-600">
                Pan-American Championship featuring top competitors from the
                Americas.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="text-4xl mb-3">🌏</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                IBJJF Asian Championship
              </h4>
              <p className="text-sm text-gray-600">
                Premier Asian tournament bringing together the best BJJ athletes
                from across Asia.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-shadow"
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="text-4xl mb-3">⚔️</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                ADCC World Championship
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                The Olympics of submission grappling, held every two years.
              </p>
              <a
                href="https://adcc-official.com/pages/adcc-youth"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                Learn about ADCC Youth
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
            </motion.div>
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
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border border-orange-200"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="text-3xl mb-3">👶</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                IBJJF Kids Tournaments
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Age-specific competitions for kids (4-15 years) held throughout
                the year across multiple locations.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Organized by age and weight</li>
                <li>• Safe, supervised environment</li>
                <li>• Build competitive experience</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border border-orange-200"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                School & Academy Tournaments
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Local and regional tournaments perfect for first-time
                competitors to gain experience.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Beginner-friendly format</li>
                <li>• Supportive atmosphere</li>
                <li>• Build confidence</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-2xl border border-orange-200"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                National Championships
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                Indian National BJJ Championships and other country-level
                competitions for youth athletes.
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Represent your region</li>
                <li>• Pathway to international events</li>
                <li>• Scholarships & recognition</li>
              </ul>
            </motion.div>
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
            readiness and interest. We'll host one friendly in-house competition
            per term at Next School!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
