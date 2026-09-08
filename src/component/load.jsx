import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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

const stages = [
  {
    min: 0,
    max: 12,
    code: "WAKE",
    title: "WAKING CORE",
    description: "Initializing digital environment",
  },
  {
    min: 12,
    max: 25,
    code: "SCAN",
    title: "SCANNING",
    description: "Mapping interface architecture",
  },
  {
    min: 25,
    max: 40,
    code: "CORE",
    title: "CORE ONLINE",
    description: "Activating AppleHub engine",
  },
  {
    min: 40,
    max: 55,
    code: "SYNC",
    title: "SYNCHRONIZING",
    description: "Connecting digital modules",
  },
  {
    min: 55,
    max: 70,
    code: "BUILD",
    title: "BUILDING",
    description: "Constructing experience layer",
  },
  {
    min: 70,
    max: 85,
    code: "VERIFY",
    title: "VERIFYING",
    description: "Checking system integrity",
  },
  {
    min: 85,
    max: 96,
    code: "EVOLVE",
    title: "EVOLVING",
    description: "Final identity formation",
  },
  {
    min: 96,
    max: 101,
    code: "ONLINE",
    title: "SYSTEM ONLINE",
    description: "AppleHub is ready",
  },
];

const binaryData = [
  "01001101",
  "10110110",
  "00110101",
  "11001001",
  "01101010",
  "10011001",
  "11100010",
  "01010111",
];

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${(i * 37) % 100}%`,
      top: `${(i * 67) % 100}%`,
      size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
      duration: 2 + (i % 5),
      delay: (i % 8) * 0.3,
    }));
  }, []);

  useEffect(() => {
    const duration = 6000;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percentage = Math.min(Math.floor((elapsed / duration) * 100), 100);

      setProgress(percentage);

      if (percentage >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setShow(false);

          setTimeout(() => {
            if (typeof onComplete === "function") {
              onComplete();
            }
          }, 900);
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  const currentStage =
    stages.find((stage) => progress >= stage.min && progress < stage.max) ||
    stages[stages.length - 1];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: "blur(25px)",
          }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[99999] overflow-hidden bg-[#06111A] text-white"
        >
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at 20% 20%,
                  rgba(48,175,255,0.22),
                  transparent 30%
                ),
                radial-gradient(
                  circle at 80% 25%,
                  rgba(146,238,255,0.20),
                  transparent 30%
                ),
                radial-gradient(
                  circle at 50% 90%,
                  rgba(196,247,202,0.18),
                  transparent 35%
                )
              `,
              backgroundSize: "150% 150%",
            }}
          />

          <motion.div
            animate={{
              backgroundPosition: ["0px 0px", "55px 55px"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(146,238,255,0.22) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(146,238,255,0.22) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "55px 55px",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 10%, rgba(2,10,16,0.88) 90%)",
            }}
          />

          <motion.div
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.08, 0.25, 0.08],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
            style={{
              background: `linear-gradient(
                90deg,
                ${COLORS.blue}55,
                ${COLORS.cyan}55,
                ${COLORS.mint}55
              )`,
            }}
          />

          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 0.9, 0],
                scale: [0, 1, 0],
                y: [-20, 20, -20],
                x: [0, 10, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                background: `linear-gradient(
                  90deg,
                  ${COLORS.blue},
                  ${COLORS.cyan},
                  ${COLORS.mint}
                )`,
                boxShadow: `0 0 12px ${COLORS.blue}AA`,
              }}
              className="absolute rounded-full"
            />
          ))}

          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-white/[0.07]"
              style={{
                borderTopColor: `${COLORS.blue}99`,
                borderRightColor: `${COLORS.cyan}66`,
              }}
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[45px] rounded-full border border-white/[0.06]"
              style={{
                borderRightColor: `${COLORS.cyan}99`,
              }}
            />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[90px] rounded-full border border-white/[0.07]"
              style={{
                borderBottomColor: `${COLORS.mint}AA`,
              }}
            />

            <div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
              style={{
                background: `linear-gradient(
                  to bottom,
                  transparent,
                  ${COLORS.cyan}55,
                  transparent
                )`,
              }}
            />

            <div
              className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2"
              style={{
                background: `linear-gradient(
                  to right,
                  transparent,
                  ${COLORS.blue}55,
                  transparent
                )`,
              }}
            />
          </div>

          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2">
            {[
              {
                position: "top-0 left-1/2",
                color: COLORS.blue,
              },
              {
                position: "right-0 top-1/2",
                color: COLORS.cyan,
              },
              {
                position: "bottom-0 left-1/2",
                color: COLORS.mint,
              },
              {
                position: "left-0 top-1/2",
                color: COLORS.green,
              },
            ].map((node, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [0.6, 1.5, 0.6],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.3,
                  repeat: Infinity,
                }}
                style={{
                  backgroundColor: node.color,
                  boxShadow: `0 0 20px ${node.color}`,
                }}
                className={`absolute ${node.position} h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full`}
              />
            ))}
          </div>

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.2, 0.45, 0.2],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-24 rounded-full blur-[70px]"
              style={{
                background: `linear-gradient(
                  90deg,
                  ${COLORS.blue}55,
                  ${COLORS.cyan}55,
                  ${COLORS.mint}55
                )`,
              }}
            />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-14 rounded-full border"
              style={{
                borderColor: `${COLORS.blue}55`,
              }}
            >
              <span
                className="absolute left-1/2 -top-1 h-2 w-2 rounded-full"
                style={{
                  backgroundColor: COLORS.blue,
                  boxShadow: `0 0 15px ${COLORS.blue}`,
                }}
              />
            </motion.div>

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-10 rounded-full border"
              style={{
                borderColor: `${COLORS.cyan}44`,
              }}
            >
              <span
                className="absolute right-0 top-1/2 h-2 w-2 rounded-full"
                style={{
                  backgroundColor: COLORS.cyan,
                  boxShadow: `0 0 15px ${COLORS.cyan}`,
                }}
              />
            </motion.div>

            <motion.div
              animate={{
                y: [-8, 8, -8],
                rotate: [-10, 10, -10],
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-16 top-2 text-xl"
              style={{
                color: COLORS.cyan,
                filter: `drop-shadow(0 0 10px ${COLORS.cyan})`,
              }}
            >
              ♥
            </motion.div>

            <motion.div
              animate={{
                y: [8, -8, 8],
                rotate: [10, -10, 10],
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-16 top-16 text-lg"
              style={{
                color: COLORS.green,
                filter: `drop-shadow(0 0 10px ${COLORS.green})`,
              }}
            >
              ✦
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.4,
                y: 100,
                rotateY: 70,
              }}
              animate={{
                opacity: 1,
                scale: [1, 1.03, 1],
                y: [0, -5, 0],
                rotateY: 0,
              }}
              transition={{
                opacity: {
                  duration: 1,
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateY: {
                  duration: 1.8,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              className="relative h-[220px] w-[110px] rounded-[30px] border-[3px] p-[5px]"
              style={{
                borderColor: `${COLORS.cyan}CC`,
                background: `linear-gradient(
                  135deg,
                  ${COLORS.cyan},
                  ${COLORS.blue},
                  ${COLORS.mint}
                )`,
                boxShadow: `
                  0 0 60px ${COLORS.blue}66,
                  0 0 100px ${COLORS.cyan}44
                `,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-[#061018]">
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      radial-gradient(
                        circle at 30% 20%,
                        ${COLORS.blue},
                        transparent 30%
                      ),
                      radial-gradient(
                        circle at 80% 35%,
                        ${COLORS.cyan},
                        transparent 35%
                      ),
                      radial-gradient(
                        circle at 40% 80%,
                        ${COLORS.mint},
                        transparent 35%
                      ),
                      radial-gradient(
                        circle at 80% 90%,
                        ${COLORS.green},
                        transparent 30%
                      )
                    `,
                  }}
                />

                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

                <motion.div
                  animate={{
                    width: ["35px", "43px", "35px"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-2 z-30 h-[11px] -translate-x-1/2 rounded-full bg-black"
                  style={{
                    boxShadow: `0 0 8px ${COLORS.cyan}66`,
                  }}
                />

                <div
                  className="absolute right-[9px] top-[5px] z-40 h-[3px] w-[3px] rounded-full"
                  style={{
                    backgroundColor: COLORS.cyan,
                    boxShadow: `0 0 5px ${COLORS.cyan}`,
                  }}
                />

                <div className="relative z-10 flex h-full flex-col items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 20, -20, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="mb-1 text-sm"
                    style={{
                      color: COLORS.green,
                      filter: `drop-shadow(0 0 8px ${COLORS.green})`,
                    }}
                  >
                    ✦
                  </motion.div>

                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: [0, 1.15, 1],
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1.5,
                      duration: 0.8,
                    }}
                    className="flex h-[55px] w-[55px] items-center justify-center rounded-full"
                    style={{
                      background: `linear-gradient(
                        135deg,
                        ${COLORS.cyan},
                        ${COLORS.mint},
                        ${COLORS.green}
                      )`,
                      boxShadow: `0 0 30px ${COLORS.cyan}88`,
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="flex justify-center gap-3 text-[9px]"
                        style={{
                          color: COLORS.text,
                        }}
                      >
                        <motion.span
                          animate={{
                            scaleY: [1, 0.2, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        >
                          ●
                        </motion.span>

                        <motion.span
                          animate={{
                            scaleY: [1, 0.2, 1],
                          }}
                          transition={{
                            duration: 3,
                            delay: 0.1,
                            repeat: Infinity,
                          }}
                        >
                          ●
                        </motion.span>
                      </div>

                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                        className="mt-1 text-[9px]"
                        style={{
                          color: COLORS.blue,
                        }}
                      >
                        ♡
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="mt-4 font-mono text-[6px] font-bold tracking-[0.3em]"
                    style={{
                      color: COLORS.white,
                      textShadow: `0 0 8px ${COLORS.cyan}`,
                    }}
                  >
                    APPLEHUB
                  </motion.div>

                  <div className="mt-3 flex gap-1">
                    {[0, 1, 2].map((item) => (
                      <motion.span
                        key={item}
                        animate={{
                          y: [0, -4, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 0.8,
                          delay: item * 0.2,
                          repeat: Infinity,
                        }}
                        className="h-1 w-1 rounded-full"
                        style={{
                          backgroundColor: COLORS.white,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={{
                    y: ["-20%", "120%"],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-0 top-0 z-20 h-[3px] w-full"
                  style={{
                    background: `linear-gradient(
                      90deg,
                      transparent,
                      ${COLORS.blue},
                      ${COLORS.white},
                      ${COLORS.cyan},
                      transparent
                    )`,
                    boxShadow: `0 0 15px ${COLORS.blue}`,
                  }}
                />

                <div className="absolute bottom-2 left-1/2 z-30 h-[3px] w-[30px] -translate-x-1/2 rounded-full bg-white/80" />
              </div>

              <div
                className="absolute -right-[5px] top-[65px] h-[35px] w-[3px] rounded-full"
                style={{
                  backgroundColor: `${COLORS.cyan}BB`,
                }}
              />

              <div
                className="absolute -left-[5px] top-[55px] h-[20px] w-[3px] rounded-full"
                style={{
                  backgroundColor: `${COLORS.blue}BB`,
                }}
              />

              <div
                className="absolute -left-[5px] top-[80px] h-[28px] w-[3px] rounded-full"
                style={{
                  backgroundColor: `${COLORS.blue}BB`,
                }}
              />
            </motion.div>

            {[
              {
                x: "-left-10",
                y: "-top-8",
                symbol: "✦",
                color: COLORS.green,
              },
              {
                x: "-right-10",
                y: "-top-4",
                symbol: "✧",
                color: COLORS.cyan,
              },
              {
                x: "-right-14",
                y: "bottom-2",
                symbol: "♥",
                color: COLORS.blue,
              },
              {
                x: "-left-12",
                y: "bottom-8",
                symbol: "✦",
                color: COLORS.mint,
              },
            ].map((item, index) => (
              <motion.span
                key={index}
                animate={{
                  y: [-6, 6, -6],
                  rotate: [0, 20, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2 + index * 0.3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  color: item.color,
                  filter: `drop-shadow(0 0 8px ${item.color})`,
                }}
                className={`absolute ${item.x} ${item.y} text-lg`}
              >
                {item.symbol}
              </motion.span>
            ))}
          </div>

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.35, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-[-30px] rounded-full blur-2xl"
              style={{
                background: `linear-gradient(
                  90deg,
                  ${COLORS.blue}44,
                  ${COLORS.cyan}44,
                  ${COLORS.mint}44
                )`,
              }}
            />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-3 rounded-full border border-dashed"
              style={{
                borderColor: `${COLORS.cyan}66`,
              }}
            />
          </div>

          <div className="absolute left-1/2 top-1/2 z-40 mt-[175px] w-[300px] -translate-x-1/2 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.code}
                initial={{
                  opacity: 0,
                  y: 8,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  filter: "blur(5px)",
                }}
                className="font-mono"
              >
                <div
                  className="text-[9px] tracking-[0.45em]"
                  style={{
                    color: COLORS.cyan,
                  }}
                >
                  {currentStage.code}
                </div>

                <div className="mt-2 text-sm font-semibold tracking-[0.25em] text-white">
                  {currentStage.title}
                </div>

                <div className="mt-1 text-[8px] uppercase tracking-[0.15em] text-white/40">
                  {currentStage.description}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5">
              <div className="flex justify-between font-mono text-[8px] text-white/35">
                <span>PROCESS</span>
                <span>{String(progress).padStart(3, "0")}%</span>
              </div>

              <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{
                    width: `${progress}%`,
                  }}
                  className="h-full"
                  style={{
                    background: `linear-gradient(
                      90deg,
                      ${COLORS.blue},
                      ${COLORS.cyan},
                      ${COLORS.mint}
                    )`,
                    boxShadow: `0 0 15px ${COLORS.blue}`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 font-mono text-[7px] leading-4 lg:block">
            {binaryData.map((item, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.15,
                  repeat: Infinity,
                }}
                style={{
                  color: `${COLORS.cyan}66`,
                }}
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 text-right font-mono text-[7px] leading-4 lg:block">
            <div style={{ color: `${COLORS.cyan}66` }}>APPLE</div>
            <div style={{ color: `${COLORS.cyan}66` }}>HUB_CORE</div>
            <div style={{ color: `${COLORS.cyan}66` }}>NODE_{progress}</div>
            <div style={{ color: `${COLORS.cyan}66` }}>
              SYNC_{progress > 50 ? "OK" : "..."}
            </div>
            <div style={{ color: `${COLORS.cyan}66` }}>BUILD_2026</div>
          </div>

          <div className="absolute left-6 top-6 font-mono text-[8px] uppercase tracking-[0.3em] text-white/50 sm:left-10 sm:top-10">
            APPLEHUB
            <span style={{ color: COLORS.cyan }}> / CORE</span>
          </div>

          <div className="absolute right-6 top-6 text-right font-mono text-[7px] uppercase tracking-[0.2em] text-white/40 sm:right-10 sm:top-10">
            <div>BUILD 2026</div>
            <div className="mt-1">SYS_{currentStage.code}</div>
          </div>

          <div className="absolute bottom-6 left-6 font-mono text-[7px] uppercase tracking-[0.25em] text-white/30 sm:bottom-10 sm:left-10">
            DIGITAL ANATOMY
          </div>

          <motion.div
            animate={{
              opacity: [0.25, 1, 0.25],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
            className="absolute bottom-6 right-6 font-mono text-[7px] uppercase tracking-[0.25em] text-white/30 sm:bottom-10 sm:right-10"
          >
            <span style={{ color: COLORS.cyan }}>●</span> {currentStage.code}
          </motion.div>

          <motion.div
            animate={{
              y: ["-10vh", "110vh"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-0 top-0 h-px w-full"
            style={{
              background: `linear-gradient(
                90deg,
                transparent,
                ${COLORS.cyan}66,
                transparent
              )`,
            }}
          />

          <div
            className="absolute left-5 top-5 h-5 w-5 border-l border-t"
            style={{
              borderColor: `${COLORS.blue}55`,
            }}
          />

          <div
            className="absolute right-5 top-5 h-5 w-5 border-r border-t"
            style={{
              borderColor: `${COLORS.cyan}55`,
            }}
          />

          <div
            className="absolute bottom-5 left-5 h-5 w-5 border-b border-l"
            style={{
              borderColor: `${COLORS.mint}55`,
            }}
          />

          <div
            className="absolute bottom-5 right-5 h-5 w-5 border-b border-r"
            style={{
              borderColor: `${COLORS.blue}55`,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
