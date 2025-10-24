"use client";

import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function WhatIsBJJ() {
  return (
    <section id="learn-more" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base font-semibold leading-7 text-purple-600">
            THE GENTLE ART
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            What is Brazilian Jiu-Jitsu?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Think of it as physical chess — a strategic, problem-solving sport where your child learns to think ahead, stay calm under pressure, and have a blast on the mat.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="relative flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-3xl">
                🤼
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Safe Grappling Sport
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  No punching, no kicking. BJJ is a grappling martial art that uses leverage and technique over strength.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-3xl">
                🧠
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Physical Chess
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Kids solve problems and strategize on the mat — developing critical thinking while having fun.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-3xl">
                🌍
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Global Sport
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  With competitions worldwide across all ages and weight classes, BJJ is rapidly growing in India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
