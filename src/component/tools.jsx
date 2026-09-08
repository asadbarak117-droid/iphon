import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Link } from "react-router-dom";

const COLORS = {
  blue: "#30AFFF",
  cyan: "#92EEFF",
  green: "#D8FFC5",
  mint: "#C4F7CA",
  white: "#FFFFFF",
  soft: "#F7FBFF",
  softBlue: "#EEF9FF",
  text: "#17324D",
  textLight: "#62809A",
  border: "#DDECF5",
};

const accentMap = {
  blue: COLORS.blue,
  cyan: COLORS.cyan,
  green: COLORS.green,
  mint: COLORS.mint,
};

const tools = [
  {
    id: "01",
    icon: "⚡",
    category: "Performance",
    title: "Chip Explorer",
    description: "Explore Apple Silicon architecture and performance.",
    color: "blue",
    details: [
      "CPU Architecture",
      "GPU Cores",
      "Neural Engine",
      "Memory Bandwidth",
    ],
  },
  {
    id: "02",
    icon: "◉",
    category: "Display",
    title: "Display Explorer",
    description: "Understand Retina, OLED, brightness and refresh rates.",
    color: "cyan",
    details: ["Retina Technology", "OLED Panels", "ProMotion", "True Tone"],
  },
  {
    id: "03",
    icon: "◈",
    category: "Camera",
    title: "Camera Anatomy",
    description: "Explore sensors, lenses and computational photography.",
    color: "green",
    details: [
      "Main Sensor",
      "Ultra Wide",
      "Telephoto",
      "Computational Photography",
    ],
  },
  {
    id: "04",
    icon: "▣",
    category: "Memory",
    title: "Memory Explorer",
    description: "Discover how unified memory works inside Apple Silicon.",
    color: "mint",
    details: [
      "Unified Memory",
      "RAM Architecture",
      "Memory Bandwidth",
      "Cache System",
    ],
  },
  {
    id: "05",
    icon: "▤",
    category: "Storage",
    title: "Storage Explorer",
    description: "Learn how Apple manages fast internal storage.",
    color: "blue",
    details: [
      "NVMe Storage",
      "SSD Controller",
      "Storage Speeds",
      "File System",
    ],
  },
  {
    id: "06",
    icon: "◇",
    category: "Security",
    title: "Security Explorer",
    description: "Explore Secure Enclave and Apple security technologies.",
    color: "cyan",
    details: ["Secure Enclave", "Face ID", "Touch ID", "Encryption"],
  },
  {
    id: "07",
    icon: "⌁",
    category: "Connectivity",
    title: "Connectivity Lab",
    description: "Understand Wi-Fi, Bluetooth and wireless technologies.",
    color: "green",
    details: ["Wi-Fi", "Bluetooth", "5G", "AirDrop"],
  },
  {
    id: "08",
    icon: "⌁",
    category: "Power",
    title: "Battery Explorer",
    description: "Learn how Apple devices manage energy efficiently.",
    color: "mint",
    details: [
      "Battery Chemistry",
      "Power Management",
      "Charging",
      "Energy Efficiency",
    ],
  },
  {
    id: "09",
    icon: "◉",
    category: "Audio",
    title: "Audio Lab",
    description: "Explore speakers, microphones and spatial audio.",
    color: "blue",
    details: ["Speaker System", "Microphones", "Spatial Audio", "Dolby Atmos"],
  },
  {
    id: "10",
    icon: "△",
    category: "Thermal",
    title: "Thermal System",
    description: "Discover how Apple devices control temperature.",
    color: "cyan",
    details: [
      "Heat Dissipation",
      "Thermal Sensors",
      "Cooling",
      "Power Efficiency",
    ],
  },
  {
    id: "11",
    icon: "✦",
    category: "Sensors",
    title: "Sensor Explorer",
    description: "Explore the sensors that make Apple devices intelligent.",
    color: "green",
    details: ["Accelerometer", "Gyroscope", "LiDAR", "Proximity Sensor"],
  },
  {
    id: "12",
    icon: "⬡",
    category: "Architecture",
    title: "System Architecture",
    description: "See how hardware and software work together.",
    color: "mint",
    details: ["Hardware", "Operating System", "Drivers", "System Integration"],
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
    icon: "✦",
    accent: COLORS.blue,
  },
  {
    value: "8",
    label: "Hardware Systems",
    icon: "◈",
    accent: COLORS.cyan,
  },
  {
    value: "50+",
    label: "Technology Topics",
    icon: "◇",
    accent: COLORS.green,
  },
  {
    value: "∞",
    label: "Things To Learn",
    icon: "∞",
    accent: COLORS.mint,
  },
];

