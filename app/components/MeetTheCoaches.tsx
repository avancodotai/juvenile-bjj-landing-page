"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, cardVariants } from "../utils/animations";
import { useState } from "react";

// Reusable SVG Components
const CheckmarkIcon = ({ className = "w-5 h-5 text-yellow-300" }) => (
  <svg
    className={className}
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
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export default function MeetTheCoaches() {
  const [showCarlDetails, setShowCarlDetails] = useState(false);
  const [showYashDetails, setShowYashDetails] = useState(false);

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
              Westbay BJJ Academy • Under Prof. Olavo Abreu lineage
            </p>
          </motion.div>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Black Belt Head Coach */}
            <motion.div
              className="relative rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-[600px] cursor-pointer md:cursor-default"
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setShowCarlDetails(!showCarlDetails)}
            >
              {/* Background Image */}
              <Image
                src="/carl.jpeg"
                alt="Head Coach - Black Belt"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Overlay - lighter on mobile when details hidden */}
              <div
                className={`absolute inset-0 bg-gradient-to-t transition-all duration-300 ${
                  showCarlDetails
                    ? "from-black/95 via-black/60 to-black/20"
                    : "md:from-black/95 md:via-black/60 md:to-black/20 from-black/60 via-black/30 to-transparent"
                }`}
              ></div>

              {/* Belt Badge */}
              <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🥋 Black Belt
              </div>

              {/* Mobile Tap Indicator */}
              <div
                className={`md:hidden absolute top-4 left-4 bg-white/90 text-gray-900 px-3 py-2 rounded-full text-xs font-semibold shadow-lg transition-opacity duration-300 ${
                  showCarlDetails ? "opacity-0" : "opacity-100"
                }`}
              >
                Tap for details
              </div>

              {/* Text Content Overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-300 ${
                  showCarlDetails
                    ? "opacity-100 translate-y-0"
                    : "md:opacity-100 md:translate-y-0 opacity-0 translate-y-4 pointer-events-none md:pointer-events-auto"
                }`}
              >
                <h3 className="text-3xl font-bold mb-2">Prof Carl Varel</h3>
                <p className="text-yellow-300 font-semibold mb-4 text-lg">
                  Head Coach & Black Belt Instructor
                </p>
                <p className="text-gray-100 mb-4 leading-relaxed">
                  Carl Varel is a Black Belt under Prof. Olavo and founder and
                  head coach of Westbay BJJ. Carl has won the World Masters
                  JiuJitsu Championship at brown belt and is also an ADCC Pro
                  India gold medalist, Asian medalist, and has won BJJ Nationals
                  multiple times.
                </p>
                <div className="space-y-2 text-sm text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckmarkIcon />
                    <span>IBJJF Certified Black Belt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckmarkIcon />
                    <span>International Competition Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckmarkIcon />
                    <span>Specializes in Youth Development</span>
                  </div>
                </div>
                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/carlspies1010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
                >
                  <InstagramIcon />
                  <span className="text-sm font-semibold">@carlspies1010</span>
                </a>
              </div>
            </motion.div>

            {/* Blue Belt Instructor */}
            <motion.div
              className="relative rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-[600px] cursor-pointer md:cursor-default"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setShowYashDetails(!showYashDetails)}
            >
              {/* Background Image */}
              <Image
                src="/yash.jpeg"
                alt="Blue Belt Instructor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Overlay - lighter on mobile when details hidden */}
              <div
                className={`absolute inset-0 bg-gradient-to-t transition-all duration-300 ${
                  showYashDetails
                    ? "from-black/95 via-black/60 to-black/20"
                    : "md:from-black/95 md:via-black/60 md:to-black/20 from-black/60 via-black/30 to-transparent"
                }`}
              ></div>

              {/* Belt Badge */}
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                🥋 Blue Belt
              </div>

              {/* Mobile Tap Indicator */}
              <div
                className={`md:hidden absolute top-4 left-4 bg-white/90 text-gray-900 px-3 py-2 rounded-full text-xs font-semibold shadow-lg transition-opacity duration-300 ${
                  showYashDetails ? "opacity-0" : "opacity-100"
                }`}
              >
                Tap for details
              </div>

              {/* Text Content Overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-300 ${
                  showYashDetails
                    ? "opacity-100 translate-y-0"
                    : "md:opacity-100 md:translate-y-0 opacity-0 translate-y-4 pointer-events-none md:pointer-events-auto"
                }`}
              >
                <h3 className="text-3xl font-bold mb-2">Yashraj Singh</h3>
                <p className="text-yellow-300 font-semibold mb-4 text-lg">
                  Blue Belt Instructor
                </p>
                <p className="text-gray-100 mb-4 leading-relaxed">
                  Yashraj Singh is an international competitive athlete and AJP
                  India National Champion, with podiums including ADCC Thailand
                  League silver and ADCC India bronze, bringing proven standards
                  of excellence to every class. As a blue belt instructor, he
                  prioritizes fundamentals, safety, and character development in
                  a structured, student-first environment that builds confident,
                  disciplined kids.
                </p>
                <div className="space-y-2 text-sm text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckmarkIcon />
                    <span>Certified Blue Belt Instructor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckmarkIcon />
                    <span>International Competition Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckmarkIcon />
                    <span>Focus on Fundamentals & Safety</span>
                  </div>
                </div>
                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/thegodspeed_juggernaut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
                >
                  <InstagramIcon />
                  <span className="text-sm font-semibold">@thegodspeed_juggernaut</span>
                </a>
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
