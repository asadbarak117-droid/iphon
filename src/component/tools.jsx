import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Camera,
  Cpu,
  HardDrive,
  History,
  Layers3,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Wifi,
  X,
  Zap,
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

const iphoneEvolution = [
  {
    year: "2007",
    name: "iPhone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    design:
      "Rounded industrial design with a relatively thick body and large display bezels.",
    materials: "Aluminum, plastic rear section and glass display",
    processor: "Samsung-derived ARM processor",
    cpu: "Single-core ARM architecture",
    gpu: "PowerVR graphics",
    memory: "128 MB RAM",
    display: "3.5-inch multi-touch display",
    camera: "2 MP rear camera",
    sensors: "Accelerometer, proximity and ambient light sensors",
    wireless: "2G cellular, Wi-Fi and Bluetooth",
    ports: "30-pin connector",
    security: "Passcode",
    battery: "Internal rechargeable lithium-ion battery",
    architecture:
      "Logic board, battery, display, camera and radio components occupied significant internal volume.",
    technology:
      "Multi-touch replaced many physical phone controls and increased the importance of mobile computing.",
  },
  {
    year: "2008",
    name: "iPhone 3G",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1400&q=85",
    design: "Curved plastic rear housing with a glass front.",
    materials: "Plastic and glass",
    processor: "ARM-based Samsung processor",
    cpu: "Single-core ARM",
    gpu: "PowerVR",
    memory: "128 MB RAM",
    display: "3.5-inch display",
    camera: "2 MP camera",
    sensors: "Accelerometer, proximity and ambient light sensors",
    wireless: "3G, Wi-Fi and Bluetooth",
    ports: "30-pin connector",
    security: "Passcode",
    battery: "Internal lithium-ion battery",
    architecture:
      "Faster cellular connectivity and GPS-related functionality required more sophisticated radio and antenna organization.",
    technology:
      "3G and GPS expanded the role of the iPhone as a connected mobile computer.",
  },
  {
    year: "2010",
    name: "iPhone 4",
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=1400&q=85",
    design: "Flat glass and metal industrial design.",
    materials: "Glass and stainless steel",
    processor: "Apple A4",
    cpu: "ARM Cortex-A8 single-core",
    gpu: "PowerVR SGX535",
    memory: "512 MB RAM",
    display: "3.5-inch Retina display",
    camera: "5 MP rear and VGA front camera",
    sensors: "Gyroscope, accelerometer, proximity and ambient light sensors",
    wireless: "3G, Wi-Fi and Bluetooth",
    ports: "30-pin connector",
    security: "Passcode",
    battery: "Integrated lithium-ion battery",
    architecture:
      "The logic board became more compact while supporting a higher-resolution display, cameras and motion sensors.",
    technology:
      "Retina display and the gyroscope significantly expanded the technical capabilities of the phone.",
  },
  {
    year: "2013",
    name: "iPhone 5s",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1400&q=85",
    design: "Thin precision-machined aluminum design.",
    materials: "Aluminum and glass",
    processor: "Apple A7",
    cpu: "64-bit dual-core ARM",
    gpu: "PowerVR G6430",
    memory: "1 GB RAM",
    display: "4-inch Retina display",
    camera: "8 MP iSight camera",
    sensors: "Touch ID, motion and environmental sensors",
    wireless: "4G LTE, Wi-Fi and Bluetooth",
    ports: "Lightning",
    security: "Touch ID",
    battery: "Integrated lithium-ion battery",
    architecture:
      "64-bit processing and biometric security required denser hardware integration.",
    technology:
      "The A7 and Touch ID moved mobile computing toward specialized silicon and biometric security.",
  },
  {
    year: "2016",
    name: "iPhone 7",
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1400&q=85",
    design: "Slim aluminum body with redesigned antenna lines.",
    materials: "Aluminum and glass",
    processor: "A10 Fusion",
    cpu: "Quad-core ARM",
    gpu: "Apple GPU",
    memory: "2 GB RAM",
    display: "4.7-inch Retina HD",
    camera: "12 MP camera with optical image stabilization on larger models",
    sensors: "Touch ID, barometer, accelerometer and gyroscope",
    wireless: "4G LTE, Wi-Fi and Bluetooth",
    ports: "Lightning",
    security: "Touch ID",
    battery: "Integrated lithium-ion battery",
    architecture:
      "Removing the headphone jack allowed more internal integration and space for other systems.",
    technology:
      "Improved image processing, water resistance and haptic interaction changed the internal design.",
  },
  {
    year: "2017",
    name: "iPhone X",
    image:
      "https://images.unsplash.com/photo-1591337676887-a217a6970a8?auto=format&fit=crop&w=1400&q=85",
    design: "Edge-to-edge display with glass rear and stainless-steel frame.",
    materials: "Glass and stainless steel",
    processor: "A11 Bionic",
    cpu: "Six-core CPU",
    gpu: "Apple three-core GPU",
    memory: "3 GB RAM",
    display: "5.8-inch OLED display",
    camera: "Dual 12 MP rear cameras and TrueDepth front camera",
    sensors: "Face ID, accelerometer, gyroscope and barometer",
    wireless: "4G LTE, Wi-Fi and Bluetooth",
    ports: "Lightning",
    security: "Face ID and Secure Enclave",
    battery: "Dual-cell lithium-ion battery",
    architecture:
      "The layered compact board and TrueDepth camera system significantly changed the internal arrangement.",
    technology:
      "OLED, Face ID, infrared imaging and depth sensing transformed the front architecture.",
  },
  {
    year: "2020",
    name: "iPhone 12",
    image:
      "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&w=1400&q=85",
    design: "Flat-edge design with a modern compact enclosure.",
    materials: "Ceramic Shield, aluminum or stainless steel and glass",
    processor: "A14 Bionic",
    cpu: "Six-core CPU",
    gpu: "Four-core Apple GPU",
    memory: "4–6 GB RAM",
    display: "Super Retina XDR OLED",
    camera: "Dual or triple camera system depending on model",
    sensors: "Face ID, LiDAR on Pro models and motion sensors",
    wireless: "5G, Wi-Fi 6 and Bluetooth",
    ports: "Lightning and MagSafe",
    security: "Face ID and Secure Enclave",
    battery: "Integrated lithium-ion battery",
    architecture:
      "The internal layout became denser while accommodating 5G antennas and MagSafe components.",
    technology:
      "5G, computational photography, OLED and MagSafe introduced new hardware relationships.",
  },
  {
    year: "2022",
    name: "iPhone 14 Pro",
    image:
      "https://images.unsplash.com/photo-1663499482523-1c0c1a3f4f9b?auto=format&fit=crop&w=1400&q=85",
    design: "Premium stainless-steel body with Dynamic Island.",
    materials: "Ceramic Shield, stainless steel and glass",
    processor: "A16 Bionic",
    cpu: "Six-core CPU",
    gpu: "Five-core Apple GPU",
    memory: "6 GB RAM",
    display: "6.1-inch OLED ProMotion display",
    camera: "48 MP main, ultra-wide and telephoto cameras",
    sensors: "Face ID, LiDAR, accelerometer, gyroscope and barometer",
    wireless: "5G, Wi-Fi 6 and Bluetooth",
    ports: "Lightning",
    security: "Face ID and Secure Enclave",
    battery: "Integrated lithium-ion battery",
    architecture:
      "A larger camera system and Dynamic Island required careful organization of internal space.",
    technology:
      "Computational photography, high-resolution imaging and adaptive displays pushed hardware integration further.",
  },
  {
    year: "2023+",
    name: "Modern iPhone",
    image:
      "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=1400&q=85",
    design:
      "Refined thin enclosure using aluminum or titanium depending on generation.",
    materials: "Aluminum or titanium, glass and Ceramic Shield",
    processor: "Apple A-series silicon",
    cpu: "Multi-core ARM CPU",
    gpu: "Apple GPU",
    memory: "High-density system memory",
    display: "Advanced OLED Super Retina",
    camera: "Multi-camera computational photography system",
    sensors:
      "Face ID, LiDAR on Pro models and advanced motion/environment sensors",
    wireless: "5G, Wi-Fi, Bluetooth and supported satellite communication",
    ports: "USB-C on modern generations",
    security: "Face ID and Secure Enclave",
    battery: "High-density integrated lithium-ion battery",
    architecture:
      "Processor, imaging, wireless, security and power systems are densely integrated into a very small volume.",
    technology:
      "Specialized silicon, machine learning, computational photography, USB-C and advanced wireless systems define modern iPhone architecture.",
  },
];