function Tools() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTool, setSelectedTool] = useState(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 140,
    damping: 20,
    mass: 0.7,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 140,
    damping: 20,
    mass: 0.7,
  });

  const heroRotateX = useTransform(smoothY, [-1, 1], [7, -7]);
  const heroRotateY = useTransform(smoothX, [-1, 1], [-9, 9]);

  const glowX = useTransform(smoothX, [-1, 1], ["20%", "80%"]);
  const glowY = useTransform(smoothY, [-1, 1], ["20%", "80%"]);

  const filteredTools =
    activeCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);

    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: COLORS.soft,
        color: COLORS.text,
      }}
    >
      <section
        className="relative min-h-screen overflow-hidden"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <motion.div
          className="pointer-events-none absolute h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            left: glowX,
            top: glowY,
            background: `radial-gradient(circle, ${COLORS.cyan}55 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `${COLORS.blue}22`,
          }}
        />

        <motion.div
          className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -70, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: `${COLORS.green}35`,
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(${COLORS.border} 1px, transparent 1px),
              linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-xs font-bold tracking-[0.28em]"
            style={{
              background: `${COLORS.white}cc`,
              borderColor: COLORS.border,
              color: COLORS.textLight,
              boxShadow: `0 15px 45px ${COLORS.blue}18`,
              backdropFilter: "blur(16px)",
            }}
          >
            <motion.span
              animate={{
                rotate: 360,
                scale: [1, 1.3, 1],
              }}
              transition={{
                rotate: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                },
              }}
              style={{ color: COLORS.blue }}
            >
              ◇
            </motion.span>
            APPLE TECHNOLOGY LAB
          </motion.div>

          <motion.div
            style={{
              rotateX: heroRotateX,
              rotateY: heroRotateY,
              transformPerspective: 1400,
              transformStyle: "preserve-3d",
            }}
            initial={{
              opacity: 0,
              scale: 0.8,
              rotateX: 15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
            }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h1
              className="max-w-5xl text-6xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-9xl"
              style={{
                background: `linear-gradient(120deg, ${COLORS.blue}, ${COLORS.text} 48%, ${COLORS.cyan})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transformStyle: "preserve-3d",
              }}
            >
              Tools for
              <br />
              curious minds.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mt-8 max-w-2xl text-lg leading-8 sm:text-xl"
            style={{ color: COLORS.textLight }}
          >
            Interactive laboratories designed to help you understand the
            technology inside Apple devices.
          </motion.p>

          <motion.a
            href="#tools"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            whileHover={{
              scale: 1.06,
              y: -5,
              boxShadow: `0 20px 50px ${COLORS.blue}55`,
            }}
            whileTap={{ scale: 0.96 }}
            className="mt-10 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-bold text-white"
            style={{
              background: COLORS.blue,
              boxShadow: `0 12px 35px ${COLORS.blue}35`,
            }}
          >
            Explore Tools
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
            >
              ↓
            </motion.span>
          </motion.a>

          <div className="relative mt-20 h-56 w-56 [perspective:1000px]">
            <motion.div
              className="absolute inset-0 rounded-full border-2"
              style={{
                borderColor: `${COLORS.blue}55`,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 180],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute inset-6 rounded-full border"
              style={{
                borderColor: `${COLORS.cyan}80`,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateY: [0, -360],
                rotateX: [0, 180],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-[28px]"
              style={{
                background: `linear-gradient(135deg, ${COLORS.white}, ${COLORS.softBlue})`,
                border: `1px solid ${COLORS.border}`,
                boxShadow: `
                  0 30px 80px ${COLORS.blue}30,
                  inset 0 1px 0 white
                `,
                transformStyle: "preserve-3d",
              }}
              animate={{
                rotateX: [0, 20, 0],
                rotateY: [0, 30, 0],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-4 rounded-[18px] border border-dashed border-[#30AFFF55]" />

              <motion.div
                className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: COLORS.blue,
                  boxShadow: `0 0 35px ${COLORS.blue}`,
                }}
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {[0, 1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="absolute h-3 w-3 rounded-full"
                style={{
                  background: [
                    COLORS.blue,
                    COLORS.cyan,
                    COLORS.green,
                    COLORS.mint,
                  ][item],
                  left: `${50 + Math.cos(item * 1.57) * 52}%`,
                  top: `${50 + Math.sin(item * 1.57) * 52}%`,
                  boxShadow: `0 0 18px ${
                    [COLORS.blue, COLORS.cyan, COLORS.green, COLORS.mint][item]
                  }`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5 + item * 0.3,
                  repeat: Infinity,
                  delay: item * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 40,
                rotateX: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: index % 2 === 0 ? -4 : 4,
                scale: 1.025,
              }}
              className="group relative overflow-hidden rounded-3xl border p-6 [perspective:1000px]"
              style={{
                background: COLORS.white,
                borderColor: COLORS.border,
                boxShadow: `0 18px 55px ${COLORS.text}08`,
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl"
                style={{
                  background: `${stat.accent}35`,
                }}
                animate={{
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />

              <div
                className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-xl"
                style={{
                  background: `${stat.accent}20`,
                  color: COLORS.text,
                }}
              >
                {stat.icon}
              </div>

              <motion.div
                className="relative z-10 text-4xl font-black tracking-tight"
                style={{ color: COLORS.text }}
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
              >
                {stat.value}
              </motion.div>

              <div
                className="relative z-10 mt-1 text-sm font-medium"
                style={{ color: COLORS.textLight }}
              >
                {stat.label}
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-1"
                style={{
                  background: stat.accent,
                }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="tools"
        className="relative z-10 mx-auto max-w-7xl px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div
            className="mb-4 text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: COLORS.blue }}
          >
            Interactive Laboratory
          </div>

          <h2
            className="text-5xl font-black tracking-[-0.05em] sm:text-6xl"
            style={{ color: COLORS.text }}
          >
            Pick your subject.
          </h2>

          <p
            className="mt-5 max-w-2xl text-lg"
            style={{ color: COLORS.textLight }}
          >
            Choose a system and explore the technology behind Apple products
            through interactive experiences.
          </p>
        </motion.div>

        <div className="mb-12 overflow-x-auto pb-3">
          <div className="flex min-w-max gap-3">
            {categories.map((category, index) => {
              const active = activeCategory === category;

              return (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="relative overflow-hidden rounded-full border px-5 py-3 text-sm font-bold"
                  style={{
                    background: active ? COLORS.blue : COLORS.white,
                    borderColor: active ? COLORS.blue : COLORS.border,
                    color: active ? COLORS.white : COLORS.textLight,
                    boxShadow: active
                      ? `0 12px 30px ${COLORS.blue}35`
                      : `0 5px 20px ${COLORS.text}06`,
                  }}
                >
                  <motion.span
                    className="absolute inset-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    style={{
                      background: `linear-gradient(90deg, transparent, ${COLORS.white}55, transparent)`,
                    }}
                  />

                  <span className="relative z-10">{category}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool, index) => {
              const accent =
                accentMap[tool.color] ||
                [COLORS.blue, COLORS.cyan, COLORS.green, COLORS.mint][
                  index % 4
                ];

              return (
                <motion.button
                  key={tool.id}
                  layout
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
                    scale: 0.8,
                    y: 20,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.035,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.025,
                    rotateX: 5,
                    rotateY: index % 2 === 0 ? -4 : 4,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => setSelectedTool(tool)}
                  className="group relative overflow-hidden rounded-[28px] border p-6 text-left [perspective:1000px]"
                  style={{
                    background: COLORS.white,
                    borderColor: COLORS.border,
                    boxShadow: `0 18px 55px ${COLORS.text}08`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl"
                    style={{
                      background: `${accent}35`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.7 }}
                    style={{
                      background: `linear-gradient(110deg, transparent 35%, ${COLORS.white}90 50%, transparent 65%)`,
                    }}
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <motion.div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                      style={{
                        background: `${accent}22`,
                        color: COLORS.text,
                        boxShadow: `0 10px 30px ${accent}18`,
                      }}
                      whileHover={{
                        rotateY: 25,
                        rotateX: -10,
                        scale: 1.12,
                      }}
                    >
                      {tool.icon}
                    </motion.div>

                    <span
                      className="rounded-full px-3 py-1 text-[10px] font-black tracking-[0.2em]"
                      style={{
                        background: `${accent}18`,
                        color: COLORS.textLight,
                      }}
                    >
                      {tool.id}
                    </span>
                  </div>

                  <div className="relative z-10 mt-7">
                    <div
                      className="mb-2 text-[10px] font-black uppercase tracking-[0.22em]"
                      style={{ color: accent }}
                    >
                      {tool.category}
                    </div>

                    <h3
                      className="text-xl font-black tracking-tight"
                      style={{ color: COLORS.text }}
                    >
                      {tool.title}
                    </h3>

                    <p
                      className="mt-3 min-h-[72px] text-sm leading-6"
                      style={{ color: COLORS.textLight }}
                    >
                      {tool.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 flex items-center justify-between">
                    <span
                      className="text-sm font-bold"
                      style={{ color: COLORS.text }}
                    >
                      Open tool
                    </span>

                    <motion.span
                      whileHover={{ x: 5 }}
                      style={{ color: accent }}
                    >
                      →
                    </motion.span>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-6 right-6 h-[2px] origin-left"
                    style={{
                      background: accent,
                    }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedTool && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTool(null)}
            style={{
              background: `${COLORS.text}88`,
              backdropFilter: "blur(18px)",
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.82,
                rotateX: 15,
                rotateY: -10,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.86,
                rotateX: -10,
                y: 30,
              }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-[34px] border p-8 [perspective:1200px] sm:p-10"
              style={{
                background: COLORS.white,
                borderColor: COLORS.border,
                boxShadow: `0 40px 120px ${COLORS.text}35`,
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
                style={{
                  background: `${accentMap[selectedTool.color]}35`,
                }}
                animate={{
                  scale: [1, 1.25, 1],
                  rotate: [0, 45, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <button
                onClick={() => setSelectedTool(null)}
                className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border text-lg"
                style={{
                  background: COLORS.soft,
                  borderColor: COLORS.border,
                  color: COLORS.textLight,
                }}
              >
                ×
              </button>

              <div className="relative z-10">
                <motion.div
                  className="mb-7 flex h-20 w-20 items-center justify-center rounded-[24px] text-3xl"
                  style={{
                    background: `${accentMap[selectedTool.color]}25`,
                    color: COLORS.text,
                    boxShadow: `0 20px 50px ${accentMap[selectedTool.color]}25`,
                  }}
                  animate={{
                    rotateY: [0, 15, 0],
                    rotateX: [0, -8, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {selectedTool.icon}
                </motion.div>

                <div
                  className="mb-3 text-xs font-black uppercase tracking-[0.25em]"
                  style={{
                    color: accentMap[selectedTool.color],
                  }}
                >
                  {selectedTool.category}
                </div>

                <h3
                  className="text-4xl font-black tracking-[-0.04em] sm:text-5xl"
                  style={{ color: COLORS.text }}
                >
                  {selectedTool.title}
                </h3>

                <p
                  className="mt-5 text-base leading-7"
                  style={{ color: COLORS.textLight }}
                >
                  {selectedTool.description}
                </p>

                <div
                  className="my-8 h-px"
                  style={{ background: COLORS.border }}
                />

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
                      whileHover={{
                        x: 5,
                        scale: 1.02,
                      }}
                      className="rounded-2xl border p-4"
                      style={{
                        background: COLORS.soft,
                        borderColor: COLORS.border,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{
                            background: accentMap[selectedTool.color],
                            boxShadow: `0 0 12px ${accentMap[selectedTool.color]}`,
                          }}
                        />

                        <span
                          className="text-sm font-bold"
                          style={{ color: COLORS.text }}
                        >
                          {detail}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={() => setSelectedTool(null)}
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="mt-8 w-full rounded-2xl px-6 py-4 text-sm font-black text-white"
                  style={{
                    background: COLORS.blue,
                    boxShadow: `0 15px 35px ${COLORS.blue}30`,
                  }}
                >
                  Done
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[40px] border p-8 sm:p-12 lg:p-16"
          style={{
            background: `linear-gradient(135deg, ${COLORS.white}, ${COLORS.softBlue}, ${COLORS.mint}55)`,
            borderColor: COLORS.border,
            boxShadow: `0 30px 100px ${COLORS.text}0D`,
          }}
        >
          <motion.div
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full blur-3xl"
            style={{
              background: `${COLORS.blue}25`,
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full blur-3xl"
            style={{
              background: `${COLORS.green}40`,
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <div
                className="mb-4 text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: COLORS.blue }}
              >
                AppleHub Anatomy
              </div>

              <h2
                className="text-5xl font-black tracking-[-0.06em] sm:text-6xl"
                style={{
                  background: `linear-gradient(120deg, ${COLORS.blue}, ${COLORS.text}, ${COLORS.cyan})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Keep exploring.
              </h2>

              <p
                className="mt-5 max-w-2xl text-lg leading-8"
                style={{ color: COLORS.textLight }}
              >
                Technology becomes easier when you can see how every piece
                connects. Continue your journey through the AppleHub experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/iphone">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-full px-6 py-3.5 text-sm font-black text-white"
                    style={{
                      background: COLORS.blue,
                      boxShadow: `0 15px 35px ${COLORS.blue}35`,
                    }}
                  >
                    Explore iPhone
                  </motion.div>
                </Link>

                <Link to="/mac">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                    }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-full border px-6 py-3.5 text-sm font-black"
                    style={{
                      background: COLORS.white,
                      borderColor: COLORS.border,
                      color: COLORS.text,
                    }}
                  >
                    Explore Mac
                  </motion.div>
                </Link>
              </div>
            </div>

            <div className="relative flex h-52 w-52 items-center justify-center [perspective:1000px]">
              <motion.div
                className="absolute h-44 w-44 rounded-full border-2"
                style={{
                  borderColor: `${COLORS.blue}55`,
                }}
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 180],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute h-32 w-32 rounded-full border"
                style={{
                  borderColor: `${COLORS.cyan}80`,
                }}
                animate={{
                  rotateY: [0, -360],
                  rotateZ: [0, 180],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="relative flex h-24 w-24 items-center justify-center rounded-[28px] text-4xl"
                style={{
                  background: COLORS.white,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: `0 25px 60px ${COLORS.blue}30`,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  y: [0, -12, 0],
                  rotateX: [0, 12, 0],
                  rotateY: [0, -18, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✦
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer
        className="border-t px-6 py-10 text-center text-sm"
        style={{
          borderColor: COLORS.border,
          color: COLORS.textLight,
          background: COLORS.white,
        }}
      >
        <span className="font-bold" style={{ color: COLORS.text }}>
          AppleHub
        </span>{" "}
        — Explore. Understand. Build.
      </footer>
    </main>
  );
}

export default Tools;
