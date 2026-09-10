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

import {
  Activity,
  Aperture,
  Battery,
  BatteryCharging,
  Box,
  Camera,
  CheckCircle2,
  ChevronDown,
  CircuitBoard,
  Cpu,
  Database,
  Fan,
  Fingerprint,
  HardDrive,
  Headphones,
  Keyboard,
  Layers3,
  Lightbulb,
  Lock,
  MemoryStick,
  Mic,
  Monitor,
  MousePointer2,
  Network,
  Power,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Speaker,
  Thermometer,
  Usb,
  Wifi,
  Wrench,
  X,
} from "lucide-react";

const COLORS = {
  blue: "#30AFFF",
  cyan: "#92EEFF",
  green: "#D8FFC5",
  mint: "#C4F7CA",
  white: "#FFFFFF",
  soft: "#F4FBFF",
  softBlue: "#EAF8FF",
  text: "#10202B",
  textLight: "#5B7180",
  border: "#DCECF3",
};

const EASE = [0.16, 1, 0.3, 1];

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

const history = [
  {
    year: "1984",
    title: "The Macintosh Era",
    description:
      "Apple's original Macintosh introduced a graphical personal computer built around an integrated relationship between processor, memory, storage, display, keyboard, pointing device and software.",
    details:
      "Although the original Macintosh was not a notebook, it established important Apple design principles that later influenced portable Macs: integrated hardware and software, compact construction, graphical interaction and human-centered industrial design.",
    icon: Monitor,
  },
  {
    year: "1991",
    title: "PowerBook Generation",
    description:
      "The PowerBook generation established a much more recognizable portable-computer architecture with a display, keyboard and pointing device arranged into a notebook form.",
    details:
      "Apple continued improving portable computing through better displays, processors, batteries, input devices and increasingly compact internal layouts.",
    icon: Monitor,
  },
  {
    year: "2006",
    title: "Intel Transition",
    description:
      "Apple transitioned the Mac platform from PowerPC processors to Intel processors, beginning a major new phase in Mac hardware architecture.",
    details:
      "The Intel transition provided higher performance and broad software compatibility while Apple continued developing its own operating system, industrial design and system integration.",
    icon: Cpu,
  },
  {
    year: "2012",
    title: "Retina MacBook Pro",
    description:
      "Retina displays introduced much higher pixel density and transformed expectations for laptop display quality.",
    details:
      "This generation also accelerated thinner construction, solid-state storage, integrated batteries and increasingly dense internal engineering.",
    icon: Monitor,
  },
  {
    year: "2020",
    title: "Apple Silicon",
    description:
      "Apple introduced its own Mac processors beginning with M1, moving the Mac platform away from Intel-based processors.",
    details:
      "Apple Silicon integrates CPU cores, GPU cores, Neural Engine, media engines, memory controllers and other functions into a highly integrated system-on-chip architecture.",
    icon: CircuitBoard,
  },
];

const software = [
  {
    title: "macOS",
    category: "Operating System",
    icon: Layers3,
    description:
      "macOS is the operating system that manages MacBook hardware and provides the environment where applications operate.",
    details:
      "It manages processes, memory, files, networking, security, permissions, user accounts, drivers and communication with hardware.",
  },
  {
    title: "Graphical User Interface",
    category: "User Interface",
    icon: Monitor,
    description:
      "The graphical interface allows users to interact with applications, windows, files, menus and system controls.",
    details:
      "Human actions such as clicking, typing and gestures are translated into software operations handled by macOS.",
  },
  {
    title: "Applications",
    category: "Software",
    icon: Database,
    description:
      "Applications perform user tasks such as programming, browsing, communication, document editing and media creation.",
    details:
      "Applications normally request system resources through macOS and its frameworks instead of directly controlling hardware.",
  },
  {
    title: "Frameworks",
    category: "Software Platform",
    icon: Box,
    description:
      "Frameworks provide reusable services and APIs that developers use to build Mac applications.",
    details:
      "They provide capabilities for graphics, networking, multimedia, machine learning, interfaces and system services.",
  },
  {
    title: "APIs",
    category: "Communication Layer",
    icon: Network,
    description:
      "Application Programming Interfaces provide structured ways for software components to communicate.",
    details:
      "APIs allow applications to request operating-system services without needing to understand low-level hardware implementation.",
  },
  {
    title: "Drivers",
    category: "Hardware Interface",
    icon: SlidersHorizontal,
    description:
      "Drivers and system-level components allow macOS to communicate with hardware.",
    details:
      "They help the operating system work with displays, storage, audio, networking, input devices and external peripherals.",
  },
  {
    title: "Firmware",
    category: "Low-Level Software",
    icon: CircuitBoard,
    description:
      "Firmware provides low-level instructions required for hardware initialization and operation.",
    details:
      "Firmware operates close to the hardware and is important during startup, device initialization and security processes.",
  },
  {
    title: "Security",
    category: "Protection",
    icon: ShieldCheck,
    description:
      "Mac security combines operating-system protections with hardware-backed security mechanisms.",
    details:
      "Security layers can include secure boot, encryption, permissions, application signing, sandboxing and dedicated security hardware.",
  },
];

