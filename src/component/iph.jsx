import { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
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
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=85",

  iphoneBack:
    "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=1200&q=85",

  smartphone:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",

  technology:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",

  motherboard:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",

  storage:
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1200&q=85",

  camera:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",

  processor:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",

  battery:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85",

  display:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",

  wireless:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",

  audio:
    "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1200&q=85",

  memory:
    "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=1200&q=85",

  connector:
    "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=1200&q=85",

  security:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",

  haptic:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=85",

  sensors:
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85",

  durability:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85",
};

const getSmartImage = (title = "", category = "") => {
  const text = `${title} ${category}`.toLowerCase();

  if (
    text.includes("storage") ||
    text.includes("nand") ||
    text.includes("flash")
  ) {
    return IMAGES.storage;
  }

  if (
    text.includes("camera") ||
    text.includes("lens") ||
    text.includes("lidar") ||
    text.includes("ois") ||
    text.includes("image sensor")
  ) {
    return IMAGES.camera;
  }

  if (
    text.includes("cpu") ||
    text.includes("gpu") ||
    text.includes("processor") ||
    text.includes("neural") ||
    text.includes("silicon") ||
    text.includes("soc")
  ) {
    return IMAGES.processor;
  }

  if (
    text.includes("battery") ||
    text.includes("power") ||
    text.includes("charging")
  ) {
    return IMAGES.battery;
  }

  if (
    text.includes("display") ||
    text.includes("oled") ||
    text.includes("glass") ||
    text.includes("touch") ||
    text.includes("digitizer")
  ) {
    return IMAGES.display;
  }

  if (
    text.includes("wifi") ||
    text.includes("wi-fi") ||
    text.includes("bluetooth") ||
    text.includes("nfc") ||
    text.includes("antenna") ||
    text.includes("wireless") ||
    text.includes("cellular") ||
    text.includes("connectivity") ||
    text.includes("gps")
  ) {
    return IMAGES.wireless;
  }

  if (
    text.includes("speaker") ||
    text.includes("microphone") ||
    text.includes("audio") ||
    text.includes("earpiece")
  ) {
    return IMAGES.audio;
  }

  if (text.includes("ram") || text.includes("memory")) {
    return IMAGES.memory;
  }

  if (
    text.includes("usb") ||
    text.includes("magsafe") ||
    text.includes("connector") ||
    text.includes("port")
  ) {
    return IMAGES.connector;
  }

  if (
    text.includes("face id") ||
    text.includes("secure enclave") ||
    text.includes("security") ||
    text.includes("truedepth")
  ) {
    return IMAGES.security;
  }

  if (text.includes("taptic") || text.includes("haptic")) {
    return IMAGES.haptic;
  }

  if (
    text.includes("logic board") ||
    text.includes("motherboard") ||
    text.includes("emi")
  ) {
    return IMAGES.motherboard;
  }

  if (
    text.includes("accelerometer") ||
    text.includes("gyroscope") ||
    text.includes("proximity") ||
    text.includes("barometer") ||
    text.includes("magnetometer") ||
    text.includes("sensor")
  ) {
    return IMAGES.sensors;
  }

  if (
    text.includes("frame") ||
    text.includes("durability") ||
    text.includes("water") ||
    text.includes("dust") ||
    text.includes("repair") ||
    text.includes("damage")
  ) {
    return IMAGES.durability;
  }

  if (
    text.includes("ios") ||
    text.includes("interface") ||
    text.includes("application") ||
    text.includes("framework") ||
    text.includes("api") ||
    text.includes("driver") ||
    text.includes("firmware") ||
    text.includes("software")
  ) {
    return IMAGES.technology;
  }

  return IMAGES.iphone;
};

const history = [
  {
    year: "2007",
    title: "The Beginning",
    category: "Foundation",
    image: IMAGES.iphone,
    text: "The original iPhone introduced a new approach to mobile computing by combining a phone, iPod and internet communicator with a multi-touch interface.",
  },
  {
    year: "2010",
    title: "Retina Display",
    category: "Display",
    image: IMAGES.display,
    text: "The iPhone 4 introduced the Retina display, dramatically increasing pixel density and making individual pixels difficult to distinguish at normal viewing distance.",
  },
  {
    year: "2013",
    title: "Touch ID",
    category: "Security",
    image: IMAGES.security,
    text: "Touch ID introduced fingerprint-based biometric authentication directly into the iPhone experience.",
  },
  {
    year: "2017",
    title: "Face ID",
    category: "Security",
    image: IMAGES.security,
    text: "The iPhone X introduced Face ID together with the TrueDepth camera system and a major redesign of the front display.",
  },
  {
    year: "2020",
    title: "5G Era",
    category: "Connectivity",
    image: IMAGES.wireless,
    text: "The iPhone 12 generation introduced 5G connectivity, bringing faster cellular communication to the iPhone family.",
  },
  {
    year: "Today",
    title: "Modern iPhone",
    category: "Architecture",
    image: IMAGES.iphone,
    text: "Modern iPhones combine Apple silicon, advanced cameras, high-resolution displays, sensors, wireless systems, security hardware and sophisticated software.",
  },
];

const externalAnatomy = [
  {
    id: "display",
    icon: "▤",
    title: "Display",
    category: "Front",
    location: "The entire front face of the iPhone.",
    function:
      "Produces visual output including text, images, video, system interfaces and application content.",
    interaction:
      "The display works with the touch digitizer, display controller, GPU and iOS to transform digital information into an interactive visual experience.",
    image: IMAGES.display,
  },
  {
    id: "front-glass",
    icon: "◇",
    title: "Front Glass",
    category: "Front",
    location: "Protective layer covering the front display assembly.",
    function:
      "Protects the display and touch system from scratches, impacts and everyday contact.",
    interaction:
      "The glass sits above the touch and display layers while allowing visual output and touch input to pass through.",
    image: IMAGES.display,
  },
  {
    id: "frame",
    icon: "▣",
    title: "Frame / Body",
    category: "Structure",
    location: "The outer perimeter and structural body of the device.",
    function: "Provides structural support and protects internal components.",
    interaction:
      "The frame supports the display, rear glass, buttons, antennas and internal assemblies.",
    image: IMAGES.durability,
  },
  {
    id: "volume",
    icon: "＋",
    title: "Volume Buttons",
    category: "Controls",
    location: "Along the side edge of supported iPhone models.",
    function:
      "Increase or decrease audio volume and perform additional system controls in certain situations.",
    interaction:
      "Physical button input is detected by hardware and interpreted by iOS.",
    image: IMAGES.iphone,
  },
  {
    id: "action",
    icon: "●",
    title: "Action Button",
    category: "Controls",
    location: "Side edge on supported modern models.",
    function:
      "Provides a customizable physical shortcut for actions such as Silent Mode, Focus, Camera or other configured functions.",
    interaction:
      "The button generates an input event that iOS maps to the configured action.",
    image: IMAGES.iphone,
  },
  {
    id: "side-button",
    icon: "▰",
    title: "Side Button",
    category: "Controls",
    location: "Side edge of the iPhone.",
    function:
      "Controls locking, waking, powering and other system interactions.",
    interaction:
      "The physical switch sends an input event to the device control system.",
    image: IMAGES.iphone,
  },
  {
    id: "usb-c",
    icon: "⌁",
    title: "USB-C Port",
    category: "Connectivity",
    location: "Bottom edge on newer USB-C iPhone models.",
    function:
      "Provides wired charging, data communication and accessory connectivity.",
    interaction:
      "The connector works with power-management hardware, charging circuits and data controllers.",
    image: IMAGES.connector,
  },
  {
    id: "camera-modules",
    icon: "◉",
    title: "Camera Modules",
    category: "Camera",
    location: "Rear camera area and front camera system.",
    function:
      "Capture photographs and video using lenses, sensors and computational processing.",
    interaction:
      "Camera sensors communicate with image-processing hardware and iOS camera software.",
    image: IMAGES.camera,
  },
  {
    id: "speaker",
    icon: ")))",
    title: "Speakers",
    category: "Audio",
    location: "Bottom speaker openings and front earpiece area.",
    function: "Produce music, calls, notifications, videos and system sounds.",
    interaction:
      "Audio data is processed by the system and converted into sound by speaker hardware.",
    image: IMAGES.audio,
  },
  {
    id: "microphones",
    icon: "◌",
    title: "Microphones",
    category: "Audio",
    location: "Multiple openings distributed around the device.",
    function: "Capture voice and environmental sound.",
    interaction:
      "Microphone signals are processed by audio hardware and software for calls, recordings, video and voice assistants.",
    image: IMAGES.audio,
  },
  {
    id: "sim",
    icon: "▱",
    title: "SIM / eSIM System",
    category: "Connectivity",
    location:
      "Model and regional configuration determine whether a physical SIM tray is present; many modern models also support eSIM.",
    function:
      "Provides subscriber identity information required for cellular service.",
    interaction:
      "The cellular modem communicates with the SIM/eSIM system to authenticate with a carrier network.",
    image: IMAGES.wireless,
  },
  {
    id: "sensors-visible",
    icon: "⌁",
    title: "Visible Sensor Areas",
    category: "Sensors",
    location:
      "Front camera / sensor area and selected openings around the enclosure.",
    function:
      "Support functions such as proximity detection, ambient-light measurement and biometric sensing.",
    interaction:
      "Sensor information is processed by dedicated hardware and system software.",
    image: IMAGES.sensors,
  },
];

