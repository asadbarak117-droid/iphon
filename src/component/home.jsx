import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "motion/react";

function Home() {
  /* =========================
     DATA
  ========================= */

  const anatomy = [
    { name: "Display", x: "-35%", y: "-25%", delay: 0 },
    { name: "Chip", x: "35%", y: "-35%", delay: 0.2 },
    { name: "Camera", x: "-42%", y: "20%", delay: 0.4 },
    { name: "Battery", x: "40%", y: "25%", delay: 0.6 },
  ];

  const features = [
    {
      number: "01",
      title: "Display",
      description:
        "The visual interface that connects you with everything inside the device.",
    },
    {
      number: "02",
      title: "Chip",
      description:
        "The processing architecture responsible for performance and intelligence.",
    },
    {
      number: "03",
      title: "Camera",
      description:
        "A precision imaging system combining hardware and computational photography.",
    },
    {
      number: "04",
      title: "Battery",
      description:
        "The energy system that keeps every component working together.",
    },
  ];

  /* =========================
     MOUSE MOVEMENT
  ========================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const phoneX = useTransform(smoothX, [-500, 500], [-30, 30]);
  const phoneY = useTransform(smoothY, [-500, 500], [-30, 30]);

  const macX = useTransform(smoothX, [-500, 500], [25, -25]);
  const macY = useTransform(smoothY, [-500, 500], [20, -20]);

  const handleMouseMove = (e) => {
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  /* =========================
     SCROLL
  ========================= */

  const { scrollYProgress } = useScroll();

  const phoneRotate = useTransform(scrollYProgress, [0, 0.4], [0, 25]);

  const phoneScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.65]);

  const macRotate = useTransform(scrollYProgress, [0, 0.4], [0, -15]);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -200]);

  return (
    <main
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-black text-white overflow-hidden"
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen flex items-center justify-center">
        {/* GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.12]
            bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* GLOW 1 */}

        <motion.div
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-600/20
            blur-[150px]
          "
        />

        {/* GLOW 2 */}

        <motion.div
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 100, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-0
            w-[400px]
            h-[400px]
            rounded-full
            bg-purple-600/20
            blur-[140px]
          "
        />

        {/* HERO CONTENT */}

        <motion.div
          style={{
            opacity: heroOpacity,
            y: heroY,
          }}
          className="
            relative
            z-20
            text-center
            px-6
            pt-20
          "
        >
          {/* BADGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              text-xs
              tracking-[0.3em]
              text-gray-400
            "
          >
            THE ANATOMY OF APPLE
          </motion.div>

          {/* TITLE */}

          <div className="mt-8 overflow-hidden">
            <motion.h1
              initial={{ y: 180 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-7xl
                sm:text-8xl
                md:text-[130px]
                font-bold
                tracking-[-0.07em]
                leading-[0.8]
              "
            >
              Inside
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 180 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                text-7xl
                sm:text-8xl
                md:text-[130px]
                font-bold
                tracking-[-0.07em]
                leading-[0.8]
                bg-gradient-to-r
                from-blue-400
                via-white
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              Apple.
            </motion.h1>
          </div>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="
              max-w-xl
              mx-auto
              mt-10
              text-gray-400
              text-lg
              leading-8
            "
          >
            Go beyond the surface. Discover the components, architecture and
            technology hidden inside iPhone and Mac.
          </motion.p>

          {/* BUTTON */}

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
              delay: 1.1,
            }}
            className="mt-10"
          >
            <Link
              to="/iph"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-white
                text-black
                font-semibold
                hover:scale-110
                transition-transform
              "
            >
              Explore the anatomy
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* =================================================
            FLOATING IPHONE
        ================================================= */}

        <motion.div
          style={{
            x: phoneX,
            y: phoneY,
            rotate: phoneRotate,
            scale: phoneScale,
          }}
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            z-10
            left-[5%]
            md:left-[12%]
            bottom-[10%]
          "
        >
          <div
            className="
              relative
              w-[100px]
              h-[200px]
              md:w-[150px]
              md:h-[300px]
              rounded-[30px]
              md:rounded-[45px]
              border-[5px]
              border-gray-500
              bg-gradient-to-br
              from-gray-800
              via-black
              to-gray-900
              shadow-[0_0_80px_rgba(59,130,246,.25)]
              rotate-[-12deg]
            "
          >
            {/* SCREEN */}

            <div
              className="
                absolute
                inset-[7px]
                rounded-[24px]
                md:rounded-[38px]
                bg-gradient-to-br
                from-blue-950
                via-black
                to-purple-950
                overflow-hidden
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  w-20
                  h-20
                  rounded-full
                  bg-blue-500
                  blur-3xl
                  top-10
                  left-5
                "
              />

              <div
                className="
                  absolute
                  top-2
                  left-1/2
                  -translate-x-1/2
                  w-12
                  h-4
                  rounded-full
                  bg-black
                "
              />
            </div>

            {/* CAMERA */}

            <div
              className="
                absolute
                -left-2
                top-8
                w-12
                h-12
                rounded-xl
                bg-gray-800
                border border-gray-600
                flex
                items-center
                justify-center
              "
            >
              <div className="w-5 h-5 rounded-full bg-black border border-gray-500" />
            </div>
          </div>
        </motion.div>

        {/* =================================================
            FLOATING MAC
        ================================================= */}

        <motion.div
          style={{
            x: macX,
            y: macY,
            rotate: macRotate,
          }}
          animate={{
            y: [15, -15, 15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            z-10
            right-[3%]
            md:right-[10%]
            bottom-[12%]
          "
        >
          <div className="relative">
            {/* SCREEN */}

            <div
              className="
                w-[220px]
                md:w-[350px]
                h-[140px]
                md:h-[220px]
                rounded-xl
                md:rounded-2xl
                border-[5px]
                border-gray-500
                bg-gradient-to-br
                from-gray-800
                via-black
                to-gray-900
                p-2
                shadow-[0_0_100px_rgba(139,92,246,.2)]
              "
            >
              <div
                className="
                  w-full
                  h-full
                  rounded-lg
                  bg-gradient-to-br
                  from-purple-950
                  via-black
                  to-blue-950
                  relative
                  overflow-hidden
                "
              >
                <motion.div
                  animate={{
                    x: [-50, 200, -50],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    w-32
                    h-32
                    rounded-full
                    bg-purple-500/30
                    blur-3xl
                  "
                />
              </div>
            </div>

            {/* BASE */}

            <div
              className="
                mx-auto
                w-[260px]
                md:w-[430px]
                h-[10px]
                md:h-[15px]
                rounded-b-xl
                bg-gradient-to-b
                from-gray-400
                to-gray-700
              "
            />

            <div
              className="
                mx-auto
                w-20
                md:w-32
                h-2
                bg-gray-600
                rounded-full
              "
            />
          </div>
        </motion.div>

        {/* SCROLL */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-7
            left-1/2
            -translate-x-1/2
            text-center
            text-gray-500
          "
        >
          <p className="text-[10px] tracking-[0.3em] mb-2">SCROLL</p>↓
        </motion.div>
      </section>

      {/* =====================================================
          ANATOMY SECTION
      ====================================================== */}

      <section
        className="
          relative
          min-h-screen
          py-40
          px-6
          flex
          items-center
          justify-center
        "
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

        <div className="relative max-w-6xl w-full">
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="text-center"
          >
            <p className="text-blue-500 tracking-[0.3em] text-sm">
              LOOK CLOSER
            </p>

            <h2
              className="
                mt-5
                text-5xl
                md:text-8xl
                font-bold
                tracking-tight
              "
            >
              What is inside?
            </h2>
          </motion.div>

          {/* CENTRAL DEVICE */}

          <div className="relative h-[550px] mt-10 flex justify-center items-center">
            <motion.div
              animate={{
                rotateY: [0, 15, -15, 0],
                rotateZ: [-3, 3, -3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                w-[180px]
                h-[360px]
                rounded-[45px]
                border-[6px]
                border-gray-600
                bg-black
                shadow-[0_0_100px_rgba(59,130,246,.25)]
              "
            >
              <div
                className="
                  absolute
                  inset-[8px]
                  rounded-[36px]
                  bg-gradient-to-br
                  from-blue-950
                  via-black
                  to-purple-950
                "
              />

              <div
                className="
                  absolute
                  top-3
                  left-1/2
                  -translate-x-1/2
                  w-14
                  h-5
                  rounded-full
                  bg-black
                "
              />

              {/* CHIP */}

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-16
                  h-16
                  rounded-xl
                  border border-blue-400/40
                  bg-blue-500/10
                  shadow-[0_0_40px_rgba(59,130,246,.4)]
                "
              />
            </motion.div>

            {/* ANATOMY LABELS */}

            {anatomy.map((item) => (
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: item.delay,
                  duration: 0.7,
                }}
                className="absolute"
                style={{
                  left: `calc(50% + ${item.x})`,
                  top: `calc(50% + ${item.y})`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-blue-400
                      shadow-[0_0_20px_rgba(59,130,246,1)]
                    "
                  />

                  <span
                    className="
                      text-sm
                      md:text-base
                      text-gray-300
                      whitespace-nowrap
                    "
                  >
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}

      <section className="bg-white text-black py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 70,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
          >
            <p className="text-gray-500 tracking-[0.3em]">THE ANATOMY</p>

            <h2
              className="
                text-5xl
                md:text-8xl
                font-bold
                mt-5
                tracking-tight
              "
            >
              Every part
              <br />
              has a purpose.
            </h2>
          </motion.div>

          <div className="mt-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{
                  x: 15,
                }}
                className="
                  group
                  border-b
                  border-black/10
                  py-12
                  flex
                  items-center
                  justify-between
                  gap-10
                  cursor-pointer
                "
              >
                <div className="flex items-center gap-8">
                  <span className="text-sm text-gray-400">
                    {feature.number}
                  </span>

                  <h3
                    className="
                      text-3xl
                      md:text-6xl
                      font-bold
                    "
                  >
                    {feature.title}
                  </h3>
                </div>

                <p
                  className="
                    hidden
                    md:block
                    max-w-md
                    text-gray-500
                    group-hover:text-black
                    transition
                  "
                >
                  {feature.description}
                </p>

                <span
                  className="
                    text-3xl
                    group-hover:translate-x-3
                    transition-transform
                  "
                >
                  →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        className="
          min-h-screen
          flex
          items-center
          justify-center
          relative
          overflow-hidden
          px-6
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            w-[500px]
            h-[500px]
            rounded-full
            border
            border-blue-500/10
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="
            absolute
            w-[300px]
            h-[300px]
            rounded-full
            bg-blue-600/20
            blur-[120px]
          "
        />

        <div className="relative z-10 text-center">
          <p className="text-blue-500 tracking-[0.4em] text-sm">GO DEEPER</p>

          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.7,
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
            className="
              mt-6
              text-6xl
              md:text-[120px]
              font-bold
              tracking-[-0.06em]
            "
          >
            Explore.
          </motion.h2>

          <p className="text-gray-400 max-w-lg mx-auto mt-8 text-lg">
            Discover the technology behind iPhone and Mac, one component at a
            time.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            {/* iPHONE */}

            <Link
              to="/iph"
              className="
                px-8
                py-4
                rounded-full
                bg-white
                text-black
                font-semibold
                hover:scale-110
                transition
              "
            >
              Explore iPhone →
            </Link>

            {/* MAC */}

            <Link
              to="/mac"
              className="
                px-8
                py-4
                rounded-full
                border border-white/20
                hover:bg-white
                hover:text-black
                transition
              "
            >
              Explore Mac →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="
          border-t
          border-white/10
          py-10
          text-center
          text-gray-600
          text-sm
        "
      >
        AppleHub — Discover what is inside.
      </footer>
    </main>
  );
}

export default Home;
