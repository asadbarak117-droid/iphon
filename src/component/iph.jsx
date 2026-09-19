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
  iphone:
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1400&q=85",
  smartphone:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
  technology:
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

  if (value.includes("storage") || value.includes("nand")) {
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
    value.includes("processing")
  ) {
    return IMAGES.technology;
  }

  if (
    value.includes("battery") ||
    value.includes("power") ||
    value.includes("thermal")
  ) {
    return IMAGES.battery;
  }

  if (
    value.includes("display") ||
    value.includes("touch") ||
    value.includes("interface") ||
    value.includes("front")
  ) {
    return IMAGES.smartphone;
  }

  if (
    value.includes("wifi") ||
    value.includes("bluetooth") ||
    value.includes("nfc") ||
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

  if (value.includes("ram") || value.includes("memory")) {
    return IMAGES.memory;
  }

  if (
    value.includes("usb") ||
    value.includes("connector") ||
    value.includes("port") ||
    value.includes("interconnect")
  ) {
    return IMAGES.connector;
  }

  if (
    value.includes("frame") ||
    value.includes("structure") ||
    value.includes("durability")
  ) {
    return IMAGES.durability;
  }

  return IMAGES.iphone;
};

const systems = [
  {
    id: "display",
    title: "Display",
    group: "External",
    category: "Interface",
    definition:
      "The display presents visual information and provides the primary touch interaction surface.",
    location: "Front of the device",
    interaction:
      "Works with the touch digitizer, display controller, GPU and operating system.",
  },
  {
    id: "front-glass",
    title: "Front Glass",
    group: "External",
    category: "Front",
    definition:
      "The protective front surface covers and protects the display and touch system.",
    location: "Front exterior",
    interaction: "Works with the display and digitizer underneath the surface.",
  },
  {
    id: "frame",
    title: "Structural Frame",
    group: "External",
    category: "Structure",
    definition:
      "The physical frame provides rigidity and holds major components in alignment.",
    location: "Outer chassis",
    interaction:
      "Interfaces with the display, rear housing, buttons and internal assemblies.",
  },
  {
    id: "volume-controls",
    title: "Volume Controls",
    group: "External",
    category: "Controls",
    definition:
      "Physical controls allow the user to increase or decrease audio volume.",
    location: "Side of the device",
    interaction: "Button signals are interpreted by the device control system.",
  },
  {
    id: "action-button",
    title: "Action Button",
    group: "External",
    category: "Controls",
    definition:
      "A configurable physical control available on supported iPhone models.",
    location: "Side frame",
    interaction: "The operating system interprets the button event.",
  },
  {
    id: "side-button",
    title: "Side Button",
    group: "External",
    category: "Controls",
    definition:
      "A physical control used for locking, waking and other system interactions.",
    location: "Side frame",
    interaction: "Connects physical input with system software.",
  },
  {
    id: "usb-c",
    title: "USB-C Port",
    group: "External",
    category: "Connectivity",
    definition:
      "A physical connector used for charging, data transfer and supported accessories.",
    location: "Bottom edge",
    interaction:
      "Connects external accessories to charging and communication hardware.",
  },
  {
    id: "camera-modules",
    title: "Camera Modules",
    group: "External",
    category: "Camera",
    definition:
      "Optical camera assemblies capture light and convert it into digital image data.",
    location: "Rear camera area",
    interaction: "Works with image sensors, image processing and storage.",
  },
  {
    id: "speaker",
    title: "Speaker System",
    group: "External",
    category: "Audio",
    definition:
      "The speaker system converts electrical audio signals into sound.",
    location: "Bottom and front areas",
    interaction: "Receives processed audio signals from the system.",
  },
  {
    id: "microphones",
    title: "Microphones",
    group: "External",
    category: "Audio",
    definition:
      "Microphones convert acoustic energy into electrical and digital signals.",
    location: "Multiple areas",
    interaction: "Audio signals are processed before reaching applications.",
  },
  {
    id: "logic-board",
    title: "Logic Board",
    group: "Hardware",
    category: "Electronics",
    definition:
      "The main circuit board connects and coordinates major electronic systems.",
    location: "Inside the chassis",
    interaction:
      "Connects processing, memory, storage, power, connectivity and peripheral systems.",
  },
  {
    id: "soc",
    title: "Apple Silicon SoC",
    group: "Hardware",
    category: "Processing",
    definition:
      "The system-on-chip integrates several computing and control functions.",
    location: "Logic board",
    interaction:
      "Communicates with memory, storage, cameras, display and system controllers.",
  },
  {
    id: "cpu",
    title: "CPU",
    group: "Hardware",
    category: "Processing",
    definition:
      "The central processing unit executes general-purpose instructions.",
    location: "Inside the SoC",
    interaction:
      "Works closely with memory, operating system services and other processors.",
  },
  {
    id: "gpu",
    title: "GPU",
    group: "Hardware",
    category: "Processing",
    definition:
      "The graphics processor handles highly parallel visual computation.",
    location: "Inside the SoC",
    interaction:
      "Receives commands from software and works with display pipelines.",
  },
  {
    id: "neural-engine",
    title: "Neural Engine",
    group: "Hardware",
    category: "Machine Learning",
    definition:
      "A specialized processor designed for machine-learning workloads.",
    location: "Inside the SoC",
    interaction:
      "Works with system software and applications that use ML capabilities.",
  },
  {
    id: "ram",
    title: "RAM",
    group: "Hardware",
    category: "RAM",
    definition:
      "High-speed working memory temporarily stores active data and instructions.",
    location: "Processor memory architecture",
    interaction:
      "Constantly exchanges data with the processor and operating system.",
  },
  {
    id: "nand",
    title: "NAND Flash Storage",
    group: "Hardware",
    category: "Storage",
    definition:
      "Non-volatile flash memory stores applications, photos, videos and system data.",
    location: "Logic board",
    interaction: "Works with storage controllers and the operating system.",
  },
  {
    id: "battery",
    title: "Lithium-Ion Battery",
    group: "Hardware",
    category: "Power",
    definition: "The rechargeable battery provides stored electrical energy.",
    location: "Inside the chassis",
    interaction: "Works with power management and charging circuitry.",
  },
  {
    id: "power-management",
    title: "Power Management",
    group: "Hardware",
    category: "Power",
    definition:
      "Power management circuitry controls distribution and regulation of electrical energy.",
    location: "Logic board",
    interaction:
      "Coordinates battery, charging, processor and system power requirements.",
  },
  {
    id: "camera-sensor",
    title: "Camera Image Sensors",
    group: "Hardware",
    category: "Camera",
    definition:
      "Image sensors convert incoming light into electronic image data.",
    location: "Camera modules",
    interaction: "Feeds data into image-processing pipelines.",
  },
  {
    id: "secure-enclave",
    title: "Secure Enclave",
    group: "Hardware",
    category: "Security",
    definition:
      "A dedicated security subsystem protects sensitive cryptographic operations and data.",
    location: "Processor platform",
    interaction:
      "Works with biometric systems, encryption and operating system security.",
  },
  {
    id: "taptic-engine",
    title: "Taptic Engine",
    group: "Hardware",
    category: "Haptic",
    definition:
      "A precision haptic actuator produces controlled physical feedback.",
    location: "Inside the chassis",
    interaction:
      "Receives commands from the operating system and applications.",
  },
  {
    id: "antennas",
    title: "Antennas",
    group: "Hardware",
    category: "Connectivity",
    definition: "Antennas transmit and receive electromagnetic signals.",
    location: "Around the chassis",
    interaction:
      "Connect radio systems with cellular, Wi-Fi, Bluetooth and other networks.",
  },
  {
    id: "wireless",
    title: "Wireless Connectivity",
    group: "Hardware",
    category: "Connectivity",
    definition:
      "Wireless systems support communication through cellular and local wireless technologies.",
    location: "Logic board and antenna system",
    interaction:
      "Works with antennas, radios, system software and network services.",
  },
  {
    id: "sensor-system",
    title: "Sensor System",
    group: "Hardware",
    category: "Sensors",
    definition:
      "Multiple sensors detect movement, environment and user interaction.",
    location: "Distributed throughout the device",
    interaction: "Feeds measurements into processing and software systems.",
  },
  {
    id: "audio-system",
    title: "Audio System",
    group: "Hardware",
    category: "Audio",
    definition:
      "The audio architecture processes input and output sound signals.",
    location: "Distributed hardware",
    interaction:
      "Works with applications, codecs, amplifiers and system software.",
  },
  {
    id: "interconnect",
    title: "Internal Interconnect",
    group: "Hardware",
    category: "Interconnect",
    definition:
      "Internal interconnects provide electrical and data pathways between assemblies.",
    location: "Inside the device",
    interaction:
      "Connects the logic board to displays, cameras, sensors and other modules.",
  },
  {
    id: "ios",
    title: "iOS",
    group: "Software",
    category: "Operating System",
    definition:
      "The operating system manages hardware resources and provides system services.",
    location: "Software layer",
    interaction:
      "Connects applications with lower-level system services and hardware.",
  },
  {
    id: "interface",
    title: "User Interface",
    group: "Software",
    category: "Interface",
    definition:
      "The graphical interface allows users to interact with the device.",
    location: "Software layer",
    interaction:
      "Receives touch and physical input and communicates with system services.",
  },
  {
    id: "applications",
    title: "Applications",
    group: "Software",
    category: "Applications",
    definition:
      "Applications provide user-facing functionality such as messaging, camera and media.",
    location: "Software layer",
    interaction:
      "Use operating system frameworks and APIs to access device capabilities.",
  },
  {
    id: "developer-tools",
    title: "Developer Tools",
    group: "Software",
    category: "Developer Tools",
    definition:
      "Development tools allow developers to build, test and debug applications.",
    location: "Development environment",
    interaction:
      "Connect development workflows with APIs, simulators and debugging systems.",
  },
  {
    id: "communication",
    title: "Communication Stack",
    group: "Software",
    category: "Communication",
    definition:
      "Software communication layers coordinate network and data exchange.",
    location: "Software stack",
    interaction:
      "Works with networking hardware and operating system services.",
  },
  {
    id: "low-level",
    title: "Low-Level Software",
    group: "Software",
    category: "Low Level",
    definition:
      "Low-level software provides closer control of hardware resources.",
    location: "System software",
    interaction:
      "Connects operating system services with hardware controllers.",
  },
  {
    id: "drivers",
    title: "Hardware Drivers",
    group: "Software",
    category: "Low Level",
    definition: "Drivers provide software interfaces for hardware devices.",
    location: "System software",
    interaction: "Bridge system services and physical components.",
  },
  {
    id: "firmware",
    title: "Firmware",
    group: "Software",
    category: "Low Level",
    definition:
      "Firmware provides persistent low-level instructions for hardware systems.",
    location: "Hardware-associated software layer",
    interaction:
      "Works between hardware controllers and higher software layers.",
  },
];

