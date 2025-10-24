"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="enroll" className="py-24 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to Transform Your Child's Life?
          </motion.h2>
          <motion.p
            className="mx-auto mt-6 max-w-xl text-xl leading-8 text-blue-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join our BJJ program at Next School! Sign up for a demo class and see firsthand how it can benefit your child. It's never too late to start!
          </motion.p>
          <motion.p
            className="text-sm text-blue-200 mt-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Limited spots available • Ages 4-18 • All experience levels welcome
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              data-tally-open="wzpyaa"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
              className="inline-block rounded-full bg-yellow-400 px-10 py-5 text-xl font-semibold text-blue-900 shadow-xl hover:bg-yellow-300 transition-all cursor-pointer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now
            </motion.button>
          </motion.div>
          <motion.p
            className="mt-6 text-sm text-blue-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Questions? Interested in a demo class? Fill out the form below.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