const externalAnatomy = [
  {
    title: "Display",
    category: "Display",
    icon: Monitor,
    image: IMAGES.mac,
    location: "Upper section of the MacBook lid",
    function:
      "The display presents text, images, applications, video, graphics and the macOS interface to the user.",
    relationship:
      "Graphics and display-processing systems generate image information that is transmitted to the display panel.",
    technical:
      "MacBook generations use different display technologies. Depending on model, Apple has used Retina LCD and Liquid Retina XDR displays with different backlighting systems.",
  },
  {
    title: "Display Frame",
    category: "Structure",
    icon: Box,
    image: IMAGES.mac,
    location: "Around the display panel",
    function: "The display frame supports and protects the screen assembly.",
    relationship:
      "It works with the lid, hinges, camera system and display panel to form the upper structure.",
    technical:
      "Bezel dimensions and camera placement vary between MacBook generations.",
  },
  {
    title: "Aluminum Chassis",
    category: "Structure",
    icon: Box,
    image: IMAGES.mac,
    location: "Main body and display enclosure",
    function:
      "The chassis protects internal electronics and provides the structural body of the notebook.",
    relationship:
      "It houses the logic board, battery, keyboard, trackpad, speakers and other components.",
    technical:
      "Precision-machined aluminum provides rigidity, relatively low weight and useful thermal conductivity.",
  },
  {
    title: "Keyboard",
    category: "Input",
    icon: Keyboard,
    image: IMAGES.keyboard,
    location: "Lower section of the top case",
    function:
      "The keyboard converts key presses into electrical input signals.",
    relationship:
      "The input controller and macOS interpret those signals as characters, shortcuts and commands.",
    technical:
      "Modern MacBooks generally use scissor-switch keyboards. Some older generations used butterfly mechanisms.",
  },
  {
    title: "Trackpad",
    category: "Input",
    icon: MousePointer2,
    image: IMAGES.macBottom,
    location: "Below the keyboard",
    function:
      "The trackpad provides pointer control, clicking, scrolling and multi-touch gestures.",
    relationship:
      "Trackpad input is processed by the input system and interpreted by macOS.",
    technical:
      "Many MacBooks use Force Touch and haptic feedback instead of a conventional mechanical click.",
  },
  {
    title: "Camera",
    category: "Camera",
    icon: Camera,
    image: IMAGES.camera,
    location: "Top section of the display",
    function:
      "The camera captures light and converts it into digital images and video.",
    relationship:
      "Camera data is processed by imaging hardware and software before applications receive the resulting frames.",
    technical:
      "Camera resolution and image-processing capabilities differ between MacBook generations.",
  },
  {
    title: "Speakers",
    category: "Audio",
    icon: Speaker,
    image: IMAGES.mac,
    location: "Along the keyboard and chassis area",
    function:
      "Speakers convert electrical audio signals into physical sound waves.",
    relationship:
      "macOS and the audio subsystem process digital audio before it reaches the speaker amplifiers and drivers.",
    technical:
      "Higher-end MacBook Pro models use more advanced multi-speaker systems and support spatial-audio features.",
  },
  {
    title: "Microphones",
    category: "Audio",
    icon: Mic,
    image: IMAGES.mac,
    location: "Integrated into the chassis and display area",
    function:
      "Microphones capture surrounding sound and convert acoustic energy into electrical signals.",
    relationship:
      "Audio processing combines microphone signals for voice capture, noise reduction and communication applications.",
    technical:
      "Multiple microphones can improve directional voice capture and audio processing.",
  },
  {
    title: "MagSafe Charging",
    category: "Power",
    icon: BatteryCharging,
    image: IMAGES.ports,
    location: "Side edge of compatible MacBook models",
    function:
      "MagSafe provides a magnetic charging connection on supported MacBook models.",
    relationship:
      "Incoming electrical power is delivered to charging and power-management circuitry before being distributed to the battery and system.",
    technical:
      "MagSafe availability and connector generation vary by MacBook model.",
  },
  {
    title: "USB-C / Thunderbolt",
    category: "Ports",
    icon: Usb,
    image: IMAGES.ports,
    location: "Side edges of the chassis",
    function:
      "USB-C and Thunderbolt ports support data, displays, charging and external peripherals depending on the model.",
    relationship:
      "Ports connect external devices to high-speed controllers and communication pathways on the logic board.",
    technical:
      "Thunderbolt can provide high-bandwidth connections for displays, storage, docks and other peripherals.",
  },
  {
    title: "Headphone Jack",
    category: "Audio",
    icon: Headphones,
    image: IMAGES.ports,
    location: "Side edge on supported models",
    function:
      "Provides a wired audio connection for compatible headphones and audio equipment.",
    relationship:
      "The audio subsystem converts and routes digital audio to the physical connector.",
    technical: "Availability and capabilities vary by model.",
  },
];

const internalAnatomy = [
  {
    title: "Logic Board",
    category: "Core System",
    icon: CircuitBoard,
    image: IMAGES.internals,
    location: "Inside the main chassis",
    function:
      "The logic board is the primary electronic platform connecting major MacBook systems.",
    relationship:
      "It connects processing, memory architecture, storage, power management, ports, wireless systems, sensors and other controllers.",
    technical:
      "Apple Silicon integrates many traditionally separate functions into the system-on-chip, allowing a compact architecture.",
  },
  {
    title: "Apple Silicon",
    category: "Processing",
    icon: Cpu,
    image: IMAGES.internals,
    location: "Mounted on the logic board",
    function:
      "Apple Silicon performs general computing, graphics, media processing and machine-learning workloads.",
    relationship:
      "It works closely with unified memory, storage, display engines, media engines and security systems.",
    technical:
      "Apple Silicon combines multiple specialized processing units inside one highly integrated system-on-chip.",
  },
  {
    title: "CPU",
    category: "Processing",
    icon: Cpu,
    image: IMAGES.internals,
    location: "Inside the Apple Silicon SoC on supported models",
    function: "The CPU executes general-purpose program instructions.",
    relationship:
      "It coordinates software operations and communicates with memory and specialized accelerators.",
    technical:
      "Apple Silicon combines high-performance and efficiency CPU cores to balance speed and energy consumption.",
  },
  {
    title: "GPU",
    category: "Processing",
    icon: Aperture,
    image: IMAGES.internals,
    location: "Integrated into Apple Silicon on supported models",
    function:
      "The GPU accelerates graphics rendering, visual effects and parallel workloads.",
    relationship:
      "The GPU accesses unified memory and communicates with display and media-processing systems.",
    technical:
      "Apple Silicon GPUs are integrated into the SoC instead of being separate desktop-style graphics cards.",
  },
  {
    title: "Neural Engine",
    category: "Processing",
    icon: Activity,
    image: IMAGES.internals,
    location: "Integrated into Apple Silicon",
    function:
      "The Neural Engine accelerates compatible machine-learning workloads.",
    relationship:
      "Supported applications and system services can use specialized neural hardware through Apple's software frameworks.",
    technical:
      "Dedicated machine-learning hardware can perform certain AI workloads more efficiently than general-purpose CPU execution.",
  },
  {
    title: "Unified Memory",
    category: "Memory",
    icon: MemoryStick,
    image: IMAGES.internals,
    location: "Integrated into the Apple Silicon memory architecture",
    function:
      "Unified memory stores data and instructions used by processing units.",
    relationship:
      "CPU and GPU can access a shared memory architecture instead of maintaining completely separate memory pools.",
    technical:
      "Shared memory can reduce unnecessary data copying between CPU and GPU workloads.",
  },
  {
    title: "SSD Storage",
    category: "Storage",
    icon: HardDrive,
    image: IMAGES.macBottom,
    location: "Internal storage subsystem",
    function: "The SSD permanently stores macOS, applications and user data.",
    relationship:
      "macOS reads information from storage into memory when applications need it and writes modified data back to storage.",
    technical:
      "Modern MacBooks use flash-based storage. Exact storage architecture varies by model and generation.",
  },
  {
    title: "Battery Cells",
    category: "Power",
    icon: Battery,
    image: IMAGES.macBottom,
    location: "Large portion of the lower chassis",
    function: "Battery cells store electrical energy for portable operation.",
    relationship:
      "The battery works with charging circuits and power-management hardware to provide regulated electrical energy.",
    technical:
      "MacBooks use rechargeable lithium-based battery technology with capacity and cell layouts varying by model.",
  },
  {
    title: "Power Management",
    category: "Power",
    icon: Power,
    image: IMAGES.internals,
    location: "Power-management circuitry on the logic board",
    function:
      "Power-management circuitry regulates electrical energy entering and moving through the computer.",
    relationship:
      "It coordinates charger input, battery charging and power delivery to different system domains.",
    technical:
      "Stable power regulation is essential for safe charging, efficient operation and reliable performance.",
  },
  {
    title: "Cooling System",
    category: "Thermal",
    icon: Fan,
    image: IMAGES.internals,
    location: "Inside the chassis around heat-producing components",
    function:
      "The cooling system removes heat generated by the processor and other electronics.",
    relationship:
      "Heat travels through thermal interfaces and heat-spreading structures toward active or passive cooling components.",
    technical:
      "Some MacBook models use fans while fanless models rely primarily on passive thermal dissipation.",
  },
  {
    title: "Heat Spreader",
    category: "Thermal",
    icon: Thermometer,
    image: IMAGES.internals,
    location: "Near major heat-producing components",
    function:
      "Heat-spreading components transfer and distribute thermal energy away from processors.",
    relationship:
      "They work with thermal interface materials, heat pipes and fans where applicable.",
    technical:
      "Effective thermal transfer helps maintain performance and reduce thermal throttling.",
  },
  {
    title: "Wireless Antennas",
    category: "Connectivity",
    icon: Wifi,
    image: IMAGES.internals,
    location: "Integrated into the display and chassis structure",
    function: "Antennas transmit and receive wireless radio signals.",
    relationship:
      "They work with Wi-Fi and Bluetooth radio hardware to provide wireless communication.",
    technical:
      "Antenna placement is designed around the enclosure and radio-frequency requirements.",
  },
  {
    title: "Sensors",
    category: "Sensors",
    icon: Activity,
    image: IMAGES.internals,
    location: "Distributed throughout the system",
    function: "Sensors detect environmental and device conditions.",
    relationship:
      "Sensor data can be used by firmware, macOS and hardware-management systems.",
    technical:
      "Depending on model, sensors can support lid detection, ambient-light management and thermal monitoring.",
  },
  {
    title: "Security Hardware",
    category: "Security",
    icon: Fingerprint,
    image: IMAGES.internals,
    location: "Integrated into the security architecture",
    function:
      "Hardware-backed security protects authentication and sensitive cryptographic operations.",
    relationship:
      "Touch ID and secure hardware communicate with macOS security services while isolating sensitive operations.",
    technical:
      "Modern Apple Silicon Macs include dedicated security functionality integrated into the platform.",
  },
];

