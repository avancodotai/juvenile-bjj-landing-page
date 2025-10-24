"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, cardVariants } from "../utils/animations";

export default function MeetTheCoaches() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            EXPERT GUIDANCE
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Meet Your Coaches
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Learn from experienced instructors dedicated to helping your child
            excel in BJJ
          </p>
          <motion.div
            className="mt-6 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-6 py-3 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-2xl">🥋</span>
            <p className="text-sm font-semibold text-gray-900">
              In affiliation with{" "}
              <a
                href="https://www.westbaybjj.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                Westbay BJJ
              </a>{" "}
              • Under Prof. Olavo Abreu lineage
            </p>
          </motion.div>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Black Belt Head Coach */}
            <motion.div
              className="relative rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-[600px]"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Background Image */}
              <Image
                src="/carl.jpeg"
                alt="Head Coach - Black Belt"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20"></div>

              {/* Belt Badge */}
              <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🥋 Black Belt
              </div>

              {/* Text Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Prof Carl Varel</h3>
                <p className="text-yellow-300 font-semibold mb-4 text-lg">
                  Head Coach & Black Belt Instructor
                </p>
                <p className="text-gray-100 mb-4 leading-relaxed">
                  Carl Varel is a Black Belt under Prof. Olavo and founder and
                  head coach of Westbay BJJ. Carl has won the World Masters
                  JiuJitsu Championship at brown belt and is also an ADCC Pro
                  India gold medalist, Asian medalist, and has won BJJ Nationals
                  multiple times. His titles also include international fights
                  like Carlson Gracie International, AJP Grand Slam, and
                  superfights in Thailand.
                </p>
                <div className="space-y-2 text-sm text-gray-200">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>IBJJF Certified Black Belt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>International Competition Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Specializes in Youth Development</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Blue Belt Instructor */}
            <motion.div
              className="relative rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-[600px]"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Background Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">👤</div>
                  <p className="text-lg font-semibold">Photo Coming Soon</p>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent"></div>

              {/* Belt Badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🥋 Blue Belt
              </div>

              {/* Text Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Yashraj Singh</h3>
                <p className="text-yellow-300 font-semibold mb-4 text-lg">
                  Blue Belt Instructor
                </p>
                <p className="text-gray-100 mb-4 leading-relaxed">
                  Our dedicated blue belt instructor brings energy, technical
                  knowledge, and a student-first approach to every class. With a
                  focus on fundamentals and character development, they create a
                  supportive learning environment for all students.
                </p>
                <div className="space-y-2 text-sm text-gray-200">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Certified Blue Belt Instructor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Experienced in Youth Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Focus on Fundamentals & Safety</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Supporting Team Note */}
          <motion.div
            className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-700">
              <strong className="text-blue-700">Additional Support:</strong> Our
              program also features guest Judo instructors, visiting wrestling
              coaches, and consulting black belts to provide comprehensive
              martial arts education.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