const software = [
  {
    id: "ios",
    icon: "◈",
    category: "Operating System",
    group: "Software",
    title: "iOS",
    definition:
      "iOS is Apple's operating system designed to manage the iPhone's hardware, software, applications, security and user experience.",
    explanation:
      "iOS acts as the main manager of the iPhone. It controls how applications communicate with hardware such as the display, camera, speakers, sensors, battery and wireless systems.",
    flow: ["Apps", "iOS", "Hardware"],
  },
  {
    id: "ui",
    icon: "▤",
    category: "Interface",
    group: "Software",
    title: "User Interface",
    definition:
      "The User Interface is the visual part of software that allows people to interact with the iPhone.",
    explanation:
      "The Home Screen, Lock Screen, menus, icons, Control Center, Settings and animations are examples of the iPhone user interface.",
    flow: ["User", "UI", "iOS"],
  },
  {
    id: "apps",
    icon: "▦",
    category: "Applications",
    group: "Software",
    title: "Applications",
    definition:
      "An application is a software program designed to perform a particular task or provide a service.",
    explanation:
      "Camera, Safari, Photos, Messages, Maps and third-party applications run on top of iOS and use system APIs.",
    flow: ["App", "API", "iOS"],
  },
  {
    id: "frameworks",
    icon: "◇",
    category: "Developer Tools",
    group: "Software",
    title: "Frameworks",
    definition:
      "A framework is a collection of software tools, APIs and services used by developers to build applications.",
    explanation:
      "Apple provides technologies such as SwiftUI, UIKit, AVFoundation, Core Location, Core ML, ARKit and Metal.",
    flow: ["Developer", "Framework", "iOS"],
  },
  {
    id: "api",
    icon: "↔",
    category: "Communication",
    group: "Software",
    title: "APIs",
    definition:
      "An API provides a controlled way for software components to communicate with one another.",
    explanation:
      "A camera application can request access to camera functionality through Apple's APIs rather than directly controlling the physical sensor.",
    flow: ["App", "API", "System"],
  },
  {
    id: "drivers",
    icon: "⚙",
    category: "Low Level",
    group: "Software",
    title: "Drivers",
    definition:
      "A driver is software that helps the operating system communicate with hardware components.",
    explanation:
      "Drivers provide instructions that allow software to communicate with displays, audio systems, storage and other electronic components.",
    flow: ["iOS", "Driver", "Hardware"],
  },
  {
    id: "firmware",
    icon: "◆",
    category: "Low Level",
    group: "Software",
    title: "Firmware",
    definition:
      "Firmware is low-level software that controls or assists specific hardware systems.",
    explanation:
      "It operates close to hardware and helps specialized components perform their functions correctly.",
    flow: ["iOS", "Firmware", "Component"],
  },
  {
    id: "security-software",
    icon: "◇",
    category: "Security",
    group: "Software",
    title: "Security Software",
    definition:
      "iPhone security software protects the device, applications, authentication information and user data.",
    explanation:
      "Secure boot, encryption, permissions, code signing and biometric authentication work together to protect the device.",
    flow: ["User", "Security", "Protected Data"],
  },
];

const internalAnatomy = [
  {
    id: "logic-board",
    title: "Logic Board",
    category: "Electronics",
    definition:
      "The logic board is the primary circuit board that connects many of the iPhone's electronic systems.",
    where:
      "Located inside the enclosure and arranged to maximize space efficiency.",
    function:
      "Provides electrical and communication pathways between processing, memory, storage, power and connectivity systems.",
    interaction:
      "The logic board connects the SoC, memory, storage, power-management circuits, wireless systems, sensors and peripheral connectors.",
    image: IMAGES.motherboard,
  },
  {
    id: "soc",
    title: "SoC / Apple Silicon",
    category: "Processing",
    definition:
      "The system-on-chip integrates major computing functions into a highly integrated processor package.",
    where: "Mounted on the logic board.",
    function:
      "Executes instructions, processes graphics, accelerates machine learning and coordinates many system operations.",
    interaction:
      "It communicates with memory, storage, cameras, display controllers, neural-processing hardware and other subsystems.",
    image: IMAGES.processor,
  },
  {
    id: "cpu",
    title: "CPU",
    category: "Processing",
    definition:
      "The Central Processing Unit executes general-purpose instructions.",
    where: "Integrated into the Apple silicon SoC.",
    function:
      "Runs operating-system tasks, applications, calculations and control logic.",
    interaction:
      "The CPU uses RAM for active data and communicates with hardware through controllers and system buses.",
    image: IMAGES.processor,
  },
  {
    id: "gpu",
    title: "GPU",
    category: "Processing",
    definition:
      "The Graphics Processing Unit performs highly parallel graphics calculations.",
    where: "Integrated into the Apple silicon SoC.",
    function:
      "Renders interfaces, games, video effects and other visual workloads.",
    interaction:
      "The GPU processes data and sends rendered results toward the display subsystem.",
    image: IMAGES.processor,
  },
  {
    id: "neural-engine",
    title: "Neural Engine",
    category: "Machine Learning",
    definition:
      "Dedicated processing hardware designed to accelerate machine-learning workloads.",
    where: "Integrated into supported Apple silicon SoCs.",
    function: "Accelerates selected machine-learning operations.",
    interaction:
      "It can work with the CPU, GPU, camera pipeline and system software for tasks involving image, speech and other ML workloads.",
    image: IMAGES.processor,
  },
  {
    id: "memory",
    title: "Memory",
    category: "RAM",
    definition: "RAM is high-speed temporary working memory.",
    where:
      "Integrated into the iPhone's system architecture close to the main processor.",
    function:
      "Stores active application data and temporary working information.",
    interaction:
      "The processor continuously reads and writes data to memory while applications and iOS are running.",
    image: IMAGES.memory,
  },
  {
    id: "storage",
    title: "NAND Flash Storage",
    category: "Storage",
    definition:
      "NAND flash is non-volatile memory used for persistent data storage.",
    where: "Connected to the logic-board storage subsystem.",
    function:
      "Stores iOS, applications, photographs, videos, documents and other user data.",
    interaction:
      "The processor and operating system access storage through dedicated controllers and software layers.",
    image: IMAGES.storage,
  },
  {
    id: "battery",
    title: "Lithium-ion Battery",
    category: "Power",
    definition: "A rechargeable electrochemical energy-storage system.",
    where: "Occupies a significant portion of the internal chassis.",
    function: "Supplies electrical energy to the phone's electronic systems.",
    interaction:
      "The battery works with charging circuitry and power-management components to provide controlled energy.",
    image: IMAGES.battery,
  },
  {
    id: "power-management",
    title: "Power Management",
    category: "Power",
    definition:
      "Power-management circuits regulate electrical energy throughout the device.",
    where: "Located on and around the logic-board power architecture.",
    function: "Convert, regulate and distribute power to different components.",
    interaction:
      "Power-management hardware coordinates battery energy with processor, display, camera, wireless and charging requirements.",
    image: IMAGES.battery,
  },
  {
    id: "camera-sensors",
    title: "Camera Image Sensors",
    category: "Camera",
    definition:
      "Image sensors convert incoming light into electronic image information.",
    where: "Inside the rear and front camera modules.",
    function: "Capture light information for photographs and video.",
    interaction:
      "Sensor data is processed through the image pipeline and computational photography system.",
    image: IMAGES.camera,
  },
  {
    id: "taptic",
    title: "Taptic Engine",
    category: "Haptic",
    definition:
      "A precision haptic actuator that generates controlled physical feedback.",
    where: "Mounted inside the lower internal structure.",
    function: "Creates vibrations and tactile feedback.",
    interaction:
      "iOS sends commands to the haptic controller, which drives the actuator.",
    image: IMAGES.haptic,
  },
  {
    id: "antennas",
    title: "Antennas",
    category: "Connectivity",
    definition: "Antennas transmit and receive radio-frequency signals.",
    where: "Distributed around the internal enclosure.",
    function:
      "Enable cellular, Wi-Fi, Bluetooth, GPS and other wireless communication.",
    interaction:
      "Antennas work with radio-frequency circuits and wireless modems to communicate with external networks and devices.",
    image: IMAGES.wireless,
  },
  {
    id: "audio",
    title: "Speaker System",
    category: "Audio",
    definition:
      "Electromechanical hardware that converts electrical audio information into sound.",
    where: "Located in dedicated speaker assemblies inside the enclosure.",
    function:
      "Produces calls, music, video audio, notifications and system sounds.",
    interaction:
      "Digital audio is processed and amplified before reaching the speaker drivers.",
    image: IMAGES.audio,
  },
  {
    id: "connectors",
    title: "Internal Connectors",
    category: "Interconnect",
    definition:
      "Connectors provide electrical and data pathways between assemblies.",
    where: "Distributed throughout the internal architecture.",
    function:
      "Link displays, cameras, batteries, buttons, speakers, sensors and other modules.",
    interaction:
      "They allow different assemblies to communicate with the main board.",
    image: IMAGES.connector,
  },
  {
    id: "secure-enclave",
    title: "Secure Enclave",
    category: "Security",
    definition:
      "A dedicated security subsystem designed to isolate sensitive authentication and cryptographic operations.",
    where: "Integrated into the processor/security architecture.",
    function:
      "Protect sensitive security information and support secure authentication.",
    interaction:
      "It works with biometric systems, cryptographic services and secure boot mechanisms.",
    image: IMAGES.security,
  },
];

