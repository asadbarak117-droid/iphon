import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";

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
  mac: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
  laptop:
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
  technology:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  motherboard:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
  storage:
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1400&q=85",
  camera:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=85",
  battery:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85",
  wireless:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85",
  audio:
    "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1400&q=85",
  memory:
    "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=1400&q=85",
  connector:
    "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=1400&q=85",
  durability:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=85",
};

const getSmartImage = (title = "", category = "") => {
  const value = `${title} ${category}`.toLowerCase();

  if (
    value.includes("storage") ||
    value.includes("ssd") ||
    value.includes("flash")
  ) {
    return IMAGES.storage;
  }

  if (value.includes("camera") || value.includes("image sensor")) {
    return IMAGES.camera;
  }

  if (
    value.includes("processor") ||
    value.includes("cpu") ||
    value.includes("gpu") ||
    value.includes("neural") ||
    value.includes("processing") ||
    value.includes("silicon") ||
    value.includes("metal")
  ) {
    return IMAGES.technology;
  }

  if (
    value.includes("battery") ||
    value.includes("power") ||
    value.includes("thermal") ||
    value.includes("cooling")
  ) {
    return IMAGES.battery;
  }

  if (
    value.includes("display") ||
    value.includes("retina") ||
    value.includes("trackpad") ||
    value.includes("keyboard") ||
    value.includes("interface") ||
    value.includes("screen")
  ) {
    return IMAGES.laptop;
  }

  if (
    value.includes("wifi") ||
    value.includes("bluetooth") ||
    value.includes("connectivity") ||
    value.includes("wireless") ||
    value.includes("antenna")
  ) {
    return IMAGES.wireless;
  }

  if (
    value.includes("speaker") ||
    value.includes("audio") ||
    value.includes("microphone")
  ) {
    return IMAGES.audio;
  }

  if (
    value.includes("memory") ||
    value.includes("ram") ||
    value.includes("unified")
  ) {
    return IMAGES.memory;
  }

  if (
    value.includes("usb") ||
    value.includes("thunderbolt") ||
    value.includes("magsafe") ||
    value.includes("connector") ||
    value.includes("port") ||
    value.includes("interconnect")
  ) {
    return IMAGES.connector;
  }

  if (
    value.includes("aluminum") ||
    value.includes("enclosure") ||
    value.includes("frame") ||
    value.includes("structure") ||
    value.includes("durability")
  ) {
    return IMAGES.durability;
  }

  if (value.includes("logic board") || value.includes("motherboard")) {
    return IMAGES.motherboard;
  }

  return IMAGES.mac;
};

