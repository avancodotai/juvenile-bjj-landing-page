"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeInUp } from "../utils/animations";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is Brazilian Jiu-Jitsu safe for kids?",
    answer:
      "Yes. Kids' BJJ is taught in a controlled and supervised way. There is no punching or kicking. We focus on balance, movement, and learning how to control someone safely — not hurting them. Kids are matched by size and experience, and we stop immediately if someone is uncomfortable. Safety and respect are the first rules.",
  },
  {
    question: "What age can my child start?",
    answer:
      "Most children can start around 4–5 years old. At this age they learn listening, body control, falling safely, and confidence through fun games. Older kids (7–12) can start more technical BJJ — basic positions, escapes, and beginner self-defense. It's never \"too late\" to start.",
  },
  {
    question: "Can we try a class before committing?",
    answer:
      "Absolutely! We offer a free trial class so your child can experience BJJ with no pressure. This lets them see if they enjoy it and lets you meet the coaches and see our teaching style. No commitment required to try.",
  },
  {
    question: "Will this make my child more aggressive?",
    answer:
      "Actually the opposite. Good BJJ programs teach kids when to walk away, how to stay calm if someone grabs them, and that technique beats anger. Kids get a safe outlet for energy and learn control, respect, and responsibility. We do not reward \"being rough.\" We reward discipline, effort, and taking care of your partner.",
  },
  {
    question: "Will this help with bullying / self-defense?",
    answer:
      "Yes. BJJ is designed for real-life situations like \"someone grabs you, holds you, or pushes you down.\" Kids learn how to protect themselves, get out, and get to safety — without needing to punch anyone. We also teach them \"this is only for safety, not for showing off at school.\" Verbal boundaries + confidence usually stop a situation before it becomes physical.",
  },
  {
    question: "How is BJJ different from karate or taekwondo?",
    answer:
      "Karate / taekwondo: mainly striking (kicks, punches). Brazilian Jiu-Jitsu: mainly grappling (holds, escapes, control). In BJJ kids learn how to handle close contact (what usually happens in real life). It feels more like a mix of problem-solving and wrestling than \"fighting.\" Many parents like it because it's practical self-defense, even for smaller kids.",
  },
  {
    question: "Do girls and boys train together? Is it okay for girls?",
    answer:
      "Yes, girls absolutely train and do great in BJJ. BJJ is about leverage and technique, not being \"stronger.\" In kids' classes, boys and girls usually train together, but we pair partners by size, temperament, and comfort level. If a child is not comfortable with a partner, we change it immediately. The environment is respectful, not macho.",
  },
  {
    question: "What should my child wear/bring to the first class?",
    answer:
      "Just comfortable athletic clothes (t-shirt and shorts or joggers) for the first class. We'll provide everything else. Once they decide to continue, we'll help you get a gi (BJJ uniform). No special equipment needed — we have mats, and kids train barefoot.",
  },
  {
    question: "What happens in a typical class?",
    answer:
      "A normal class looks like this: (1) Warm-up (movement, balance, coordination drills), (2) Technique of the day (we show one safe position or escape), (3) Controlled practice with a partner, (4) Games to apply what they learned. The vibe is: structured, safe, fun. It's not kids thrown into a \"fight.\" It's kids learning skills step by step with a coach right there.",
  },
];

function FAQAccordionItem({
  item,
  index,
}: {
  item: FAQItem;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200 last:border-b-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-start text-left hover:bg-gray-50 transition-colors px-4 rounded-lg"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">
          {item.question}
        </span>
        <motion.svg
          className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-fuchsia-200/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-base font-semibold leading-7 text-violet-600">
            COMMON QUESTIONS
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We understand you want the best for your child. Here are answers to
            the questions parents ask most often.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqData.map((item, index) => (
              <FAQAccordionItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
