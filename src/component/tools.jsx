import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
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

const appleHistory = [
  {
    year: "1976",
    title: "Apple I",
    description:
      "Apple's first computer introduced a compact personal-computing concept. It was essentially a single-board computer that required external components such as a keyboard and display.",
    impact:
      "The Apple I established the idea that computing hardware could be designed for individual users rather than only institutions.",
    icon: "01",
    accent: COLORS.blue,
  },
  {
    year: "1977",
    title: "Apple II",
    description:
      "The Apple II became one of the early successful mass-market personal computers. Its integrated design included a keyboard, expansion slots and a more complete computer architecture.",
    impact:
      "More complete integration reduced the amount of external hardware users needed.",
    icon: "02",
    accent: COLORS.cyan,
  },
  {
    year: "1984",
    title: "Macintosh",
    description:
      "The Macintosh introduced a graphical user interface and mouse-driven interaction to a wider audience. The hardware was designed around an all-in-one desktop experience.",
    impact:
      "The graphical interface changed the relationship between humans, software and computer hardware.",
    icon: "03",
    accent: COLORS.green,
  },
  {
    year: "1991",
    title: "PowerBook",
    description:
      "PowerBook systems helped establish the modern laptop arrangement with a display, keyboard, pointing device and battery-oriented portable architecture.",
    impact:
      "Portable computing required engineers to reorganize components around weight, battery life and thermal constraints.",
    icon: "04",
    accent: COLORS.mint,
  },
  {
    year: "1998",
    title: "iMac",
    description:
      "The iMac combined computer components and display into a visually unified enclosure and became an important example of Apple's industrial-design philosophy.",
    impact:
      "Design became closely connected with internal component placement and enclosure engineering.",
    icon: "05",
    accent: COLORS.blue,
  },
  {
    year: "2001",
    title: "iPod",
    description:
      "The iPod combined storage, a processor, display, battery and audio hardware into a small portable device designed around digital media.",
    impact:
      "Miniaturization and efficient battery-powered electronics became central to Apple's portable-device engineering.",
    icon: "06",
    accent: COLORS.cyan,
  },
  {
    year: "2001",
    title: "Mac OS X",
    description:
      "Mac OS X introduced a modern Unix-based software foundation that became an important part of Apple's long-term desktop architecture.",
    impact:
      "Software architecture increasingly became designed together with hardware architecture.",
    icon: "07",
    accent: COLORS.green,
  },
  {
    year: "2006",
    title: "Intel Transition",
    description:
      "Apple moved the Mac from PowerPC processors to Intel processors, changing CPU architecture and improving performance and software compatibility.",
    impact:
      "The transition demonstrated how processor architecture can force changes throughout a computer's internal system.",
    icon: "08",
    accent: COLORS.mint,
  },
  {
    year: "2007",
    title: "iPhone",
    description:
      "The first iPhone combined a phone, touchscreen computer, web browser, camera and media player into one handheld architecture.",
    impact:
      "The touchscreen became the primary interface and physical buttons were dramatically reduced.",
    icon: "09",
    accent: COLORS.blue,
  },
  {
    year: "2010",
    title: "iPad",
    description:
      "The iPad expanded Apple's mobile architecture into a larger touchscreen computing platform.",
    impact:
      "Larger displays, larger batteries and tablet-specific internal layouts created a new class of portable computer.",
    icon: "10",
    accent: COLORS.cyan,
  },
  {
    year: "2015",
    title: "Apple Watch",
    description:
      "Apple entered wearable computing with a device requiring extremely compact processors, sensors, battery systems and wireless components.",
    impact:
      "Wearable electronics pushed miniaturization to an even smaller physical scale.",
    icon: "11",
    accent: COLORS.green,
  },
  {
    year: "2020",
    title: "Apple Silicon",
    description:
      "Apple began transitioning Mac computers from Intel processors to its own Apple Silicon architecture.",
    impact:
      "CPU, GPU, memory controllers, media engines and security functions became much more tightly integrated.",
    icon: "12",
    accent: COLORS.mint,
  },
  {
    year: "2023+",
    title: "Integrated Apple Ecosystem",
    description:
      "Modern Apple devices increasingly share technologies such as custom silicon, biometric security, high-speed wireless communication, computational photography and unified software architecture.",
    impact:
      "Hardware, software, security, battery and industrial design now operate as one tightly integrated engineering system.",
    icon: "13",
    accent: COLORS.blue,
  },
];