const sensors = [
  {
    title: "Proximity Sensor",
    purpose: "Detects when an object is close to the device.",
    location: "Front sensor system.",
    function:
      "During phone calls, proximity information can be used to turn the display off when the phone is near the user's face.",
    image: IMAGES.sensors,
  },
  {
    title: "Ambient Light Sensor",
    purpose: "Measures surrounding light.",
    location: "Front sensor area.",
    function:
      "Provides information used by the system for automatic display brightness and other environmental adjustments.",
    image: IMAGES.sensors,
  },
  {
    title: "Accelerometer",
    purpose: "Measures acceleration and movement.",
    location: "Inside the device.",
    function:
      "Supports orientation, motion detection, gaming, fitness applications and other motion-aware features.",
    image: IMAGES.sensors,
  },
  {
    title: "Gyroscope",
    purpose: "Measures rotational movement.",
    location: "Inside the device.",
    function:
      "Helps detect device rotation and supports games, augmented reality and motion tracking.",
    image: IMAGES.sensors,
  },
  {
    title: "Magnetometer",
    purpose: "Detects magnetic fields.",
    location: "Inside the device.",
    function: "Contributes to compass and directional calculations.",
    image: IMAGES.sensors,
  },
  {
    title: "Barometer",
    purpose: "Measures atmospheric pressure.",
    location: "Inside the device.",
    function:
      "Pressure measurements can contribute to altitude estimation and location-related features.",
    image: IMAGES.sensors,
  },
  {
    title: "Face ID / TrueDepth",
    purpose: "Provides biometric facial authentication on supported models.",
    location: "Front sensor/camera system.",
    function:
      "Uses infrared sensing and depth information to recognize facial structure for authentication.",
    image: IMAGES.security,
  },
];

const functionalFlows = [
  {
    title: "Power System",
    icon: "01",
    steps: ["Battery", "Power Management", "SoC", "Memory", "Display"],
    explanation:
      "Electrical energy begins at the battery. Power-management circuits regulate that energy before different subsystems receive it. The processor and memory use the supplied power to execute software, while the display converts processed information into visual output.",
  },
  {
    title: "Camera System",
    icon: "02",
    steps: ["Camera Sensor", "Image Processing", "SoC", "Storage", "Display"],
    explanation:
      "Light enters the camera lens and reaches the image sensor. The captured information is processed by the image pipeline and processor, saved to storage and then displayed through the Photos or Camera interface.",
  },
  {
    title: "Touch Interaction",
    icon: "03",
    steps: ["Finger", "Digitizer", "iOS", "Processor", "Display"],
    explanation:
      "A finger changes the electrical characteristics detected by the touch digitizer. iOS interprets the touch event, the processor executes the required operation and the display updates the interface.",
  },
  {
    title: "Wireless Communication",
    icon: "04",
    steps: ["Application", "iOS", "Wireless Modem", "Antenna", "Network"],
    explanation:
      "An application requests network communication through system software. The wireless subsystem prepares the data, the modem manages radio communication and the antenna sends or receives the signal.",
  },
  {
    title: "Biometric Security",
    icon: "05",
    steps: ["Face", "TrueDepth", "Secure Processing", "Secure Enclave", "iOS"],
    explanation:
      "The front biometric system captures facial information. Security hardware processes the authentication information and protected security functions determine whether the user should be authenticated.",
  },
];

const durability = [
  {
    title: "Materials",
    category: "Construction",
    text: "Modern iPhones combine engineered glass, metal or titanium/aluminum structural elements depending on model generation, and carefully designed internal supports.",
    image: IMAGES.durability,
  },
  {
    title: "Structural Design",
    category: "Engineering",
    text: "The enclosure is designed to maintain rigidity while creating enough internal volume for the battery, logic board, cameras, speakers and other assemblies.",
    image: IMAGES.durability,
  },
  {
    title: "Glass Protection",
    category: "Surface",
    text: "Front and rear glass protect internal systems but remain vulnerable to impact, scratches, drops and concentrated force.",
    image: IMAGES.display,
  },
  {
    title: "Water & Dust Resistance",
    category: "Protection",
    text: "Supported models are designed with water and dust resistance ratings. Resistance is not permanent and can decrease after damage, wear or repair.",
    image: IMAGES.durability,
  },
  {
    title: "Battery Aging",
    category: "Battery",
    text: "Rechargeable batteries chemically age over time. Heat, charging patterns, workload and battery cycles can influence long-term capacity.",
    image: IMAGES.battery,
  },
  {
    title: "Thermal Management",
    category: "Thermal",
    text: "The processor, battery and wireless systems generate heat. Internal materials and system-level power management help control operating temperature.",
    image: IMAGES.processor,
  },
];