const macEvolution = [
  {
    year: "2006",
    name: "MacBook",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
    design: "Polycarbonate notebook design.",
    materials: "Polycarbonate chassis",
    processor: "Intel Core Duo",
    cpu: "Dual-core Intel",
    gpu: "Integrated Intel graphics",
    memory: "DDR2",
    display: "13-inch LCD",
    camera: "Built-in iSight camera",
    sensors: "Basic system sensors",
    wireless: "Wi-Fi and Bluetooth",
    ports: "USB, Ethernet, FireWire, MagSafe and optical drive",
    security: "Password-based security",
    battery: "Removable battery",
    architecture:
      "CPU, chipset, memory, storage and graphics were relatively separate subsystems.",
    technology:
      "The Intel transition changed Mac compatibility and performance while traditional components occupied more physical space.",
  },
  {
    year: "2008",
    name: "MacBook Air",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=85",
    design: "Ultra-thin wedge-shaped notebook.",
    materials: "Precision aluminum unibody",
    processor: "Intel Core 2 Duo",
    cpu: "Dual-core Intel",
    gpu: "Integrated graphics",
    memory: "DDR2 or DDR3",
    display: "13.3-inch LED-backlit display",
    camera: "Built-in camera",
    sensors: "Basic system sensors",
    wireless: "Wi-Fi and Bluetooth",
    ports: "USB, Micro-DVI and MagSafe",
    security: "Password-based security",
    battery: "Integrated battery",
    architecture:
      "Components were arranged specifically around the goal of reducing thickness.",
    technology:
      "Miniaturization required layered batteries, compact storage and carefully organized thermal systems.",
  },
  {
    year: "2012",
    name: "MacBook Pro Retina",
    image:
      "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&w=1400&q=85",
    design: "Thin Retina notebook with aluminum unibody.",
    materials: "Aluminum unibody",
    processor: "Intel Core",
    cpu: "Dual or quad-core Intel",
    gpu: "Intel and selected discrete GPU",
    memory: "DDR3 or DDR3L",
    display: "High-resolution Retina display",
    camera: "FaceTime HD camera",
    sensors: "Ambient and system sensors",
    wireless: "Wi-Fi and Bluetooth",
    ports: "USB, Thunderbolt, HDMI and MagSafe",
    security: "Password-based security",
    battery: "Large integrated battery",
    architecture:
      "Retina display, flash storage and densely packed components changed the internal layout.",
    technology:
      "The removal of the optical drive created additional space for battery and thinner construction.",
  },
  {
    year: "2016",
    name: "MacBook Pro",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1400&q=85",
    design: "Slim professional aluminum notebook.",
    materials: "Aluminum unibody",
    processor: "Intel Core",
    cpu: "Dual or quad-core Intel",
    gpu: "Intel or AMD GPU",
    memory: "LPDDR3",
    display: "Retina display with optional Touch Bar",
    camera: "FaceTime HD camera",
    sensors: "Touch Bar and system sensors",
    wireless: "Wi-Fi and Bluetooth",
    ports: "USB-C and Thunderbolt 3",
    security: "Touch ID on supported models",
    battery: "Integrated high-density battery",
    architecture:
      "USB-C and Thunderbolt consolidated many traditional ports into a smaller number of high-bandwidth connections.",
    technology:
      "Software-defined controls and USB-C demonstrated a move toward flexible digital interfaces.",
  },
  {
    year: "2020",
    name: "MacBook Air M1",
    image:
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1400&q=85",
    design: "Thin aluminum notebook.",
    materials: "Aluminum unibody",
    processor: "Apple M1",
    cpu: "8-core Apple CPU",
    gpu: "Up to 8-core Apple GPU",
    memory: "Unified memory",
    display: "Retina display",
    camera: "FaceTime HD camera",
    sensors: "System sensors and Touch ID",
    wireless: "Wi-Fi and Bluetooth",
    ports: "USB-C, Thunderbolt and headphone",
    security: "Secure Enclave and Touch ID",
    battery: "High-capacity integrated battery",
    architecture:
      "CPU, GPU, memory controllers, media engines and security functions moved into one Apple silicon architecture.",
    technology:
      "Apple silicon increased integration and efficiency, allowing the MacBook Air to operate without an active fan.",
  },
  {
    year: "2023+",
    name: "Apple Silicon MacBook",
    image:
      "https://images.unsplash.com/photo-1517336714739-2400de3a9f6e?auto=format&fit=crop&w=1400&q=85",
    design: "Minimal precision aluminum construction.",
    materials: "Aluminum unibody",
    processor: "M-series Apple silicon",
    cpu: "Multi-core Apple CPU",
    gpu: "Integrated Apple GPU",
    memory: "Unified memory",
    display: "Retina or Liquid Retina",
    camera: "Advanced FaceTime camera system",
    sensors: "Touch ID and system sensors",
    wireless: "Wi-Fi and Bluetooth",
    ports: "Thunderbolt, USB-C, MagSafe and model-specific I/O",
    security: "Secure Enclave and Touch ID",
    battery: "Large integrated battery",
    architecture:
      "The SoC integrates CPU, GPU, memory architecture, media processing and security while the motherboard becomes highly compact.",
    technology:
      "Modern Mac design balances silicon efficiency, battery density, thermal performance, acoustics and thinness.",
  },
];

