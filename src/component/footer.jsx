import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        {/* ================= TOP ================= */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ================= BRAND ================= */}

          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <motion.div
                whileHover={{
                  rotate: 180,
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full
                  bg-white
                  font-bold
                  text-black
                "
              >
                A
              </motion.div>

              <div>
                <div className="text-lg font-semibold tracking-tight">
                  Apple<span className="text-blue-500">Hub</span>
                </div>

                <div className="text-[9px] tracking-[0.25em] text-gray-500">
                  ANATOMY
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-6 text-gray-500">
              Explore the world of Apple. Discover iPhone, Mac, tools, guides,
              and everything Apple in one place.
            </p>

            {/* STATUS */}

            <div
              className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-white/10
              bg-white/5
              px-3
              py-2
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
                className="h-1.5 w-1.5 rounded-full bg-green-400"
              />

              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
                System Online
              </span>
            </div>
          </div>

          {/* ================= EXPLORE ================= */}

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/iph"
                className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                iPhone
              </Link>

              <Link
                to="/mac"
                className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                Mac
              </Link>

              <Link
                to="/tools"
                className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                Tools
              </Link>

              <Link
                to="/guides"
                className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                Guides
              </Link>
            </div>
          </div>

          {/* ================= COMPANY ================= */}

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                About Us
              </Link>

              <Link
                to="/about"
                className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                Our Team
              </Link>

              <Link
                to="/guides"
                className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                Resources
              </Link>

              <Link
                to="/tools"
                className="text-sm text-gray-500 transition hover:translate-x-1 hover:text-white"
              >
                Apple Tools
              </Link>
            </div>
          </div>

          {/* ================= CONNECT ================= */}

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Connect
            </h3>

            <p className="mb-5 max-w-xs text-sm leading-6 text-gray-500">
              Stay connected and discover what's new at AppleHub.
            </p>

            {/* SOCIAL BUTTONS */}

            <div className="flex gap-2">
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  text-xs
                  text-gray-400
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                X
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  text-xs
                  text-gray-400
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                IG
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-white/10
                  bg-white/5
                  text-xs
                  text-gray-400
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                GH
              </motion.a>
            </div>
          </div>
        </div>

        {/* ================= BIG APPLEHUB TEXT ================= */}

        <div className="mt-20 overflow-hidden border-y border-white/5 py-6">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              flex
              w-max
              whitespace-nowrap
              text-[clamp(4rem,12vw,10rem)]
              font-black
              leading-none
              tracking-[-0.08em]
              text-white/[0.04]
            "
          >
            APPLEHUB&nbsp;&nbsp;&nbsp; APPLEHUB&nbsp;&nbsp;&nbsp;
            APPLEHUB&nbsp;&nbsp;&nbsp; APPLEHUB&nbsp;&nbsp;&nbsp;
            APPLEHUB&nbsp;&nbsp;&nbsp; APPLEHUB
          </motion.div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
          flex
          flex-col
          gap-5
          pt-8
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
        >
          <p className="text-xs text-gray-600">
            © {year} AppleHub. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#"
              className="text-xs text-gray-600 transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-xs text-gray-600 transition hover:text-white"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-xs text-gray-600 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          <motion.button
            type="button"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              border border-white/10
              bg-white/5
              text-gray-400
              transition
              hover:bg-white/10
              hover:text-white
            "
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
