import { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

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
    icon: "📱",
    title: "iPhone battery drains quickly",
    description: "Your iPhone battery is losing charge faster than normal.",
    solution:
      "Open Settings → Battery to check battery usage. Disable unnecessary Background App Refresh, reduce screen brightness, and check Battery Health under Settings → Battery → Battery Health & Charging.",
  },
  {
    id: 2,
    device: "iPhone",
    icon: "📶",
    title: "iPhone Wi-Fi keeps disconnecting",
    description: "Your iPhone repeatedly loses its Wi-Fi connection.",
    solution:
      "Forget the Wi-Fi network and reconnect. Go to Settings → Wi-Fi → tap the network → Forget This Network. Restart the router and your iPhone if the problem continues.",
  },
  {
    id: 3,
    device: "iPhone",
    icon: "🔋",
    title: "iPhone is not charging",
    description: "Your iPhone does not charge or charges very slowly.",
    solution:
      "Check the charging cable and adapter for damage. Clean the charging port carefully and try another certified cable or charger. Restart the iPhone and check for software updates.",
  },
  {
    id: 4,
    device: "iPhone",
    icon: "🐌",
    title: "iPhone feels slow",
    description: "Apps open slowly and the device feels less responsive.",
    solution:
      "Restart the iPhone, update iOS, remove unnecessary apps, and keep some free storage available. Check Settings → General → iPhone Storage to identify large files and apps.",
  },
  {
    id: 5,
    device: "iPhone",
    icon: "📷",
    title: "iPhone camera is blurry",
    description: "Photos or videos appear blurry or the camera cannot focus.",
    solution:
      "Clean the camera lens with a soft microfiber cloth. Remove any camera protector that may interfere with focus. Restart the device and test the camera again.",
  },
  {
    id: 6,
    device: "iPhone",
    icon: "🔊",
    title: "iPhone speaker has no sound",
    description: "You cannot hear sound from the built-in speaker.",
    solution:
      "Check the volume level and make sure Silent Mode is disabled. Disconnect Bluetooth devices and check whether the speaker openings are blocked.",
  },
  {
    id: 7,
    device: "iPhone",
    icon: "🌡️",
    title: "iPhone is overheating",
    description: "The device becomes unusually hot during normal use.",
    solution:
      "Close intensive apps, remove the case temporarily, avoid direct sunlight, and stop charging while the device is extremely hot. Allow it to cool before continuing use.",
  },
  {
    id: 8,
    device: "iPhone",
    icon: "🔐",
    title: "Face ID is not working",
    description: "Face ID does not recognize your face correctly.",
    solution:
      "Make sure the TrueDepth camera is clean and unobstructed. Check Settings → Face ID & Passcode. If necessary, reset Face ID and configure it again.",
  },
  {
    id: 9,
    device: "Mac",
    icon: "💻",
    title: "MacBook is running slowly",
    description: "Applications take longer to open and macOS feels sluggish.",
    solution:
      "Restart your Mac, close unused applications, check Activity Monitor, and free storage space. Remove unnecessary startup applications from System Settings → General → Login Items.",
  },
  {
    id: 10,
    device: "Mac",
    icon: "🌐",
    title: "Mac Wi-Fi is unstable",
    description: "Your Mac frequently disconnects from wireless networks.",
    solution:
      "Turn Wi-Fi off and on again. Forget the network and reconnect. Restart your router and Mac. Also check whether macOS has pending updates.",
  },
  {
    id: 11,
    device: "Mac",
    icon: "🔋",
    title: "MacBook battery drains fast",
    description: "Your MacBook battery does not last as long as expected.",
    solution:
      "Open System Settings → Battery to review usage. Reduce screen brightness, close high-energy applications, and enable Low Power Mode when appropriate.",
  },
  {
    id: 12,
    device: "Mac",
    icon: "🧠",
    title: "Mac memory is full",
    description: "The Mac shows warnings about available memory.",
    solution:
      "Open Activity Monitor → Memory and identify applications consuming excessive RAM. Close unnecessary applications and restart the Mac if memory pressure remains high.",
  },
  {
    id: 13,
    device: "Mac",
    icon: "💾",
    title: "Mac storage is almost full",
    description: "There is not enough free storage available.",
    solution:
      "Open System Settings → General → Storage. Remove unused applications, large downloads, old files, and empty the Trash.",
  },
  {
    id: 14,
    device: "Mac",
    icon: "⌨️",
    title: "Mac keyboard is not responding",
    description: "Some or all keyboard keys do not work correctly.",
    solution:
      "Reconnect the keyboard if it is wireless, check Bluetooth, and test another keyboard if available. Restart the Mac and install any available macOS updates.",
  },
  {
    id: 15,
    device: "Mac",
    icon: "🖥️",
    title: "External display not detected",
    description: "Your Mac does not recognize an external monitor.",
    solution:
      "Check the cable and adapter, reconnect the display, and open System Settings → Displays. Restart the Mac if the display remains unavailable.",
  },
  {
    id: 16,
    device: "Mac",
    icon: "🔄",
    title: "macOS update is stuck",
    description: "A macOS update appears frozen or takes unusually long.",
    solution:
      "Keep the Mac connected to power and allow the update time to complete. If it is genuinely frozen, restart the Mac and try the update again.",
  },
];