const comparisonData = {
  iPhone: [
    ["Body", "Thicker aluminum/plastic", "Refined aluminum/titanium/glass"],
    ["Display", "3.5-inch LCD", "High-resolution OLED"],
    ["Processor", "Single-core ARM", "Integrated multi-core Apple silicon"],
    ["Memory", "Very small capacity", "High-density system memory"],
    ["Camera", "Single 2 MP camera", "Multi-camera computational photography"],
    [
      "Sensors",
      "Accelerometer and proximity",
      "Face ID, LiDAR and advanced sensors",
    ],
    ["Security", "Passcode", "Face ID and Secure Enclave"],
    [
      "Connectivity",
      "2G, Wi-Fi and Bluetooth",
      "5G, Wi-Fi, Bluetooth and supported satellite",
    ],
    ["Port", "30-pin", "USB-C"],
    [
      "Charging",
      "Wired connector",
      "USB-C and MagSafe on supported generations",
    ],
  ],
  Mac: [
    ["Body", "Thicker conventional notebook", "Thin precision aluminum"],
    ["Processor", "Intel CPU with separate systems", "Apple silicon SoC"],
    ["Graphics", "Traditional integrated/discrete GPU", "Integrated Apple GPU"],
    ["Memory", "Separate memory", "Unified memory"],
    ["Cooling", "Fan-based cooling", "Fanless or optimized active cooling"],
    ["Storage", "Mechanical hard drive", "High-speed SSD"],
    ["Battery", "Older removable designs", "Shaped integrated battery"],
    ["Ports", "Many dedicated ports", "USB-C and Thunderbolt"],
    [
      "Motherboard",
      "Multiple separate subsystems",
      "SoC-centered architecture",
    ],
    [
      "Thermals",
      "Higher heat from separate components",
      "Higher efficiency and localized thermal design",
    ],
  ],
};