const iphoneEvolution = [
  {
    year: "2007",
    model: "iPhone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    design:
      "Rounded industrial design with a relatively thick body and large display bezels.",
    materials: "Aluminum + plastic rear section + glass display",
    processor: "Samsung-derived ARM processor",
    cpu: "Single-core ARM-based architecture",
    gpu: "PowerVR graphics architecture",
    memory: "128 MB RAM",
    display: "3.5-inch multi-touch display",
    camera: "2 MP rear camera",
    sensors: "Accelerometer + proximity sensor + ambient light sensor",
    wireless: "2G cellular + Wi-Fi + Bluetooth",
    ports: "30-pin connector",
    security: "Passcode",
    battery: "Internal rechargeable lithium-ion battery",
    architecture:
      "Separate mobile components were arranged inside a relatively thick enclosure. The logic board, battery, display, camera and radio components occupied significant physical volume.",
    technology:
      "Multi-touch interaction replaced many physical phone controls. Web browsing, media playback and smartphone computing increased the role of the processor and display.",
    anatomy:
      "The internal structure had to combine cellular communication, computing, battery, camera and touchscreen technology inside one compact enclosure.",
    engineering:
      "The major engineering challenge was combining several categories of electronics that had traditionally existed as separate devices.",
  },
  {
    year: "2008",
    model: "iPhone 3G",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1400&q=85",
    design: "Curved plastic rear housing with a glass front.",
    materials: "Plastic + glass",
    processor: "ARM-based Samsung processor",
    cpu: "Single-core ARM architecture",
    gpu: "PowerVR graphics",
    memory: "128 MB RAM",
    display: "3.5-inch multi-touch display",
    camera: "2 MP rear camera",
    sensors: "Accelerometer + proximity + ambient light",
    wireless: "3G + Wi-Fi + Bluetooth",
    ports: "30-pin connector",
    security: "Passcode",
    battery: "Internal lithium-ion battery",
    architecture:
      "The internal architecture remained compact but added faster cellular communication and GPS-related functionality.",
    technology:
      "3G networking and GPS expanded the phone from a communication device into a connected mobile computing platform.",
    anatomy:
      "Additional wireless functionality required more sophisticated radio and antenna organization.",
    engineering:
      "Connectivity became an increasingly important part of the physical architecture.",
  },
  {
    year: "2010",
    model: "iPhone 4",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85",
    design: "Flat glass-and-metal industrial design.",
    materials: "Glass + stainless steel",
    processor: "Apple A4",
    cpu: "ARM Cortex-A8 based single-core CPU",
    gpu: "PowerVR SGX535",
    memory: "512 MB RAM",
    display: "3.5-inch Retina display",
    camera: "5 MP rear camera + VGA front camera",
    sensors: "Gyroscope + accelerometer + proximity + ambient light",
    wireless: "3G + Wi-Fi + Bluetooth",
    ports: "30-pin connector",
    security: "Passcode",
    battery: "Integrated lithium-ion battery",
    architecture:
      "The internal board became more compact while the display, cameras and motion sensors became significantly more capable.",
    technology:
      "The Retina display increased pixel density while the gyroscope enabled more precise motion interaction.",
    anatomy:
      "Battery, logic board, cameras and sensors became more tightly organized around a thin glass-and-steel enclosure.",
    engineering:
      "The antenna system became closely integrated with the external stainless-steel frame.",
  },
  {
    year: "2013",
    model: "iPhone 5s",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1400&q=85",
    design: "Thin aluminum body with precision-machined construction.",
    materials: "Aluminum + glass",
    processor: "Apple A7",
    cpu: "64-bit ARM-based dual-core CPU",
    gpu: "PowerVR G6430",
    memory: "1 GB RAM",
    display: "4-inch Retina display",
    camera: "8 MP iSight camera",
    sensors: "Touch ID + motion and environmental sensors",
    wireless: "4G LTE + Wi-Fi + Bluetooth",
    ports: "Lightning",
    security: "Touch ID",
    battery: "Integrated lithium-ion battery",
    architecture:
      "64-bit processing and biometric authentication introduced new hardware requirements while the logic board continued becoming smaller and denser.",
    technology:
      "The A7 introduced 64-bit smartphone processing and Touch ID brought biometric authentication directly into the Home button.",
    anatomy:
      "The Home button became a biometric sensor while the Lightning port reduced connector size and enabled a reversible digital connection.",
    engineering:
      "Security moved from software-only authentication toward a combination of sensors, silicon and protected biometric processing.",
  },
  {
    year: "2016",
    model: "iPhone 7",
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1400&q=85",
    design: "Slim aluminum enclosure with redesigned antenna lines.",
    materials: "Aluminum + glass",
    processor: "Apple A10 Fusion",
    cpu: "Quad-core ARM-based CPU",
    gpu: "Apple-designed GPU",
    memory: "2 GB RAM",
    display: "4.7-inch Retina HD display",
    camera: "12 MP camera + optical image stabilization on larger models",
    sensors: "Touch ID + barometer + accelerometer + gyroscope",
    wireless: "4G LTE + Wi-Fi + Bluetooth",
    ports: "Lightning",
    security: "Touch ID",
    battery: "Integrated lithium-ion battery",
    architecture:
      "The device removed the traditional headphone jack and used increasingly integrated components to create more internal space.",
    technology:
      "Improved image processing, water resistance and haptic feedback increased the importance of tightly controlled internal hardware.",
    anatomy:
      "Removing the headphone jack created space for redesigned internal components and contributed to a more sealed enclosure.",
    engineering:
      "Water resistance became an important architectural requirement affecting seals, adhesives and component placement.",
  },
  {
    year: "2017",
    model: "iPhone X",
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1400&q=85",
    design: "Edge-to-edge display with glass rear and stainless-steel frame.",
    materials: "Glass + stainless steel",
    processor: "Apple A11 Bionic",
    cpu: "Six-core CPU",
    gpu: "Apple-designed three-core GPU",
    memory: "3 GB RAM",
    display: "5.8-inch OLED Super Retina display",
    camera: "Dual 12 MP rear cameras + TrueDepth front camera",
    sensors: "Face ID TrueDepth system + accelerometer + gyroscope + barometer",
    wireless: "4G LTE + Wi-Fi + Bluetooth",
    ports: "Lightning",
    security: "Face ID + Secure Enclave",
    battery: "Integrated dual-cell lithium-ion battery",
    architecture:
      "The logic board used a highly compact layered design. The TrueDepth camera system occupied significant space at the top of the device.",
    technology:
      "Face recognition required infrared imaging, dot projection and depth sensing.",
    anatomy:
      "The TrueDepth system created the display notch while eliminating the traditional Home button.",
    engineering:
      "The move to OLED and Face ID fundamentally changed the front-of-device architecture.",
  },
  {
    year: "2020",
    model: "iPhone 12",
    image:
      "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&w=1400&q=85",
    design: "Flat-edge modern design.",
    materials: "Ceramic Shield + aluminum/stainless steel",
    processor: "Apple A14 Bionic",
    cpu: "Six-core CPU",
    gpu: "Four-core Apple GPU",
    memory: "4–6 GB depending on model",
    display: "Super Retina XDR OLED",
    camera: "Dual/Triple camera systems depending on model",
    sensors: "Face ID + LiDAR on Pro models",
    wireless: "5G + Wi-Fi 6 + Bluetooth",
    ports: "Lightning + MagSafe",
    security: "Face ID + Secure Enclave",
    battery: "Integrated lithium-ion battery",
    architecture:
      "Smaller logic-board architecture used dense component integration. MagSafe added a magnetic ring and charging-related components behind the rear panel.",
    technology:
      "5G, computational photography, OLED displays and MagSafe increased system complexity.",
    anatomy:
      "MagSafe introduced a ring of magnets and charging components into the rear internal architecture.",
    engineering:
      "5G antennas and RF systems required careful placement because high-frequency wireless signals are sensitive to surrounding materials.",
  },
  {
    year: "2022",
    model: "iPhone 14 Pro",
    image:
      "https://images.unsplash.com/photo-1663499482523-1c0c1a3f4f9b?auto=format&fit=crop&w=1400&q=85",
    design: "Premium stainless-steel enclosure with Dynamic Island.",
    materials: "Ceramic Shield + stainless steel + glass",
    processor: "Apple A16 Bionic",
    cpu: "Six-core CPU",
    gpu: "Five-core Apple GPU",
    memory: "6 GB RAM",
    display: "6.1-inch OLED with ProMotion",
    camera: "48 MP main + ultra-wide + telephoto",
    sensors: "Face ID + LiDAR + accelerometer + gyroscope + barometer",
    wireless: "5G + Wi-Fi 6 + Bluetooth",
    ports: "Lightning",
    security: "Face ID + Secure Enclave",
    battery: "Integrated lithium-ion battery",
    architecture:
      "A larger camera system required more physical volume while the Dynamic Island reorganized the front sensor and camera region.",
    technology:
      "Computational photography, high-resolution imaging and adaptive displays increased processing and sensor requirements.",
    anatomy:
      "Camera modules became some of the largest individual components inside the phone.",
    engineering:
      "Camera performance became increasingly dependent on both optical hardware and dedicated image-processing silicon.",
  },
  {
    year: "2023+",
    model: "Modern iPhone",
    image:
      "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=1400&q=85",
    design:
      "Refined aerospace-inspired enclosure with increasingly thin structural elements.",
    materials: "Aluminum or titanium depending on generation",
    processor: "Apple Silicon A-series",
    cpu: "Multi-core ARM-based CPU",
    gpu: "Apple-designed GPU",
    memory: "High-density unified system memory architecture",
    display: "Advanced OLED Super Retina displays",
    camera: "Multi-camera computational photography system",
    sensors:
      "Face ID + LiDAR on Pro models + advanced motion and environmental sensors",
    wireless:
      "5G + Wi-Fi + Bluetooth + satellite connectivity on supported generations",
    ports: "USB-C on modern generations",
    security: "Face ID + Secure Enclave",
    battery: "High-density integrated lithium-ion battery",
    architecture:
      "Extremely dense system architecture integrates processors, imaging systems, wireless communication, security hardware and power-management systems into a highly constrained volume.",
    technology:
      "Computational photography, machine learning, USB-C, advanced wireless communication and specialized silicon pushed integration further.",
    anatomy:
      "Modern iPhone anatomy is dominated by miniaturization, thermal management, camera systems, battery density and highly integrated silicon.",
    engineering:
      "The phone is no longer simply a collection of components. Its processor, camera, security, sensors, wireless systems and software are engineered as one platform.",
  },
];

