"use client";

import { motion } from "framer-motion";

export default function EnrollmentForm() {
  return (
    <section
      id="enrollment-form"
      className="py-24 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join BJJ at Next School
          </h2>
          <p className="text-lg text-gray-600">
            Reserve your child's spot in our program or request more information
            about classes at Next School
          </p>
        </motion.div>

        {/* Call to Action Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              className="text-7xl mb-6"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              🥋
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Fill out our quick enrollment form to reserve your child's spot or
              schedule a demo class. We'll get back to you within 24 hours!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <svg
                  className="w-6 h-6 text-violet-600"
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
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <svg
                  className="w-6 h-6 text-violet-600"
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
              <div className="flex items-center justify-center gap-3 text-gray-700">
                <svg
                  className="w-6 h-6 text-violet-600"
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

            <motion.button
              data-tally-open="wzpyaa"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="inline-block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-12 py-5 text-xl font-semibold text-white shadow-xl hover:from-violet-700 hover:to-fuchsia-700 transition-all cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Open Enrollment Form
            </motion.button>

            <p className="mt-6 text-sm text-gray-500">
              Have questions? The form includes space for any questions you may
              have!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