const functionalFlows = [
  {
    title: "Power System",
    description:
      "Electrical energy moves from the battery through power management before reaching processing and peripheral systems.",
    steps: ["Battery", "Power Management", "SoC", "Memory", "Display"],
  },
  {
    title: "Camera Pipeline",
    description:
      "A photograph passes through optical capture, image processing, storage and display.",
    steps: ["Camera Sensor", "Image Processing", "SoC", "Storage", "Display"],
  },
  {
    title: "Touch Interaction",
    description:
      "A physical touch becomes digital input and is interpreted by the operating system.",
    steps: ["Finger", "Digitizer", "iOS", "Processor", "Display"],
  },
  {
    title: "Wireless Communication",
    description:
      "Applications request network services while wireless hardware manages radio communication.",
    steps: ["Application", "iOS", "Communication", "Antenna", "Network"],
  },
  {
    title: "Biometric Security",
    description:
      "Biometric information is processed through dedicated security architecture before authentication is completed.",
    steps: ["Face", "TrueDepth", "Secure Processing", "Secure Enclave", "iOS"],
  },
];

const sensors = [
  {
    title: "Proximity Sensor",
    description:
      "Detects nearby objects and helps control behavior during calls.",
  },
  {
    title: "Ambient Light Sensor",
    description:
      "Measures surrounding light conditions for display-related behavior.",
  },
  {
    title: "Accelerometer",
    description:
      "Measures linear acceleration and helps determine device movement and orientation.",
  },
  {
    title: "Gyroscope",
    description:
      "Measures rotational motion and contributes to orientation and motion tracking.",
  },
  {
    title: "Magnetometer",
    description:
      "Detects magnetic fields and supports compass-related functions.",
  },
  {
    title: "Barometer",
    description:
      "Measures atmospheric pressure and can contribute to elevation-related calculations.",
  },
  {
    title: "TrueDepth System",
    description:
      "Uses depth and imaging technologies to support Face ID and related features.",
  },
];

