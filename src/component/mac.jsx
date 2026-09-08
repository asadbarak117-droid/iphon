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
    year: "1984",
    title: "The Macintosh",
    text: "Apple introduced the original Macintosh, bringing a graphical user interface and mouse-driven personal computing to a wider audience.",
  },
  {
    year: "1998",
    title: "iMac",
    text: "The colorful iMac combined the computer and display into one compact design and helped redefine the personal computer.",
  },
  {
    year: "2006",
    title: "Intel Transition",
    text: "Apple transitioned the Mac platform from PowerPC processors to Intel processors.",
  },
  {
    year: "2008",
    title: "MacBook Air",
    text: "The MacBook Air pushed portable computer design toward thinner and lighter hardware.",
  },
  {
    year: "2012",
    title: "Retina MacBook Pro",
    text: "Retina displays brought extremely high pixel density to MacBook Pro.",
  },
  {
    year: "2020",
    title: "Apple Silicon",
    text: "Apple introduced its own Mac processors, beginning the transition from Intel to Apple Silicon.",
  },
  {
    year: "Today",
    title: "Modern Mac",
    text: "Modern Macs combine Apple Silicon, unified memory, high-speed storage, advanced displays, thermal systems and sophisticated connectivity.",
  },
];

const anatomy = [
  {
    id: "display",
    name: "Retina Display",
    info: "Visual System",
    detail:
      "The display produces the visual interface using high pixel density, wide color and advanced display technologies.",
    side: "left",
    top: "12%",
  },
  {
    id: "camera",
    name: "Camera",
    info: "Image System",
    detail:
      "The camera captures video and images for FaceTime, meetings and other applications.",
    side: "right",
    top: "13%",
  },
  {
    id: "soc",
    name: "Apple Silicon",
    info: "System on Chip",
    detail:
      "Apple Silicon integrates CPU, GPU, Neural Engine, media engines and other controllers.",
    side: "left",
    top: "28%",
  },
  {
    id: "memory",
    name: "Unified Memory",
    info: "High-Speed Memory",
    detail:
      "Unified memory allows different processing units to access the same high-speed memory pool.",
    side: "right",
    top: "29%",
  },
  {
    id: "ssd",
    name: "SSD Storage",
    info: "Flash Storage",
    detail:
      "The SSD stores macOS, applications, documents, photos, videos and other user data.",
    side: "left",
    top: "44%",
  },
  {
    id: "battery",
    name: "Battery",
    info: "Power System",
    detail: "The battery supplies electrical energy to portable Mac systems.",
    side: "right",
    top: "45%",
  },
  {
    id: "cooling",
    name: "Cooling System",
    info: "Thermal Management",
    detail:
      "Heat spreaders, heat pipes and fans in supported models move heat away from high-performance components.",
    side: "left",
    top: "60%",
  },
  {
    id: "ports",
    name: "Ports",
    info: "Connectivity",
    detail:
      "Mac systems provide physical interfaces for displays, storage, charging, networking and accessories.",
    side: "right",
    top: "61%",
  },
  {
    id: "audio",
    name: "Speaker System",
    info: "Audio",
    detail:
      "The speaker system produces system sounds, music, video audio and communication audio.",
    side: "left",
    top: "76%",
  },
  {
    id: "trackpad",
    name: "Force Touch Trackpad",
    info: "Input System",
    detail:
      "The trackpad detects gestures and pressure while providing precise haptic feedback.",
    side: "right",
    top: "77%",
  },
];

const particles = Array.from({ length: 45 }, (_, index) => ({
  id: index,
  left: `${(index * 31) % 100}%`,
  top: `${(index * 43) % 100}%`,
  size: `${2 + (index % 4)}px`,
  duration: 3 + (index % 6),
}));

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

