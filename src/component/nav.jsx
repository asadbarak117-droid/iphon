import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-0 left-0 right-0 z-50 px-3 pt-4 sm:px-5 md:px-8 md:pt-5"
    >
      <div className="mx-auto max-w-6xl">
        {/* NAVBAR */}
        <motion.div
          className="
            rounded-2xl
            border border-white/10
            bg-black/80
            px-3 py-2.5
            shadow-2xl shadow-black/40
            backdrop-blur-2xl
            sm:rounded-full
            sm:px-4 sm:py-3
          "
        >
          {/* TOP BAR */}
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2 sm:gap-3"
            >
              <motion.div
                whileHover={{
                  rotate: 180,
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
                className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-white
                  font-bold
                  text-black
                "
              >
                A
              </motion.div>

              <div className="hidden sm:block">
                <div className="font-semibold tracking-tight text-white">
                  Apple<span className="text-blue-500">Hub</span>
                </div>

                <div className="text-[9px] tracking-[0.2em] text-gray-500">
                  ANATOMY
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item, index) => {
                const active = location.pathname === item.path;

                return (
                  <motion.div
                    key={item.path}
                    initial={{
                      opacity: 0,
                      y: -20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.2 + index * 0.08,
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`
                        relative
                        flex items-center gap-2
                        rounded-full
                        px-3 py-2.5
                        text-sm
                        transition
                        lg:px-4
                        ${
                          active
                            ? "text-white"
                            : "text-gray-400 hover:text-white"
                        }
                      `}
                    >
                      {/* ACTIVE BACKGROUND */}
                      {active && (
                        <motion.span
                          layoutId="activeNav"
                          className="
                            absolute inset-0
                            rounded-full
                            border border-white/10
                            bg-white/10
                          "
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      {/* ICON */}
                      <span className="relative z-10 text-xs">{item.icon}</span>

                      {/* NAME */}
                      <span className="relative z-10">{item.name}</span>

                      {/* HOVER LINE */}
                      <motion.span
                        initial={{ width: 0 }}
                        whileHover={{ width: "60%" }}
                        className="
                          absolute
                          bottom-1
                          left-1/2
                          h-[1px]
                          -translate-x-1/2
                          bg-blue-400
                        "
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-2">
              {/* SYSTEM ONLINE */}
              <div
                className="
                  hidden
                  items-center gap-2
                  rounded-full
                  border border-white/5
                  bg-white/5
                  px-3 py-2
                  lg:flex
                "
              >
                <motion.span
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-green-400
                  "
                />

                <span className="text-[10px] text-gray-500">SYSTEM ONLINE</span>
              </div>

              {/* SEARCH */}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                type="button"
                className="
                  flex
                  h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  text-gray-400
                  transition
                  hover:bg-white/10
                  hover:text-white
                  sm:h-10 sm:w-10
                "
              >
                ⌕
              </motion.button>

              {/* DESKTOP EXPLORE */}
              <Link to="/iph" onClick={closeMenu} className="hidden sm:block">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="
                    flex
                    items-center gap-2
                    rounded-full
                    bg-white
                    px-4 py-2.5
                    text-sm
                    font-semibold
                    text-black
                  "
                >
                  <span>Explore</span>
                  <span>→</span>
                </motion.div>
              </Link>

              {/* MOBILE MENU BUTTON */}
              <motion.button
                type="button"
                whileTap={{ scale: 0.85 }}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="
                  flex
                  h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  md:hidden
                "
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <div className="relative h-5 w-5">
                  {/* TOP */}
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
                    transition={{ duration: 0.25 }}
                    className="
                      absolute
                      left-0
                      h-[1px]
                      w-5
                      bg-white
                    "
                  />

                  {/* MIDDLE */}
                  <motion.span
                    animate={{
                      opacity: menuOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="
                      absolute
                      left-0
                      top-[9px]
                      h-[1px]
                      w-3
                      bg-gray-400
                    "
                  />

                  {/* BOTTOM */}
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
                    transition={{ duration: 0.25 }}
                    className="
                      absolute
                      left-0
                      h-[1px]
                      w-5
                      bg-white
                    "
                  />
                </div>
              </motion.button>
            </div>
          </div>

          {/* MOBILE MENU */}
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
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-3 border-t border-white/10 pt-3">
                  {/* LINKS */}
                  <div className="flex flex-col gap-1">
                    {navItems.map((item, index) => {
                      const active = location.pathname === item.path;

                      return (
                        <motion.div
                          key={item.path}
                          initial={{
                            opacity: 0,
                            x: -20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.05,
                          }}
                        >
                          <Link
                            to={item.path}
                            onClick={closeMenu}
                            className={`
                              flex
                              items-center
                              justify-between
                              rounded-xl
                              px-4 py-3
                              transition
                              ${
                                active
                                  ? "bg-white/10 text-white"
                                  : "text-gray-400 hover:bg-white/5 hover:text-white"
                              }
                            `}
                          >
                            <div className="flex items-center gap-3">
                              {/* ICON */}
                              <span
                                className={`
                                  flex
                                  h-8 w-8
                                  items-center justify-center
                                  rounded-lg
                                  border
                                  ${
                                    active
                                      ? "border-blue-400/30 bg-blue-400/10 text-blue-300"
                                      : "border-white/10 bg-white/5"
                                  }
                                `}
                              >
                                {item.icon}
                              </span>

                              {/* NAME */}
                              <span className="text-sm font-medium">
                                {item.name}
                              </span>
                            </div>

                            {/* ARROW */}
                            <motion.span
                              animate={{
                                x: active ? 3 : 0,
                              }}
                            >
                              →
                            </motion.span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* MOBILE EXPLORE */}
                  <Link to="/iph" onClick={closeMenu} className="mt-3 block">
                    <motion.div
                      whileTap={{ scale: 0.97 }}
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-white
                        px-4 py-3
                        text-sm
                        font-semibold
                        text-black
                      "
                    >
                      <span>Explore iPhone</span>
                      <span>→</span>
                    </motion.div>
                  </Link>

                  {/* MOBILE SYSTEM */}
                  <div className="flex items-center justify-center gap-2 py-3">
                    <motion.span
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="
                        h-1.5 w-1.5
                        rounded-full
                        bg-green-400
                      "
                    />

                    <span
                      className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-gray-600
                    "
                    >
                      System Online
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
