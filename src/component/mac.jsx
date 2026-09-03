import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";

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

const particles = Array.from({ length: 40 }, (_, index) => ({
  id: index,
  left: `${(index * 31) % 100}%`,
  top: `${(index * 43) % 100}%`,
  size: `${2 + (index % 3)}px`,
  duration: 4 + (index % 5),
}));

function Mac() {
  const [selectedPart, setSelectedPart] = useState(anatomy[0]);

  const { scrollYProgress } = useScroll();

  const laptopY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [80, 30, 0, -30, -80],
  );

  const laptopRotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-4, -2, 0, 2, -3],
  );

  const laptopScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 0.97, 0.9],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#090a0d] text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [-120, 100, -120],
            y: [-60, 80, -60],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[10%] w-[520px] h-[520px] rounded-full bg-blue-500/10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [70, -70, 70],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[5%] top-[30%] w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[150px]"
        />

        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-white/20"
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

      {/* HERO */}

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,120,255,0.08),transparent_45%)]" />

        <div className="relative z-10 text-center max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-blue-200/70 uppercase tracking-[0.4em] text-xs md:text-sm"
          >
            Mac Architecture
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
            transition={{ duration: 1 }}
            className="mt-7 text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85]"
          >
            Inside
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
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
            className="max-w-2xl mx-auto mt-8 text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Discover the hardware architecture, processing systems, memory,
            storage, cooling and technologies that make a Mac work.
          </motion.p>

          <motion.a
            href="#history"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex mt-10 px-7 py-4 rounded-full bg-white text-black font-semibold"
          >
            Explore Mac ↓
          </motion.a>
        </div>
      </section>

      {/* HISTORY */}

      <section
        id="history"
        className="relative py-32 md:py-40 px-6 overflow-hidden bg-[#0d0f13]"
      >
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-24"
          >
            <p className="text-blue-200/60 uppercase tracking-[0.35em] text-xs">
              The Evolution
            </p>

            <h2 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight">
              Mac History
            </h2>

            <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-relaxed">
              Four decades of personal computing, design and hardware
              architecture.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-300/30 to-transparent" />

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
                className={`relative flex mb-16 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  className="w-full md:w-[44%] ml-10 md:ml-0 p-7 rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl hover:border-blue-300/20 transition-all"
                >
                  <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                    {item.year}
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-3 leading-relaxed text-sm md:text-base">
                    {item.text}
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-8 w-3 h-3 rounded-full bg-blue-200"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ANATOMY */}

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
            <p className="text-blue-200/60 uppercase tracking-[0.35em] text-xs">
              Hardware Anatomy
            </p>

            <h2 className="text-5xl md:text-7xl font-bold mt-5">
              What's inside?
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto mt-6">
              Select a Mac component and explore its role inside the system.
            </p>
          </motion.div>

          <div className="hidden md:block relative min-h-[950px]">
            {anatomy.map((part, index) => (
              <motion.div
                key={`line-${part.id}`}
                className={`absolute h-px ${
                  part.side === "left"
                    ? "left-[18%] right-[50%]"
                    : "left-[50%] right-[18%]"
                } ${
                  selectedPart.id === part.id ? "bg-blue-300/70" : "bg-white/10"
                }`}
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
                  delay: index * 0.08,
                }}
              />
            ))}

            {anatomy.map((part, index) => (
              <motion.button
                key={part.id}
                onClick={() => setSelectedPart(part)}
                style={{ top: part.top }}
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
                  delay: index * 0.08,
                }}
                whileHover={{ scale: 1.04 }}
                className={`absolute z-20 ${
                  part.side === "left" ? "left-[1%]" : "right-[1%]"
                } text-left w-[240px]`}
              >
                <div
                  className={`p-5 rounded-2xl border backdrop-blur-xl transition-all ${
                    selectedPart.id === part.id
                      ? "border-blue-300/50 bg-blue-300/[0.07]"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-300" />

                    <span className="font-semibold">{part.name}</span>
                  </div>

                  <p className="text-xs text-gray-500 mt-2 ml-5">{part.info}</p>
                </div>
              </motion.button>
            ))}

            <motion.div
              style={{
                y: laptopY,
                rotate: laptopRotate,
                scale: laptopScale,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute -inset-20 rounded-[80px] bg-blue-500/15 blur-3xl"
              />

              <motion.div
                whileHover={{
                  rotateX: -3,
                  rotateY: 3,
                }}
                className="relative w-[500px] h-[315px] rounded-[24px] border-[8px] border-[#777] bg-[#222] p-3 shadow-[0_0_90px_rgba(80,120,255,0.14)]"
              >
                <div className="relative w-full h-full rounded-[13px] overflow-hidden bg-[#080a0e]">
                  <motion.div
                    animate={{
                      x: [-80, 80, -80],
                      y: [-30, 40, -30],
                      scale: [1, 1.25, 1],
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute w-[300px] h-[220px] rounded-full bg-blue-500/15 blur-[70px]"
                  />

                  <motion.div
                    animate={{
                      x: [100, -100, 100],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-0 bottom-0 w-[220px] h-[180px] rounded-full bg-purple-500/10 blur-[70px]"
                  />

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-300/40" />
                  </div>

                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-0 bottom-0 w-24 rotate-[20deg] bg-white/[0.035] blur-xl"
                  />
                </div>
              </motion.div>

              <motion.div className="relative -mt-[2px] ml-[-45px] w-[590px] h-[25px] rounded-b-[35px] bg-gradient-to-b from-[#aaa] via-[#777] to-[#444] shadow-2xl">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-28 h-2 rounded-b-xl bg-[#555]" />
              </motion.div>

              <div className="absolute left-1/2 top-[342px] -translate-x-1/2 w-44 h-14 rounded-xl border border-black/20 bg-[#999]/30" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-24 rounded-full border border-blue-300/10"
              />
            </motion.div>

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
                className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center max-w-md"
              >
                <p className="text-blue-300/60 text-xs uppercase tracking-[0.25em]">
                  Selected Component
                </p>

                <h3 className="text-3xl font-bold mt-2">{selectedPart.name}</h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {selectedPart.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MOBILE */}

          <div className="md:hidden">
            <div className="relative flex justify-center py-16">
              <div className="relative w-[330px] h-[210px] rounded-2xl border-[6px] border-[#777] bg-[#222] p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#080a0e]">
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                    }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blue-500/15 blur-3xl"
                  />

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 rounded-b-xl bg-black" />
                </div>
              </div>
            </div>

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
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className={`text-left p-5 rounded-2xl border transition ${
                    selectedPart.id === part.id
                      ? "border-blue-300/50 bg-blue-300/[0.07]"
                      : "border-white/10 bg-white/[0.035]"
                  }`}
                >
                  <span className="w-2 h-2 block rounded-full bg-blue-300 mb-4" />

                  <h3 className="font-semibold">{part.name}</h3>

                  <p className="text-xs text-gray-500 mt-1">{part.info}</p>
                </motion.button>
              ))}
            </div>

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
                className="mt-8 p-6 rounded-3xl border border-blue-300/10 bg-white/[0.035] text-center"
              >
                <p className="text-blue-300/60 text-xs uppercase tracking-widest">
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

      {/* FINAL */}

      <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-[150px]"
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
          viewport={{ once: true }}
          className="relative text-center max-w-4xl"
        >
          <p className="text-blue-300/60 uppercase tracking-[0.35em] text-xs">
            Continue Exploring
          </p>

          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mt-6">
            Technology
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
              is inside.
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mt-7">
            Explore another side of Apple's hardware architecture and discover
            what makes each system work together.
          </p>

          <Link
            to="/iph"
            className="inline-flex mt-10 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
          >
            Explore iPhone →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

export default Mac;
