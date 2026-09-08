import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Link, useLocation } from "react-router-dom";

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

const problems = [
  {
    id: 1,
    device: "iPhone",
    icon: "🔋",
    question: "Why is my iPhone battery draining fast?",
    problem:
      "High brightness, background activity, weak signal, gaming, video recording, and other intensive tasks can increase battery usage.",
    solution:
      "Open Settings → Battery and check which apps use the most power. Reduce brightness, limit unnecessary background activity, update iOS, and use Low Power Mode when needed.",
  },
  {
    id: 2,
    device: "iPhone",
    icon: "🔥",
    question: "Why is my iPhone getting hot?",
    problem:
      "Gaming, camera use, charging, direct sunlight, poor signal, or intensive background processes can make the iPhone warm.",
    solution:
      "Stop demanding tasks temporarily, remove the phone from direct heat, stop charging if it is very hot, and allow it to cool naturally.",
  },
  {
    id: 3,
    device: "iPhone",
    icon: "🐌",
    question: "Why is my iPhone slow?",
    problem:
      "Low storage, outdated software, background processes, or an aging battery can affect performance.",
    solution:
      "Free up storage, restart the iPhone, update iOS, and check Settings → Battery → Battery Health & Charging.",
  },
  {
    id: 4,
    device: "iPhone",
    icon: "💾",
    question: "How can I free iPhone storage?",
    problem:
      "Photos, videos, applications, downloads, messages, and cached data can consume a lot of storage.",
    solution:
      "Go to Settings → General → iPhone Storage. Remove unused apps and large files, delete unnecessary videos, and optimize photo storage if appropriate.",
  },
  {
    id: 5,
    device: "iPhone",
    icon: "👤",
    question: "Why is Face ID not working?",
    problem:
      "Face obstruction, dirty sensors, incorrect positioning, or software issues can prevent Face ID from recognizing you.",
    solution:
      "Clean the TrueDepth camera area, make sure your face is visible, hold the iPhone correctly, and check Settings → Face ID & Passcode.",
  },
  {
    id: 6,
    device: "iPhone",
    icon: "📶",
    question: "Why is my iPhone Wi-Fi slow?",
    problem:
      "Weak signal, router problems, network congestion, or incorrect network settings can cause slow Wi-Fi.",
    solution:
      "Move closer to the router, reconnect to Wi-Fi, restart the router, and try restarting your iPhone. If necessary, check network settings.",
  },
  {
    id: 7,
    device: "iPhone",
    icon: "📱",
    question: "Why is my iPhone screen not responding?",
    problem:
      "A frozen application, software issue, wet screen, damaged display, or temporary system problem can cause touch problems.",
    solution:
      "Clean and dry the screen, remove accessories that may interfere, restart the iPhone, and update iOS. If the display remains unresponsive, hardware service may be needed.",
  },
  {
    id: 8,
    device: "iPhone",
    icon: "🔌",
    question: "Why is my iPhone not charging?",
    problem:
      "Dust in the charging port, a damaged cable, adapter problems, or software issues can prevent charging.",
    solution:
      "Try another compatible cable and adapter, inspect the charging port, restart the iPhone, and make sure the power source works.",
  },
  {
    id: 9,
    device: "Mac",
    icon: "🐌",
    question: "Why is my Mac running slowly?",
    problem:
      "Too many applications, startup items, low storage, memory pressure, or heavy background processes can reduce performance.",
    solution:
      "Close unnecessary applications, restart your Mac, free storage, and review startup/background items in System Settings.",
  },
  {
    id: 10,
    device: "Mac",
    icon: "🔥",
    question: "Why is my MacBook overheating?",
    problem:
      "Heavy workloads, demanding applications, blocked airflow, and high room temperatures can increase heat.",
    solution:
      "Close demanding applications and place the Mac on a hard, stable surface with good airflow. Keep vents clear and allow the Mac to cool.",
  },
  {
    id: 11,
    device: "Mac",
    icon: "📶",
    question: "Why isn't my Mac connecting to Wi-Fi?",
    problem:
      "Router problems, weak signal, incorrect network settings, or temporary software problems can interrupt Wi-Fi.",
    solution:
      "Turn Wi-Fi off and on, reconnect to the network, restart your Mac, and restart the router.",
  },
  {
    id: 12,
    device: "Mac",
    icon: "💾",
    question: "How can I free Mac storage?",
    problem:
      "Applications, downloads, videos, photos, documents, and system data can consume disk space.",
    solution:
      "Open System Settings → General → Storage. Remove unnecessary files and applications and empty the Trash.",
  },
  {
    id: 13,
    device: "Mac",
    icon: "⚠️",
    question: "Why is an app not responding?",
    problem:
      "An application can freeze because of a software bug, memory pressure, or excessive system load.",
    solution:
      "Wait briefly. If the application remains frozen, use Force Quit to close it and reopen it. Update the application if an update is available.",
  },
  {
    id: 14,
    device: "Mac",
    icon: "🔊",
    question: "Why is my Mac sound not working?",
    problem:
      "The wrong audio output may be selected, the volume may be muted, or an external device may be receiving the audio.",
    solution:
      "Open System Settings → Sound and select the correct output device. Check the volume and disconnect unwanted Bluetooth or external audio devices.",
  },
  {
    id: 15,
    device: "Mac",
    icon: "🔋",
    question: "Why does my MacBook battery drain quickly?",
    problem:
      "High screen brightness, demanding applications, background processes, and heavy workloads can increase battery usage.",
    solution:
      "Check battery usage, reduce brightness, close unnecessary applications, disconnect unused accessories, and keep macOS updated.",
  },
  {
    id: 16,
    device: "Mac",
    icon: "🖥️",
    question: "Why is my external display not working?",
    problem:
      "Cable problems, incorrect display settings, adapters, or compatibility issues can prevent an external display from appearing.",
    solution:
      "Check the cable and adapter, reconnect the display, restart the Mac, and open System Settings → Displays to detect and configure the display.",
  },
];

