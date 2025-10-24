"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const cardSlideIn: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function SafetyAndInstructors() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-900 text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-base font-semibold leading-7 text-yellow-300">
            YOUR CHILD'S SAFETY IS OUR PRIORITY
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Expert Instruction at Next School
          </p>
          <p className="mt-4 text-lg text-gray-300">
            World-class BJJ instruction at a safe, supervised campus environment
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          <motion.div
            className="bg-gradient-to-br from-slate-700 to-gray-800 p-8 rounded-2xl backdrop-blur-sm"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardSlideIn}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold mb-4">Safety First</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-300 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Full supervision at all times</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-300 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Proper mats and equipment</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-300 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Controlled grappling with tap-out protocol</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-300 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Age-appropriate techniques only</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-slate-700 to-gray-800 p-8 rounded-2xl backdrop-blur-sm"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardSlideIn}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-2xl font-bold mb-4">Qualified Instructors</h3>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-300 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Led by certified Blue Belt instructor</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-300 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Consultation with Black Belt coach</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-300 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Guest lectures from Judo and Wrestling experts</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-yellow-300 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Multiple coaches for personalized attention</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