const systems = [
  {
    id: "display",
    title: "Mac Display",
    group: "External",
    category: "Interface",
    definition:
      "The display provides the primary visual workspace for macOS, applications, media and system information.",
    location: "Upper display assembly",
    interaction:
      "Works with the display controller, graphics processor and macOS rendering system.",
  },
  {
    id: "retina-display",
    title: "Retina Display",
    group: "External",
    category: "Display",
    definition:
      "High-density display technology provides detailed text, graphics and images.",
    location: "Display panel",
    interaction:
      "Receives rendered frames from the graphics system and display pipeline.",
  },
  {
    id: "aluminum-enclosure",
    title: "Aluminum Enclosure",
    group: "External",
    category: "Structure",
    definition:
      "The rigid enclosure protects internal components while providing the Mac's physical structure.",
    location: "Outer chassis",
    interaction:
      "Supports the display, keyboard, trackpad, logic board, battery and cooling system.",
  },
  {
    id: "keyboard",
    title: "Keyboard",
    group: "External",
    category: "Controls",
    definition: "The keyboard provides physical text and command input.",
    location: "Lower chassis",
    interaction: "Converts key presses into input events interpreted by macOS.",
  },
  {
    id: "trackpad",
    title: "Force Touch Trackpad",
    group: "External",
    category: "Controls",
    definition:
      "A precision pointing surface provides cursor control, gestures and pressure-sensitive interaction.",
    location: "Palm-rest area",
    interaction:
      "Communicates touch and gesture information to macOS input systems.",
  },
  {
    id: "touch-id",
    title: "Touch ID",
    group: "External",
    category: "Security",
    definition:
      "A biometric authentication system verifies a user's fingerprint.",
    location: "Power button area on supported models",
    interaction:
      "Works with the Secure Enclave and macOS authentication services.",
  },
  {
    id: "magsafe",
    title: "MagSafe Connector",
    group: "External",
    category: "Power",
    definition:
      "A magnetic charging connector provides a convenient power connection.",
    location: "Side of supported Mac notebooks",
    interaction:
      "Connects external power to charging and power-management hardware.",
  },
  {
    id: "thunderbolt",
    title: "Thunderbolt / USB-C Ports",
    group: "External",
    category: "Connectivity",
    definition:
      "High-speed ports support charging, displays, storage and external accessories.",
    location: "Side edges",
    interaction:
      "Connect external devices with the system's I/O and communication controllers.",
  },
  {
    id: "headphone",
    title: "Headphone Jack",
    group: "External",
    category: "Audio",
    definition:
      "An analog audio connector supports compatible headphones and audio equipment.",
    location: "Side edge on supported models",
    interaction: "Connects external audio equipment to the Mac audio system.",
  },
  {
    id: "camera",
    title: "FaceTime Camera",
    group: "External",
    category: "Camera",
    definition:
      "The integrated camera captures video for calls, recording and supported applications.",
    location: "Top display bezel",
    interaction:
      "Works with image processing, macOS and communication applications.",
  },
  {
    id: "microphones",
    title: "Microphone Array",
    group: "External",
    category: "Audio",
    definition: "Multiple microphones capture voice and environmental audio.",
    location: "Display and chassis areas",
    interaction:
      "Feeds audio data into macOS recording and communication systems.",
  },
  {
    id: "logic-board",
    title: "Logic Board",
    group: "Hardware",
    category: "Electronics",
    definition:
      "The main circuit board connects processing, memory, storage, power and peripheral systems.",
    location: "Inside the chassis",
    interaction:
      "Provides electrical and data pathways between major Mac subsystems.",
  },
  {
    id: "apple-silicon",
    title: "Apple Silicon SoC",
    group: "Hardware",
    category: "Processing",
    definition:
      "Apple silicon integrates multiple computing engines and controllers into a unified system.",
    location: "Logic board",
    interaction:
      "Coordinates processing, graphics, machine learning, memory and I/O operations.",
  },
  {
    id: "cpu",
    title: "CPU",
    group: "Hardware",
    category: "Processing",
    definition:
      "The CPU executes general-purpose instructions for macOS and applications.",
    location: "Inside the Apple silicon SoC",
    interaction:
      "Works with unified memory, operating system services and specialized processors.",
  },
  {
    id: "gpu",
    title: "GPU",
    group: "Hardware",
    category: "Graphics",
    definition:
      "The graphics processor handles visual rendering, video workloads and graphics computation.",
    location: "Inside the Apple silicon SoC",
    interaction:
      "Works with macOS graphics frameworks and the display pipeline.",
  },
  {
    id: "neural-engine",
    title: "Neural Engine",
    group: "Hardware",
    category: "Machine Learning",
    definition:
      "A specialized processor accelerates supported machine-learning operations.",
    location: "Inside the Apple silicon SoC",
    interaction:
      "Works with system frameworks and applications using machine-learning capabilities.",
  },
  {
    id: "unified-memory",
    title: "Unified Memory",
    group: "Hardware",
    category: "RAM",
    definition:
      "A shared high-speed memory architecture allows different processing engines to access data efficiently.",
    location: "Integrated memory architecture",
    interaction:
      "Provides data access to CPU, GPU, Neural Engine and other system components.",
  },
  {
    id: "ssd",
    title: "SSD Storage",
    group: "Hardware",
    category: "Storage",
    definition:
      "Solid-state storage retains macOS, applications, documents, media and user data.",
    location: "Inside the Mac",
    interaction:
      "Communicates with the storage controller and macOS file system.",
  },
  {
    id: "battery",
    title: "Lithium-Polymer Battery",
    group: "Hardware",
    category: "Power",
    definition:
      "The rechargeable battery stores electrical energy for portable operation.",
    location: "Lower internal chassis",
    interaction: "Works with charging and power-management systems.",
  },
  {
    id: "power-management",
    title: "Power Management",
    group: "Hardware",
    category: "Power",
    definition:
      "Power-management circuitry regulates energy distribution throughout the Mac.",
    location: "Logic board and power circuitry",
    interaction:
      "Coordinates battery, charging, processor and peripheral power requirements.",
  },
  {
    id: "cooling",
    title: "Thermal Management",
    group: "Hardware",
    category: "Cooling",
    definition:
      "Thermal architecture manages heat generated by processing and power systems.",
    location: "Internal chassis",
    interaction:
      "Works with heat spreaders, heat pipes, fans on supported models and system controls.",
  },
  {
    id: "speakers",
    title: "Speaker System",
    group: "Hardware",
    category: "Audio",
    definition:
      "Integrated speakers reproduce system audio, music, video and communication sounds.",
    location: "Chassis speaker assemblies",
    interaction: "Receives processed audio from macOS and audio hardware.",
  },
  {
    id: "audio-controller",
    title: "Audio Controller",
    group: "Hardware",
    category: "Audio",
    definition:
      "Audio hardware processes input and output signals for microphones and speakers.",
    location: "Logic board and audio system",
    interaction:
      "Connects applications and macOS audio services with physical audio hardware.",
  },
  {
    id: "wifi",
    title: "Wi-Fi System",
    group: "Hardware",
    category: "Connectivity",
    definition:
      "Wireless networking hardware enables communication with Wi-Fi networks.",
    location: "Logic board and antenna system",
    interaction: "Works with macOS networking services and wireless antennas.",
  },
  {
    id: "bluetooth",
    title: "Bluetooth System",
    group: "Hardware",
    category: "Connectivity",
    definition:
      "Bluetooth hardware enables communication with compatible wireless peripherals.",
    location: "Wireless subsystem",
    interaction:
      "Connects keyboards, mice, headphones and other supported accessories.",
  },
  {
    id: "antenna",
    title: "Wireless Antennas",
    group: "Hardware",
    category: "Connectivity",
    definition: "Antennas transmit and receive wireless signals.",
    location: "Integrated within the chassis",
    interaction:
      "Works with Wi-Fi, Bluetooth and other wireless radio systems.",
  },
  {
    id: "sensors",
    title: "Sensor System",
    group: "Hardware",
    category: "Sensors",
    definition:
      "Sensors provide information about device conditions, motion, light and other environmental factors.",
    location: "Distributed throughout the system",
    interaction:
      "Feeds measurements to hardware controllers and macOS services.",
  },
  {
    id: "secure-enclave",
    title: "Secure Enclave",
    group: "Hardware",
    category: "Security",
    definition:
      "A dedicated security subsystem protects sensitive authentication and cryptographic operations.",
    location: "Apple silicon platform",
    interaction: "Works with Touch ID, encryption and macOS security services.",
  },
  {
    id: "firmware",
    title: "Firmware",
    group: "Software",
    category: "Low Level",
    definition:
      "Firmware provides persistent low-level instructions for hardware initialization and control.",
    location: "Hardware-associated software",
    interaction:
      "Works between hardware controllers and higher-level system software.",
  },
  {
    id: "macos",
    title: "macOS",
    group: "Software",
    category: "Operating System",
    definition:
      "macOS manages hardware resources and provides the primary software environment.",
    location: "Software layer",
    interaction:
      "Coordinates applications, drivers, hardware and system services.",
  },
  {
    id: "finder",
    title: "Finder",
    group: "Software",
    category: "Interface",
    definition:
      "Finder provides file management and navigation across the Mac environment.",
    location: "macOS",
    interaction:
      "Uses file-system services and macOS APIs to manage user data.",
  },
  {
    id: "metal",
    title: "Metal",
    group: "Software",
    category: "Graphics",
    definition:
      "Metal provides low-overhead access to graphics and GPU capabilities.",
    location: "macOS graphics stack",
    interaction: "Connects applications and graphics frameworks with the GPU.",
  },
  {
    id: "applications",
    title: "Applications",
    group: "Software",
    category: "Applications",
    definition:
      "Applications provide productivity, development, creative and communication functions.",
    location: "macOS software layer",
    interaction: "Use macOS frameworks and APIs to access system capabilities.",
  },
  {
    id: "developer-tools",
    title: "Developer Tools",
    group: "Software",
    category: "Developer Tools",
    definition:
      "Development tools support application creation, debugging, testing and deployment.",
    location: "macOS development environment",
    interaction:
      "Communicate with compilers, frameworks, simulators and debugging systems.",
  },
  {
    id: "drivers",
    title: "Hardware Drivers",
    group: "Software",
    category: "Low Level",
    definition:
      "Drivers provide software interfaces between macOS and hardware components.",
    location: "System software",
    interaction: "Bridge system services with physical hardware controllers.",
  },
  {
    id: "file-system",
    title: "File System",
    group: "Software",
    category: "Storage",
    definition:
      "The file-system layer organizes persistent data and provides controlled access to storage.",
    location: "macOS storage stack",
    interaction: "Works with SSD storage, applications and system services.",
  },
];

