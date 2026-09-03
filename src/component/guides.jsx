import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

/* =========================================================
   PROBLEMS ARRAY
========================================================= */

const problems = [
  {
    id: 1,
    device: "iPhone",
    icon: "🔋",
    question: "Why is my iPhone battery draining fast?",
    problem:
      "High brightness, background activity, weak signal, gaming, video recording, and other intensive tasks can increase battery usage.",
    solution:
      "Open Settings → Battery and check which apps use the most power. Reduce brightness, limit unnecessary background activity, update iOS, and use Low Power Mode when needed.",
  },
  {
    id: 2,
    device: "iPhone",
    icon: "🔥",
    question: "Why is my iPhone getting hot?",
    problem:
      "Gaming, camera use, charging, direct sunlight, poor signal, or intensive background processes can make the iPhone warm.",
    solution:
      "Stop demanding tasks temporarily, remove the phone from direct heat, stop charging if it is very hot, and allow it to cool naturally.",
  },
  {
    id: 3,
    device: "iPhone",
    icon: "🐌",
    question: "Why is my iPhone slow?",
    problem:
      "Low storage, outdated software, background processes, or an aging battery can affect performance.",
    solution:
      "Free up storage, restart the iPhone, update iOS, and check Settings → Battery → Battery Health & Charging.",
  },
  {
    id: 4,
    device: "iPhone",
    icon: "💾",
    question: "How can I free iPhone storage?",
    problem:
      "Photos, videos, applications, downloads, messages, and cached data can consume a lot of storage.",
    solution:
      "Go to Settings → General → iPhone Storage. Remove unused apps and large files, delete unnecessary videos, and optimize photo storage if appropriate.",
  },
  {
    id: 5,
    device: "iPhone",
    icon: "👤",
    question: "Why is Face ID not working?",
    problem:
      "Face obstruction, dirty sensors, incorrect positioning, or software issues can prevent Face ID from recognizing you.",
    solution:
      "Clean the TrueDepth camera area, make sure your face is visible, hold the iPhone correctly, and check Settings → Face ID & Passcode.",
  },
  {
    id: 6,
    device: "iPhone",
    icon: "📶",
    question: "Why is my iPhone Wi-Fi slow?",
    problem:
      "Weak signal, router problems, network congestion, or incorrect network settings can cause slow Wi-Fi.",
    solution:
      "Move closer to the router, reconnect to Wi-Fi, restart the router, and try restarting your iPhone. If necessary, check network settings.",
  },
  {
    id: 7,
    device: "iPhone",
    icon: "📱",
    question: "Why is my iPhone screen not responding?",
    problem:
      "A frozen application, software issue, wet screen, damaged display, or temporary system problem can cause touch problems.",
    solution:
      "Clean and dry the screen, remove accessories that may interfere, restart the iPhone, and update iOS. If the display remains unresponsive, hardware service may be needed.",
  },
  {
    id: 8,
    device: "iPhone",
    icon: "🔌",
    question: "Why is my iPhone not charging?",
    problem:
      "Dust in the charging port, a damaged cable, adapter problems, or software issues can prevent charging.",
    solution:
      "Try another compatible cable and adapter, inspect the charging port, restart the iPhone, and make sure the power source works.",
  },

  {
    id: 9,
    device: "Mac",
    icon: "🐌",
    question: "Why is my Mac running slowly?",
    problem:
      "Too many applications, startup items, low storage, memory pressure, or heavy background processes can reduce performance.",
    solution:
      "Close unnecessary applications, restart your Mac, free storage, and review startup/background items in System Settings.",
  },
  {
    id: 10,
    device: "Mac",
    icon: "🔥",
    question: "Why is my MacBook overheating?",
    problem:
      "Heavy workloads, demanding applications, blocked airflow, and high room temperatures can increase heat.",
    solution:
      "Close demanding applications and place the Mac on a hard, stable surface with good airflow. Keep vents clear and allow the Mac to cool.",
  },
  {
    id: 11,
    device: "Mac",
    icon: "📶",
    question: "Why isn't my Mac connecting to Wi-Fi?",
    problem:
      "Router problems, weak signal, incorrect network settings, or temporary software problems can interrupt Wi-Fi.",
    solution:
      "Turn Wi-Fi off and on, reconnect to the network, restart your Mac, and restart the router.",
  },
  {
    id: 12,
    device: "Mac",
    icon: "💾",
    question: "How can I free Mac storage?",
    problem:
      "Applications, downloads, videos, photos, documents, and system data can consume disk space.",
    solution:
      "Open System Settings → General → Storage. Remove unnecessary files and applications and empty the Trash.",
  },
  {
    id: 13,
    device: "Mac",
    icon: "⚠️",
    question: "Why is an app not responding?",
    problem:
      "An application can freeze because of a software bug, memory pressure, or excessive system load.",
    solution:
      "Wait briefly. If the application remains frozen, use Force Quit to close it and reopen it. Update the application if an update is available.",
  },
  {
    id: 14,
    device: "Mac",
    icon: "🔊",
    question: "Why is my Mac sound not working?",
    problem:
      "The wrong audio output may be selected, the volume may be muted, or an external device may be receiving the audio.",
    solution:
      "Open System Settings → Sound and select the correct output device. Check the volume and disconnect unwanted Bluetooth or external audio devices.",
  },
  {
    id: 15,
    device: "Mac",
    icon: "🔋",
    question: "Why does my MacBook battery drain quickly?",
    problem:
      "High screen brightness, demanding applications, background processes, and heavy workloads can increase battery usage.",
    solution:
      "Check battery usage, reduce brightness, close unnecessary applications, disconnect unused accessories, and keep macOS updated.",
  },
  {
    id: 16,
    device: "Mac",
    icon: "🖥️",
    question: "Why is my external display not working?",
    problem:
      "Cable problems, incorrect display settings, adapters, or compatibility issues can prevent an external display from appearing.",
    solution:
      "Check the cable and adapter, reconnect the display, restart the Mac, and open System Settings → Displays to detect and configure the display.",
  },
];

