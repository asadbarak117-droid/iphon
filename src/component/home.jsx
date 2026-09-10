import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from "motion/react";
import {
  Smartphone,
  Laptop,
  Cpu,
  Layers3,
  Camera,
  BatteryCharging,
  BookOpen,
  Wrench,
  Info,
  ArrowUpRight,
  ScanLine,
  Atom,
  Database,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  CircuitBoard,
  GraduationCap,
  Microscope,
} from "lucide-react";

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

const objectives = [
  {
    number: "01",
    icon: Microscope,
    title: "Understand",
    description:
      "Understand the architecture, components, and systems that make modern Apple devices work.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Classify",
    description:
      "Separate hardware and software concepts and understand how different layers interact.",
  },
  {
    number: "03",
    icon: CircuitBoard,
    title: "Explore",
    description:
      "Explore processors, displays, cameras, batteries, memory, sensors, operating systems, and more.",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Learn",
    description:
      "Turn complex technology into an accessible visual learning experience for students and curious minds.",
  },
];

const devices = [
  {
    id: "iphone",
    number: "01",
    type: "SMARTPHONE",
    title: "iPhone",
    description:
      "A compact computing system where display technology, silicon, cameras, sensors, power, and software operate as one integrated platform.",
    link: "/iph",
    action: "Explore iPhone",
    icon: Smartphone,
    accent: COLORS.blue,
  },
  {
    id: "mac",
    number: "02",
    type: "PERSONAL COMPUTER",
    title: "MacBook",
    description:
      "A portable computer engineered around processing, memory, storage, display, thermal systems, battery technology, and macOS.",
    link: "/mac",
    action: "Explore MacBook",
    icon: Laptop,
    accent: COLORS.mint,
  },
];

const pages = [
  {
    number: "01",
    title: "Home",
    description: "The entrance to the Apple Anatomy experience.",
    path: "/",
    icon: Atom,
  },
  {
    number: "02",
    title: "iPhone",
    description: "Explore the architecture of Apple's smartphone.",
    path: "/iph",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "MacBook",
    description: "Discover the systems inside Apple's notebook.",
    path: "/mac",
    icon: Laptop,
  },
  {
    number: "04",
    title: "Tools",
    description: "Interactive tools for exploring technology.",
    path: "/tools",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Guides",
    description: "Structured educational material and explanations.",
    path: "/guides",
    icon: BookOpen,
  },
  {
    number: "06",
    title: "About",
    description: "Learn about the project and its creators.",
    path: "/about",
    icon: Info,
  },
];