const functionalFlows = [
  {
    title: "Power System",
    description:
      "Electrical energy moves from the battery or external adapter through power management to the processor and peripheral systems.",
    steps: ["Battery", "Power Management", "SoC", "Memory", "Display"],
  },
  {
    title: "Application Pipeline",
    description:
      "An application uses macOS frameworks and system resources before reaching the hardware required for a task.",
    steps: ["Application", "macOS", "Frameworks", "SoC", "Hardware"],
  },
  {
    title: "Graphics Pipeline",
    description:
      "Visual content moves from an application through graphics frameworks and the GPU to the display.",
    steps: ["Application", "macOS", "Metal", "GPU", "Display"],
  },
  {
    title: "Storage Pipeline",
    description:
      "Files move through macOS storage services before being written to or retrieved from SSD storage.",
    steps: ["Application", "File System", "Storage Controller", "SSD", "Data"],
  },
  {
    title: "Wireless Communication",
    description:
      "Applications request network services while the operating system and wireless hardware manage communication.",
    steps: ["Application", "macOS", "Network Stack", "Wi-Fi", "Network"],
  },
];

const sensors = [
  {
    title: "Ambient Light Sensor",
    description:
      "Measures surrounding light conditions and can support display and system behavior.",
  },
  {
    title: "Lid / Display Sensors",
    description:
      "Supported Mac designs use sensors and system controls to detect display and chassis conditions.",
  },
  {
    title: "Temperature Sensors",
    description:
      "Monitor internal thermal conditions and provide information used by power and thermal management.",
  },
  {
    title: "Trackpad Sensors",
    description:
      "Detect touch, movement and pressure-related interaction across the pointing surface.",
  },
  {
    title: "Touch ID Sensor",
    description:
      "Captures fingerprint information for biometric authentication on supported Macs.",
  },
  {
    title: "Accelerometer",
    description:
      "Supported hardware can use motion sensing for system and hardware-related functions.",
  },
  {
    title: "Camera System",
    description:
      "The camera captures visual information for communication and supported applications.",
  },
];

