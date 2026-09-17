import { memo, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
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

const teamMembers = [
  {
    name: "Fariba Mohammadi",
    group: "All Group",
    role: "Project Manager",
    work: "Management & Coordination",
  },
  {
    name: "Farina Mirzaie",
    group: "1, 2, 3",
    role: "Researcher, Web Developer, Media",
    work: "Research Article, Website Development, Video & Presentation",
  },
  {
    name: "Zakia Sultani",
    group: "1, 3",
    role: "Researcher, Media",
    work: "Research Article, Video & Presentation",
  },
  {
    name: "Haseeba Sikandari",
    group: "1, 3",
    role: "Researcher, Media",
    work: "Research Article, Video & Presentation",
  },
  {
    name: "Rahima Moradi",
    group: "1, 3",
    role: "Researcher, Media",
    work: "Research Article, Video & Presentation",
  },
  {
    name: "BiBi Zahra Tajdar",
    group: "1",
    role: "Researcher",
    work: "Research Article",
  },
  {
    name: "Elham Ahmadi",
    group: "1, 3",
    role: "Researcher, Media",
    work: "Research Article, Video & Presentation",
  },
  {
    name: "Fariba Amini",
    group: "1, 3",
    role: "Researcher, Media",
    work: "Research Article, Video & Presentation",
  },
  {
    name: "Morsal Haidari",
    group: "1, 2",
    role: "Researcher, Web Developer",
    work: "Research Article, Website Development",
  },
  {
    name: "Khalida Qanie",
    group: "1",
    role: "Researcher",
    work: "Research Article",
  },
  {
    name: "Sohaila Hassani",
    group: "1, 2",
    role: "Researcher, Web Developer",
    work: "Research Article, Website Development",
  },
  {
    name: "Selsela Sultani",
    group: "2",
    role: "Web Developer",
    work: "Website Development",
  },
  {
    name: "Roqia Moqtasid",
    group: "2",
    role: "Web Developer",
    work: "Website Development",
  },
  {
    name: "Bibi Toba Osmani",
    group: "2",
    role: "Web Developer",
    work: "Website Development",
  },
  {
    name: "Khatera Fayazi",
    group: "2",
    role: "Web Developer",
    work: "Website Development",
  },
  {
    name: "Hasina Hassani",
    group: "2",
    role: "Web Developer",
    work: "Website Development",
  },
  {
    name: "Murwarid Ebadi",
    group: "2",
    role: "Web Developer",
    work: "Website Development",
  },
  {
    name: "Neda Barkezai",
    group: "2, 3",
    role: "Web Developer, Media",
    work: "Website Development, Video & Presentation",
  },
  {
    name: "Sana Jan Rahmani",
    group: "2, 3",
    role: "Web Developer, Media",
    work: "Website Development, Video & Presentation",
  },
  {
    name: "Zarna Formuli",
    group: "2, 3",
    role: "Web Developer, Media",
    work: "Website Development, Video & Presentation",
  },
];

const avatarColors = [
  ["#30AFFF", "#92EEFF"],
  ["#72D6FF", "#D8FFC5"],
  ["#92EEFF", "#C4F7CA"],
  ["#30AFFF", "#C4F7CA"],
  ["#7BD9BE", "#92EEFF"],
  ["#55BFFF", "#D8FFC5"],
  ["#A2EFFF", "#65C7A5"],
  ["#30AFFF", "#B8F7FF"],
];

const avatarHair = [
  "#34251F",
  "#4B3025",
  "#241B19",
  "#5A392B",
  "#38251F",
  "#211A18",
  "#6A432F",
  "#30221E",
];

const getInitials = (name) => {
  const words = name.replace("BiBi ", "").split(" ").filter(Boolean);

  return words.length === 1
    ? words[0].slice(0, 2).toUpperCase()
    : `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
};

const PersonAvatar = memo(function PersonAvatar({ index, name }) {
  const [c1, c2] = avatarColors[index % avatarColors.length];
  const hair = avatarHair[index % avatarHair.length];

  return (
    <motion.div
      className="relative h-24 w-24 shrink-0 overflow-visible"
      whileHover={{
        scale: 1.08,
        rotate: index % 2 === 0 ? 3 : -3,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
    >
      <motion.div
        className="absolute -inset-3 rounded-[2rem] blur-xl"
        style={{
          background: `linear-gradient(135deg, ${c1}, ${c2})`,
        }}
        animate={{
          scale: [0.9, 1.12, 0.9],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 3.5 + index * 0.08,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative h-24 w-24 overflow-hidden rounded-[2rem] border-2 bg-white shadow-lg"
        style={{
          borderColor: "rgba(255,255,255,.9)",
          background: `linear-gradient(145deg, ${c1}, ${c2})`,
        }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4 + (index % 4) * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute left-1/2 top-3 h-12 w-12 -translate-x-1/2 rounded-full"
          style={{
            background: "#F2C7A5",
          }}
        />

        <div
          className="absolute left-1/2 top-1 h-12 w-14 -translate-x-1/2 rounded-[50%] border-b-4"
          style={{
            background: hair,
            borderColor: hair,
          }}
        />

        <div
          className="absolute left-1/2 top-11 h-10 w-16 -translate-x-1/2 rounded-t-[3rem]"
          style={{
            background: "#FFFFFF",
          }}
        />

        <div className="absolute left-[40%] top-[24px] h-1.5 w-1.5 rounded-full bg-[#17324D]" />
        <div className="absolute left-[59%] top-[24px] h-1.5 w-1.5 rounded-full bg-[#17324D]" />

        <div
          className="absolute left-1/2 top-[31px] h-1 w-3 -translate-x-1/2 rounded-full"
          style={{
            background: "#C47C75",
          }}
        />

        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-wide text-[#17324D]">
          {getInitials(name)}
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-[3px] border-white"
        style={{
          background: COLORS.green,
          boxShadow: `0 0 16px ${COLORS.green}`,
        }}
        animate={{
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
});

const FloatingShape = memo(function FloatingShape({ index }) {
  const colors = [COLORS.cyan, COLORS.green, COLORS.blue, COLORS.mint];

  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{
        width: 18 + (index % 5) * 10,
        height: 18 + (index % 5) * 10,
        left: `${(index * 17) % 100}%`,
        top: `${(index * 31) % 100}%`,
        background: colors[index % colors.length],
        opacity: 0.16,
        filter: "blur(1px)",
        willChange: "transform",
      }}
      animate={{
        x: [0, 45, -25, 0],
        y: [0, -40, 25, 0],
        rotate: [0, 120, 240, 360],
        scale: [1, 1.25, 0.8, 1],
      }}
      transition={{
        duration: 9 + index * 0.55,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.15,
      }}
    />
  );
});

const FloatingShapes = memo(function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, index) => (
        <FloatingShape key={index} index={index} />
      ))}
    </div>
  );
});

const TeamCard = memo(function TeamCard({ member, index }) {
  const cardRef = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 20,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 20,
  });

  const spotlight = useMotionTemplate`
    radial-gradient(
      420px circle at ${mouseX}% ${mouseY}%,
      rgba(146,238,255,.24),
      transparent 45%
    )
  `;

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    mouseX.set(px);
    mouseY.set(py);

    rotateY.set((px - 50) / 7);
    rotateX.set((50 - py) / 7);
  };

  const handleMouseLeave = () => {
    mouseX.set(50);
    mouseY.set(50);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-[2rem] border bg-white p-6"
      style={{
        borderColor: COLORS.border,
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.04, 0.45),
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 30px 70px rgba(48,175,255,.14)",
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: spotlight,
        }}
      />

      <div className="relative z-10 flex items-center gap-5">
        <PersonAvatar index={index} name={member.name} />

        <div className="min-w-0">
          <motion.div
            className="mb-2 inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
            style={{
              color: COLORS.textLight,
              borderColor: COLORS.border,
              background: COLORS.soft,
            }}
            whileHover={{
              scale: 1.05,
            }}
          >
            Group {member.group}
          </motion.div>

          <motion.h3
            className="text-lg font-black leading-tight"
            style={{
              color: COLORS.text,
            }}
            whileHover={{
              x: 3,
            }}
          >
            {member.name}
          </motion.h3>

          <p
            className="mt-2 text-sm font-bold"
            style={{
              color: COLORS.blue,
            }}
          >
            {member.role}
          </p>
        </div>
      </div>

      <div
        className="relative z-10 mt-6 rounded-2xl border p-4"
        style={{
          borderColor: COLORS.border,
          background: COLORS.soft,
        }}
      >
        <div
          className="mb-2 text-[10px] font-bold uppercase tracking-[.16em]"
          style={{
            color: COLORS.textLight,
          }}
        >
          Contribution
        </div>

        <p
          className="text-sm leading-7"
          style={{
            color: COLORS.textLight,
          }}
        >
          {member.work}
        </p>
      </div>

      <motion.div
        className="absolute left-6 right-6 top-0 h-[2px] origin-left rounded-full"
        style={{
          background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.green})`,
        }}
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: Math.min(index * 0.04, 0.4),
        }}
      />

      <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-cyan-100/50 blur-3xl transition-transform duration-500 group-hover:scale-150" />

      <div className="pointer-events-none absolute -left-12 -top-12 h-28 w-28 rounded-full bg-green-100/40 blur-3xl transition-transform duration-500 group-hover:scale-150" />
    </motion.article>
  );
});

