import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const tools = [
  {
    id: "01",
    icon: "⚡",
    category: "Performance",
    title: "Chip Explorer",
    description:
      "Explore CPU, GPU, Neural Engine and Apple Silicon architecture.",
    color: "blue",
    details: ["CPU cores", "GPU cores", "Neural Engine", "Media Engine"],
  },
  {
    id: "02",
    icon: "▣",
    category: "Display",
    title: "Display Explorer",
    description:
      "Understand resolution, pixels, refresh rate, brightness and display technology.",
    color: "purple",
    details: ["Resolution", "Pixel density", "Refresh rate", "Brightness"],
  },
  {
    id: "03",
    icon: "◉",
    category: "Camera",
    title: "Camera Anatomy",
    description:
      "Learn how sensors, lenses and image processors create photographs.",
    color: "pink",
    details: [
      "Camera sensor",
      "Lens system",
      "ISP",
      "Computational photography",
    ],
  },
  {
    id: "04",
    icon: "▤",
    category: "Memory",
    title: "Memory Explorer",
    description: "Understand RAM, unified memory and memory bandwidth.",
    color: "cyan",
    details: ["RAM", "Unified memory", "Memory bandwidth", "Memory management"],
  },
  {
    id: "05",
    icon: "▥",
    category: "Storage",
    title: "Storage Explorer",
    description:
      "Learn how SSD storage works and how system data is organized.",
    color: "green",
    details: ["SSD", "Storage capacity", "Read speed", "System storage"],
  },
  {
    id: "06",
    icon: "◈",
    category: "Security",
    title: "Security Explorer",
    description:
      "Explore Secure Enclave, encryption, biometrics and secure boot.",
    color: "yellow",
    details: ["Secure Enclave", "Encryption", "Face ID", "Touch ID"],
  },
  {
    id: "07",
    icon: "⌁",
    category: "Connectivity",
    title: "Connectivity Lab",
    description:
      "Understand Wi-Fi, Bluetooth, USB-C, Thunderbolt and wireless systems.",
    color: "orange",
    details: ["Wi-Fi", "Bluetooth", "USB-C", "Thunderbolt"],
  },
  {
    id: "08",
    icon: "▰",
    category: "Power",
    title: "Battery Explorer",
    description:
      "Discover batteries, charging, power management and efficiency.",
    color: "emerald",
    details: [
      "Battery cells",
      "Charging",
      "Power management",
      "Battery health",
    ],
  },
  {
    id: "09",
    icon: ")))",
    category: "Audio",
    title: "Audio Lab",
    description: "Explore speakers, microphones and spatial audio technology.",
    color: "indigo",
    details: ["Speakers", "Microphones", "Spatial Audio", "Audio processing"],
  },
  {
    id: "10",
    icon: "◇",
    category: "Thermal",
    title: "Thermal System",
    description: "Understand how Apple hardware manages heat and performance.",
    color: "red",
    details: ["Heat generation", "Heat sink", "Cooling", "Thermal management"],
  },
  {
    id: "11",
    icon: "◎",
    category: "Sensors",
    title: "Sensor Explorer",
    description:
      "Explore sensors responsible for movement, orientation and interaction.",
    color: "violet",
    details: [
      "Accelerometer",
      "Gyroscope",
      "Ambient light",
      "Proximity sensor",
    ],
  },
  {
    id: "12",
    icon: "◆",
    category: "Architecture",
    title: "System Architecture",
    description: "See how all major hardware components communicate together.",
    color: "sky",
    details: ["Hardware", "Software", "Operating system", "System integration"],
  },
];

const categories = [
  "All",
  "Performance",
  "Display",
  "Camera",
  "Memory",
  "Storage",
  "Security",
  "Connectivity",
  "Power",
  "Audio",
  "Thermal",
  "Sensors",
  "Architecture",
];

const stats = [
  {
    value: "12",
    label: "Interactive Tools",
  },
  {
    value: "8",
    label: "Hardware Systems",
  },
  {
    value: "50+",
    label: "Technology Topics",
  },
  {
    value: "∞",
    label: "Things To Learn",
  },
];