const troubleshooting = [
  {
    title: "Mac is not charging",
    causes: [
      "Power adapter or cable problem",
      "Charging connector issue",
      "Battery or power-management problem",
    ],
    action:
      "Test a known-good power source, inspect the charging connector and check whether the Mac responds to external power.",
  },
  {
    title: "Mac becomes very hot",
    causes: [
      "Heavy CPU or GPU workload",
      "High background activity",
      "Restricted airflow or thermal conditions",
    ],
    action:
      "Check active processes, workload and ventilation conditions before investigating hardware.",
  },
  {
    title: "Mac is running slowly",
    causes: [
      "High memory pressure",
      "Heavy background processes",
      "Storage or software workload",
    ],
    action:
      "Review Activity Monitor, memory pressure, storage capacity and active applications.",
  },
  {
    title: "Display has a problem",
    causes: [
      "Software rendering issue",
      "Display connection problem",
      "Physical display fault",
    ],
    action:
      "Restart the Mac, test an external display when possible and inspect for physical symptoms.",
  },
  {
    title: "Wi-Fi is not working",
    causes: [
      "Network configuration",
      "Router or network problem",
      "Wireless subsystem issue",
    ],
    action:
      "Test another network, review network settings and determine whether the issue follows the Mac.",
  },
  {
    title: "No audio output",
    causes: [
      "Incorrect audio output",
      "Software configuration",
      "Speaker or audio hardware issue",
    ],
    action:
      "Check Sound settings, output routing and another audio source before diagnosing hardware.",
  },
];