/* =========================================================
   DEVICE FILTER ARRAY
========================================================= */

const devices = ["All", "iPhone", "Mac"];

/* =========================================================
   GUIDES COMPONENT
========================================================= */

function Guides() {
  const [activeDevice, setActiveDevice] = useState("All");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  const isActive = (path) => {
    return location.pathname === path;
  };

  /* =======================================================
     FILTER PROBLEMS
  ======================================================= */

  const filteredProblems = problems.filter((item) => {
    const matchesDevice =
      activeDevice === "All" || item.device === activeDevice;

    const searchText = search.toLowerCase();

    const matchesSearch =
      item.question.toLowerCase().includes(searchText) ||
      item.problem.toLowerCase().includes(searchText) ||
      item.solution.toLowerCase().includes(searchText);

    return matchesDevice && matchesSearch;
  });

  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050608] text-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-120, 120, -120],
            y: [-50, 100, -50],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-[-150px]
            top-[100px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [50, -80, 50],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-150px]
            top-[500px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-600/10
            blur-[150px]
          "
        />
      </div>

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={closeMenu}
            className="
              fixed
              inset-0
              z-30
              bg-black/40
              backdrop-blur-sm
              md:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE DROPDOWN
      ===================================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -25,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -25,
              scale: 0.95,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              left-4
              right-4
              top-[88px]
              z-40
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-black/90
              shadow-2xl
              shadow-black/50
              backdrop-blur-2xl
              md:hidden
            "
          >
            {/* MENU HEADER */}

            <div
              className="
              border-b
              border-white/10
              px-6
              py-5
            "
            >
              <p
                className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-600
              "
              >
                AppleHub
              </p>

              <p
                className="
                mt-1
                text-sm
                text-gray-400
              "
              >
                Explore the anatomy
              </p>
            </div>

            {/* MOBILE ITEMS */}

            <div className="p-3">
              {navItems.map((item, index) => {
                const active = isActive(item.path);

                return (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      x: -25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.05 + index * 0.07,
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`
                        group
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        px-4
                        py-4
                        transition
                        ${
                          active
                            ? "bg-white/10 text-white"
                            : "text-gray-400 hover:bg-white/[0.06] hover:text-white"
                        }
                      `}
                    >
                      {/* LEFT SIDE */}

                      <div className="flex items-center gap-4">
                        {/* ICON */}

                        <motion.div
                          whileHover={{
                            scale: 1.15,
                            rotate: 8,
                          }}
                          className={`
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            border
                            ${
                              active
                                ? "border-white/20 bg-white/10"
                                : "border-white/10 bg-white/[0.04]"
                            }
                          `}
                        >
                          {item.icon}
                        </motion.div>

                        {/* TEXT */}

                        <div>
                          <span
                            className="
                            block
                            text-sm
                            font-medium
                          "
                          >
                            {item.name}
                          </span>

                          <span
                            className="
                            block
                            text-[9px]
                            uppercase
                            tracking-[0.2em]
                            text-gray-600
                          "
                          >
                            {item.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* ARROW */}

                      <motion.span
                        whileHover={{
                          x: 5,
                        }}
                        className="
                          text-gray-600
                          transition
                          group-hover:text-white
                        "
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* MOBILE CTA */}

            <div
              className="
              border-t
              border-white/10
              p-4
            "
            >
              <Link
                to="/iph"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-5
                  py-4
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:scale-[1.02]
                "
              >
                Explore iPhone
                <span>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="
        relative
        px-6
        pb-20
        pt-40
      "
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p
              className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-blue-300/70
            "
            >
              AppleHub Support
            </p>

            <h1
              className="
              mt-5
              text-5xl
              font-black
              tracking-tighter
              md:text-7xl
            "
            >
              Problems?
              <br />
              <span
                className="
                bg-gradient-to-r
                from-blue-200
                via-white
                to-purple-200
                bg-clip-text
                text-transparent
              "
              >
                Let's solve them.
              </span>
            </h1>

            <p
              className="
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-gray-400
              md:text-lg
            "
            >
              Common iPhone and Mac problems explained simply. Find out why a
              problem happens and what you can do to solve it.
            </p>
          </motion.div>

          {/* =================================================
              SEARCH
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            className="mt-10 max-w-2xl"
          >
            <div
              className="
              group
              flex
              items-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              px-5
              py-4
              transition
              focus-within:border-white/20
            "
            >
              <span
                className="
                mr-3
                text-xl
                text-gray-500
              "
              >
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search a problem..."
                className="
                  w-full
                  bg-transparent
                  text-sm
                  text-white
                  outline-none
                  placeholder:text-gray-600
                "
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="
                    text-gray-500
                    transition
                    hover:text-white
                  "
                >
                  ×
                </button>
              )}
            </div>
          </motion.div>

          {/* =================================================
              FILTER
          ================================================= */}

          <div
            className="
            mt-6
            flex
            flex-wrap
            gap-3
          "
          >
            {devices.map((device) => (
              <motion.button
                key={device}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => {
                  setActiveDevice(device);
                  setOpenId(null);
                }}
                className={`
                  rounded-full
                  border
                  px-6
                  py-3
                  text-sm
                  transition
                  ${
                    activeDevice === device
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-white/[0.04] text-gray-400 hover:bg-white/[0.08] hover:text-white"
                  }
                `}
              >
                {device}
              </motion.button>
            ))}
          </div>

          {/* RESULT COUNT */}

          <motion.p
            key={filteredProblems.length}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mt-6
              text-xs
              uppercase
              tracking-[0.25em]
              text-gray-600
            "
          >
            {filteredProblems.length} problems found
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          PROBLEMS
      ===================================================== */}

      <section
        className="
        relative
        px-6
        pb-32
      "
      >
        <div className="mx-auto max-w-7xl">
          {filteredProblems.length === 0 ? (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.035]
                p-16
                text-center
              "
            >
              <div className="text-5xl">⌕</div>

              <h2
                className="
                mt-6
                text-2xl
                font-bold
              "
              >
                No problem found
              </h2>

              <p
                className="
                mt-3
                text-gray-500
              "
              >
                Try another search term.
              </p>
            </motion.div>
          ) : (
            <div
              className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
            >
              {filteredProblems.map((item, index) => {
                const isOpen = openId === item.id;

                return (
                  <motion.article
                    key={item.id}
                    layout
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.5,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.035]
                    "
                  >
                    {/* HOVER GLOW */}

                    <div
                      className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-blue-500/10
                      blur-3xl
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                    />

                    <div className="relative p-7">
                      {/* TOP */}

                      <div
                        className="
                        flex
                        items-center
                        justify-between
                      "
                      >
                        <motion.div
                          whileHover={{
                            rotate: 8,
                            scale: 1.1,
                          }}
                          className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.05]
                            text-2xl
                          "
                        >
                          {item.icon}
                        </motion.div>

                        <span
                          className="
                          rounded-full
                          border
                          border-white/10
                          px-3
                          py-1.5
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-gray-500
                        "
                        >
                          {item.device}
                        </span>
                      </div>

                      {/* QUESTION */}

                      <h2
                        className="
                        mt-7
                        text-xl
                        font-bold
                        leading-tight
                      "
                      >
                        {item.question}
                      </h2>

                      {/* WHY */}

                      <div className="mt-6">
                        <p
                          className="
                          text-[9px]
                          uppercase
                          tracking-[0.3em]
                          text-gray-600
                        "
                        >
                          Why it happens
                        </p>

                        <p
                          className="
                          mt-2
                          text-sm
                          leading-relaxed
                          text-gray-400
                        "
                        >
                          {item.problem}
                        </p>
                      </div>

                      {/* SOLUTION BUTTON */}

                      <button
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        className="
                          mt-6
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.025]
                          p-4
                          text-left
                          transition
                          hover:bg-white/[0.06]
                        "
                      >
                        <span
                          className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-blue-300/70
                        "
                        >
                          {isOpen ? "Hide solution" : "Show solution"}
                        </span>

                        <motion.span
                          animate={{
                            rotate: isOpen ? 180 : 0,
                          }}
                          className="text-lg"
                        >
                          ↓
                        </motion.span>
                      </button>

                      {/* SOLUTION */}

                      <AnimatePresence>
                        {isOpen && (
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
                              duration: 0.35,
                            }}
                            className="overflow-hidden"
                          >
                            <div
                              className="
                              mt-3
                              rounded-2xl
                              border
                              border-blue-400/10
                              bg-blue-400/[0.03]
                              p-4
                            "
                            >
                              <p
                                className="
                                text-[9px]
                                uppercase
                                tracking-[0.3em]
                                text-blue-300/60
                              "
                              >
                                Solution
                              </p>

                              <p
                                className="
                                mt-2
                                text-sm
                                leading-relaxed
                                text-gray-300
                              "
                              >
                                {item.solution}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* BOTTOM */}

                      <div
                        className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/10
                        pt-5
                      "
                      >
                        <span
                          className="
                          text-xs
                          text-gray-600
                        "
                        >
                          AppleHub Help
                        </span>

                        <motion.span
                          animate={{
                            x: isOpen ? 5 : 0,
                          }}
                          className="text-white"
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}

          {/* =================================================
              CTA
          ================================================= */}

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
            className="
              mt-12
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.035]
              p-8
              text-center
              md:p-12
            "
          >
            <p
              className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-gray-600
            "
            >
              AppleHub
            </p>

            <h2
              className="
              mt-4
              text-3xl
              font-bold
              md:text-4xl
            "
            >
              Want to understand your device?
            </h2>

            <p
              className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-relaxed
              text-gray-500
            "
            >
              Explore the anatomy of iPhone and Mac and learn how the hardware
              and software work together.
            </p>

            <div
              className="
              mt-7
              flex
              flex-wrap
              justify-center
              gap-3
            "
            >
              <Link
                to="/iph"
                className="
                  rounded-full
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:scale-105
                "
              >
                Explore iPhone →
              </Link>

              <Link
                to="/mac"
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/[0.08]
                "
              >
                Explore Mac →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
        relative
        border-t
        border-white/10
        px-6
        py-10
      "
      >
        <div
          className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-4
          text-center
          md:flex-row
          md:text-left
        "
        >
          <div>
            <p className="font-semibold">
              Apple<span className="text-blue-500">Hub</span>
            </p>

            <p
              className="
              mt-1
              text-xs
              text-gray-600
            "
            >
              Understand what's inside.
            </p>
          </div>

          <p
            className="
            text-xs
            text-gray-600
          "
          >
            © 2026 AppleHub. Educational project.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default Guides;