function Mac() {
  const [selectedPart, setSelectedPart] = useState(anatomy[0]);

  const { scrollYProgress } = useScroll();

  const laptopY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [100, 30, 0, -30, -100],
  );

  const laptopRotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-6, -2, 0, 3, -4],
  );

  const laptopScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.78, 1, 0.97, 0.88],
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 16);
    mouseY.set(y * -12);
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
    >
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            x: [-120, 120, -120],
            y: [-70, 90, -70],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[8%] top-[8%] w-[520px] h-[520px] rounded-full blur-[150px]"
          style={{
            background: `${COLORS.blue}18`,
          }}
        />

        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [80, -80, 80],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[5%] top-[35%] w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{
            background: `${COLORS.mint}70`,
          }}
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-[35%] top-[30%] w-[400px] h-[400px] rounded-full border"
          style={{
            borderColor: `${COLORS.cyan}35`,
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
              background: `${COLORS.blue}55`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <section
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
        style={{
          perspective: "1400px",
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          style={{
            background: `radial-gradient(circle at center, ${COLORS.cyan}45, transparent 45%)`,
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            rotateX: 25,
            rotateY: -20,
            z: -200,
          }}
          animate={{
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            z: 0,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="relative z-10 text-center max-w-6xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.4em] text-xs md:text-sm font-semibold"
            style={{
              color: COLORS.blue,
            }}
          >
            Mac Architecture
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.7,
              rotateX: 35,
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
              ease: "easeOut",
            }}
            className="mt-7 text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85]"
          >
            Inside
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.text}, ${COLORS.blue}, ${COLORS.mint})`,
                backgroundSize: "300% 100%",
              }}
            >
              Mac.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="max-w-2xl mx-auto mt-8 text-base md:text-lg leading-relaxed"
            style={{
              color: COLORS.textLight,
            }}
          >
            Discover the hardware architecture, processing systems, memory,
            storage, cooling and technologies that make a Mac work.
          </motion.p>

          <motion.a
            href="#history"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
            }}
            whileHover={{
              scale: 1.08,
              y: -4,
              boxShadow: `0 20px 60px ${COLORS.blue}45`,
            }}
            whileTap={{
              scale: 0.94,
            }}
            className="inline-flex mt-10 px-8 py-4 rounded-full font-semibold"
            style={{
              background: COLORS.blue,
              color: COLORS.white,
              boxShadow: `0 10px 35px ${COLORS.blue}30`,
            }}
          >
            Explore Mac ↓
          </motion.a>
        </motion.div>
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
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{
            background: `${COLORS.cyan}70`,
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-center mb-24"
          >
            <p
              className="uppercase tracking-[0.35em] text-xs md:text-sm font-semibold"
              style={{
                color: COLORS.blue,
              }}
            >
              The Evolution
            </p>

            <h2 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight">
              Mac History
            </h2>

            <p
              className="max-w-2xl mx-auto mt-6 leading-relaxed"
              style={{
                color: COLORS.textLight,
              }}
            >
              Four decades of personal computing, design and hardware
              architecture.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 2,
              }}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px origin-top"
              style={{
                background: `linear-gradient(to bottom, transparent, ${COLORS.blue}, ${COLORS.cyan}, transparent)`,
              }}
            />

            {history.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
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
                  delay: index * 0.1,
                }}
                className={`relative flex mb-16 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
                style={{
                  perspective: "1000px",
                }}
              >
                <motion.div
                  whileHover={{
                    y: -12,
                    rotateX: 5,
                    rotateY: index % 2 === 0 ? 4 : -4,
                    scale: 1.025,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
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
                    style={{
                      color: COLORS.textLight,
                    }}
                  >
                    {item.text}
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.7, 1],
                    boxShadow: [
                      `0 0 0px ${COLORS.blue}00`,
                      `0 0 30px ${COLORS.blue}90`,
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
              duration: 0.8,
            }}
            className="text-center mb-20"
          >
            <p
              className="uppercase tracking-[0.35em] text-xs font-semibold"
              style={{
                color: COLORS.blue,
              }}
            >
              Hardware Anatomy
            </p>

            <h2 className="text-5xl md:text-7xl font-bold mt-5">
              What's inside?
            </h2>

            <p
              className="max-w-xl mx-auto mt-6"
              style={{
                color: COLORS.textLight,
              }}
            >
              Select a Mac component and explore its role inside the system.
            </p>
          </motion.div>

          <div
            className="hidden md:block relative min-h-[950px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              perspective: "1800px",
            }}
          >
            {anatomy.map((part, index) => (
              <motion.div
                key={`line-${part.id}`}
                className={`absolute h-px ${
                  part.side === "left"
                    ? "left-[18%] right-[50%]"
                    : "left-[50%] right-[18%]"
                }`}
                style={{
                  top: part.top,
                  transformOrigin: part.side === "left" ? "right" : "left",
                  background:
                    selectedPart.id === part.id
                      ? `${COLORS.blue}CC`
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
                  duration: 0.8,
                  delay: index * 0.08,
                }}
              />
            ))}

            {anatomy.map((part, index) => (
              <motion.button
                key={part.id}
                onClick={() => setSelectedPart(part)}
                style={{
                  top: part.top,
                  transformStyle: "preserve-3d",
                }}
                initial={{
                  opacity: 0,
                  x: part.side === "left" ? -70 : 70,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  scale: 1.07,
                  z: 40,
                  rotateY: part.side === "left" ? 5 : -5,
                }}
                className={`absolute z-20 ${
                  part.side === "left" ? "left-[1%]" : "right-[1%]"
                } text-left w-[240px]`}
              >
                <div
                  className="p-5 rounded-2xl border backdrop-blur-xl"
                  style={{
                    borderColor:
                      selectedPart.id === part.id
                        ? `${COLORS.blue}90`
                        : COLORS.border,
                    background:
                      selectedPart.id === part.id
                        ? `${COLORS.cyan}55`
                        : `${COLORS.white}E8`,
                    boxShadow:
                      selectedPart.id === part.id
                        ? `0 15px 50px ${COLORS.blue}20`
                        : `0 10px 30px ${COLORS.blue}08`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{
                        scale: selectedPart.id === part.id ? [1, 1.5, 1] : 1,
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
                    style={{
                      color: COLORS.textLight,
                    }}
                  >
                    {part.info}
                  </p>
                </div>
              </motion.button>
            ))}

            <motion.div
              style={{
                y: laptopY,
                rotate: laptopRotate,
                scale: laptopScale,
                rotateX: smoothY,
                rotateY: smoothX,
                transformStyle: "preserve-3d",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.18, 0.45, 0.18],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -inset-24 rounded-[100px] blur-[60px]"
                style={{
                  background: `${COLORS.blue}45`,
                }}
              />

              <motion.div
                className="absolute -inset-14 rounded-[70px] border"
                style={{
                  borderColor: `${COLORS.cyan}45`,
                  transform: "translateZ(-30px)",
                }}
                animate={{
                  rotateZ: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute -inset-24 rounded-full border"
                style={{
                  borderColor: `${COLORS.mint}70`,
                  transform: "translateZ(-60px)",
                }}
                animate={{
                  rotateZ: [360, 0],
                }}
                transition={{
                  duration: 38,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                whileHover={{
                  rotateX: -5,
                  rotateY: 8,
                  scale: 1.025,
                }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 16,
                }}
                className="relative w-[500px] h-[315px] rounded-[25px] border-[8px] p-3"
                style={{
                  borderColor: "#B9C9D4",
                  background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.softBlue}, ${COLORS.white})`,
                  boxShadow: `0 35px 100px ${COLORS.blue}30`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-3 rounded-full"
                  style={{
                    background: "#B9C9D4",
                  }}
                />

                <div
                  className="relative w-full h-full rounded-[15px] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.white}, ${COLORS.cyan}70)`,
                  }}
                >
                  <motion.div
                    animate={{
                      x: [-100, 100, -100],
                      y: [-40, 50, -40],
                      scale: [1, 1.35, 1],
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-[320px] h-[240px] rounded-full blur-[70px]"
                    style={{
                      background: `${COLORS.blue}45`,
                    }}
                  />

                  <motion.div
                    animate={{
                      x: [100, -100, 100],
                      y: [40, -50, 40],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-0 bottom-0 w-[250px] h-[200px] rounded-full blur-[70px]"
                    style={{
                      background: `${COLORS.mint}AA`,
                    }}
                  />

                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border"
                    style={{
                      borderColor: `${COLORS.blue}45`,
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
                    className="absolute top-0 bottom-0 w-28 rotate-[20deg] blur-xl"
                    style={{
                      background: `${COLORS.white}90`,
                    }}
                  />

                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 rounded-b-2xl z-20"
                    style={{
                      background: COLORS.text,
                    }}
                  >
                    <motion.div
                      animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                      style={{
                        background: COLORS.blue,
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: [-8, 8, -8],
                        rotateZ: [-2, 2, -2],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-5xl font-black"
                      style={{
                        color: `${COLORS.text}15`,
                      }}
                    >
                      
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative -mt-[2px] ml-[-45px] w-[590px] h-[25px] rounded-b-[35px]"
                style={{
                  background: `linear-gradient(to bottom, #D9E4EA, #A8B9C4, #8296A3)`,
                  boxShadow: `0 20px 35px ${COLORS.blue}20`,
                  transformStyle: "preserve-3d",
                  transform: "translateZ(-10px)",
                }}
              >
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-0 w-28 h-2 rounded-b-xl"
                  style={{
                    background: "#81929D",
                  }}
                />
              </motion.div>

              <motion.div
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute left-1/2 top-[342px] -translate-x-1/2 w-44 h-14 rounded-xl border"
                style={{
                  borderColor: `${COLORS.blue}30`,
                  background: `${COLORS.cyan}30`,
                  boxShadow: `0 10px 30px ${COLORS.blue}15`,
                }}
              />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPart.id}
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.9,
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center max-w-md"
              >
                <p
                  className="text-xs uppercase tracking-[0.25em] font-semibold"
                  style={{
                    color: COLORS.blue,
                  }}
                >
                  Selected Component
                </p>

                <h3 className="text-3xl font-bold mt-2">{selectedPart.name}</h3>

                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{
                    color: COLORS.textLight,
                  }}
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
                scale: 0.75,
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
              className="relative flex justify-center py-16"
              style={{
                perspective: "1000px",
              }}
            >
              <motion.div
                animate={{
                  rotateY: [-5, 5, -5],
                  rotateX: [2, -2, 2],
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[330px] h-[210px] rounded-2xl border-[6px] p-2"
                style={{
                  borderColor: "#B9C9D4",
                  background: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.white})`,
                  boxShadow: `0 30px 70px ${COLORS.blue}30`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="relative w-full h-full rounded-xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.white}, ${COLORS.cyan})`,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.35, 1],
                      x: [-30, 30, -30],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl"
                    style={{
                      background: `${COLORS.blue}40`,
                    }}
                  />

                  <motion.div
                    animate={{
                      x: ["-120%", "220%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-0 bottom-0 w-20 rotate-[20deg] blur-xl"
                    style={{
                      background: `${COLORS.white}90`,
                    }}
                  />

                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 rounded-b-xl"
                    style={{
                      background: COLORS.text,
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
                    rotateX: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.06,
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
                        ? `${COLORS.cyan}55`
                        : COLORS.white,
                    boxShadow:
                      selectedPart.id === part.id
                        ? `0 15px 40px ${COLORS.blue}15`
                        : "none",
                  }}
                >
                  <motion.span
                    animate={{
                      scale: selectedPart.id === part.id ? [1, 1.5, 1] : 1,
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
                    style={{
                      color: COLORS.textLight,
                    }}
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
                  style={{
                    color: COLORS.blue,
                  }}
                >
                  Selected
                </p>

                <h3 className="text-2xl font-bold mt-2">{selectedPart.name}</h3>

                <p
                  className="mt-3 text-sm"
                  style={{
                    color: COLORS.textLight,
                  }}
                >
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
              style={{
                color: COLORS.blue,
              }}
            >
              Classification
            </p>

            <h2 className="text-5xl md:text-7xl font-bold mt-5">
              Hardware Systems
            </h2>

            <p
              className="max-w-2xl mt-6"
              style={{
                color: COLORS.textLight,
              }}
            >
              The Mac is a collection of specialized systems working together as
              one powerful device.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hardware.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotateX: 20,
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
                }}
                whileHover={{
                  y: -12,
                  rotateX: 4,
                  rotateY: index % 2 === 0 ? 3 : -3,
                  scale: 1.02,
                }}
                className="group relative p-7 rounded-3xl border overflow-hidden"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  boxShadow: `0 20px 60px ${COLORS.blue}10`,
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 2.3,
                    opacity: 0.7,
                  }}
                  className="absolute -right-16 -top-16 w-40 h-40 rounded-full blur-3xl"
                  style={{
                    background: `${COLORS.cyan}80`,
                  }}
                />

                <motion.div
                  animate={
                    item.category === "Storage"
                      ? {
                          rotate: [0, 360],
                        }
                      : {}
                  }
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute right-7 bottom-7 w-12 h-12 rounded-full border"
                  style={{
                    borderColor:
                      item.category === "Storage"
                        ? `${COLORS.blue}35`
                        : "transparent",
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <motion.span
                      whileHover={{
                        rotateZ: 12,
                        scale: 1.3,
                        z: 30,
                      }}
                      className="text-3xl"
                      style={{
                        color: COLORS.blue,
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

                  {item.category === "Storage" && (
                    <div className="mt-6 h-2 rounded-full overflow-hidden bg-[#EEF9FF]">
                      <motion.div
                        animate={{
                          width: ["15%", "85%", "45%", "95%", "15%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.cyan})`,
                        }}
                      />
                    </div>
                  )}

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

      <section className="relative py-32 md:py-40 px-6">
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
              className="uppercase tracking-[0.35em] text-xs font-semibold"
              style={{
                color: COLORS.blue,
              }}
            >
              Explore
            </p>

            <h2 className="text-5xl md:text-7xl font-bold mt-5">
              Mac Experience
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {["Performance", "Storage", "Connectivity"].map((title, index) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotateY: index === 0 ? -20 : index === 2 ? 20 : 0,
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
                }}
                whileHover={{
                  y: -12,
                  rotateX: 5,
                  scale: 1.03,
                }}
                className="relative p-8 rounded-3xl border overflow-hidden"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  boxShadow: `0 20px 60px ${COLORS.blue}10`,
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 15 + index * 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-10 -top-10 w-32 h-32 rounded-full border"
                  style={{
                    borderColor: `${COLORS.cyan}45`,
                  }}
                />

                <span
                  className="text-sm font-semibold"
                  style={{
                    color: COLORS.blue,
                  }}
                >
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-bold mt-8">{title}</h3>

                <p
                  className="mt-4 leading-relaxed text-sm"
                  style={{
                    color: COLORS.textLight,
                  }}
                >
                  Explore how this Mac system works with the rest of the
                  architecture.
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
        className="relative min-h-[75vh] flex items-center justify-center px-6 overflow-hidden"
        style={{
          background: COLORS.softBlue,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.4, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[550px] h-[550px] rounded-full blur-[150px]"
          style={{
            background: `${COLORS.cyan}80`,
          }}
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-[450px] h-[450px] rounded-full border"
          style={{
            borderColor: `${COLORS.blue}25`,
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
            rotateX: 30,
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
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.text}, ${COLORS.blue}, ${COLORS.mint})`,
              }}
            >
              is inside.
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto mt-7"
            style={{
              color: COLORS.textLight,
            }}
          >
            Explore another side of Apple's hardware architecture and discover
            what makes each system work together.
          </p>

          <Link
            to="/iph"
            className="inline-flex mt-10 px-8 py-4 rounded-full font-semibold"
            style={{
              background: COLORS.blue,
              color: COLORS.white,
              boxShadow: `0 20px 50px ${COLORS.blue}35`,
            }}
          >
            Explore iPhone →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

export default Mac;
