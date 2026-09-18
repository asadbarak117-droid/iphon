import { memo, useMemo, useRef } from "react";
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

const groups = [
  {
    id: 1,
    title: "Research & Analysis",
    description:
      "The first group focuses on research, academic investigation, documentation, and the development of research-based content for AppleHub.",
    icon: "01",
    gradient: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.cyan})`,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "The second group focuses on website development, interface implementation, responsive layouts, and transforming research into an interactive digital experience.",
    icon: "02",
    gradient: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.mint})`,
  },
  {
    id: 3,
    title: "Media & Presentation",
    description:
      "The third group contributes to multimedia production, presentations, video content, research communication, and digital storytelling.",
    icon: "03",
    gradient: `linear-gradient(135deg, ${COLORS.green}, ${COLORS.mint})`,
  },
  {
    id: 4,
    title: "Group 4",
    description:
      "This section is reserved for Group 4 information. Member details can be added here when the Group 4 data is available.",
    icon: "04",
    gradient: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.green})`,
  },
];

const resources = [
  {
    number: "01",
    category: "Videos",
    title: "Project Presentation",
    description:
      "Presentation materials introducing the AppleHub academic project and its main objectives.",
    icon: "▶",
  },
  {
    number: "02",
    category: "Videos",
    title: "iPhone Anatomy Video",
    description:
      "A visual exploration of iPhone components, design, technology, and internal architecture.",
    icon: "▶",
  },
  {
    number: "03",
    category: "Videos",
    title: "MacBook Anatomy Video",
    description:
      "A visual exploration of MacBook components, engineering, design, and internal systems.",
    icon: "▶",
  },
  {
    number: "04",
    category: "Articles",
    title: "Research Article",
    description:
      "Academic research supporting the technical and historical content presented throughout AppleHub.",
    icon: "A",
  },
  {
    number: "05",
    category: "Articles",
    title: "iPhone Research",
    description:
      "Research covering iPhone evolution, design, processors, cameras, sensors, security, and technology.",
    icon: "A",
  },
  {
    number: "06",
    category: "Articles",
    title: "MacBook Research",
    description:
      "Research covering MacBook evolution, materials, processors, ports, architecture, and design.",
    icon: "A",
  },
];

const missions = [
  {
    title: "Research",
    text: "Explore Apple technology through structured academic research and documentation.",
    icon: "⌕",
  },
  {
    title: "Development",
    text: "Transform research and ideas into an interactive modern web experience.",
    icon: "</>",
  },
  {
    title: "Media",
    text: "Present technical information through visual content, video, and multimedia.",
    icon: "◉",
  },
  {
    title: "Learning",
    text: "Combine academic learning with practical teamwork, design, and development.",
    icon: "✦",
  },
];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function getMemberGroups(member) {
  if (member.group === "All Group") {
    return [1, 2, 3, 4];
  }

  return member.group
    .split(",")
    .map((value) => Number(value.trim()))
    .filter(Boolean);
}

const MouseGlow = memo(function MouseGlow() {
  const ref = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
  });

  const springY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
  });

  const glow = useMotionTemplate`
    radial-gradient(
      600px circle at ${springX}px ${springY}px,
      rgba(48,175,255,.10),
      transparent 65%
    )
  `;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 hidden lg:block"
      style={{
        background: glow,
      }}
      onMouseMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
    />
  );
});

const SectionLabel = memo(function SectionLabel({ children }) {
  return (
    <div
      className="mb-4 text-xs font-black uppercase tracking-[0.25em]"
      style={{
        color: COLORS.blue,
      }}
    >
      {children}
    </div>
  );
});

const MemberCard = memo(function MemberCard({ member, index }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-[2rem] border bg-white p-6"
      style={{
        borderColor: COLORS.border,
        boxShadow: "0 20px 60px rgba(48,175,255,.06)",
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: Math.min(index * 0.04, 0.3),
      }}
      whileHover={{
        y: -8,
      }}
    >
      <motion.div
        className="absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl"
        style={{
          background: COLORS.cyan,
          opacity: 0.18,
        }}
        whileHover={{
          scale: 1.5,
        }}
      />

      <div className="relative z-10 flex items-start gap-5">
        <motion.div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-sm font-black"
          style={{
            background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.cyan})`,
            color: COLORS.text,
          }}
          whileHover={{
            rotate: 6,
            scale: 1.08,
          }}
        >
          {initials(member.name)}
        </motion.div>

        <div className="min-w-0 flex-1">
          <h4
            className="text-lg font-black"
            style={{
              color: COLORS.text,
            }}
          >
            {member.name}
          </h4>

          <div
            className="mt-2 text-xs font-bold uppercase tracking-wider"
            style={{
              color: COLORS.blue,
            }}
          >
            {member.role}
          </div>
        </div>
      </div>

      <div
        className="relative z-10 mt-6 rounded-2xl border p-4"
        style={{
          background: COLORS.soft,
          borderColor: COLORS.border,
        }}
      >
        <div
          className="text-[10px] font-black uppercase tracking-[.18em]"
          style={{
            color: COLORS.textLight,
          }}
        >
          Contribution
        </div>

        <p
          className="mt-2 text-sm leading-6"
          style={{
            color: COLORS.textLight,
          }}
        >
          {member.work}
        </p>
      </div>
    </motion.div>
  );
});