const devices = ["All", "iPhone", "Mac"];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
    filter: "blur(8px)",
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: index * 0.055,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function Guides() {
  const [activeDevice, setActiveDevice] = useState("All");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 22,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 22,
    mass: 0.8,
  });

  const heroRotateX = useTransform(smoothY, [-1, 1], [3, -3]);
  const heroRotateY = useTransform(smoothX, [-1, 1], [-4, 4]);

  const heroX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const heroY = useTransform(smoothY, [-1, 1], [-10, 10]);

  const glowX = useTransform(smoothX, [-1, 1], ["25%", "75%"]);
  const glowY = useTransform(smoothY, [-1, 1], ["25%", "75%"]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const resetPointer = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchesDevice =
        activeDevice === "All" || problem.device === activeDevice;

      const text = `
        ${problem.title}
        ${problem.description}
        ${problem.device}
      `.toLowerCase();

      const matchesSearch = text.includes(search.toLowerCase());

      return matchesDevice && matchesSearch;
    });
  }, [activeDevice, search]);

  return (
    <main
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 10% 5%, ${COLORS.cyan}38, transparent 28%),
          radial-gradient(circle at 90% 20%, ${COLORS.green}30, transparent 25%),
          linear-gradient(180deg, ${COLORS.white}, ${COLORS.soft})
        `,
        color: COLORS.text,
      }}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          style={{
            x: heroX,
            y: heroY,
          }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full blur-3xl"
        >
          <div
            className="h-full w-full rounded-full opacity-25"
            style={{
              background: COLORS.cyan,
            }}
          />
        </motion.div>

        <motion.div
          style={{
            x: heroX,
            y: heroY,
          }}
          className="absolute -right-32 top-[45%] h-80 w-80 rounded-full blur-3xl"
        >
          <div
            className="h-full w-full rounded-full opacity-20"
            style={{
              background: COLORS.green,
            }}
          />
        </motion.div>
      </div>

      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em]"
              style={{
                background: COLORS.softBlue,
                color: COLORS.blue,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full"
                style={{
                  background: COLORS.blue,
                }}
              />
              Smart troubleshooting
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
                filter: "blur(12px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
            >
              Fix it.
              <br />
              <span
                style={{
                  background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.cyan})`,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Understand it.
              </span>
            </motion.h1>

            <motion.p
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
                delay: 0.3,
              }}
              className="mt-7 max-w-2xl text-base leading-8 sm:text-lg"
              style={{
                color: COLORS.textLight,
              }}
            >
              Find simple and practical solutions for common iPhone and Mac
              problems.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="relative mt-9 max-w-2xl"
            >
              <motion.div
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -inset-2 rounded-[30px] blur-2xl"
                style={{
                  background: COLORS.cyan,
                }}
              />

              <motion.div
                whileFocus={{
                  scale: 1.01,
                }}
                className="relative flex items-center rounded-3xl p-2"
                style={{
                  background: `${COLORS.white}F5`,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: `0 25px 70px ${COLORS.blue}12`,
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-xl"
                  style={{
                    background: COLORS.softBlue,
                  }}
                >
                  🔎
                </motion.div>

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search a problem..."
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm font-semibold outline-none sm:text-base"
                  style={{
                    color: COLORS.text,
                  }}
                />

                <AnimatePresence>
                  {search && (
                    <motion.button
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      whileTap={{
                        scale: 0.8,
                      }}
                      onClick={() => setSearch("")}
                      className="mr-2 flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{
                        background: COLORS.softBlue,
                        color: COLORS.textLight,
                      }}
                    >
                      ✕
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            style={{
              rotateX: heroRotateX,
              rotateY: heroRotateY,
              x: heroX,
              y: heroY,
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
            }}
            className="relative mx-auto h-[350px] w-full max-w-[440px]"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                borderColor: `${COLORS.blue}35`,
              }}
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                borderColor: `${COLORS.cyan}55`,
              }}
            />

            <motion.div
              style={{
                left: glowX,
                top: glowY,
              }}
              className="absolute h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            >
              <div
                className="h-full w-full rounded-full opacity-40"
                style={{
                  background: COLORS.cyan,
                }}
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
                rotateY: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
              }}
              transition={{
                duration: 1.1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[35px]"
              style={{
                background: `linear-gradient(145deg, ${COLORS.white}, ${COLORS.softBlue})`,
                border: `1px solid ${COLORS.border}`,
                boxShadow: `
                  0 30px 80px ${COLORS.blue}25,
                  inset 0 0 30px ${COLORS.cyan}25
                `,
                transform: "translateZ(80px)",
              }}
            >
              <motion.span
                animate={{
                  opacity: [0.75, 1, 0.75],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-5xl font-black"
              >
                
              </motion.span>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
                y: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
              className="absolute left-[2%] top-[12%] flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
              style={{
                background: COLORS.white,
                border: `1px solid ${COLORS.border}`,
                boxShadow: `0 18px 45px ${COLORS.blue}15`,
                transform: "translateZ(100px)",
              }}
            >
              📱
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
                y: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
              className="absolute bottom-[10%] right-[2%] flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
              style={{
                background: COLORS.white,
                border: `1px solid ${COLORS.border}`,
                boxShadow: `0 18px 45px ${COLORS.green}25`,
                transform: "translateZ(110px)",
              }}
            >
              💻
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p
              className="text-xs font-black uppercase tracking-[0.2em]"
              style={{
                color: COLORS.blue,
              }}
            >
              Browse guides
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Find your solution
            </h2>
          </div>

          <div
            className="flex w-fit gap-2 rounded-2xl p-2"
            style={{
              background: COLORS.white,
              border: `1px solid ${COLORS.border}`,
            }}
          >
            {devices.map((device) => {
              const active = activeDevice === device;

              return (
                <motion.button
                  key={device}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  onClick={() => {
                    setActiveDevice(device);
                    setOpenId(null);
                  }}
                  className="relative rounded-xl px-4 py-2 text-sm font-black"
                  style={{
                    color: active ? COLORS.blue : COLORS.textLight,
                  }}
                >
                  {active && (
                    <motion.div
                      layoutId="filterActive"
                      className="absolute inset-0 -z-10 rounded-xl"
                      style={{
                        background: COLORS.softBlue,
                        border: `1px solid ${COLORS.border}`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  {device}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 lg:px-8">
        <AnimatePresence mode="popLayout">
          {filteredProblems.length > 0 ? (
            <motion.div
              layout
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProblems.map((problem, index) => {
                const isOpen = openId === problem.id;

                return (
                  <motion.article
                    layout
                    key={problem.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                      filter: "blur(6px)",
                      transition: {
                        duration: 0.25,
                      },
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.015,
                      rotateX: 2,
                      rotateY: index % 2 === 0 ? -1.5 : 1.5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 22,
                    }}
                    style={{
                      transformPerspective: 1200,
                      transformStyle: "preserve-3d",
                      background: `${COLORS.white}F2`,
                      border: `1px solid ${
                        isOpen ? COLORS.blue + "55" : COLORS.border
                      }`,
                      boxShadow: isOpen
                        ? `0 25px 65px ${COLORS.blue}18`
                        : `0 15px 45px ${COLORS.blue}09`,
                    }}
                    className="relative overflow-hidden rounded-[30px]"
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileHover={{
                        opacity: 1,
                        scale: 1,
                      }}
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl"
                      style={{
                        background:
                          problem.device === "iPhone"
                            ? COLORS.cyan
                            : COLORS.green,
                      }}
                    />

                    <div className="relative p-6">
                      <div className="flex items-start justify-between gap-4">
                        <motion.div
                          whileHover={{
                            rotateZ: 4,
                            scale: 1.08,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                          }}
                          className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl"
                          style={{
                            background:
                              problem.device === "iPhone"
                                ? COLORS.softBlue
                                : COLORS.mint,
                            border: `1px solid ${COLORS.border}`,
                            boxShadow: `0 12px 30px ${COLORS.blue}0D`,
                          }}
                        >
                          {problem.icon}
                        </motion.div>

                        <span
                          className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em]"
                          style={{
                            color:
                              problem.device === "iPhone"
                                ? COLORS.blue
                                : "#4B8B5B",
                            background:
                              problem.device === "iPhone"
                                ? COLORS.softBlue
                                : COLORS.mint,
                          }}
                        >
                          {problem.device}
                        </span>
                      </div>

                      <motion.h3
                        layout
                        className="mt-6 text-xl font-black leading-tight"
                      >
                        {problem.title}
                      </motion.h3>

                      <p
                        className="mt-3 text-sm leading-7"
                        style={{
                          color: COLORS.textLight,
                        }}
                      >
                        {problem.description}
                      </p>

                      <motion.button
                        whileHover={{
                          x: 3,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        onClick={() => setOpenId(isOpen ? null : problem.id)}
                        className="mt-6 flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-black"
                        style={{
                          background: isOpen ? COLORS.blue : COLORS.softBlue,
                          color: isOpen ? COLORS.white : COLORS.blue,
                        }}
                      >
                        <span>
                          {isOpen ? "Hide solution" : "View solution"}
                        </span>

                        <motion.span
                          animate={{
                            rotate: isOpen ? 180 : 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                        >
                          ↓
                        </motion.span>
                      </motion.button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <motion.div
                              initial={{
                                y: -8,
                                opacity: 0,
                                filter: "blur(5px)",
                              }}
                              animate={{
                                y: 0,
                                opacity: 1,
                                filter: "blur(0px)",
                              }}
                              transition={{
                                duration: 0.35,
                              }}
                              className="mt-4 rounded-2xl p-5"
                              style={{
                                background: `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.mint}60)`,
                                border: `1px solid ${COLORS.border}`,
                              }}
                            >
                              <div
                                className="mb-3 text-[10px] font-black uppercase tracking-[0.16em]"
                                style={{
                                  color: COLORS.blue,
                                }}
                              >
                                Recommended solution
                              </div>

                              <p
                                className="text-sm leading-7"
                                style={{
                                  color: COLORS.text,
                                }}
                              >
                                {problem.solution}
                              </p>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="rounded-[35px] p-12 text-center"
              style={{
                background: COLORS.white,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl text-4xl"
                style={{
                  background: COLORS.softBlue,
                }}
              >
                🔍
              </motion.div>

              <h3 className="mt-6 text-2xl font-black">No guide found</h3>

              <p
                className="mt-3 text-sm"
                style={{
                  color: COLORS.textLight,
                }}
              >
                Try another search term or device.
              </p>

              <motion.button
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => {
                  setSearch("");
                  setActiveDevice("All");
                }}
                className="mt-6 rounded-2xl px-6 py-3 text-sm font-black text-white"
                style={{
                  background: COLORS.blue,
                  boxShadow: `0 15px 35px ${COLORS.blue}30`,
                }}
              >
                Reset filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-[40px] p-8 sm:p-12 lg:p-16"
          style={{
            background: `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.mint}70)`,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full border"
            style={{
              borderColor: `${COLORS.blue}30`,
            }}
          />

          <div className="relative">
            <p
              className="text-xs font-black uppercase tracking-[0.2em]"
              style={{
                color: COLORS.blue,
              }}
            >
              Keep exploring
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
              Your Apple device has a problem?
              <br />
              <span
                style={{
                  color: COLORS.blue,
                }}
              >
                Start with the right guide.
              </span>
            </h2>

            <p
              className="mt-5 max-w-2xl text-sm leading-7"
              style={{
                color: COLORS.textLight,
              }}
            >
              AppleHub gives you simple explanations and useful troubleshooting
              steps without unnecessary complexity.
            </p>
          </div>
        </motion.div>
      </section>

      <footer
        className="border-t"
        style={{
          background: COLORS.white,
          borderColor: COLORS.border,
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-8 lg:px-8">
          <div>
            <div className="text-lg font-black">AppleHub</div>

            <p
              className="mt-1 text-xs"
              style={{
                color: COLORS.textLight,
              }}
            >
              Smart technology. Simple solutions.
            </p>
          </div>

          <div
            className="text-xs font-semibold"
            style={{
              color: COLORS.textLight,
            }}
          >
            © {new Date().getFullYear()} AppleHub
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Guides;
