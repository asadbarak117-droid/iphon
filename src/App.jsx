import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import Navbar from "./component/nav";

import Home from "./component/home";
import Iphone from "./component/iph";
import Mac from "./component/mac";
import Tools from "./component/tools";
import Guides from "./component/guides";
import About from "./component/about";
import Footer from "./component/footer";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  
  useEffect(() => {
    const duration = 6000;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percentage = Math.min(Math.floor((elapsed / duration) * 100), 100);

      setProgress(percentage);

      if (elapsed >= duration) {
        clearInterval(interval);
        setProgress(100);

        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
      {/* =====================================================
          CINEMATIC LOADER
      ===================================================== */}

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.08,
              filter: "blur(20px)",
            }}
            transition={{
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              fixed
              inset-0
              z-[99999]
              overflow-hidden
              bg-black
            "
          >
            {/* =================================================
                AMBIENT LIGHT
            ================================================= */}

            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.08, 0.2, 0.08],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-blue-500/20
                blur-[130px]
              "
            />

            {/* =================================================
                ROTATING OUTER RING
            ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[550px]
                w-[550px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/[0.04]
              "
            />

            {/* =================================================
                SECOND RING
            ================================================= */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[400px]
                w-[400px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-blue-400/[0.08]
              "
            />

            {/* =================================================
                THIRD RING
            ================================================= */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[280px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/[0.07]
              "
            />

            {/* =================================================
                SCANNING LINE
            ================================================= */}

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "100vh" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-[1px]
                w-full
                bg-gradient-to-r
                from-transparent
                via-blue-400/30
                to-transparent
              "
            />

            {/* =================================================
                CENTER
            ================================================= */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                flex
                -translate-x-1/2
                -translate-y-1/2
                flex-col
                items-center
              "
            >
              {/* ===============================================
                  LOGO CONTAINER
              =============================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -180,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                {/* Logo Glow */}

                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.4, 0.15],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-white
                    blur-2xl
                  "
                />

                {/* Logo */}

                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.05)",
                      "0 0 60px rgba(255,255,255,0.2)",
                      "0 0 20px rgba(255,255,255,0.05)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    relative
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-4xl
                    font-black
                    text-black
                  "
                >
                  A
                </motion.div>
              </motion.div>

              {/* ===============================================
                  BRAND NAME
              =============================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                }}
                className="mt-8 text-center"
              >
                <h1
                  className="
                  text-5xl
                  font-semibold
                  tracking-[-0.07em]
                  text-white
                  sm:text-6xl
                "
                >
                  Apple<span className="text-blue-500">Hub</span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, letterSpacing: "0em" }}
                  animate={{
                    opacity: 1,
                    letterSpacing: "0.6em",
                  }}
                  transition={{
                    delay: 1.3,
                    duration: 1,
                  }}
                  className="
                    mt-3
                    text-[9px]
                    uppercase
                    text-gray-500
                  "
                >
                  Digital Anatomy
                </motion.p>
              </motion.div>

              {/* ===============================================
                  PROGRESS BAR
              =============================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                animate={{
                  opacity: 1,
                  width: "220px",
                }}
                transition={{
                  delay: 1.5,
                  duration: 0.8,
                }}
                className="
                  mt-12
                  h-[2px]
                  overflow-hidden
                  rounded-full
                  bg-white/10
                  sm:w-[280px]
                "
              >
                <motion.div
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "linear",
                  }}
                  className="
                    h-full
                    bg-white
                    shadow-[0_0_15px_rgba(255,255,255,0.5)]
                  "
                />
              </motion.div>

              {/* ===============================================
                  STATUS + PERCENTAGE
              =============================================== */}

              <div
                className="
                mt-4
                flex
                w-full
                items-center
                justify-between
                gap-20
              "
              >
                <div
                  className="
                  flex
                  items-center
                  gap-2
                "
                >
                  <motion.span
                    animate={{
                      opacity: [0.2, 1, 0.2],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-green-400
                    "
                  />

                  <span
                    className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-gray-600
                  "
                  >
                    {progress < 30
                      ? "Booting"
                      : progress < 60
                        ? "Loading"
                        : progress < 90
                          ? "Preparing"
                          : "Ready"}
                  </span>
                </div>

                <motion.span
                  key={progress}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  className="
                    font-mono
                    text-[9px]
                    text-gray-500
                  "
                >
                  {String(progress).padStart(3, "0")}%
                </motion.span>
              </div>
            </div>

            {/* =================================================
                TOP LEFT
            ================================================= */}

            <div
              className="
              absolute
              left-6
              top-6
              font-mono
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-gray-700
              sm:left-10
              sm:top-10
            "
            >
              APPLEHUB / SYSTEM
            </div>

            {/* =================================================
                TOP RIGHT
            ================================================= */}

            <div
              className="
              absolute
              right-6
              top-6
              font-mono
              text-[8px]
              tracking-[0.2em]
              text-gray-700
              sm:right-10
              sm:top-10
            "
            >
              001 / 006
            </div>

            {/* =================================================
                BOTTOM LEFT
            ================================================= */}

            <div
              className="
              absolute
              bottom-6
              left-6
              font-mono
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-gray-700
              sm:bottom-10
              sm:left-10
            "
            >
              DIGITAL EXPERIENCE
            </div>

            {/* =================================================
                BOTTOM RIGHT
            ================================================= */}

            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-6
                right-6
                font-mono
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-gray-700
                sm:bottom-10
                sm:right-10
              "
            >
              SYSTEM ONLINE
            </motion.div>

            {/* =================================================
                CORNER MARKS
            ================================================= */}

            <div
              className="
              absolute
              left-5
              top-1/2
              h-8
              w-[1px]
              bg-white/10
            "
            />

            <div
              className="
              absolute
              right-5
              top-1/2
              h-8
              w-[1px]
              bg-white/10
            "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          ROUTES
      ===================================================== */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/iph" element={<Iphone />} />

        <Route path="/mac" element={<Mac />} />

        <Route path="/tools" element={<Tools />} />

        <Route path="/guides" element={<Guides />} />

        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
