"use client";

import { motion } from "framer-motion";
import { fadeInUp, cardVariants } from "../utils/animations";

interface Location {
  name: string;
  address: string;
  city: string;
  zipCode: string;
  mapUrl: string;
  description: string;
  schedule: string[];
  features: string[];
  image: string;
}

const locations: Location[] = [
  {
    name: "Next School",
    address: "Near Park Road, Off Devi Dayal Rd, Gavane Pada",
    city: "Mulund West, Mumbai, Maharashtra",
    zipCode: "400080",
    mapUrl: "https://maps.app.goo.gl/xMqxcJnzcT8DTm3D7",
    description: "Our flagship location at Next School offers world-class BJJ training in a safe, supervised campus environment.",
    schedule: [
      "Tuesdays & Thursdays",
      "After-school sessions",
      "Saturday open mat",
    ],
    features: [
      "Professional grade mats",
      "Climate-controlled facility",
      "Secure campus access",
      "Parent viewing area",
    ],
    image: "/next-school-location.jpg",
  },
  // Future locations will be added here
];

export default function Locations() {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-base font-semibold leading-7 text-orange-600">
            WHERE WE TRAIN
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Locations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Train with Westbay BJJ at convenient locations across Mumbai
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 last:mb-0"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Location Image & Map */}
                <div className="relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-12 h-12 text-orange-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {location.name}
                      </h3>
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                          />
                        </svg>
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="p-8">
                  <p className="text-gray-700 mb-6">{location.description}</p>

                  {/* Address */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 text-orange-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Address
                    </h4>
                    <p className="text-gray-600">
                      {location.address}
                      <br />
                      {location.city}, {location.zipCode}
                    </p>
                  </div>

                  {/* Schedule */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 text-orange-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Training Schedule
                    </h4>
                    <ul className="space-y-2">
                      {location.schedule.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="text-orange-500 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
                      <svg
                        className="w-5 h-5 text-orange-600 mr-2"
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
                      Facility Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {location.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="text-orange-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 px-6 py-3 rounded-full">
            <span className="text-2xl">🚀</span>
            <p className="text-sm font-semibold text-gray-900">
              More locations coming soon! Stay tuned for updates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