const systemStats = [
  {
    value: "02",
    label: "DEVICE FAMILIES",
  },
  {
    value: "06",
    label: "MAIN PAGES",
  },
  {
    value: "∞",
    label: "QUESTIONS TO EXPLORE",
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-bold tracking-[0.35em] ${
        light ? "text-[#92EEFF]" : "text-[#62809A]"
      }`}
    >
      <span
        className={`h-px w-10 ${light ? "bg-[#30AFFF]" : "bg-[#30AFFF]"}`}
      />
      <span>{children}</span>
    </div>
  );
}

function IPhoneVisual({ compact = false }) {
  return (
    <motion.div
      whileHover={{
        rotateY: 12,
        rotateX: -7,
        scale: 1.035,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={`relative ${
        compact
          ? "h-[340px] w-[172px] rounded-[40px] border-[6px] p-[5px]"
          : "h-[480px] w-[242px] rounded-[54px] border-[7px] p-[7px]"
      } border-[#62809A] bg-[#17324D] shadow-[0_45px_100px_rgba(0,0,0,0.28)]`}
    >
      <motion.div
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scale: [0.96, 1.03, 0.96],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute ${
          compact ? "-inset-3 rounded-[45px]" : "-inset-4 rounded-[62px]"
        } border border-[#30AFFF]/25`}
      />

      <div
        className={`absolute ${
          compact
            ? "-left-[9px] top-[85px] h-10 w-[4px]"
            : "-left-[11px] top-[125px] h-14 w-[5px]"
        } rounded-l-full bg-[#92EEFF]`}
      />

      <div
        className={`absolute ${
          compact
            ? "-left-[9px] top-[135px] h-12 w-[4px]"
            : "-left-[11px] top-[190px] h-16 w-[5px]"
        } rounded-l-full bg-[#92EEFF]`}
      />

      <div
        className={`absolute ${
          compact
            ? "-right-[9px] top-[110px] h-14 w-[4px]"
            : "-right-[11px] top-[155px] h-20 w-[5px]"
        } rounded-r-full bg-[#C4F7CA]`}
      />

      <div
        className={`relative h-full w-full overflow-hidden ${
          compact ? "rounded-[32px]" : "rounded-[44px]"
        } bg-[#071522]`}
      >
        <motion.div
          animate={{
            x: [-70, 90, -70],
            y: [-40, 100, -40],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-48 w-48 rounded-full bg-[#30AFFF]/30 blur-[65px]"
        />

        <motion.div
          animate={{
            x: [90, -80, 90],
            y: [100, -30, 100],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-44 w-44 rounded-full bg-[#C4F7CA]/15 blur-[65px]"
        />

        <div
          className={`absolute left-1/2 ${
            compact ? "top-3 h-5 w-14" : "top-4 h-6 w-20"
          } -translate-x-1/2 rounded-full bg-black`}
        />

        <div
          className={`absolute ${
            compact ? "inset-x-4 bottom-5 top-12" : "inset-x-6 bottom-8 top-16"
          }`}
        >
          <div className="absolute inset-x-0 top-0 h-24 rounded-2xl border border-[#92EEFF]/10 bg-white/[0.025]" />

          <div className="absolute left-2 top-2 h-14 w-14 rounded-xl border border-[#30AFFF]/20 bg-[#30AFFF]/5" />

          <div className="absolute right-2 top-2 h-14 w-14 rounded-xl border border-[#C4F7CA]/20 bg-[#C4F7CA]/5" />

          <div className="absolute left-0 right-0 top-[105px] grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                animate={{
                  opacity: [0.2, 0.7, 0.2],
                }}
                transition={{
                  duration: 2.4,
                  delay: item * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-10 rounded-lg border border-[#30AFFF]/10 bg-[#30AFFF]/5"
              />
            ))}
          </div>

          <motion.div
            animate={{
              scale: [0.7, 1.4, 0.7],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-[205px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#30AFFF] shadow-[0_0_30px_#30AFFF]"
          />

          <div className="absolute bottom-0 left-0 right-0 h-20 rounded-2xl border border-[#C4F7CA]/10 bg-[#C4F7CA]/5" />
        </div>

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-8 right-6 h-14 w-14 rounded-full border border-[#92EEFF]/20"
        />

        <div className="absolute bottom-5 left-1/2 h-1 w-14 -translate-x-1/2 rounded-full bg-white/20" />
      </div>

      <motion.div
        whileHover={{
          scale: 1.08,
          z: 30,
        }}
        style={{
          transform: "translateZ(28px)",
        }}
        className={`absolute ${
          compact ? "-left-4 top-8" : "-left-6 top-12"
        } flex h-16 w-16 items-center justify-center rounded-2xl border border-[#62809A] bg-[#17324D] shadow-2xl`}
      >
        <div className="grid grid-cols-2 gap-2">
          <span className="h-4 w-4 rounded-full bg-black ring-1 ring-[#92EEFF]/50" />
          <span className="h-4 w-4 rounded-full bg-black ring-1 ring-[#C4F7CA]/50" />
          <span className="h-4 w-4 rounded-full bg-black ring-1 ring-[#92EEFF]/50" />
          <span className="h-4 w-4 rounded-full bg-[#30AFFF]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function MacBookVisual({ compact = false }) {
  return (
    <motion.div
      whileHover={{
        rotateY: -9,
        rotateX: 5,
        scale: 1.035,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      <div
        className={`${
          compact
            ? "w-[330px] rounded-[20px] border-[5px] p-2"
            : "w-[540px] rounded-[26px] border-[6px] p-3"
        } max-w-[82vw] border-[#62809A] bg-[#17324D] shadow-[0_45px_100px_rgba(0,0,0,0.3)]`}
      >
        <div
          className={`relative ${
            compact ? "h-[205px] rounded-[13px]" : "h-[330px] rounded-[17px]"
          } overflow-hidden bg-[#071522]`}
        >
          <motion.div
            animate={{
              x: [-100, 280, -100],
              y: [-50, 100, -50],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-48 w-48 rounded-full bg-[#30AFFF]/25 blur-[70px]"
          />

          <motion.div
            animate={{
              x: [260, -80, 260],
              y: [100, -30, 100],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-52 w-52 rounded-full bg-[#C4F7CA]/15 blur-[75px]"
          />

          <div className="absolute inset-0 grid place-items-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className={`${
                compact ? "h-24 w-24" : "h-36 w-36"
              } rounded-full border border-[#92EEFF]/20`}
            />

            <motion.div
              animate={{
                scale: [0.6, 1, 0.6],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-3 w-3 rounded-full bg-[#30AFFF] shadow-[0_0_30px_#30AFFF]"
            />
          </div>

          <div className="absolute inset-x-6 bottom-5 top-5">
            <div className="grid grid-cols-4 gap-2 opacity-50">
              {Array.from({ length: 12 }).map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    opacity: [0.15, 0.65, 0.15],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: index * 0.1,
                    repeat: Infinity,
                  }}
                  className="h-5 rounded-md border border-[#30AFFF]/10 bg-[#30AFFF]/5"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        whileHover={{
          scaleX: 1.03,
        }}
        className={`mx-auto ${
          compact ? "h-[13px] w-[390px]" : "h-[18px] w-[640px]"
        } max-w-[96vw] rounded-b-2xl bg-gradient-to-b from-[#DDECF5] to-[#62809A] shadow-xl`}
      />

      <div
        className={`mx-auto ${
          compact ? "h-2 w-28" : "h-3 w-40"
        } rounded-full bg-[#62809A]`}
      />
    </motion.div>
  );
}

function Home() {
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 65,
    damping: 24,
    mass: 0.6,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 65,
    damping: 24,
    mass: 0.6,
  });

  const phoneX = useTransform(smoothMouseX, [-700, 700], [-28, 28]);
  const phoneY = useTransform(smoothMouseY, [-500, 500], [-18, 18]);

  const macX = useTransform(smoothMouseX, [-700, 700], [24, -24]);
  const macY = useTransform(smoothMouseY, [-500, 500], [16, -16]);

  const heroX = useTransform(smoothMouseX, [-700, 700], [-5, 5]);
  const heroY = useTransform(smoothMouseY, [-500, 500], [-5, 5]);

  const ringX = useTransform(smoothMouseX, [-700, 700], [-16, 16]);
  const ringY = useTransform(smoothMouseY, [-500, 500], [-12, 12]);

  const lightX = useTransform(smoothMouseX, [-700, 700], ["20%", "80%"]);
  const lightY = useTransform(smoothMouseY, [-500, 500], ["20%", "80%"]);

  const phoneRotateY = useTransform(smoothMouseX, [-700, 700], [-7, 7]);
  const phoneRotateX = useTransform(smoothMouseY, [-500, 500], [6, -6]);

  const macRotateY = useTransform(smoothMouseX, [-700, 700], [6, -6]);
  const macRotateX = useTransform(smoothMouseY, [-500, 500], [-5, 5]);

  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.13, 0.25],
    [1, 0.95, 0],
  );

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);

  const heroScrollY = useTransform(scrollYProgress, [0, 0.28], [0, -120]);

  const handleMouseMove = (event) => {
    if (prefersReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      className="min-h-screen overflow-hidden bg-[#F7FBFF] text-[#17324D]"
    >
      <motion.div
        className="fixed left-0 right-0 top-0 z-[100] h-[2px] origin-left bg-[#30AFFF]"
        style={{
          scaleX: scrollYProgress,
        }}
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7FBFF]">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(48,175,255,0.055) 1px, transparent 1px),
                linear-gradient(90deg, rgba(48,175,255,0.055) 1px, transparent 1px)
              `,
              backgroundSize: "72px 72px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 88%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 88%)",
            }}
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: [-40, 50, -40],
                    y: [-20, 30, -20],
                    scale: [1, 1.08, 1],
                    opacity: [0.25, 0.5, 0.25],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-12%] top-[-10%] h-[550px] w-[550px] rounded-full bg-[#92EEFF]/25 blur-[130px]"
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: [30, -30, 30],
                    y: [10, -30, 10],
                    scale: [1.05, 0.94, 1.05],
                    opacity: [0.18, 0.38, 0.18],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[-12%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#D8FFC5]/30 blur-[140px]"
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [30, -30, 30],
                    scale: [0.9, 1.08, 0.9],
                    opacity: [0.1, 0.28, 0.1],
                  }
            }
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-20%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C4F7CA]/25 blur-[130px]"
          />

          <motion.div
            style={{
              left: lightX,
              top: lightY,
            }}
            className="absolute h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#92EEFF]/15 blur-[110px]"
          />
        </div>

        <motion.div
          style={{
            x: ringX,
            y: ringY,
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 rounded-full border border-[#30AFFF]/10"
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
              duration: 48,
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
              duration: 34,
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
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-[18%] top-[18%] h-[64%] w-[64%] rounded-full border border-dashed border-[#92EEFF]/15"
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
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-[33%] top-[33%] h-[34%] w-[34%] rounded-full border border-[#30AFFF]/10"
          />
        </motion.div>

        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroScrollY,
            x: heroX,
          }}
          className="relative z-30 px-5 pt-16 text-center sm:px-6"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.9,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-flex items-center gap-3 rounded-full border border-[#DDECF5] bg-white/75 px-5 py-2.5 text-[9px] font-bold tracking-[0.3em] text-[#62809A] shadow-[0_15px_50px_rgba(23,50,77,0.06)] backdrop-blur-xl"
          >
            <motion.span
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      scale: [1, 1.7, 1],
                      opacity: [0.4, 1, 0.4],
                    }
              }
              transition={{
                duration: 2.2,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#30AFFF]"
            />
            SCIENTIFIC • TECHNICAL • EDUCATIONAL
          </motion.div>

          <div className="mt-9 overflow-hidden">
            <motion.p
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-xs font-bold tracking-[0.35em] text-[#62809A]"
            >
              APPLE ANATOMY
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 90,
                scale: 0.92,
                filter: "blur(20px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.25,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 text-[clamp(4.1rem,13vw,10rem)] font-black leading-[0.78] tracking-[-0.09em] text-[#17324D]"
            >
              Inside
              <br />
              <motion.span
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        backgroundPosition: [
                          "0% center",
                          "100% center",
                          "0% center",
                        ],
                      }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-[#30AFFF] via-[#17324D] to-[#30AFFF] bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                Apple.
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              delay: 0.7,
            }}
            className="mx-auto mt-9 max-w-2xl text-base leading-8 text-[#62809A] sm:text-lg"
          >
            Apple Anatomy is an interactive educational experience designed to
            reveal the technology behind Apple devices — from physical
            components and processing systems to software and digital
            architecture.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.95,
            }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Link to="/iph">
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.04,
                  boxShadow: "0 25px 60px rgba(48,175,255,0.25)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="flex items-center gap-3 rounded-full bg-[#30AFFF] px-7 py-4 font-semibold text-white"
              >
                Start exploring
                <ArrowUpRight size={17} />
              </motion.div>
            </Link>

            <a href="#project">
              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="flex items-center gap-3 rounded-full border border-[#DDECF5] bg-white/80 px-7 py-4 font-semibold text-[#17324D] backdrop-blur-xl"
              >
                Discover the project
                <ChevronDown size={17} />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: -100,
            y: 100,
            rotate: -18,
            scale: 0.78,
          }}
          animate={
            prefersReducedMotion
              ? {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: -12,
                  scale: 1,
                }
              : {
                  opacity: 1,
                  x: 0,
                  y: [-7, 8, -7],
                  rotate: -12,
                  scale: 1,
                }
          }
          transition={{
            opacity: {
              duration: 1.2,
              delay: 0.9,
            },
            x: {
              duration: 1.3,
              delay: 0.9,
              ease: [0.16, 1, 0.3, 1],
            },
            rotate: {
              duration: 1.3,
              delay: 0.9,
            },
            scale: {
              duration: 1.3,
              delay: 0.9,
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            x: phoneX,
            y: phoneY,
            rotateX: phoneRotateX,
            rotateY: phoneRotateY,
            transformStyle: "preserve-3d",
          }}
          className="absolute bottom-[7%] left-[3%] z-20 hidden lg:block"
        >
          <IPhoneVisual compact />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
            y: 80,
            rotate: 8,
            scale: 0.78,
          }}
          animate={
            prefersReducedMotion
              ? {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 3,
                  scale: 1,
                }
              : {
                  opacity: 1,
                  x: 0,
                  y: [6, -7, 6],
                  rotate: 3,
                  scale: 1,
                }
          }
          transition={{
            opacity: {
              duration: 1.2,
              delay: 1.05,
            },
            x: {
              duration: 1.3,
              delay: 1.05,
              ease: [0.16, 1, 0.3, 1],
            },
            rotate: {
              duration: 1.3,
              delay: 1.05,
            },
            scale: {
              duration: 1.3,
              delay: 1.05,
            },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            x: macX,
            y: macY,
            rotateX: macRotateX,
            rotateY: macRotateY,
            transformStyle: "preserve-3d",
          }}
          className="absolute bottom-[8%] right-[1%] z-20 hidden lg:block"
        >
          <MacBookVisual compact />
        </motion.div>

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
            delay: 1.4,
            duration: 0.8,
          }}
          className="absolute bottom-6 left-1/2 z-40 -translate-x-1/2 text-center"
        >
          <motion.p
            animate={
              prefersReducedMotion
                ? {}
                : {
                    opacity: [0.35, 1, 0.35],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mb-2 text-[9px] font-bold tracking-[0.35em] text-[#62809A]"
          >
            SCROLL TO EXPLORE
          </motion.p>

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, 6, 0],
                  }
            }
            transition={{
              duration: 1.7,
              repeat: Infinity,
            }}
            className="mx-auto flex h-9 w-6 items-start justify-center rounded-full border border-[#62809A]/30 pt-2"
          >
            <span className="h-1.5 w-1 rounded-full bg-[#30AFFF]" />
          </motion.div>
        </motion.div>
      </section>

      <section
        id="project"
        className="relative overflow-hidden bg-[#17324D] px-6 py-28 text-white sm:py-36"
      >
        <div className="pointer-events-none absolute inset-0">
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

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: [-100, 100, -100],
                    y: [40, -50, 40],
                  }
            }
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[-10%] top-0 h-[450px] w-[450px] rounded-full bg-[#30AFFF]/15 blur-[130px]"
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
            className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#C4F7CA]/10 blur-[140px]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-end">
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <SectionLabel light>ABOUT THE PROJECT</SectionLabel>

              <h2 className="mt-7 max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl md:text-8xl">
                Technology
                <br />
                <span className="text-[#92EEFF]">without</span>
                <br />
                the mystery.
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#92EEFF]/60 sm:text-lg">
                Apple Anatomy transforms complex technology into a visual
                learning environment. Instead of looking only at the outside of
                a device, the project examines the systems, components,
                relationships, and ideas that exist beneath the surface.
              </p>
            </motion.div>

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
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
              className="grid grid-cols-3 gap-3"
            >
              {systemStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{
                    y: -7,
                    scale: 1.025,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7"
                >
                  <p className="text-3xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[8px] font-bold leading-4 tracking-[0.2em] text-[#92EEFF]/45 sm:text-[9px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Atom,
                title: "Scientific",
                text: "Technology is approached through systems, components, architecture, and relationships.",
              },
              {
                icon: ScanLine,
                title: "Interactive",
                text: "Motion, visual hierarchy, and interactive exploration make complex ideas easier to understand.",
              },
              {
                icon: ShieldCheck,
                title: "Educational",
                text: "The experience is structured to support learning, revision, and curiosity.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 8,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#30AFFF]/20 bg-[#30AFFF]/10 text-[#92EEFF]"
                  >
                    <Icon size={21} />
                  </motion.div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#92EEFF]/50">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7FBFF] px-6 py-32 sm:py-40">
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
          className="pointer-events-none absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#92EEFF]/20 blur-[120px]"
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
          className="pointer-events-none absolute right-[-10%] top-[40%] h-[450px] w-[450px] rounded-full bg-[#D8FFC5]/25 blur-[130px]"
        />

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
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <SectionLabel>PROJECT OBJECTIVES</SectionLabel>

            <div className="mt-7 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.065em] sm:text-7xl md:text-8xl">
                Learn
                <br />
                <span className="text-[#30AFFF]">what's inside.</span>
              </h2>

              <p className="max-w-2xl text-base leading-8 text-[#62809A] sm:text-lg">
                The objective is not simply to show device components. It is to
                create a structured understanding of how hardware, software,
                energy, processing, input, output, and design work together.
              </p>
            </div>
          </motion.div>

          <div className="mt-20 grid gap-px overflow-hidden rounded-[34px] border border-[#DDECF5] bg-[#DDECF5] md:grid-cols-2">
            {objectives.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden bg-white p-8 sm:p-10"
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
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#92EEFF]/15 to-transparent"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#30AFFF]/15 bg-[#30AFFF]/5 text-[#30AFFF]">
                        <Icon size={21} />
                      </div>

                      <span className="text-xs font-bold tracking-[0.2em] text-[#30AFFF]">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-3xl font-black tracking-[-0.04em] text-[#17324D]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-[#62809A]">
                      {item.description}
                    </p>

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
                      className="mt-8 h-[2px] w-full origin-left bg-[#30AFFF]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-32 sm:py-40">
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <SectionLabel>DEVICE INTRODUCTION</SectionLabel>

            <div className="mt-7 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h2 className="max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.07em] sm:text-7xl md:text-8xl">
                Two devices.
                <br />
                <span className="text-[#30AFFF]">One ecosystem.</span>
              </h2>

              <p className="max-w-xl text-base leading-8 text-[#62809A]">
                Start with the two central device families of Apple Anatomy: the
                iPhone and the MacBook.
              </p>
            </div>
          </motion.div>

          <div className="mt-24 grid gap-8 lg:grid-cols-2">
            {devices.map((device, index) => {
              const Icon = device.icon;

              return (
                <motion.article
                  key={device.id}
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group relative overflow-hidden rounded-[38px] border border-[#DDECF5] bg-[#F7FBFF]"
                >
                  <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#92EEFF]/15 blur-[100px]" />

                  <div className="relative grid min-h-[650px] items-center p-8 sm:p-12">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-2xl border"
                          style={{
                            borderColor: `${device.accent}35`,
                            color: device.accent,
                            backgroundColor: `${device.accent}0D`,
                          }}
                        >
                          <Icon size={20} />
                        </div>

                        <span className="text-[9px] font-bold tracking-[0.28em] text-[#62809A]">
                          {device.type}
                        </span>
                      </div>

                      <span className="text-xs font-bold tracking-[0.2em] text-[#30AFFF]">
                        {device.number}
                      </span>
                    </div>

                    <div className="mt-12 flex justify-center">
                      {device.id === "iphone" ? (
                        <IPhoneVisual />
                      ) : (
                        <MacBookVisual />
                      )}
                    </div>

                    <div className="mt-10">
                      <h3 className="text-4xl font-black tracking-[-0.05em] text-[#17324D] sm:text-5xl">
                        {device.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-[#62809A]">
                        {device.description}
                      </p>

                      <Link to={device.link}>
                        <motion.div
                          whileHover={{
                            x: 5,
                          }}
                          className="mt-7 inline-flex items-center gap-3 rounded-full border border-[#DDECF5] bg-white px-6 py-3 text-sm font-semibold text-[#17324D] shadow-sm"
                        >
                          {device.action}
                          <ArrowUpRight size={16} />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#17324D] px-6 py-32 text-white sm:py-40">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#30AFFF]/10"
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
            className="absolute left-1/2 top-1/2 h-[570px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#92EEFF]/10"
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#30AFFF]/15 blur-[130px]"
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <SectionLabel light>VISUAL DEVICE LAB</SectionLabel>

            <div className="mt-7 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <h2 className="text-5xl font-black leading-[0.88] tracking-[-0.07em] sm:text-7xl md:text-8xl">
                  See the
                  <br />
                  <span className="text-[#92EEFF]">systems.</span>
                </h2>

                <p className="mt-8 max-w-xl text-base leading-8 text-[#92EEFF]/55 sm:text-lg">
                  Devices are not single objects. They are collections of
                  interconnected systems. This visual lab introduces that idea
                  before you enter the deeper anatomy pages.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  {[
                    {
                      icon: Cpu,
                      text: "PROCESSING",
                    },
                    {
                      icon: Database,
                      text: "MEMORY",
                    },
                    {
                      icon: Camera,
                      text: "SENSORS",
                    },
                    {
                      icon: BatteryCharging,
                      text: "POWER",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.text}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[9px] font-bold tracking-[0.18em] text-[#92EEFF]/65"
                      >
                        <Icon size={13} />
                        {item.text}
                      </div>
                    );
                  })}
                </div>
              </div>

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
                  amount: 0.2,
                }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative min-h-[560px]"
              >
                <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#30AFFF]/10" />

                <motion.div
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          rotate: 360,
                        }
                  }
                  transition={{
                    duration: 36,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#92EEFF]/10"
                />

                <motion.div
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          y: [-12, 12, -12],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 z-20 -translate-x-[75%] -translate-y-1/2"
                >
                  <IPhoneVisual compact />
                </motion.div>

                <motion.div
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          y: [12, -12, 12],
                        }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 z-10 -translate-x-[5%] -translate-y-1/2"
                >
                  <MacBookVisual compact />
                </motion.div>

                <motion.div
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: [0.8, 1.3, 0.8],
                          opacity: [0.3, 1, 0.3],
                        }
                  }
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute left-1/2 top-1/2 z-30 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#30AFFF] shadow-[0_0_40px_#30AFFF]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7FBFF] px-6 py-32 sm:py-40">
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            <SectionLabel>EXPLORE THE PROJECT</SectionLabel>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <h2 className="text-5xl font-black leading-[0.88] tracking-[-0.07em] sm:text-7xl md:text-8xl">
                Six ways
                <br />
                to <span className="text-[#30AFFF]">explore.</span>
              </h2>

              <p className="max-w-xl text-base leading-8 text-[#62809A]">
                Move through the Apple Anatomy experience according to what you
                want to understand: devices, tools, educational guides, or the
                story behind the project.
              </p>
            </div>
          </motion.div>

          <div className="mt-20 divide-y divide-[#DDECF5] border-y border-[#DDECF5]">
            {pages.map((page, index) => {
              const Icon = page.icon;

              return (
                <Link key={page.title} to={page.path}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      x: 10,
                    }}
                    className="group relative flex items-center justify-between gap-5 py-8 sm:py-10"
                  >
                    <div className="flex min-w-0 items-center gap-5 sm:gap-8">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#30AFFF]">
                        {page.number}
                      </span>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DDECF5] bg-white text-[#30AFFF] shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon size={19} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-2xl font-black tracking-[-0.04em] text-[#17324D] sm:text-4xl">
                          {page.title}
                        </h3>

                        <p className="mt-1 hidden max-w-xl text-sm text-[#62809A] sm:block">
                          {page.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 45,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DDECF5] bg-white text-[#30AFFF] shadow-sm"
                    >
                      <ArrowUpRight size={18} />
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
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#17324D] px-6">
        <div className="pointer-events-none absolute inset-0">
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
            className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#30AFFF]/10"
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
              duration: 29,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#92EEFF]/10"
          />

          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#30AFFF]/15 blur-[120px]"
          />
        </div>

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
            className="text-[10px] font-bold tracking-[0.4em] text-[#92EEFF]"
          >
            APPLE ANATOMY
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.82,
              filter: "blur(16px)",
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 text-[clamp(4.5rem,12vw,9rem)] font-black leading-[0.8] tracking-[-0.09em] text-white"
          >
            Go
            <br />
            <span className="text-[#92EEFF]">inside.</span>
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
            className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#92EEFF]/55"
          >
            Discover how Apple devices transform engineering, computation,
            software, energy, and design into the technology we use every day.
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
                className="flex items-center gap-3 rounded-full bg-[#30AFFF] px-8 py-4 font-semibold text-white shadow-[0_20px_50px_rgba(48,175,255,0.25)]"
              >
                Explore iPhone
                <ArrowUpRight size={17} />
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
                className="flex items-center gap-3 rounded-full border border-[#92EEFF]/25 bg-white/[0.04] px-8 py-4 font-semibold text-white backdrop-blur-xl"
              >
                Explore MacBook
                <ArrowUpRight size={17} />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#DDECF5] bg-[#F7FBFF] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-black tracking-[0.2em] text-[#17324D]">
              APPLEHUB
            </p>

            <p className="mt-2 text-[10px] tracking-[0.12em] text-[#62809A]">
              DISCOVER WHAT IS INSIDE.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-[9px] font-bold tracking-[0.18em] text-[#62809A]">
            <Link to="/iph" className="transition-colors hover:text-[#30AFFF]">
              IPHONE
            </Link>

            <Link to="/mac" className="transition-colors hover:text-[#30AFFF]">
              MACBOOK
            </Link>

            <Link
              to="/tools"
              className="transition-colors hover:text-[#30AFFF]"
            >
              TOOLS
            </Link>

            <Link
              to="/guides"
              className="transition-colors hover:text-[#30AFFF]"
            >
              GUIDES
            </Link>

            <Link
              to="/about"
              className="transition-colors hover:text-[#30AFFF]"
            >
              ABOUT
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