const macEvolution = [
  {
    year: "2006",
    model: "MacBook",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
    design: "Polycarbonate notebook design.",
    chassis: "Polycarbonate enclosure",
    processor: "Intel Core Duo",
    cpu: "Dual-core Intel architecture",
    gpu: "Integrated Intel graphics",
    memory: "DDR2 memory",
    display: "13-inch LCD",
    ports: "USB, Ethernet, FireWire, MagSafe, optical drive",
    cooling: "Fan-based active cooling",
    storage: "2.5-inch mechanical hard drive",
    battery: "Removable/replaceable battery architecture",
    architecture:
      "Traditional notebook architecture with separate CPU, chipset, memory and storage components.",
    technology:
      "The move to Intel processors changed Mac compatibility and performance.",
    anatomy:
      "A larger number of discrete components required more internal space and conventional cooling.",
    engineering:
      "Mechanical storage and replaceable batteries created a fundamentally different internal layout from modern sealed notebooks.",
  },
  {
    year: "2008",
    model: "MacBook Air",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
    design: "Ultra-thin wedge profile.",
    chassis: "Precision aluminum unibody",
    processor: "Intel Core 2 Duo",
    cpu: "Dual-core Intel architecture",
    gpu: "Integrated graphics",
    memory: "DDR2/DDR3 depending on revision",
    display: "13.3-inch LED-backlit display",
    ports: "USB, Micro-DVI, MagSafe",
    cooling: "Compact fan-based cooling",
    storage: "HDD / optional SSD",
    battery: "Integrated battery",
    architecture:
      "Components were arranged around the goal of dramatically reducing thickness.",
    technology: "Miniaturization became a primary engineering objective.",
    anatomy:
      "The internal layout became thinner and more layered, requiring careful placement of battery, storage and cooling.",
    engineering:
      "The wedge enclosure demonstrated how industrial design could directly determine motherboard, battery and thermal layout.",
  },
  {
    year: "2012",
    model: "MacBook Pro Retina",
    image:
      "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&w=1400&q=85",
    design: "Thin Retina notebook.",
    chassis: "Aluminum unibody",
    processor: "Intel Core processors",
    cpu: "Dual/quad-core Intel architecture",
    gpu: "Intel + discrete GPU on selected models",
    memory: "DDR3/DDR3L",
    display: "High-resolution Retina display",
    ports: "USB, Thunderbolt, HDMI, MagSafe",
    cooling: "Dual-fan active cooling",
    storage: "PCIe/flash SSD",
    battery: "Large internal battery",
    architecture:
      "Retina display, SSD storage and tightly packed internal components replaced several older notebook subsystems.",
    technology:
      "High-resolution displays and SSDs changed both performance and physical layout.",
    anatomy:
      "The optical drive disappeared, creating room for a larger battery and thinner internal structure.",
    engineering:
      "Battery cells were shaped and distributed around the internal architecture rather than placed in a simple removable pack.",
  },
  {
    year: "2016",
    model: "MacBook Pro",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1400&q=85",
    design: "Slim aluminum professional notebook.",
    chassis: "Aluminum unibody",
    processor: "Intel Core",
    cpu: "Dual/quad-core Intel processors",
    gpu: "Intel or AMD graphics depending on model",
    memory: "LPDDR3",
    display: "Retina display + optional Touch Bar",
    ports: "USB-C / Thunderbolt 3",
    cooling: "Active cooling",
    storage: "PCIe SSD",
    battery: "Integrated high-density battery",
    architecture:
      "USB-C and Thunderbolt encouraged a smaller, modern I/O architecture.",
    technology:
      "Port consolidation reduced the number of physical openings in the chassis.",
    anatomy:
      "The internal system became thinner while Thunderbolt handled power, display and data through fewer ports.",
    engineering:
      "The Touch Bar and USB-C transition demonstrated how software-defined interfaces could replace traditional physical controls and connectors.",
  },
  {
    year: "2020",
    model: "MacBook Air M1",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1400&q=85",
    design: "Thin aluminum notebook.",
    chassis: "Aluminum unibody",
    processor: "Apple M1",
    cpu: "8-core Apple CPU",
    gpu: "Up to 8-core Apple GPU",
    memory: "Unified memory",
    display: "Retina display",
    ports: "USB-C / Thunderbolt + headphone jack",
    cooling: "Fanless thermal architecture",
    storage: "High-speed SSD",
    battery: "High-capacity integrated battery",
    architecture:
      "CPU, GPU, memory controllers, media engines and security functions moved into one Apple Silicon system.",
    technology:
      "Apple Silicon dramatically increased integration and energy efficiency.",
    anatomy:
      "The removal of active cooling in the MacBook Air created more internal space and reduced mechanical complexity.",
    engineering:
      "The M1 changed the motherboard from a collection of major processing subsystems into a highly integrated SoC-centered architecture.",
  },
  {
    year: "2023+",
    model: "Apple Silicon MacBook",
    image:
      "https://images.unsplash.com/photo-1517336714739-2400de3a9f6e?auto=format&fit=crop&w=1400&q=85",
    design: "Minimal precision aluminum architecture.",
    chassis: "Aluminum unibody",
    processor: "M-series Apple Silicon",
    cpu: "Multi-core Apple CPU",
    gpu: "Integrated Apple GPU",
    memory: "Unified memory architecture",
    display: "Retina / Liquid Retina displays depending on model",
    ports: "Thunderbolt / USB-C, MagSafe and model-specific I/O",
    cooling: "Passive or advanced active thermal systems",
    storage: "High-speed integrated SSD",
    battery: "Large integrated battery system",
    architecture:
      "Highly integrated SoC architecture combines CPU, GPU, memory controllers, media engines and security functions.",
    technology:
      "Unified memory and Apple Silicon changed the relationship between processor, graphics, memory and power.",
    anatomy:
      "The motherboard became smaller and more integrated while battery capacity and thermal design became dominant parts of the internal layout.",
    engineering:
      "Modern MacBook engineering focuses on the balance between silicon efficiency, battery density, thermal dissipation, acoustics and enclosure thickness.",
  },
];