const troubleshooting = [
  {
    id: "charging",
    problem: "iPhone is not charging",
    causes: [
      "Damaged or contaminated charging port",
      "Faulty cable or power adapter",
      "Battery or charging circuit problem",
      "Software issue",
      "Liquid exposure",
    ],
    steps: [
      "Inspect the charging connector and cable for visible damage.",
      "Try a known-good compatible cable and power source.",
      "Check whether the device recognizes wired or wireless charging.",
      "Restart the device if it has enough power.",
      "If charging remains unavailable, inspect the port and power system professionally.",
    ],
    solution:
      "Clean only with safe, non-damaging methods and use a known-good charger. If the issue persists after eliminating the cable and power-source variables, professional hardware diagnosis may be required.",
    image: IMAGES.connector,
  },
  {
    id: "battery",
    problem: "Battery drains quickly",
    causes: [
      "High screen brightness",
      "Heavy applications or background activity",
      "Poor cellular signal",
      "Battery aging",
      "High device temperature",
    ],
    steps: [
      "Open Battery settings and identify applications with unusually high usage.",
      "Check whether the device is frequently operating in poor cellular coverage.",
      "Compare battery behavior after reducing brightness and background activity.",
      "Check battery health information where available.",
      "Observe whether unusual heat accompanies the rapid drain.",
    ],
    solution:
      "Reduce unnecessary background activity and display power consumption. If battery health is significantly degraded or the device becomes unusually hot, professional battery evaluation may be appropriate.",
    image: IMAGES.battery,
  },
  {
    id: "overheating",
    problem: "iPhone is overheating",
    causes: [
      "Heavy processor workload",
      "Direct sunlight or high ambient temperature",
      "Charging while under heavy load",
      "Poor cellular conditions",
      "Battery or hardware fault",
    ],
    steps: [
      "Check whether the phone is running a demanding application.",
      "Move the device away from direct sunlight and hot environments.",
      "Stop intensive tasks and allow the device to cool naturally.",
      "Check whether overheating occurs repeatedly during ordinary use.",
      "If abnormal heat persists, stop using the device and seek professional evaluation.",
    ],
    solution:
      "Reduce workload and environmental heat first. Persistent abnormal heating should be treated as a hardware or battery diagnostic issue rather than simply a performance problem.",
    image: IMAGES.processor,
  },
  {
    id: "camera",
    problem: "Camera is not working",
    causes: [
      "Camera application software problem",
      "Permission issue",
      "Obstructed lens",
      "Camera module fault",
      "Damage from impact or liquid",
    ],
    steps: [
      "Clean the external camera lens carefully.",
      "Close and reopen the Camera application.",
      "Restart the iPhone.",
      "Test the front and rear cameras separately.",
      "Test camera behavior in another application that uses the camera.",
    ],
    solution:
      "If software checks do not resolve the issue and one camera system consistently fails, the affected camera module or its connection may require professional inspection.",
    image: IMAGES.camera,
  },
  {
    id: "display",
    problem: "Display is not responding",
    causes: [
      "Temporary software freeze",
      "Damaged display assembly",
      "Touch digitizer failure",
      "Liquid or impact damage",
      "Internal connector issue",
    ],
    steps: [
      "Determine whether the display image is visible.",
      "Test whether physical buttons still respond.",
      "Perform the appropriate restart procedure.",
      "Check whether the problem affects the whole display or only a region.",
      "Look for signs of impact or liquid damage.",
    ],
    solution:
      "A software restart can resolve temporary freezes. Persistent touch failure, dead regions or physical damage require display and connector diagnostics.",
    image: IMAGES.display,
  },
  {
    id: "speaker",
    problem: "Speaker produces no sound",
    causes: [
      "Muted or low volume",
      "Incorrect audio output",
      "Blocked speaker opening",
      "Software problem",
      "Speaker hardware fault",
    ],
    steps: [
      "Increase the volume and verify silent-related settings.",
      "Disconnect Bluetooth audio devices.",
      "Test music, ringtone and speakerphone separately.",
      "Inspect the speaker opening for contamination.",
      "Restart the device and test again.",
    ],
    solution:
      "Eliminate software and output-routing causes first. If the speaker remains silent across multiple tests, professional audio hardware inspection may be necessary.",
    image: IMAGES.audio,
  },
  {
    id: "microphone",
    problem: "Microphone is not working",
    causes: [
      "Microphone opening obstruction",
      "Application permission problem",
      "Software malfunction",
      "Microphone hardware damage",
      "Liquid or impact damage",
    ],
    steps: [
      "Test voice recording.",
      "Test a phone call or speakerphone call.",
      "Test video recording with different cameras.",
      "Check microphone permissions for affected applications.",
      "Compare results across several applications.",
    ],
    solution:
      "If only one application fails, investigate permissions or application software. If microphone failure occurs across multiple functions, inspect the relevant microphone hardware.",
    image: IMAGES.audio,
  },
  {
    id: "restart",
    problem: "iPhone restarts unexpectedly",
    causes: [
      "Software crash",
      "Unstable application",
      "Low available storage",
      "Battery or power problem",
      "Hardware fault",
    ],
    steps: [
      "Record when the restart occurs and what the device was doing.",
      "Update iOS and applications when updates are available.",
      "Check available storage.",
      "Look for repeated crash or restart patterns.",
      "If restarts continue, back up important information and seek diagnostic support.",
    ],
    solution:
      "Start with software and storage checks. Repeated unexpected restarts that continue after software troubleshooting may indicate a power, battery or board-level problem.",
    image: IMAGES.processor,
  },
];

const faqs = [
  {
    question: "Is an iPhone just a collection of separate components?",
    answer:
      "No. The iPhone is a connected system. The battery supplies energy, the processor executes instructions, sensors provide information, software coordinates operations and output systems present the result to the user.",
  },
  {
    question: "Why is the logic board important?",
    answer:
      "The logic board provides electrical and communication pathways between major systems. Without those connections, processors, memory, storage, power and peripherals could not operate as an integrated device.",
  },
  {
    question: "Why does the battery affect performance?",
    answer:
      "The battery is the primary energy source. Battery condition, temperature and power-management requirements can influence how the system manages energy and performance.",
  },
  {
    question: "Why can a camera problem be caused by software?",
    answer:
      "The camera requires both hardware and software. The application communicates with camera services, which communicate with hardware. A failure at any layer can affect the final camera experience.",
  },
  {
    question: "Does water resistance mean the iPhone is waterproof?",
    answer:
      "No. Water and dust resistance is a design characteristic of supported models under specified test conditions. It is not a permanent guarantee against liquid damage.",
  },
  {
    question: "Why are sensors important?",
    answer:
      "Sensors allow the device to understand its environment and movement. They provide information used by the operating system and applications for orientation, brightness, motion, proximity, navigation and other functions.",
  },
];

const realExample = [
  {
    number: "01",
    title: "User interaction",
    image: IMAGES.iphone,
    text: "You tap the Camera application on the display.",
  },
  {
    number: "02",
    title: "Software",
    image: IMAGES.technology,
    text: "The Camera application uses iOS camera APIs to request access to the camera system.",
  },
  {
    number: "03",
    title: "Camera hardware",
    image: IMAGES.camera,
    text: "The lens focuses light onto the image sensor.",
  },
  {
    number: "04",
    title: "Processor",
    image: IMAGES.processor,
    text: "Image-processing hardware and software process the captured information.",
  },
  {
    number: "05",
    title: "Storage",
    image: IMAGES.storage,
    text: "The processed image is saved to flash storage.",
  },
  {
    number: "06",
    title: "Display",
    image: IMAGES.display,
    text: "The final photo is shown through the iOS Camera or Photos interface.",
  },
];

function ImageCard({ src, alt, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] aspect-[16/9] ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ scale: 1.18, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.08 }}
        className="w-full h-full object-cover"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(23,50,77,.48), transparent 65%)",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0, 0.2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `linear-gradient(110deg, transparent 30%, ${COLORS.white}55 50%, transparent 70%)`,
        }}
      />
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}
    >
      <p
        className="uppercase tracking-[0.35em] text-xs md:text-sm font-bold"
        style={{ color: COLORS.blue }}
      >
        {eyebrow}
      </p>

      <h2 className="text-5xl md:text-7xl font-black tracking-tight mt-5">
        {title}
      </h2>

      <p
        className="mt-7 text-base md:text-lg leading-relaxed"
        style={{ color: COLORS.textLight }}
      >
        {text}
      </p>
    </motion.div>
  );
}

function InfoPill({ children }) {
  return (
    <span
      className="inline-flex px-3 py-1.5 rounded-full text-xs font-bold"
      style={{
        background: `${COLORS.cyan}55`,
        color: COLORS.text,
      }}
    >
      {children}
    </span>
  );
}