const faqs = [
  {
    question: "What is the most important component in a Mac?",
    answer:
      "A Mac is an interconnected system. Apple silicon is central to computation, but the display, unified memory, storage, power, networking and operating system all contribute to the complete computer.",
  },
  {
    question: "What is Apple silicon?",
    answer:
      "Apple silicon refers to Apple's system-on-chip architecture used in modern Macs. It combines processing, graphics, machine learning and other system functions into an integrated platform.",
  },
  {
    question: "What is unified memory?",
    answer:
      "Unified memory provides a shared memory architecture that allows different processing engines to access data efficiently.",
  },
  {
    question: "What does the GPU do?",
    answer:
      "The GPU performs highly parallel graphics and visual computations, supporting interfaces, applications, video and other workloads.",
  },
  {
    question: "What does macOS do?",
    answer:
      "macOS manages hardware resources and provides system services, frameworks, security and the user environment for applications.",
  },
  {
    question: "How does a Mac protect user data?",
    answer:
      "Security combines hardware and software mechanisms including secure processing, encryption, authentication, system protections and controlled application access.",
  },
];

const categories = [
  "All",
  "Operating System",
  "Interface",
  "Applications",
  "Developer Tools",
  "Graphics",
  "Low Level",
  "Security",
  "Electronics",
  "Processing",
  "Machine Learning",
  "RAM",
  "Storage",
  "Power",
  "Display",
  "Cooling",
  "Connectivity",
  "Audio",
  "Controls",
  "Camera",
  "Sensors",
  "Structure",
];

