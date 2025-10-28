"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoClick = () => {
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (video) {
      if (isVideoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content - Left Side */}
          <div className="text-center lg:text-left">
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-6"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/westbay.png"
                alt="Westbay Brazilian Jiu-Jitsu"
                width={320}
                height={100}
                className="h-14 sm:h-18 w-auto"
                priority
              />
              <span className="text-2xl sm:text-3xl text-white/60">×</span>
              <Image
                src="/next-logo.png"
                alt="Next School"
                width={120}
                height={80}
                className="h-14 sm:h-18 w-auto"
              />
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Give Your Child the Gift of{" "}
              <span className="text-yellow-300">Confidence</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-lg sm:text-xl leading-8 text-blue-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Brazilian Jiu-Jitsu isn't just a martial art — it's a
              life-changing journey that builds confidence, discipline, and
              resilience in kids.
            </motion.p>
            <motion.p
              className="mt-3 text-base text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Westbay BJJ launching at Next School • Ages 4-18 • Open to all
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-full sm:w-auto rounded-2xl bg-white/95 backdrop-blur-sm px-8 py-6 shadow-xl text-center">
                <p className="text-lg font-bold text-blue-900 mb-2">
                  Interested in Our BJJ Program?
                </p>
                <p className="text-base text-gray-700">
                  Contact Next School for more information about Westbay BJJ enrollment and class schedules.
                </p>
              </div>
              <a
                href="#learn-more"
                className="text-lg font-semibold leading-6 text-white hover:text-yellow-300 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>

          {/* Video Content - Right Side on Desktop, Below on Mobile */}
          <motion.div
            className="relative mx-auto max-w-sm lg:max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Phone Mockup Frame for Desktop */}
            <div className="relative mx-auto" style={{ maxWidth: "360px" }}>
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl ring-1 ring-gray-900/5">
                {/* Screen Notch (optional) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10"></div>

                {/* Video Container */}
                <div
                  className="relative bg-black rounded-[2rem] overflow-hidden"
                  style={{ aspectRatio: "9/16" }}
                >
                  <video
                    id="hero-video"
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onClick={handleVideoClick}
                  >
                    <source src="/aoj.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play/Pause Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={handleVideoClick}
                  >
                    {!isVideoPlaying && (
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-blue-600 ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </motion.div>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all z-20 backdrop-blur-sm"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                  >
                    {isMuted ? (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          clipRule="evenodd"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Video Label */}
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-lg">
                    <p className="text-white text-sm font-semibold">
                      Watch BJJ in Action
                    </p>
                    <p className="text-white/80 text-xs mt-0.5">
                      See what your child will learn
                    </p>
                    <a
                      href="https://www.instagram.com/artofjiujitsu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 text-xs mt-1 block hover:text-white/90 transition-colors"
                    >
                      Video: @artofjiujitsu
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Glow Effect */}
              <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full -z-10 scale-75"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
