import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Fariba Mohammadi",
    group: "All Group",
    role: "Project Manager",
    responsibility: "Management & Coordination",
  },
  {
    name: "Farina Mirzaie",
    group: "1, 2, 3",
    role: "Researcher, Web Developer, Media",
    responsibility:
      "Research Article, Website Development, Video & Presentation",
  },
  {
    name: "Zakia Sultani",
    group: "1, 3",
    role: "Researcher, Media",
    responsibility: "Research Article, Video & Presentation",
  },
  {
    name: "Haseeba Sikandari",
    group: "1, 3",
    role: "Researcher, Media",
    responsibility: "Research Article, Video & Presentation",
  },
  {
    name: "Rahima Moradi",
    group: "1, 3",
    role: "Researcher, Media",
    responsibility: "Research Article, Video & Presentation",
  },
  {
    name: "BiBi Zahra Tajdar",
    group: "1",
    role: "Researcher",
    responsibility: "Research Article",
  },
  {
    name: "Elham Ahmadi",
    group: "1, 3",
    role: "Researcher, Media",
    responsibility: "Research Article, Video & Presentation",
  },
  {
    name: "Fariba Amini",
    group: "1, 3",
    role: "Researcher, Media",
    responsibility: "Research Article, Video & Presentation",
  },
  {
    name: "Morsal Haidari",
    group: "1, 2",
    role: "Researcher, Web Developer",
    responsibility: "Research Article, Website Development",
  },
  {
    name: "Khalida Qanie",
    group: "1",
    role: "Researcher",
    responsibility: "Research Article",
  },
  {
    name: "Sohaila Hassani",
    group: "1, 2",
    role: "Researcher, Web Developer",
    responsibility: "Research Article, Website Development",
  },
  {
    name: "Selsela Sultani",
    group: "2",
    role: "Web Developer",
    responsibility: "Website Development",
  },
  {
    name: "Roqia Moqtasid",
    group: "2",
    role: "Web Developer",
    responsibility: "Website Development",
  },
  {
    name: "Bibi Toba Osmani",
    group: "2",
    role: "Web Developer",
    responsibility: "Website Development",
  },
  {
    name: "Khatera Fayazi",
    group: "2",
    role: "Web Developer",
    responsibility: "Website Development",
  },
  {
    name: "Hasina Hassani",
    group: "2",
    role: "Web Developer",
    responsibility: "Website Development",
  },
  {
    name: "Murwarid Ebadi",
    group: "2",
    role: "Web Developer",
    responsibility: "Website Development",
  },
  {
    name: "Neda Barkezai",
    group: "2, 3",
    role: "Web Developer, Media",
    responsibility: "Website Development, Video & Presentation",
  },
  {
    name: "Sana Jan Rahmani",
    group: "2, 3",
    role: "Web Developer, Media",
    responsibility: "Website Development, Video & Presentation",
  },
  {
    name: "Zarna Formuli",
    group: "2, 3",
    role: "Web Developer, Media",
    responsibility: "Website Development, Video & Presentation",
  },
];

/* =========================
   MARQUEE
========================= */

