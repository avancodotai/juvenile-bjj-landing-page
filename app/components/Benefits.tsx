"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

export default function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            TRANSFORM YOUR CHILD
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            What Will Your Child Gain?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Beyond learning a martial art, our BJJ program at Next School creates well-rounded individuals ready to face life's challenges.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          {/* Confidence */}
          <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
                🏆 Benefit #1
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Build Unshakeable Confidence
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Watch your child's self-esteem soar as they master new techniques, earn stripes and belts, and overcome challenges on the mat. Every small victory translates into big confidence gains in school and life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sense of accomplishment through progressive belt system</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Learn to handle pressure in a safe environment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Build resilience by learning from setbacks</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <motion.div
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/confidence.jpeg"
                  alt="BJJ students demonstrating confidence"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Discipline & Respect */}
          <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              className="order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 mb-4">
                🎯 Benefit #2
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Develop Discipline & Respect
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                BJJ training instills values that extend far beyond the mat. Your child will learn the importance of following instructions, respecting others, and persevering through challenges.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Follow structured training and respect authority</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Learn patience and commitment to long-term goals</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Carry these lessons into academic performance</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <motion.div
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/discipline.jpeg"
                  alt="Young BJJ students practicing discipline and respect"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Fitness & Coordination */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
            >
              <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 mb-4">
                ⚡ Benefit #3
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Boost Fitness & Coordination
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                BJJ makes exercise fun! Kids get a full-body workout without even realizing it. For our youngest students, learning happens through games and play. Older kids develop through structured drills that build strength, flexibility, and coordination.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Full-body workout disguised as fun</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Develop balance, coordination, and body awareness</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Build healthy habits and active lifestyle early</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <motion.div
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/fitness.jpg"
                  alt="Children having fun while building fitness through BJJ"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
