"use client";

import { motion } from "framer-motion";

export default function EnrollmentForm() {
  return (
    <section
      id="enrollment-form"
      className="py-16 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Join BJJ at Next School
          </h2>
          <p className="text-base text-gray-600">
            Reserve your child's spot or request more information
          </p>
        </motion.div>

        {/* Call to Action Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
            {/* Left side - Info and checklist */}
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-4">
                <motion.div
                  className="text-4xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                >
                  🥋
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Ready to Get Started?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Fill out our quick form to reserve your child's spot. We'll get back to you within 24 hours!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg
                    className="w-5 h-5 text-violet-600 flex-shrink-0"
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
                  <span>Quick 2-minute form</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg
                    className="w-5 h-5 text-violet-600 flex-shrink-0"
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
                  <span>No commitment required</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <svg
                    className="w-5 h-5 text-violet-600 flex-shrink-0"
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
                  <span>Free demo class available</span>
                </div>
              </div>
            </div>

            {/* Right side - CTA button */}
            <div className="flex flex-col items-center lg:items-end gap-3">
              <motion.button
                data-tally-open="wzpyaa"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
                className="inline-block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-xl hover:from-violet-700 hover:to-fuchsia-700 transition-all cursor-pointer whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Open Enrollment Form
              </motion.button>
              <p className="text-xs text-gray-500 text-center lg:text-right max-w-[200px]">
                Have questions? The form includes space for any questions!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