const comparisonData = {
  iPhone: [
    {
      label: "Body",
      old: "Thicker aluminum/plastic construction",
      new: "Highly refined aluminum/titanium/glass construction",
    },
    {
      label: "Display",
      old: "3.5-inch LCD with large bezels",
      new: "Large high-resolution OLED with minimal bezels",
    },
    {
      label: "Processor",
      old: "Single-core ARM-based mobile processor",
      new: "Highly integrated multi-core Apple Silicon",
    },
    {
      label: "Memory",
      old: "Very small RAM capacity",
      new: "High-density memory architecture",
    },
    {
      label: "Camera",
      old: "Single basic 2 MP camera",
      new: "Multi-camera computational photography",
    },
    {
      label: "Sensors",
      old: "Accelerometer and proximity sensor",
      new: "Face ID, LiDAR and advanced motion/environment sensors",
    },
    {
      label: "Security",
      old: "Passcode",
      new: "Face ID + Secure Enclave",
    },
    {
      label: "Connectivity",
      old: "2G / Wi-Fi / Bluetooth",
      new: "5G / Wi-Fi / Bluetooth / satellite on supported models",
    },
    {
      label: "Port",
      old: "30-pin connector",
      new: "USB-C on modern generations",
    },
    {
      label: "Charging",
      old: "Wired connector charging",
      new: "USB-C + MagSafe wireless charging",
    },
    {
      label: "Architecture",
      old: "More discrete components",
      new: "Dense integrated system architecture",
    },
    {
      label: "Main Challenge",
      old: "Fit smartphone functions into a small enclosure",
      new: "Fit increasingly powerful systems into extremely limited space",
    },
  ],
  MacBook: [
    {
      label: "Body",
      old: "Thicker conventional notebook",
      new: "Thin precision aluminum enclosure",
    },
    {
      label: "Processor",
      old: "Intel CPU + separate supporting components",
      new: "Apple Silicon SoC",
    },
    {
      label: "Graphics",
      old: "Separate or integrated traditional GPU",
      new: "Highly integrated Apple GPU",
    },
    {
      label: "Memory",
      old: "Separate system memory",
      new: "Unified memory architecture",
    },
    {
      label: "Cooling",
      old: "Fan-based cooling",
      new: "Fanless or highly optimized thermal systems",
    },
    {
      label: "Storage",
      old: "Mechanical hard drive",
      new: "High-speed solid-state storage",
    },
    {
      label: "Battery",
      old: "Removable battery in older systems",
      new: "Large shaped integrated battery",
    },
    {
      label: "Ports",
      old: "Many dedicated ports",
      new: "USB-C / Thunderbolt ecosystem",
    },
    {
      label: "Motherboard",
      old: "Multiple major processing subsystems",
      new: "Highly integrated SoC-centered board",
    },
    {
      label: "Thermals",
      old: "More heat from separate components",
      new: "Higher efficiency and localized thermal design",
    },
    {
      label: "Architecture",
      old: "Separate CPU, GPU, chipset and memory",
      new: "CPU, GPU, memory and media engines integrated together",
    },
    {
      label: "Main Challenge",
      old: "Balance performance with notebook size",
      new: "Balance extreme integration with heat, battery and repair constraints",
    },
  ],
};

const anatomyPrinciples = [
  {
    number: "01",
    title: "Miniaturization",
    description:
      "Smaller semiconductor processes allow more transistors and functionality to fit into less physical space.",
    example: "Smaller logic boards → more room for battery and cameras.",
  },
  {
    number: "02",
    title: "Integration",
    description:
      "Functions that once required separate chips can now be combined into highly integrated systems-on-chip.",
    example: "CPU + GPU + memory controllers + media engines → SoC.",
  },
  {
    number: "03",
    title: "Energy Efficiency",
    description:
      "More efficient processors reduce energy consumption and change the balance between performance, battery size and cooling.",
    example:
      "Apple Silicon → high performance with lower thermal requirements.",
  },
  {
    number: "04",
    title: "Sensor Expansion",
    description:
      "Modern devices use more sensors to understand movement, environment, location and identity.",
    example: "Accelerometer → gyroscope → Face ID → LiDAR.",
  },
  {
    number: "05",
    title: "Computational Photography",
    description:
      "Modern cameras depend on processors and machine-learning systems as much as optical hardware.",
    example: "Camera sensor + ISP + neural processing → computational image.",
  },
  {
    number: "06",
    title: "Thermal Engineering",
    description:
      "Higher performance creates heat, so device anatomy must provide efficient pathways for heat to move away from processors.",
    example: "Fans, heat spreaders, thermal interfaces and passive cooling.",
  },
  {
    number: "07",
    title: "Battery Density",
    description:
      "As devices become thinner, battery cells must deliver more energy within increasingly constrained volumes.",
    example: "Removable battery → shaped internal battery cells.",
  },
  {
    number: "08",
    title: "Security Hardware",
    description:
      "Security is no longer only software. Dedicated hardware protects biometric information, encryption keys and sensitive operations.",
    example: "Touch ID → Secure Enclave → Face ID.",
  },
];

