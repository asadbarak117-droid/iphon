import { memo, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Play,
  Presentation,
  Search,
  Users,
  Cpu,
  Database,
  Globe,
  Layers,
  Zap,
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
    icon: "video",
  },
  {
    number: "02",
    category: "Videos",
    title: "iPhone Anatomy Video",
    description:
      "A visual exploration of iPhone components, design, technology, and internal architecture.",
    icon: "video",
  },
  {
    number: "03",
    category: "Videos",
    title: "MacBook Anatomy Video",
    description:
      "A visual exploration of MacBook components, engineering, design, and internal systems.",
    icon: "video",
  },
  {
    number: "04",
    category: "Articles",
    title: "Research Article",
    description:
      "Academic research supporting the technical and historical content presented throughout AppleHub.",
    icon: "article",
  },
  {
    number: "05",
    category: "Articles",
    title: "iPhone Research",
    description:
      "Research covering iPhone evolution, design, processors, cameras, sensors, security, and technology.",
    icon: "article",
  },
  {
    number: "06",
    category: "Articles",
    title: "MacBook Research",
    description:
      "Research covering MacBook evolution, materials, processors, ports, architecture, and design.",
    icon: "article",
  },
];

const missions = [
  {
    title: "Research",
    text: "Explore Apple technology through structured academic research and documentation.",
    icon: <Search size={22} />,
  },
  {
    title: "Development",
    text: "Transform research and ideas into an interactive modern web experience.",
    icon: <Code2 size={22} />,
  },
  {
    title: "Media",
    text: "Present technical information through visual content, video, and multimedia.",
    icon: <Presentation size={22} />,
  },
  {
    title: "Learning",
    text: "Combine academic learning with practical teamwork, design, and development.",
    icon: <BookOpen size={22} />,
  },
];

const heroNodes = [
  {
    icon: <Search size={20} />,
    label: "Research",
    position: "left-[5%] top-[17%]",
  },
  {
    icon: <Code2 size={20} />,
    label: "Development",
    position: "right-[4%] top-[19%]",
  },
  {
    icon: <Database size={20} />,
    label: "Data",
    position: "left-[3%] bottom-[18%]",
  },
  {
    icon: <Presentation size={20} />,
    label: "Media",
    position: "right-[3%] bottom-[18%]",
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

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span
        className="h-2 w-2 rounded-full"
        style={{ background: COLORS.blue }}
      />

      <span
        className="text-xs font-bold uppercase tracking-[0.22em]"
        style={{ color: COLORS.textLight }}
      >
        {children}
      </span>
    </div>
  );
}

