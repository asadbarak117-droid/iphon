import { useRef } from "react";

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
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

function FloatingShape({ index }) {
  const size = 16 + (index % 4) * 10;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        left: `${(index * 19) % 100}%`,
        top: `${(index * 29) % 100}%`,
        borderRadius: index % 2 === 0 ? "35%" : "50%",
        background:
          index % 3 === 0
            ? COLORS.cyan
            : index % 3 === 1
              ? COLORS.green
              : COLORS.blue,
        opacity: 0.12,
        filter: "blur(1px)",
      }}
      animate={{
        x: [0, 35, -20, 0],
        y: [0, -30, 20, 0],
        rotate: [0, 90, 180, 360],
        scale: [1, 1.2, 0.85, 1],
      }}
      transition={{
        duration: 10 + index * 0.7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.25,
      }}
    />
  );
}

function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 18 }).map((_, index) => (
        <FloatingShape key={index} index={index} />
      ))}
    </div>
  );
}

function NameMarquee() {
  const names = teamMembers.map((member) => member.name);

  return (
    <section className="relative overflow-hidden py-8">
      <motion.div
        className="flex w-max gap-4"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...names, ...names].map((name, index) => (
          <motion.div
            key={`${name}-${index}`}
            whileHover={{
              y: -6,
              scale: 1.05,
            }}
            className="rounded-full border px-6 py-3 text-sm font-semibold whitespace-nowrap shadow-sm"
            style={{
              background: "rgba(255,255,255,0.75)",
              borderColor: COLORS.border,
              color: COLORS.text,
              backdropFilter: "blur(12px)",
            }}
          >
            {name}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-4 flex w-max gap-4"
        animate={{
          x: ["-50%", "0%"],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...names, ...names].map((name, index) => (
          <motion.div
            key={`reverse-${name}-${index}`}
            whileHover={{
              y: -6,
              scale: 1.05,
            }}
            className="rounded-full border px-6 py-3 text-sm font-semibold whitespace-nowrap shadow-sm"
            style={{
              background: "rgba(255,255,255,0.75)",
              borderColor: COLORS.border,
              color: COLORS.textLight,
              backdropFilter: "blur(12px)",
            }}
          >
            {name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function Stat({ number, label, index }) {
  return (
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
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="relative overflow-hidden rounded-[28px] border p-7"
      style={{
        background: "rgba(255,255,255,0.78)",
        borderColor: COLORS.border,
        boxShadow: "0 20px 50px rgba(23,50,77,0.06)",
      }}
    >
      <motion.div
        className="absolute -right-8 -top-8 h-24 w-24 rounded-full"
        style={{
          background: index % 2 === 0 ? COLORS.cyan : COLORS.green,
          opacity: 0.35,
          filter: "blur(15px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 8, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10">
        <div
          className="text-4xl font-black tracking-tight"
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
      </div>
    </motion.div>
  );
}

function ModernAvatar({ name, index }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      className="relative flex h-16 w-16 items-center justify-center rounded-[22px] border text-lg font-black"
      style={{
        background:
          index % 2 === 0
            ? `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.cyan}55)`
            : `linear-gradient(135deg, ${COLORS.green}80, ${COLORS.mint})`,
        borderColor: COLORS.border,
        color: COLORS.text,
        boxShadow: "0 15px 30px rgba(48,175,255,0.12)",
      }}
      animate={{
        y: [0, -4, 0],
        rotate: [0, 1.5, 0],
      }}
      transition={{
        duration: 4 + (index % 3),
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.08,
      }}
    >
      {initials}

      <motion.span
        className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2"
        style={{
          background: COLORS.green,
          borderColor: COLORS.white,
          boxShadow: `0 0 0 4px ${COLORS.green}30`,
        }}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

function TeamCard({ member, index }) {
  const cardRef = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const shineX = useMotionValue(50);
  const shineY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, {
    stiffness: 240,
    damping: 18,
    mass: 0.55,
  });

  const springRotateY = useSpring(rotateY, {
    stiffness: 240,
    damping: 18,
    mass: 0.55,
  });

  const springSpotlightX = useSpring(spotlightX, {
    stiffness: 350,
    damping: 28,
  });

  const springSpotlightY = useSpring(spotlightY, {
    stiffness: 350,
    damping: 28,
  });

  const springShineX = useSpring(shineX, {
    stiffness: 400,
    damping: 30,
  });

  const springShineY = useSpring(shineY, {
    stiffness: 400,
    damping: 30,
  });

  const cardTransform = useMotionTemplate`
    perspective(1400px)
    rotateX(${springRotateX}deg)
    rotateY(${springRotateY}deg)
    translateZ(0px)
  `;

  const spotlight = useMotionTemplate`
    radial-gradient(
      circle 230px at ${springSpotlightX}% ${springSpotlightY}%,
      rgba(48,175,255,0.26),
      rgba(146,238,255,0.12) 32%,
      rgba(216,255,197,0.08) 48%,
      transparent 72%
    )
  `;

  const shine = useMotionTemplate`
    radial-gradient(
      circle 140px at ${springShineX}% ${springShineY}%,
      rgba(255,255,255,0.55),
      transparent 70%
    )
  `;

  const handleMouseMove = (event) => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    rotateY.set((percentX - 50) * 0.38);
    rotateX.set((percentY - 50) * -0.38);

    spotlightX.set(percentX);
    spotlightY.set(percentY);

    shineX.set(percentX);
    shineY.set(percentY);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);

    spotlightX.set(50);
    spotlightY.set(50);

    shineX.set(50);
    shineY.set(50);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay: index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transform: cardTransform,
        transformStyle: "preserve-3d",
        perspective: 1400,
        willChange: "transform",
        background: COLORS.white,
        borderColor: COLORS.border,
      }}
      className="group relative overflow-hidden rounded-[32px] border shadow-[0_20px_60px_rgba(23,50,77,0.08)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: spotlight,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: shine,
          mixBlendMode: "screen",
        }}
      />

      <motion.div
        className="absolute left-0 right-0 top-0 z-30 h-[3px]"
        style={{
          background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.green})`,
          transform: "translateZ(85px)",
        }}
        initial={{
          scaleX: 0,
          transformOrigin: "left",
        }}
        whileInView={{
          scaleX: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.9,
          delay: index * 0.035 + 0.2,
        }}
      />

      <motion.div
        className="relative z-10 p-7"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="flex items-start justify-between gap-4"
          style={{
            transform: "translateZ(65px)",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            whileHover={{
              scale: 1.12,
              rotateZ: 5,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 14,
            }}
          >
            <ModernAvatar name={member.name} index={index} />
          </motion.div>

          <motion.div
            className="rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{
              borderColor: `${COLORS.blue}30`,
              background: COLORS.softBlue,
              color: COLORS.blue,
              transform: "translateZ(90px)",
              transformStyle: "preserve-3d",
            }}
            whileHover={{
              scale: 1.12,
              y: -5,
              rotateZ: 3,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
          >
            {member.group}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8"
          style={{
            transform: "translateZ(58px)",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.h3
            className="text-xl font-black tracking-tight"
            style={{
              color: COLORS.text,
              transform: "translateZ(35px)",
              transformStyle: "preserve-3d",
            }}
            whileHover={{
              x: 4,
            }}
          >
            {member.name}
          </motion.h3>

          <motion.p
            className="mt-2 text-sm font-bold"
            style={{
              color: COLORS.blue,
              transform: "translateZ(28px)",
            }}
          >
            {member.role}
          </motion.p>

          <motion.p
            className="mt-4 text-sm leading-6"
            style={{
              color: COLORS.textLight,
              transform: "translateZ(20px)",
            }}
          >
            {member.work}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center gap-3"
          style={{
            transform: "translateZ(48px)",
            transformStyle: "preserve-3d",
          }}
        >
          <motion.span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              background: COLORS.green,
              boxShadow: `0 0 0 5px ${COLORS.green}40`,
              transform: "translateZ(15px)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.65, 1, 0.65],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <span
            className="text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{
              color: COLORS.textLight,
              transform: "translateZ(10px)",
            }}
          >
            AppleHub Team
          </span>
        </motion.div>

        <motion.div
          className="mt-7 h-px w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${COLORS.cyan}, transparent)`,
            transform: "translateZ(30px)",
          }}
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full"
        style={{
          background: `${COLORS.cyan}20`,
          filter: "blur(35px)",
          transform: "translateZ(35px)",
        }}
        animate={{
          x: [0, 18, 0],
          y: [0, -12, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.12,
        }}
      />

      <motion.div
        className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full"
        style={{
          background: `${COLORS.green}25`,
          filter: "blur(35px)",
          transform: "translateZ(25px)",
        }}
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
          scale: [1, 1.18, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.1,
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[32px]"
        style={{
          border: `1px solid ${COLORS.cyan}00`,
          transform: "translateZ(100px)",
        }}
        whileHover={{
          borderColor: `${COLORS.cyan}70`,
          boxShadow: `0 0 35px ${COLORS.cyan}20`,
        }}
      />
    </motion.article>
  );
}

function AcademicInformation() {
  const information = [
    {
      label: "University",
      value: "Zen University",
      icon: "01",
    },
    {
      label: "Faculty / Department",
      value: "Computer Science",
      icon: "02",
    },
    {
      label: "Supervisor",
      value: "Professor Reza Khavari",
      icon: "03",
    },
    {
      label: "Project Manager",
      value: "Fariba Mohammadi",
      icon: "04",
    },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12">
      <motion.div
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
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mb-14"
      >
        <div
          className="text-xs font-black uppercase tracking-[0.22em]"
          style={{
            color: COLORS.blue,
          }}
        >
          Academic Information
        </div>

        <h2
          className="mt-4 text-4xl font-black tracking-tight md:text-6xl"
          style={{
            color: COLORS.text,
          }}
        >
          The project behind
          <br />
          <span style={{ color: COLORS.blue }}>the experience.</span>
        </h2>

        <p
          className="mt-5 max-w-2xl text-base leading-8 md:text-lg"
          style={{
            color: COLORS.textLight,
          }}
        >
          AppleHub was developed as a collaborative academic project in which
          students contributed through research, development, media, and project
          coordination.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2">
        {information.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -40 : 40,
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
              duration: 0.75,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.015,
            }}
            className="group relative overflow-hidden rounded-[30px] border p-7"
            style={{
              background: "rgba(255,255,255,0.8)",
              borderColor: COLORS.border,
              boxShadow: "0 20px 55px rgba(23,50,77,0.06)",
              backdropFilter: "blur(18px)",
            }}
          >
            <motion.div
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full"
              style={{
                background: index % 2 === 0 ? COLORS.cyan : COLORS.green,
                opacity: 0.2,
                filter: "blur(20px)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 8, 0],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10 flex items-center gap-6">
              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.1,
                }}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] border text-sm font-black"
                style={{
                  background: COLORS.softBlue,
                  borderColor: COLORS.border,
                  color: COLORS.blue,
                }}
              >
                {item.icon}
              </motion.div>

              <div>
                <div
                  className="text-xs font-black uppercase tracking-[0.18em]"
                  style={{
                    color: COLORS.textLight,
                  }}
                >
                  {item.label}
                </div>

                <div
                  className="mt-2 text-lg font-black"
                  style={{
                    color: COLORS.text,
                  }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
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
          duration: 0.8,
          delay: 0.2,
        }}
        className="mt-5 rounded-[30px] border p-7"
        style={{
          background: `linear-gradient(135deg, ${COLORS.white}, ${COLORS.softBlue})`,
          borderColor: COLORS.border,
          boxShadow: "0 20px 55px rgba(23,50,77,0.06)",
        }}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div
              className="text-xs font-black uppercase tracking-[0.18em]"
              style={{
                color: COLORS.blue,
              }}
            >
              Project Type
            </div>

            <div
              className="mt-2 text-2xl font-black"
              style={{
                color: COLORS.text,
              }}
            >
              Collaborative Academic Project
            </div>
          </div>

          <motion.div
            animate={{
              x: [0, 8, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-4xl font-black"
            style={{
              color: COLORS.blue,
            }}
          >
            →
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ResourceCard({ icon, title, description, items, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.94,
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
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -14,
      }}
      className="group relative overflow-hidden rounded-[36px] border p-8"
      style={{
        background: "rgba(255,255,255,0.82)",
        borderColor: COLORS.border,
        boxShadow: "0 25px 70px rgba(23,50,77,0.08)",
        backdropFilter: "blur(20px)",
      }}
    >
      <motion.div
        className="absolute -right-20 -top-20 h-52 w-52 rounded-full"
        style={{
          background:
            index === 0
              ? COLORS.cyan
              : index === 1
                ? COLORS.green
                : COLORS.blue,
          opacity: 0.18,
          filter: "blur(35px)",
        }}
        animate={{
          scale: [1, 1.25, 1],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full"
        style={{
          background: index % 2 === 0 ? COLORS.green : COLORS.cyan,
          opacity: 0.14,
          filter: "blur(30px)",
        }}
        animate={{
          x: [0, -15, 0],
          y: [0, 12, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{
            scale: 1.12,
            rotate: 6,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 14,
          }}
          className="flex h-20 w-20 items-center justify-center rounded-[26px] border text-3xl"
          style={{
            background:
              index === 0
                ? `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.cyan}55)`
                : index === 1
                  ? `linear-gradient(135deg, ${COLORS.green}70, ${COLORS.mint})`
                  : `linear-gradient(135deg, ${COLORS.cyan}45, ${COLORS.softBlue})`,
            borderColor: COLORS.border,
            boxShadow: "0 20px 40px rgba(48,175,255,0.12)",
          }}
        >
          {icon}
        </motion.div>

        <div className="mt-8">
          <div
            className="text-xs font-black uppercase tracking-[0.22em]"
            style={{
              color: COLORS.blue,
            }}
          >
            {items.length} Resources
          </div>

          <h3
            className="mt-3 text-3xl font-black tracking-tight"
            style={{
              color: COLORS.text,
            }}
          >
            {title}
          </h3>

          <p
            className="mt-4 text-sm leading-7"
            style={{
              color: COLORS.textLight,
            }}
          >
            {description}
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {items.map((item, itemIndex) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2 + itemIndex * 0.08,
              }}
              whileHover={{
                x: 8,
              }}
              className="flex items-center justify-between rounded-2xl border px-4 py-4"
              style={{
                background: "rgba(247,251,255,0.8)",
                borderColor: COLORS.border,
              }}
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    background:
                      itemIndex % 2 === 0 ? COLORS.blue : COLORS.green,
                    boxShadow:
                      itemIndex % 2 === 0
                        ? `0 0 0 5px ${COLORS.blue}20`
                        : `0 0 0 5px ${COLORS.green}25`,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: itemIndex * 0.2,
                  }}
                />

                <span
                  className="text-sm font-bold"
                  style={{
                    color: COLORS.text,
                  }}
                >
                  {item}
                </span>
              </div>

              <motion.span
                whileHover={{
                  x: 4,
                }}
                style={{
                  color: COLORS.blue,
                }}
              >
                →
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectResources() {
  const resources = [
    {
      icon: "▶",
      title: "Videos",
      description:
        "Watch our project presentations, educational explanations, demonstrations, and media content.",
      items: [
        "Project Presentation",
        "iPhone Anatomy Video",
        "MacBook Anatomy Video",
      ],
    },
    {
      icon: "▤",
      title: "Articles",
      description:
        "Explore the research and written material prepared by our team about Apple technology and device anatomy.",
      items: ["Research Article", "iPhone Research", "MacBook Research"],
    },
    {
      icon: "◎",
      title: "Profiles",
      description:
        "Learn more about the people behind AppleHub, their responsibilities, skills, and contribution to the project.",
      items: ["Team Profiles", "Developer Profiles", "Researcher Profiles"],
    },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-12">
      <motion.div
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
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mb-14"
      >
        <div
          className="text-xs font-black uppercase tracking-[0.22em]"
          style={{
            color: COLORS.blue,
          }}
        >
          Project Resources
        </div>

        <h2
          className="mt-4 text-4xl font-black tracking-tight md:text-6xl"
          style={{
            color: COLORS.text,
          }}
        >
          Explore the work.
        </h2>

        <p
          className="mt-5 max-w-2xl text-base leading-8 md:text-lg"
          style={{
            color: COLORS.textLight,
          }}
        >
          Discover the videos, research articles, and personal profiles that
          complete the AppleHub experience.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <ResourceCard key={resource.title} {...resource} index={index} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 10% 10%, ${COLORS.cyan}25, transparent 28%),
          radial-gradient(circle at 90% 20%, ${COLORS.green}35, transparent 28%),
          radial-gradient(circle at 50% 100%, ${COLORS.softBlue}, transparent 35%),
          ${COLORS.soft}
        `,
        color: COLORS.text,
      }}
    >
      <FloatingShapes />

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-28 md:px-10 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
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
                delay: 0.15,
                duration: 0.7,
              }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em]"
              style={{
                background: "rgba(255,255,255,0.75)",
                borderColor: COLORS.border,
                color: COLORS.blue,
                backdropFilter: "blur(14px)",
                boxShadow: "0 10px 30px rgba(23,50,77,0.05)",
              }}
            >
              <motion.span
                className="h-2 w-2 rounded-full"
                style={{
                  background: COLORS.blue,
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                }}
              />
              About AppleHub
            </motion.div>

            <motion.h1
              className="text-[clamp(4rem,12vw,9rem)] font-black leading-[0.78] tracking-[-0.07em]"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span style={{ color: COLORS.text }}>APPLE</span>

              <br />

              <motion.span
                style={{
                  color: COLORS.blue,
                }}
                animate={{
                  letterSpacing: ["-0.07em", "-0.045em", "-0.07em"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                HUB
              </motion.span>
            </motion.h1>

            <motion.h2
              className="mt-8 text-2xl font-bold md:text-3xl"
              style={{
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
                delay: 0.45,
                duration: 0.7,
              }}
            >
              The people behind AppleHub.
            </motion.h2>

            <motion.p
              className="mt-6 max-w-2xl text-base leading-8 md:text-lg"
              style={{
                color: COLORS.textLight,
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
                delay: 0.55,
                duration: 0.7,
              }}
            >
              AppleHub is a collaborative project created by researchers,
              developers, media creators, and project managers working together
              to make Apple technology easier to understand.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.65,
                duration: 0.7,
              }}
            >
              {["Research", "Development", "Media", "Design"].map(
                (item, index) => (
                  <motion.span
                    key={item}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                    }}
                    className="rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em]"
                    style={{
                      background:
                        index % 2 === 0 ? COLORS.white : COLORS.softBlue,
                      borderColor: COLORS.border,
                      color: COLORS.text,
                    }}
                  >
                    {item}
                  </motion.span>
                ),
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1.1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-md"
          >
            <motion.div
              className="relative aspect-square rounded-[42px] border p-8"
              style={{
                background: "rgba(255,255,255,0.68)",
                borderColor: COLORS.border,
                backdropFilter: "blur(20px)",
                boxShadow: "0 35px 100px rgba(23,50,77,0.1)",
              }}
              animate={{
                y: [0, -12, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${COLORS.cyan}65, ${COLORS.green}30, transparent 70%)`,
                  filter: "blur(12px)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative flex h-full items-center justify-center">
                <motion.div
                  className="relative flex h-48 w-48 items-center justify-center rounded-[48px] border"
                  style={{
                    background: `linear-gradient(145deg, ${COLORS.white}, ${COLORS.softBlue})`,
                    borderColor: COLORS.border,
                    boxShadow:
                      "0 30px 60px rgba(48,175,255,0.16), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                  animate={{
                    rotateY: [0, 8, 0, -8, 0],
                    rotateX: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="text-5xl font-black tracking-[-0.08em]"
                    style={{
                      color: COLORS.text,
                    }}
                  >
                    A<span style={{ color: COLORS.blue }}>H</span>
                  </div>

                  <motion.div
                    className="absolute -right-5 -top-5 h-12 w-12 rounded-2xl"
                    style={{
                      background: COLORS.green,
                      boxShadow: `0 15px 30px ${COLORS.green}70`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-4 -left-4 h-9 w-9 rounded-full"
                    style={{
                      background: COLORS.blue,
                      boxShadow: `0 12px 25px ${COLORS.blue}55`,
                    }}
                    animate={{
                      x: [0, 8, 0],
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10">
        <NameMarquee />
      </section>

      <AcademicInformation />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
        <motion.div
          className="mb-12"
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
            duration: 0.8,
          }}
        >
          <div
            className="text-xs font-black uppercase tracking-[0.22em]"
            style={{
              color: COLORS.blue,
            }}
          >
            The team
          </div>

          <h2
            className="mt-4 text-4xl font-black tracking-tight md:text-6xl"
            style={{
              color: COLORS.text,
            }}
          >
            Meet everyone.
          </h2>

          <p
            className="mt-5 max-w-2xl text-base leading-7"
            style={{
              color: COLORS.textLight,
            }}
          >
            Every person brings a different skill, but together we create one
            growing idea.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Stat number="20" label="Team Members" index={0} />
          <Stat number="3" label="Groups" index={1} />
          <Stat number="4" label="Main Roles" index={2} />
          <Stat number="1" label="Project" index={3} />
        </div>
      </section>

      <ProjectResources />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-10 lg:px-12">
        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative overflow-hidden rounded-[42px] border p-8 md:p-14 lg:p-20"
          style={{
            background: `
              radial-gradient(circle at 80% 20%, ${COLORS.cyan}35, transparent 30%),
              radial-gradient(circle at 20% 90%, ${COLORS.green}35, transparent 30%),
              rgba(255,255,255,0.82)
            `,
            borderColor: COLORS.border,
            boxShadow: "0 35px 100px rgba(23,50,77,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          <motion.div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full"
            style={{
              background: COLORS.cyan,
              opacity: 0.16,
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full"
            style={{
              background: COLORS.green,
              opacity: 0.2,
              filter: "blur(45px)",
            }}
            animate={{
              scale: [1, 1.15, 1],
              x: [0, -20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 max-w-4xl">
            <div
              className="text-xs font-black uppercase tracking-[0.22em]"
              style={{
                color: COLORS.blue,
              }}
            >
              Our Mission
            </div>

            <h2
              className="mt-5 text-4xl font-black tracking-tight md:text-6xl"
              style={{
                color: COLORS.text,
              }}
            >
              Different skills.
              <br />
              <span style={{ color: COLORS.blue }}>One vision.</span>
            </h2>

            <p
              className="mt-7 max-w-3xl text-base leading-8 md:text-lg"
              style={{
                color: COLORS.textLight,
              }}
            >
              By combining research, web development, media, presentation, and
              project management, our team created AppleHub to provide a clear
              and engaging way to explore Apple technology.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Research",
                "Web Development",
                "Media",
                "Presentation",
                "Management",
                "Coordination",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{
                    y: -6,
                    scale: 1.06,
                    rotate: index % 2 === 0 ? 1 : -1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="rounded-full border px-5 py-3 text-xs font-bold"
                  style={{
                    background: COLORS.white,
                    borderColor: COLORS.border,
                    color: COLORS.text,
                    boxShadow: "0 10px 25px rgba(23,50,77,0.05)",
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 overflow-hidden px-6 pb-10 pt-10">
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
          }}
          transition={{
            duration: 1,
          }}
          className="text-center text-[clamp(5rem,20vw,18rem)] font-black leading-none tracking-[-0.09em]"
          style={{
            color: "transparent",
            WebkitTextStroke: `1px ${COLORS.border}`,
          }}
        >
          APPLEHUB
        </motion.div>
      </section>
    </main>
  );
}

export default About;
