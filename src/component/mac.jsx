import { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "motion/react";
import { Link } from "react-router-dom";

import {
  Cpu,
  Database,
  HardDrive,
  Monitor,
  BatteryCharging,
  Wifi,
  Cable,
  Volume2,
  Keyboard,
  Fan,
  Camera,
  ShieldCheck,
  Layers3,
  MemoryStick,
  CircuitBoard,
  Zap,
  Globe,
  Code2,
  Settings,
  FileCode2,
  LockKeyhole,
  Workflow,
  Search,
  ArrowRight,
  ChevronRight,
  MousePointer2,
  Microchip,
  Radio,
  Usb,
  Headphones,
  Thermometer,
  Laptop,
  MonitorSmartphone,
  Fingerprint,
  Box,
  Network,
  HardDriveDownload,
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

const IMAGES = {
  mac: "https://cdn.mos.cms.futurecdn.net/3mFehHkNmRcDhYCmKYYnP9.jpg",
  macBottom: "https://cdn.mos.cms.futurecdn.net/2EJkBcAYiAF58AXxoqhjo8.jpg",
  ports: "https://cdn.mos.cms.futurecdn.net/KgG6zXvvPPJPjA3k6ihEW9.jpg",
  camera: "https://cdn.mos.cms.futurecdn.net/eciLsSMv5ChxYPEmEe7My9.jpg",
  keyboard:
    "https://mattersnext.com/wp-content/uploads/2018/07/third-generation-butterfly-keyboard-2018-macbook-pro.jpg?h=577&w=850",
  internals:
    "https://images.macrumors.com/article-new/2021/10/macbook-pro-teardown-1.jpg",
};

const IMAGE_POOL = [
  IMAGES.mac,
  IMAGES.internals,
  IMAGES.ports,
  IMAGES.keyboard,
  IMAGES.camera,
  IMAGES.macBottom,
];

const history = [
  {
    year: "1984",
    title: "Macintosh 128K",
    description:
      "The original Macintosh introduced a graphical user interface built around windows, icons, menus and a mouse.",
    details: [
      "Motorola 68000",
      "128 KB RAM",
      "400 KB floppy disk",
      "9-inch display",
      "Graphical user interface",
    ],
    image: IMAGES.mac,
  },
  {
    year: "1990s",
    title: "PowerPC Era",
    description:
      "PowerPC processors increased Macintosh performance and helped professional graphics, video editing and desktop publishing.",
    details: [
      "PowerPC processors",
      "Higher performance",
      "Professional graphics",
      "Video editing",
      "Desktop publishing",
    ],
    image: IMAGES.internals,
  },
  {
    year: "2006",
    title: "Intel Era",
    description:
      "Apple moved the Mac platform to Intel processors, improving performance and compatibility with other operating systems.",
    details: [
      "Intel processors",
      "Higher performance",
      "Better compatibility",
      "Boot Camp",
      "Modern software support",
    ],
    image: IMAGES.macBottom,
  },
  {
    year: "2020+",
    title: "Apple Silicon Era",
    description:
      "Apple Silicon changed Mac architecture by integrating CPU, GPU, Neural Engine, Media Engine and memory controllers into an SoC.",
    details: ["M1", "M2", "M3", "M4", "Integrated SoC architecture"],
    image: IMAGES.internals,
  },
];

const software = [
  {
    icon: MonitorSmartphone,
    title: "macOS",
    description:
      "The operating system manages applications, memory, files, processes, hardware, networking, security and user accounts.",
  },
  {
    icon: Layers3,
    title: "User Interface",
    description:
      "The desktop environment includes Finder, Dock, windows, menus, icons, notifications and System Settings.",
  },
  {
    icon: Code2,
    title: "Applications",
    description:
      "Applications such as Safari, Final Cut Pro, Xcode, Logic Pro and VS Code run on top of macOS.",
  },
  {
    icon: Workflow,
    title: "Frameworks",
    description:
      "System frameworks provide reusable capabilities for graphics, audio, networking, user interfaces and machine learning.",
  },
  {
    icon: FileCode2,
    title: "APIs",
    description:
      "APIs allow applications and system components to communicate with macOS services and hardware.",
  },
  {
    icon: Cable,
    title: "Drivers",
    description:
      "Drivers provide the communication layer between the operating system and physical hardware.",
  },
  {
    icon: Settings,
    title: "Firmware",
    description:
      "Firmware is low-level software closely associated with hardware and helps initialize and control components.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Mac security protects accounts, applications, files, encryption keys, system integrity and the boot process.",
  },
];

const hardware = [
  {
    category: "Processing",
    icon: Cpu,
    items: ["Apple Silicon", "CPU", "GPU", "Neural Engine", "Media Engine"],
    image: IMAGES.internals,
  },
  {
    category: "Memory",
    icon: MemoryStick,
    items: ["Unified Memory"],
    image: IMAGES.internals,
  },
  {
    category: "Storage",
    icon: HardDrive,
    items: ["SSD", "NAND Flash"],
    image: IMAGES.macBottom,
  },
  {
    category: "Display",
    icon: Monitor,
    items: ["LCD", "Retina", "Mini-LED", "Glass"],
    image: IMAGES.mac,
  },
  {
    category: "Power",
    icon: BatteryCharging,
    items: ["Battery", "Power Supply", "Power Management"],
    image: IMAGES.macBottom,
  },
  {
    category: "Connectivity",
    icon: Wifi,
    items: ["Wi-Fi", "Bluetooth", "Ethernet", "USB"],
    image: IMAGES.ports,
  },
  {
    category: "Ports",
    icon: Usb,
    items: ["Thunderbolt", "USB-C", "HDMI", "SD Card", "Headphone"],
    image: IMAGES.ports,
  },
  {
    category: "Audio",
    icon: Volume2,
    items: ["Speakers", "Microphones", "Audio Controller"],
    image: IMAGES.mac,
  },
  {
    category: "Input",
    icon: Keyboard,
    items: ["Keyboard", "Trackpad", "Mouse", "Touch ID"],
    image: IMAGES.keyboard,
  },
  {
    category: "Cooling",
    icon: Fan,
    items: ["Fan", "Heat Sink", "Heat Pipes", "Thermal System"],
    image: IMAGES.internals,
  },
  {
    category: "Camera",
    icon: Camera,
    items: ["Webcam", "Image Sensor", "Camera Processing"],
    image: IMAGES.camera,
  },
  {
    category: "Security",
    icon: ShieldCheck,
    items: ["Secure Enclave", "Touch ID", "Secure Boot", "Encryption"],
    image: IMAGES.internals,
  },
  {
    category: "Structure",
    icon: Box,
    items: ["Aluminum Enclosure", "Logic Board", "Hinges", "Internal Frame"],
    image: IMAGES.mac,
  },
];

const anatomy = [
  {
    number: "01",
    title: "Logic Board",
    description:
      "The main circuit board connects the SoC, memory, storage, power systems and controllers.",
    icon: CircuitBoard,
  },
  {
    number: "02",
    title: "Apple Silicon",
    description:
      "The SoC combines CPU, GPU, Neural Engine, Media Engine and multiple controllers.",
    icon: Microchip,
  },
  {
    number: "03",
    title: "Unified Memory",
    description:
      "CPU, GPU and other SoC components access a shared high-speed memory system.",
    icon: MemoryStick,
  },
  {
    number: "04",
    title: "SSD",
    description:
      "Flash storage provides persistent space for macOS, applications and user files.",
    icon: HardDrive,
  },
  {
    number: "05",
    title: "Power IC",
    description:
      "Power management circuitry controls and distributes electrical power throughout the Mac.",
    icon: Zap,
  },
  {
    number: "06",
    title: "Controllers",
    description:
      "Specialized controllers coordinate interfaces, ports, sensors, storage and other subsystems.",
    icon: Network,
  },
  {
    number: "07",
    title: "Sensors",
    description:
      "Sensors provide information about temperature, position, power and system conditions.",
    icon: Thermometer,
  },
];

const architecture = [
  {
    title: "Video Processing",
    icon: Monitor,
    steps: [
      "User",
      "Video App",
      "macOS",
      "Media APIs",
      "Media Engine",
      "Unified Memory",
      "Display System",
      "Display",
    ],
    image: IMAGES.mac,
  },
  {
    title: "Music Processing",
    icon: Volume2,
    steps: [
      "User",
      "Music App",
      "macOS",
      "Audio Framework",
      "Audio Controller",
      "Speakers",
    ],
    image: IMAGES.macBottom,
  },
  {
    title: "Website Access",
    icon: Globe,
    steps: [
      "User",
      "Safari",
      "macOS",
      "Network APIs",
      "Wi-Fi",
      "Router",
      "Internet",
      "Website",
    ],
    image: IMAGES.ports,
  },
  {
    title: "File Saving",
    icon: HardDriveDownload,
    steps: [
      "Application",
      "macOS",
      "File System",
      "Storage Controller",
      "SSD",
      "NAND Flash",
    ],
    image: IMAGES.internals,
  },
];

const internalComponents = [
  "Logic Board",
  "SoC",
  "Unified Memory",
  "SSD",
  "Power IC",
  "Controllers",
  "Sensors",
];

const categories = [
  "All",
  "Processing",
  "Memory",
  "Storage",
  "Display",
  "Power",
  "Connectivity",
  "Ports",
  "Audio",
  "Input",
  "Cooling",
  "Camera",
  "Security",
  "Structure",
];

const classificationItems = [
  {
    title: "Apple Silicon",
    category: "Processing",
    description:
      "The central system-on-chip integrates major computing functions.",
    icon: Cpu,
  },
  {
    title: "CPU",
    category: "Processing",
    description:
      "The CPU executes general-purpose instructions and runs applications.",
    icon: Cpu,
  },
  {
    title: "GPU",
    category: "Processing",
    description:
      "The GPU handles graphics rendering, visual workloads and parallel computation.",
    icon: Monitor,
  },
  {
    title: "Neural Engine",
    category: "Processing",
    description:
      "A specialized processor accelerates machine-learning operations.",
    icon: Microchip,
  },
  {
    title: "Media Engine",
    category: "Processing",
    description:
      "Dedicated media hardware accelerates video encoding and decoding.",
    icon: MonitorSmartphone,
  },
  {
    title: "Unified Memory",
    category: "Memory",
    description:
      "CPU, GPU and other SoC units share the same memory architecture.",
    icon: MemoryStick,
  },
  {
    title: "SSD",
    category: "Storage",
    description:
      "Persistent high-speed storage holds macOS, applications and files.",
    icon: HardDrive,
  },
  {
    title: "NAND Flash",
    category: "Storage",
    description:
      "Non-volatile flash memory stores data even when the Mac is powered off.",
    icon: Database,
  },
  {
    title: "Retina Display",
    category: "Display",
    description:
      "High-density display technology provides sharp images and text.",
    icon: Monitor,
  },
  {
    title: "Mini-LED",
    category: "Display",
    description:
      "Mini-LED backlighting can provide high brightness and strong contrast.",
    icon: Monitor,
  },
  {
    title: "Battery",
    category: "Power",
    description: "The battery supplies portable electrical energy to the Mac.",
    icon: BatteryCharging,
  },
  {
    title: "Power Management",
    category: "Power",
    description:
      "Power systems regulate energy delivery and optimize battery operation.",
    icon: Zap,
  },
  {
    title: "Wi-Fi",
    category: "Connectivity",
    description:
      "Wireless networking connects the Mac to local networks and the internet.",
    icon: Wifi,
  },
  {
    title: "Bluetooth",
    category: "Connectivity",
    description:
      "Short-range wireless communication connects peripherals and accessories.",
    icon: Radio,
  },
  {
    title: "Thunderbolt",
    category: "Ports",
    description:
      "A high-speed interface supports data, displays and compatible peripherals.",
    icon: Cable,
  },
  {
    title: "USB-C",
    category: "Ports",
    description:
      "A reversible connector used for charging, data and accessories.",
    icon: Usb,
  },
  {
    title: "HDMI",
    category: "Ports",
    description:
      "A digital interface used for compatible external displays and audio.",
    icon: Monitor,
  },
  {
    title: "Speakers",
    category: "Audio",
    description:
      "Integrated speakers convert electrical signals into audible sound.",
    icon: Volume2,
  },
  {
    title: "Microphones",
    category: "Audio",
    description: "Built-in microphones capture voice and environmental audio.",
    icon: Headphones,
  },
  {
    title: "Keyboard",
    category: "Input",
    description: "The keyboard provides physical text and command input.",
    icon: Keyboard,
  },
  {
    title: "Trackpad",
    category: "Input",
    description: "The trackpad detects gestures and pointer movement.",
    icon: MousePointer2,
  },
  {
    title: "Touch ID",
    category: "Security",
    description: "Biometric authentication verifies the user's fingerprint.",
    icon: Fingerprint,
  },
  {
    title: "Fan",
    category: "Cooling",
    description: "Active cooling moves air through the system to remove heat.",
    icon: Fan,
  },
  {
    title: "Heat Sink",
    category: "Cooling",
    description:
      "A heat sink transfers thermal energy away from hot components.",
    icon: Thermometer,
  },
  {
    title: "Webcam",
    category: "Camera",
    description:
      "The built-in camera captures video for communication and content.",
    icon: Camera,
  },
  {
    title: "Image Sensor",
    category: "Camera",
    description:
      "The image sensor converts incoming light into digital image information.",
    icon: Camera,
  },
  {
    title: "Secure Enclave",
    category: "Security",
    description:
      "A dedicated security subsystem protects sensitive credentials and cryptographic operations.",
    icon: LockKeyhole,
  },
  {
    title: "Secure Boot",
    category: "Security",
    description:
      "Secure boot helps verify trusted software during system startup.",
    icon: ShieldCheck,
  },
  {
    title: "Aluminum Enclosure",
    category: "Structure",
    description:
      "The enclosure protects the internal hardware and provides structural rigidity.",
    icon: Laptop,
  },
  {
    title: "Logic Board",
    category: "Structure",
    description:
      "The logic board provides the main electrical platform for the Mac.",
    icon: CircuitBoard,
  },
];

function FloatingOrb({
  className = "",
  size = "h-20 w-20",
  color = COLORS.blue,
  duration = 6,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -25, 0],
        x: [0, 15, 0],
        scale: [1, 1.12, 1],
        opacity: [0.35, 0.7, 0.35],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`pointer-events-none absolute rounded-full blur-2xl ${size} ${className}`}
      style={{ background: color }}
    />
  );
}