const functionalFlows = [
  {
    title: "Power Flow",
    icon: BatteryCharging,
    steps: [
      "Battery / Charger",
      "Power Management",
      "Voltage Regulation",
      "Apple Silicon",
      "Memory + Storage",
      "Display + Peripherals",
    ],
    description:
      "Electrical energy enters through the battery or charger and is regulated before being delivered to system components.",
  },
  {
    title: "Computing Flow",
    icon: Cpu,
    steps: [
      "Application",
      "macOS",
      "CPU",
      "Unified Memory",
      "GPU / Accelerators",
      "Output",
    ],
    description:
      "Software instructions are managed by macOS and executed by appropriate processing units using memory resources.",
  },
  {
    title: "Storage Flow",
    icon: HardDrive,
    steps: [
      "Application",
      "macOS File System",
      "Storage Controller",
      "SSD",
      "Flash Storage",
    ],
    description:
      "Files are translated into storage operations and written to persistent flash storage.",
  },
  {
    title: "Display Flow",
    icon: Monitor,
    steps: [
      "Application",
      "Graphics API",
      "CPU / GPU",
      "Display Engine",
      "Display Panel",
      "Human Vision",
    ],
    description:
      "Visual information travels from software through graphics processing and display hardware before becoming visible.",
  },
  {
    title: "Thermal Flow",
    icon: Thermometer,
    steps: [
      "CPU / GPU Workload",
      "Heat Generation",
      "Thermal Interface",
      "Heat Spreader",
      "Fan / Passive Cooling",
      "Heat Dissipation",
    ],
    description:
      "Processing creates heat. Thermal components transfer that heat away from critical hardware and release it into the environment.",
  },
];

const systemExamples = [
  {
    title: "Watching a Video",
    icon: Monitor,
    flow: "Storage → Memory → Media Engine → GPU → Display + Speakers",
    text: "Video data is read from storage, loaded into memory and decoded using appropriate media-processing hardware before being displayed and played through the audio system.",
  },
  {
    title: "Opening a Website",
    icon: Wifi,
    flow: "Wi-Fi → Network Stack → Browser → CPU/GPU → Display",
    text: "Wireless hardware receives network data, macOS networking services deliver it to the browser and the browser processes and renders the webpage.",
  },
  {
    title: "Saving a File",
    icon: HardDrive,
    flow: "Application → macOS → File System → Storage Controller → SSD",
    text: "The application requests a write operation. macOS manages the file-system operation and sends storage commands to persistent flash storage.",
  },
  {
    title: "Playing Music",
    icon: Speaker,
    flow: "Application → Audio System → Audio Processing → Speakers",
    text: "Digital audio is processed and converted into electrical signals that the speaker system turns into physical sound waves.",
  },
  {
    title: "Authenticating",
    icon: Fingerprint,
    flow: "Touch ID → Secure Hardware → Authentication Service → macOS",
    text: "A supported biometric authentication workflow uses dedicated security hardware and system services to verify authorization.",
  },
  {
    title: "Running Code",
    icon: Cpu,
    flow: "Code → Compiler/Runtime → CPU → Memory → Storage/Output",
    text: "Programming tools translate or execute instructions while the CPU uses memory and storage resources to complete the task.",
  },
];

const sensorsSecurity = [
  {
    title: "Touch ID",
    icon: Fingerprint,
    description:
      "Touch ID allows supported MacBook models to authenticate users with a fingerprint sensor integrated into the power button.",
    function:
      "It can unlock the Mac and authorize supported purchases and system actions.",
    relationship:
      "Touch ID works with secure hardware and macOS authentication services.",
  },
  {
    title: "Ambient Light Sensor",
    icon: Lightbulb,
    description:
      "An ambient light sensor measures surrounding environmental light.",
    function:
      "The system can use this information to automatically adjust display brightness and related behavior.",
    relationship:
      "Sensor information is provided to system software, which can modify display settings.",
  },
  {
    title: "Lid / Hall Sensor",
    icon: Box,
    description:
      "Magnetic or Hall-effect sensing can determine the position of the display lid.",
    function:
      "It helps the system recognize whether the lid is open or closed.",
    relationship:
      "Lid-state information can influence sleep, wake and power-management behavior.",
  },
  {
    title: "Thermal Sensors",
    icon: Thermometer,
    description:
      "Temperature sensors monitor thermal conditions inside the computer.",
    function:
      "Thermal data can influence performance management, cooling behavior and safety.",
    relationship:
      "Thermal information is used by system-management hardware and software.",
  },
  {
    title: "Secure Enclave",
    icon: Lock,
    description:
      "The Secure Enclave is a dedicated security subsystem used for sensitive authentication and cryptographic operations on supported Apple platforms.",
    function:
      "It helps protect cryptographic keys and security-sensitive information.",
    relationship:
      "It works with Touch ID, encryption and other security mechanisms.",
  },
  {
    title: "Secure Boot",
    icon: ShieldCheck,
    description:
      "Secure boot mechanisms help verify trusted software during startup.",
    function:
      "They help protect the system from unauthorized or modified startup software.",
    relationship:
      "Boot security operates across hardware, firmware and operating-system layers.",
  },
];