const GroupSection = memo(function GroupSection({ group, members }) {
  return (
    <section
      id={`group-${group.id}`}
      className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:px-10 lg:px-12"
    >
      <motion.div
        className="overflow-hidden rounded-[3rem] border bg-white"
        style={{
          borderColor: COLORS.border,
          boxShadow: "0 30px 100px rgba(48,175,255,.07)",
        }}
        initial={{
          opacity: 0,
          y: 45,
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
          duration: 0.8,
        }}
      >
        <div
          className="relative overflow-hidden p-8 md:p-12 lg:p-14"
          style={{
            background: group.gradient,
          }}
        >
          <motion.div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 text-sm font-black text-[#17324D] backdrop-blur">
                  {group.icon}
                </div>

                <div className="text-xs font-black uppercase tracking-[.2em] text-[#17324D]/60">
                  Project Group
                </div>
              </div>

              <h2 className="text-4xl font-black tracking-tight text-[#17324D] md:text-5xl">
                Group {group.id}
              </h2>

              <h3 className="mt-2 text-xl font-bold text-[#17324D]/80 md:text-2xl">
                {group.title}
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#17324D]/70 md:text-base">
                {group.description}
              </p>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/50 px-5 py-4 backdrop-blur">
              <div className="text-2xl font-black text-[#17324D]">
                {members.length}
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#17324D]/60">
                Listed Members
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-10">
          {members.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {members.map((member, index) => (
                <MemberCard
                  key={`${group.id}-${member.name}`}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div
              className="rounded-[2rem] border border-dashed p-10 text-center"
              style={{
                borderColor: COLORS.border,
                background: COLORS.soft,
              }}
            >
              <div className="text-4xl">＋</div>

              <h4
                className="mt-4 text-xl font-black"
                style={{
                  color: COLORS.text,
                }}
              >
                Group 4 Members
              </h4>

              <p
                className="mx-auto mt-3 max-w-xl text-sm leading-7"
                style={{
                  color: COLORS.textLight,
                }}
              >
                Member information for this group has not been added yet. You
                can add the Group 4 members to the team data when they are
                available.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
});

function About() {
  const groupedMembers = useMemo(() => {
    return groups.reduce((result, group) => {
      result[group.id] = teamMembers.filter((member) =>
        getMemberGroups(member).includes(group.id),
      );

      return result;
    }, {});
  }, []);

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        background: COLORS.soft,
        color: COLORS.text,
      }}
    >
      <MouseGlow />

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full blur-3xl"
          style={{
            background: COLORS.cyan,
            opacity: 0.16,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-[-15%] top-[30%] h-[500px] w-[500px] rounded-full blur-3xl"
          style={{
            background: COLORS.green,
            opacity: 0.16,
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* HERO */}

      <section
        id="hero"
        className="relative z-10 flex min-h-[92vh] items-center justify-center overflow-hidden px-6 py-28"
      >
        <motion.div
          className="absolute left-[8%] top-[20%] h-24 w-24 rounded-full border"
          style={{
            borderColor: COLORS.cyan,
            opacity: 0.6,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[15%] right-[8%] h-32 w-32 rounded-full border"
          style={{
            borderColor: COLORS.green,
            opacity: 0.7,
          }}
          animate={{
            y: [0, 30, 0],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border bg-white text-3xl font-black"
            style={{
              borderColor: COLORS.border,
              color: COLORS.text,
              boxShadow: "0 30px 80px rgba(48,175,255,.15)",
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.08,
              rotate: 5,
            }}
          >
            AH
          </motion.div>

          <motion.div
            className="mt-8 text-xs font-black uppercase tracking-[.35em]"
            style={{
              color: COLORS.blue,
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
              delay: 0.2,
            }}
          >
            Academic Technology Project
          </motion.div>

          <motion.h1
            className="mt-5 text-6xl font-black tracking-[-0.06em] md:text-8xl lg:text-9xl"
            style={{
              color: COLORS.text,
            }}
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
          >
            APPLEHUB
          </motion.h1>

          <motion.div
            className="mx-auto mt-7 h-1 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.green})`,
            }}
            initial={{
              width: 0,
            }}
            animate={{
              width: 180,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
          />

          <motion.p
            className="mx-auto mt-8 max-w-3xl text-base leading-8 md:text-xl"
            style={{
              color: COLORS.textLight,
            }}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
          >
            A collaborative academic project exploring Apple technology through
            research, design, web development, multimedia, and technical
            analysis.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap justify-center gap-3"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
          >
            {["Research", "Development", "Media", "Design"].map(
              (item, index) => (
                <motion.span
                  key={item}
                  className="rounded-full border bg-white px-5 py-2.5 text-xs font-bold"
                  style={{
                    borderColor: COLORS.border,
                    color: COLORS.text,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.04,
                  }}
                >
                  {item}
                </motion.span>
              ),
            )}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
        >
          <span
            className="text-[9px] font-black uppercase tracking-[.3em]"
            style={{
              color: COLORS.textLight,
            }}
          >
            Scroll
          </span>

          <motion.div
            className="h-12 w-px"
            style={{
              background: COLORS.blue,
            }}
            animate={{
              scaleY: [0.3, 1, 0.3],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </section>

      {/* ACADEMIC INFORMATION / UNIVERSITY */}

      <section
        id="university"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:px-10 lg:px-12"
      >
        <motion.div
          className="relative overflow-hidden rounded-[3rem] border bg-white p-8 md:p-12 lg:p-16"
          style={{
            borderColor: COLORS.border,
            boxShadow: "0 30px 100px rgba(48,175,255,.08)",
          }}
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <motion.div
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl"
            style={{
              background: COLORS.cyan,
              opacity: 0.2,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl"
            style={{
              background: COLORS.green,
              opacity: 0.2,
            }}
            animate={{
              scale: [1, 1.25, 1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10">
            <SectionLabel>Academic Information</SectionLabel>

            <motion.h2
              className="text-4xl font-black md:text-6xl"
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
            >
              University Project
            </motion.h2>

            <motion.p
              className="mt-5 max-w-3xl text-base leading-8 md:text-lg"
              style={{
                color: COLORS.textLight,
              }}
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
                delay: 0.1,
              }}
            >
              AppleHub is a collaborative academic project developed through
              research, technology, design, development, and multimedia.
            </motion.p>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: "🎓",
                  label: "University",
                  value: "Zen University",
                },
                {
                  icon: "💻",
                  label: "Faculty",
                  value: "Computer Science",
                },
                {
                  icon: "⚡",
                  label: "Department",
                  value: "Computer Science",
                },
                {
                  icon: "👨‍🏫",
                  label: "Supervisor",
                  value: "Professor Reza Khavari",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="group rounded-[2rem] border p-6"
                  style={{
                    borderColor: COLORS.border,
                    background: COLORS.soft,
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
                    delay: 0.15 + index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.01,
                  }}
                >
                  <div className="flex items-center gap-5">
                    <motion.div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl"
                      style={{
                        background:
                          index % 2 === 0
                            ? `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.white})`
                            : `linear-gradient(135deg, ${COLORS.green}, ${COLORS.white})`,
                      }}
                      whileHover={{
                        rotate: index % 2 === 0 ? 8 : -8,
                        scale: 1.1,
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    <div>
                      <div
                        className="text-[10px] font-black uppercase tracking-[.18em]"
                        style={{
                          color: COLORS.textLight,
                        }}
                      >
                        {item.label}
                      </div>

                      <div
                        className="mt-2 text-xl font-black"
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
              className="mt-4 rounded-[2rem] border p-6"
              style={{
                borderColor: COLORS.border,
                background: `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.soft})`,
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
                delay: 0.5,
              }}
              whileHover={{
                y: -5,
              }}
            >
              <div
                className="text-[10px] font-black uppercase tracking-[.18em]"
                style={{
                  color: COLORS.textLight,
                }}
              >
                Project Type
              </div>

              <div
                className="mt-2 text-xl font-black"
                style={{
                  color: COLORS.text,
                }}
              >
                Collaborative Academic Project
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* GROUPS */}

      {groups.map((group) => (
        <GroupSection
          key={group.id}
          group={group}
          members={groupedMembers[group.id]}
        />
      ))}

      {/* ALL MEMBERS */}

      <section
        id="members"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 lg:px-12"
      >
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Project Members</SectionLabel>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Meet the Members
          </h2>

          <p
            className="mt-5 text-base leading-8 md:text-lg"
            style={{
              color: COLORS.textLight,
            }}
          >
            Each member contributes to the AppleHub project through research,
            development, media, management, or presentation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </section>

      {/* PROJECT STATS */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "20",
              label: "Team Members",
            },
            {
              number: "4",
              label: "Project Groups",
            },
            {
              number: "6",
              label: "Main Sections",
            },
            {
              number: "100%",
              label: "Collaborative",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-[2rem] border bg-white p-8 text-center"
              style={{
                borderColor: COLORS.border,
              }}
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
                delay: index * 0.08,
              }}
              whileHover={{
                y: -7,
              }}
            >
              <div
                className="text-4xl font-black md:text-5xl"
                style={{
                  color: COLORS.text,
                }}
              >
                {stat.number}
              </div>

              <div
                className="mt-3 text-xs font-black uppercase tracking-[.16em]"
                style={{
                  color: COLORS.textLight,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RESOURCES */}

      <section
        id="resources"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 lg:px-12"
      >
        <div className="mb-12 max-w-3xl">
          <SectionLabel>Project Resources</SectionLabel>

          <h2 className="text-4xl font-black md:text-6xl">Research & Media</h2>

          <p
            className="mt-5 text-base leading-8 md:text-lg"
            style={{
              color: COLORS.textLight,
            }}
          >
            Supporting materials developed throughout the AppleHub academic
            project.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="group relative overflow-hidden rounded-[2rem] border bg-white p-7"
              style={{
                borderColor: COLORS.border,
              }}
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
                delay: index * 0.06,
              }}
              whileHover={{
                y: -8,
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl font-black"
                  style={{
                    background: index % 2 === 0 ? COLORS.cyan : COLORS.green,
                    color: COLORS.text,
                  }}
                >
                  {resource.icon}
                </div>

                <span
                  className="text-xs font-black"
                  style={{
                    color: COLORS.textLight,
                  }}
                >
                  {resource.number}
                </span>
              </div>

              <div
                className="mt-7 text-[10px] font-black uppercase tracking-[.2em]"
                style={{
                  color: COLORS.blue,
                }}
              >
                {resource.category}
              </div>

              <h3
                className="mt-2 text-xl font-black"
                style={{
                  color: COLORS.text,
                }}
              >
                {resource.title}
              </h3>

              <p
                className="mt-4 text-sm leading-7"
                style={{
                  color: COLORS.textLight,
                }}
              >
                {resource.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MISSION */}

      <section
        id="mission"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 lg:px-12"
      >
        <motion.div
          className="relative overflow-hidden rounded-[3rem] border bg-white p-8 md:p-12 lg:p-16"
          style={{
            borderColor: COLORS.border,
          }}
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
          }}
        >
          <div className="relative z-10 max-w-3xl">
            <SectionLabel>Our Mission</SectionLabel>

            <h2 className="text-4xl font-black md:text-6xl">
              Learn. Build. Share.
            </h2>

            <p
              className="mt-5 text-base leading-8 md:text-lg"
              style={{
                color: COLORS.textLight,
              }}
            >
              AppleHub connects academic research with practical technology and
              creative communication. The project encourages students to work
              together while exploring modern computing and Apple technology.
            </p>
          </div>

          <div className="relative z-10 mt-12 grid gap-5 md:grid-cols-2">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.title}
                className="rounded-[2rem] border p-7"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.soft,
                }}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -25 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-black"
                  style={{
                    background: index % 2 === 0 ? COLORS.cyan : COLORS.green,
                    color: COLORS.text,
                  }}
                >
                  {mission.icon}
                </div>

                <h3
                  className="mt-6 text-xl font-black"
                  style={{
                    color: COLORS.text,
                  }}
                >
                  {mission.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{
                    color: COLORS.textLight,
                  }}
                >
                  {mission.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FOOTER ANIMATION */}

      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden px-6">
        <motion.div
          className="pointer-events-none absolute whitespace-nowrap text-[18vw] font-black tracking-[-0.08em]"
          style={{
            color: "transparent",
            WebkitTextStroke: `1px ${COLORS.border}`,
          }}
          animate={{
            x: ["0%", "-15%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          APPLEHUB
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.div
            className="mx-auto h-20 w-20 rounded-[1.7rem] border bg-white"
            style={{
              borderColor: COLORS.border,
              boxShadow: "0 20px 60px rgba(48,175,255,.12)",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div
            className="mt-8 text-xs font-black uppercase tracking-[.3em]"
            style={{
              color: COLORS.textLight,
            }}
          >
            Academic Project
          </div>

          <div
            className="mt-3 text-2xl font-black"
            style={{
              color: COLORS.text,
            }}
          >
            AppleHub
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        className="relative z-10 border-t px-6 py-10"
        style={{
          borderColor: COLORS.border,
          background: COLORS.white,
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <div
              className="text-sm font-black"
              style={{
                color: COLORS.text,
              }}
            >
              APPLEHUB
            </div>

            <div
              className="mt-1 text-xs"
              style={{
                color: COLORS.textLight,
              }}
            >
              Collaborative Academic Project
            </div>
          </div>

          <div
            className="text-xs"
            style={{
              color: COLORS.textLight,
            }}
          >
            Zen University · Computer Science
          </div>
        </div>
      </footer>
    </main>
  );
}

export default memo(About);