function RealImage({ src, alt, className = "", height = "h-64" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.015,
      }}
      className={`group relative overflow-hidden rounded-[28px] bg-white ${height} ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#17324D]/60 via-transparent to-transparent" />

      <motion.div
        initial={{ x: "-150%" }}
        whileHover={{ x: "150%" }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="absolute inset-y-[-30%] w-1/3 rotate-12 bg-white/25 blur-xl"
      />

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 ring-1 ring-inset ring-white/30"
      />

      <div className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-black text-white backdrop-blur-md">
        REAL HARDWARE
      </div>
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black tracking-[0.25em]"
        style={{
          borderColor: `${COLORS.blue}35`,
          background: COLORS.softBlue,
          color: COLORS.blue,
        }}
      >
        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="h-2 w-2 rounded-full bg-[#30AFFF]"
        />
        {eyebrow}
      </motion.div>

      <h2
        className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
        style={{ color: COLORS.text }}
      >
        {title}
      </h2>

      <p
        className="mt-5 text-base leading-8 sm:text-lg"
        style={{ color: COLORS.textLight }}
      >
        {description}
      </p>
    </motion.div>
  );
}

function ArchitectureLine({ steps }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {steps.map((step, index) => (
        <div key={`${step}-${index}`} className="flex items-center gap-3">
          <motion.div
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
              duration: 0.45,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -7,
              scale: 1.06,
            }}
            className="rounded-2xl border bg-white px-4 py-3 text-center text-xs font-bold shadow-sm"
            style={{
              borderColor: COLORS.border,
              color: COLORS.text,
            }}
          >
            {step}
          </motion.div>

          {index < steps.length - 1 && (
            <motion.div
              animate={{
                x: [0, 5, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.15,
              }}
            >
              <ChevronRight size={16} style={{ color: COLORS.blue }} />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Mac() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return classificationItems.filter((item) => {
      const categoryMatch =
        activeCategory === "All" || item.category === activeCategory;

      const searchMatch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  const { scrollYProgress } = useScroll();

  const laptopY = useTransform(scrollYProgress, [0, 0.18, 0.4], [70, -20, 35]);

  const laptopRotate = useTransform(scrollYProgress, [0, 0.2, 0.4], [3, -3, 1]);

  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.92]);

  const glowOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 24;

    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 24;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F7FBFF 45%, #FFFFFF 100%)",
      }}
    >
      <section
        className="relative min-h-[850px] overflow-hidden px-6 pb-24 pt-32 sm:px-10 lg:px-16"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <FloatingOrb
          className="left-[8%] top-[20%]"
          size="h-28 w-28"
          color={`${COLORS.blue}55`}
          duration={5}
        />

        <FloatingOrb
          className="right-[10%] top-[28%]"
          size="h-36 w-36"
          color={`${COLORS.cyan}70`}
          duration={7}
        />

        <FloatingOrb
          className="bottom-[10%] left-[45%]"
          size="h-24 w-24"
          color={`${COLORS.green}80`}
          duration={8}
        />

        <motion.div
          style={{ opacity: glowOpacity }}
          className="pointer-events-none absolute left-1/2 top-20 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#92EEFF]/25 blur-[150px]"
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-[25%] h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-[#30AFFF]/10"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-[25%] h-[650px] w-[650px] -translate-x-1/2 rounded-full border border-[#92EEFF]/10"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
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
                delay: 0.2,
                duration: 0.7,
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-black tracking-[0.3em]"
              style={{
                borderColor: `${COLORS.blue}40`,
                background: COLORS.softBlue,
                color: COLORS.blue,
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Laptop size={15} />
              </motion.div>
              APPLEHUB · MAC SYSTEM
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.9,
              }}
              className="text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-8xl"
              style={{ color: COLORS.text }}
            >
              Mac
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="block bg-[length:200%_auto] bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #30AFFF, #92EEFF, #30AFFF)",
                }}
              >
                Anatomy.
              </motion.span>
            </motion.h1>

            <motion.p
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
                duration: 0.8,
              }}
              className="mt-7 max-w-xl text-lg leading-8"
              style={{ color: COLORS.textLight }}
            >
              Explore the Mac from its history and software stack to Apple
              Silicon, unified memory, storage, ports, security and internal
              architecture.
            </motion.p>

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
                delay: 0.7,
                duration: 0.8,
              }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <motion.a
                href="#history"
                whileHover={{
                  scale: 1.06,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white shadow-lg"
                style={{
                  background: COLORS.blue,
                  boxShadow: `0 15px 40px ${COLORS.blue}35`,
                }}
              >
                Explore Anatomy
                <motion.span
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.a>

              <motion.a
                href="#classification"
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3 font-bold"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.text,
                }}
              >
                Smart Classification
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            style={{
              y: laptopY,
              rotate: laptopRotate,
              scale: heroScale,
              x: springX,
            }}
            initial={{
              opacity: 0,
              scale: 0.7,
              rotate: 8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 2,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -inset-14 rounded-full blur-3xl"
              style={{
                background: `${COLORS.cyan}50`,
              }}
            />

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <RealImage
                src={IMAGES.mac}
                alt="MacBook hardware"
                height="h-[360px] sm:h-[480px]"
                className="relative shadow-2xl"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 rounded-3xl border bg-white/90 p-5 shadow-xl backdrop-blur-xl"
              style={{
                borderColor: COLORS.border,
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Microchip size={28} style={{ color: COLORS.blue }} />
              </motion.div>

              <p
                className="mt-2 text-xs font-black"
                style={{ color: COLORS.text }}
              >
                APPLE SILICON
              </p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                x: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
              }}
              className="absolute -right-4 top-10 rounded-2xl border bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl"
              style={{
                borderColor: COLORS.border,
              }}
            >
              <div className="flex items-center gap-2">
                <Zap size={18} style={{ color: COLORS.blue }} />
                <span
                  className="text-xs font-black"
                  style={{ color: COLORS.text }}
                >
                  SoC CORE
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="history"
        className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
      >
        <FloatingOrb
          className="right-[-50px] top-[20%]"
          size="h-48 w-48"
          color={`${COLORS.cyan}30`}
        />

        <SectionHeading
          eyebrow="01 · HISTORY"
          title="From Macintosh to Apple Silicon."
          description="The Mac evolved through several major architectural eras, transforming from a simple desktop computer into an integrated computing platform."
        />

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {history.map((item, index) => (
            <motion.article
              key={item.year}
              initial={{
                opacity: 0,
                y: 70,
                rotateX: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
                scale: 1.015,
              }}
              className="group overflow-hidden rounded-[32px] border bg-white shadow-sm"
              style={{
                borderColor: COLORS.border,
              }}
            >
              <RealImage src={item.image} alt={item.title} height="h-64" />

              <div className="p-7">
                <motion.div
                  whileHover={{
                    x: 6,
                  }}
                  className="mb-3 text-sm font-black tracking-[0.2em]"
                  style={{ color: COLORS.blue }}
                >
                  {item.year}
                </motion.div>

                <h3
                  className="text-2xl font-black"
                  style={{ color: COLORS.text }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 leading-7"
                  style={{ color: COLORS.textLight }}
                >
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.details.map((detail, detailIndex) => (
                    <motion.span
                      key={detail}
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
                        delay: index * 0.12 + detailIndex * 0.04,
                      }}
                      whileHover={{
                        scale: 1.06,
                        y: -2,
                      }}
                      className="rounded-full px-3 py-2 text-xs font-bold"
                      style={{
                        background: COLORS.softBlue,
                        color: COLORS.text,
                      }}
                    >
                      {detail}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="software"
        className="relative overflow-hidden bg-[#F7FBFF] px-6 py-24 sm:px-10 lg:px-16"
      >
        <FloatingOrb
          className="left-[-50px] top-[30%]"
          size="h-56 w-56"
          color={`${COLORS.blue}20`}
        />

        <SectionHeading
          eyebrow="02 · SOFTWARE"
          title="The software architecture."
          description="macOS provides the software foundation that connects applications with the hardware beneath them."
        />

        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {software.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.9,
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
                  duration: 0.7,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.025,
                }}
                className="relative overflow-hidden rounded-[28px] border bg-white p-6 shadow-sm"
                style={{
                  borderColor: COLORS.border,
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{
                    background: COLORS.softBlue,
                    color: COLORS.blue,
                  }}
                >
                  <Icon size={27} />
                </motion.div>

                <h3
                  className="text-xl font-black"
                  style={{ color: COLORS.text }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: COLORS.textLight }}
                >
                  {item.description}
                </p>

                <RealImage
                  src={IMAGE_POOL[index % IMAGE_POOL.length]}
                  alt={item.title}
                  height="h-36"
                  className="mt-6"
                />
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="03 · SOFTWARE → HARDWARE"
          title="How software reaches silicon."
          description="Applications do not directly control physical components. Multiple system layers translate software requests into hardware operations."
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] border bg-white p-7 shadow-xl sm:p-10"
          style={{
            borderColor: COLORS.border,
          }}
        >
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-[#92EEFF]/20 to-transparent blur-xl"
          />

          <div className="relative flex flex-wrap items-center justify-center gap-3">
            {[
              "Application",
              "macOS",
              "System API",
              "Framework",
              "Driver",
              "Controller",
              "Hardware",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <motion.div
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
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -7,
                  }}
                  className="rounded-2xl border px-5 py-4 text-sm font-black"
                  style={{
                    borderColor:
                      index === 0 || index === 6
                        ? `${COLORS.blue}60`
                        : COLORS.border,
                    background:
                      index === 0 || index === 6
                        ? COLORS.softBlue
                        : COLORS.white,
                    color: COLORS.text,
                  }}
                >
                  {item}
                </motion.div>

                {index < 6 && (
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.3,
                      repeat: Infinity,
                      delay: index * 0.12,
                    }}
                  >
                    <ArrowRight
                      size={17}
                      style={{
                        color: COLORS.blue,
                      }}
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="hardware"
        className="relative overflow-hidden bg-[#F7FBFF] px-6 py-24 sm:px-10 lg:px-16"
      >
        <FloatingOrb
          className="right-[-60px] top-[10%]"
          size="h-64 w-64"
          color={`${COLORS.green}30`}
        />

        <SectionHeading
          eyebrow="04 · HARDWARE"
          title="Every physical subsystem."
          description="Mac hardware can be classified into processing, memory, storage, display, power, connectivity, input, cooling, security and structural systems."
        />

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hardware.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.category}
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
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.045,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.015,
                }}
                className="overflow-hidden rounded-[30px] border bg-white shadow-sm"
                style={{
                  borderColor: COLORS.border,
                }}
              >
                <RealImage src={item.image} alt={item.category} height="h-48" />

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        background: COLORS.softBlue,
                        color: COLORS.blue,
                      }}
                    >
                      <Icon size={22} />
                    </motion.div>

                    <h3
                      className="text-xl font-black"
                      style={{
                        color: COLORS.text,
                      }}
                    >
                      {item.category}
                    </h3>
                  </div>

                  <div className="mt-5 space-y-2">
                    {item.items.map((subItem, subIndex) => (
                      <motion.div
                        key={subItem}
                        initial={{
                          opacity: 0,
                          x: -15,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: index * 0.045 + subIndex * 0.05,
                        }}
                        whileHover={{
                          x: 7,
                        }}
                        className="flex items-center gap-3 rounded-xl px-3 py-2"
                        style={{
                          background: COLORS.soft,
                        }}
                      >
                        <motion.span
                          animate={{
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: subIndex * 0.2,
                          }}
                          className="h-2 w-2 rounded-full"
                          style={{
                            background: COLORS.blue,
                          }}
                        />

                        <span
                          className="text-sm font-semibold"
                          style={{
                            color: COLORS.textLight,
                          }}
                        >
                          {subItem}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section
        id="classification"
        className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
      >
        <FloatingOrb
          className="left-[5%] top-[15%]"
          size="h-40 w-40"
          color={`${COLORS.cyan}30`}
          duration={6}
        />

        <FloatingOrb
          className="right-[5%] bottom-[20%]"
          size="h-48 w-48"
          color={`${COLORS.green}30`}
          duration={8}
        />

        <SectionHeading
          eyebrow="05 · SMART CLASSIFICATION"
          title="Mac Systems"
          description="Search the complete architecture or filter it by system category."
        />

        <div className="relative mx-auto max-w-7xl">
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
            className="relative mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="pointer-events-none absolute -inset-1 rounded-2xl blur-xl"
              style={{
                background: `${COLORS.cyan}30`,
              }}
            />

            <div className="relative">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2"
                size={20}
                style={{
                  color: COLORS.blue,
                }}
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Mac architecture..."
                className="w-full rounded-2xl border bg-white py-5 pl-14 pr-5 outline-none transition-all duration-300 focus:shadow-[0_0_0_4px_rgba(48,175,255,0.12)]"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.text,
                }}
              />
            </div>
          </motion.div>

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
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="flex flex-wrap gap-3 pb-4"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.25 + index * 0.035,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                onClick={() => setActiveCategory(category)}
                className="rounded-full border px-5 py-3 text-sm font-bold transition-all duration-300"
                style={{
                  borderColor:
                    activeCategory === category ? COLORS.blue : COLORS.border,
                  background:
                    activeCategory === category
                      ? `${COLORS.blue}12`
                      : COLORS.white,
                  color:
                    activeCategory === category
                      ? COLORS.blue
                      : COLORS.textLight,
                  boxShadow:
                    activeCategory === category
                      ? `0 10px 30px ${COLORS.blue}25`
                      : "none",
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            layout
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const Icon = item.icon;
                const image = IMAGE_POOL[index % IMAGE_POOL.length];

                return (
                  <motion.article
                    key={item.title}
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      y: 35,
                      rotateX: 10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      rotateX: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      y: 20,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.025,
                      layout: {
                        duration: 0.45,
                      },
                    }}
                    whileHover={{
                      y: -12,
                      scale: 1.015,
                    }}
                    className="group overflow-hidden rounded-[30px] border bg-white shadow-sm"
                    style={{
                      borderColor: COLORS.border,
                    }}
                  >
                    <RealImage src={image} alt={item.title} height="h-56" />

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <motion.div
                          whileHover={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 0.7,
                          }}
                          className="flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{
                            background: COLORS.softBlue,
                            color: COLORS.blue,
                          }}
                        >
                          <Icon size={24} />
                        </motion.div>

                        <span
                          className="rounded-full px-3 py-2 text-[10px] font-black tracking-wider"
                          style={{
                            background: COLORS.soft,
                            color: COLORS.textLight,
                          }}
                        >
                          {item.category}
                        </span>
                      </div>

                      <h3
                        className="mt-5 text-xl font-black"
                        style={{
                          color: COLORS.text,
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="mt-3 text-sm leading-7"
                        style={{
                          color: COLORS.textLight,
                        }}
                      >
                        {item.description}
                      </p>

                      <motion.div
                        whileHover={{
                          x: 6,
                        }}
                        className="mt-5 flex items-center gap-2 text-xs font-black"
                        style={{
                          color: COLORS.blue,
                        }}
                      >
                        Mac System
                        <ArrowRight size={14} />
                      </motion.div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              className="rounded-[30px] border bg-white p-12 text-center"
              style={{
                borderColor: COLORS.border,
              }}
            >
              <Search
                size={40}
                className="mx-auto"
                style={{
                  color: COLORS.blue,
                }}
              />

              <h3
                className="mt-5 text-2xl font-black"
                style={{
                  color: COLORS.text,
                }}
              >
                No system found
              </h3>

              <p
                className="mt-2"
                style={{
                  color: COLORS.textLight,
                }}
              >
                Try another architecture component or category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section
        id="anatomy"
        className="relative overflow-hidden bg-[#F7FBFF] px-6 py-24 sm:px-10 lg:px-16"
      >
        <FloatingOrb
          className="right-[5%] top-[20%]"
          size="h-48 w-48"
          color={`${COLORS.cyan}35`}
          duration={7}
        />

        <SectionHeading
          eyebrow="06 · INTERACTIVE ANATOMY"
          title="Inside the Mac."
          description="A simplified visual exploration of the major internal systems found inside modern Mac hardware."
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            style={{
              x: springX,
              y: springY,
              rotateX: useTransform(springY, [-20, 20], [4, -4]),
              rotateY: useTransform(springX, [-20, 20], [-5, 5]),
            }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -inset-10 rounded-full blur-3xl"
              style={{
                background: `${COLORS.cyan}40`,
              }}
            />

            <RealImage
              src={IMAGES.internals}
              alt="Mac internal components"
              height="h-[420px] sm:h-[540px]"
              className="relative shadow-2xl"
            />

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-5 -top-5 rounded-2xl border bg-white/90 p-4 shadow-xl backdrop-blur-xl"
              style={{
                borderColor: COLORS.border,
              }}
            >
              <CircuitBoard
                size={26}
                style={{
                  color: COLORS.blue,
                }}
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 -left-5 rounded-2xl border bg-white/90 p-4 shadow-xl backdrop-blur-xl"
              style={{
                borderColor: COLORS.border,
              }}
            >
              <Zap
                size={26}
                style={{
                  color: COLORS.blue,
                }}
              />
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            {anatomy.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.09,
                  }}
                  whileHover={{
                    x: 10,
                    scale: 1.015,
                  }}
                  className="rounded-[24px] border bg-white p-5 shadow-sm"
                  style={{
                    borderColor: COLORS.border,
                  }}
                >
                  <div className="flex gap-4">
                    <motion.div
                      whileHover={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                      style={{
                        background: COLORS.softBlue,
                        color: COLORS.blue,
                      }}
                    >
                      <Icon size={22} />
                    </motion.div>

                    <div>
                      <div
                        className="text-xs font-black tracking-[0.2em]"
                        style={{
                          color: COLORS.blue,
                        }}
                      >
                        {item.number}
                      </div>

                      <h3
                        className="mt-1 text-lg font-black"
                        style={{
                          color: COLORS.text,
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="mt-2 text-sm leading-6"
                        style={{
                          color: COLORS.textLight,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="07 · SYSTEM ARCHITECTURE"
          title="From user action to hardware."
          description="Every common Mac operation travels through multiple layers before producing a physical result."
        />

        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
          {architecture.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.92,
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
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.01,
                }}
                className="overflow-hidden rounded-[32px] border bg-white shadow-sm"
                style={{
                  borderColor: COLORS.border,
                }}
              >
                <RealImage src={item.image} alt={item.title} height="h-52" />

                <div className="p-7">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{
                        background: COLORS.softBlue,
                        color: COLORS.blue,
                      }}
                    >
                      <Icon size={23} />
                    </motion.div>

                    <h3
                      className="text-xl font-black"
                      style={{
                        color: COLORS.text,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-7">
                    <ArchitectureLine steps={item.steps} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7FBFF] px-6 py-24 sm:px-10 lg:px-16">
        <FloatingOrb
          className="left-[-60px] bottom-[10%]"
          size="h-64 w-64"
          color={`${COLORS.green}30`}
        />

        <SectionHeading
          eyebrow="08 · INTERNAL COMPONENTS"
          title="The internal foundation."
          description="The internal architecture combines computation, memory, storage, power and control systems on a tightly integrated platform."
        />

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {internalComponents.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                scale: 0.75,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
              whileHover={{
                scale: 1.06,
                y: -8,
              }}
              className="rounded-2xl border bg-white p-5 shadow-sm"
              style={{
                borderColor: COLORS.border,
              }}
            >
              <motion.div
                animate={{
                  width: ["40px", "70px", "40px"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="mb-3 h-2 rounded-full"
                style={{
                  background: index % 2 === 0 ? COLORS.blue : COLORS.mint,
                }}
              />

              <h3
                className="font-black"
                style={{
                  color: COLORS.text,
                }}
              >
                {item}
              </h3>

              <p
                className="mt-2 text-xs"
                style={{
                  color: COLORS.textLight,
                }}
              >
                Internal Mac component
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="09 · REAL EXAMPLES"
          title="Architecture in action."
          description="See how everyday operations travel through the Mac system."
        />

        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
          {[
            {
              title: "Video",
              image: IMAGES.mac,
              alt: "Mac video processing",
              text: "User → Video App → macOS → Media APIs → Media Engine → Unified Memory → Display System → Display.",
              direction: -60,
            },
            {
              title: "Website",
              image: IMAGES.ports,
              alt: "Mac networking",
              text: "User → Safari → macOS → Network APIs → Wi-Fi → Router → Internet → Website.",
              direction: 60,
            },
            {
              title: "File Save",
              image: IMAGES.internals,
              alt: "Mac storage",
              text: "Application → macOS → File System → Storage Controller → SSD → NAND Flash.",
              direction: -60,
            },
            {
              title: "Music",
              image: IMAGES.macBottom,
              alt: "Mac audio system",
              text: "User → Music App → macOS → Audio Framework → Audio Controller → Speakers.",
              direction: 60,
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: item.direction,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-[32px] border bg-white p-7 shadow-sm"
              style={{
                borderColor: COLORS.border,
              }}
            >
              <RealImage src={item.image} alt={item.alt} height="h-64" />

              <h3
                className="mt-6 text-2xl font-black"
                style={{
                  color: COLORS.text,
                }}
              >
                {item.title}
              </h3>

              <p
                className="mt-3 leading-7"
                style={{
                  color: COLORS.textLight,
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-32 pt-10 sm:px-10 lg:px-16">
        <FloatingOrb
          className="right-[10%] top-[10%]"
          size="h-44 w-44"
          color={`${COLORS.cyan}45`}
          duration={5}
        />

        <FloatingOrb
          className="bottom-[5%] left-[5%]"
          size="h-40 w-40"
          color={`${COLORS.green}40`}
          duration={7}
        />

        <motion.div
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
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[42px] border p-8 sm:p-12 lg:p-16"
          style={{
            borderColor: `${COLORS.blue}30`,
            background:
              "linear-gradient(135deg, #EEF9FF 0%, #FFFFFF 50%, #F0FFE9 100%)",
          }}
        >
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
            style={{
              background: `${COLORS.cyan}45`,
            }}
          />

          <motion.div
            animate={{
              x: [0, -25, 0],
              y: [0, 15, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl"
            style={{
              background: `${COLORS.green}45`,
            }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-black"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.blue,
                }}
              >
                <Laptop size={15} />
                APPLEHUB
              </motion.div>

              <h2
                className="text-4xl font-black tracking-tight sm:text-5xl"
                style={{
                  color: COLORS.text,
                }}
              >
                Explore the
                <motion.span
                  animate={{
                    opacity: [0.65, 1, 0.65],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="block"
                  style={{
                    color: COLORS.blue,
                  }}
                >
                  iPhone Anatomy.
                </motion.span>
              </h2>

              <p
                className="mt-5 max-w-xl leading-8"
                style={{
                  color: COLORS.textLight,
                }}
              >
                Continue exploring Apple's hardware and software architecture
                with the interactive iPhone anatomy experience.
              </p>

              <motion.div
                whileHover={{
                  scale: 1.06,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="inline-block"
              >
                <Link
                  to="/iphone"
                  className="mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 font-black text-white shadow-xl"
                  style={{
                    background: COLORS.blue,
                    boxShadow: `0 18px 45px ${COLORS.blue}35`,
                  }}
                >
                  Explore iPhone
                  <motion.span
                    animate={{
                      x: [0, 6, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowRight size={19} />
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            <motion.div
              animate={{
                y: [0, -18, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.04,
                rotate: 0,
              }}
            >
              <RealImage
                src={IMAGES.mac}
                alt="MacBook"
                height="h-72"
                className="shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