const durability = [
  {
    title: "Chassis Material",
    icon: Box,
    description:
      "The aluminum enclosure provides structural rigidity and contributes to thermal behavior.",
    analysis:
      "The metal enclosure gives the MacBook a rigid and premium construction, but dents and scratches can remain visible because the exterior is part of the structural body.",
  },
  {
    title: "Display Durability",
    icon: Monitor,
    description:
      "The display balances thin construction, high image quality and mechanical protection.",
    analysis:
      "Pressure, impact, debris and improper handling can damage the display. The lid should be opened and closed without excessive force.",
  },
  {
    title: "Keyboard",
    icon: Keyboard,
    description:
      "The keyboard is designed for repeated daily typing and interaction.",
    analysis:
      "Dust, liquid exposure and physical damage can cause key failures. Some older butterfly-keyboard generations had notable reliability problems.",
  },
  {
    title: "Trackpad",
    icon: MousePointer2,
    description:
      "The Force Touch trackpad provides accurate pointer and gesture control.",
    analysis:
      "It is generally durable but can be affected by liquid, physical damage or failures in the underlying input system.",
  },
  {
    title: "Battery",
    icon: Battery,
    description: "The rechargeable battery provides portable electrical power.",
    analysis:
      "Battery capacity naturally decreases with use. Heat, workload, charging behavior and age can influence long-term battery health.",
  },
  {
    title: "Thermal Design",
    icon: Thermometer,
    description:
      "Thermal architecture controls how efficiently the system manages heat.",
    analysis:
      "Fan-equipped models can move more air during sustained workloads, while fanless models rely more heavily on passive heat dissipation.",
  },
  {
    title: "Ports",
    icon: Usb,
    description:
      "Ports provide physical connections for chargers, displays, storage and accessories.",
    analysis:
      "Repeated insertion can mechanically wear connectors. Dust and debris can also interfere with reliable connections.",
  },
  {
    title: "Structural Design",
    icon: Layers3,
    description:
      "MacBooks use a highly integrated internal architecture to achieve compact designs.",
    analysis:
      "Integration can reduce thickness and improve efficiency but can also make repairs more complex and limit user upgradeability.",
  },
];

const troubleshooting = [
  {
    problem: "MacBook does not turn on",
    causes: [
      "Battery completely discharged",
      "Charger or cable problem",
      "Power-management issue",
      "Display may be inactive while the system is running",
      "Hardware failure",
    ],
    diagnostics: [
      "Connect a known-good compatible charger.",
      "Allow the battery time to charge.",
      "Disconnect unnecessary accessories.",
      "Try powering on again.",
      "Check whether the display is receiving power.",
    ],
    solution:
      "Use a compatible charger and cable, allow sufficient charging time, disconnect unnecessary peripherals and retry. Persistent no-power conditions may require professional hardware diagnostics.",
  },
  {
    problem: "MacBook does not charge",
    causes: [
      "Damaged charging cable",
      "Faulty adapter",
      "Debris in charging port",
      "Battery health problem",
      "Power-management issue",
    ],
    diagnostics: [
      "Try another compatible power adapter.",
      "Try another compatible cable.",
      "Try another electrical outlet.",
      "Inspect the connector and port for visible debris.",
      "Check battery information in macOS.",
    ],
    solution:
      "Use a compatible charger and cable and check the charging port carefully. Persistent charging problems should be professionally diagnosed.",
  },
  {
    problem: "Battery drains quickly",
    causes: [
      "High CPU or GPU workload",
      "High display brightness",
      "Background applications",
      "Battery aging",
      "Poor network conditions",
    ],
    diagnostics: [
      "Open Activity Monitor.",
      "Check CPU and energy usage.",
      "Review battery settings.",
      "Identify applications using unusual resources.",
      "Check battery health information.",
    ],
    solution:
      "Reduce unnecessary workloads, optimize brightness and power settings, update software and consider battery service if battery health is poor.",
  },
  {
    problem: "MacBook overheats",
    causes: [
      "Sustained processor workload",
      "Blocked ventilation",
      "High ambient temperature",
      "Background process",
      "Thermal-system problem",
    ],
    diagnostics: [
      "Check Activity Monitor for high CPU usage.",
      "Close unnecessary applications.",
      "Check whether ventilation is obstructed.",
      "Observe whether heat occurs only during heavy workloads.",
      "Check unusual fan behavior on fan-equipped models.",
    ],
    solution:
      "Reduce unnecessary workloads, keep ventilation clear and use the Mac on a suitable hard surface. Persistent abnormal heating should be inspected.",
  },
  {
    problem: "Display problems",
    causes: [
      "Brightness settings",
      "Software issue",
      "External display configuration",
      "Display hardware fault",
      "Physical damage",
    ],
    diagnostics: [
      "Adjust brightness.",
      "Restart the Mac.",
      "Check display settings.",
      "Disconnect external displays.",
      "Observe whether the problem appears during startup.",
    ],
    solution:
      "Check settings, restart and update macOS. Persistent lines, flickering, artifacts or physical damage may require hardware diagnostics.",
  },
  {
    problem: "Keyboard problems",
    causes: [
      "Dust beneath keys",
      "Liquid exposure",
      "Software input issue",
      "Physical key damage",
      "Keyboard hardware failure",
    ],
    diagnostics: [
      "Test multiple keys.",
      "Test different applications.",
      "Restart the system.",
      "Check keyboard settings.",
      "Inspect for visible physical or liquid damage.",
    ],
    solution:
      "Verify software settings and avoid forcing damaged keys. Liquid or hardware damage should be professionally inspected.",
  },
  {
    problem: "Trackpad problems",
    causes: [
      "Software issue",
      "Power problem",
      "Liquid or physical damage",
      "Input configuration",
      "Hardware failure",
    ],
    diagnostics: [
      "Restart the Mac.",
      "Test pointer movement.",
      "Check trackpad settings.",
      "Disconnect external input devices.",
      "Test clicking and gestures separately.",
    ],
    solution:
      "Restart and verify settings. Persistent physical unresponsiveness may require hardware service.",
  },
  {
    problem: "Audio problems",
    causes: [
      "Incorrect output device",
      "Muted volume",
      "Application-specific setting",
      "Software issue",
      "Speaker or audio hardware problem",
    ],
    diagnostics: [
      "Check system sound settings.",
      "Verify the selected output device.",
      "Test another application.",
      "Disconnect Bluetooth audio devices.",
      "Test headphones if available.",
    ],
    solution:
      "Select the correct output device, adjust volume and restart the application. Persistent speaker or microphone problems may require diagnostics.",
  },
  {
    problem: "Performance slowdown",
    causes: [
      "High CPU/GPU workload",
      "Memory pressure",
      "Low storage space",
      "Background processes",
      "Software problems",
    ],
    diagnostics: [
      "Open Activity Monitor.",
      "Check CPU usage.",
      "Check Memory Pressure.",
      "Check available storage.",
      "Identify applications consuming unusual resources.",
    ],
    solution:
      "Close unnecessary applications, free storage, update macOS and investigate resource-heavy processes.",
  },
  {
    problem: "Unexpected shutdown",
    causes: [
      "Battery or power problem",
      "Thermal protection",
      "Software crash",
      "Hardware fault",
      "Power-management issue",
    ],
    diagnostics: [
      "Check battery condition.",
      "Observe whether shutdowns occur during heavy workloads.",
      "Install available software updates.",
      "Test without unnecessary peripherals.",
      "Review system behavior for recurring patterns.",
    ],
    solution:
      "Identify whether shutdowns correlate with workload, battery condition or accessories. Persistent unexpected shutdowns should be professionally diagnosed.",
  },
];

