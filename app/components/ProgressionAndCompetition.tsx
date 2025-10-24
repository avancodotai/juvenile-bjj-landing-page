"use client";

import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6,  },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function ProgressionAndCompetition() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            TRACK PROGRESS
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Growth & Achievement
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          <motion.div
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
          >
            <div className="text-5xl mb-4">🥋</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Belt Progression</h3>
            <p className="text-gray-700 mb-4">
              Kids are evaluated based on consistency, respect for teammates, and skill development. Grading conducted by a Black Belt near term end.
            </p>
            <p className="text-sm text-gray-600 italic">
              Juveniles (under 16) have a specialized belt ranking system designed for their development journey.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }}
          >
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitions</h3>
            <p className="text-gray-700 mb-4">
              One competition per term allows students to showcase their skills in a safe, supportive environment. Build confidence through friendly competition!
            </p>
            <p className="text-sm text-gray-600 italic">
              Optional participation — perfect for kids ready to test themselves.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