const troubleshooting = [
  {
    title: "iPhone is not charging",
    causes: [
      "Dirty or damaged connector",
      "Cable or adapter problem",
      "Battery or power-management issue",
    ],
    action:
      "Inspect the connector, test a known-good charging setup and check whether the device responds to power.",
  },
  {
    title: "Battery drains quickly",
    causes: [
      "High background activity",
      "Battery aging",
      "High display or processor usage",
    ],
    action:
      "Review battery usage, background activity and battery health information.",
  },
  {
    title: "Device becomes hot",
    causes: [
      "Heavy processing",
      "Charging activity",
      "Poor thermal conditions",
    ],
    action: "Check active applications, charging conditions and system load.",
  },
  {
    title: "Camera does not work",
    causes: [
      "Software issue",
      "Camera module problem",
      "Connection or hardware fault",
    ],
    action:
      "Restart the application, test different camera modes and inspect for hardware symptoms.",
  },
  {
    title: "Display does not respond",
    causes: [
      "Software freeze",
      "Display or digitizer problem",
      "Physical damage",
    ],
    action:
      "Restart the device and inspect the display for physical or touch-related damage.",
  },
  {
    title: "No sound from speaker",
    causes: [
      "Muted audio",
      "Blocked speaker opening",
      "Audio hardware problem",
    ],
    action:
      "Check volume and audio routing, then test different audio sources.",
  },
];