const classification = [...externalAnatomy, ...internalAnatomy];

const categories = [
  "All",
  "Display",
  "Input",
  "Power",
  "Ports",
  "Processing",
  "Memory",
  "Storage",
  "Thermal",
  "Audio",
  "Connectivity",
  "Security",
  "Camera",
  "Structure",
  "Sensors",
];

function AmbientBackground({ reduced }) {
  if (reduced) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: COLORS.soft }}
      />
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: `${COLORS.cyan}55` }}
      />

      <motion.div
        animate={{
          x: [0, -70, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-[25%] h-[550px] w-[550px] rounded-full blur-3xl"
        style={{ background: `${COLORS.green}55` }}
      />

      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] left-[30%] h-[450px] w-[450px] rounded-full blur-3xl"
        style={{ background: `${COLORS.blue}35` }}
      />
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, reduced }) {
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="mx-auto mb-16 max-w-4xl text-center"
    >
      <div
        className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.25em]"
        style={{
          borderColor: `${COLORS.blue}35`,
          color: COLORS.blue,
          background: `${COLORS.white}CC`,
        }}
      >
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: COLORS.blue }}
        />
        {eyebrow}
      </div>

      <h2
        className="text-4xl font-black tracking-tight md:text-6xl"
        style={{ color: COLORS.text }}
      >
        {title}
      </h2>

      <p
        className="mx-auto mt-5 max-w-3xl text-base leading-8 md:text-lg"
        style={{ color: COLORS.textLight }}
      >
        {text}
      </p>
    </motion.div>
  );
}

function SafeIcon({ icon: Icon, size = 24, className = "" }) {
  if (!Icon) {
    return <Monitor size={size} className={className} />;
  }

  return <Icon size={size} className={className} />;
}

