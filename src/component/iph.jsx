import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
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

const particles = Array.from({ length: 50 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  size: `${2 + (index % 4)}px`,
  duration: 4 + (index % 6),
  delay: (index % 5) * 0.4,
}));

function Iphone() {
  const [selectedPart, setSelectedPart] = useState(anatomy[0]);

  const { scrollYProgress } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const backgroundX = useTransform(smoothMouseX, [-500, 500], [-35, 35]);
  const backgroundY = useTransform(smoothMouseY, [-500, 500], [-25, 25]);

  const phoneRotateX = useTransform(smoothMouseY, [-500, 500], [10, -10]);

  const phoneRotateY = useTransform(smoothMouseX, [-500, 500], [-12, 12]);

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

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - (rect.left + rect.width / 2));

    mouseY.set(event.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: COLORS.soft,
        color: COLORS.text,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{
            x: backgroundX,
            y: backgroundY,
          }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[10%] w-[550px] h-[550px] rounded-full blur-[150px]"
          style={{
            x: backgroundX,
            y: backgroundY,
            background: `${COLORS.blue}22`,
          }}
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
          className="absolute right-[5%] top-[30%] w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{
            background: `${COLORS.cyan}38`,
          }}
        />

        <motion.div
          animate={{
            x: [-80, 80, -80],
            y: [80, -50, 80],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[30%] bottom-[-10%] w-[450px] h-[450px] rounded-full blur-[150px]"
          style={{
            background: `${COLORS.mint}35`,
          }}
        />

        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              background: `${COLORS.blue}50`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, particle.id % 2 === 0 ? 15 : -15, 0],
              opacity: [0.05, 0.8, 0.05],
              scale: [0.7, 1.5, 0.7],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-6 perspective-[1400px]">
        <motion.div
          style={{
            x: backgroundX,
            y: backgroundY,
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${COLORS.cyan}38, transparent 45%)`,
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.4em] text-xs md:text-sm font-semibold"
            style={{ color: COLORS.blue }}
          >
            iPhone Architecture
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.8,
              rotateX: 25,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-7 text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85]"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            Inside
            <br />
            <motion.span
              className="bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.text}, ${COLORS.blue})`,
                backgroundSize: "300% 100%",
              }}
            >
              iPhone.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="max-w-2xl mx-auto mt-8 text-base md:text-lg leading-relaxed"
            style={{ color: COLORS.textLight }}
          >
            Discover the hardware systems, components and technologies that work
            together inside an iPhone.
          </motion.p>

          <motion.a
            href="#history"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{
              scale: 1.08,
              y: -5,
              boxShadow: `0 20px 60px ${COLORS.blue}55`,
            }}
            whileTap={{
              scale: 0.94,
            }}
            className="inline-flex mt-10 px-7 py-4 rounded-full font-semibold"
            style={{
              background: `linear-gradient(135deg, ${COLORS.blue}, #159BE8)`,
              color: COLORS.white,
            }}
          >
            Explore iPhone ↓
          </motion.a>
        </div>
      </section>

      <section
        id="history"
        className="relative py-32 md:py-40 px-6 overflow-hidden"
        style={{
          background: COLORS.softBlue,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[170px]"
          style={{
            background: `${COLORS.cyan}50`,
          }}
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
              className="uppercase tracking-[0.35em] text-xs md:text-sm font-semibold"
              style={{ color: COLORS.blue }}
            >
              The Evolution
            </p>

            <h2 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight">
              iPhone History
            </h2>

            <p
              className="max-w-2xl mx-auto mt-6 leading-relaxed"
              style={{ color: COLORS.textLight }}
            >
              From the original iPhone to today's advanced mobile architecture.
            </p>
          </motion.div>

          <div className="relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
              style={{
                background: `linear-gradient(to bottom, transparent, ${COLORS.blue}90, transparent)`,
              }}
            />

            {history.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                  rotateY: index % 2 === 0 ? -15 : 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className={`relative flex mb-16 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <motion.div
                  whileHover={{
                    y: -12,
                    scale: 1.025,
                    rotateX: 2,
                    rotateY: index % 2 === 0 ? -2 : 2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                  }}
                  className="w-full md:w-[44%] ml-10 md:ml-0 p-7 rounded-3xl border backdrop-blur-xl"
                  style={{
                    borderColor: COLORS.border,
                    background: `${COLORS.white}E8`,
                    boxShadow: `0 20px 60px ${COLORS.blue}12`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <span
                    className="text-4xl md:text-5xl font-black bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.text})`,
                    }}
                  >
                    {item.year}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold mt-4">
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 leading-relaxed text-sm md:text-base"
                    style={{ color: COLORS.textLight }}
                  >
                    {item.text}
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.6, 1],
                    boxShadow: [
                      `0 0 0px ${COLORS.blue}00`,
                      `0 0 30px ${COLORS.blue}CC`,
                      `0 0 0px ${COLORS.blue}00`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-8 w-3 h-3 rounded-full"
                  style={{
                    background: COLORS.blue,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="anatomy"
        className="relative min-h-screen py-32 md:py-40 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p
              className="uppercase tracking-[0.35em] text-xs font-semibold"
              style={{ color: COLORS.blue }}
            >
              Hardware Anatomy
            </p>

            <h2 className="text-5xl md:text-7xl font-bold mt-5">
              What's inside?
            </h2>

            <p
              className="max-w-xl mx-auto mt-6"
              style={{ color: COLORS.textLight }}
            >
              Select a component and explore its role inside the iPhone.
            </p>
          </motion.div>

          <div className="relative hidden md:block min-h-[850px] perspective-[1800px]">
            {anatomy.map((part, index) => (
              <motion.div
                key={`line-${part.id}`}
                className={`absolute h-px ${
                  part.side === "left"
                    ? "left-[22%] right-[50%]"
                    : "left-[50%] right-[22%]"
                }`}
                style={{
                  top: part.top,
                  transformOrigin: part.side === "left" ? "right" : "left",
                  background:
                    selectedPart.id === part.id
                      ? `${COLORS.blue}B3`
                      : COLORS.border,
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
                  scale: 1.07,
                  z: 30,
                  rotateY: part.side === "left" ? 5 : -5,
                }}
                className={`absolute z-20 ${
                  part.side === "left" ? "left-[3%]" : "right-[3%]"
                } text-left w-[220px]`}
              >
                <div
                  className="p-5 rounded-2xl border backdrop-blur-xl"
                  style={{
                    borderColor:
                      selectedPart.id === part.id
                        ? `${COLORS.blue}80`
                        : COLORS.border,
                    background:
                      selectedPart.id === part.id
                        ? `${COLORS.cyan}50`
                        : `${COLORS.white}DD`,
                    boxShadow:
                      selectedPart.id === part.id
                        ? `0 0 45px ${COLORS.blue}22`
                        : `0 15px 40px ${COLORS.blue}08`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{
                        scale: selectedPart.id === part.id ? [1, 1.3, 1] : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: selectedPart.id === part.id ? Infinity : 0,
                      }}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background:
                          selectedPart.id === part.id
                            ? COLORS.blue
                            : COLORS.cyan,
                      }}
                    />

                    <span className="font-semibold">{part.name}</span>
                  </div>

                  <p
                    className="text-xs mt-2 ml-5"
                    style={{ color: COLORS.textLight }}
                  >
                    {part.info}
                  </p>
                </div>
              </motion.button>
            ))}

            <motion.div
              style={{
                y: phoneY,
                rotate: phoneRotate,
                scale: phoneScale,
                rotateX: phoneRotateX,
                rotateY: phoneRotateY,
                transformStyle: "preserve-3d",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.55, 0.2],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-16 rounded-[80px] blur-3xl"
                style={{
                  background: `conic-gradient(from 0deg, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.mint}, ${COLORS.blue})`,
                }}
              />

              <motion.div
                animate={{
                  y: [-6, 6, -6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.04,
                }}
                className="relative w-[270px] h-[550px] rounded-[52px] border-[7px] p-2 shadow-2xl"
                style={{
                  borderColor: `${COLORS.blue}70`,
                  background: `linear-gradient(135deg, ${COLORS.cyan}90, ${COLORS.softBlue}, ${COLORS.white})`,
                  boxShadow: `
                    0 35px 100px ${COLORS.blue}30,
                    inset 0 0 25px ${COLORS.white},
                    0 0 0 1px ${COLORS.white}
                  `,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute left-[-11px] top-32 w-1 h-12 rounded-l"
                  style={{ background: COLORS.blue }}
                />

                <div
                  className="absolute left-[-11px] top-48 w-1 h-8 rounded-l"
                  style={{ background: COLORS.blue }}
                />

                <div
                  className="absolute right-[-11px] top-40 w-1 h-20 rounded-r"
                  style={{ background: COLORS.blue }}
                />

                <div
                  className="relative w-full h-full rounded-[43px] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.white}, ${COLORS.cyan}60)`,
                  }}
                >
                  <motion.div
                    animate={{
                      x: [-70, 70, -70],
                      y: [-40, 50, -40],
                      scale: [1, 1.35, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-52 h-52 rounded-full blur-[70px]"
                    style={{
                      background: `${COLORS.blue}45`,
                    }}
                  />

                  <motion.div
                    animate={{
                      x: [60, -50, 60],
                      y: [40, -40, 40],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-[-20px] bottom-10 w-48 h-48 rounded-full blur-[65px]"
                    style={{
                      background: `${COLORS.mint}AA`,
                    }}
                  />

                  <motion.div
                    animate={{
                      width: [75, 92, 75],
                      boxShadow: [
                        `0 0 0px ${COLORS.blue}00`,
                        `0 0 15px ${COLORS.blue}45`,
                        `0 0 0px ${COLORS.blue}00`,
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-3 left-1/2 -translate-x-1/2 h-6 rounded-full"
                    style={{
                      background: COLORS.text,
                    }}
                  />

                  <motion.div
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-[-20%] bottom-[-20%] w-16 rotate-[20deg] blur-xl"
                    style={{
                      background: `${COLORS.white}90`,
                    }}
                  />

                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute bottom-7 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full"
                    style={{
                      background: `${COLORS.text}55`,
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-20 rounded-full border"
                style={{
                  borderColor: `${COLORS.blue}30`,
                  transformStyle: "preserve-3d",
                }}
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-28 rounded-full border border-dashed"
                style={{
                  borderColor: `${COLORS.cyan}70`,
                }}
              />

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-36 rounded-full border"
                style={{
                  borderColor: `${COLORS.mint}80`,
                }}
              />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPart.id}
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.95,
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center max-w-md"
              >
                <p
                  className="text-xs uppercase tracking-[0.25em] font-semibold"
                  style={{ color: COLORS.blue }}
                >
                  Selected Component
                </p>

                <h3 className="text-3xl font-bold mt-2">{selectedPart.name}</h3>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: COLORS.textLight }}
                >
                  {selectedPart.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="md:hidden">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                rotateY: -20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className="relative flex justify-center py-16 perspective-[1000px]"
            >
              <motion.div
                animate={{
                  rotateY: [0, 8, -8, 0],
                  rotateX: [0, -4, 4, 0],
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[210px] h-[420px] rounded-[45px] border-[6px] p-2"
                style={{
                  borderColor: `${COLORS.blue}70`,
                  background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.softBlue}, ${COLORS.white})`,
                  boxShadow: `0 30px 80px ${COLORS.blue}35`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="relative w-full h-full rounded-[37px] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.white}, ${COLORS.cyan}60)`,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.35, 1],
                      x: [-30, 30, -30],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl"
                    style={{
                      background: `${COLORS.blue}40`,
                    }}
                  />

                  <div
                    className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full"
                    style={{
                      background: COLORS.text,
                    }}
                  />

                  <div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
                    style={{
                      background: `${COLORS.text}55`,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {anatomy.map((part, index) => (
                <motion.button
                  key={part.id}
                  onClick={() => setSelectedPart(part)}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="text-left p-5 rounded-2xl border"
                  style={{
                    borderColor:
                      selectedPart.id === part.id
                        ? `${COLORS.blue}80`
                        : COLORS.border,
                    background:
                      selectedPart.id === part.id
                        ? `${COLORS.cyan}50`
                        : COLORS.white,
                    boxShadow:
                      selectedPart.id === part.id
                        ? `0 15px 40px ${COLORS.blue}15`
                        : "none",
                  }}
                >
                  <motion.span
                    animate={{
                      scale: selectedPart.id === part.id ? [1, 1.3, 1] : 1,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: selectedPart.id === part.id ? Infinity : 0,
                    }}
                    className="w-2 h-2 block rounded-full mb-4"
                    style={{
                      background: COLORS.blue,
                    }}
                  />

                  <h3 className="font-semibold">{part.name}</h3>

                  <p
                    className="text-xs mt-1"
                    style={{ color: COLORS.textLight }}
                  >
                    {part.info}
                  </p>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPart.id}
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  scale: 0.96,
                }}
                className="mt-8 p-6 rounded-3xl border text-center"
                style={{
                  borderColor: `${COLORS.blue}30`,
                  background: COLORS.white,
                  boxShadow: `0 20px 50px ${COLORS.blue}10`,
                }}
              >
                <p
                  className="text-xs uppercase tracking-widest font-semibold"
                  style={{ color: COLORS.blue }}
                >
                  Selected
                </p>

                <h3 className="text-2xl font-bold mt-2">{selectedPart.name}</h3>

                <p className="mt-3 text-sm" style={{ color: COLORS.textLight }}>
                  {selectedPart.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section
        className="relative py-32 md:py-40 px-6"
        style={{
          background: COLORS.softBlue,
        }}
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
              className="uppercase tracking-[0.35em] text-xs font-semibold"
              style={{ color: COLORS.blue }}
            >
              Classification
            </p>

            <h2 className="text-5xl md:text-7xl font-bold mt-5">
              Hardware Systems
            </h2>

            <p className="max-w-2xl mt-6" style={{ color: COLORS.textLight }}>
              The iPhone is a collection of specialized systems working together
              as one device.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hardware.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotateX: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: (index % 3) * 0.08,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateX: 3,
                  rotateY: index % 2 === 0 ? 2 : -2,
                }}
                className="group relative p-7 rounded-3xl border overflow-hidden"
                style={{
                  borderColor: COLORS.border,
                  background: `${COLORS.white}E8`,
                  boxShadow: `0 20px 55px ${COLORS.blue}0C`,
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 2.2,
                    opacity: 0.45,
                  }}
                  className="absolute -right-16 -top-16 w-40 h-40 rounded-full blur-3xl"
                  style={{
                    background: `${COLORS.cyan}75`,
                  }}
                />

                <motion.div
                  className="absolute bottom-0 left-0 h-1"
                  initial={{
                    width: 0,
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  style={{
                    background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.mint})`,
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <motion.span
                      whileHover={{
                        rotateY: 180,
                        scale: 1.2,
                      }}
                      className="text-3xl"
                      style={{
                        color: COLORS.blue,
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {item.icon}
                    </motion.span>

                    <span
                      className="text-xs"
                      style={{
                        color: COLORS.textLight,
                      }}
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>
                  </div>

                  <p
                    className="text-xs uppercase tracking-widest mt-10 font-semibold"
                    style={{
                      color: COLORS.blue,
                    }}
                  >
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                  <p
                    className="mt-4 leading-relaxed text-sm"
                    style={{
                      color: COLORS.textLight,
                    }}
                  >
                    {item.description}
                  </p>

                  <motion.div
                    initial={{
                      width: 20,
                    }}
                    whileHover={{
                      width: 60,
                    }}
                    className="h-px mt-7"
                    style={{
                      background: COLORS.blue,
                    }}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-40 px-6 overflow-hidden">
        <motion.div
          animate={{
            x: [-150, 150, -150],
            y: [100, -100, 100],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[20%] top-[20%] w-[400px] h-[400px] rounded-full blur-[130px]"
          style={{
            background: `${COLORS.cyan}25`,
          }}
        />

        <div className="max-w-6xl mx-auto relative">
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
              className="uppercase tracking-[0.35em] text-xs font-semibold"
              style={{
                color: COLORS.blue,
              }}
            >
              Explore
            </p>

            <h2 className="text-5xl md:text-7xl font-bold mt-5">
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
                  rotateY: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -12,
                  rotateX: 3,
                  scale: 1.02,
                }}
                className="p-8 rounded-3xl border"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  boxShadow: `0 20px 55px ${COLORS.blue}0C`,
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.span
                  whileHover={{
                    x: 5,
                    scale: 1.1,
                  }}
                  className="text-sm font-semibold inline-block"
                  style={{
                    color: COLORS.blue,
                  }}
                >
                  {tool.number}
                </motion.span>

                <h3 className="text-2xl font-bold mt-8">{tool.title}</h3>

                <p
                  className="mt-4 leading-relaxed text-sm"
                  style={{
                    color: COLORS.textLight,
                  }}
                >
                  {tool.text}
                </p>

                <motion.div
                  whileHover={{
                    x: 10,
                  }}
                  className="mt-8 text-sm font-semibold"
                  style={{
                    color: COLORS.blue,
                  }}
                >
                  Explore →
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden"
        style={{
          background: COLORS.softBlue,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.15, 0.4, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute w-[550px] h-[550px] rounded-full blur-[150px]"
          style={{
            background: `conic-gradient(${COLORS.blue}, ${COLORS.cyan}, ${COLORS.mint}, ${COLORS.blue})`,
          }}
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[500px] h-[500px] rounded-full border"
          style={{
            borderColor: `${COLORS.blue}20`,
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotateX: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="relative text-center max-w-4xl"
        >
          <p
            className="uppercase tracking-[0.35em] text-xs font-semibold"
            style={{
              color: COLORS.blue,
            }}
          >
            Continue Exploring
          </p>

          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mt-6">
            Technology
            <br />
            <motion.span
              className="bg-clip-text text-transparent inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.text}, ${COLORS.blue})`,
                backgroundSize: "300% 100%",
              }}
            >
              is inside.
            </motion.span>
          </h2>

          <p
            className="max-w-xl mx-auto mt-7"
            style={{
              color: COLORS.textLight,
            }}
          >
            Explore another side of Apple's hardware architecture.
          </p>

          <motion.div
            whileHover={{
              scale: 1.08,
              y: -5,
              rotateX: 4,
              boxShadow: `0 25px 60px ${COLORS.blue}45`,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="inline-block mt-10 rounded-full"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <Link
              to="/mac"
              className="inline-flex px-8 py-4 rounded-full font-semibold"
              style={{
                background: `linear-gradient(135deg, ${COLORS.blue}, #159BE8)`,
                color: COLORS.white,
              }}
            >
              Explore Mac →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

export default Iphone;