function Tools() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTool, setSelectedTool] = useState(null);

  const filteredTools =
    activeCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#050608] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-50, 80, -50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-10
            left-[5%]
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [100, -80, 100],
            y: [50, -70, 50],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[40%]
            right-[0]
            w-[500px]
            h-[500px]
            rounded-full
            bg-purple-600/10
            blur-[160px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />
      </div>

      {/* Hero */}
      <section
        className="
          relative
          min-h-screen
          flex
          items-center
          justify-center
          px-6
          pt-32
        "
      >
        <div
          className="
            relative
            z-10
            max-w-6xl
            mx-auto
            text-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-xs
              text-gray-400
            "
          >
            <span className="text-blue-300">◇</span>
            APPLE TECHNOLOGY LAB
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9,
              filter: "blur(15px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
            }}
            className="
              mt-8
              text-6xl
              sm:text-7xl
              md:text-9xl
              font-black
              tracking-tighter
              leading-[0.85]
            "
          >
            Tools for
            <br />
            <span
              className="
                bg-gradient-to-r
                from-blue-200
                via-white
                to-purple-200
                bg-clip-text
                text-transparent
              "
            >
              curious minds.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
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
            Explore the technology inside Apple devices. Discover processors,
            displays, cameras, memory, security, sensors and much more.
          </motion.p>

          <motion.a
            href="#tools"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              inline-flex
              mt-10
              px-7
              py-4
              rounded-full
              bg-white
              text-black
              font-semibold
            "
          >
            Explore Tools ↓
          </motion.a>
        </div>
      </section>

      {/* Stats */}
      <section className="relative px-6 py-20">
        <div
          className="
            max-w-6xl
            mx-auto
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
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
                delay: index * 0.1,
              }}
              className="
                p-6
                md:p-8
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                text-center
              "
            >
              <div
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  bg-gradient-to-r
                  from-white
                  to-gray-500
                  bg-clip-text
                  text-transparent
                "
              >
                {stat.value}
              </div>

              <div
                className="
                  mt-2
                  text-xs
                  uppercase
                  tracking-widest
                  text-gray-500
                "
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section
        id="tools"
        className="
          relative
          px-6
          py-32
        "
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center">
            <motion.p
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              className="
                text-blue-300/70
                text-xs
                uppercase
                tracking-[0.35em]
              "
            >
              Interactive Laboratory
            </motion.p>

            <motion.h2
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
              className="
                mt-5
                text-5xl
                md:text-7xl
                font-bold
                tracking-tight
              "
            >
              Pick your subject.
            </motion.h2>
          </div>

          {/* Categories */}
          <div
            className="
              mt-14
              flex
              gap-2
              overflow-x-auto
              pb-4
            "
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                whileTap={{
                  scale: 0.94,
                }}
                className={`
                  shrink-0
                  px-5
                  py-2.5
                  rounded-full
                  border
                  text-xs
                  transition-all
                  ${
                    activeCategory === category
                      ? "bg-white text-black border-white"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:text-white"
                  }
                `}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="
              mt-8
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-5
            "
          >
            <AnimatePresence mode="popLayout">
              {filteredTools.map((tool, index) => (
                <motion.button
                  key={tool.id}
                  type="button"
                  onClick={() => setSelectedTool(tool)}
                  layout
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 4) * 0.05,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group
                    relative
                    text-left
                    p-6
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.035]
                    overflow-hidden
                  "
                >
                  {/* Glow */}
                  <div
                    className="
                      absolute
                      -right-20
                      -top-20
                      w-48
                      h-48
                      rounded-full
                      bg-blue-500/10
                      blur-3xl
                      opacity-0
                      group-hover:opacity-100
                      transition
                    "
                  />

                  <div className="relative">
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <motion.div
                        whileHover={{
                          rotate: 10,
                          scale: 1.1,
                        }}
                        className="
                          w-14
                          h-14
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          flex
                          items-center
                          justify-center
                          text-2xl
                        "
                      >
                        {tool.icon}
                      </motion.div>

                      <span
                        className="
                          text-xs
                          font-mono
                          text-gray-600
                        "
                      >
                        {tool.id}
                      </span>
                    </div>

                    <p
                      className="
                        mt-8
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        text-blue-300/60
                      "
                    >
                      {tool.category}
                    </p>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-bold
                      "
                    >
                      {tool.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-sm
                        text-gray-400
                        leading-relaxed
                      "
                    >
                      {tool.description}
                    </p>

                    <div
                      className="
                        mt-7
                        flex
                        items-center
                        justify-between
                      "
                    >
                      <span
                        className="
                          text-xs
                          text-gray-500
                        "
                      >
                        Open tool
                      </span>

                      <motion.span
                        whileHover={{
                          x: 5,
                        }}
                        className="
                          text-white
                        "
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedTool && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedTool(null)}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/80
              backdrop-blur-xl
              flex
              items-center
              justify-center
              p-6
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                w-full
                max-w-2xl
                rounded-[32px]
                border
                border-white/10
                bg-[#0d0f13]
                p-8
                md:p-10
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  -right-24
                  -top-24
                  w-72
                  h-72
                  rounded-full
                  bg-blue-500/10
                  blur-[100px]
                "
              />

              <div className="relative">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      flex
                      items-center
                      justify-center
                      text-3xl
                    "
                  >
                    {selectedTool.icon}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedTool(null)}
                    className="
                      w-10
                      h-10
                      rounded-full
                      border
                      border-white/10
                      text-gray-400
                      hover:text-white
                      hover:bg-white/10
                      transition
                    "
                  >
                    ×
                  </button>
                </div>

                <p
                  className="
                    mt-8
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-blue-300/60
                  "
                >
                  {selectedTool.category}
                </p>

                <h2
                  className="
                    mt-3
                    text-4xl
                    md:text-5xl
                    font-black
                  "
                >
                  {selectedTool.title}
                </h2>

                <p
                  className="
                    mt-5
                    text-gray-400
                    leading-relaxed
                  "
                >
                  {selectedTool.description}
                </p>

                <div
                  className="
                    mt-8
                    grid
                    sm:grid-cols-2
                    gap-3
                  "
                >
                  {selectedTool.details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="
                          p-4
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.03]
                        "
                    >
                      <span
                        className="
                            text-[10px]
                            text-gray-600
                            font-mono
                          "
                      >
                        0{index + 1}
                      </span>

                      <div
                        className="
                            mt-2
                            text-sm
                            font-medium
                          "
                      >
                        {detail}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="
                    mt-8
                    h-px
                    bg-white/10
                  "
                />

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                  "
                >
                  <span
                    className="
                      text-xs
                      text-gray-600
                    "
                  >
                    AppleHub Anatomy
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedTool(null)}
                    className="
                      px-5
                      py-2.5
                      rounded-full
                      bg-white
                      text-black
                      text-xs
                      font-semibold
                    "
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom CTA */}
      <section
        className="
          relative
          min-h-[70vh]
          flex
          items-center
          justify-center
          px-6
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.2, 0.08],
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
            bg-blue-500/10
            blur-[140px]
          "
        />

        <div
          className="
            relative
            z-10
            text-center
            max-w-4xl
          "
        >
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-blue-300/60
            "
          >
            AppleHub Anatomy
          </motion.p>

          <motion.h2
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
            className="
              mt-6
              text-6xl
              md:text-8xl
              font-black
              tracking-tighter
            "
          >
            Keep
            <br />
            <span
              className="
                bg-gradient-to-r
                from-blue-200
                via-white
                to-purple-200
                bg-clip-text
                text-transparent
              "
            >
              exploring.
            </span>
          </motion.h2>

          <p
            className="
              mt-7
              max-w-xl
              mx-auto
              text-gray-400
            "
          >
            Go deeper into the hardware and architecture behind Apple's most
            iconic devices.
          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            <Link
              to="/iph"
              className="
                px-7
                py-4
                rounded-full
                bg-white
                text-black
                font-semibold
                hover:scale-105
                transition
              "
            >
              Explore iPhone →
            </Link>

            <Link
              to="/mac"
              className="
                px-7
                py-4
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                hover:bg-white/[0.08]
                transition
              "
            >
              Explore Mac
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tools;