function ImageCard({ item, reduced }) {
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 30 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: EASE }}
      whileHover={reduced ? undefined : { y: -8 }}
      className="group overflow-hidden rounded-[28px] border bg-white shadow-[0_20px_60px_rgba(16,32,43,0.08)]"
      style={{ borderColor: COLORS.border }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          whileHover={reduced ? undefined : { scale: 1.08 }}
          transition={{ duration: 0.8, ease: EASE }}
          onError={(event) => {
            event.currentTarget.src = IMAGES.mac;
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
              {item.category}
            </span>

            <h3 className="text-2xl font-black text-white">{item.title}</h3>
          </div>

          <div className="rounded-2xl bg-white/15 p-3 text-white backdrop-blur-md">
            <SafeIcon icon={item.icon} size={22} />
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <InfoRow label="Location" value={item.location} />
        <InfoRow label="Function" value={item.function} />
        <InfoRow label="Relationship" value={item.relationship} />

        <div
          className="rounded-2xl p-4 text-sm leading-7"
          style={{
            background: COLORS.soft,
            color: COLORS.textLight,
          }}
        >
          <strong style={{ color: COLORS.text }}>Technical note:</strong>{" "}
          {item.technical}
        </div>
      </div>
    </motion.div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div>
      <div
        className="mb-1 text-xs font-black uppercase tracking-[0.18em]"
        style={{ color: COLORS.blue }}
      >
        {label}
      </div>

      <p className="text-sm leading-7" style={{ color: COLORS.textLight }}>
        {value}
      </p>
    </div>
  );
}

function FilterButton({ active, children, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className="rounded-full border px-4 py-2 text-sm font-bold transition-all"
      style={{
        borderColor: active ? COLORS.blue : COLORS.border,
        background: active ? COLORS.blue : COLORS.white,
        color: active ? COLORS.white : COLORS.text,
        boxShadow: active ? `0 10px 30px ${COLORS.blue}30` : "none",
      }}
    >
      {children}
    </motion.button>
  );
}

function ArchitectureFlow({ flow, reduced }) {
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 35 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="rounded-[30px] border bg-white p-6 shadow-[0_20px_60px_rgba(16,32,43,0.06)] md:p-8"
      style={{ borderColor: COLORS.border }}
    >
      <div className="mb-7 flex items-center gap-4">
        <div
          className="rounded-2xl p-4"
          style={{
            background: COLORS.softBlue,
            color: COLORS.blue,
          }}
        >
          <SafeIcon icon={flow.icon} size={25} />
        </div>

        <div>
          <h3 className="text-2xl font-black" style={{ color: COLORS.text }}>
            {flow.title}
          </h3>

          <p
            className="mt-1 text-sm leading-6"
            style={{ color: COLORS.textLight }}
          >
            {flow.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {flow.steps.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <motion.div
              whileHover={reduced ? undefined : { y: -3, scale: 1.03 }}
              className="rounded-2xl border px-4 py-3 text-sm font-bold"
              style={{
                borderColor: COLORS.border,
                background:
                  index % 2 === 0 ? COLORS.softBlue : `${COLORS.green}55`,
                color: COLORS.text,
              }}
            >
              {step}
            </motion.div>

            {index < flow.steps.length - 1 && (
              <span
                className="hidden text-xl font-bold md:block"
                style={{ color: COLORS.blue }}
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function HistoryCard({ item, index, reduced }) {
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, x: index % 2 ? 50 : -50 }}
      whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative grid gap-6 md:grid-cols-[130px_1fr]"
    >
      <div className="flex items-start md:justify-center">
        <div
          className="rounded-full border px-5 py-3 text-sm font-black"
          style={{
            borderColor: `${COLORS.blue}45`,
            color: COLORS.blue,
            background: COLORS.white,
          }}
        >
          {item.year}
        </div>
      </div>

      <div
        className="rounded-[28px] border bg-white p-7 shadow-[0_20px_60px_rgba(16,32,43,0.06)]"
        style={{ borderColor: COLORS.border }}
      >
        <div className="flex items-start gap-4">
          <div
            className="rounded-2xl p-4"
            style={{
              background: COLORS.softBlue,
              color: COLORS.blue,
            }}
          >
            <SafeIcon icon={item.icon} size={25} />
          </div>

          <div className="min-w-0">
            <h3 className="text-2xl font-black" style={{ color: COLORS.text }}>
              {item.title}
            </h3>

            <p
              className="mt-3 text-base leading-8"
              style={{ color: COLORS.textLight }}
            >
              {item.description}
            </p>

            <div
              className="mt-5 rounded-2xl p-5 text-sm leading-7"
              style={{
                background: COLORS.soft,
                color: COLORS.textLight,
              }}
            >
              {item.details}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InteractiveDetail({ item, active, setActive, reduced }) {
  return (
    <motion.div
      layout
      className="overflow-hidden rounded-[26px] border bg-white"
      style={{
        borderColor: active ? `${COLORS.blue}60` : COLORS.border,
        boxShadow: active
          ? `0 20px 60px ${COLORS.blue}12`
          : "0 15px 45px rgba(16,32,43,0.05)",
      }}
    >
      <button
        onClick={() => setActive(active ? null : item.title)}
        className="flex w-full items-center justify-between gap-5 p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div
            className="rounded-2xl p-3"
            style={{
              background: COLORS.softBlue,
              color: COLORS.blue,
            }}
          >
            <SafeIcon icon={item.icon} size={22} />
          </div>

          <div>
            <h3 className="font-black" style={{ color: COLORS.text }}>
              {item.title}
            </h3>

            <p className="mt-1 text-xs" style={{ color: COLORS.textLight }}>
              {item.category}
            </p>
          </div>
        </div>

        <motion.div animate={{ rotate: active ? 180 : 0 }}>
          <ChevronDown size={20} style={{ color: COLORS.blue }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div
              className="border-t px-5 pb-6 pt-5"
              style={{ borderColor: COLORS.border }}
            >
              <InfoRow label="Location" value={item.location} />

              <div className="mt-5">
                <InfoRow label="Function" value={item.function} />
              </div>

              <div className="mt-5">
                <InfoRow label="Relationship" value={item.relationship} />
              </div>

              <div
                className="mt-5 rounded-2xl p-4 text-sm leading-7"
                style={{
                  background: COLORS.soft,
                  color: COLORS.textLight,
                }}
              >
                <strong style={{ color: COLORS.text }}>
                  Technical information:
                </strong>{" "}
                {item.technical}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function DiagnosticBlock({ title, items }) {
  return (
    <div className="rounded-2xl p-5" style={{ background: COLORS.soft }}>
      <div
        className="mb-4 text-xs font-black uppercase tracking-[0.18em]"
        style={{ color: COLORS.blue }}
      >
        {title}
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex gap-3 text-sm leading-6"
            style={{ color: COLORS.textLight }}
          >
            <CheckCircle2
              size={17}
              className="mt-1 shrink-0"
              style={{ color: COLORS.blue }}
            />

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TroubleshootingCard({ item, index, active, setActive, reduced }) {
  const isActive = active === index;

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 30 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.03, 0.25),
        ease: EASE,
      }}
      className="overflow-hidden rounded-[28px] border bg-white"
      style={{
        borderColor: isActive ? `${COLORS.blue}65` : COLORS.border,
        boxShadow: isActive
          ? `0 20px 70px ${COLORS.blue}12`
          : "0 15px 45px rgba(16,32,43,0.05)",
      }}
    >
      <button
        onClick={() => setActive(isActive ? null : index)}
        className="flex w-full items-center justify-between gap-5 p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div
            className="rounded-2xl p-3"
            style={{
              background: isActive ? COLORS.blue : COLORS.softBlue,
              color: isActive ? COLORS.white : COLORS.blue,
            }}
          >
            <Wrench size={21} />
          </div>

          <div>
            <div
              className="mb-1 text-xs font-black uppercase tracking-[0.18em]"
              style={{ color: COLORS.blue }}
            >
              Diagnostic Case
            </div>

            <h3
              className="text-lg font-black md:text-xl"
              style={{ color: COLORS.text }}
            >
              {item.problem}
            </h3>
          </div>
        </div>

        <motion.div animate={{ rotate: isActive ? 180 : 0 }}>
          <ChevronDown style={{ color: COLORS.blue }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div
              className="grid gap-5 border-t p-6 md:grid-cols-2"
              style={{ borderColor: COLORS.border }}
            >
              <DiagnosticBlock title="Possible Causes" items={item.causes} />

              <DiagnosticBlock
                title="Diagnostic Steps"
                items={item.diagnostics}
              />

              <div
                className="rounded-2xl p-5 md:col-span-2"
                style={{
                  background: `${COLORS.green}55`,
                }}
              >
                <div
                  className="mb-2 text-xs font-black uppercase tracking-[0.18em]"
                  style={{ color: COLORS.text }}
                >
                  Recommended Solution
                </div>

                <p
                  className="text-sm leading-7"
                  style={{ color: COLORS.textLight }}
                >
                  {item.solution}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SystemExampleCard({ item, index, reduced }) {
  return (
    <motion.div
      initial={
        reduced
          ? false
          : {
              opacity: 0,
              scale: 0.96,
              y: 20,
            }
      }
      whileInView={
        reduced
          ? undefined
          : {
              opacity: 1,
              scale: 1,
              y: 0,
            }
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        delay: index * 0.04,
        ease: EASE,
      }}
      whileHover={reduced ? undefined : { y: -6 }}
      className="rounded-[28px] border bg-white p-7"
      style={{ borderColor: COLORS.border }}
    >
      <div className="flex items-center gap-4">
        <div
          className="rounded-2xl p-4"
          style={{
            background: COLORS.softBlue,
            color: COLORS.blue,
          }}
        >
          <SafeIcon icon={item.icon} size={25} />
        </div>

        <h3 className="text-xl font-black" style={{ color: COLORS.text }}>
          {item.title}
        </h3>
      </div>

      <div
        className="mt-6 rounded-2xl p-5 text-sm font-bold leading-7"
        style={{
          background: `${COLORS.green}60`,
          color: COLORS.text,
        }}
      >
        {item.flow}
      </div>

      <p className="mt-5 text-sm leading-7" style={{ color: COLORS.textLight }}>
        {item.text}
      </p>
    </motion.div>
  );
}

export default function Mac() {
  const reduced = useReducedMotion();

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activeAnatomy, setActiveAnatomy] = useState(null);
  const [activeProblem, setActiveProblem] = useState(null);

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

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.3],
    reduced ? [0, 0] : [0, -150],
  );

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.3],
    reduced ? [1, 1] : [1, 0.9],
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    reduced ? [1, 1] : [1, 0],
  );

  const heroRotate = useTransform(
    scrollYProgress,
    [0, 0.3],
    reduced ? [0, 0] : [0, -3],
  );

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return classification.filter((item) => {
      const categoryMatch =
        activeCategory === "All" || item.category === activeCategory;

      if (!query) {
        return categoryMatch;
      }

      const searchable = [
        item.title,
        item.category,
        item.location,
        item.function,
        item.relationship,
        item.technical,
      ]
        .join(" ")
        .toLowerCase();

      return categoryMatch && searchable.includes(query);
    });
  }, [activeCategory, search]);

  function handleMouseMove(event) {
    if (reduced) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;

    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 14);
    mouseY.set(y * 14);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <main
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen overflow-hidden"
      style={{
        background: COLORS.soft,
        color: COLORS.text,
      }}
    >
      <AmbientBackground reduced={reduced} />

      <section className="relative flex min-h-screen items-center px-6 py-24 md:px-10">
        <motion.div
          style={{
            y: heroY,
            scale: heroScale,
            opacity: heroOpacity,
            rotateZ: heroRotate,
          }}
          className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 25 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: EASE,
              }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em]"
              style={{ borderColor: COLORS.border }}
            >
              <span
                className="h-2.5 w-2.5 animate-pulse rounded-full"
                style={{ background: COLORS.blue }}
              />
              MacBook Anatomy
            </motion.div>

            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 35 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: EASE,
              }}
              className="text-6xl font-black tracking-[-0.06em] md:text-8xl"
            >
              Inside the
              <span className="block" style={{ color: COLORS.blue }}>
                MacBook.
              </span>
            </motion.h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 30 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: EASE,
              }}
              className="mt-7 max-w-2xl text-lg leading-9"
              style={{ color: COLORS.textLight }}
            >
              A detailed technical anatomy of the MacBook, exploring its
              history, software, external structure, internal architecture,
              processing, memory, storage, power, thermal management, sensors,
              security, durability and troubleshooting.
            </motion.p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "External Anatomy",
                "Internal Anatomy",
                "System Architecture",
                "Sensors & Security",
                "Troubleshooting",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={
                    reduced
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.9,
                        }
                  }
                  animate={
                    reduced
                      ? undefined
                      : {
                          opacity: 1,
                          scale: 1,
                        }
                  }
                  transition={{
                    delay: 0.4 + index * 0.08,
                    duration: 0.5,
                    ease: EASE,
                  }}
                  className="rounded-full border bg-white px-4 py-2 text-sm font-bold"
                  style={{
                    borderColor: COLORS.border,
                  }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            style={{
              x: springX,
              y: springY,
            }}
            className="relative"
          >
            <motion.div
              animate={
                reduced
                  ? undefined
                  : {
                      y: [0, -14, 0],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div
                className="absolute -inset-10 rounded-full blur-3xl"
                style={{
                  background: `${COLORS.blue}25`,
                }}
              />

              <img
                src={IMAGES.mac}
                alt="MacBook"
                className="relative w-full rounded-[35px] object-cover shadow-[0_40px_100px_rgba(16,32,43,0.18)]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/30 bg-black/35 px-5 py-3 text-sm font-bold text-white backdrop-blur-xl">
                Hardware × Software × Architecture
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            reduced={reduced}
            eyebrow="01 — Evolution"
            title="The MacBook is the result of decades of engineering."
            text="Understanding the modern MacBook becomes easier when its development is viewed as an evolution of portable computing, industrial design, processors, displays, batteries, software and system integration."
          />

          <div className="space-y-7">
            {history.map((item, index) => (
              <HistoryCard
                key={item.title}
                item={item}
                index={index}
                reduced={reduced}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="software" className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            reduced={reduced}
            eyebrow="02 — Software Anatomy"
            title="Hardware needs an operating system."
            text="A MacBook is not only physical hardware. macOS creates the software environment that manages hardware resources and connects applications to the computer's underlying architecture."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {software.map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.04,
                  ease: EASE,
                }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -6,
                      }
                }
                className="rounded-[28px] border bg-white p-7 shadow-[0_20px_60px_rgba(16,32,43,0.05)]"
                style={{
                  borderColor: COLORS.border,
                }}
              >
                <div className="flex gap-5">
                  <div
                    className="h-fit rounded-2xl p-4"
                    style={{
                      background: COLORS.softBlue,
                      color: COLORS.blue,
                    }}
                  >
                    <SafeIcon icon={item.icon} size={25} />
                  </div>

                  <div>
                    <div
                      className="mb-2 text-xs font-black uppercase tracking-[0.18em]"
                      style={{ color: COLORS.blue }}
                    >
                      {item.category}
                    </div>

                    <h3
                      className="text-2xl font-black"
                      style={{ color: COLORS.text }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-3 leading-7"
                      style={{
                        color: COLORS.textLight,
                      }}
                    >
                      {item.description}
                    </p>

                    <p
                      className="mt-4 text-sm leading-7"
                      style={{
                        color: COLORS.textLight,
                      }}
                    >
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            reduced={reduced}
            eyebrow="03 — External Anatomy"
            title="Start with what you can see."
            text="Every visible MacBook component has a physical position, a specific function and a relationship with internal systems."
          />

          <div className="grid gap-7 lg:grid-cols-2">
            {externalAnatomy.map((item) => (
              <ImageCard key={item.title} item={item} reduced={reduced} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="anatomy"
        className="px-6 py-28 md:px-10"
        style={{
          background: COLORS.white,
        }}
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            reduced={reduced}
            eyebrow="04 — Internal Anatomy"
            title="Inside the chassis is an integrated computer architecture."
            text="Modern MacBooks combine processing, memory, storage, power, cooling, wireless communication and security into an extremely compact internal system."
          />

          <div className="grid gap-7 lg:grid-cols-2">
            {internalAnatomy.map((item) => (
              <ImageCard key={item.title} item={item} reduced={reduced} />
            ))}
          </div>
        </div>
      </section>

      <section id="hardware" className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            reduced={reduced}
            eyebrow="05 — Functional Anatomy"
            title="No component works alone."
            text="A MacBook behaves as a coordinated system. Power, processing, memory, storage, display, networking and thermal systems continuously exchange resources and information."
          />

          <div className="space-y-6">
            {functionalFlows.map((flow) => (
              <ArchitectureFlow
                key={flow.title}
                flow={flow}
                reduced={reduced}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            reduced={reduced}
            eyebrow="06 — System Architecture"
            title="Follow the journey of information."
            text="Common MacBook activities demonstrate how multiple hardware and software layers cooperate to produce a single user-visible result."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {systemExamples.map((item, index) => (
              <SystemExampleCard
                key={item.title}
                item={item}
                index={index}
                reduced={reduced}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            reduced={reduced}
            eyebrow="07 — Sensors & Security"
            title="The MacBook also senses and protects."
            text="Sensors help the computer understand its environment and physical state, while hardware-backed security protects authentication and sensitive data."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sensorsSecurity.map((item, index) => (
              <motion.div
                key={item.title}
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        y: 35,
                      }
                }
                whileInView={
                  reduced
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.04,
                  ease: EASE,
                }}
                className="rounded-[28px] border bg-white p-7"
                style={{
                  borderColor: COLORS.border,
                }}
              >
                <div
                  className="mb-5 inline-flex rounded-2xl p-4"
                  style={{
                    background: COLORS.softBlue,
                    color: COLORS.blue,
                  }}
                >
                  <SafeIcon icon={item.icon} size={25} />
                </div>

                <h3
                  className="text-xl font-black"
                  style={{ color: COLORS.text }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-4 text-sm leading-7"
                  style={{
                    color: COLORS.textLight,
                  }}
                >
                  {item.description}
                </p>

                <div className="mt-5">
                  <InfoRow label="Function" value={item.function} />
                </div>

                <div className="mt-5">
                  <InfoRow label="Relationship" value={item.relationship} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            reduced={reduced}
            eyebrow="08 — Quality & Durability"
            title="Engineering quality is more than appearance."
            text="A MacBook's quality depends on its materials, structural design, display, keyboard, trackpad, battery, thermal architecture and physical connectivity."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {durability.map((item, index) => (
              <motion.div
                key={item.title}
                initial={
                  reduced
                    ? false
                    : {
                        opacity: 0,
                        y: 30,
                      }
                }
                whileInView={
                  reduced
                    ? undefined
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.04,
                  ease: EASE,
                }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                className="rounded-[28px] border bg-white p-7"
                style={{
                  borderColor: COLORS.border,
                }}
              >
                <div className="flex gap-5">
                  <div
                    className="h-fit rounded-2xl p-4"
                    style={{
                      background: `${COLORS.green}70`,
                      color: COLORS.text,
                    }}
                  >
                    <SafeIcon icon={item.icon} size={23} />
                  </div>

                  <div>
                    <h3
                      className="text-xl font-black"
                      style={{ color: COLORS.text }}
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

                    <div
                      className="mt-5 rounded-2xl p-5 text-sm leading-7"
                      style={{
                        background: COLORS.soft,
                        color: COLORS.textLight,
                      }}
                    >
                      <strong style={{ color: COLORS.text }}>
                        Durability analysis:
                      </strong>{" "}
                      {item.analysis}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-28 md:px-10"
        style={{
          background: COLORS.white,
        }}
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            reduced={reduced}
            eyebrow="09 — Smart Classification"
            title="Explore the MacBook by system."
            text="Search the anatomy database and filter components by technical category. Open any component to see its location, function, relationship and technical information."
          />

          <div className="mb-8 rounded-[30px] border bg-white p-5 shadow-[0_20px_60px_rgba(16,32,43,0.05)]">
            <div className="flex flex-col gap-5">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  size={20}
                  style={{ color: COLORS.textLight }}
                />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search MacBook components..."
                  className="w-full rounded-2xl border bg-transparent py-4 pl-12 pr-12 outline-none"
                  style={{
                    borderColor: COLORS.border,
                    color: COLORS.text,
                  }}
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <X
                      size={18}
                      style={{
                        color: COLORS.textLight,
                      }}
                    />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <FilterButton
                    key={category}
                    active={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </FilterButton>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <p
              className="text-sm font-bold"
              style={{ color: COLORS.textLight }}
            >
              Showing {filteredItems.length} components
            </p>

            <p
              className="hidden text-sm md:block"
              style={{ color: COLORS.textLight }}
            >
              Component → Location → Function → Relationship
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {filteredItems.map((item) => (
              <InteractiveDetail
                key={item.title}
                item={item}
                active={activeAnatomy === item.title}
                setActive={setActiveAnatomy}
                reduced={reduced}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div
              className="rounded-[28px] border bg-white p-12 text-center"
              style={{
                borderColor: COLORS.border,
              }}
            >
              <Search
                className="mx-auto mb-5"
                size={40}
                style={{ color: COLORS.blue }}
              />

              <h3
                className="text-2xl font-black"
                style={{ color: COLORS.text }}
              >
                No component found
              </h3>

              <p className="mt-3" style={{ color: COLORS.textLight }}>
                Try another search term or choose another category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            reduced={reduced}
            eyebrow="10 — Troubleshooting"
            title="Understand the problem before replacing the part."
            text="A symptom does not always identify the failed component. Effective troubleshooting separates software, power, thermal, configuration and hardware causes before a repair decision is made."
          />

          <div className="space-y-5">
            {troubleshooting.map((item, index) => (
              <TroubleshootingCard
                key={item.problem}
                item={item}
                index={index}
                active={activeProblem}
                setActive={setActiveProblem}
                reduced={reduced}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-10">
        <motion.div
          initial={
            reduced
              ? false
              : {
                  opacity: 0,
                  y: 40,
                }
          }
          whileInView={
            reduced
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: EASE,
          }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[40px] border bg-white p-8 shadow-[0_30px_100px_rgba(16,32,43,0.1)] md:p-14"
          style={{ borderColor: COLORS.border }}
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div
                className="mb-5 inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.2em]"
                style={{
                  background: COLORS.softBlue,
                  color: COLORS.blue,
                }}
              >
                MacBook Architecture
              </div>

              <h2
                className="text-4xl font-black tracking-tight md:text-6xl"
                style={{ color: COLORS.text }}
              >
                One machine.
                <span className="block" style={{ color: COLORS.blue }}>
                  Many systems.
                </span>
              </h2>

              <p
                className="mt-6 text-base leading-8"
                style={{ color: COLORS.textLight }}
              >
                The MacBook demonstrates how modern computing combines
                electrical power, semiconductor processing, memory, storage,
                thermal engineering, sensors, security, connectivity and
                software into one integrated platform.
              </p>
            </div>

            <motion.div
              animate={
                reduced
                  ? undefined
                  : {
                      y: [0, -10, 0],
                      rotate: [0, 1.5, 0],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={IMAGES.internals}
                alt="MacBook internal architecture"
                className="rounded-[30px] shadow-[0_30px_80px_rgba(16,32,43,0.15)]"
                onError={(event) => {
                  event.currentTarget.src = IMAGES.mac;
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-32 pt-10 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            animate={
              reduced
                ? undefined
                : {
                    scale: [1, 1.04, 1],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-[26px]"
            style={{
              background: COLORS.blue,
              color: COLORS.white,
              boxShadow: `0 20px 60px ${COLORS.blue}40`,
            }}
          >
            <Monitor size={38} />
          </motion.div>

          <h2
            className="text-4xl font-black tracking-tight md:text-6xl"
            style={{ color: COLORS.text }}
          >
            Anatomy becomes architecture.
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-8"
            style={{ color: COLORS.textLight }}
          >
            By studying the MacBook component by component, we can understand
            not only what each part does, but also how the complete computer
            behaves as one coordinated system.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Hardware",
              "Software",
              "Power",
              "Processing",
              "Memory",
              "Storage",
              "Thermal",
              "Security",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border bg-white px-4 py-2 text-sm font-bold"
                style={{
                  borderColor: COLORS.border,
                  color: COLORS.text,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
