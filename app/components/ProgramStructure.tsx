"use client";

import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

export default function ProgramStructure() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            HOW IT WORKS
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Program Structure
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Age-appropriate training designed for maximum learning and fun
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <motion.div
              className="relative h-80 rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0">
                <img
                  src="/four-seven.jpg"
                  alt="Ages 4-7 BJJ training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              </div>
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-3">Ages 4-7</h3>
                <p className="text-gray-100">
                  Fun games and basic movements to introduce BJJ concepts while
                  developing motor skills.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative h-80 rounded-2xl shadow-lg border border-gray-100 ring-2 ring-blue-600 overflow-hidden"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0">
                <img
                  src="/eight-twelve.jpg"
                  alt="Ages 8-12 BJJ training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              </div>
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-3">Ages 8-12</h3>
                <p className="text-gray-100">
                  Structured drills with technique focus, building a strong
                  foundation in BJJ fundamentals.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative h-80 rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0">
                <img
                  src="/thirteen-above.jpg"
                  alt="Ages 13-18 BJJ training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              </div>
              <div className="relative h-full p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-3">Ages 13-18</h3>
                <p className="text-gray-100">
                  Advanced techniques and competition preparation for serious
                  young athletes.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Class Details
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Schedule
                </dt>
                <dd className="text-lg text-gray-900">
                  Two classes per week (1 hour each)
                  <p className="text-base text-gray-600 mt-1">
                    Tuesdays & Thursdays after school
                  </p>
                  <p className="text-base text-gray-600 mt-1">
                    Optional Saturday open mat
                  </p>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Curriculum
                </dt>
                <dd className="text-lg text-gray-900">
                  Comprehensive training covering:
                  <p className="text-base text-gray-600 mt-1">
                    Guard • Passing • Control
                  </p>
                  <p className="text-base text-gray-600 mt-1">
                    Submissions • Takedowns • Escapes
                  </p>
                </dd>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