function NameMarquee({ reverse = false }) {
  const names = [...teamMembers, ...teamMembers];

  return (
    <div className="w-full overflow-hidden py-3">
      <motion.div
        className="flex w-max gap-4"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: reverse ? 35 : 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {names.map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400" />

            <span className="text-sm font-semibold text-gray-300">
              {member.name}
            </span>

            <span className="text-[8px] uppercase tracking-widest text-gray-600">
              {member.role.split(",")[0]}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* =========================
   ABOUT
========================= */

function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020305] text-white">
      {/* BACKGROUND */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-150, 200, -150],
            y: [0, 150, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [150, -180, 150],
            y: [0, -120, 0],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-180px] top-[500px] h-[550px] w-[550px] rounded-full bg-purple-600/10 blur-[160px]"
        />
      </div>

      {/* HERO */}

      <section className="relative z-10 px-6 pb-16 pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-8 flex w-fit items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/5 px-5 py-2.5"
          >
            <span className="text-blue-300">✦</span>

            <span className="text-[9px] uppercase tracking-[0.35em] text-blue-300">
              About AppleHub
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl font-black tracking-[-0.08em] md:text-8xl lg:text-[10rem]"
          >
            APPLEHUB
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-3xl font-bold md:text-5xl"
          >
            The people behind{" "}
            <span className="bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent">
              AppleHub.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-500 md:text-base"
          >
            AppleHub is a collaborative project created by researchers,
            developers, media creators, and project managers working together to
            make Apple technology easier to understand.
          </motion.p>
        </div>
      </section>

      {/* MARQUEE */}

      <section className="relative z-10 mb-24">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-white/10" />

          <span className="text-[9px] uppercase tracking-[0.4em] text-gray-600">
            Meet our people
          </span>

          <span className="h-px w-12 bg-white/10" />
        </div>

        <NameMarquee />
        <NameMarquee reverse />
      </section>

      {/* STATS */}

      <section className="relative z-10 px-6 pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          <Stat number={teamMembers.length} label="Team Members" icon="◉" />
          <Stat number="3" label="Groups" icon="⌘" />
          <Stat number="4" label="Main Roles" icon="◇" />
          <Stat number="1" label="Project" icon="✦" />
        </div>
      </section>

      {/* TEAM */}

      <section className="relative z-10 px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-[9px] uppercase tracking-[0.4em] text-blue-300/60">
              The team
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-6xl">
              Meet everyone.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 4) * 0.05,
                }}
                whileHover={{ y: -10 }}
                className="rounded-[30px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-blue-400/30"
              >
                {/* AVATAR */}

                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold">
                    {member.name
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")
                      .toUpperCase()}
                  </div>

                  <span className="font-mono text-[9px] text-gray-700">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* NAME */}

                <h3 className="mt-6 text-lg font-bold">{member.name}</h3>

                {/* GROUP */}

                <div className="mt-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[8px] uppercase tracking-widest text-gray-500">
                    Group {member.group}
                  </span>
                </div>

                {/* ROLE */}

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-[8px] uppercase tracking-widest text-gray-700">
                    Role
                  </p>

                  <p className="mt-2 min-h-[40px] text-xs leading-relaxed text-blue-300/70">
                    {member.role}
                  </p>
                </div>

                {/* RESPONSIBILITY */}

                <div className="mt-4">
                  <p className="text-[8px] uppercase tracking-widest text-gray-700">
                    Responsibility
                  </p>

                  <p className="mt-2 min-h-[48px] text-xs leading-relaxed text-gray-500">
                    {member.responsibility}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}

      <section className="relative z-10 px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-white/[0.035] p-10 md:p-16"
        >
          <p className="text-[9px] uppercase tracking-[0.35em] text-blue-300/60">
            Our Mission
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Different skills.
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
              One vision.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500">
            By combining research, web development, media, presentation, and
            project management, our team created AppleHub to provide a clear and
            engaging way to explore Apple technology.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Research",
              "Web Development",
              "Media",
              "Presentation",
              "Management",
              "Coordination",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[9px] uppercase tracking-widest text-gray-500"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FINAL */}

      <section className="relative z-10 overflow-hidden pb-20">
        <motion.div
          animate={{
            x: ["0%", "-20%", "0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="whitespace-nowrap text-center text-[18vw] font-black leading-none tracking-[-0.08em] text-white/[0.025]"
        >
          APPLEHUB
        </motion.div>
      </section>
    </main>
  );
}

/* =========================
   STAT COMPONENT
========================= */

function Stat({ number, label, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 text-center backdrop-blur-xl"
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg">
        {icon}
      </div>

      <p className="mt-5 text-3xl font-black">{number}</p>

      <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-gray-600">
        {label}
      </p>
    </motion.div>
  );
}

export default About;