const technologyChanges = [
  {
    icon: Cpu,
    title: "Processing",
    text: "Separate and relatively simple processors evolved into highly integrated Apple silicon architectures.",
  },
  {
    icon: Layers3,
    title: "Miniaturization",
    text: "More computing capability is now placed inside smaller physical spaces.",
  },
  {
    icon: Camera,
    title: "Imaging",
    text: "Basic cameras evolved into multi-camera systems supported by dedicated image-processing hardware and machine learning.",
  },
  {
    icon: Shield,
    title: "Security",
    text: "Basic passwords evolved into biometric authentication and hardware-protected security systems.",
  },
  {
    icon: Wifi,
    title: "Connectivity",
    text: "Connectivity progressed from basic cellular and wired interfaces to high-speed wireless and flexible modern ports.",
  },
  {
    icon: Zap,
    title: "Power",
    text: "Battery and power management became central engineering constraints as performance increased.",
  },
];

function Stat({ icon: Icon, label, value }) {
  return (
    <div
      className="rounded-2xl border p-4"
      style={{
        background: COLORS.white,
        borderColor: COLORS.border,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl"
          style={{ background: COLORS.softBlue, color: COLORS.blue }}
        >
          <Icon size={19} />
        </div>

        <div>
          <p
            className="text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ color: COLORS.textLight }}
          >
            {label}
          </p>
          <p
            className="mt-1 text-sm font-semibold"
            style={{ color: COLORS.text }}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function DeviceCard({ item, onOpen, index, reduceMotion }) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(item)}
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={reduceMotion ? {} : { y: -8 }}
      className="group overflow-hidden rounded-[28px] border text-left shadow-sm"
      style={{
        background: COLORS.white,
        borderColor: COLORS.border,
      }}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,35,55,.65), transparent 65%)",
          }}
        />

        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold backdrop-blur">
          {item.year}
        </div>

        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-2xl font-bold text-white">{item.name}</h3>
          <p className="mt-1 text-sm text-white/80">{item.processor}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 p-5">
        <Stat icon={Cpu} label="Processor" value={item.cpu} />
        <Stat icon={HardDrive} label="Memory" value={item.memory} />
        <Stat icon={Camera} label="Camera" value={item.camera} />
        <Stat icon={Shield} label="Security" value={item.security} />
      </div>

      <div
        className="flex items-center justify-between border-t px-5 py-4"
        style={{ borderColor: COLORS.border }}
      >
        <span className="text-sm font-semibold" style={{ color: COLORS.text }}>
          Explore evolution
        </span>

        <ArrowRight
          size={18}
          style={{ color: COLORS.blue }}
          className="transition group-hover:translate-x-1"
        />
      </div>
    </motion.button>
  );
}