function HeroAnimation() {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[600px]">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(48,175,255,0.22), rgba(146,238,255,0.12), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          borderColor: "rgba(48,175,255,0.25)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          borderColor: "rgba(108,203,135,0.28)",
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 z-20 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[48px] border bg-white/80 shadow-[0_30px_80px_rgba(23,50,77,0.14)] backdrop-blur-xl"
        animate={{
          y: [-5, 5, -5],
          rotate: [0, 1.5, 0, -1.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="mb-3 flex h-16 w-16 items-center justify-center rounded-[22px]"
          style={{
            background: "linear-gradient(135deg, #30AFFF, #92EEFF, #C4F7CA)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-3xl font-black text-white"></span>
        </motion.div>

        <span
          className="text-xl font-black tracking-tight"
          style={{ color: COLORS.text }}
        >
          AppleHub
        </span>

        <span
          className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ color: COLORS.textLight }}
        >
          Academic Project
        </span>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 h-[2px] w-[390px] origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(48,175,255,0.5), transparent)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 h-[2px] w-[390px] origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(108,203,135,0.5), transparent)",
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {heroNodes.map((node, index) => (
        <motion.div
          key={node.label}
          className={`absolute ${node.position} z-30`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: [1, 1.04, 1],
            y: [0, -7, 0],
          }}
          transition={{
            opacity: {
              duration: 0.7,
              delay: index * 0.15,
            },
            scale: {
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              duration: 3 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div
            className="flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-[0_15px_40px_rgba(23,50,77,0.08)] backdrop-blur-xl"
            style={{
              background: "rgba(255,255,255,0.85)",
              borderColor: COLORS.border,
              color: COLORS.text,
            }}
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{
                background: COLORS.softBlue,
                color: COLORS.blue,
              }}
            >
              {node.icon}
            </div>

            <span className="text-sm font-bold">{node.label}</span>
          </div>
        </motion.div>
      ))}

      {[
        { icon: <Cpu size={16} />, x: "14%", y: "45%" },
        { icon: <Globe size={16} />, x: "82%", y: "45%" },
        { icon: <Layers size={16} />, x: "28%", y: "79%" },
        { icon: <Zap size={16} />, x: "70%", y: "79%" },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="absolute z-20 flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-lg"
          style={{
            left: item.x,
            top: item.y,
            color: COLORS.blue,
            borderColor: COLORS.border,
          }}
          animate={{
            y: [0, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <motion.div
        className="absolute left-[48%] top-[5%] h-3 w-3 rounded-full"
        style={{ background: COLORS.blue }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-[7%] right-[25%] h-4 w-4 rounded-full"
        style={{ background: COLORS.green }}
        animate={{
          y: [0, -25, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute left-[20%] top-[32%] h-2 w-2 rounded-full"
        style={{ background: COLORS.cyan }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

function MemberCard({ member, group, memberIndex, totalMembers }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -25, scale: 0.97 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
    >
      <div
        className="relative overflow-hidden rounded-[32px] p-8 sm:p-10"
        style={{
          background: group.gradient,
          minHeight: "360px",
        }}
      >
        <motion.div
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/25 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/25 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative flex h-full min-h-[290px] flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#17324D]">
              Group {group.id}
            </span>

            <span className="text-sm font-semibold text-[#17324D]/70">
              {String(memberIndex + 1).padStart(2, "0")} /{" "}
              {String(totalMembers).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <motion.div
              className="mb-6 flex h-32 w-32 items-center justify-center rounded-full border-8 border-white/60 bg-white/70 text-4xl font-black text-[#17324D] shadow-xl"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {initials(member.name)}
            </motion.div>

            <h3 className="text-2xl font-black text-[#17324D] sm:text-3xl">
              {member.name}
            </h3>

            <p className="mt-2 text-sm font-semibold text-[#17324D]/70">
              {member.role}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm font-semibold text-[#17324D]/70">
            <span>AppleHub Team</span>
            <Users size={18} />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center rounded-[32px] border p-8 sm:p-10"
        style={{
          background: COLORS.white,
          borderColor: COLORS.border,
          boxShadow: "0 20px 60px rgba(23, 50, 77, 0.06)",
        }}
      >
        <div
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]"
          style={{
            background: COLORS.softBlue,
            color: COLORS.blue,
          }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: COLORS.blue }}
          />
          {group.title}
        </div>

        <h3
          className="text-3xl font-black tracking-tight sm:text-4xl"
          style={{ color: COLORS.text }}
        >
          {member.name}
        </h3>

        <p
          className="mt-3 text-base font-semibold"
          style={{ color: COLORS.blue }}
        >
          {member.role}
        </p>

        <div
          className="my-7 h-px w-full"
          style={{ background: COLORS.border }}
        />

        <div>
          <p
            className="mb-2 text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: COLORS.textLight }}
          >
            Contribution
          </p>

          <p className="text-lg leading-8" style={{ color: COLORS.textLight }}>
            {member.work}
          </p>
        </div>

        <div
          className="mt-8 rounded-2xl p-5"
          style={{ background: COLORS.soft }}
        >
          <p className="text-sm leading-7" style={{ color: COLORS.textLight }}>
            {group.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function About() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const groupedMembers = useMemo(() => {
    return groups.reduce((result, group) => {
      result[group.id] = teamMembers.filter((member) =>
        getMemberGroups(member).includes(group.id),
      );

      return result;
    }, {});
  }, []);

  const teamSlides = useMemo(() => {
    return groups.flatMap((group) => {
      const members = groupedMembers[group.id] || [];

      if (members.length === 0) {
        return [
          {
            group,
            member: null,
            memberIndex: 0,
            totalMembers: 0,
          },
        ];
      }

      return members.map((member, index) => ({
        group,
        member,
        memberIndex: index,
        totalMembers: members.length,
      }));
    });
  }, [groupedMembers]);

  const currentSlide = teamSlides[slideIndex] || teamSlides[0];
  const currentGroup = currentSlide?.group || groups[0];
  const currentMember = currentSlide?.member || null;

  const currentGroupIndex = groups.findIndex(
    (group) => group.id === currentGroup.id,
  );

  useEffect(() => {
    if (teamSlides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);

      setSlideIndex((current) => {
        return (current + 1) % teamSlides.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [teamSlides.length, isPaused]);

  const goNext = () => {
    setDirection(1);

    setSlideIndex((current) => {
      return (current + 1) % teamSlides.length;
    });
  };

  const goPrevious = () => {
    setDirection(-1);

    setSlideIndex((current) => {
      return current === 0 ? teamSlides.length - 1 : current - 1;
    });
  };

  const selectGroup = (groupId) => {
    const firstSlideIndex = teamSlides.findIndex(
      (slide) => slide.group.id === groupId,
    );

    if (firstSlideIndex === -1) return;

    const newGroupIndex = groups.findIndex((group) => group.id === groupId);

    setDirection(newGroupIndex >= currentGroupIndex ? 1 : -1);
    setSlideIndex(firstSlideIndex);
  };

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: COLORS.soft,
        color: COLORS.text,
      }}
    >
      <section className="relative px-6 pb-24 pt-20 sm:px-10 lg:px-16 lg:pb-32 lg:pt-28">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#92EEFF]/30 blur-[120px]" />

        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-[#D8FFC5]/40 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-4">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionLabel>AppleHub</SectionLabel>

            <h1
              className="text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-8xl"
              style={{ color: COLORS.text }}
            >
              Research.
              <br />
              Technology.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #30AFFF, #58D8FF, #6CCB87)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Collaboration.
              </span>
            </h1>

            <p
              className="mt-8 max-w-2xl text-lg leading-8 sm:text-xl"
              style={{ color: COLORS.textLight }}
            >
              AppleHub is a collaborative academic project combining research,
              technology, web development, media, and presentation into one
              interactive digital experience.
            </p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {["Research", "Technology", "Design", "Teamwork"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-full border bg-white px-4 py-2 text-sm font-bold shadow-sm"
                    style={{
                      borderColor: COLORS.border,
                      color: COLORS.textLight,
                    }}
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {item}
                  </motion.div>
                ),
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>University Project</SectionLabel>

          <div className="mb-12 max-w-3xl">
            <h2
              className="text-4xl font-black tracking-tight sm:text-5xl"
              style={{ color: COLORS.text }}
            >
              Built as an academic collaboration.
            </h2>

            <p
              className="mt-5 text-lg leading-8"
              style={{ color: COLORS.textLight }}
            >
              AppleHub brings together students from different roles to research
              Apple technologies and transform their findings into a modern
              digital platform.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <GraduationCap size={26} />,
                label: "University",
                value: "Zen University",
              },
              {
                icon: <Code2 size={26} />,
                label: "Faculty",
                value: "Computer Science",
              },
              {
                icon: <Users size={26} />,
                label: "Project Manager",
                value: "Fariba Mohammadi",
              },
              {
                icon: <BookOpen size={26} />,
                label: "Supervisor",
                value: "Professor Reza Khavari",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 60px rgba(23,50,77,0.1)",
                }}
                className="rounded-[28px] border p-7"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border,
                  boxShadow: "0 20px 60px rgba(23, 50, 77, 0.05)",
                }}
              >
                <div
                  className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: COLORS.softBlue,
                    color: COLORS.blue,
                  }}
                >
                  {item.icon}
                </div>

                <p
                  className="text-xs font-bold uppercase tracking-[0.15em]"
                  style={{ color: COLORS.textLight }}
                >
                  {item.label}
                </p>

                <p
                  className="mt-3 text-lg font-bold"
                  style={{ color: COLORS.text }}
                >
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <SectionLabel>Our Teams</SectionLabel>

              <h2
                className="text-4xl font-black tracking-tight sm:text-5xl"
                style={{ color: COLORS.text }}
              >
                Four groups.
                <br />
                One project.
              </h2>

              <p
                className="mt-5 max-w-2xl text-lg leading-8"
                style={{ color: COLORS.textLight }}
              >
                Team members are organized by their academic and technical
                contributions. Members automatically move from one person to the
                next.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                onClick={goPrevious}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  color: COLORS.text,
                }}
              >
                <ArrowLeft size={19} />
              </motion.button>

              <motion.button
                type="button"
                onClick={goNext}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  background: COLORS.text,
                  color: COLORS.white,
                }}
              >
                <ArrowRight size={19} />
              </motion.button>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap gap-3">
            {groups.map((group) => {
              const active = currentGroup.id === group.id;

              return (
                <motion.button
                  key={group.id}
                  type="button"
                  onClick={() => selectGroup(group.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full px-5 py-3 text-sm font-bold transition"
                  style={{
                    background: active ? COLORS.text : COLORS.white,
                    color: active ? COLORS.white : COLORS.textLight,
                    border: `1px solid ${active ? COLORS.text : COLORS.border}`,
                  }}
                >
                  Group {group.id}
                </motion.button>
              );
            })}
          </div>

          <div
            className="overflow-hidden rounded-[36px] border p-3 sm:p-5"
            style={{
              background: COLORS.white,
              borderColor: COLORS.border,
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait" custom={direction}>
              {currentMember ? (
                <MemberCard
                  key={`${currentGroup.id}-${currentMember.name}`}
                  member={currentMember}
                  group={currentGroup}
                  memberIndex={currentSlide.memberIndex}
                  totalMembers={currentSlide.totalMembers}
                />
              ) : (
                <motion.div
                  key={`empty-${currentGroup.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[360px] items-center justify-center rounded-[32px] p-10 text-center"
                  style={{ background: COLORS.soft }}
                >
                  <div>
                    <div
                      className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                      style={{
                        background: COLORS.softBlue,
                        color: COLORS.blue,
                      }}
                    >
                      <Users size={28} />
                    </div>

                    <h3 className="text-2xl font-black">
                      {currentGroup.title}
                    </h3>

                    <p
                      className="mx-auto mt-3 max-w-xl leading-7"
                      style={{ color: COLORS.textLight }}
                    >
                      {currentGroup.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div
              className="flex items-center gap-2 text-sm font-semibold"
              style={{ color: COLORS.textLight }}
            >
              <motion.span
                className="h-2 w-2 rounded-full"
                style={{
                  background: isPaused ? COLORS.textLight : COLORS.green,
                }}
                animate={{
                  scale: isPaused ? 1 : [1, 1.5, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />

              {isPaused ? "Autoplay paused" : "Autoplay active"}

              <span className="ml-2">• Changes every 4 seconds</span>
            </div>

            <div className="flex max-w-full flex-wrap items-center gap-2">
              {teamSlides.map((slide, index) => (
                <button
                  key={`${slide.group.id}-${slide.member?.name || index}`}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => {
                    setDirection(index >= slideIndex ? 1 : -1);
                    setSlideIndex(index);
                  }}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: index === slideIndex ? 28 : 8,
                    background:
                      index === slideIndex ? COLORS.blue : COLORS.border,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div
            className="grid gap-5 rounded-[36px] p-7 sm:grid-cols-2 sm:p-10 lg:grid-cols-4"
            style={{
              background: COLORS.text,
              color: COLORS.white,
            }}
          >
            {[
              ["20+", "Team Members"],
              ["4", "Project Groups"],
              ["6", "Main Resources"],
              ["1", "Collaborative Project"],
            ].map(([number, label]) => (
              <motion.div
                key={label}
                whileHover={{
                  y: -6,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                className="rounded-3xl bg-white/10 p-7"
              >
                <motion.p
                  className="text-4xl font-black"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {number}
                </motion.p>

                <p className="mt-2 text-sm font-semibold text-white/65">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Resources</SectionLabel>

          <div className="mb-12 max-w-3xl">
            <h2
              className="text-4xl font-black tracking-tight sm:text-5xl"
              style={{ color: COLORS.text }}
            >
              Research and media.
            </h2>

            <p
              className="mt-5 text-lg leading-8"
              style={{ color: COLORS.textLight }}
            >
              AppleHub combines academic articles, presentations, videos, and
              technical research to communicate the project clearly.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  boxShadow: "0 25px 60px rgba(23,50,77,0.1)",
                }}
                className="group rounded-[30px] border p-7"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border,
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs font-black tracking-[0.2em]"
                    style={{ color: COLORS.textLight }}
                  >
                    {resource.number}
                  </span>

                  <motion.div
                    className="flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{
                      background: COLORS.softBlue,
                      color: COLORS.blue,
                    }}
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                  >
                    {resource.icon === "video" ? (
                      <Play size={18} fill="currentColor" />
                    ) : (
                      <BookOpen size={19} />
                    )}
                  </motion.div>
                </div>

                <p
                  className="mt-8 text-xs font-bold uppercase tracking-[0.16em]"
                  style={{ color: COLORS.blue }}
                >
                  {resource.category}
                </p>

                <h3
                  className="mt-3 text-xl font-black"
                  style={{ color: COLORS.text }}
                >
                  {resource.title}
                </h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{ color: COLORS.textLight }}
                >
                  {resource.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Our Mission</SectionLabel>

          <div className="mb-12 max-w-3xl">
            <h2
              className="text-4xl font-black tracking-tight sm:text-5xl"
              style={{ color: COLORS.text }}
            >
              From learning to building.
            </h2>

            <p
              className="mt-5 text-lg leading-8"
              style={{ color: COLORS.textLight }}
            >
              The project connects academic research with practical skills in
              development, media, design, communication, and teamwork.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                className="rounded-[30px] border p-7"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border,
                }}
              >
                <motion.div
                  className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: COLORS.softBlue,
                    color: COLORS.blue,
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {mission.icon}
                </motion.div>

                <h3
                  className="text-xl font-black"
                  style={{ color: COLORS.text }}
                >
                  {mission.title}
                </h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{ color: COLORS.textLight }}
                >
                  {mission.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 pb-12 pt-20 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl rounded-[36px] p-8 sm:p-12"
          style={{
            background:
              "linear-gradient(135deg, #E9F8FF 0%, #F5FBFF 50%, #EDFFE9 100%)",
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: COLORS.blue }}
              >
                AppleHub
              </p>

              <h2
                className="mt-3 text-3xl font-black sm:text-4xl"
                style={{ color: COLORS.text }}
              >
                Research. Technology. Design.
              </h2>

              <p
                className="mt-4 max-w-xl leading-7"
                style={{ color: COLORS.textLight }}
              >
                A collaborative academic project created through research,
                development, media, and teamwork.
              </p>
            </div>

            <div
              className="text-sm font-semibold"
              style={{ color: COLORS.textLight }}
            >
              Zen University • Computer Science
            </div>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}

export default memo(About);