function Iphone() {
  const [selectedPart, setSelectedPart] = useState(internalAnatomy[0]);
  const [activeGroup, setActiveGroup] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activeExternal, setActiveExternal] = useState(null);
  const [openTroubleshooting, setOpenTroubleshooting] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothMouseY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const backgroundX = useTransform(smoothMouseX, [-500, 500], [-35, 35]);

  const backgroundY = useTransform(smoothMouseY, [-500, 500], [-25, 25]);

  const phoneRotateX = useTransform(smoothMouseY, [-500, 500], [8, -8]);

  const phoneRotateY = useTransform(smoothMouseX, [-500, 500], [-10, 10]);

  const phoneY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [80, 20, 0, -20, -70],
  );

  const phoneRotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [-7, -2, 0, 3, -2],
  );

  const phoneScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.85, 1, 0.97, 0.91],
  );

  const allItems = useMemo(
    () => [
      ...software,
      ...internalAnatomy.map((item) => ({
        ...item,
        group: "Hardware",
      })),
      ...externalAnatomy.map((item) => ({
        ...item,
        group: "External",
        definition: item.function,
        explanation: item.interaction,
      })),
    ],
    [],
  );

  const groups = ["All", "External", "Hardware", "Software"];

  const categories = useMemo(() => {
    const source =
      activeGroup === "All"
        ? allItems
        : allItems.filter((item) => item.group === activeGroup);

    return ["All", ...new Set(source.map((item) => item.category))];
  }, [activeGroup, allItems]);

  const filteredComponents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return allItems.filter((item) => {
      const groupMatch = activeGroup === "All" || item.group === activeGroup;

      const categoryMatch =
        activeCategory === "All" || item.category === activeCategory;

      const searchable = [
        item.title,
        item.category,
        item.definition,
        item.explanation,
        item.location,
        item.function,
        item.where,
        item.interaction,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const searchMatch = !query || searchable.includes(query);

      return groupMatch && categoryMatch && searchMatch;
    });
  }, [activeGroup, activeCategory, allItems, search]);

  const handleGroupChange = (group) => {
    setActiveGroup(group);
    setActiveCategory("All");
  };

  const handleMouseMove = (event) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - (rect.left + rect.width / 2));

    mouseY.set(event.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: COLORS.soft,
        color: COLORS.text,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{
            x: backgroundX,
            y: backgroundY,
            background: `${COLORS.blue}22`,
          }}
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.25, 1],
                  opacity: [0.25, 0.55, 0.25],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[5%] top-[5%] w-[550px] h-[550px] rounded-full blur-[150px]"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [100, -80, 100],
                  y: [80, -60, 80],
                  scale: [1, 1.3, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[5%] top-[30%] w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{
            background: `${COLORS.cyan}38`,
          }}
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  x: [-80, 80, -80],
                  y: [80, -50, 80],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[30%] bottom-[-10%] w-[450px] h-[450px] rounded-full blur-[150px]"
          style={{
            background: `${COLORS.mint}35`,
          }}
        />
      </div>

      <section className="relative min-h-screen flex items-center justify-center px-6 perspective-[1400px]">
        <motion.div
          style={{
            x: backgroundX,
            y: backgroundY,
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${COLORS.cyan}38, transparent 45%)`,
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center max-w-6xl">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
              rotateY: -30,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.08,
              rotateY: 8,
              rotateX: -5,
            }}
            className="mx-auto mb-8 w-28 h-28 rounded-[32px] overflow-hidden shadow-2xl"
          >
            <img
              src={IMAGES.iphone}
              alt="iPhone"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.4em] text-xs md:text-sm font-semibold"
            style={{ color: COLORS.blue }}
          >
            Complete Technical Anatomy
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.8,
              rotateX: 25,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-7 text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85]"
          >
            Inside
            <br />
            <motion.span
              className="bg-clip-text text-transparent inline-block"
              animate={
                reduceMotion
                  ? {}
                  : {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.text}, ${COLORS.blue})`,
                backgroundSize: "300% 100%",
              }}
            >
              iPhone.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="max-w-2xl mx-auto mt-8 text-base md:text-lg leading-relaxed"
            style={{ color: COLORS.textLight }}
          >
            Study the iPhone as a complete technical system — from external
            anatomy and internal components to sensors, security, functional
            architecture, durability and technician-oriented troubleshooting.
          </motion.p>

          <motion.a
            href="#external"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{
              scale: 1.08,
              y: -5,
              boxShadow: `0 20px 60px ${COLORS.blue}55`,
            }}
            whileTap={{ scale: 0.94 }}
            className="inline-flex mt-10 px-7 py-4 rounded-full font-semibold"
            style={{
              background: `linear-gradient(135deg, ${COLORS.blue}, #159BE8)`,
              color: COLORS.white,
            }}
          >
            Explore Anatomy ↓
          </motion.a>
        </div>
      </section>

      <section
        id="history"
        className="relative py-32 md:py-40 px-6 overflow-hidden"
        style={{ background: COLORS.softBlue }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="01 · Evolution"
            title="The iPhone Story"
            text="Before studying the architecture, understand how the iPhone evolved from the original device into a sophisticated mobile computer."
          />

          <div className="mt-24 relative">
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
              style={{
                background: `linear-gradient(to bottom, transparent, ${COLORS.blue}, transparent)`,
              }}
            />

            {history.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                  rotateY: index % 2 === 0 ? -15 : 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                }}
                className={`relative flex mb-20 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <motion.article
                  whileHover={{
                    y: -12,
                    scale: 1.025,
                    rotateX: 2,
                  }}
                  className="w-full md:w-[44%] ml-10 md:ml-0 rounded-[32px] overflow-hidden border"
                  style={{
                    borderColor: COLORS.border,
                    background: `${COLORS.white}F2`,
                    boxShadow: `0 30px 80px ${COLORS.blue}12`,
                  }}
                >
                  <ImageCard
                    src={item.image}
                    alt={item.title}
                    className="rounded-none"
                  />

                  <div className="p-7">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-4xl md:text-5xl font-black"
                        style={{ color: COLORS.blue }}
                      >
                        {item.year}
                      </span>

                      <InfoPill>{item.category}</InfoPill>
                    </div>

                    <h3 className="text-2xl font-bold mt-5">{item.title}</h3>

                    <p
                      className="mt-3 leading-relaxed"
                      style={{ color: COLORS.textLight }}
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.article>

                <motion.div
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          scale: [1, 1.8, 1],
                        }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 top-8 w-3 h-3 rounded-full"
                  style={{
                    background: COLORS.blue,
                    boxShadow: `0 0 30px ${COLORS.blue}`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="external" className="relative py-32 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="02 · External Anatomy"
            title="The visible iPhone"
            text="Every external component has a physical location, a purpose and a relationship with the internal architecture."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
            {externalAnatomy.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotateX: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  delay: (index % 3) * 0.08,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -14,
                  scale: 1.02,
                }}
                onClick={() =>
                  setActiveExternal(activeExternal === item.id ? null : item.id)
                }
                className="cursor-pointer rounded-[32px] overflow-hidden border"
                style={{
                  borderColor:
                    activeExternal === item.id
                      ? `${COLORS.blue}90`
                      : COLORS.border,
                  background: COLORS.white,
                  boxShadow:
                    activeExternal === item.id
                      ? `0 30px 80px ${COLORS.blue}20`
                      : `0 20px 55px ${COLORS.blue}0C`,
                }}
              >
                <ImageCard
                  src={item.image}
                  alt={item.title}
                  className="rounded-none"
                />

                <div className="p-7">
                  <div className="flex justify-between">
                    <span className="text-3xl" style={{ color: COLORS.blue }}>
                      {item.icon}
                    </span>

                    <InfoPill>{item.category}</InfoPill>
                  </div>

                  <h3 className="text-2xl font-bold mt-5">{item.title}</h3>

                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-widest font-bold">
                      Location
                    </p>

                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: COLORS.textLight }}
                    >
                      {item.location}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-widest font-bold">
                      Function
                    </p>

                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: COLORS.textLight }}
                    >
                      {item.function}
                    </p>
                  </div>

                  <AnimatePresence>
                    {activeExternal === item.id && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="mt-5 pt-5 border-t"
                          style={{
                            borderColor: COLORS.border,
                          }}
                        >
                          <p className="text-xs uppercase tracking-widest font-bold">
                            Interaction
                          </p>

                          <p
                            className="mt-2 text-sm leading-relaxed"
                            style={{
                              color: COLORS.textLight,
                            }}
                          >
                            {item.interaction}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <p
                    className="text-xs font-bold mt-6"
                    style={{ color: COLORS.blue }}
                  >
                    {activeExternal === item.id
                      ? "Close details ↑"
                      : "Click for interaction →"}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="classification"
        className="relative py-32 md:py-40 px-6"
        style={{ background: COLORS.softBlue }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="03 · Classification"
            title="How the iPhone is organized"
            text="The complete system can be studied through external components, internal hardware and software."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              {
                number: "01",
                title: "External",
                image: IMAGES.iphoneBack,
                text: "Visible components such as display, glass, frame, buttons, cameras, ports, speakers and microphones.",
              },
              {
                number: "02",
                title: "Internal",
                image: IMAGES.motherboard,
                text: "Logic board, SoC, memory, storage, battery, cameras, antennas, haptic hardware, connectors and security systems.",
              },
              {
                number: "03",
                title: "Software",
                image: IMAGES.technology,
                text: "iOS, applications, APIs, frameworks, drivers, firmware and security software coordinate the physical hardware.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 70,
                  rotateX: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -14,
                  scale: 1.02,
                  rotateX: 2,
                }}
                className="rounded-[36px] overflow-hidden border"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border,
                  boxShadow: `0 30px 80px ${COLORS.blue}12`,
                }}
              >
                <ImageCard
                  src={item.image}
                  alt={item.title}
                  className="rounded-none aspect-[16/8]"
                />

                <div className="p-8">
                  <span
                    className="text-sm font-black"
                    style={{ color: COLORS.blue }}
                  >
                    {item.number}
                  </span>

                  <h3 className="text-4xl font-black mt-3">{item.title}</h3>

                  <p
                    className="mt-4 leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="software"
        className="relative py-32 md:py-40 px-6 overflow-hidden"
        style={{ background: COLORS.softBlue }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="04 · Software Anatomy"
            title="Software = instructions"
            text="Software tells the physical architecture what operation to perform and coordinates the user's interaction with hardware."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
            {software.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotateX: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  delay: (index % 4) * 0.08,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateX: 3,
                }}
                className="rounded-[30px] overflow-hidden border"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  boxShadow: `0 25px 65px ${COLORS.blue}0C`,
                }}
              >
                <ImageCard
                  src={getSmartImage(item.title, item.category)}
                  alt={item.title}
                  className="rounded-none"
                />

                <div className="p-7">
                  <div className="flex justify-between">
                    <span className="text-3xl" style={{ color: COLORS.blue }}>
                      {item.icon}
                    </span>

                    <span
                      className="text-xs font-bold"
                      style={{ color: COLORS.textLight }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p
                    className="text-xs uppercase tracking-widest mt-7 font-semibold"
                    style={{ color: COLORS.blue }}
                  >
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                  <p className="font-semibold text-sm mt-5">Definition</p>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {item.definition}
                  </p>

                  <p className="font-semibold text-sm mt-5">Explanation</p>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {item.explanation}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-6">
                    {item.flow.map((step, stepIndex) => (
                      <div key={step} className="flex items-center gap-2">
                        <span
                          className="px-2 py-1 rounded-lg text-xs"
                          style={{
                            background: COLORS.softBlue,
                            color: COLORS.blue,
                          }}
                        >
                          {step}
                        </span>

                        {stepIndex !== item.flow.length - 1 && (
                          <span style={{ color: COLORS.blue }}>→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="internal" className="relative py-32 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="05 · Internal Anatomy"
            title="Inside the machine"
            text="Internal anatomy is not simply a list of parts. Each component has a location, a function and a relationship with other systems."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
            {internalAnatomy.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.07,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="rounded-[32px] overflow-hidden border"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  boxShadow: `0 25px 70px ${COLORS.blue}0C`,
                }}
              >
                <ImageCard
                  src={item.image}
                  alt={item.title}
                  className="rounded-none"
                />

                <div className="p-7">
                  <InfoPill>{item.category}</InfoPill>

                  <h3 className="text-2xl font-bold mt-4">{item.title}</h3>

                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-widest font-bold">
                      What is it?
                    </p>

                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: COLORS.textLight }}
                    >
                      {item.definition}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-widest font-bold">
                      Where is it?
                    </p>

                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: COLORS.textLight }}
                    >
                      {item.where}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-widest font-bold">
                      What does it do?
                    </p>

                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: COLORS.textLight }}
                    >
                      {item.function}
                    </p>
                  </div>

                  <div
                    className="mt-6 p-4 rounded-2xl"
                    style={{
                      background: `${COLORS.cyan}30`,
                    }}
                  >
                    <p className="text-xs uppercase tracking-widest font-bold">
                      Interaction
                    </p>

                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: COLORS.textLight }}
                    >
                      {item.interaction}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="functional"
        className="relative py-32 md:py-40 px-6 overflow-hidden"
        style={{ background: COLORS.softBlue }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            center
            eyebrow="06 · Functional Anatomy"
            title="The iPhone works as one system"
            text="The following flows demonstrate how multiple components cooperate to produce a single user-visible result."
          />

          <div className="space-y-8 mt-20">
            {functionalFlows.map((flow, index) => (
              <motion.article
                key={flow.title}
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.96,
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
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[36px] border p-7 md:p-10"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  boxShadow: `0 30px 80px ${COLORS.blue}10`,
                }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="lg:w-1/4">
                    <span
                      className="text-sm font-black"
                      style={{ color: COLORS.blue }}
                    >
                      {flow.icon}
                    </span>

                    <h3 className="text-3xl font-black mt-3">{flow.title}</h3>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      {flow.steps.map((step, stepIndex) => (
                        <div key={step} className="flex items-center gap-3">
                          <motion.div
                            whileHover={{
                              scale: 1.08,
                              y: -4,
                            }}
                            className="px-4 py-3 rounded-2xl border font-bold text-sm"
                            style={{
                              borderColor: `${COLORS.blue}35`,
                              background: `${COLORS.cyan}35`,
                            }}
                          >
                            {step}
                          </motion.div>

                          {stepIndex !== flow.steps.length - 1 && (
                            <motion.span
                              animate={
                                reduceMotion
                                  ? {}
                                  : {
                                      x: [0, 6, 0],
                                    }
                              }
                              transition={{
                                duration: 1.2,
                                repeat: Infinity,
                              }}
                              className="text-xl font-black"
                              style={{
                                color: COLORS.blue,
                              }}
                            >
                              →
                            </motion.span>
                          )}
                        </div>
                      ))}
                    </div>

                    <p
                      className="mt-7 leading-relaxed"
                      style={{
                        color: COLORS.textLight,
                      }}
                    >
                      {flow.explanation}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="sensors" className="relative py-32 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="07 · Sensors & Security"
            title="How the iPhone senses and protects"
            text="Sensors give the device information about movement and its environment, while dedicated security systems protect authentication and sensitive information."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
            {sensors.map((sensor, index) => (
              <motion.article
                key={sensor.title}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotateY: index % 2 === 0 ? -8 : 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.07,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="rounded-[32px] overflow-hidden border"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  boxShadow: `0 25px 70px ${COLORS.blue}0C`,
                }}
              >
                <ImageCard
                  src={sensor.image}
                  alt={sensor.title}
                  className="rounded-none"
                />

                <div className="p-7">
                  <p
                    className="text-xs uppercase tracking-widest font-bold"
                    style={{ color: COLORS.blue }}
                  >
                    Sensor / Security
                  </p>

                  <h3 className="text-2xl font-bold mt-3">{sensor.title}</h3>

                  <p className="font-semibold text-sm mt-6">Purpose</p>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {sensor.purpose}
                  </p>

                  <p className="font-semibold text-sm mt-5">Location</p>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {sensor.location}
                  </p>

                  <p className="font-semibold text-sm mt-5">Function</p>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {sensor.function}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="durability"
        className="relative py-32 md:py-40 px-6"
        style={{ background: COLORS.softBlue }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="08 · Quality & Durability"
            title="Built for real-world use"
            text="Durability depends on materials, structural design, thermal behavior, battery aging and the conditions in which the device is used."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
            {durability.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 60,
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
                  delay: (index % 3) * 0.08,
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="rounded-[32px] overflow-hidden border"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  boxShadow: `0 25px 70px ${COLORS.blue}0C`,
                }}
              >
                <ImageCard
                  src={item.image}
                  alt={item.title}
                  className="rounded-none"
                />

                <div className="p-7">
                  <InfoPill>{item.category}</InfoPill>

                  <h3 className="text-2xl font-bold mt-4">{item.title}</h3>

                  <p
                    className="mt-4 leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mt-10 p-8 md:p-12 rounded-[40px] border"
            style={{
              borderColor: `${COLORS.blue}40`,
              background: `linear-gradient(135deg, ${COLORS.cyan}40, ${COLORS.white}, ${COLORS.mint}40)`,
            }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p
                  className="text-xs uppercase tracking-widest font-bold"
                  style={{ color: COLORS.blue }}
                >
                  Common Damage
                </p>
                <p className="mt-3 font-bold">
                  Cracked glass, bent frame, damaged ports, camera damage and
                  liquid exposure.
                </p>
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-widest font-bold"
                  style={{ color: COLORS.blue }}
                >
                  Long-Term Factors
                </p>
                <p className="mt-3 font-bold">
                  Heat, battery aging, repeated impacts, moisture and
                  environmental conditions.
                </p>
              </div>

              <div>
                <p
                  className="text-xs uppercase tracking-widest font-bold"
                  style={{ color: COLORS.blue }}
                >
                  Technician Principle
                </p>
                <p className="mt-3 font-bold">
                  Diagnose the system before replacing a component.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="anatomy"
        className="relative min-h-screen py-32 md:py-40 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            center
            eyebrow="09 · Interactive Anatomy"
            title="What's inside?"
            text="Select a major internal system and inspect its role inside the iPhone."
          />

          <div className="grid lg:grid-cols-[1fr_320px_1fr] gap-10 items-center mt-20">
            <div className="space-y-4">
              {internalAnatomy
                .filter((_, index) => index % 2 === 0)
                .slice(0, 8)
                .map((part, index) => (
                  <motion.button
                    key={part.id}
                    onClick={() => setSelectedPart(part)}
                    initial={{
                      opacity: 0,
                      x: -50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: 8,
                      scale: 1.02,
                    }}
                    className="w-full text-left rounded-2xl overflow-hidden border"
                    style={{
                      borderColor:
                        selectedPart.id === part.id
                          ? `${COLORS.blue}80`
                          : COLORS.border,
                      background:
                        selectedPart.id === part.id
                          ? `${COLORS.cyan}40`
                          : COLORS.white,
                    }}
                  >
                    <div className="flex items-center">
                      <img
                        src={part.image}
                        alt={part.title}
                        className="w-24 h-20 object-cover"
                      />

                      <div className="p-4">
                        <h3 className="font-bold">{part.title}</h3>

                        <p
                          className="text-xs mt-1"
                          style={{
                            color: COLORS.textLight,
                          }}
                        >
                          {part.category}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
            </div>

            <motion.div
              style={{
                y: phoneY,
                rotate: phoneRotate,
                scale: phoneScale,
                rotateX: phoneRotateX,
                rotateY: phoneRotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative mx-auto"
            >
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        scale: [1, 1.08, 1],
                        opacity: [0.2, 0.55, 0.2],
                        rotate: [0, 180, 360],
                      }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-16 rounded-[80px] blur-3xl"
                style={{
                  background: `conic-gradient(from 0deg, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.mint}, ${COLORS.blue})`,
                }}
              />

              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        y: [-7, 7, -7],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[270px] h-[550px] rounded-[52px] border-[7px] p-2 shadow-2xl"
                style={{
                  borderColor: `${COLORS.blue}70`,
                  background: COLORS.text,
                  boxShadow: `
                    0 35px 100px ${COLORS.blue}30,
                    inset 0 0 25px ${COLORS.white}
                  `,
                }}
              >
                <div className="relative w-full h-full rounded-[43px] overflow-hidden">
                  <motion.img
                    key={selectedPart.id}
                    initial={{
                      scale: 1.2,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                    src={selectedPart.image}
                    alt={selectedPart.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(23,50,77,.72), rgba(48,175,255,.2), rgba(0,0,0,.45))",
                    }}
                  />

                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full bg-black/80" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedPart.id}
                      initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.9,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -20,
                        scale: 0.9,
                      }}
                      className="absolute inset-8 flex flex-col justify-center items-center text-center text-white"
                    >
                      <span
                        className="text-xs uppercase tracking-widest"
                        style={{
                          color: COLORS.cyan,
                        }}
                      >
                        Selected
                      </span>

                      <h3 className="text-3xl font-black mt-3">
                        {selectedPart.title}
                      </h3>

                      <p className="text-sm mt-3 text-white/70">
                        {selectedPart.category}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/50" />
                </div>
              </motion.div>
            </motion.div>

            <div className="space-y-4">
              {internalAnatomy
                .filter((_, index) => index % 2 !== 0)
                .slice(0, 8)
                .map((part, index) => (
                  <motion.button
                    key={part.id}
                    onClick={() => setSelectedPart(part)}
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      x: -8,
                      scale: 1.02,
                    }}
                    className="w-full text-left rounded-2xl overflow-hidden border"
                    style={{
                      borderColor:
                        selectedPart.id === part.id
                          ? `${COLORS.blue}80`
                          : COLORS.border,
                      background:
                        selectedPart.id === part.id
                          ? `${COLORS.cyan}40`
                          : COLORS.white,
                    }}
                  >
                    <div className="flex items-center">
                      <img
                        src={part.image}
                        alt={part.title}
                        className="w-24 h-20 object-cover"
                      />

                      <div className="p-4">
                        <h3 className="font-bold">{part.title}</h3>

                        <p
                          className="text-xs mt-1"
                          style={{
                            color: COLORS.textLight,
                          }}
                        >
                          {part.category}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPart.id}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              className="max-w-5xl mx-auto mt-16 rounded-[36px] overflow-hidden border"
              style={{
                borderColor: `${COLORS.blue}35`,
                background: COLORS.white,
                boxShadow: `0 30px 80px ${COLORS.blue}12`,
              }}
            >
              <div className="grid md:grid-cols-[300px_1fr]">
                <img
                  src={selectedPart.image}
                  alt={selectedPart.title}
                  className="w-full h-full min-h-[300px] object-cover"
                />

                <div className="p-8">
                  <p
                    className="text-xs uppercase tracking-widest font-semibold"
                    style={{ color: COLORS.blue }}
                  >
                    Selected Component
                  </p>

                  <h3 className="text-3xl font-bold mt-3">
                    {selectedPart.title}
                  </h3>

                  <p className="font-semibold mt-6">What is it?</p>

                  <p
                    className="mt-2 leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {selectedPart.definition}
                  </p>

                  <p className="font-semibold mt-6">Where is it?</p>

                  <p
                    className="mt-2 leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {selectedPart.where}
                  </p>

                  <p className="font-semibold mt-6">What does it do?</p>

                  <p
                    className="mt-2 leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {selectedPart.function}
                  </p>

                  <p className="font-semibold mt-6">How does it interact?</p>

                  <p
                    className="mt-2 leading-relaxed"
                    style={{ color: COLORS.textLight }}
                  >
                    {selectedPart.interaction}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section
        id="components"
        className="relative py-32 md:py-40 px-6"
        style={{ background: COLORS.softBlue }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="10 · Deep Anatomy"
            title="Explore every layer"
            text="Search the external, internal and software architecture and move between technical categories."
          />

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
            className="mt-16"
          >
            <div className="relative">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search CPU, camera, battery, display, sensor..."
                className="w-full rounded-2xl border px-6 py-5 outline-none text-sm md:text-base transition-all"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  color: COLORS.text,
                  boxShadow: `0 15px 45px ${COLORS.blue}0C`,
                }}
              />

              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        opacity: [0.2, 0.7, 0.2],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{
                  background: COLORS.blue,
                  boxShadow: `0 0 20px ${COLORS.blue}`,
                }}
              />
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            {groups.map((group) => (
              <motion.button
                key={group}
                onClick={() => handleGroupChange(group)}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="px-6 py-3 rounded-full text-sm font-bold border"
                style={{
                  borderColor:
                    activeGroup === group ? COLORS.blue : COLORS.border,
                  background:
                    activeGroup === group ? COLORS.blue : COLORS.white,
                  color: activeGroup === group ? COLORS.white : COLORS.text,
                }}
              >
                {group}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-full text-xs font-semibold border"
                style={{
                  borderColor:
                    activeCategory === category ? COLORS.blue : COLORS.border,
                  background:
                    activeCategory === category
                      ? `${COLORS.cyan}55`
                      : COLORS.white,
                  color: COLORS.text,
                }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <p className="text-sm" style={{ color: COLORS.textLight }}>
              {filteredComponents.length} systems found
            </p>

            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-sm font-bold"
                style={{ color: COLORS.blue }}
              >
                Clear search
              </button>
            )}
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredComponents.map((item, index) => (
                <motion.article
                  layout
                  key={`${item.group}-${item.category}-${item.title}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 3) * 0.03,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.015,
                  }}
                  className="rounded-[30px] overflow-hidden border"
                  style={{
                    borderColor: COLORS.border,
                    background: COLORS.white,
                    boxShadow: `0 20px 55px ${COLORS.blue}0C`,
                  }}
                >
                  <ImageCard
                    src={getSmartImage(item.title, item.category)}
                    alt={item.title}
                    className="rounded-none aspect-[16/8]"
                  />

                  <div className="p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="text-xs uppercase tracking-widest font-semibold"
                        style={{ color: COLORS.blue }}
                      >
                        {item.category}
                      </span>

                      <span
                        className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full"
                        style={{
                          background:
                            item.group === "Software"
                              ? `${COLORS.cyan}55`
                              : item.group === "External"
                                ? `${COLORS.blue}25`
                                : `${COLORS.mint}70`,
                          color: COLORS.text,
                        }}
                      >
                        {item.group}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mt-3">{item.title}</h3>

                    <div className="mt-6">
                      <p className="font-semibold text-sm">Definition</p>

                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: COLORS.textLight }}
                      >
                        {item.definition}
                      </p>
                    </div>

                    {item.location && (
                      <div className="mt-5">
                        <p className="font-semibold text-sm">Location</p>

                        <p
                          className="mt-2 text-sm leading-relaxed"
                          style={{
                            color: COLORS.textLight,
                          }}
                        >
                          {item.location}
                        </p>
                      </div>
                    )}

                    {item.where && (
                      <div className="mt-5">
                        <p className="font-semibold text-sm">Where</p>

                        <p
                          className="mt-2 text-sm leading-relaxed"
                          style={{
                            color: COLORS.textLight,
                          }}
                        >
                          {item.where}
                        </p>
                      </div>
                    )}

                    <div className="mt-5">
                      <p className="font-semibold text-sm">Explanation</p>

                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: COLORS.textLight }}
                      >
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredComponents.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="text-center py-24"
            >
              <div
                className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl"
                style={{
                  background: `${COLORS.cyan}55`,
                  color: COLORS.blue,
                }}
              >
                ?
              </div>

              <h3 className="text-2xl font-black mt-6">No component found</h3>

              <p className="mt-3" style={{ color: COLORS.textLight }}>
                Try CPU, camera, battery, display, sensor, storage or another
                system.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section id="troubleshooting" className="relative py-32 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="11 · Technician Lab"
            title="Troubleshooting"
            text="A technician should not immediately replace a component. The correct approach is to identify the problem, consider possible causes, perform diagnostic steps and then choose an appropriate solution."
          />

          <div className="space-y-5 mt-20">
            {troubleshooting.map((item, index) => {
              const open = openTroubleshooting === item.id;

              return (
                <motion.article
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="rounded-[32px] overflow-hidden border"
                  style={{
                    borderColor: open ? `${COLORS.blue}70` : COLORS.border,
                    background: COLORS.white,
                    boxShadow: `0 20px 60px ${COLORS.blue}0C`,
                  }}
                >
                  <button
                    onClick={() =>
                      setOpenTroubleshooting(open ? null : item.id)
                    }
                    className="w-full text-left p-7 md:p-8"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <p
                          className="text-xs uppercase tracking-widest font-bold"
                          style={{ color: COLORS.blue }}
                        >
                          Diagnostic Case {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="text-2xl md:text-3xl font-black mt-3">
                          {item.problem}
                        </h3>
                      </div>

                      <motion.div
                        animate={{
                          rotate: open ? 45 : 0,
                        }}
                        className="w-11 h-11 rounded-full flex items-center justify-center text-2xl font-light shrink-0"
                        style={{
                          background: `${COLORS.cyan}45`,
                          color: COLORS.blue,
                        }}
                      >
                        +
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
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
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-8 md:px-8 md:pb-10">
                          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
                            <ImageCard
                              src={item.image}
                              alt={item.problem}
                              className="rounded-[28px] aspect-square"
                            />

                            <div>
                              <div>
                                <p className="text-xs uppercase tracking-widest font-bold">
                                  Possible Causes
                                </p>

                                <div className="grid md:grid-cols-2 gap-3 mt-4">
                                  {item.causes.map((cause, causeIndex) => (
                                    <div
                                      key={cause}
                                      className="p-4 rounded-2xl"
                                      style={{
                                        background: COLORS.softBlue,
                                      }}
                                    >
                                      <span
                                        className="text-xs font-black"
                                        style={{
                                          color: COLORS.blue,
                                        }}
                                      >
                                        0{causeIndex + 1}
                                      </span>

                                      <p className="text-sm font-semibold mt-2">
                                        {cause}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="mt-8">
                                <p className="text-xs uppercase tracking-widest font-bold">
                                  Diagnostic Steps
                                </p>

                                <div className="mt-4 space-y-3">
                                  {item.steps.map((step, stepIndex) => (
                                    <motion.div
                                      key={step}
                                      initial={{
                                        opacity: 0,
                                        x: 20,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        x: 0,
                                      }}
                                      transition={{
                                        delay: stepIndex * 0.06,
                                      }}
                                      className="flex gap-4 p-4 rounded-2xl border"
                                      style={{
                                        borderColor: COLORS.border,
                                      }}
                                    >
                                      <span
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                                        style={{
                                          background: `${COLORS.blue}18`,
                                          color: COLORS.blue,
                                        }}
                                      >
                                        {stepIndex + 1}
                                      </span>

                                      <p className="text-sm leading-relaxed">
                                        {step}
                                      </p>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              <div
                                className="mt-8 p-6 rounded-3xl"
                                style={{
                                  background: `linear-gradient(135deg, ${COLORS.cyan}35, ${COLORS.mint}45)`,
                                }}
                              >
                                <p
                                  className="text-xs uppercase tracking-widest font-bold"
                                  style={{
                                    color: COLORS.blue,
                                  }}
                                >
                                  Recommended Solution
                                </p>

                                <p className="mt-3 leading-relaxed font-medium">
                                  {item.solution}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="relative py-32 md:py-40 px-6"
        style={{ background: COLORS.softBlue }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            center
            eyebrow="12 · FAQ"
            title="Questions technicians ask"
            text="Use these questions to connect the theory of iPhone anatomy with practical diagnosis."
          />

          <div className="space-y-4 mt-20">
            {faqs.map((faq, index) => {
              const open = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
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
                    delay: index * 0.06,
                  }}
                  className="rounded-[28px] overflow-hidden border"
                  style={{
                    borderColor: open ? `${COLORS.blue}70` : COLORS.border,
                    background: COLORS.white,
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : index)}
                    className="w-full p-6 md:p-7 text-left flex items-center justify-between gap-6"
                  >
                    <span className="font-bold text-lg">{faq.question}</span>

                    <motion.span
                      animate={{
                        rotate: open ? 180 : 0,
                      }}
                      className="text-xl"
                      style={{ color: COLORS.blue }}
                    >
                      ↓
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {open && (
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
                        className="overflow-hidden"
                      >
                        <p
                          className="px-6 pb-7 md:px-7 leading-relaxed"
                          style={{
                            color: COLORS.textLight,
                          }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-32 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            center
            eyebrow="13 · Real Example"
            title="Take a photo"
            text="One simple action demonstrates how many different iPhone systems cooperate."
          />

          <div className="grid md:grid-cols-2 gap-5 mt-20">
            {realExample.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                  rotateY: index % 2 === 0 ? -8 : 8,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                className="rounded-[30px] overflow-hidden border"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  boxShadow: `0 20px 55px ${COLORS.blue}0C`,
                }}
              >
                <ImageCard
                  src={item.image}
                  alt={item.title}
                  className="rounded-none aspect-[16/7]"
                />

                <div className="p-7">
                  <span
                    className="text-sm font-black"
                    style={{ color: COLORS.blue }}
                  >
                    {item.number}
                  </span>

                  <h3 className="text-xl font-bold mt-4">{item.title}</h3>

                  <p
                    className="mt-3 leading-relaxed text-sm"
                    style={{ color: COLORS.textLight }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-10 p-8 md:p-12 rounded-[40px] border text-center"
            style={{
              borderColor: `${COLORS.blue}40`,
              background: `linear-gradient(135deg, ${COLORS.cyan}40, ${COLORS.white}, ${COLORS.mint}40)`,
            }}
          >
            <p className="text-lg md:text-2xl font-bold">
              User → Software → Processor → Hardware → Result
            </p>

            <p className="mt-4" style={{ color: COLORS.textLight }}>
              The iPhone is a connected technical system, not a collection of
              isolated parts.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden"
        style={{ background: COLORS.softBlue }}
      >
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.35, 1],
                  opacity: [0.15, 0.4, 0.15],
                  rotate: [0, 180, 360],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute w-[550px] h-[550px] rounded-full blur-[150px]"
          style={{
            background: `conic-gradient(${COLORS.blue}, ${COLORS.cyan}, ${COLORS.mint}, ${COLORS.blue})`,
          }}
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotateX: 20,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className="relative text-center max-w-4xl"
        >
          <motion.img
            src={IMAGES.iphone}
            alt="Modern iPhone"
            initial={{
              scale: 0.7,
              opacity: 0,
              rotateY: -30,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              rotateY: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            whileHover={{
              scale: 1.1,
              rotateY: 10,
            }}
            className="w-32 h-32 object-cover rounded-[35px] mx-auto mb-10 shadow-2xl"
          />

          <p
            className="uppercase tracking-[0.35em] text-xs font-semibold"
            style={{ color: COLORS.blue }}
          >
            Continue Exploring
          </p>

          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mt-6">
            Technology
            <br />
            <motion.span
              className="bg-clip-text text-transparent inline-block"
              animate={
                reduceMotion
                  ? {}
                  : {
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.text}, ${COLORS.blue})`,
                backgroundSize: "300% 100%",
              }}
            >
              is inside.
            </motion.span>
          </h2>

          <p
            className="max-w-xl mx-auto mt-7"
            style={{ color: COLORS.textLight }}
          >
            You now understand the iPhone as an integrated architecture of
            external components, internal hardware, sensors, security, software
            and functional systems.
          </p>

          <motion.div
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="inline-block mt-10"
          >
            <Link
              to="/mac"
              className="inline-flex px-8 py-4 rounded-full font-semibold"
              style={{
                background: `linear-gradient(135deg, ${COLORS.blue}, #159BE8)`,
                color: COLORS.white,
              }}
            >
              Explore Mac →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

export default Iphone;
