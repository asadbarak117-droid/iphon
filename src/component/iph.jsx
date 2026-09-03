import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";

/* =========================================================
   DATA
========================================================= */

const history = [
  {
    year: "2007",
    title: "The Beginning",
    text: "The original iPhone introduced a new approach to mobile computing and touch interaction.",
  },
  {
    year: "2010",
    title: "Retina Display",
    text: "The Retina display brought dramatically higher pixel density and sharper visual clarity.",
  },
  {
    year: "2013",
    title: "Touch ID",
    text: "Touch ID introduced convenient biometric authentication directly into the iPhone.",
  },
  {
    year: "2017",
    title: "Face ID",
    text: "The iPhone X introduced Face ID and the TrueDepth camera system.",
  },
  {
    year: "2020",
    title: "5G Era",
    text: "The iPhone 12 generation introduced 5G connectivity to the iPhone lineup.",
  },
  {
    year: "Today",
    title: "Modern iPhone",
    text: "Today's iPhone combines advanced processors, cameras, displays, sensors and connectivity.",
  },
];

const anatomy = [
  {
    id: "display",
    name: "Display",
    info: "OLED + Touch",
    detail:
      "The display provides the visual interface while the touch system detects user interaction.",
    side: "left",
    top: "15%",
  },
  {
    id: "camera",
    name: "Camera",
    info: "Image System",
    detail:
      "The camera system combines lenses, image sensors and computational photography.",
    side: "right",
    top: "17%",
  },
  {
    id: "chip",
    name: "Apple Silicon",
    info: "Main Processor",
    detail:
      "The A-series processor handles computation, graphics, AI and system operations.",
    side: "left",
    top: "42%",
  },
  {
    id: "battery",
    name: "Battery",
    info: "Power System",
    detail:
      "The battery stores electrical energy and supplies power to the device.",
    side: "right",
    top: "44%",
  },
  {
    id: "taptic",
    name: "Taptic Engine",
    info: "Haptic Feedback",
    detail:
      "The Taptic Engine creates precise vibrations that provide tactile feedback.",
    side: "left",
    top: "70%",
  },
  {
    id: "sensors",
    name: "Sensors",
    info: "Motion + Light",
    detail:
      "Sensors detect movement, orientation, proximity, ambient light and other conditions.",
    side: "right",
    top: "72%",
  },
];

const hardware = [
  {
    id: 1,
    icon: "▣",
    category: "External",
    title: "Frame",
    description:
      "The structural body that protects and supports the internal hardware.",
  },
  {
    id: 2,
    icon: "▤",
    category: "Display",
    title: "OLED Display",
    description: "Produces visuals and provides the primary touch interface.",
  },
  {
    id: 3,
    icon: "◉",
    category: "Camera",
    title: "Camera System",
    description: "Combines lenses, sensors and image processing technology.",
  },
  {
    id: 4,
    icon: "◆",
    category: "Processing",
    title: "Apple Silicon",
    description:
      "The central computing system responsible for processing and graphics.",
  },
  {
    id: 5,
    icon: "▦",
    category: "Memory",
    title: "RAM",
    description:
      "High-speed temporary memory used by active applications and processes.",
  },
  {
    id: 6,
    icon: "▥",
    category: "Storage",
    title: "Flash Storage",
    description: "Stores applications, photos, videos and system data.",
  },
  {
    id: 7,
    icon: "▰",
    category: "Power",
    title: "Battery",
    description:
      "Provides electrical power to the iPhone's electronic systems.",
  },
  {
    id: 8,
    icon: "⌁",
    category: "Connectivity",
    title: "Wireless System",
    description:
      "Handles cellular, Wi-Fi, Bluetooth, GPS and wireless communication.",
  },
  {
    id: 9,
    icon: ")))",
    category: "Audio",
    title: "Speaker",
    description: "Produces calls, music, notifications and other audio output.",
  },
  {
    id: 10,
    icon: "⌁",
    category: "Sensors",
    title: "Sensor Array",
    description:
      "Detects motion, orientation, proximity, light and environmental data.",
  },
  {
    id: 11,
    icon: "≈",
    category: "Haptic",
    title: "Taptic Engine",
    description: "Creates precise vibration and tactile feedback.",
  },
  {
    id: 12,
    icon: "◇",
    category: "Security",
    title: "Secure Enclave",
    description:
      "A dedicated security subsystem that protects sensitive information.",
  },
];

