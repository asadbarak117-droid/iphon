import { useState, useRef } from "react";
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

const navItems = [
  { name: "Home", path: "/", icon: "⌂" },
  { name: "iPhone", path: "/iph", icon: "◉" },
  { name: "Mac", path: "/mac", icon: "▣" },
  { name: "Tools", path: "/tools", icon: "⚙" },
  { name: "Guides", path: "/guides", icon: "✦" },
  { name: "About us", path: "/about", icon: "●" },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 160,
    damping: 22,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 160,
    damping: 22,
    mass: 0.5,
  });

  const navRotateX = useTransform(smoothY, [-250, 250], [2.5, -2.5]);
  const navRotateY = useTransform(smoothX, [-500, 500], [-4, 4]);

  const glowX = useTransform(smoothX, [-500, 500], ["10%", "90%"]);
  const glowY = useTransform(smoothY, [-250, 250], ["10%", "90%"]);

  const handleMouseMove = (event) => {
    if (!navRef.current) return;

    const rect = navRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{
        y: -100,
        opacity: 0,
        rotateX: -25,
      }}
      animate={{
        y: 0,
        opacity: 1,
        rotateX: 0,
      }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed left-0 right-0 top-0 z-50 px-3 pt-4 sm:px-5 md:px-8 md:pt-5"
    >
      <div className="mx-auto max-w-6xl [perspective:1800px]">
        <motion.div
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
          style={{
            rotateX: navRotateX,
            rotateY: navRotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          <motion.div className="relative overflow-hidden rounded-2xl border border-[#DDECF5] bg-white/90 px-3 py-2.5 shadow-[0_20px_60px_rgba(23,50,77,0.12)] backdrop-blur-2xl sm:rounded-full sm:px-4 sm:py-3">
            <motion.div
              style={{
                left: glowX,
                top: glowY,
              }}
              className="pointer-events-none absolute h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#92EEFF]/25 blur-3xl"
            />

            <motion.div
              animate={{
                x: [-30, 30, -30],
                y: [0, 12, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-[#D8FFC5]/50 blur-3xl"
            />

            <motion.div
              animate={{
                x: [30, -20, 30],
                y: [-5, 15, -5],
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -bottom-24 left-1/3 h-44 w-44 rounded-full bg-[#C4F7CA]/45 blur-3xl"
            />

            <div className="relative z-10 flex items-center justify-between">
              <Link
                to="/"
                onClick={closeMenu}
                className="relative z-30 flex items-center gap-2 sm:gap-3"
              >
                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotateX: 20,
                    rotateY: 180,
                    z: 35,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 14,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#30AFFF] font-bold text-white shadow-[0_8px_25px_rgba(48,175,255,0.3)] sm:h-10 sm:w-10"
                >
                  <span
                    style={{
                      transform: "translateZ(12px)",
                    }}
                  >
                    A
                  </span>
                </motion.div>

                <div className="hidden sm:block">
                  <motion.div
                    whileHover={{
                      x: 3,
                      z: 12,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    className="font-semibold tracking-tight text-[#17324D]"
                  >
                    Apple
                    <span className="text-[#30AFFF]">Hub</span>
                  </motion.div>

                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="text-[9px] tracking-[0.2em] text-[#62809A]"
                  >
                    ANATOMY
                  </motion.div>
                </div>
              </Link>

              <div className="hidden items-center gap-1 md:flex">
                {navItems.map((item, index) => {
                  const active = location.pathname === item.path;

                  return (
                    <motion.div
                      key={item.path}
                      initial={{
                        opacity: 0,
                        y: -25,
                        rotateX: -40,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                      }}
                      transition={{
                        delay: 0.25 + index * 0.07,
                        duration: 0.6,
                        type: "spring",
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className="relative z-30 block"
                      >
                        <motion.div
                          whileHover={{
                            y: -5,
                            scale: 1.04,
                            rotateX: -8,
                            rotateY: 4,
                            z: 25,
                          }}
                          whileTap={{
                            scale: 0.94,
                            y: 0,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 18,
                          }}
                          style={{
                            transformStyle: "preserve-3d",
                          }}
                          className={`relative flex items-center gap-2 rounded-full px-3 py-2.5 text-sm lg:px-4 ${
                            active
                              ? "text-[#17324D]"
                              : "text-[#62809A] hover:text-[#17324D]"
                          }`}
                        >
                          {active && (
                            <motion.span
                              layoutId="activeNav"
                              transition={{
                                type: "spring",
                                stiffness: 450,
                                damping: 30,
                              }}
                              className="absolute inset-0 rounded-full border border-[#92EEFF] bg-[#EEF9FF] shadow-[0_8px_25px_rgba(48,175,255,0.12)]"
                              style={{
                                transform: "translateZ(-12px)",
                              }}
                            />
                          )}

                          <motion.span
                            whileHover={{
                              rotateY: 180,
                              rotateX: 15,
                              scale: 1.25,
                              z: 30,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 12,
                            }}
                            style={{
                              transformStyle: "preserve-3d",
                            }}
                            className={`relative z-10 text-xs ${
                              active ? "text-[#30AFFF]" : "text-[#62809A]"
                            }`}
                          >
                            {item.icon}
                          </motion.span>

                          <span className="relative z-10 whitespace-nowrap">
                            {item.name}
                          </span>

                          <motion.span
                            initial={{
                              width: 0,
                              opacity: 0,
                            }}
                            whileHover={{
                              width: "65%",
                              opacity: 1,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#30AFFF] shadow-[0_0_10px_rgba(48,175,255,0.7)]"
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="relative z-30 flex items-center gap-2">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateX: -8,
                    rotateY: 8,
                    z: 20,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="hidden items-center gap-2 rounded-full border border-[#DDECF5] bg-[#F7FBFF] px-3 py-2 lg:flex"
                >
                  <motion.span
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-[#30AFFF] shadow-[0_0_10px_rgba(48,175,255,0.7)]"
                  />

                  <span className="text-[10px] font-medium text-[#62809A]">
                    SYSTEM ONLINE
                  </span>
                </motion.div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.12,
                    rotateX: -15,
                    rotateY: 15,
                    z: 25,
                  }}
                  whileTap={{
                    scale: 0.88,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 14,
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DDECF5] bg-[#F7FBFF] text-[#30AFFF] shadow-[0_6px_20px_rgba(48,175,255,0.08)] sm:h-10 sm:w-10"
                >
                  <motion.span
                    animate={{
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    ⌕
                  </motion.span>
                </motion.button>

                <Link to="/iph" onClick={closeMenu} className="hidden sm:block">
                  <motion.div
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                      rotateX: -10,
                      rotateY: 10,
                      z: 35,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 15,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    className="flex items-center gap-2 rounded-full bg-[#30AFFF] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(48,175,255,0.25)]"
                  >
                    <span
                      style={{
                        transform: "translateZ(10px)",
                      }}
                    >
                      Explore
                    </span>

                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        transform: "translateZ(14px)",
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </Link>

                <motion.button
                  type="button"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  whileTap={{
                    scale: 0.85,
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DDECF5] bg-[#F7FBFF] md:hidden"
                  aria-label="Toggle menu"
                  aria-expanded={menuOpen}
                >
                  <div className="relative h-5 w-5">
                    <motion.span
                      animate={
                        menuOpen
                          ? {
                              rotate: 45,
                              y: 8,
                            }
                          : {
                              rotate: 0,
                              y: 2,
                            }
                      }
                      transition={{
                        duration: 0.3,
                      }}
                      className="absolute left-0 h-[2px] w-5 rounded-full bg-[#30AFFF]"
                    />

                    <motion.span
                      animate={{
                        opacity: menuOpen ? 0 : 1,
                        x: menuOpen ? 8 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute left-0 top-[9px] h-[2px] w-3 rounded-full bg-[#92EEFF]"
                    />

                    <motion.span
                      animate={
                        menuOpen
                          ? {
                              rotate: -45,
                              y: 8,
                            }
                          : {
                              rotate: 0,
                              y: 16,
                            }
                      }
                      transition={{
                        duration: 0.3,
                      }}
                      className="absolute left-0 h-[2px] w-5 rounded-full bg-[#30AFFF]"
                    />
                  </div>
                </motion.button>
              </div>
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    rotateX: -40,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    rotateX: 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    rotateX: -40,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden md:hidden"
                  style={{
                    transformOrigin: "top",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="mt-3 border-t border-[#DDECF5] pt-3">
                    <div className="flex flex-col gap-1">
                      {navItems.map((item, index) => {
                        const active = location.pathname === item.path;

                        return (
                          <motion.div
                            key={item.path}
                            initial={{
                              opacity: 0,
                              x: -40,
                              rotateY: -30,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              rotateY: 0,
                            }}
                            transition={{
                              delay: index * 0.06,
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                            }}
                            style={{
                              transformStyle: "preserve-3d",
                            }}
                          >
                            <Link
                              to={item.path}
                              onClick={closeMenu}
                              className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                                active
                                  ? "bg-[#EEF9FF] text-[#17324D]"
                                  : "text-[#62809A]"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <motion.span
                                  whileHover={{
                                    rotateY: 180,
                                    rotateX: 15,
                                    scale: 1.1,
                                    z: 15,
                                  }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 14,
                                  }}
                                  style={{
                                    transformStyle: "preserve-3d",
                                  }}
                                  className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                                    active
                                      ? "border-[#92EEFF] bg-[#92EEFF]/20 text-[#30AFFF]"
                                      : "border-[#DDECF5] bg-[#F7FBFF] text-[#62809A]"
                                  }`}
                                >
                                  {item.icon}
                                </motion.span>

                                <span className="text-sm font-medium">
                                  {item.name}
                                </span>
                              </div>

                              <motion.span
                                animate={{
                                  x: active ? [0, 5, 0] : 0,
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: active ? Infinity : 0,
                                }}
                                className={
                                  active ? "text-[#30AFFF]" : "text-[#92EEFF]"
                                }
                              >
                                →
                              </motion.span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>

                    <Link to="/iph" onClick={closeMenu} className="mt-3 block">
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                          rotateX: -5,
                          z: 15,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 250,
                          damping: 18,
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                        className="flex items-center justify-center gap-2 rounded-xl bg-[#30AFFF] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(48,175,255,0.2)]"
                      >
                        <span
                          style={{
                            transform: "translateZ(8px)",
                          }}
                        >
                          Explore iPhone
                        </span>

                        <motion.span
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                          style={{
                            transform: "translateZ(10px)",
                          }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </Link>

                    <div className="flex items-center justify-center gap-2 py-3">
                      <motion.span
                        animate={{
                          opacity: [0.3, 1, 0.3],
                          scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-[#30AFFF] shadow-[0_0_8px_rgba(48,175,255,0.7)]"
                      />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#62809A]">
                        System Online
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