function EvolutionCard({ item, active, onClick, index }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      whileHover={{
        y: -12,
        scale: 1.025,
        rotateX: 4,
        rotateY: index % 2 === 0 ? -3 : 3,
      }}
      whileTap={{ scale: 0.97 }}
      className="group relative overflow-hidden rounded-[30px] border p-4 text-left [perspective:1200px]"
      style={{
        background: active ? COLORS.softBlue : COLORS.white,
        borderColor: active ? COLORS.blue : COLORS.border,
        boxShadow: active
          ? `0 25px 70px ${COLORS.blue}25`
          : `0 15px 45px ${COLORS.text}08`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative h-52 overflow-hidden rounded-[22px]">
        <motion.img
          src={item.image}
          alt={item.model}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.7 }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(23,50,77,.78), transparent 65%)",
          }}
        />

        <motion.div
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-black tracking-[0.2em] text-white"
          style={{ background: `${COLORS.blue}dd` }}
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          {item.year}
        </motion.div>

        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
            Device Evolution
          </div>

          <div className="mt-1 text-2xl font-black">{item.model}</div>
        </div>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div
          className="text-xs font-black uppercase tracking-[0.2em]"
          style={{ color: COLORS.blue }}
        >
          Technology → Anatomy
        </div>

        <p
          className="mt-3 text-sm leading-6"
          style={{ color: COLORS.textLight }}
        >
          {item.technology}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[item.processor, item.memory, item.ports].map((value) => (
            <span
              key={value}
              className="rounded-full border px-2.5 py-1 text-[9px] font-bold"
              style={{
                background: COLORS.soft,
                borderColor: COLORS.border,
                color: COLORS.textLight,
              }}
            >
              {value}
            </span>
          ))}
        </div>

        <div
          className="mt-5 flex items-center justify-between text-sm font-black"
          style={{ color: COLORS.text }}
        >
          <span>{active ? "Selected" : "Explore generation"}</span>

          <motion.span
            animate={{ x: active ? 5 : 0 }}
            style={{ color: COLORS.blue }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.button>
  );
}

