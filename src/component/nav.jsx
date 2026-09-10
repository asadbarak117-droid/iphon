import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    number: "01",
    name: "Home",
    path: "/",
    color: "#30AFFF",
    delay: 0,
    duration: 4.2,
  },
  {
    number: "02",
    name: "iPhone Anatomy",
    path: "/iph",
    color: "#92EEFF",
    delay: 0.5,
    duration: 4.8,
  },
  {
    number: "03",
    name: "MacBook Anatomy",
    path: "/mac",
    color: "#C4F7CA",
    delay: 1,
    duration: 5.1,
  },
  {
    number: "04",
    name: "Apple History & Device Evolution",
    path: "/tools",
    color: "#D8FFC5",
    delay: 1.5,
    duration: 4.6,
  },
  {
    number: "05",
    name: "Comparative & Technician Analysis",
    path: "/guides",
    color: "#30AFFF",
    delay: 2,
    duration: 5.3,
  },
  {
    number: "06",
    name: "Research & Project",
    path: "/about",
    color: "#92EEFF",
    delay: 2.5,
    duration: 4.9,
  },
];

const particles = [
  {
    left: "3%",
    top: "30%",
    size: 4,
    color: "#30AFFF",
    duration: 5,
    delay: 0,
  },
  {
    left: "10%",
    top: "75%",
    size: 3,
    color: "#92EEFF",
    duration: 7,
    delay: 1,
  },
  {
    left: "19%",
    top: "12%",
    size: 5,
    color: "#D8FFC5",
    duration: 6,
    delay: 2,
  },
  {
    left: "31%",
    top: "88%",
    size: 3,
    color: "#30AFFF",
    duration: 8,
    delay: 1,
  },
  {
    left: "43%",
    top: "5%",
    size: 4,
    color: "#C4F7CA",
    duration: 6,
    delay: 3,
  },
  {
    left: "57%",
    top: "90%",
    size: 3,
    color: "#92EEFF",
    duration: 7,
    delay: 2,
  },
  {
    left: "69%",
    top: "7%",
    size: 4,
    color: "#30AFFF",
    duration: 5,
    delay: 1,
  },
  {
    left: "78%",
    top: "82%",
    size: 5,
    color: "#D8FFC5",
    duration: 8,
    delay: 3,
  },
  {
    left: "88%",
    top: "15%",
    size: 3,
    color: "#92EEFF",
    duration: 6,
    delay: 2,
  },
  {
    left: "96%",
    top: "58%",
    size: 4,
    color: "#30AFFF",
    duration: 7,
    delay: 1,
  },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const lightX = useTransform(smoothX, [-600, 600], ["0%", "100%"]);

  const lightY = useTransform(smoothY, [-400, 400], ["0%", "100%"]);

  const activeIndex = Math.max(
    0,
    navItems.findIndex((item) => item.path === location.pathname),
  );

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left - rect.width / 2);

    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      {/* ================= AMBIENT SPACE ================= */}

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[210px] overflow-hidden">
        <motion.div
          className="absolute left-[5%] top-10 h-40 w-40 rounded-full bg-[#30AFFF]/10 blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, 25, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[6%] top-5 h-44 w-44 rounded-full bg-[#D8FFC5]/15 blur-3xl"
          animate={{
            x: [0, -70, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-full bg-[#92EEFF]/10 blur-3xl"
          animate={{
            y: [0, 35, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* FLOATING PARTICLES */}

        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 14px ${particle.color}`,
            }}
            animate={{
              x: [-7, 10, -7],
              y: [-12, 14, -12],
              opacity: [0.2, 1, 0.2],
              scale: [0.6, 1.4, 0.6],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* MOVING LIGHT TRAIL */}

        <motion.div
          className="absolute top-[95px] h-px w-48 bg-gradient-to-r from-transparent via-[#30AFFF] to-transparent"
          animate={{
            x: ["-20vw", "120vw"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute top-[145px] h-px w-32 bg-gradient-to-r from-transparent via-[#D8FFC5] to-transparent"
          animate={{
            x: ["110vw", "-30vw"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
        />
      </div>

      {/* ================= HEADER ================= */}

      <motion.nav
        onMouseMove={handleMouseMove}
        className="relative mx-auto max-w-[1450px]"
        initial={{
          opacity: 0,
          y: -35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* OUTER GLOW */}

        <motion.div
          className="absolute -inset-4 -z-10 rounded-[32px] blur-2xl"
          animate={{
            opacity: [0.25, 0.55, 0.25],
            background: [
              "linear-gradient(90deg, rgba(48,175,255,.10), rgba(146,238,255,.08), rgba(216,255,197,.10))",
              "linear-gradient(90deg, rgba(216,255,197,.12), rgba(48,175,255,.14), rgba(146,238,255,.10))",
              "linear-gradient(90deg, rgba(48,175,255,.10), rgba(146,238,255,.08), rgba(216,255,197,.10))",
            ],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative overflow-hidden rounded-[24px] border border-[#DDECF5] bg-white/90 shadow-[0_25px_80px_rgba(48,175,255,0.13)] backdrop-blur-2xl">
          {/* MOUSE LIGHT */}

          <motion.div
            className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#92EEFF]/20 blur-3xl"
            style={{
              x: lightX,
              y: lightY,
            }}
          />

          {/* ANIMATED TOP SCAN */}

          <motion.div
            className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-[#30AFFF] via-[#92EEFF] to-[#D8FFC5]"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* ================= MAIN ROW ================= */}

          <div className="relative flex min-h-[78px] items-center">
            {/* LOGO */}

            <Link
              to="/"
              onClick={closeMenu}
              className="group flex shrink-0 items-center gap-3 border-r border-[#DDECF5] px-4 py-3 sm:px-6"
            >
              <motion.div
                className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#30AFFF]/40 bg-gradient-to-br from-[#EEF9FF] to-[#D8FFC5]"
                animate={{
                  y: [0, -2, 0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 4,
                }}
              >
                <motion.div
                  className="absolute inset-1 rounded-lg border border-[#30AFFF]/20"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <span className="relative z-10 text-lg font-black text-[#17324D]">
                  A
                </span>

                <motion.span
                  className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-[#30AFFF]"
                  animate={{
                    scale: [1, 1.7, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              <div className="hidden sm:block">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-black tracking-[0.2em] text-[#17324D]">
                    APPLEHUB
                  </span>

                  <span className="rounded-md bg-[#EEF9FF] px-1.5 py-0.5 text-[8px] font-bold text-[#30AFFF]">
                    LAB
                  </span>
                </div>

                <div className="mt-0.5 text-[8px] font-semibold tracking-[0.18em] text-[#62809A]">
                  DEVICE INTELLIGENCE
                </div>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}

            <div className="hidden flex-1 items-center justify-center px-3 xl:flex">
              <div className="flex h-full items-center">
                {navItems.map((item, index) => {
                  const active = location.pathname === item.path;

                  const isHovered = hovered === index;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                      className="group relative"
                    >
                      {/* FLOATING PAGE CARD */}

                      <motion.div
                        className={`relative flex min-h-[76px] w-[145px] flex-col justify-center px-3 ${
                          active ? "bg-[#F3FBFF]" : "bg-transparent"
                        }`}
                        animate={{
                          y: active ? [0, -3, 0, 3, 0] : [0, -2.5, 0, 2.5, 0],
                        }}
                        transition={{
                          duration: item.duration,
                          delay: item.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        whileHover={{
                          y: -7,
                          scale: 1.04,
                          transition: {
                            duration: 0.25,
                          },
                        }}
                      >
                        {/* COLOR AURA */}

                        <motion.div
                          className="pointer-events-none absolute inset-x-4 bottom-1 h-8 rounded-full blur-xl"
                          style={{
                            backgroundColor: item.color,
                          }}
                          animate={{
                            opacity: active
                              ? [0.15, 0.35, 0.15]
                              : isHovered
                                ? 0.3
                                : 0,
                            scaleX: isHovered ? 1.2 : 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: active ? Infinity : 0,
                          }}
                        />

                        {/* NUMBER */}

                        <div className="relative z-10 mb-1 flex items-center justify-between">
                          <span
                            className={`text-[9px] font-black tracking-[0.2em] ${
                              active
                                ? "text-[#30AFFF]"
                                : "text-[#9AB0C0] group-hover:text-[#30AFFF]"
                            }`}
                          >
                            {item.number}
                          </span>

                          {/* LIVE DOT */}

                          <motion.span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{
                              backgroundColor: item.color,
                            }}
                            animate={{
                              opacity: active || isHovered ? [0.4, 1, 0.4] : 0,
                              scale: active || isHovered ? [0.8, 1.5, 0.8] : 1,
                              boxShadow:
                                active || isHovered
                                  ? [
                                      `0 0 0px ${item.color}`,
                                      `0 0 10px ${item.color}`,
                                      `0 0 0px ${item.color}`,
                                    ]
                                  : "0 0 0px transparent",
                            }}
                            transition={{
                              duration: 1.4,
                              repeat: active || isHovered ? Infinity : 0,
                            }}
                          />
                        </div>

                        {/* TITLE */}

                        <span
                          className={`relative z-10 max-w-[128px] text-[10px] font-bold leading-[1.25] ${
                            active
                              ? "text-[#17324D]"
                              : "text-[#62809A] group-hover:text-[#17324D]"
                          }`}
                        >
                          {item.name}
                        </span>

                        {/* ACTIVE LIGHT */}

                        <motion.div
                          className="absolute bottom-0 left-3 right-3 h-[2px] origin-center rounded-full"
                          style={{
                            backgroundColor: item.color,
                          }}
                          animate={{
                            scaleX: active ? [0.65, 1, 0.65] : 0,
                            opacity: active ? [0.6, 1, 0.6] : 0,
                          }}
                          transition={{
                            duration: 2,
                            repeat: active ? Infinity : 0,
                          }}
                        />

                        {/* HOVER LINE */}

                        {!active && (
                          <motion.div
                            className="absolute bottom-0 left-3 right-3 h-[1px] origin-left rounded-full bg-[#92EEFF]"
                            initial={{
                              scaleX: 0,
                            }}
                            whileHover={{
                              scaleX: 1,
                            }}
                          />
                        )}
                      </motion.div>

                      {/* SEPARATOR */}

                      {index !== navItems.length - 1 && (
                        <div className="absolute right-0 top-1/2 h-7 w-px -translate-y-1/2 bg-[#DDECF5]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ================= RIGHT CONTROL ================= */}

            <div className="ml-auto flex shrink-0 items-center gap-2 border-l border-[#DDECF5] px-3 py-3 sm:gap-3 sm:px-5">
              {/* SYSTEM */}

              <div className="hidden items-center gap-2 lg:flex">
                <motion.span
                  className="h-2 w-2 rounded-full bg-[#59D66F]"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                />

                <div>
                  <div className="text-[8px] font-black tracking-[0.16em] text-[#17324D]">
                    SYSTEM
                  </div>

                  <div className="text-[8px] font-bold tracking-[0.12em] text-[#59B96B]">
                    ONLINE
                  </div>
                </div>
              </div>

              {/* EXPLORE */}

              <Link to="/iph" onClick={closeMenu}>
                <motion.div
                  className="group relative hidden overflow-hidden rounded-xl border border-[#30AFFF]/30 bg-gradient-to-r from-[#EEF9FF] to-[#F3FFF0] px-4 py-2.5 sm:block"
                  animate={{
                    y: [0, -2, 0, 2, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.06,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#30AFFF]/10 via-[#92EEFF]/25 to-[#D8FFC5]/20"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <span className="relative z-10 flex items-center gap-2 text-[10px] font-black tracking-[0.12em] text-[#17324D]">
                    EXPLORE
                    <motion.span
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.div>
              </Link>

              {/* MOBILE BUTTON */}

              <button
                type="button"
                onClick={() => setMenuOpen((value) => !value)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDECF5] bg-[#F8FCFF] xl:hidden"
              >
                <div className="flex w-5 flex-col gap-1.5">
                  <motion.span
                    className="block h-[2px] rounded-full bg-[#17324D]"
                    animate={
                      menuOpen
                        ? {
                            rotate: 45,
                            y: 4,
                          }
                        : {
                            rotate: 0,
                            y: 0,
                          }
                    }
                  />

                  <motion.span
                    className="block h-[2px] rounded-full bg-[#30AFFF]"
                    animate={{
                      opacity: menuOpen ? 0 : 1,
                    }}
                  />

                  <motion.span
                    className="block h-[2px] rounded-full bg-[#17324D]"
                    animate={
                      menuOpen
                        ? {
                            rotate: -45,
                            y: -4,
                          }
                        : {
                            rotate: 0,
                            y: 0,
                          }
                    }
                  />
                </div>
              </button>
            </div>
          </div>

          {/* ================= PROGRESS ================= */}

          <div className="relative h-[3px] bg-[#F1F7FA]">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-r-full bg-gradient-to-r from-[#30AFFF] via-[#92EEFF] to-[#D8FFC5]"
              animate={{
                width: `${((activeIndex + 1) / navItems.length) * 100}%`,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          {/* ================= MOBILE MENU ================= */}

          <AnimatePresence>
            {menuOpen && (
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
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden border-t border-[#DDECF5] xl:hidden"
              >
                <div className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-2">
                  {navItems.map((item, index) => {
                    const active = location.pathname === item.path;

                    return (
                      <Link key={item.path} to={item.path} onClick={closeMenu}>
                        <motion.div
                          className={`relative overflow-hidden rounded-2xl border p-4 ${
                            active
                              ? "border-[#30AFFF]/40 bg-[#F0FAFF]"
                              : "border-[#DDECF5] bg-white"
                          }`}
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: index * 0.06,
                          }}
                          whileHover={{
                            y: -5,
                            scale: 1.015,
                          }}
                        >
                          <motion.div
                            className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl"
                            style={{
                              backgroundColor: item.color,
                            }}
                            animate={{
                              scale: [1, 1.25, 1],
                              opacity: [0.12, 0.28, 0.12],
                            }}
                            transition={{
                              duration: item.duration,
                              delay: item.delay,
                              repeat: Infinity,
                            }}
                          />

                          <motion.div
                            className="relative z-10 flex items-center gap-4"
                            animate={{
                              y: [0, -2, 0, 2, 0],
                            }}
                            transition={{
                              duration: item.duration,
                              delay: item.delay,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <div
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                              style={{
                                borderColor: `${item.color}66`,
                                backgroundColor: `${item.color}18`,
                              }}
                            >
                              <span
                                className="text-[10px] font-black"
                                style={{
                                  color:
                                    item.color === "#D8FFC5"
                                      ? "#4E7A59"
                                      : item.color,
                                }}
                              >
                                {item.number}
                              </span>
                            </div>

                            <div className="flex-1">
                              <div className="text-[11px] font-black text-[#17324D]">
                                {item.name}
                              </div>

                              <div className="mt-1 text-[8px] font-semibold tracking-[0.14em] text-[#8AA2B3]">
                                {active ? "CURRENT MODULE" : "OPEN MODULE"}
                              </div>
                            </div>

                            <motion.span
                              className="text-lg"
                              style={{
                                color: item.color,
                              }}
                              animate={{
                                x: [0, 4, 0],
                              }}
                              transition={{
                                duration: 1.8,
                                repeat: Infinity,
                              }}
                            >
                              →
                            </motion.span>
                          </motion.div>

                          {active && (
                            <motion.div
                              className="absolute bottom-0 left-0 h-[3px] w-full"
                              style={{
                                backgroundColor: item.color,
                              }}
                              animate={{
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 1.8,
                                repeat: Infinity,
                              }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between border-t border-[#DDECF5] px-4 py-3">
                  <div className="flex items-center gap-2">
                    <motion.span
                      className="h-2 w-2 rounded-full bg-[#59D66F]"
                      animate={{
                        scale: [0.8, 1.3, 0.8],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                      }}
                    />

                    <span className="text-[8px] font-black tracking-[0.15em] text-[#62809A]">
                      APPLEHUB SYSTEM ONLINE
                    </span>
                  </div>

                  <span className="text-[8px] font-bold text-[#9AB0C0]">
                    MODULE {String(activeIndex + 1).padStart(2, "0")} / 06
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  );
}

export default Navbar;
