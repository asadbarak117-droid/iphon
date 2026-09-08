import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
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

const features = [
  {
    number: "01",
    title: "Display",
    description:
      "The visual interface engineered to connect you with everything inside the device.",
  },
  {
    number: "02",
    title: "Chip",
    description:
      "A powerful processing architecture designed for performance, intelligence, and efficiency.",
  },
  {
    number: "03",
    title: "Camera",
    description:
      "A precision imaging system combining advanced hardware with computational photography.",
  },
  {
    number: "04",
    title: "Battery",
    description:
      "An energy system carefully engineered to keep every component working together.",
  },
];

const anatomy = [
  {
    name: "Display",
    x: "-270px",
    y: "-120px",
    delay: 0,
  },
  {
    name: "Chip",
    x: "190px",
    y: "-150px",
    delay: 0.12,
  },
  {
    name: "Camera",
    x: "-300px",
    y: "100px",
    delay: 0.24,
  },
  {
    name: "Battery",
    x: "210px",
    y: "120px",
    delay: 0.36,
  },
];

const insideItems = [
  {
    number: "01",
    title: "The Display",
    text: "The first layer you interact with. Millions of pixels respond to touch, light, and color to create an incredibly precise visual experience.",
    detail: "OLED • TOUCH • HDR",
    icon: "◈",
  },
  {
    number: "02",
    title: "The A-Series Chip",
    text: "The brain of the device. CPU, GPU, Neural Engine, and other systems process everything from everyday apps to advanced machine learning.",
    detail: "CPU • GPU • AI",
    icon: "⬡",
  },
  {
    number: "03",
    title: "The Camera System",
    text: "Multiple sensors, lenses, and computational photography work together to turn incoming light into detailed photographs and video.",
    detail: "SENSORS • OPTICS • ISP",
    icon: "◎",
  },
  {
    number: "04",
    title: "The Battery",
    text: "A compact energy source carefully positioned inside the chassis to balance capacity, performance, heat, and space.",
    detail: "ENERGY • THERMALS • POWER",
    icon: "▰",
  },
];