const devices = ["All", "iPhone", "Mac"];

const navItems = [
  {
    name: "Home",
    subtitle: "Main experience",
    path: "/",
    icon: "⌂",
  },
  {
    name: "iPhone",
    subtitle: "Explore iPhone",
    path: "/iph",
    icon: "▣",
  },
  {
    name: "Mac",
    subtitle: "Explore Mac",
    path: "/mac",
    icon: "▱",
  },
  {
    name: "Tools",
    subtitle: "Useful tools",
    path: "/tools",
    icon: "✦",
  },
  {
    name: "Guides",
    subtitle: "Fix problems",
    path: "/guides",
    icon: "◈",
  },
  {
    name: "About",
    subtitle: "About AppleHub",
    path: "/about",
    icon: "●",
  },
];

function Guides() {
  const [activeDevice, setActiveDevice] = useState("All");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 160,
    damping: 20,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 160,
    damping: 20,
    mass: 0.6,
  });

  const rotateX = useTransform(smoothY, [-1, 1], [7, -7]);
  const rotateY = useTransform(smoothX, [-1, 1], [-8, 8]);

  const glowX = useTransform(smoothX, [-1, 1], ["20%", "80%"]);
  const glowY = useTransform(smoothY, [-1, 1], ["20%", "80%"]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const resetPointer = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const filteredProblems = problems.filter((item) => {
    const matchesDevice =
      activeDevice === "All" || item.device === activeDevice;

    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      item.question.toLowerCase().includes(searchText) ||
      item.problem.toLowerCase().includes(searchText) ||
      item.solution.toLowerCase().includes(searchText);

    return matchesDevice && matchesSearch;
  });

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: COLORS.soft,
        color: COLORS.text,
      }}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 120, -100],
            y: [-50, 100, -50],
            scale: [1, 1.25, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-[80px] h-[520px] w-[520px] rounded-full blur-[130px]"
          style={{
            background: `${COLORS.cyan}80`,
          }}
        />

        <motion.div
          animate={{
            x: [100, -120, 100],
            y: [50, -100, 50],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-180px] top-[500px] h-[500px] w-[500px] rounded-full blur-[140px]"
          style={{
            background: `${COLORS.green}80`,
          }}
        />

        <motion.div
          className="absolute h-[420px] w-[420px] rounded-full blur-[110px]"
          style={{
            left: glowX,
            top: glowY,
            x: "-50%",
            y: "-50%",
            background: `radial-gradient(circle, ${COLORS.blue}35, transparent 68%)`,
          }}
        />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(${COLORS.border} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)`,
            backgroundSize: "70px 70px",
            maskImage: "linear-gradient(to bottom, black, transparent 80%)",
          }}
        />
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 z-30 bg-[#17324D]/20 backdrop-blur-md md:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.94,
              rotateX: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.94,
              rotateX: -8,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              transformPerspective: 1000,
            }}
            className="fixed left-4 right-4 top-[88px] z-40 overflow-hidden rounded-[30px] border bg-white/95 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div
              className="border-b px-6 py-5"
              style={{ borderColor: COLORS.border }}
            >
              <p
                className="text-[9px] uppercase tracking-[0.3em]"
                style={{ color: COLORS.blue }}
              >
                AppleHub
              </p>

              <p className="mt-1 text-sm" style={{ color: COLORS.textLight }}>
                Explore the anatomy
              </p>
            </div>

            <div className="p-3">
              {navItems.map((item, index) => {
                const active = isActive(item.path);

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + index * 0.07,
                      type: "spring",
                      stiffness: 180,
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className="group flex items-center justify-between rounded-2xl px-4 py-4 transition"
                      style={{
                        background: active
                          ? `${COLORS.softBlue}`
                          : "transparent",
                        color: active ? COLORS.text : COLORS.textLight,
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{
                            scale: 1.15,
                            rotate: 8,
                            z: 20,
                          }}
                          className="flex h-10 w-10 items-center justify-center rounded-xl border"
                          style={{
                            borderColor: active
                              ? `${COLORS.blue}55`
                              : COLORS.border,
                            background: active
                              ? `${COLORS.cyan}55`
                              : COLORS.soft,
                          }}
                        >
                          {item.icon}
                        </motion.div>

                        <div>
                          <span className="block text-sm font-semibold">
                            {item.name}
                          </span>

                          <span
                            className="block text-[9px] uppercase tracking-[0.2em]"
                            style={{ color: COLORS.textLight }}
                          >
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      <motion.span
                        whileHover={{ x: 5 }}
                        style={{ color: COLORS.blue }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div
              className="border-t p-4"
              style={{ borderColor: COLORS.border }}
            >
              <Link
                to="/iph"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold text-white shadow-lg"
                style={{
                  background: COLORS.blue,
                  boxShadow: `0 15px 40px ${COLORS.blue}35`,
                }}
              >
                Explore iPhone
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative px-6 pb-20 pt-40">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.p
              animate={{
                letterSpacing: ["0.3em", "0.42em", "0.3em"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xs uppercase"
              style={{ color: COLORS.blue }}
            >
              AppleHub Support
            </motion.p>

            <h1 className="mt-5 text-5xl font-black tracking-tighter md:text-7xl">
              Problems?
              <br />
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-[#30AFFF] via-[#17324D] to-[#92EEFF] bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Let's solve them.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: COLORS.textLight }}
            >
              Common iPhone and Mac problems explained simply. Find out why a
              problem happens and what you can do to solve it.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="mt-10 max-w-2xl"
          >
            <motion.div
              whileHover={{
                y: -4,
                scale: 1.01,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="group flex items-center rounded-2xl border bg-white/80 px-5 py-4 shadow-sm backdrop-blur-xl"
              style={{
                borderColor: COLORS.border,
                boxShadow: `0 15px 50px ${COLORS.blue}12`,
              }}
            >
              <motion.span
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mr-3 text-xl"
                style={{ color: COLORS.blue }}
              >
                ⌕
              </motion.span>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search a problem..."
                className="w-full bg-transparent text-sm outline-none placeholder:opacity-50"
                style={{ color: COLORS.text }}
              />

              {search && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  onClick={() => setSearch("")}
                  className="text-xl"
                  style={{ color: COLORS.textLight }}
                >
                  ×
                </motion.button>
              )}
            </motion.div>
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-3">
            {devices.map((device, index) => (
              <motion.button
                key={device}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45 + index * 0.08,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                onClick={() => {
                  setActiveDevice(device);
                  setOpenId(null);
                }}
                className="rounded-full border px-6 py-3 text-sm font-medium transition"
                style={{
                  borderColor:
                    activeDevice === device ? COLORS.blue : COLORS.border,
                  background:
                    activeDevice === device ? COLORS.blue : COLORS.white,
                  color:
                    activeDevice === device ? COLORS.white : COLORS.textLight,
                  boxShadow:
                    activeDevice === device
                      ? `0 10px 30px ${COLORS.blue}30`
                      : "none",
                }}
              >
                {device}
              </motion.button>
            ))}
          </div>

          <motion.p
            key={filteredProblems.length}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-6 text-xs uppercase tracking-[0.25em]"
            style={{ color: COLORS.textLight }}
          >
            {filteredProblems.length} problems found
          </motion.p>
        </div>
      </section>

      <section className="relative px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          {filteredProblems.length === 0 ? (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                rotateX: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="rounded-[30px] border bg-white/80 p-16 text-center shadow-xl backdrop-blur-xl"
              style={{
                borderColor: COLORS.border,
                transformPerspective: 1000,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="text-5xl"
              >
                ⌕
              </motion.div>

              <h2 className="mt-6 text-2xl font-bold">No problem found</h2>

              <p className="mt-3" style={{ color: COLORS.textLight }}>
                Try another search term.
              </p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              onPointerMove={handlePointerMove}
              onPointerLeave={resetPointer}
              style={{
                perspective: 1600,
              }}
            >
              {filteredProblems.map((item, index) => {
                const isOpen = openId === item.id;

                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 60,
                      scale: 0.94,
                      rotateX: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                    }}
                    transition={{
                      delay: index * 0.055,
                      duration: 0.65,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.025,
                      rotateX: 3,
                      rotateY: index % 2 === 0 ? -2 : 2,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      transformPerspective: 1200,
                      borderColor: COLORS.border,
                      background: `${COLORS.white}E8`,
                      boxShadow: `0 20px 60px ${COLORS.blue}10`,
                    }}
                    className="group relative overflow-hidden rounded-[28px] border backdrop-blur-xl"
                  >
                    <motion.div
                      className="pointer-events-none absolute inset-y-0 -left-[70%] w-1/3 rotate-12 blur-xl"
                      animate={{
                        x: ["0%", "520%"],
                      }}
                      transition={{
                        duration: 4.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "linear",
                      }}
                      style={{
                        background: `linear-gradient(90deg, transparent, ${COLORS.white}CC, transparent)`,
                      }}
                    />

                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl"
                      style={{
                        background: COLORS.cyan,
                      }}
                    />

                    <div className="relative p-7">
                      <div className="flex items-center justify-between">
                        <motion.div
                          whileHover={{
                            rotateX: 15,
                            rotateY: -15,
                            rotateZ: 5,
                            scale: 1.15,
                            z: 40,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                          }}
                          className="flex h-14 w-14 items-center justify-center rounded-2xl border text-2xl shadow-lg"
                          style={{
                            borderColor: `${COLORS.blue}35`,
                            background: `linear-gradient(145deg, ${COLORS.white}, ${COLORS.softBlue})`,
                            transformStyle: "preserve-3d",
                          }}
                        >
                          {item.icon}
                        </motion.div>

                        <motion.span
                          whileHover={{
                            scale: 1.05,
                          }}
                          className="rounded-full border px-3 py-1.5 text-[9px] uppercase tracking-[0.25em]"
                          style={{
                            borderColor: COLORS.border,
                            color: COLORS.textLight,
                            background: COLORS.soft,
                          }}
                        >
                          {item.device}
                        </motion.span>
                      </div>

                      <motion.h2
                        layout
                        className="mt-7 text-xl font-bold leading-tight"
                        style={{ color: COLORS.text }}
                      >
                        {item.question}
                      </motion.h2>

                      <div className="mt-6">
                        <p
                          className="text-[9px] uppercase tracking-[0.3em]"
                          style={{ color: COLORS.blue }}
                        >
                          Why it happens
                        </p>

                        <p
                          className="mt-2 text-sm leading-relaxed"
                          style={{ color: COLORS.textLight }}
                        >
                          {item.problem}
                        </p>
                      </div>

                      <motion.button
                        whileHover={{
                          scale: 1.015,
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        className="mt-6 flex w-full items-center justify-between rounded-2xl border p-4 text-left transition"
                        style={{
                          borderColor: isOpen
                            ? `${COLORS.blue}45`
                            : COLORS.border,
                          background: isOpen ? `${COLORS.cyan}35` : COLORS.soft,
                        }}
                      >
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.25em]"
                          style={{ color: COLORS.blue }}
                        >
                          {isOpen ? "Hide solution" : "Show solution"}
                        </span>

                        <motion.span
                          animate={{
                            rotate: isOpen ? 180 : 0,
                            y: isOpen ? 2 : 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 250,
                          }}
                          style={{ color: COLORS.blue }}
                          className="text-lg"
                        >
                          ↓
                        </motion.span>
                      </motion.button>

                      <AnimatePresence mode="wait">
                        {isOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                              y: -10,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              y: -10,
                            }}
                            transition={{
                              duration: 0.4,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <motion.div
                              initial={{
                                scale: 0.96,
                              }}
                              animate={{
                                scale: 1,
                              }}
                              className="mt-3 rounded-2xl border p-4"
                              style={{
                                borderColor: `${COLORS.blue}25`,
                                background: `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.mint}55)`,
                              }}
                            >
                              <p
                                className="text-[9px] uppercase tracking-[0.3em]"
                                style={{ color: COLORS.blue }}
                              >
                                Solution
                              </p>

                              <p
                                className="mt-2 text-sm leading-relaxed"
                                style={{ color: COLORS.text }}
                              >
                                {item.solution}
                              </p>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div
                        className="mt-6 flex items-center justify-between border-t pt-5"
                        style={{
                          borderColor: COLORS.border,
                        }}
                      >
                        <span
                          className="text-xs"
                          style={{ color: COLORS.textLight }}
                        >
                          AppleHub Help
                        </span>

                        <motion.span
                          animate={{
                            x: isOpen ? 6 : 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                          }}
                          style={{ color: COLORS.blue }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          )}

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
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mt-12 overflow-hidden rounded-[32px] border p-8 text-center shadow-xl backdrop-blur-xl md:p-12"
            style={{
              borderColor: COLORS.border,
              background: `linear-gradient(135deg, ${COLORS.white}, ${COLORS.softBlue}, ${COLORS.mint}55)`,
              boxShadow: `0 30px 80px ${COLORS.blue}15`,
            }}
          >
            <motion.div
              animate={{
                x: [-100, 400, -100],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              className="pointer-events-none absolute -top-20 h-40 w-72 rounded-full blur-3xl"
              style={{
                background: `${COLORS.cyan}70`,
              }}
            />

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="pointer-events-none absolute bottom-[-100px] right-[-80px] h-56 w-56 rounded-full blur-3xl"
              style={{
                background: `${COLORS.green}90`,
              }}
            />

            <div className="relative">
              <p
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: COLORS.blue }}
              >
                AppleHub
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                Want to understand your device?
              </h2>

              <p
                className="mx-auto mt-4 max-w-xl text-sm leading-relaxed"
                style={{ color: COLORS.textLight }}
              >
                Explore the anatomy of iPhone and Mac and learn how the hardware
                and software work together.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <motion.div
                  whileHover={{
                    scale: 1.07,
                    y: -4,
                    rotateX: 4,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  style={{
                    transformPerspective: 800,
                  }}
                >
                  <Link
                    to="/iph"
                    className="block rounded-full px-7 py-4 text-sm font-bold text-white shadow-xl"
                    style={{
                      background: COLORS.blue,
                      boxShadow: `0 15px 40px ${COLORS.blue}35`,
                    }}
                  >
                    Explore iPhone →
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.07,
                    y: -4,
                    rotateX: 4,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  style={{
                    transformPerspective: 800,
                  }}
                >
                  <Link
                    to="/mac"
                    className="block rounded-full border bg-white px-7 py-4 text-sm font-bold"
                    style={{
                      borderColor: COLORS.border,
                      color: COLORS.text,
                    }}
                  >
                    Explore Mac →
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer
        className="relative border-t px-6 py-10"
        style={{
          borderColor: COLORS.border,
          background: `${COLORS.white}B8`,
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="font-bold">
              Apple
              <motion.span
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{ color: COLORS.blue }}
              >
                Hub
              </motion.span>
            </p>

            <p className="mt-1 text-xs" style={{ color: COLORS.textLight }}>
              Understand what's inside.
            </p>
          </div>

          <p className="text-xs" style={{ color: COLORS.textLight }}>
            © 2026 AppleHub. Educational project.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Guides;