function DetailPanel({ item, type, onClose }) {
  const rows =
    type === "iPhone"
      ? [
          ["Design", item.design],
          ["Materials", item.materials],
          ["Processor", item.processor],
          ["CPU", item.cpu],
          ["GPU", item.gpu],
          ["Memory", item.memory],
          ["Display", item.display],
          ["Camera", item.camera],
          ["Sensors", item.sensors],
          ["Wireless", item.wireless],
          ["Ports", item.ports],
          ["Security", item.security],
          ["Battery", item.battery],
          ["Internal Architecture", item.architecture],
        ]
      : [
          ["Design", item.design],
          ["Chassis", item.chassis],
          ["Processor", item.processor],
          ["CPU", item.cpu],
          ["GPU", item.gpu],
          ["Memory", item.memory],
          ["Display", item.display],
          ["Ports", item.ports],
          ["Cooling", item.cooling],
          ["Storage", item.storage],
          ["Battery", item.battery],
          ["Internal Architecture", item.architecture],
        ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        background: `${COLORS.text}99`,
        backdropFilter: "blur(20px)",
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.82,
          y: 50,
          rotateX: 12,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.86,
          y: 30,
        }}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[36px] border p-6 sm:p-10"
        style={{
          background: COLORS.white,
          borderColor: COLORS.border,
          boxShadow: `0 40px 120px ${COLORS.text}40`,
        }}
      >
        <motion.div
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl"
          style={{
            background: `${COLORS.cyan}45`,
          }}
          animate={{
            scale: [1, 1.25, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border text-xl"
          style={{
            background: COLORS.soft,
            borderColor: COLORS.border,
            color: COLORS.textLight,
          }}
        >
          ×
        </button>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <div className="relative overflow-hidden rounded-[28px]">
              <motion.img
                src={item.image}
                alt={item.model}
                className="h-[320px] w-full object-cover"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(23,50,77,.75), transparent)",
                }}
              />

              <div className="absolute bottom-5 left-5 text-white">
                <div className="text-sm font-bold tracking-[0.25em]">
                  {item.year}
                </div>

                <div className="mt-1 text-4xl font-black">{item.model}</div>
              </div>
            </div>

            <div
              className="mt-7 rounded-[26px] border p-6"
              style={{
                background: COLORS.soft,
                borderColor: COLORS.border,
              }}
            >
              <div
                className="text-xs font-black uppercase tracking-[0.25em]"
                style={{ color: COLORS.blue }}
              >
                Technology changed
              </div>

              <p
                className="mt-4 text-base leading-7"
                style={{ color: COLORS.textLight }}
              >
                {item.technology}
              </p>
            </div>

            <div
              className="mt-4 rounded-[26px] border p-6"
              style={{
                background: `linear-gradient(135deg, ${COLORS.softBlue}, ${COLORS.mint}55)`,
                borderColor: COLORS.border,
              }}
            >
              <div
                className="text-xs font-black uppercase tracking-[0.25em]"
                style={{ color: COLORS.blue }}
              >
                Anatomy changed
              </div>

              <p
                className="mt-4 text-base leading-7"
                style={{ color: COLORS.textLight }}
              >
                {item.anatomy}
              </p>
            </div>

            <div
              className="mt-4 rounded-[26px] border p-6"
              style={{
                background: COLORS.white,
                borderColor: COLORS.border,
              }}
            >
              <div
                className="text-xs font-black uppercase tracking-[0.25em]"
                style={{ color: COLORS.blue }}
              >
                Engineering significance
              </div>

              <p
                className="mt-4 text-base leading-7"
                style={{ color: COLORS.textLight }}
              >
                {item.engineering}
              </p>
            </div>
          </div>

          <div>
            <div
              className="text-xs font-black uppercase tracking-[0.3em]"
              style={{ color: COLORS.blue }}
            >
              {type} Device Anatomy
            </div>

            <h3
              className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl"
              style={{ color: COLORS.text }}
            >
              What changed inside?
            </h3>

            <div className="mt-8 grid gap-3">
              {rows.map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.045,
                  }}
                  whileHover={{
                    x: 5,
                    scale: 1.01,
                  }}
                  className="rounded-[20px] border p-4"
                  style={{
                    background: COLORS.soft,
                    borderColor: COLORS.border,
                  }}
                >
                  <div className="grid gap-2 sm:grid-cols-[160px_1fr]">
                    <div
                      className="text-xs font-black uppercase tracking-[0.15em]"
                      style={{ color: COLORS.blue }}
                    >
                      {label}
                    </div>

                    <div
                      className="text-sm leading-6"
                      style={{ color: COLORS.text }}
                    >
                      {value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Comparison({ type }) {
  const data = comparisonData[type];

  return (
    <div className="grid gap-4">
      {data.map((item, index) => (
        <motion.div
          key={item.label}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.04,
          }}
          whileHover={{
            y: -3,
          }}
          className="grid overflow-hidden rounded-[24px] border md:grid-cols-[170px_1fr_1fr]"
          style={{
            borderColor: COLORS.border,
            background: COLORS.white,
          }}
        >
          <div
            className="flex items-center px-5 py-4 text-sm font-black"
            style={{
              background: COLORS.softBlue,
              color: COLORS.text,
            }}
          >
            {item.label}
          </div>

          <div
            className="border-t p-5 md:border-l md:border-t-0"
            style={{
              borderColor: COLORS.border,
            }}
          >
            <div
              className="mb-2 text-[10px] font-black uppercase tracking-[0.2em]"
              style={{ color: COLORS.textLight }}
            >
              Earlier
            </div>

            <div
              className="text-sm leading-6"
              style={{ color: COLORS.textLight }}
            >
              {item.old}
            </div>
          </div>

          <div
            className="border-t p-5 md:border-l md:border-t-0"
            style={{
              borderColor: COLORS.border,
            }}
          >
            <div
              className="mb-2 text-[10px] font-black uppercase tracking-[0.2em]"
              style={{ color: COLORS.blue }}
            >
              Modern
            </div>

            <div
              className="text-sm font-semibold leading-6"
              style={{ color: COLORS.text }}
            >
              {item.new}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function PrincipleCard({ item, index }) {
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="group rounded-[28px] border p-6"
      style={{
        background: COLORS.white,
        borderColor: COLORS.border,
        boxShadow: `0 18px 50px ${COLORS.text}08`,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-black tracking-[0.2em]"
          style={{ color: COLORS.blue }}
        >
          {item.number}
        </span>

        <motion.div
          className="h-3 w-3 rounded-full"
          style={{
            background: COLORS.blue,
            boxShadow: `0 0 20px ${COLORS.blue}80`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.15,
          }}
        />
      </div>

      <h3 className="mt-6 text-2xl font-black" style={{ color: COLORS.text }}>
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-7" style={{ color: COLORS.textLight }}>
        {item.description}
      </p>

      <div
        className="mt-5 rounded-[18px] border p-4 text-xs font-semibold leading-6"
        style={{
          background: COLORS.softBlue,
          borderColor: COLORS.border,
          color: COLORS.text,
        }}
      >
        {item.example}
      </div>
    </motion.div>
  );
}

function Tools() {
  const [device, setDevice] = useState("iPhone");
  const [selectedItem, setSelectedItem] = useState(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 120,
    damping: 20,
    mass: 0.7,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 120,
    damping: 20,
    mass: 0.7,
  });

  const rotateX = useTransform(smoothY, [-1, 1], [5, -5]);
  const rotateY = useTransform(smoothX, [-1, 1], [-7, 7]);

  const evolution = device === "iPhone" ? iphoneEvolution : macEvolution;

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);

    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: COLORS.soft,
        color: COLORS.text,
      }}
    >
      <section
        className="relative min-h-[92vh] overflow-hidden"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <motion.div
          className="pointer-events-none absolute h-[600px] w-[600px] rounded-full blur-3xl"
          style={{
            left: useTransform(smoothX, [-1, 1], ["15%", "85%"]),
            top: useTransform(smoothY, [-1, 1], ["20%", "75%"]),
            background: `radial-gradient(circle, ${COLORS.cyan}55 0%, transparent 68%)`,
            transform: "translate(-50%, -50%)",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full blur-3xl"
          style={{
            background: `${COLORS.blue}22`,
          }}
          animate={{
            x: [0, 90, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full blur-3xl"
          style={{
            background: `${COLORS.green}38`,
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(${COLORS.border} 1px, transparent 1px),
              linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 82%)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-28">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
            <div>
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
                }}
                className="mb-7 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-xs font-black tracking-[0.25em]"
                style={{
                  background: `${COLORS.white}cc`,
                  borderColor: COLORS.border,
                  color: COLORS.textLight,
                  backdropFilter: "blur(16px)",
                  boxShadow: `0 15px 45px ${COLORS.blue}15`,
                }}
              >
                <motion.span
                  style={{ color: COLORS.blue }}
                  animate={{
                    rotate: 360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                >
                  ◇
                </motion.span>
                04 — APPLE HISTORY & EVOLUTION
              </motion.div>

              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformPerspective: 1400,
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.h1
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="max-w-4xl text-6xl font-black leading-[.92] tracking-[-0.07em] sm:text-7xl md:text-8xl"
                  style={{
                    background: `linear-gradient(120deg, ${COLORS.blue}, ${COLORS.text} 50%, ${COLORS.cyan})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Technology
                  <br />
                  changed.
                  <br />
                  Anatomy followed.
                </motion.h1>
              </motion.div>

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
                  duration: 0.8,
                  delay: 0.3,
                }}
                className="mt-8 max-w-2xl text-lg leading-8 sm:text-xl"
                style={{ color: COLORS.textLight }}
              >
                Explore how decades of advances in processors, displays,
                cameras, sensors, batteries, materials, wireless systems,
                security and thermal engineering transformed the physical
                anatomy of Apple devices.
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
                  duration: 0.8,
                  delay: 0.45,
                }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <a
                  href="#timeline"
                  className="rounded-full px-7 py-4 text-sm font-black text-white"
                  style={{
                    background: COLORS.blue,
                    boxShadow: `0 18px 40px ${COLORS.blue}35`,
                  }}
                >
                  Explore timeline
                </a>

                <Link
                  to="/iphone"
                  className="rounded-full border px-7 py-4 text-sm font-black"
                  style={{
                    background: COLORS.white,
                    borderColor: COLORS.border,
                    color: COLORS.text,
                  }}
                >
                  iPhone Anatomy →
                </Link>
              </motion.div>
            </div>

            <div className="relative mx-auto h-[430px] w-full max-w-[480px] [perspective:1200px]">
              <motion.div
                className="absolute left-1/2 top-1/2 h-[320px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[45px] border-2 p-3"
                style={{
                  background: `${COLORS.white}dd`,
                  borderColor: `${COLORS.blue}55`,
                  boxShadow: `0 40px 100px ${COLORS.blue}25`,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 8, 0],
                  rotateX: [0, -4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="relative h-full w-full overflow-hidden rounded-[34px]"
                  style={{
                    background:
                      "linear-gradient(145deg, #17324D, #30AFFF, #92EEFF)",
                  }}
                >
                  <motion.div
                    className="absolute left-1/2 top-12 h-28 w-20 -translate-x-1/2 rounded-[25px] border"
                    style={{
                      borderColor: `${COLORS.white}55`,
                      background: `${COLORS.white}15`,
                    }}
                    animate={{
                      y: [0, 12, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />

                  {Array.from({ length: 10 }).map((_, item) => (
                    <motion.div
                      key={item}
                      className="absolute h-2.5 w-2.5 rounded-full"
                      style={{
                        left: `${12 + item * 8}%`,
                        top: `${52 + (item % 3) * 12}%`,
                        background: [
                          COLORS.blue,
                          COLORS.cyan,
                          COLORS.green,
                          COLORS.mint,
                          COLORS.white,
                        ][item % 5],
                        boxShadow: `0 0 18px ${
                          [
                            COLORS.blue,
                            COLORS.cyan,
                            COLORS.green,
                            COLORS.mint,
                            COLORS.white,
                          ][item % 5]
                        }`,
                      }}
                      animate={{
                        y: [0, -12, 0],
                        opacity: [0.35, 1, 0.35],
                      }}
                      transition={{
                        duration: 2 + item * 0.2,
                        repeat: Infinity,
                        delay: item * 0.15,
                      }}
                    />
                  ))}

                  <div className="absolute bottom-8 left-0 right-0 text-center text-white">
                    <div className="text-[10px] font-black tracking-[0.3em]">
                      DEVICE
                    </div>

                    <div className="mt-2 text-2xl font-black">EVOLUTION</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
                style={{
                  borderColor: `${COLORS.blue}40`,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
                style={{
                  borderColor: `${COLORS.cyan}45`,
                }}
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-16 max-w-3xl"
        >
          <div
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: COLORS.blue }}
          >
            Apple History
          </div>

          <h2
            className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-6xl"
            style={{ color: COLORS.text }}
          >
            From computer
            <br />
            to ecosystem.
          </h2>

          <p
            className="mt-5 text-lg leading-8"
            style={{ color: COLORS.textLight }}
          >
            Apple's history is not simply a sequence of products. Each
            technological milestone changed what could physically fit inside a
            device and how people interacted with it.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute bottom-0 left-5 top-0 w-px md:left-1/2"
            style={{
              background: `linear-gradient(to bottom, transparent, ${COLORS.blue}, ${COLORS.cyan}, ${COLORS.green}, transparent)`,
            }}
            initial={{
              scaleY: 0,
            }}
            whileInView={{
              scaleY: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2,
            }}
          />

          <div className="space-y-10">
            {appleHistory.map((item, index) => {
              const left = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{
                    opacity: 0,
                    x: left ? -60 : 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className={`relative grid items-center md:grid-cols-2 ${
                    left ? "" : "md:text-right"
                  }`}
                >
                  <div
                    className={`pl-14 md:pl-0 ${
                      left ? "md:pr-20" : "md:order-2 md:pl-20"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      className="rounded-[28px] border p-6"
                      style={{
                        background: COLORS.white,
                        borderColor: COLORS.border,
                        boxShadow: `0 20px 55px ${COLORS.text}08`,
                      }}
                    >
                      <div
                        className="text-sm font-black tracking-[0.2em]"
                        style={{ color: item.accent }}
                      >
                        {item.year}
                      </div>

                      <h3
                        className="mt-2 text-2xl font-black"
                        style={{ color: COLORS.text }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className="mt-3 text-sm leading-6"
                        style={{ color: COLORS.textLight }}
                      >
                        {item.description}
                      </p>

                      <div
                        className="mt-5 rounded-[18px] border p-4 text-xs leading-6"
                        style={{
                          background: COLORS.softBlue,
                          borderColor: COLORS.border,
                          color: COLORS.text,
                        }}
                      >
                        <span
                          className="font-black"
                          style={{ color: COLORS.blue }}
                        >
                          ENGINEERING IMPACT:
                        </span>{" "}
                        {item.impact}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="absolute left-5 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 md:left-1/2"
                    style={{
                      background: COLORS.white,
                      borderColor: item.accent,
                      color: COLORS.text,
                      boxShadow: `0 0 25px ${item.accent}70`,
                    }}
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                  >
                    <span className="text-[9px] font-black">{item.icon}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12"
        >
          <div
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: COLORS.blue }}
          >
            Engineering Principles
          </div>

          <h2
            className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-6xl"
            style={{ color: COLORS.text }}
          >
            Why did the anatomy change?
          </h2>

          <p
            className="mt-5 max-w-3xl text-lg leading-8"
            style={{ color: COLORS.textLight }}
          >
            Product anatomy is the physical result of technological decisions.
            When a processor becomes smaller, when a battery becomes denser, or
            when a new sensor is introduced, the entire internal structure can
            change.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {anatomyPrinciples.map((item, index) => (
            <PrincipleCard key={item.number} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12"
        >
          <div
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: COLORS.blue }}
          >
            Device Evolution
          </div>

          <h2
            className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-6xl"
            style={{ color: COLORS.text }}
          >
            Follow the anatomy.
          </h2>

          <p
            className="mt-5 max-w-3xl text-lg leading-8"
            style={{ color: COLORS.textLight }}
          >
            Select iPhone or MacBook and explore how processors, displays,
            cameras, memory, storage, batteries, sensors, cooling and
            connectivity changed across generations.
          </p>
        </motion.div>

        <div
          className="mb-12 inline-flex rounded-full border p-1.5"
          style={{
            background: COLORS.white,
            borderColor: COLORS.border,
            boxShadow: `0 12px 35px ${COLORS.text}08`,
          }}
        >
          {["iPhone", "MacBook"].map((item) => {
            const active = device === item;

            return (
              <button
                key={item}
                onClick={() => {
                  setDevice(item);
                  setSelectedItem(null);
                }}
                className="relative rounded-full px-7 py-3 text-sm font-black"
                style={{
                  color: active ? COLORS.white : COLORS.textLight,
                }}
              >
                {active && (
                  <motion.div
                    layoutId="device-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: COLORS.blue,
                      boxShadow: `0 10px 25px ${COLORS.blue}35`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={device}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.45,
            }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {evolution.map((item, index) => (
              <EvolutionCard
                key={`${item.year}-${item.model}`}
                item={item}
                index={index}
                active={
                  selectedItem?.year === item.year &&
                  selectedItem?.model === item.model
                }
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div
                className="text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: COLORS.blue }}
              >
                iPhone Transformation
              </div>

              <h2
                className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl"
                style={{ color: COLORS.text }}
              >
                From phone
                <br />
                to computational platform.
              </h2>

              <p
                className="mt-5 max-w-xl text-base leading-7"
                style={{ color: COLORS.textLight }}
              >
                The original iPhone was primarily a mobile communication device
                with a touchscreen interface. Modern iPhone architecture
                combines high-performance computing, professional imaging,
                machine learning, biometric security, high-speed communication
                and specialized sensors.
              </p>

              <div
                className="mt-8 rounded-[28px] border p-6"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border,
                }}
              >
                <div
                  className="text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: COLORS.blue }}
                >
                  Physical consequence
                </div>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: COLORS.textLight }}
                >
                  More computing capability required more advanced thermal,
                  battery, camera, antenna and motherboard engineering while the
                  overall device volume remained tightly constrained.
                </p>
              </div>
            </motion.div>
          </div>

          <Comparison type="iPhone" />
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="lg:order-2">
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div
                className="text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: COLORS.blue }}
              >
                MacBook Transformation
              </div>

              <h2
                className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl"
                style={{ color: COLORS.text }}
              >
                From notebook
                <br />
                to integrated system.
              </h2>

              <p
                className="mt-5 max-w-xl text-base leading-7"
                style={{ color: COLORS.textLight }}
              >
                Early MacBooks used traditional notebook architectures with
                separate processors, chipsets, memory, storage and cooling
                systems. Modern Apple Silicon systems combine many of these
                functions into one highly integrated architecture.
              </p>

              <div
                className="mt-8 rounded-[28px] border p-6"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border,
                }}
              >
                <div
                  className="text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: COLORS.blue }}
                >
                  Physical consequence
                </div>

                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: COLORS.textLight }}
                >
                  Greater silicon efficiency allowed Apple to redesign
                  motherboard layouts, reduce mechanical cooling requirements in
                  some models and dedicate more internal volume to battery
                  capacity.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:order-1">
            <Comparison type="MacBook" />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12"
        >
          <div
            className="text-xs font-black uppercase tracking-[0.3em]"
            style={{ color: COLORS.blue }}
          >
            Anatomy Connection
          </div>

          <h2
            className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-6xl"
            style={{ color: COLORS.text }}
          >
            One technological
            <br />
            improvement can affect everything.
          </h2>

          <p
            className="mt-5 max-w-3xl text-lg leading-8"
            style={{ color: COLORS.textLight }}
          >
            Device anatomy is interconnected. A change in one component can
            force changes throughout the system.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Better Processor",
              icon: "CPU",
              text: "More performance and efficiency can reduce board size and thermal requirements.",
            },
            {
              title: "Better Camera",
              icon: "CAM",
              text: "Larger sensors and lenses require more physical space while image processors require more silicon capability.",
            },
            {
              title: "Better Battery",
              icon: "BAT",
              text: "Higher energy density allows more runtime without increasing device volume proportionally.",
            },
            {
              title: "Better Security",
              icon: "SEC",
              text: "Biometric systems require dedicated sensors and protected processing hardware.",
            },
            {
              title: "Better Wireless",
              icon: "RF",
              text: "Faster cellular and Wi-Fi standards require sophisticated antennas and radio-frequency components.",
            },
            {
              title: "Better Display",
              icon: "DSP",
              text: "Higher resolution, brightness and refresh rates increase the importance of display drivers and power management.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.6,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-[28px] border p-7"
              style={{
                background: COLORS.white,
                borderColor: COLORS.border,
                boxShadow: `0 20px 55px ${COLORS.text}08`,
              }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-[10px] font-black"
                style={{
                  background: COLORS.softBlue,
                  color: COLORS.blue,
                }}
              >
                {item.icon}
              </div>

              <h3
                className="mt-6 text-xl font-black"
                style={{ color: COLORS.text }}
              >
                {item.title}
              </h3>

              <p
                className="mt-3 text-sm leading-7"
                style={{ color: COLORS.textLight }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
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
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[40px] border p-8 sm:p-12 lg:p-16"
          style={{
            background: `linear-gradient(135deg, ${COLORS.white}, ${COLORS.softBlue}, ${COLORS.mint}55)`,
            borderColor: COLORS.border,
            boxShadow: `0 30px 100px ${COLORS.text}0D`,
          }}
        >
          <motion.div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
            style={{
              background: `${COLORS.blue}28`,
            }}
            animate={{
              x: [0, -30, 0],
              y: [0, 25, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl"
            style={{
              background: `${COLORS.green}45`,
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div
                className="text-xs font-black uppercase tracking-[0.3em]"
                style={{ color: COLORS.blue }}
              >
                The Big Idea
              </div>

              <h2
                className="mt-4 text-5xl font-black tracking-[-0.06em] sm:text-6xl"
                style={{
                  background: `linear-gradient(120deg, ${COLORS.blue}, ${COLORS.text}, ${COLORS.cyan})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Technology
                <br />
                becomes anatomy.
              </h2>

              <p
                className="mt-6 max-w-2xl text-lg leading-8"
                style={{ color: COLORS.textLight }}
              >
                Smaller transistors enabled smaller boards. Better processors
                enabled smarter cameras. Efficient silicon enabled larger
                batteries or thinner systems. New sensors changed the shape of
                displays. Faster wireless communication changed antenna layouts.
                Security technologies introduced dedicated hardware. Every
                technological improvement eventually became a physical design
                decision.
              </p>

              <div
                className="mt-8 rounded-[24px] border p-5"
                style={{
                  background: `${COLORS.white}cc`,
                  borderColor: COLORS.border,
                }}
              >
                <div
                  className="text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: COLORS.blue }}
                >
                  Core principle
                </div>

                <div
                  className="mt-3 text-lg font-black"
                  style={{ color: COLORS.text }}
                >
                  Technology → Components → Architecture → Anatomy
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/iphone">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="rounded-full px-6 py-3.5 text-sm font-black text-white"
                    style={{
                      background: COLORS.blue,
                      boxShadow: `0 15px 35px ${COLORS.blue}35`,
                    }}
                  >
                    Explore iPhone Anatomy
                  </motion.div>
                </Link>

                <Link to="/mac">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="rounded-full border px-6 py-3.5 text-sm font-black"
                    style={{
                      background: COLORS.white,
                      borderColor: COLORS.border,
                      color: COLORS.text,
                    }}
                  >
                    Explore Mac Anatomy
                  </motion.div>
                </Link>
              </div>
            </div>

            <div className="relative flex h-56 w-56 items-center justify-center [perspective:1000px]">
              <motion.div
                className="absolute h-48 w-48 rounded-full border-2"
                style={{
                  borderColor: `${COLORS.blue}55`,
                }}
                animate={{
                  rotateX: [0, 360],
                  rotateY: [0, 180],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute h-36 w-36 rounded-full border"
                style={{
                  borderColor: `${COLORS.cyan}80`,
                }}
                animate={{
                  rotateY: [0, -360],
                  rotateZ: [0, 180],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="flex h-24 w-24 items-center justify-center rounded-[28px] text-4xl"
                style={{
                  background: COLORS.white,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: `0 25px 60px ${COLORS.blue}30`,
                }}
                animate={{
                  y: [0, -12, 0],
                  rotateX: [0, 12, 0],
                  rotateY: [0, -18, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ⚡
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <DetailPanel
            item={selectedItem}
            type={device}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>

      <footer
        className="border-t px-6 py-12 text-center"
        style={{
          borderColor: COLORS.border,
          color: COLORS.textLight,
          background: COLORS.white,
        }}
      >
        <div className="text-lg font-black" style={{ color: COLORS.text }}>
          AppleHub
        </div>

        <div className="mt-2 text-sm">
          Page 04 — Apple History & Device Evolution
        </div>

        <div className="mt-3 text-xs">
          Technology changed. Components evolved. Anatomy followed.
        </div>
      </footer>
    </main>
  );
}

export default Tools;