function Home() {
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 90,
    damping: 24,
    mass: 0.5,
  });

  const phoneX = useTransform(smoothMouseX, [-600, 600], [-24, 24]);

  const phoneY = useTransform(smoothMouseY, [-500, 500], [-18, 18]);

  const macX = useTransform(smoothMouseX, [-600, 600], [18, -18]);

  const macY = useTransform(smoothMouseY, [-500, 500], [15, -15]);

  const heroX = useTransform(smoothMouseX, [-600, 600], [-5, 5]);

  const heroY = useTransform(smoothMouseY, [-500, 500], [-5, 5]);

  const lightX = useTransform(smoothMouseX, [-600, 600], ["35%", "65%"]);

  const lightY = useTransform(smoothMouseY, [-500, 500], ["35%", "65%"]);

  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.3],
    [1, 0.9, 0],
  );

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.92]);

  const heroScrollY = useTransform(scrollYProgress, [0, 0.3], [0, -120]);

  const phoneScrollY = useTransform(scrollYProgress, [0, 0.35], [0, -140]);

  const macScrollY = useTransform(scrollYProgress, [0, 0.35], [0, -100]);

  const handleMouseMove = (event) => {
    if (prefersReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - (rect.left + rect.width / 2);

    const y = event.clientY - (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="min-h-screen overflow-hidden bg-[#F7FBFF] text-[#17324D]"
    >
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7FBFF]">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.55]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(48,175,255,0.055) 1px, transparent 1px),
                linear-gradient(90deg, rgba(48,175,255,0.055) 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 85%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 85%)",
            }}
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    opacity: [0.3, 0.55, 0.3],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-12%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#92EEFF]/30 blur-[120px]"
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    opacity: [0.2, 0.45, 0.2],
                    scale: [1.05, 0.9, 1.05],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#D8FFC5]/35 blur-[130px]"
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    opacity: [0.15, 0.35, 0.15],
                    scale: [0.9, 1.05, 0.9],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-20%] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#C4F7CA]/25 blur-[120px]"
          />

          <motion.div
            style={{
              left: lightX,
              top: lightY,
            }}
            className="absolute h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#92EEFF]/15 blur-[100px]"
          />
        </div>

        <motion.div
          style={{
            x: heroX,
            y: heroY,
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-[#30AFFF]/10"
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    rotate: -360,
                  }
            }
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-[8%] top-[8%] h-[84%] w-[84%] rounded-full border border-[#C4F7CA]/20"
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-[18%] top-[18%] h-[64%] w-[64%] rounded-full border border-[#92EEFF]/15"
          />
        </motion.div>

        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroScrollY,
          }}
          className="relative z-30 px-6 pt-16 text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            className="inline-flex items-center gap-3 rounded-full border border-[#DDECF5] bg-white/75 px-5 py-2.5 text-[10px] font-semibold tracking-[0.28em] text-[#62809A] shadow-[0_15px_50px_rgba(23,50,77,0.06)] backdrop-blur-xl"
          >
            <motion.span
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#30AFFF]"
            />
            THE ANATOMY OF APPLE
          </motion.div>

          <div className="mt-9 overflow-hidden">
            <motion.h1
              initial={{
                y: 120,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(4.5rem,12vw,9rem)] font-black leading-[0.8] tracking-[-0.085em] text-[#17324D]"
            >
              Inside
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{
                y: 120,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.15,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-gradient-to-r from-[#30AFFF] via-[#17324D] to-[#30AFFF] bg-[length:200%_auto] bg-clip-text text-[clamp(4.5rem,12vw,9rem)] font-black leading-[0.8] tracking-[-0.085em] text-transparent"
              style={{
                animation: prefersReducedMotion
                  ? "none"
                  : "appleGradient 8s linear infinite",
              }}
            >
              Apple.
            </motion.h1>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto mt-10 max-w-xl text-base leading-8 text-[#62809A] sm:text-lg"
          >
            Go beyond the surface. Discover the architecture, components, and
            technology hidden inside iPhone and Mac.
          </motion.p>

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
              duration: 0.8,
              delay: 0.9,
            }}
            className="mt-9"
          >
            <Link to="/iph">
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.04,
                  boxShadow: "0 25px 60px rgba(48,175,255,0.25)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 22,
                }}
                className="group inline-flex items-center gap-4 rounded-full bg-[#30AFFF] px-7 py-4 font-semibold text-white shadow-[0_15px_40px_rgba(48,175,255,0.18)]"
              >
                Explore the anatomy
                <motion.span
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                >
                  →
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            x: phoneX,
            y: phoneScrollY,
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [-10, 10, -10],
                }
          }
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute bottom-[10%] left-[4%] z-20 hidden lg:block"
        >
          <motion.div
            whileHover={{
              rotateY: 15,
              rotateX: -7,
              scale: 1.035,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
            }}
            style={{
              transformStyle: "preserve-3d",
              rotate: -12,
            }}
            className="relative h-[280px] w-[140px] rounded-[40px] border-[5px] border-[#62809A] bg-[#17324D] p-[4px] shadow-[0_35px_80px_rgba(23,50,77,0.18)]"
          >
            <div className="absolute -left-[8px] top-[72px] h-10 w-[4px] rounded-l-full bg-[#92EEFF]" />

            <div className="absolute -left-[8px] top-[125px] h-14 w-[4px] rounded-l-full bg-[#92EEFF]" />

            <div className="absolute -right-[8px] top-[92px] h-16 w-[4px] rounded-r-full bg-[#C4F7CA]" />

            <div className="relative h-full w-full overflow-hidden rounded-[33px] bg-[#17324D]">
              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        x: [-60, 50, -60],
                        y: [-30, 70, -30],
                      }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-36 w-36 rounded-full bg-[#30AFFF]/30 blur-3xl"
              />

              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        opacity: [0.2, 0.7, 0.2],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 h-1/2 w-full bg-[#C4F7CA]/10 blur-2xl"
              />

              <div className="absolute left-1/2 top-3 h-5 w-14 -translate-x-1/2 rounded-full bg-black" />

              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#92EEFF]/30"
              />

              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#30AFFF] shadow-[0_0_20px_#30AFFF]" />
            </div>

            <motion.div
              whileHover={{
                translateZ: 22,
              }}
              className="absolute -left-4 top-7 flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-[#62809A] bg-[#17324D] shadow-xl"
              style={{
                transform: "translateZ(15px)",
              }}
            >
              <div className="grid grid-cols-2 gap-2">
                <span className="h-4 w-4 rounded-full bg-black ring-1 ring-[#92EEFF]/50" />

                <span className="h-4 w-4 rounded-full bg-black ring-1 ring-[#C4F7CA]/50" />

                <span className="h-4 w-4 rounded-full bg-black ring-1 ring-[#92EEFF]/50" />

                <span className="h-4 w-4 rounded-full bg-[#30AFFF]" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            x: macX,
            y: macScrollY,
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [12, -12, 12],
                }
          }
          transition={{
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute bottom-[11%] right-[3%] z-20 hidden lg:block"
        >
          <motion.div
            whileHover={{
              rotateY: -10,
              rotateX: 5,
              scale: 1.03,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
            }}
            style={{
              transformStyle: "preserve-3d",
              rotate: 3,
            }}
          >
            <div className="rounded-2xl border-[5px] border-[#62809A] bg-[#17324D] p-2 shadow-[0_35px_90px_rgba(23,50,77,0.18)]">
              <div className="relative h-[190px] w-[310px] overflow-hidden rounded-xl bg-[#17324D]">
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          x: [-80, 240, -80],
                          y: [-30, 90, -30],
                        }
                  }
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-40 w-40 rounded-full bg-[#30AFFF]/25 blur-3xl"
                />

                <motion.div
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          x: [180, -80, 180],
                          y: [100, -40, 100],
                        }
                  }
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute h-40 w-40 rounded-full bg-[#C4F7CA]/15 blur-3xl"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            scale: [0.9, 1.05, 0.9],
                            opacity: [0.25, 0.65, 0.25],
                          }
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                    className="h-24 w-24 rounded-full border border-[#92EEFF]/40"
                  />
                </div>

                <div className="absolute bottom-4 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="mx-auto h-[13px] w-[380px] rounded-b-2xl bg-gradient-to-b from-[#DDECF5] to-[#62809A] shadow-xl" />

            <div className="mx-auto h-2 w-28 rounded-full bg-[#62809A]" />
          </motion.div>
        </motion.div>

        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, 7, 0],
                  opacity: [0.5, 1, 0.5],
                }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 text-center text-[#62809A]"
        >
          <p className="mb-2 text-[9px] font-semibold tracking-[0.35em]">
            SCROLL
          </p>

          <span className="text-sm">↓</span>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#17324D] px-6 py-32 text-white sm:py-40">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: [-80, 80, -80],
                    y: [30, -40, 30],
                  }
            }
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-10%] top-[5%] h-[400px] w-[400px] rounded-full bg-[#30AFFF]/15 blur-[120px]"
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: [80, -80, 80],
                    y: [-30, 50, -30],
                  }
            }
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-10%] bottom-[0%] h-[450px] w-[450px] rounded-full bg-[#C4F7CA]/10 blur-[130px]"
          />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(146,238,255,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(146,238,255,0.4) 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#30AFFF]" />

              <span className="text-xs font-semibold tracking-[0.35em] text-[#92EEFF]">
                INSIDE THE DEVICE
              </span>
            </div>

            <h2 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl md:text-8xl">
              What is
              <br />
              <span className="text-[#92EEFF]">inside?</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#92EEFF]/60 sm:text-lg">
              An iPhone may look simple from the outside. Inside, thousands of
              carefully engineered components work together in milliseconds.
            </p>
          </motion.div>

          <div className="mt-20 grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative flex min-h-[600px] items-center justify-center">
              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        rotate: 360,
                      }
                }
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[530px] w-[530px] rounded-full border border-[#30AFFF]/15"
              />

              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        rotate: -360,
                      }
                }
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[430px] w-[430px] rounded-full border border-dashed border-[#92EEFF]/10"
              />

              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: [1, 1.08, 1],
                        opacity: [0.15, 0.3, 0.15],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[300px] w-[300px] rounded-full bg-[#30AFFF]/20 blur-[100px]"
              />

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
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: [-8, 8, -8],
                      }
                }
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="relative h-[500px] w-[250px] rounded-[52px] border-[7px] border-[#62809A] bg-[#17324D] p-[7px] shadow-[0_40px_100px_rgba(0,0,0,0.35)]"
              >
                <motion.div
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          opacity: [0.25, 0.65, 0.25],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-2 rounded-[58px] border border-[#30AFFF]/20"
                />

                <div className="absolute -left-[10px] top-[120px] h-12 w-[5px] rounded-l-full bg-[#92EEFF]" />

                <div className="absolute -left-[10px] top-[180px] h-16 w-[5px] rounded-l-full bg-[#92EEFF]" />

                <div className="absolute -right-[10px] top-[150px] h-20 w-[5px] rounded-r-full bg-[#C4F7CA]" />

                <div className="relative h-full w-full overflow-hidden rounded-[43px] bg-[#17324D]">
                  <motion.div
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            x: [-70, 90, -70],
                            y: [-60, 100, -60],
                          }
                    }
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute h-52 w-52 rounded-full bg-[#30AFFF]/20 blur-[70px]"
                  />

                  <motion.div
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            x: [80, -70, 80],
                            y: [100, -40, 100],
                          }
                    }
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute h-48 w-48 rounded-full bg-[#C4F7CA]/10 blur-[70px]"
                  />

                  <div className="absolute left-1/2 top-4 h-6 w-20 -translate-x-1/2 rounded-full bg-black" />

                  <div className="absolute inset-x-6 bottom-8 top-16">
                    <div className="absolute left-0 top-0 h-24 w-full rounded-2xl border border-[#92EEFF]/10 bg-white/[0.025]" />

                    <div className="absolute left-3 top-3 h-16 w-16 rounded-xl border border-[#30AFFF]/20 bg-[#30AFFF]/5" />

                    <div className="absolute right-3 top-3 h-16 w-16 rounded-xl border border-[#C4F7CA]/20 bg-[#C4F7CA]/5" />

                    <motion.div
                      animate={
                        prefersReducedMotion
                          ? {}
                          : {
                              scale: [1, 1.15, 1],
                              opacity: [0.4, 1, 0.4],
                            }
                      }
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="absolute left-1/2 top-[140px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#30AFFF] shadow-[0_0_30px_#30AFFF]"
                    />

                    <div className="absolute left-1/2 top-[140px] h-32 w-px -translate-x-1/2 bg-gradient-to-b from-[#30AFFF]/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 h-24 rounded-2xl border border-[#C4F7CA]/10 bg-[#C4F7CA]/5" />
                  </div>
                </div>

                <motion.div
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          rotate: [0, 360],
                        }
                  }
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-8 top-20 h-16 w-16 rounded-2xl border border-[#92EEFF]/20 bg-[#17324D] p-3 shadow-2xl"
                  style={{
                    transform: "translateZ(30px)",
                  }}
                >
                  <div className="grid grid-cols-2 gap-2">
                    <span className="h-4 w-4 rounded-full bg-black ring-1 ring-[#92EEFF]/40" />

                    <span className="h-4 w-4 rounded-full bg-black ring-1 ring-[#C4F7CA]/40" />

                    <span className="h-4 w-4 rounded-full bg-black ring-1 ring-[#92EEFF]/40" />

                    <span className="h-4 w-4 rounded-full bg-[#30AFFF]" />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.7,
                  type: "spring",
                  stiffness: 200,
                }}
                className="absolute bottom-5 rounded-full border border-[#92EEFF]/15 bg-white/[0.04] px-5 py-2 text-[10px] tracking-[0.25em] text-[#92EEFF] backdrop-blur-xl"
              >
                ENGINEERED IN LAYERS
              </motion.div>
            </div>

            <div className="space-y-5">
              {insideItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-7"
                >
                  <motion.div
                    initial={{
                      x: "-100%",
                    }}
                    whileHover={{
                      x: "100%",
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#92EEFF]/5 to-transparent"
                  />

                  <div className="relative flex gap-5">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#30AFFF]/20 bg-[#30AFFF]/5 text-lg text-[#92EEFF]"
                    >
                      {item.icon}
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-bold tracking-[-0.025em] text-white sm:text-2xl">
                          {item.title}
                        </h3>

                        <span className="text-[10px] font-semibold tracking-[0.2em] text-[#30AFFF]">
                          {item.number}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-[#92EEFF]/55">
                        {item.text}
                      </p>

                      <div className="mt-5 flex items-center gap-2">
                        <span className="h-px w-5 bg-[#30AFFF]/50" />

                        <span className="text-[9px] font-semibold tracking-[0.2em] text-[#92EEFF]/45">
                          {item.detail}
                        </span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileHover={{
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#30AFFF]"
                  />
                </motion.div>
              ))}
            </div>
          </div>

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
            }}
            transition={{
              delay: 0.4,
            }}
            className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-[#92EEFF]">
                ONE DEVICE
              </p>

              <p className="mt-2 text-sm text-[#92EEFF]/40">
                Thousands of engineering decisions.
              </p>
            </div>

            <Link to="/iph">
              <motion.div
                whileHover={{
                  scale: 1.04,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="rounded-full border border-[#30AFFF]/30 bg-[#30AFFF]/10 px-6 py-3 text-sm font-semibold text-[#92EEFF]"
              >
                Explore the iPhone →
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7FBFF] px-6 py-36 sm:py-44">
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [-100, 100, -100],
                  y: [0, -80, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-[#92EEFF]/20 blur-[120px]"
        />

        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [100, -80, 100],
                  y: [40, -40, 40],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[-10%] top-[40%] h-[420px] w-[420px] rounded-full bg-[#D8FFC5]/25 blur-[130px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
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
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-[#62809A]">
              THE ANATOMY
            </p>

            <h2 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] text-[#17324D] sm:text-7xl md:text-8xl">
              Every part
              <br />
              has a purpose.
            </h2>
          </motion.div>

          <div className="mt-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  x: 10,
                }}
                className="group relative flex items-center justify-between gap-8 border-b border-[#DDECF5] py-12"
              >
                <div className="flex min-w-0 items-center gap-6 sm:gap-10">
                  <motion.span
                    whileHover={{
                      scale: 1.15,
                    }}
                    className="text-xs font-semibold text-[#30AFFF]"
                  >
                    {feature.number}
                  </motion.span>

                  <h3 className="truncate text-3xl font-black tracking-[-0.04em] text-[#17324D] sm:text-5xl md:text-6xl">
                    {feature.title}
                  </h3>
                </div>

                <p className="hidden max-w-md text-sm leading-7 text-[#62809A] md:block">
                  {feature.description}
                </p>

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    x: 5,
                  }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#DDECF5] bg-white text-[#30AFFF] shadow-sm"
                >
                  →
                </motion.div>

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="absolute bottom-[-1px] left-0 h-[2px] w-full origin-left bg-[#30AFFF]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#17324D] px-6">
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  rotate: 360,
                }
          }
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[650px] w-[650px] rounded-full border border-[#30AFFF]/15"
        />

        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  rotate: -360,
                }
          }
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[480px] w-[480px] rounded-full border border-[#92EEFF]/10"
        />

        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.15, 0.3, 0.15],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-[380px] w-[380px] rounded-full bg-[#30AFFF]/20 blur-[120px]"
        />

        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [-120, 120, -120],
                  y: [80, -80, 80],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[250px] w-[250px] rounded-full bg-[#C4F7CA]/10 blur-[100px]"
        />

        <div className="relative z-10 text-center">
          <motion.p
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
            }}
            className="text-xs font-semibold tracking-[0.4em] text-[#92EEFF]"
          >
            GO DEEPER
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 text-7xl font-black tracking-[-0.08em] text-white sm:text-8xl md:text-[120px]"
          >
            Explore.
          </motion.h2>

          <motion.p
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
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mx-auto mt-8 max-w-lg text-base leading-7 text-[#92EEFF]/65"
          >
            Discover the technology behind iPhone and Mac, one component at a
            time.
          </motion.p>

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
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link to="/iph">
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="rounded-full bg-[#30AFFF] px-8 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(48,175,255,0.25)]"
              >
                Explore iPhone →
              </motion.div>
            </Link>

            <Link to="/mac">
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="rounded-full border border-[#92EEFF]/25 bg-white/[0.04] px-8 py-4 font-semibold text-white backdrop-blur-xl"
              >
                Explore Mac →
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#DDECF5] bg-[#F7FBFF] py-10 text-center">
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
          className="text-xs tracking-[0.15em] text-[#62809A]"
        >
          APPLEHUB — DISCOVER WHAT IS INSIDE.
        </motion.p>
      </footer>

      <style>{`
        @keyframes appleGradient {
          0% {
            background-position: 0% center;
          }

          50% {
            background-position: 100% center;
          }

          100% {
            background-position: 200% center;
          }
        }
      `}</style>
    </main>
  );
}

export default Home;
