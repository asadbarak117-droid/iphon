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
    text.includes("silicon")
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
    text.includes("connectivity")
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
    text.includes("connector")
  ) {
    return IMAGES.connector;
  }

  if (
    text.includes("face id") ||
    text.includes("secure enclave") ||
    text.includes("security")
  ) {
    return IMAGES.security;
  }

  if (text.includes("taptic") || text.includes("haptic")) {
    return IMAGES.haptic;
  }

  if (
    text.includes("logic board") ||
    text.includes("motherboard") ||
    text.includes("emi") ||
    text.includes("frame")
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
    id: "security",
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

const hardware = [
  {
    id: "display",
    icon: "▤",
    category: "Display",
    group: "Hardware",
    title: "Display",
    definition:
      "The display is the hardware system that produces visual information for the user.",
    explanation:
      "Modern iPhones use advanced display technology together with protective glass and touch-sensing electronics.",
    components: ["Glass", "OLED", "Digitizer", "Controller"],
  },
  {
    id: "camera",
    icon: "◉",
    category: "Camera",
    group: "Hardware",
    title: "Camera System",
    definition:
      "The camera system captures light and converts it into digital photographs and video.",
    explanation:
      "A camera combines lenses, image sensors, stabilization, electronics and computational image processing.",
    components: ["Lens", "Sensor", "OIS", "Flash", "Controller"],
  },
  {
    id: "soc",
    icon: "◆",
    category: "Processing",
    group: "Hardware",
    title: "Apple Silicon",
    definition:
      "The Apple Silicon A-series chip performs major computing, graphics and machine-learning tasks.",
    explanation:
      "The system-on-chip integrates specialized processing systems including CPU, GPU and Neural Engine.",
    components: ["CPU", "GPU", "Neural Engine", "Media Engine"],
  },
  {
    id: "ram",
    icon: "▦",
    category: "Memory",
    group: "Hardware",
    title: "RAM",
    definition:
      "RAM is high-speed temporary memory used by iOS and active applications.",
    explanation:
      "RAM acts as a workspace where applications and system processes temporarily keep information.",
    components: ["Working Data", "Apps", "Processes", "Memory"],
  },
  {
    id: "storage",
    icon: "▥",
    category: "Storage",
    group: "Hardware",
    title: "Flash Storage",
    definition:
      "Flash storage is non-volatile memory used to permanently store software and user data.",
    explanation:
      "Photos, videos, applications, documents and iOS remain stored even when the iPhone is powered off.",
    components: ["NAND", "Controller", "System Data", "User Data"],
  },
  {
    id: "battery",
    icon: "▰",
    category: "Power",
    group: "Hardware",
    title: "Battery",
    definition:
      "The battery stores chemical energy and provides electrical power to the iPhone.",
    explanation:
      "It supplies energy to the processor, display, cameras, sensors, speakers and wireless systems.",
    components: ["Cell", "Connector", "Management", "Charging"],
  },
  {
    id: "connectivity",
    icon: "⌁",
    category: "Connectivity",
    group: "Hardware",
    title: "Wireless Systems",
    definition:
      "Wireless systems allow the iPhone to communicate with networks and nearby devices.",
    explanation:
      "Cellular, Wi-Fi, Bluetooth, GPS, NFC and UWB work together to provide wireless communication.",
    components: ["Cellular", "Wi-Fi", "Bluetooth", "GPS", "NFC", "UWB"],
  },
  {
    id: "audio",
    icon: ")))",
    category: "Audio",
    group: "Hardware",
    title: "Audio System",
    definition:
      "The audio system converts digital audio information into sound and captures sound through microphones.",
    explanation:
      "Speakers produce sound while microphones capture voice and environmental audio.",
    components: ["Speakers", "Earpiece", "Microphones", "Amplifiers"],
  },
  {
    id: "sensors",
    icon: "⌁",
    category: "Sensors",
    group: "Hardware",
    title: "Sensor System",
    definition:
      "Sensors detect movement, rotation, light, magnetic fields, pressure and other physical conditions.",
    explanation:
      "Sensors allow the iPhone to understand movement and environmental conditions.",
    components: ["Accelerometer", "Gyroscope", "Light", "Barometer"],
  },
  {
    id: "haptic",
    icon: "≈",
    category: "Haptic",
    group: "Hardware",
    title: "Taptic Engine",
    definition:
      "The Taptic Engine is a haptic component that creates precise physical feedback.",
    explanation:
      "It produces controlled vibrations that allow users to physically feel interactions.",
    components: ["Actuator", "Controller", "Precision Vibration"],
  },
  {
    id: "logic",
    icon: "▣",
    category: "Electronics",
    group: "Hardware",
    title: "Logic Board",
    definition:
      "The logic board is the main circuit board connecting many electronic components.",
    explanation:
      "Processor, memory, storage, power-management and communication systems are connected through the logic-board architecture.",
    components: ["SoC", "RAM", "Storage", "Power IC", "RF"],
  },
  {
    id: "security-hardware",
    icon: "◇",
    category: "Security",
    group: "Hardware",
    title: "Secure Enclave",
    definition:
      "The Secure Enclave is a dedicated security subsystem designed to protect sensitive authentication and cryptographic information.",
    explanation:
      "It helps isolate sensitive security operations from normal application processing.",
    components: ["Secure Processing", "Crypto", "Biometric Security"],
  },
];

const detailedComponents = [
  {
    category: "Display",
    title: "Front Glass",
    definition:
      "The transparent protective layer covering the front of the iPhone.",
    explanation:
      "It protects the display and touch system while allowing light and touch interaction to pass through.",
  },
  {
    category: "Display",
    title: "OLED",
    definition:
      "OLED is a display technology where individual pixels produce their own light.",
    explanation:
      "Because pixels can turn themselves off, OLED displays can produce deep blacks and high contrast.",
  },
  {
    category: "Display",
    title: "Touch Digitizer",
    definition:
      "The touch digitizer detects where and how the user touches the screen.",
    explanation:
      "It converts physical touches into digital coordinates that iOS can understand.",
  },
  {
    category: "Camera",
    title: "Camera Lens",
    definition:
      "A lens is an optical system that focuses incoming light onto an image sensor.",
    explanation:
      "The lens influences field of view, focus and how light enters the camera.",
  },
  {
    category: "Camera",
    title: "Image Sensor",
    definition:
      "An image sensor converts incoming light into electrical information.",
    explanation:
      "It provides raw image information that is later processed into photographs and video.",
  },
  {
    category: "Camera",
    title: "OIS",
    definition: "OIS means Optical Image Stabilization.",
    explanation:
      "The stabilization system compensates for small movements to reduce camera shake and blur.",
  },
  {
    category: "Camera",
    title: "LiDAR",
    definition: "LiDAR uses light to estimate distance and depth.",
    explanation:
      "On supported Pro models, LiDAR contributes to depth sensing, augmented reality and certain focusing tasks.",
  },
  {
    category: "Processing",
    title: "CPU",
    definition: "CPU means Central Processing Unit.",
    explanation:
      "The CPU executes general-purpose instructions required by iOS and applications.",
  },
  {
    category: "Processing",
    title: "GPU",
    definition: "GPU means Graphics Processing Unit.",
    explanation:
      "The GPU specializes in graphics calculations used by games, animations and visual workloads.",
  },
  {
    category: "Processing",
    title: "Neural Engine",
    definition:
      "The Neural Engine is specialized hardware designed to accelerate machine-learning operations.",
    explanation:
      "It can accelerate workloads involving image analysis, speech processing and other machine-learning tasks.",
  },
  {
    category: "Memory",
    title: "RAM",
    definition: "RAM is temporary high-speed working memory.",
    explanation:
      "It provides workspace for active applications and system processes.",
  },
  {
    category: "Storage",
    title: "NAND Flash",
    definition:
      "NAND flash is non-volatile memory used for permanent data storage.",
    explanation:
      "It stores iOS, applications, photos, videos and other information even when the phone is powered off.",
  },
  {
    category: "Power",
    title: "Lithium-ion Battery",
    definition:
      "A rechargeable battery technology that stores and releases electrical energy.",
    explanation:
      "The battery provides energy to the major electrical systems inside the iPhone.",
  },
  {
    category: "Power",
    title: "Power Management",
    definition:
      "Power-management hardware regulates and distributes electrical power.",
    explanation:
      "Different components require different electrical conditions, so power circuits control energy delivery.",
  },
  {
    category: "Connectivity",
    title: "Cellular Antenna",
    definition:
      "An antenna sends and receives radio-frequency signals used by cellular networks.",
    explanation:
      "The cellular system connects the iPhone to mobile networks for calls, messaging and internet access.",
  },
  {
    category: "Connectivity",
    title: "Wi-Fi",
    definition:
      "Wi-Fi is a wireless networking technology used to connect the iPhone to local networks.",
    explanation:
      "It allows the phone to communicate with routers and internet services.",
  },
  {
    category: "Connectivity",
    title: "Bluetooth",
    definition: "Bluetooth is a short-range wireless communication technology.",
    explanation:
      "It is commonly used for headphones, speakers, keyboards, watches and other nearby devices.",
  },
  {
    category: "Connectivity",
    title: "NFC",
    definition: "NFC means Near Field Communication.",
    explanation:
      "It enables very short-range communication and supports functions such as contactless payments and NFC tags.",
  },
  {
    category: "Sensors",
    title: "Accelerometer",
    definition:
      "An accelerometer detects changes in movement and acceleration.",
    explanation:
      "It helps determine movement and orientation and supports games, fitness applications and screen rotation.",
  },
  {
    category: "Sensors",
    title: "Gyroscope",
    definition: "A gyroscope detects rotational movement.",
    explanation:
      "It helps the iPhone understand how the device is rotating and supports games, AR and motion tracking.",
  },
  {
    category: "Sensors",
    title: "Proximity Sensor",
    definition:
      "A proximity sensor detects when an object is close to the phone.",
    explanation:
      "During calls, it can detect when the phone is near the face so the display can be turned off.",
  },
  {
    category: "Sensors",
    title: "Ambient Light Sensor",
    definition: "An ambient light sensor measures the surrounding light level.",
    explanation: "The information can be used to adjust display brightness.",
  },
  {
    category: "Sensors",
    title: "Barometer",
    definition: "A barometer measures atmospheric pressure.",
    explanation:
      "Pressure information can contribute to altitude estimation and location-related applications.",
  },
  {
    category: "Sensors",
    title: "Magnetometer",
    definition: "A magnetometer detects magnetic fields.",
    explanation:
      "It contributes to compass functionality and direction detection.",
  },
  {
    category: "Security",
    title: "Face ID",
    definition:
      "Face ID is Apple's biometric authentication system for supported iPhone models.",
    explanation:
      "The TrueDepth system uses infrared components and depth information to recognize facial structure.",
  },
  {
    category: "Security",
    title: "Secure Enclave",
    definition:
      "A dedicated security subsystem that protects sensitive authentication and cryptographic information.",
    explanation:
      "It helps isolate important security operations from the main application environment.",
  },
  {
    category: "Audio",
    title: "Speaker",
    definition:
      "A speaker converts electrical audio signals into physical sound waves.",
    explanation:
      "Speakers produce music, calls, notifications, videos and other audio.",
  },
  {
    category: "Audio",
    title: "Microphone",
    definition:
      "A microphone converts sound into electrical or digital information.",
    explanation:
      "Microphones are used for calls, recordings, video, Siri and other audio functions.",
  },
  {
    category: "Haptic",
    title: "Taptic Engine",
    definition: "The Taptic Engine is a precision haptic actuator.",
    explanation:
      "It produces controlled physical feedback so users can feel system interactions.",
  },
  {
    category: "Connectivity",
    title: "USB-C",
    definition:
      "USB-C is a physical connector used by newer iPhones for charging and data communication.",
    explanation:
      "Depending on the model, USB-C can support charging, data transfer and accessories.",
  },
  {
    category: "Connectivity",
    title: "MagSafe",
    definition: "MagSafe is Apple's magnetic alignment and accessory system.",
    explanation:
      "Magnets help accessories align with the charging area and attach securely to the back.",
  },
  {
    category: "Structure",
    title: "Internal Frame",
    definition:
      "The internal frame is the structural foundation supporting many components.",
    explanation:
      "It maintains the physical structure and provides mounting points for internal hardware.",
  },
  {
    category: "Structure",
    title: "EMI Shielding",
    definition:
      "EMI shielding helps protect electronic circuits from electromagnetic interference.",
    explanation:
      "Sensitive electronic components can use shielding materials to reduce unwanted interference.",
  },
];

const architectureFlow = [
  {
    number: "01",
    title: "User",
    image: IMAGES.iphone,
    text: "The user interacts through touch, voice, buttons and other inputs.",
  },
  {
    number: "02",
    title: "Application",
    image: IMAGES.technology,
    text: "The application receives the action and requests the required functionality.",
  },
  {
    number: "03",
    title: "iOS",
    image: IMAGES.technology,
    text: "The operating system manages the request through system services.",
  },
  {
    number: "04",
    title: "Hardware",
    image: IMAGES.processor,
    text: "The physical hardware performs the required operation.",
  },
  {
    number: "05",
    title: "Result",
    image: IMAGES.display,
    text: "The result returns through the display, speaker, camera or vibration.",
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
            "linear-gradient(to top, rgba(23,50,77,.42), transparent 65%)",
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

function Iphone() {
  const [selectedPart, setSelectedPart] = useState(hardware[0]);
  const [activeGroup, setActiveGroup] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

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
    () =>
      [...software, ...hardware, ...detailedComponents].map((item) => ({
        ...item,
        group: item.group || "Hardware",
        image: getSmartImage(item.title, item.category),
      })),
    [],
  );

  const groups = ["All", "Software", "Hardware"];

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

      const searchMatch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query) ||
        item.explanation.toLowerCase().includes(query);

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
            className="uppercase tracking-[0.4em] text-xs md:text-sm font-semibold"
            style={{
              color: COLORS.blue,
            }}
          >
            iPhone Architecture
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
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className="max-w-2xl mx-auto mt-8 text-base md:text-lg leading-relaxed"
            style={{
              color: COLORS.textLight,
            }}
          >
            Explore the history, software, hardware and internal architecture
            that transformed the iPhone into a powerful computing platform.
          </motion.p>

          <motion.a
            href="#history"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
            }}
            whileHover={{
              scale: 1.08,
              y: -5,
              boxShadow: `0 20px 60px ${COLORS.blue}55`,
            }}
            whileTap={{
              scale: 0.94,
            }}
            className="inline-flex mt-10 px-7 py-4 rounded-full font-semibold"
            style={{
              background: `linear-gradient(135deg, ${COLORS.blue}, #159BE8)`,
              color: COLORS.white,
            }}
          >
            Explore History ↓
          </motion.a>
        </div>
      </section>

      <section
        id="history"
        className="relative py-32 md:py-40 px-6 overflow-hidden"
        style={{
          background: COLORS.softBlue,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="01 · Evolution"
            title="The iPhone Story"
            text="Before learning what is inside an iPhone, understand how the architecture evolved from the original device into today's sophisticated mobile computer."
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
                        style={{
                          color: COLORS.blue,
                        }}
                      >
                        {item.year}
                      </span>

                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: COLORS.softBlue,
                          color: COLORS.blue,
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mt-5">{item.title}</h3>

                    <p
                      className="mt-3 leading-relaxed"
                      style={{
                        color: COLORS.textLight,
                      }}
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

      <section id="classification" className="relative py-32 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="02 · Smart Classification"
            title="How an iPhone is organized"
            text="The easiest way to understand an iPhone is to divide its architecture into software and hardware, then classify every system by its job."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-20">
            {[
              {
                title: "Software",
                image: IMAGES.technology,
                number: "01",
                text: "Instructions, operating systems, applications, APIs, frameworks, drivers and security software.",
              },
              {
                title: "Hardware",
                image: IMAGES.iphoneBack,
                number: "02",
                text: "Physical components including processors, memory, cameras, display, battery, sensors, audio and wireless systems.",
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
                viewport={{
                  once: true,
                }}
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
                    style={{
                      color: COLORS.blue,
                    }}
                  >
                    {item.number}
                  </span>

                  <h3 className="text-4xl font-black mt-3">{item.title}</h3>

                  <p
                    className="mt-4 leading-relaxed"
                    style={{
                      color: COLORS.textLight,
                    }}
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
        style={{
          background: COLORS.softBlue,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="03 · Software"
            title="Software = instructions"
            text="Software is the collection of programs, instructions and data that tells the iPhone's physical hardware what to do."
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
                    <span
                      className="text-3xl"
                      style={{
                        color: COLORS.blue,
                      }}
                    >
                      {item.icon}
                    </span>

                    <span
                      className="text-xs font-bold"
                      style={{
                        color: COLORS.textLight,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p
                    className="text-xs uppercase tracking-widest mt-7 font-semibold"
                    style={{
                      color: COLORS.blue,
                    }}
                  >
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                  <p className="font-semibold text-sm mt-5">Definition</p>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{
                      color: COLORS.textLight,
                    }}
                  >
                    {item.definition}
                  </p>

                  <p className="font-semibold text-sm mt-5">Explanation</p>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{
                      color: COLORS.textLight,
                    }}
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
                          <span
                            style={{
                              color: COLORS.blue,
                            }}
                          >
                            →
                          </span>
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

      <section className="relative py-32 md:py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            center
            eyebrow="04 · Architecture"
            title="Software → Hardware"
            text="Every interaction travels through multiple layers before the physical hardware produces a result."
          />

          <div className="relative mt-20">
            <div
              className="hidden md:block absolute left-0 right-0 top-1/2 h-px"
              style={{
                background: `${COLORS.blue}40`,
              }}
            />

            <div className="grid md:grid-cols-5 gap-4 relative">
              {architectureFlow.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.9,
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
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.04,
                  }}
                  className="relative rounded-3xl overflow-hidden border text-center"
                  style={{
                    borderColor: COLORS.border,
                    background: COLORS.white,
                    boxShadow: `0 20px 50px ${COLORS.blue}10`,
                  }}
                >
                  <ImageCard
                    src={item.image}
                    alt={item.title}
                    className="rounded-none aspect-[16/10]"
                  />

                  <div className="p-6">
                    <span
                      className="text-xs font-bold"
                      style={{
                        color: COLORS.blue,
                      }}
                    >
                      {item.number}
                    </span>

                    <h3 className="text-xl font-bold mt-4">{item.title}</h3>

                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{
                        color: COLORS.textLight,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>

                  {index !== architectureFlow.length - 1 && (
                    <motion.div
                      animate={
                        reduceMotion
                          ? {}
                          : {
                              x: [0, 10, 0],
                              opacity: [0.4, 1, 0.4],
                            }
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-xl font-bold"
                      style={{
                        color: COLORS.blue,
                      }}
                    >
                      →
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="hardware"
        className="relative py-32 md:py-40 px-6"
        style={{
          background: COLORS.softBlue,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="05 · Hardware"
            title="Hardware = physical components"
            text="Hardware is everything physical inside and outside the iPhone. It performs the operations instructed by software."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
            {hardware.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 60,
                  rotateX: 10,
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
                onClick={() => setSelectedPart(item)}
                className="cursor-pointer rounded-[32px] overflow-hidden border"
                style={{
                  borderColor:
                    selectedPart.id === item.id
                      ? `${COLORS.blue}90`
                      : COLORS.border,
                  background: COLORS.white,
                  boxShadow:
                    selectedPart.id === item.id
                      ? `0 30px 80px ${COLORS.blue}20`
                      : `0 20px 55px ${COLORS.blue}0C`,
                }}
              >
                <ImageCard
                  src={getSmartImage(item.title, item.category)}
                  alt={item.title}
                  className="rounded-none"
                />

                <div className="p-7">
                  <div className="flex justify-between">
                    <span
                      className="text-3xl"
                      style={{
                        color: COLORS.blue,
                      }}
                    >
                      {item.icon}
                    </span>

                    <span
                      className="text-xs"
                      style={{
                        color: COLORS.textLight,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p
                    className="text-xs uppercase tracking-widest mt-8 font-semibold"
                    style={{
                      color: COLORS.blue,
                    }}
                  >
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-bold mt-2">{item.title}</h3>

                  <p className="font-semibold text-sm mt-5">Definition</p>

                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{
                      color: COLORS.textLight,
                    }}
                  >
                    {item.definition}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.components.map((component) => (
                      <span
                        key={component}
                        className="text-xs px-3 py-1.5 rounded-full"
                        style={{
                          background: COLORS.softBlue,
                          color: COLORS.textLight,
                        }}
                      >
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="anatomy"
        className="relative min-h-screen py-32 md:py-40 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            center
            eyebrow="06 · Interactive Anatomy"
            title="What's inside?"
            text="Select a hardware system and inspect its role inside the iPhone."
          />

          <div className="grid lg:grid-cols-[1fr_320px_1fr] gap-10 items-center mt-20">
            <div className="space-y-4">
              {hardware
                .filter((_, index) => index % 2 === 0)
                .slice(0, 6)
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
                        src={getSmartImage(part.title, part.category)}
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
                    src={getSmartImage(
                      selectedPart.title,
                      selectedPart.category,
                    )}
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
              {hardware
                .filter((_, index) => index % 2 !== 0)
                .slice(0, 6)
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
                        src={getSmartImage(part.title, part.category)}
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
              className="max-w-4xl mx-auto mt-16 rounded-[36px] overflow-hidden border"
              style={{
                borderColor: `${COLORS.blue}35`,
                background: COLORS.white,
                boxShadow: `0 30px 80px ${COLORS.blue}12`,
              }}
            >
              <div className="grid md:grid-cols-[280px_1fr]">
                <img
                  src={getSmartImage(selectedPart.title, selectedPart.category)}
                  alt={selectedPart.title}
                  className="w-full h-full min-h-[250px] object-cover"
                />

                <div className="p-8">
                  <p
                    className="text-xs uppercase tracking-widest font-semibold"
                    style={{
                      color: COLORS.blue,
                    }}
                  >
                    Selected Component
                  </p>

                  <h3 className="text-3xl font-bold mt-3">
                    {selectedPart.title}
                  </h3>

                  <p className="font-semibold mt-6">Definition</p>

                  <p
                    className="mt-2 leading-relaxed"
                    style={{
                      color: COLORS.textLight,
                    }}
                  >
                    {selectedPart.definition}
                  </p>

                  <p className="font-semibold mt-6">Explanation</p>

                  <p
                    className="mt-2 leading-relaxed"
                    style={{
                      color: COLORS.textLight,
                    }}
                  >
                    {selectedPart.explanation}
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
        style={{
          background: COLORS.softBlue,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            eyebrow="07 · Deep Anatomy"
            title="Explore every layer"
            text="Search the architecture and move between software, hardware and individual technical categories."
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
                placeholder="Search storage, camera, CPU, battery..."
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
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
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
            <p
              className="text-sm"
              style={{
                color: COLORS.textLight,
              }}
            >
              {filteredComponents.length} systems found
            </p>

            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-sm font-bold"
                style={{
                  color: COLORS.blue,
                }}
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
                        style={{
                          color: COLORS.blue,
                        }}
                      >
                        {item.category}
                      </span>

                      <span
                        className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full"
                        style={{
                          background:
                            item.group === "Software"
                              ? `${COLORS.cyan}55`
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
                        style={{
                          color: COLORS.textLight,
                        }}
                      >
                        {item.definition}
                      </p>
                    </div>

                    <div className="mt-6">
                      <p className="font-semibold text-sm">Explanation</p>

                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{
                          color: COLORS.textLight,
                        }}
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

              <p
                className="mt-3"
                style={{
                  color: COLORS.textLight,
                }}
              >
                Try searching for CPU, camera, storage, battery, display or
                another system.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="relative py-32 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            center
            eyebrow="08 · Real Example"
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
                    style={{
                      color: COLORS.blue,
                    }}
                  >
                    {item.number}
                  </span>

                  <h3 className="text-xl font-bold mt-4">{item.title}</h3>

                  <p
                    className="mt-3 leading-relaxed text-sm"
                    style={{
                      color: COLORS.textLight,
                    }}
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
              Software tells the hardware what to do.
            </p>

            <p
              className="mt-3"
              style={{
                color: COLORS.textLight,
              }}
            >
              Hardware performs the operation and returns the result to
              software.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden"
        style={{
          background: COLORS.softBlue,
        }}
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
            style={{
              color: COLORS.blue,
            }}
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
            style={{
              color: COLORS.textLight,
            }}
          >
            You now understand how iPhone history, software and hardware connect
            together to create a modern mobile computer.
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