const InfoCard = memo(function InfoCard({ title, value, icon, index }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-[1.8rem] border bg-white p-7"
      style={{
        borderColor: COLORS.border,
      }}
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 25px 60px rgba(48,175,255,.12)",
      }}
    >
      <motion.div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-xl"
        style={{
          background:
            index % 2 === 0
              ? `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.white})`
              : `linear-gradient(135deg, ${COLORS.green}, ${COLORS.white})`,
        }}
        whileHover={{
          rotate: 8,
          scale: 1.1,
        }}
      >
        {icon}
      </motion.div>

      <div
        className="text-[10px] font-black uppercase tracking-[.18em]"
        style={{
          color: COLORS.textLight,
        }}
      >
        {title}
      </div>

      <div
        className="mt-3 text-lg font-black"
        style={{
          color: COLORS.text,
        }}
      >
        {value}
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 w-full origin-left"
        style={{
          background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.green})`,
        }}
        initial={{
          scaleX: 0,
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: index * 0.08,
        }}
      />
    </motion.div>
  );
});

const Stat = memo(function Stat({ number, label, index }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[1.8rem] border bg-white p-7 text-center"
      style={{
        borderColor: COLORS.border,
      }}
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -7,
        scale: 1.03,
      }}
    >
      <div
        className="text-4xl font-black"
        style={{
          color: COLORS.text,
        }}
      >
        {number}
      </div>

      <div
        className="mt-2 text-sm font-semibold"
        style={{
          color: COLORS.textLight,
        }}
      >
        {label}
      </div>
    </motion.div>
  );
});

const ResourceCard = memo(function ResourceCard({
  category,
  title,
  description,
  index,
}) {
  return (
    <motion.div
      className="rounded-[1.8rem] border bg-white p-6"
      style={{
        borderColor: COLORS.border,
      }}
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.06, 0.4),
      }}
      whileHover={{
        y: -7,
        boxShadow: "0 25px 55px rgba(48,175,255,.1)",
      }}
    >
      <span
        className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
        style={{
          background: COLORS.softBlue,
          color: COLORS.text,
        }}
      >
        {category}
      </span>

      <h3
        className="mt-4 text-lg font-black"
        style={{
          color: COLORS.text,
        }}
      >
        {title}
      </h3>

      <p
        className="mt-3 text-sm leading-7"
        style={{
          color: COLORS.textLight,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
});

export default function About() {
  const resources = [
    [
      "Videos",
      "Project Presentation",
      "A multimedia presentation introducing the AppleHub project and its academic objectives.",
    ],
    [
      "Videos",
      "iPhone Anatomy Video",
      "Visual exploration of iPhone components, internal architecture, sensors, cameras, and technologies.",
    ],
    [
      "Videos",
      "MacBook Anatomy Video",
      "Visual analysis of MacBook hardware, components, design, ports, processors, and internal structure.",
    ],
    [
      "Articles",
      "Research Article",
      "The main research work developed by the AppleHub team.",
    ],
    [
      "Articles",
      "iPhone Research",
      "Research covering iPhone design evolution, hardware, processors, cameras, sensors, and security.",
    ],
    [
      "Articles",
      "MacBook Research",
      "Research covering MacBook design, materials, processors, ports, architecture, and evolution.",
    ],
  ];

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: COLORS.soft,
      }}
    >
      {/* HERO */}

      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-24">
        <FloatingShapes />

        <motion.div
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: COLORS.cyan,
            opacity: 0.22,
          }}
          animate={{
            x: [0, 120, 0],
            y: [0, 70, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: COLORS.green,
            opacity: 0.25,
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -80, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.div
            className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2.2rem] border bg-white text-3xl font-black"
            style={{
              color: COLORS.text,
              borderColor: COLORS.border,
              boxShadow: "0 30px 80px rgba(48,175,255,.18)",
            }}
            initial={{
              opacity: 0,
              scale: 0.4,
              rotate: -25,
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
              rotate: 0,
            }}
            transition={{
              opacity: {
                duration: 0.6,
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 0.8,
              },
            }}
            whileHover={{
              scale: 1.12,
              rotate: 6,
            }}
          >
            AH
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <motion.h1
              className="mt-8 text-6xl font-black tracking-[-.06em] sm:text-7xl md:text-8xl lg:text-[9rem]"
              style={{
                color: COLORS.text,
              }}
              animate={{
                letterSpacing: ["-0.06em", "-0.035em", "-0.06em"],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              APPLEHUB
            </motion.h1>

            <motion.div
              className="mx-auto mt-4 h-1 max-w-md overflow-hidden rounded-full"
              style={{
                background: COLORS.border,
              }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.green})`,
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.p
              className="mx-auto mt-8 max-w-2xl text-base leading-8 md:text-lg"
              style={{
                color: COLORS.textLight,
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
            >
              An academic exploration of Apple technology, device anatomy,
              research, web development, design, and multimedia.
            </motion.p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {["Research", "Development", "Media", "Design"].map(
                (tag, index) => (
                  <motion.span
                    key={tag}
                    className="rounded-full border bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
                    style={{
                      borderColor: COLORS.border,
                      color: COLORS.text,
                    }}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.1,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.07,
                    }}
                  >
                    {tag}
                  </motion.span>
                ),
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 h-14 w-px -translate-x-1/2"
          style={{
            background: `linear-gradient(to bottom, ${COLORS.blue}, transparent)`,
          }}
          animate={{
            height: [35, 65, 35],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* UNIVERSITY */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
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
            duration: 0.7,
          }}
        >
          <div
            className="text-xs font-black uppercase tracking-[.2em]"
            style={{
              color: COLORS.blue,
            }}
          >
            Academic Information
          </div>

          <h2
            className="mt-3 text-4xl font-black md:text-6xl"
            style={{
              color: COLORS.text,
            }}
          >
            University Project
          </h2>

          <p
            className="mt-5 max-w-3xl leading-8"
            style={{
              color: COLORS.textLight,
            }}
          >
            AppleHub is a collaborative academic project developed through
            research, technology, design, development, and multimedia.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard
            title="University"
            value="Zen University"
            icon="🎓"
            index={0}
          />

          <InfoCard
            title="Faculty"
            value="Computer Science"
            icon="💻"
            index={1}
          />

          <InfoCard
            title="Department"
            value="Computer Science"
            icon="⚡"
            index={2}
          />

          <InfoCard
            title="Supervisor"
            value="Professor Reza Khavari"
            icon="👨‍🏫"
            index={3}
          />
        </div>

        <motion.div
          className="mt-5 rounded-[1.8rem] border bg-white p-7"
          style={{
            borderColor: COLORS.border,
          }}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          whileHover={{
            y: -6,
            boxShadow: "0 25px 60px rgba(48,175,255,.1)",
          }}
        >
          <div
            className="text-xs font-black uppercase tracking-[.18em]"
            style={{
              color: COLORS.textLight,
            }}
          >
            Project Type
          </div>

          <div
            className="mt-3 text-xl font-black"
            style={{
              color: COLORS.text,
            }}
          >
            Collaborative Academic Project
          </div>
        </motion.div>
      </section>

      {/* TEAM */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
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
        >
          <div
            className="text-xs font-black uppercase tracking-[.2em]"
            style={{
              color: COLORS.blue,
            }}
          >
            The People Behind AppleHub
          </div>

          <h2
            className="mt-3 text-4xl font-black md:text-6xl"
            style={{
              color: COLORS.text,
            }}
          >
            Our Team
          </h2>

          <p
            className="mt-5 max-w-3xl leading-8"
            style={{
              color: COLORS.textLight,
            }}
          >
            Meet the team members who contributed to the research, development,
            media, presentation, and coordination of AppleHub.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* STATS */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Stat number="20" label="Team Members" index={0} />
          <Stat number="3" label="Project Groups" index={1} />
          <Stat number="6" label="Main Sections" index={2} />
          <Stat number="100%" label="Collaborative" index={3} />
        </div>
      </section>

      {/* RESOURCES */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <div
            className="text-xs font-black uppercase tracking-[.2em]"
            style={{
              color: COLORS.blue,
            }}
          >
            Project Resources
          </div>

          <h2
            className="mt-3 text-4xl font-black md:text-6xl"
            style={{
              color: COLORS.text,
            }}
          >
            Research & Media
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map(([category, title, description], index) => (
            <ResourceCard
              key={title}
              category={category}
              title={title}
              description={description}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* MISSION */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <motion.div
          className="rounded-[2.5rem] border bg-white p-8 md:p-12"
          style={{
            borderColor: COLORS.border,
          }}
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <div
                className="text-xs font-black uppercase tracking-[.2em]"
                style={{
                  color: COLORS.blue,
                }}
              >
                Our Mission
              </div>

              <h2
                className="mt-4 text-5xl font-black"
                style={{
                  color: COLORS.text,
                }}
              >
                Learn.
                <br />
                Research.
                <br />
                Create.
              </h2>

              <p
                className="mt-6 max-w-md leading-8"
                style={{
                  color: COLORS.textLight,
                }}
              >
                AppleHub combines academic research with technology, creativity,
                design, and teamwork.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "01",
                  "Research",
                  "Analyze Apple technologies, device architecture, history, and engineering.",
                ],
                [
                  "02",
                  "Development",
                  "Build an interactive academic website using modern web technologies.",
                ],
                [
                  "03",
                  "Media",
                  "Present research through videos, presentations, and visual content.",
                ],
                [
                  "04",
                  "Learning",
                  "Develop practical collaboration, research, design, and technical skills.",
                ],
              ].map(([number, title, text], index) => (
                <motion.div
                  key={title}
                  className="rounded-[1.7rem] border p-6"
                  style={{
                    borderColor: COLORS.border,
                    background: index % 2 === 0 ? COLORS.softBlue : COLORS.soft,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-xs font-black"
                    style={{
                      background: index % 2 === 0 ? COLORS.cyan : COLORS.green,
                      color: COLORS.text,
                    }}
                  >
                    {number}
                  </div>

                  <h3
                    className="text-xl font-black"
                    style={{
                      color: COLORS.text,
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    className="mt-3 text-sm leading-7"
                    style={{
                      color: COLORS.textLight,
                    }}
                  >
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER ANIMATION */}

      <section className="overflow-hidden px-6 py-24">
        <motion.div
          className="text-center text-[17vw] font-black leading-none tracking-[-.08em] text-transparent"
          style={{
            WebkitTextStroke: `1px ${COLORS.border}`,
          }}
          animate={{
            letterSpacing: ["-0.08em", "-0.045em", "-0.08em"],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          APPLEHUB
        </motion.div>
      </section>
    </main>
  );
}