const tools = [
  {
    number: "01",
    title: "Component Explorer",
    text: "Explore the major hardware components found inside an iPhone.",
  },
  {
    number: "02",
    title: "Hardware Guide",
    text: "Understand the purpose of each major hardware system.",
  },
  {
    number: "03",
    title: "Sensor Guide",
    text: "Learn how iPhone sensors collect information from the environment.",
  },
];

const particles = Array.from({ length: 35 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  size: `${2 + (index % 3)}px`,
  duration: 4 + (index % 5),
}));

/* =========================================================
   COMPONENT
========================================================= */

function Iphone() {
  const [selectedPart, setSelectedPart] = useState(anatomy[0]);

  const { scrollYProgress } = useScroll();

  const phoneY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [100, 30, 0, -30, -100],
  );

  const phoneRotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-8, -3, 0, 4, -2],
  );

  const phoneScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.82, 1, 0.96, 0.9],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#09090f] text-white">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 80, -50],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[15%]
            top-[15%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-purple-600/15
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [100, -80, 100],
            y: [80, -60, 80],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[10%]
            top-[35%]
            w-[450px]
            h-[450px]
            rounded-full
            bg-indigo-500/10
            blur-[150px]
          "
        />

        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-purple-200/20"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.10),transparent_45%)]" />

        <div className="relative z-10 text-center max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-purple-300/70
              uppercase
              tracking-[0.4em]
              text-xs
              md:text-sm
            "
          >
            iPhone Architecture
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.85,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              mt-7
              text-6xl
              sm:text-7xl
              md:text-9xl
              font-black
              tracking-tighter
              leading-[0.85]
            "
          >
            Inside
            <br />
            <span
              className="
                bg-gradient-to-r
                from-purple-200
                via-white
                to-indigo-300
                bg-clip-text
                text-transparent
              "
            >
              iPhone.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="
              max-w-2xl
              mx-auto
              mt-8
              text-gray-400
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            Discover the hardware systems, components and technologies that work
            together inside an iPhone.
          </motion.p>

          <motion.a
            href="#history"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="
              inline-flex
              mt-10
              px-7
              py-4
              rounded-full
              bg-white
              text-black
              font-semibold
              shadow-[0_0_40px_rgba(168,85,247,0.15)]
            "
          >
            Explore iPhone ↓
          </motion.a>
        </div>
      </section>

      {/* =====================================================
          HISTORY
      ====================================================== */}

      <section
        id="history"
        className="
          relative
          py-32
          md:py-40
          px-6
          overflow-hidden
          bg-[#0d0b14]
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[600px]
            h-[600px]
            rounded-full
            bg-purple-600/20
            blur-[170px]
          "
        />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="text-center mb-24"
          >
            <p
              className="
                text-purple-300/70
                uppercase
                tracking-[0.35em]
                text-xs
                md:text-sm
              "
            >
              The Evolution
            </p>

            <h2
              className="
                mt-5
                text-5xl
                md:text-7xl
                font-bold
                tracking-tight
              "
            >
              iPhone History
            </h2>

            <p
              className="
                max-w-2xl
                mx-auto
                mt-6
                text-gray-400
                leading-relaxed
              "
            >
              From the original iPhone to today's advanced mobile architecture.
            </p>
          </motion.div>

          <div className="relative">
            <div
              className="
                absolute
                left-4
                md:left-1/2
                top-0
                bottom-0
                w-px
                bg-gradient-to-b
                from-transparent
                via-purple-400/40
                to-transparent
              "
            />

            {history.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -70 : 70,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className={`
                  relative
                  flex
                  mb-16
                  ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                `}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  className="
                    w-full
                    md:w-[44%]
                    ml-10
                    md:ml-0
                    p-7
                    rounded-3xl
                    border
                    border-purple-200/10
                    bg-white/[0.045]
                    backdrop-blur-xl
                    hover:border-purple-300/30
                    transition-all
                  "
                >
                  <span
                    className="
                      text-4xl
                      md:text-5xl
                      font-black
                      bg-gradient-to-r
                      from-purple-200
                      to-indigo-300
                      bg-clip-text
                      text-transparent
                    "
                  >
                    {item.year}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold mt-4">
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-gray-400
                      mt-3
                      leading-relaxed
                      text-sm
                      md:text-base
                    "
                  >
                    {item.text}
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    boxShadow: [
                      "0 0 0px rgba(168,85,247,0)",
                      "0 0 25px rgba(168,85,247,.7)",
                      "0 0 0px rgba(168,85,247,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    left-[10px]
                    md:left-1/2
                    md:-translate-x-1/2
                    top-8
                    w-3
                    h-3
                    rounded-full
                    bg-purple-200
                  "
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ANATOMY
      ====================================================== */}

      <section
        id="anatomy"
        className="
          relative
          min-h-screen
          py-32
          md:py-40
          px-6
          overflow-hidden
        "
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p
              className="
                text-purple-300/70
                uppercase
                tracking-[0.35em]
                text-xs
              "
            >
              Hardware Anatomy
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-bold
                mt-5
              "
            >
              What's inside?
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mt-6">
              Select a component and explore its role inside the iPhone.
            </p>
          </motion.div>

          {/* Desktop */}

          <div
            className="
              relative
              hidden
              md:block
              min-h-[850px]
            "
          >
            {/* Connector lines */}

            {anatomy.map((part, index) => (
              <motion.div
                key={`line-${part.id}`}
                className={`
                  absolute
                  h-px
                  ${
                    part.side === "left"
                      ? "left-[22%] right-[50%]"
                      : "left-[50%] right-[22%]"
                  }
                  ${
                    selectedPart.id === part.id
                      ? "bg-purple-300/70"
                      : "bg-white/10"
                  }
                `}
                style={{
                  top: part.top,
                  transformOrigin: part.side === "left" ? "right" : "left",
                }}
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scaleX: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
              />
            ))}

            {/* Component labels */}

            {anatomy.map((part, index) => (
              <motion.button
                key={part.id}
                onClick={() => setSelectedPart(part)}
                style={{
                  top: part.top,
                }}
                initial={{
                  opacity: 0,
                  x: part.side === "left" ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.04,
                }}
                className={`
                  absolute
                  z-20
                  ${part.side === "left" ? "left-[3%]" : "right-[3%]"}
                  text-left
                  w-[220px]
                `}
              >
                <div
                  className={`
                    p-5
                    rounded-2xl
                    border
                    backdrop-blur-xl
                    transition-all
                    ${
                      selectedPart.id === part.id
                        ? "border-purple-300/50 bg-purple-300/[0.08] shadow-[0_0_35px_rgba(168,85,247,0.10)]"
                        : "border-white/10 bg-white/[0.035] hover:border-purple-300/20"
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{
                        scale: selectedPart.id === part.id ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: selectedPart.id === part.id ? Infinity : 0,
                      }}
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-purple-300
                      "
                    />

                    <span className="font-semibold">{part.name}</span>
                  </div>

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mt-2
                      ml-5
                    "
                  >
                    {part.info}
                  </p>
                </div>
              </motion.button>
            ))}

            {/* PHONE */}

            <motion.div
              style={{
                y: phoneY,
                rotate: phoneRotate,
                scale: phoneScale,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                z-10
              "
            >
              {/* Outer glow */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -inset-12
                  rounded-[70px]
                  bg-purple-500/20
                  blur-3xl
                "
              />

              {/* Phone body */}

              <motion.div
                whileHover={{
                  rotateY: 8,
                  rotateX: -5,
                }}
                className="
                  relative
                  w-[270px]
                  h-[550px]
                  rounded-[52px]
                  border-[7px]
                  border-purple-200/25
                  bg-gradient-to-br
                  from-purple-300/25
                  via-[#171320]
                  to-[#08080d]
                  p-2
                  shadow-[0_0_80px_rgba(168,85,247,0.18)]
                "
              >
                {/* Left buttons */}

                <div
                  className="
                    absolute
                    left-[-11px]
                    top-32
                    w-1
                    h-12
                    rounded-l
                    bg-purple-200/50
                  "
                />

                <div
                  className="
                    absolute
                    left-[-11px]
                    top-48
                    w-1
                    h-8
                    rounded-l
                    bg-purple-200/50
                  "
                />

                {/* Right button */}

                <div
                  className="
                    absolute
                    right-[-11px]
                    top-40
                    w-1
                    h-20
                    rounded-r
                    bg-purple-200/50
                  "
                />

                {/* Screen */}

                <div
                  className="
                    relative
                    w-full
                    h-full
                    rounded-[43px]
                    overflow-hidden
                    bg-gradient-to-br
                    from-[#251a38]
                    via-[#0e0b15]
                    to-[#12121b]
                  "
                >
                  {/* Screen glow */}

                  <motion.div
                    animate={{
                      x: [-40, 40, -40],
                      y: [-30, 30, -30],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      w-48
                      h-48
                      rounded-full
                      bg-purple-500/20
                      blur-[70px]
                    "
                  />

                  {/* Secondary glow */}

                  <motion.div
                    animate={{
                      x: [40, -40, 40],
                      y: [30, -30, 30],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      right-0
                      bottom-20
                      w-40
                      h-40
                      rounded-full
                      bg-indigo-400/15
                      blur-[60px]
                    "
                  />

                  {/* Dynamic Island */}

                  <motion.div
                    animate={{
                      width: [75, 90, 75],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      top-3
                      left-1/2
                      -translate-x-1/2
                      h-6
                      rounded-full
                      bg-black
                      border
                      border-white/5
                    "
                  />

                  {/* Screen reflection */}

                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      top-0
                      bottom-0
                      w-20
                      rotate-[20deg]
                      bg-white/[0.035]
                      blur-xl
                    "
                  />

                  {/* Bottom bar */}

                  <div
                    className="
                      absolute
                      bottom-7
                      left-1/2
                      -translate-x-1/2
                      w-24
                      h-1
                      rounded-full
                      bg-white/30
                    "
                  />
                </div>
              </motion.div>

              {/* Rotating ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-20
                  rounded-full
                  border
                  border-purple-300/10
                "
              />

              {/* Second ring */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-28
                  rounded-full
                  border
                  border-indigo-300/5
                "
              />
            </motion.div>

            {/* Selected information */}

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPart.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                className="
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  text-center
                  max-w-md
                "
              >
                <p
                  className="
                    text-purple-300/60
                    text-xs
                    uppercase
                    tracking-[0.25em]
                  "
                >
                  Selected Component
                </p>

                <h3 className="text-3xl font-bold mt-2">{selectedPart.name}</h3>

                <p
                  className="
                    text-gray-400
                    mt-3
                    text-sm
                    leading-relaxed
                  "
                >
                  {selectedPart.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div className="md:hidden">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              className="
                relative
                flex
                justify-center
                py-16
              "
            >
              <div
                className="
                  relative
                  w-[210px]
                  h-[420px]
                  rounded-[45px]
                  border-[6px]
                  border-purple-200/25
                  bg-gradient-to-br
                  from-purple-300/20
                  via-[#171320]
                  to-[#08080d]
                  p-2
                  shadow-[0_0_60px_rgba(168,85,247,0.18)]
                "
              >
                <div
                  className="
                    relative
                    w-full
                    h-full
                    rounded-[37px]
                    overflow-hidden
                    bg-gradient-to-br
                    from-[#251a38]
                    via-[#0e0b15]
                    to-[#12121b]
                  "
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-40
                      h-40
                      rounded-full
                      bg-purple-500/20
                      blur-3xl
                    "
                  />

                  <div
                    className="
                      absolute
                      top-3
                      left-1/2
                      -translate-x-1/2
                      w-20
                      h-6
                      rounded-full
                      bg-black
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-6
                      left-1/2
                      -translate-x-1/2
                      w-20
                      h-1
                      rounded-full
                      bg-white/30
                    "
                  />
                </div>
              </div>
            </motion.div>

            {/* Mobile cards */}

            <div className="grid grid-cols-2 gap-3">
              {anatomy.map((part, index) => (
                <motion.button
                  key={part.id}
                  onClick={() => setSelectedPart(part)}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className={`
                    text-left
                    p-5
                    rounded-2xl
                    border
                    transition
                    ${
                      selectedPart.id === part.id
                        ? "border-purple-300/50 bg-purple-300/[0.08]"
                        : "border-white/10 bg-white/[0.035]"
                    }
                  `}
                >
                  <span
                    className="
                      w-2
                      h-2
                      block
                      rounded-full
                      bg-purple-300
                      mb-4
                    "
                  />

                  <h3 className="font-semibold">{part.name}</h3>

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mt-1
                    "
                  >
                    {part.info}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Mobile selected information */}

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPart.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  mt-8
                  p-6
                  rounded-3xl
                  border
                  border-purple-300/10
                  bg-white/[0.035]
                  text-center
                "
              >
                <p
                  className="
                    text-purple-300/60
                    text-xs
                    uppercase
                    tracking-widest
                  "
                >
                  Selected
                </p>

                <h3 className="text-2xl font-bold mt-2">{selectedPart.name}</h3>

                <p className="text-gray-400 mt-3 text-sm">
                  {selectedPart.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* =====================================================
          HARDWARE SYSTEMS
      ====================================================== */}

      <section
        className="
          relative
          py-32
          md:py-40
          px-6
          bg-[#0d0b14]
        "
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="mb-16"
          >
            <p
              className="
                text-purple-300/70
                uppercase
                tracking-[0.35em]
                text-xs
              "
            >
              Classification
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-bold
                mt-5
              "
            >
              Hardware Systems
            </h2>

            <p
              className="
                max-w-2xl
                text-gray-400
                mt-6
              "
            >
              The iPhone is a collection of specialized systems working together
              as one device.
            </p>
          </motion.div>

          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
            "
          >
            {hardware.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: (index % 3) * 0.08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                className="
                  group
                  relative
                  p-7
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  backdrop-blur-xl
                  overflow-hidden
                  hover:border-purple-300/25
                  transition-all
                "
              >
                <motion.div
                  whileHover={{
                    scale: 2,
                    opacity: 0.4,
                  }}
                  className="
                    absolute
                    -right-16
                    -top-16
                    w-40
                    h-40
                    rounded-full
                    bg-purple-500/10
                    blur-3xl
                  "
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl text-purple-200">
                      {item.icon}
                    </span>

                    <span className="text-xs text-gray-600">
                      {String(item.id).padStart(2, "0")}
                    </span>
                  </div>

                  <p
                    className="
                      text-purple-300/50
                      text-xs
                      uppercase
                      tracking-widest
                      mt-10
                    "
                  >
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                  <p
                    className="
                      text-gray-400
                      mt-4
                      leading-relaxed
                      text-sm
                    "
                  >
                    {item.description}
                  </p>

                  <motion.div
                    initial={{
                      width: 20,
                    }}
                    whileHover={{
                      width: 50,
                    }}
                    className="
                      h-px
                      bg-purple-300/40
                      mt-7
                    "
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TOOLS
      ====================================================== */}

      <section
        className="
          relative
          py-32
          md:py-40
          px-6
        "
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="text-center mb-16"
          >
            <p
              className="
                text-purple-300/70
                uppercase
                tracking-[0.35em]
                text-xs
              "
            >
              Explore
            </p>

            <h2
              className="
                text-5xl
                md:text-7xl
                font-bold
                mt-5
              "
            >
              iPhone Tools
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  p-8
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.035]
                  hover:border-purple-300/25
                  transition-all
                "
              >
                <span className="text-purple-300/50 text-sm">
                  {tool.number}
                </span>

                <h3 className="text-2xl font-bold mt-8">{tool.title}</h3>

                <p
                  className="
                    text-gray-400
                    mt-4
                    leading-relaxed
                    text-sm
                  "
                >
                  {tool.text}
                </p>

                <motion.div
                  whileHover={{
                    x: 8,
                  }}
                  className="
                    mt-8
                    text-sm
                    text-purple-200
                  "
                >
                  Explore →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          relative
          min-h-[70vh]
          flex
          items-center
          justify-center
          px-6
          overflow-hidden
          bg-[#0d0b14]
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            bg-purple-600/20
            blur-[150px]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            text-center
            max-w-4xl
          "
        >
          <p
            className="
              text-purple-300/60
              uppercase
              tracking-[0.35em]
              text-xs
            "
          >
            Continue Exploring
          </p>

          <h2
            className="
              text-6xl
              md:text-8xl
              font-black
              tracking-tighter
              mt-6
            "
          >
            Technology
            <br />
            <span
              className="
                bg-gradient-to-r
                from-purple-200
                via-white
                to-indigo-300
                bg-clip-text
                text-transparent
              "
            >
              is inside.
            </span>
          </h2>

          <p
            className="
              text-gray-400
              max-w-xl
              mx-auto
              mt-7
            "
          >
            Explore another side of Apple's hardware architecture.
          </p>

          <Link
            to="/mac"
            className="
              inline-flex
              mt-10
              px-8
              py-4
              rounded-full
              bg-white
              text-black
              font-semibold
              hover:scale-105
              transition
            "
          >
            Explore Mac →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

export default Iphone;
