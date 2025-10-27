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
            Get Started with BJJ at Next School
          </h2>
          <p className="text-base text-gray-600">
            Contact us to learn more about the program
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
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <motion.div
                className="text-5xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                🥋
              </motion.div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              To learn more about our BJJ program, class schedules, and enrollment details, please contact Next School directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-medium">Contact the school office</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium">Free demo class available</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