function ImageCard({ src, alt }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative h-full w-full overflow-hidden"
      initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 45%, rgba(23,50,77,.65))",
        }}
      />
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`mb-14 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <div
        className="mb-4 text-sm font-black uppercase tracking-[0.22em]"
        style={{ color: COLORS.blue }}
      >
        {eyebrow}
      </div>

      <h2
        className="text-4xl font-black tracking-tight md:text-6xl"
        style={{ color: COLORS.text }}
      >
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8" style={{ color: COLORS.textLight }}>
        {text}
      </p>
    </div>
  );
}

function FlowCard({ flow, index }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08 }}
      className="rounded-[2rem] border p-6"
      style={{
        background: COLORS.white,
        borderColor: COLORS.border,
      }}
    >
      <div className="mb-5 flex items-center gap-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-2xl font-black"
          style={{
            background: COLORS.softBlue,
            color: COLORS.blue,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <h3 className="text-2xl font-black" style={{ color: COLORS.text }}>
          {flow.title}
        </h3>
      </div>

      <p className="mb-6 leading-7" style={{ color: COLORS.textLight }}>
        {flow.description}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        {flow.steps.map((step, stepIndex) => (
          <div key={step} className="flex items-center gap-2">
            <span
              className="rounded-xl px-3 py-2 text-sm font-bold"
              style={{
                background: stepIndex % 2 === 0 ? COLORS.softBlue : "#F2FFF0",
                color: COLORS.text,
              }}
            >
              {step}
            </span>

            {stepIndex < flow.steps.length - 1 && (
              <span className="font-black" style={{ color: COLORS.blue }}>
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Mac() {
  const reduceMotion = useReducedMotion();

  const [activeGroup, setActiveGroup] = useState("exrernal ");
  const [activeCategory, setActiveCategory] = useState("external");
  const [search, setSearch] = useState("");
  const [openTroubleshooting, setOpenTroubleshooting] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const groups = ["All", "External", "Hardware", "Software"];

  const filteredSystems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return systems.filter((item) => {
      const groupMatch = activeGroup === "All" || item.group === activeGroup;

      const categoryMatch =
        activeCategory === "All" || item.category === activeCategory;

      const searchMatch =
        !query ||
        [
          item.title,
          item.group,
          item.category,
          item.definition,
          item.location,
          item.interaction,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(query);

      return groupMatch && categoryMatch && searchMatch;
    });
  }, [activeGroup, activeCategory, search]);

  const handleGroupChange = (group) => {
    setActiveGroup(group);
    setActiveCategory("All");
  };

  return (
    <main
      style={{
        background: COLORS.soft,
        color: COLORS.text,
      }}
    >
      <section
        className="relative flex min-h-[92vh] items-center overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, ${COLORS.cyan}55, transparent 30%),
            radial-gradient(circle at 85% 30%, ${COLORS.green}55, transparent 28%),
            linear-gradient(180deg, ${COLORS.white}, ${COLORS.soft})
          `,
        }}
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -40 }}
            animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="mb-6 inline-flex rounded-full border px-4 py-2 text-sm font-black"
              style={{
                background: COLORS.white,
                borderColor: COLORS.border,
                color: COLORS.blue,
              }}
            >
              Mac Technical Anatomy
            </div>

            <h1
              className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl"
              style={{ color: COLORS.text }}
            >
              Explore
              <br />
              <span style={{ color: COLORS.blue }}>every layer.</span>
            </h1>

            <p
              className="mt-7 max-w-xl text-lg leading-8 md:text-xl"
              style={{ color: COLORS.textLight }}
            >
              Explore the external structure, Apple silicon, unified memory,
              storage, macOS, connectivity, security and the systems that make a
              Mac work.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#explore"
                className="rounded-2xl px-6 py-4 font-black shadow-lg transition-transform hover:-translate-y-1"
                style={{
                  background: COLORS.blue,
                  color: COLORS.white,
                }}
              >
                Explore every layer →
              </a>

              <a
                href="#architecture"
                className="rounded-2xl border px-6 py-4 font-black transition-transform hover:-translate-y-1"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border,
                  color: COLORS.text,
                }}
              >
                View architecture
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "External",
                "Hardware",
                "Software",
                "Security",
                "Processing",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-4 py-2 text-sm font-bold"
                  style={{
                    background: COLORS.white,
                    borderColor: COLORS.border,
                    color: COLORS.textLight,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.85, rotate: 4 }
            }
            animate={
              reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }
            }
            transition={{ duration: 1 }}
            className="relative"
          >
            <div
              className="absolute -inset-10 rounded-full blur-3xl"
              style={{
                background: `${COLORS.cyan}55`,
              }}
            />

            <div className="relative mx-auto max-w-2xl">
              <div
                className="relative overflow-hidden rounded-[2.5rem] border-[8px] shadow-2xl"
                style={{
                  background: COLORS.text,
                  borderColor: "#D8E8F2",
                }}
              >
                <img
                  src={IMAGES.mac}
                  alt="Mac technical anatomy"
                  className="aspect-[16/10] w-full object-cover"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(23,50,77,.75))",
                  }}
                />

                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="rounded-3xl border p-5 backdrop-blur-xl"
                    style={{
                      background: "rgba(255,255,255,.9)",
                      borderColor: COLORS.border,
                    }}
                  >
                    <div
                      className="text-xs font-black uppercase tracking-[0.2em]"
                      style={{ color: COLORS.blue }}
                    >
                      Architecture
                    </div>

                    <div
                      className="mt-2 text-2xl font-black"
                      style={{ color: COLORS.text }}
                    >
                      Apple Silicon + macOS
                    </div>

                    <div
                      className="mt-2 text-sm"
                      style={{ color: COLORS.textLight }}
                    >
                      Computing, memory, software and hardware working as one
                      system.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="explore"
        className="py-28"
        style={{
          background: COLORS.soft,
          color: COLORS.text,
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Technical Explorer"
            title="Explore every layer"
            text="Search the external, internal and software architecture and move between technical categories."
          />

          <div
            className="mb-8 rounded-3xl border p-3"
            style={{
              background: COLORS.white,
              borderColor: COLORS.border,
            }}
          >
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {groups.map((group) => {
                const active = activeGroup === group;

                return (
                  <button
                    key={group}
                    type="button"
                    onClick={() => handleGroupChange(group)}
                    className="rounded-2xl px-5 py-3 text-sm font-black transition-all"
                    style={{
                      background: active ? COLORS.blue : COLORS.softBlue,
                      color: active ? COLORS.white : COLORS.text,
                    }}
                  >
                    {group}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="mb-8 flex flex-col gap-4 rounded-3xl border p-5 md:flex-row md:items-center"
            style={{
              background: COLORS.white,
              borderColor: COLORS.border,
            }}
          >
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search Mac anatomy, components, systems..."
              className="min-w-0 flex-1 rounded-2xl border bg-transparent px-5 py-4 outline-none"
              style={{
                borderColor: COLORS.border,
                color: COLORS.text,
              }}
            />

            <div
              className="rounded-2xl px-5 py-4 text-center text-sm font-black"
              style={{
                background: COLORS.softBlue,
                color: COLORS.blue,
              }}
            >
              {filteredSystems.length} systems found
            </div>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className="rounded-full border px-4 py-2 text-sm font-bold transition-all"
                  style={{
                    borderColor: active ? COLORS.blue : COLORS.border,
                    background: active ? COLORS.blue : COLORS.white,
                    color: active ? COLORS.white : COLORS.text,
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <div
                className="text-sm font-black uppercase tracking-widest"
                style={{ color: COLORS.blue }}
              >
                Mac Architecture Database
              </div>

              <h3 className="mt-2 text-3xl font-black">
                {filteredSystems.length} systems found
              </h3>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveGroup("All");
                setActiveCategory("All");
                setSearch("");
              }}
              className="rounded-xl border px-4 py-2 text-sm font-bold"
              style={{
                background: COLORS.white,
                borderColor: COLORS.border,
                color: COLORS.text,
              }}
            >
              Reset
            </button>
          </div>

          {filteredSystems.length === 0 ? (
            <div
              className="rounded-[2rem] border p-12 text-center"
              style={{
                background: COLORS.white,
                borderColor: COLORS.border,
              }}
            >
              <div
                className="text-5xl font-black"
                style={{ color: COLORS.blue }}
              >
                ⌕
              </div>

              <h3 className="mt-4 text-2xl font-black">No systems found</h3>

              <p className="mt-2" style={{ color: COLORS.textLight }}>
                Try another search term or category.
              </p>
            </div>
          ) : (
            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredSystems.map((item, index) => (
                  <motion.article
                    key={item.id}
                    layout
                    initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.015,
                    }}
                    whileHover={reduceMotion ? undefined : { y: -7 }}
                    className="group overflow-hidden rounded-[2rem] border"
                    style={{
                      background: COLORS.white,
                      borderColor: COLORS.border,
                    }}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <ImageCard
                        src={getSmartImage(item.title, item.category)}
                        alt={item.title}
                      />

                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        <span
                          className="rounded-full px-3 py-1 text-xs font-black"
                          style={{
                            background: COLORS.white,
                            color: COLORS.blue,
                          }}
                        >
                          {item.group}
                        </span>

                        <span
                          className="rounded-full px-3 py-1 text-xs font-black"
                          style={{
                            background: COLORS.green,
                            color: COLORS.text,
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-black">{item.title}</h3>

                      <p
                        className="mt-3 leading-7"
                        style={{ color: COLORS.textLight }}
                      >
                        {item.definition}
                      </p>

                      <div
                        className="mt-5 rounded-2xl p-4"
                        style={{
                          background: COLORS.softBlue,
                        }}
                      >
                        <div
                          className="text-xs font-black uppercase tracking-widest"
                          style={{ color: COLORS.blue }}
                        >
                          Location
                        </div>

                        <div className="mt-1 text-sm font-semibold">
                          {item.location}
                        </div>
                      </div>

                      <div className="mt-5">
                        <div className="text-sm font-black">
                          System interaction
                        </div>

                        <p
                          className="mt-2 text-sm leading-6"
                          style={{ color: COLORS.textLight }}
                        >
                          {item.interaction}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <section
        id="architecture"
        className="py-28"
        style={{ background: COLORS.white }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="System Architecture"
            title="Everything is connected."
            text="A Mac combines processing, memory, storage, power, graphics, networking and macOS into one integrated computing system."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {functionalFlows.map((flow, index) => (
              <FlowCard key={flow.title} flow={flow} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="sensors"
        className="py-28"
        style={{ background: COLORS.softBlue }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Sensors & Security"
            title="The Mac understands its environment."
            text="Sensors, biometric security and hardware-backed protection work together with macOS to create a secure and responsive computing environment."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sensors.map((sensor, index) => (
              <motion.article
                key={sensor.title}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[2rem] border p-6"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border,
                }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: index % 2 === 0 ? COLORS.cyan : COLORS.green,
                    color: COLORS.text,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-black">{sensor.title}</h3>

                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: COLORS.textLight }}
                >
                  {sensor.description}
                </p>
              </motion.article>
            ))}
          </div>

          <div
            className="mt-10 rounded-[2rem] p-8 md:p-10"
            style={{
              background: COLORS.text,
              color: COLORS.white,
            }}
          >
            <div className="grid gap-8 lg:grid-cols-3">
              <div>
                <div
                  className="text-sm font-black uppercase tracking-widest"
                  style={{ color: COLORS.cyan }}
                >
                  Security
                </div>

                <h3 className="mt-3 text-3xl font-black">
                  Hardware-backed protection
                </h3>
              </div>

              <div className="lg:col-span-2">
                <p className="leading-8" style={{ color: "#D9EAF5" }}>
                  Mac security combines Apple silicon security architecture,
                  Secure Enclave technology, encryption, authentication and
                  macOS security controls to protect system and user data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="technician"
        className="py-28"
        style={{ background: COLORS.white }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Technician Lab"
            title="Understand the failure before the fix."
            text="Use relationships between Mac hardware and software to reason about common technical problems."
          />

          <div className="space-y-4">
            {troubleshooting.map((item, index) => {
              const open = openTroubleshooting === index;

              return (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-[2rem] border"
                  style={{
                    background: COLORS.soft,
                    borderColor: COLORS.border,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenTroubleshooting(open ? null : index)}
                    className="flex w-full items-center justify-between gap-5 p-6 text-left"
                  >
                    <div>
                      <div
                        className="text-xs font-black uppercase tracking-widest"
                        style={{ color: COLORS.blue }}
                      >
                        Diagnostic Case {index + 1}
                      </div>

                      <h3 className="mt-2 text-xl font-black">{item.title}</h3>
                    </div>

                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-black"
                      style={{
                        background: COLORS.white,
                        color: COLORS.blue,
                      }}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={
                          reduceMotion
                            ? undefined
                            : { height: "auto", opacity: 1 }
                        }
                        exit={
                          reduceMotion ? undefined : { height: 0, opacity: 0 }
                        }
                      >
                        <div className="grid gap-6 border-t p-6 md:grid-cols-2">
                          <div>
                            <div
                              className="mb-3 text-sm font-black"
                              style={{ color: COLORS.blue }}
                            >
                              Possible causes
                            </div>

                            <ul className="space-y-2">
                              {item.causes.map((cause) => (
                                <li
                                  key={cause}
                                  className="text-sm"
                                  style={{
                                    color: COLORS.textLight,
                                  }}
                                >
                                  • {cause}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div
                            className="rounded-2xl p-5"
                            style={{
                              background: COLORS.white,
                            }}
                          >
                            <div className="text-sm font-black">
                              Diagnostic approach
                            </div>

                            <p
                              className="mt-2 text-sm leading-6"
                              style={{
                                color: COLORS.textLight,
                              }}
                            >
                              {item.action}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="py-28" style={{ background: COLORS.soft }}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Technical FAQ"
            title="Technical questions."
            text="Quick explanations for the most important concepts in Mac architecture."
            center
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[2rem] border"
                  style={{
                    background: COLORS.white,
                    borderColor: COLORS.border,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="flex w-full items-center justify-between gap-5 p-6 text-left"
                  >
                    <span className="text-lg font-black">{faq.question}</span>

                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: COLORS.softBlue,
                        color: COLORS.blue,
                      }}
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={
                          reduceMotion ? false : { height: 0, opacity: 0 }
                        }
                        animate={
                          reduceMotion
                            ? undefined
                            : { height: "auto", opacity: 1 }
                        }
                        exit={
                          reduceMotion ? undefined : { height: 0, opacity: 0 }
                        }
                      >
                        <div
                          className="border-t px-6 pb-6 pt-5 leading-7"
                          style={{
                            color: COLORS.textLight,
                            borderColor: COLORS.border,
                          }}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-28"
        style={{
          background: COLORS.text,
          color: COLORS.white,
        }}
      >
        <div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: `${COLORS.blue}35`,
          }}
        />

        <div
          className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: `${COLORS.green}25`,
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div
            className="mb-5 text-sm font-black uppercase tracking-[0.25em]"
            style={{ color: COLORS.cyan }}
          >
            Mac Anatomy
          </div>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Every layer works together.
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8"
            style={{ color: "#D5E7F2" }}
          >
            From Apple silicon and unified memory to macOS, storage,
            connectivity and security, Mac architecture combines hardware and
            software into one computing platform.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#explore"
              className="rounded-2xl px-6 py-4 font-black"
              style={{
                background: COLORS.white,
                color: COLORS.text,
              }}
            >
              Explore Mac Anatomy
            </a>

            <Link
              to="/iph"
              className="rounded-2xl border px-6 py-4 font-black"
              style={{
                borderColor: "rgba(255,255,255,.25)",
                color: COLORS.white,
              }}
            >
              Explore iPhone →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
