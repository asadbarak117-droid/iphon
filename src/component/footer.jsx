import { motion } from "motion/react";
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

const footerLinks = {
  Explore: [
    { name: "Home", path: "/" },
    { name: "iPhone", path: "/iph" },
    { name: "Mac", path: "/mac" },
    { name: "Tools", path: "/tools" },
    { name: "Guides", path: "/guides" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about" },
    { name: "Resources", path: "/guides" },
    { name: "Apple Tools", path: "/tools" },
  ],
};

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        borderColor: COLORS.border,
        background: COLORS.soft,
        color: COLORS.text,
      }}
    >
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#92EEFF]/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [100, -80, 100],
          y: [20, -20, 20],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#D8FFC5]/35 blur-3xl"
      />

      <motion.div
        animate={{
          x: [-40, 60, -40],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C4F7CA]/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="group inline-flex items-center gap-3">
              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotateY: 180,
                  rotateX: 15,
                  z: 30,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 15,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  background: COLORS.blue,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full font-bold text-white shadow-[0_12px_30px_rgba(48,175,255,0.25)]"
              >
                <span
                  style={{
                    transform: "translateZ(12px)",
                  }}
                >
                  A
                </span>
              </motion.div>

              <div>
                <motion.div
                  whileHover={{
                    x: 3,
                    z: 10,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="text-lg font-bold tracking-tight"
                >
                  Apple
                  <span style={{ color: COLORS.blue }}>Hub</span>
                </motion.div>

                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="text-[9px] tracking-[0.25em]"
                  style={{
                    color: COLORS.textLight,
                  }}
                >
                  ANATOMY
                </motion.div>
              </div>
            </Link>

            <p
              className="mt-6 max-w-xs text-sm leading-6"
              style={{
                color: COLORS.textLight,
              }}
            >
              Explore the world of Apple. Discover iPhone, Mac, tools, guides,
              and everything Apple in one place.
            </p>

            <motion.div
              whileHover={{
                scale: 1.03,
                rotateX: -4,
                rotateY: 4,
                z: 10,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              style={{
                transformStyle: "preserve-3d",
                borderColor: COLORS.border,
                background: COLORS.white,
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border px-3 py-2 shadow-[0_8px_25px_rgba(23,50,77,0.06)]"
            >
              <motion.span
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: COLORS.blue,
                  boxShadow: "0 0 10px rgba(48,175,255,0.7)",
                }}
              />

              <span
                className="text-[9px] uppercase tracking-[0.2em]"
                style={{
                  color: COLORS.textLight,
                }}
              >
                System Online
              </span>
            </motion.div>
          </div>

          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <div key={title}>
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: columnIndex * 0.1,
                }}
                className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
                style={{
                  color: COLORS.text,
                }}
              >
                {title}
              </motion.h3>

              <div className="flex flex-col gap-3">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: columnIndex * 0.1 + index * 0.05,
                    }}
                  >
                    <Link
                      to={link.path}
                      className="group flex w-fit items-center gap-2 text-sm transition"
                      style={{
                        color: COLORS.textLight,
                      }}
                    >
                      <motion.span
                        whileHover={{
                          x: 5,
                          scale: 1.03,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                        className="group-hover:text-[#17324D]"
                      >
                        {link.name}
                      </motion.span>

                      <motion.span
                        initial={{
                          opacity: 0,
                          x: -5,
                        }}
                        whileHover={{
                          opacity: 1,
                          x: 0,
                        }}
                        className="text-[#30AFFF]"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3
              className="mb-5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{
                color: COLORS.text,
              }}
            >
              Connect
            </h3>

            <p
              className="mb-5 max-w-xs text-sm leading-6"
              style={{
                color: COLORS.textLight,
              }}
            >
              Stay connected and discover what's new at AppleHub.
            </p>

            <div className="flex gap-2">
              {["X", "IG", "GH"].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                    rotateX: -10,
                    rotateY: 10,
                    z: 20,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 15,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    borderColor: COLORS.border,
                    background: index === 0 ? COLORS.softBlue : COLORS.white,
                    color: COLORS.blue,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold shadow-[0_8px_20px_rgba(23,50,77,0.06)]"
                >
                  <span
                    style={{
                      transform: "translateZ(8px)",
                    }}
                  >
                    {social}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="relative mt-20 overflow-hidden border-y py-6"
          style={{
            borderColor: COLORS.border,
          }}
        >
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max whitespace-nowrap text-[clamp(4rem,12vw,10rem)] font-black leading-none tracking-[-0.08em]"
            style={{
              color: "rgba(48,175,255,0.055)",
            }}
          >
            APPLEHUB&nbsp;&nbsp;&nbsp; APPLEHUB&nbsp;&nbsp;&nbsp;
            APPLEHUB&nbsp;&nbsp;&nbsp; APPLEHUB&nbsp;&nbsp;&nbsp;
            APPLEHUB&nbsp;&nbsp;&nbsp; APPLEHUB&nbsp;&nbsp;&nbsp;
          </motion.div>

          <motion.div
            animate={{
              x: ["0%", "50%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-1/3"
            style={{
              background:
                "linear-gradient(90deg, transparent, #30AFFF, #92EEFF, transparent)",
            }}
          />
        </div>

        <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="text-xs"
            style={{
              color: COLORS.textLight,
            }}
          >
            © {year} AppleHub. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              to="/about"
              className="text-xs transition hover:text-[#30AFFF]"
              style={{
                color: COLORS.textLight,
              }}
            >
              Privacy
            </Link>

            <Link
              to="/about"
              className="text-xs transition hover:text-[#30AFFF]"
              style={{
                color: COLORS.textLight,
              }}
            >
              Terms
            </Link>

            <Link
              to="/about"
              className="text-xs transition hover:text-[#30AFFF]"
              style={{
                color: COLORS.textLight,
              }}
            >
              Contact
            </Link>
          </div>

          <motion.button
            type="button"
            whileHover={{
              y: -4,
              scale: 1.08,
              rotateX: -10,
              rotateY: 8,
              z: 15,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 15,
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            style={{
              transformStyle: "preserve-3d",
              borderColor: COLORS.border,
              background: COLORS.white,
              color: COLORS.blue,
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border shadow-[0_8px_20px_rgba(23,50,77,0.08)]"
            aria-label="Back to top"
          >
            <motion.span
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              ↑
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