const faqs = [
  {
    question: "What is the most important component in an iPhone?",
    answer:
      "An iPhone is a system of interconnected components. The SoC is central to computation, but the display, battery, memory, storage, sensors and communication systems all contribute to operation.",
  },
  {
    question: "What does the SoC do?",
    answer:
      "The system-on-chip integrates processing and several specialized computing functions and coordinates many device operations.",
  },
  {
    question: "What is the difference between RAM and storage?",
    answer:
      "RAM is high-speed working memory used while tasks are active. Storage retains user and system data when the device is powered off.",
  },
  {
    question: "How does the camera communicate with the processor?",
    answer:
      "The camera sensor captures image data, which moves through the image-processing pipeline and processor before being displayed or stored.",
  },
  {
    question: "What does the Secure Enclave do?",
    answer:
      "It provides a dedicated security environment for sensitive cryptographic and authentication-related operations.",
  },
  {
    question: "How do sensors help iPhone?",
    answer:
      "Sensors provide measurements about motion, orientation, environment and user interaction that can be used by system software and applications.",
  },
];

const categories = [
  "All",
  "Operating System",
  "Interface",
  "Applications",
  "Developer Tools",
  "Communication",
  "Low Level",
  "Security",
  "Electronics",
  "Processing",
  "Machine Learning",
  "RAM",
  "Storage",
  "Power",
  "Camera",
  "Haptic",
  "Connectivity",
  "Audio",
  "Interconnect",
  "Front",
  "Structure",
  "Controls",
  "Sensors",
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

export default function Iphone() {
  const reduceMotion = useReducedMotion();

  const [activeGroup, setActiveGroup] = useState("external");
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
              iPhone Technical Anatomy
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
              Explore the external structure, internal hardware, software
              architecture, sensors, processing, connectivity and security that
              work together inside an iPhone.
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
              {["External", "Hardware", "Software", "Security", "Sensors"].map(
                (item) => (
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
                ),
              )}
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

            <div className="relative mx-auto max-w-md">
              <div
                className="relative overflow-hidden rounded-[3rem] border-[8px] shadow-2xl"
                style={{
                  background: COLORS.text,
                  borderColor: "#D8E8F2",
                }}
              >
                <img
                  src={IMAGES.iphone}
                  alt="iPhone anatomy"
                  className="aspect-[9/16] w-full object-cover"
                />

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 45%, rgba(23,50,77,.75))",
                  }}
                />

                <div className="absolute bottom-7 left-7 right-7">
                  <div
                    className="rounded-3xl border p-5 backdrop-blur-xl"
                    style={{
                      background: "rgba(255,255,255,.88)",
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
                      Hardware + Software
                    </div>

                    <div
                      className="mt-2 text-sm"
                      style={{ color: COLORS.textLight }}
                    >
                      One integrated technical system.
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
              placeholder="Search anatomy, components, systems..."
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
                Architecture Database
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
            text="An iPhone is not a collection of isolated components. Hardware and software constantly exchange data, power and control signals."
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
            title="The device is constantly sensing."
            text="Motion, light, proximity, magnetic fields and biometric information become useful data through specialized hardware and software."
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
                  Biometric authentication, encryption, protected keys and
                  secure processing work together to keep sensitive information
                  separated from ordinary application activity.
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
            text="Use system relationships to reason about common hardware and software symptoms."
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
            text="Quick explanations for the most important concepts in iPhone architecture."
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
            iPhone Anatomy
          </div>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Every component has a role.
          </h2>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8"
            style={{ color: "#D5E7F2" }}
          >
            From the smallest sensor to the operating system, iPhone
            architecture is built from interconnected systems working together.
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
              Explore Anatomy
            </a>

            <Link
              to="/mac"
              className="rounded-2xl border px-6 py-4 font-black"
              style={{
                borderColor: "rgba(255,255,255,.25)",
                color: COLORS.white,
              }}
            >
              Explore Mac →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