function DetailPanel({ item, type, onClose }) {
  const details = [
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
    ["Architecture", item.architecture],
    ["Technology", item.technology],
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-2xl"
      >
        <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[.8fr_1.2fr]">
          <div className="relative min-h-[360px]">
            <img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(8,30,48,.82), rgba(8,30,48,.05))",
              }}
            />

            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90"
              style={{ color: COLORS.text }}
            >
              <X size={20} />
            </button>

            <div className="absolute bottom-7 left-7 right-7 text-white">
              <div className="mb-3 flex items-center gap-2">
                <Calendar size={17} />
                <span className="text-sm font-semibold">{item.year}</span>
              </div>

              <h2 className="text-4xl font-bold">{item.name}</h2>

              <p className="mt-3 text-sm leading-6 text-white/80">
                {type} evolution
              </p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-7">
              <p
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: COLORS.blue }}
              >
                Technical Evolution
              </p>

              <h3
                className="mt-2 text-2xl font-bold"
                style={{ color: COLORS.text }}
              >
                What changed in {item.name}?
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border p-4"
                  style={{
                    borderColor: COLORS.border,
                    background: COLORS.soft,
                  }}
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: COLORS.textLight }}
                  >
                    {label}
                  </p>

                  <p
                    className="mt-2 text-sm leading-6"
                    style={{ color: COLORS.text }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ComparisonSection({ type, setType, reduceMotion }) {
  const rows = comparisonData[type];

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <div className="mb-12 max-w-3xl">
        <p
          className="text-xs font-bold uppercase tracking-[0.22em]"
          style={{ color: COLORS.blue }}
        >
          Evolution Comparison
        </p>

        <h2
          className="mt-4 text-4xl font-bold tracking-tight md:text-5xl"
          style={{ color: COLORS.text }}
        >
          From early hardware to modern architecture.
        </h2>

        <p
          className="mt-5 text-base leading-7"
          style={{ color: COLORS.textLight }}
        >
          Compare how the most important hardware and engineering systems
          changed across the evolution of each device family.
        </p>
      </div>

      <div
        className="mb-8 inline-flex rounded-2xl border p-1"
        style={{
          background: COLORS.soft,
          borderColor: COLORS.border,
        }}
      >
        {["iPhone", "Mac"].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setType(item)}
            className="rounded-xl px-6 py-3 text-sm font-bold transition"
            style={{
              background: type === item ? COLORS.text : "transparent",
              color: type === item ? COLORS.white : COLORS.textLight,
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div
        key={type}
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[28px] border"
        style={{
          background: COLORS.white,
          borderColor: COLORS.border,
        }}
      >
        <div className="hidden grid-cols-[180px_1fr_1fr] border-b bg-slate-50 px-6 py-4 text-xs font-bold uppercase tracking-wider md:grid">
          <span style={{ color: COLORS.textLight }}>System</span>
          <span style={{ color: COLORS.textLight }}>Earlier</span>
          <span style={{ color: COLORS.blue }}>Modern</span>
        </div>

        {rows.map(([title, oldValue, newValue], index) => (
          <div
            key={title}
            className="grid gap-3 border-b p-5 last:border-b-0 md:grid-cols-[180px_1fr_1fr] md:px-6"
            style={{ borderColor: COLORS.border }}
          >
            <div>
              <p className="text-sm font-bold" style={{ color: COLORS.text }}>
                {title}
              </p>
            </div>

            <div>
              <span
                className="mb-1 block text-[10px] font-bold uppercase md:hidden"
                style={{ color: COLORS.textLight }}
              >
                Earlier
              </span>

              <p
                className="text-sm leading-6"
                style={{ color: COLORS.textLight }}
              >
                {oldValue}
              </p>
            </div>

            <div
              className="rounded-xl p-3 md:p-0"
              style={{ background: COLORS.soft }}
            >
              <span
                className="mb-1 block text-[10px] font-bold uppercase md:hidden"
                style={{ color: COLORS.blue }}
              >
                Modern
              </span>

              <p className="text-sm leading-6" style={{ color: COLORS.text }}>
                {newValue}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function Tools() {
  const reduceMotion = useReducedMotion();

  const [device, setDevice] = useState("iPhone");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [comparisonType, setComparisonType] = useState("iPhone");

  const data = device === "iPhone" ? iphoneEvolution : macEvolution;

  const filteredDevices = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return data;

    return data.filter((item) =>
      [
        item.year,
        item.name,
        item.design,
        item.materials,
        item.processor,
        item.cpu,
        item.gpu,
        item.memory,
        item.display,
        item.camera,
        item.sensors,
        item.wireless,
        item.ports,
        item.security,
        item.battery,
        item.architecture,
        item.technology,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [data, search]);

  const switchDevice = (nextDevice) => {
    setDevice(nextDevice);
    setSearch("");
    setSelected(null);
  };

  return (
    <main
      className="min-h-screen"
      style={{
        background: COLORS.soft,
        color: COLORS.text,
      }}
    >
      <section className="relative overflow-hidden px-5 pb-20 pt-16 md:px-8 md:pt-24">
        <div
          className="pointer-events-none absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full blur-3xl"
          style={{ background: COLORS.cyan, opacity: 0.25 }}
        />

        <div
          className="pointer-events-none absolute right-[-10%] top-[5%] h-[450px] w-[450px] rounded-full blur-3xl"
          style={{ background: COLORS.green, opacity: 0.35 }}
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]"
              style={{
                background: COLORS.white,
                borderColor: COLORS.border,
                color: COLORS.blue,
              }}
            >
              <History size={15} />
              Page 04 — Device Evolution
            </div>

            <h1
              className="text-5xl font-bold tracking-[-0.04em] md:text-7xl"
              style={{ color: COLORS.text }}
            >
              Search the history.
              <br />
              <span style={{ color: COLORS.blue }}>Explore the evolution.</span>
            </h1>

            <p
              className="mt-7 max-w-2xl text-lg leading-8"
              style={{ color: COLORS.textLight }}
            >
              Search for iPhone or Mac, explore generations across time, and
              discover how design, processors, displays, cameras, security,
              connectivity and internal architecture changed.
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.12 }}
            className="mt-12 max-w-4xl"
          >
            <div
              className="flex items-center gap-4 rounded-3xl border p-3 shadow-xl"
              style={{
                background: COLORS.white,
                borderColor: COLORS.border,
              }}
            >
              <Search
                className="ml-3 shrink-0"
                size={23}
                style={{ color: COLORS.blue }}
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${device} history, processor, camera, display...`}
                className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none md:text-base"
                style={{ color: COLORS.text }}
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                  style={{
                    background: COLORS.softBlue,
                    color: COLORS.text,
                  }}
                >
                  <X size={17} />
                </button>
              )}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {["iPhone", "Mac"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => switchDevice(item)}
                  className="flex items-center gap-2 rounded-2xl border px-6 py-3 text-sm font-bold transition"
                  style={{
                    background: device === item ? COLORS.text : COLORS.white,
                    color: device === item ? COLORS.white : COLORS.text,
                    borderColor: device === item ? COLORS.text : COLORS.border,
                  }}
                >
                  {item === "iPhone" ? (
                    <Smartphone size={17} />
                  ) : (
                    <Layers3 size={17} />
                  )}
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {[
              ["2", "Device families", "iPhone + Mac"],
              ["15", "Generations", "Across both timelines"],
              ["1", "Evolution explorer", "Search everything"],
            ].map(([number, title, subtitle], index) => (
              <motion.div
                key={title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: reduceMotion ? 0 : 0.15 + index * 0.08,
                }}
                className="rounded-3xl border p-6"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border,
                }}
              >
                <p
                  className="text-4xl font-bold"
                  style={{ color: COLORS.blue }}
                >
                  {number}
                </p>

                <p className="mt-3 font-bold" style={{ color: COLORS.text }}>
                  {title}
                </p>

                <p className="mt-1 text-sm" style={{ color: COLORS.textLight }}>
                  {subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{
                  background: COLORS.text,
                  color: COLORS.white,
                }}
              >
                {device === "iPhone" ? (
                  <Smartphone size={22} />
                ) : (
                  <Layers3 size={22} />
                )}
              </div>

              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: COLORS.blue }}
                >
                  {device} History & Evolution
                </p>

                <h2
                  className="mt-1 text-3xl font-bold md:text-4xl"
                  style={{ color: COLORS.text }}
                >
                  {device} through the years
                </h2>
              </div>
            </div>

            <p
              className="mt-5 max-w-2xl text-sm leading-7"
              style={{ color: COLORS.textLight }}
            >
              {search
                ? `${filteredDevices.length} result${
                    filteredDevices.length === 1 ? "" : "s"
                  } found for "${search}".`
                : `Explore every major ${device} generation and select a device to inspect its technical evolution.`}
            </p>
          </div>

          <div
            className="flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm"
            style={{
              background: COLORS.white,
              borderColor: COLORS.border,
              color: COLORS.textLight,
            }}
          >
            <Sparkles size={17} style={{ color: COLORS.blue }} />
            {filteredDevices.length} generations shown
          </div>
        </div>

        {filteredDevices.length > 0 ? (
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredDevices.map((item, index) => (
              <DeviceCard
                key={`${device}-${item.year}`}
                item={item}
                index={index}
                reduceMotion={reduceMotion}
                onOpen={(value) => setSelected(value)}
              />
            ))}
          </div>
        ) : (
          <div
            className="rounded-[28px] border p-14 text-center"
            style={{
              background: COLORS.white,
              borderColor: COLORS.border,
            }}
          >
            <Search
              size={38}
              className="mx-auto"
              style={{ color: COLORS.blue }}
            />

            <h3
              className="mt-5 text-2xl font-bold"
              style={{ color: COLORS.text }}
            >
              No evolution results found
            </h3>

            <p
              className="mx-auto mt-3 max-w-md text-sm leading-6"
              style={{ color: COLORS.textLight }}
            >
              Try searching for a year, generation, processor, camera, display,
              security feature or another technical term.
            </p>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: COLORS.blue }}
          >
            Evolution Timeline
          </p>

          <h2
            className="mt-4 text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: COLORS.text }}
          >
            The technology changed step by step.
          </h2>

          <p
            className="mt-5 text-base leading-7"
            style={{ color: COLORS.textLight }}
          >
            Each generation introduced changes that affected the physical
            anatomy and the engineering architecture of the device.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute bottom-0 left-5 top-0 w-px md:left-1/2"
            style={{ background: COLORS.border }}
          />

          <div className="space-y-8">
            {data.map((item, index) => (
              <motion.button
                type="button"
                key={`timeline-${item.year}`}
                onClick={() => setSelected(item)}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative grid w-full gap-6 text-left md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? "md:pr-16" : "md:order-2 md:pl-16"
                  } ml-12 md:ml-0`}
                >
                  <div
                    className="rounded-3xl border p-6 transition hover:-translate-y-1"
                    style={{
                      background: COLORS.white,
                      borderColor: COLORS.border,
                    }}
                  >
                    <div
                      className={`flex items-center gap-3 ${
                        index % 2 !== 0 ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold"
                        style={{
                          background: COLORS.softBlue,
                          color: COLORS.blue,
                        }}
                      >
                        {item.year}
                      </span>

                      <span
                        className="text-sm font-bold"
                        style={{ color: COLORS.text }}
                      >
                        {item.name}
                      </span>
                    </div>

                    <p
                      className="mt-4 text-sm leading-7"
                      style={{ color: COLORS.textLight }}
                    >
                      {item.technology}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block" />

                <div
                  className="absolute left-[9px] top-7 flex h-5 w-5 items-center justify-center rounded-full border-4 md:left-[calc(50%-10px)]"
                  style={{
                    background: COLORS.blue,
                    borderColor: COLORS.soft,
                  }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <ComparisonSection
        type={comparisonType}
        setType={setComparisonType}
        reduceMotion={reduceMotion}
      />

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: COLORS.blue }}
          >
            Engineering Changes
          </p>

          <h2
            className="mt-4 text-4xl font-bold md:text-5xl"
            style={{ color: COLORS.text }}
          >
            How evolution changed the hardware.
          </h2>

          <p
            className="mt-5 text-base leading-7"
            style={{ color: COLORS.textLight }}
          >
            Device evolution is not only about appearance. Every generation
            changes how components communicate, consume power, process data and
            fit together.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologyChanges.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.05,
                }}
                className="rounded-[28px] border p-7"
                style={{
                  background: COLORS.white,
                  borderColor: COLORS.border,
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    background: COLORS.softBlue,
                    color: COLORS.blue,
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3
                  className="mt-6 text-xl font-bold"
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
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div
          className="relative overflow-hidden rounded-[36px] p-8 md:p-12"
          style={{
            background: COLORS.text,
          }}
        >
          <div
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background: COLORS.cyan,
              opacity: 0.18,
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.22em]"
                style={{ color: COLORS.cyan }}
              >
                Continue exploring
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-bold text-white md:text-5xl">
                Evolution explains the technology. Anatomy explains how it
                works.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70">
                After exploring the history of iPhone and Mac, open the
                technical anatomy pages to investigate the components,
                architecture, sensors, security and systems inside each device.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/iph"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold transition hover:scale-[1.02]"
                style={{
                  background: COLORS.white,
                  color: COLORS.text,
                }}
              >
                iPhone Anatomy
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/mac"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                style={{
                  borderColor: "rgba(255,255,255,.25)",
                }}
              >
                Mac Anatomy
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="border-t px-5 py-8 md:px-8"
        style={{ borderColor: COLORS.border }}
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm md:flex-row">
          <span style={{ color: COLORS.text }}>
            AppleHub — iPhone & Mac Evolution
          </span>

          <span style={{ color: COLORS.textLight }}>
            Page 04 — History & Evolution
          </span>
        </div>
      </footer>

      <AnimatePresence>
        {selected && (
          <DetailPanel
            item={selected}
            type={device}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Tools;
