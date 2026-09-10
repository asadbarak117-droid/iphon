import { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import {
  Cpu,
  MemoryStick,
  HardDrive,
  BatteryCharging,
  Camera,
  Radar,
  Thermometer,
  Usb,
  Wifi,
  ShieldCheck,
  CircuitBoard,
  Monitor,
  Smartphone,
  Laptop,
  Cable,
  Volume2,
  Gauge,
  Wrench,
  Layers3,
  Zap,
  Network,
  LockKeyhole,
  CircleDot,
  Microchip,
  Database,
  Activity,
  Settings2,
  Search,
  ChevronDown,
  Info,
  Boxes,
  Waves,
  Radio,
  Power,
  Sparkles,
  ScanLine,
  HardDriveDownload,
  Workflow,
  Server,
  PlugZap,
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

const DEVICE_IMAGES = {
  iphone:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=90",
  mac: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=90",
};

const comparisonSections = [
  {
    id: "external",
    title: "External Structure",
    subtitle: "What the user can physically interact with",
    icon: Layers3,
    iphone:
      "Compact enclosure, display, camera system, buttons, speakers, microphones, charging interface and wireless antennas.",
    mac: "Aluminum enclosure, display assembly, keyboard, trackpad, speakers, camera, microphones, ports and ventilation architecture.",
    technician:
      "External inspection begins with chassis condition, display integrity, port condition, button response and signs of liquid or impact damage.",
  },
  {
    id: "internal",
    title: "Internal Structure",
    subtitle: "How the hardware is organized inside",
    icon: CircuitBoard,
    iphone:
      "Highly integrated logic board, SoC, memory, storage, battery, camera modules, sensors, wireless systems and compact thermal paths.",
    mac: "Large logic board architecture with processor, memory, storage, power circuitry, display controller, wireless modules and thermal components.",
    technician:
      "Internal layouts prioritize compactness in iPhone systems and serviceability, thermal management and modular access in Mac systems.",
  },
  {
    id: "components",
    title: "Major Components",
    subtitle: "Core hardware responsible for computing",
    icon: Cpu,
    iphone:
      "Apple silicon SoC, RAM, flash storage, battery, camera modules, display controller and sensor systems.",
    mac: "Apple silicon processor, unified memory, SSD storage, battery system, display controller, speakers and connectivity hardware.",
    technician:
      "Component analysis identifies the relationship between processing, storage, power, thermal management and I/O subsystems.",
  },
  {
    id: "sensors",
    title: "Sensors",
    subtitle: "Systems that measure the physical environment",
    icon: Radar,
    iphone:
      "Accelerometer, gyroscope, proximity, ambient light, barometric and biometric sensing systems.",
    mac: "Ambient light, camera-based sensing, lid-angle sensing and system monitoring sensors.",
    technician:
      "Sensor testing can reveal calibration errors, physical damage, connector problems and board-level faults.",
  },
  {
    id: "power",
    title: "Power Systems",
    subtitle: "Energy storage and distribution",
    icon: BatteryCharging,
    iphone:
      "Rechargeable lithium-ion battery with tightly integrated power-management electronics.",
    mac: "Large-capacity rechargeable battery system combined with charging, power-management and thermal-control circuitry.",
    technician:
      "Battery health, charge cycles, voltage stability, charging behavior and thermal response are key diagnostic indicators.",
  },
  {
    id: "io",
    title: "Input / Output",
    subtitle: "How the system communicates with users and peripherals",
    icon: Network,
    iphone:
      "Touch display, cameras, microphones, speakers, wireless communication and charging/data interface.",
    mac: "Keyboard, trackpad, display, speakers, microphone array, USB-C/Thunderbolt and wireless interfaces.",
    technician:
      "I/O diagnostics isolate problems between physical connectors, controllers, firmware and peripheral devices.",
  },
];

const componentData = [
  {
    id: "processor",
    name: "Processor",
    icon: Cpu,
    iphone: "Apple silicon A-series SoC",
    mac: "Apple silicon M-series SoC",
    description:
      "The processor executes instructions and coordinates computation across CPU, GPU, memory and specialized accelerators.",
    technical:
      "Modern Apple silicon integrates multiple processing domains into a highly unified architecture.",
  },
  {
    id: "gpu",
    name: "GPU",
    icon: Monitor,
    iphone: "Integrated mobile GPU",
    mac: "Integrated Apple GPU",
    description:
      "The GPU accelerates graphics rendering, visual effects, video processing and parallel workloads.",
    technical:
      "GPU architecture is closely coupled with the SoC and unified memory system.",
  },
  {
    id: "memory",
    name: "Memory",
    icon: MemoryStick,
    iphone: "Integrated system memory",
    mac: "Unified memory architecture",
    description:
      "Memory provides high-speed temporary storage for active applications and system processes.",
    technical:
      "Unified memory allows processing units to access a shared high-bandwidth memory pool.",
  },
  {
    id: "storage",
    name: "Storage",
    icon: HardDrive,
    iphone: "Flash storage",
    mac: "NVMe-based SSD storage",
    description:
      "Storage preserves the operating system, applications and user data after power is removed.",
    technical:
      "Flash storage provides non-volatile data retention and fast random access compared with traditional magnetic disks.",
  },
  {
    id: "battery",
    name: "Battery",
    icon: BatteryCharging,
    iphone: "Lithium-ion battery",
    mac: "Rechargeable lithium battery",
    description:
      "The battery supplies portable electrical energy to the system.",
    technical:
      "Battery management circuitry monitors charging, temperature, current and cell protection.",
  },
  {
    id: "camera",
    name: "Camera",
    icon: Camera,
    iphone: "Multi-camera imaging system",
    mac: "Integrated webcam",
    description:
      "Camera hardware converts incoming light into digital image data.",
    technical:
      "Image processing combines sensor data with computational photography and software algorithms.",
  },
  {
    id: "sensors",
    name: "Sensors",
    icon: Radar,
    iphone: "Motion, proximity, light and biometric sensors",
    mac: "Environmental and system sensors",
    description:
      "Sensors collect physical measurements and provide contextual information to the operating system.",
    technical:
      "Sensor data is processed by dedicated controllers and software frameworks.",
  },
  {
    id: "thermal",
    name: "Cooling / Thermal",
    icon: Thermometer,
    iphone: "Passive thermal architecture",
    mac: "Advanced thermal management",
    description:
      "Thermal systems prevent excessive temperature and maintain reliable performance.",
    technical:
      "Mac systems have greater physical thermal capacity, while mobile systems rely heavily on efficiency and passive heat spreading.",
  },
  {
    id: "ports",
    name: "Ports",
    icon: PlugZap,
    iphone: "Charging / data interface",
    mac: "USB-C / Thunderbolt and other I/O",
    description:
      "Ports provide physical electrical and data connections between the device and external hardware.",
    technical:
      "Modern high-speed interfaces combine power delivery, data transfer and display connectivity.",
  },
  {
    id: "security",
    name: "Security",
    icon: ShieldCheck,
    iphone: "Hardware-assisted security",
    mac: "Hardware-assisted security",
    description:
      "Security hardware protects authentication data, encryption keys and trusted system operations.",
    technical:
      "Dedicated security architecture helps isolate sensitive credentials and cryptographic operations.",
  },
];

const technicianMetrics = [
  {
    name: "Processing",
    iphone: 88,
    mac: 96,
    icon: Cpu,
  },
  {
    name: "Thermal Capacity",
    iphone: 61,
    mac: 94,
    icon: Thermometer,
  },
  {
    name: "Port Expansion",
    iphone: 42,
    mac: 91,
    icon: Usb,
  },
  {
    name: "Sensor Density",
    iphone: 96,
    mac: 63,
    icon: Radar,
  },
  {
    name: "Battery Portability",
    iphone: 94,
    mac: 76,
    icon: BatteryCharging,
  },
  {
    name: "Repair Complexity",
    iphone: 91,
    mac: 78,
    icon: Wrench,
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2"
        style={{
          borderColor: COLORS.border,
          background: COLORS.white,
          color: COLORS.blue,
        }}
      >
        <Sparkles size={14} />
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="text-3xl font-black tracking-tight md:text-5xl"
        style={{ color: COLORS.text }}
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-5 text-sm leading-7 md:text-base"
        style={{ color: COLORS.textLight }}
      >
        {description}
      </motion.p>
    </div>
  );
}

function DeviceArchitectureShowcase() {
  const [activeDevice, setActiveDevice] = useState("iphone");

  const device =
    activeDevice === "iphone"
      ? {
          name: "iPhone",
          type: "MOBILE SYSTEM",
          image: DEVICE_IMAGES.iphone,
          accent: COLORS.blue,
          secondary: COLORS.cyan,
          stats: [
            {
              label: "SoC",
              value: "A-Series",
              icon: Cpu,
            },
            {
              label: "Sensors",
              value: "Multi-System",
              icon: Radar,
            },
            {
              label: "Power",
              value: "Battery",
              icon: BatteryCharging,
            },
            {
              label: "Network",
              value: "Wireless",
              icon: Wifi,
            },
          ],
        }
      : {
          name: "MacBook",
          type: "PERSONAL COMPUTER",
          image: DEVICE_IMAGES.mac,
          accent: COLORS.green,
          secondary: COLORS.mint,
          stats: [
            {
              label: "Processor",
              value: "Apple Silicon",
              icon: Cpu,
            },
            {
              label: "Thermal",
              value: "Advanced",
              icon: Thermometer,
            },
            {
              label: "I/O",
              value: "USB-C / TB",
              icon: Cable,
            },
            {
              label: "Network",
              value: "Wi-Fi",
              icon: Wifi,
            },
          ],
        };

  return (
    <div className="relative mx-auto min-h-[650px] w-full max-w-3xl overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(${COLORS.border}55 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.border}55 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(circle at center, black 15%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 15%, transparent 75%)",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: device.accent,
          opacity: 0.13,
        }}
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          borderColor: device.accent,
          opacity: 0.22,
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.04, 1],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
        style={{
          borderColor: device.secondary,
          opacity: 0.4,
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          borderColor: device.accent,
          opacity: 0.12,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {[...Array(12)].map((_, index) => {
        const angle = (index / 12) * Math.PI * 2;
        const radius = 220;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
            style={{
              marginLeft: x,
              marginTop: y,
              background: index % 2 === 0 ? device.accent : device.secondary,
            }}
            animate={{
              opacity: [0.15, 1, 0.15],
              scale: [0.6, 1.5, 0.6],
            }}
            transition={{
              duration: 2.5 + index * 0.12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          />
        );
      })}

      <motion.div
        className="absolute left-[8%] top-[18%] h-2 w-2 rounded-full"
        style={{ background: device.accent }}
        animate={{
          x: [0, 40, 0],
          y: [0, 20, 0],
          opacity: [0.2, 1, 0.2],
          scale: [0.7, 1.4, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[10%] top-[30%] h-1.5 w-1.5 rounded-full"
        style={{ background: device.secondary }}
        animate={{
          x: [0, -35, 0],
          y: [0, 30, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-[18%] left-[15%] h-1.5 w-1.5 rounded-full"
        style={{ background: device.accent }}
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute bottom-[12%] right-[15%] h-2 w-2 rounded-full"
        style={{ background: device.secondary }}
        animate={{
          x: [0, -25, 0],
          y: [0, -30, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <motion.div
        className="absolute left-[5%] top-[41%] hidden h-px w-32 origin-right md:block"
        style={{
          background: `linear-gradient(90deg, transparent, ${device.accent})`,
        }}
        animate={{
          scaleX: [0.3, 1, 0.3],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[5%] top-[58%] hidden h-px w-32 origin-left md:block"
        style={{
          background: `linear-gradient(90deg, ${device.accent}, transparent)`,
        }}
        animate={{
          scaleX: [0.3, 1, 0.3],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7,
        }}
      />

      <motion.div
        className="absolute left-[5%] top-[34%] hidden md:block"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="rounded-2xl border px-3 py-2 shadow-lg backdrop-blur-xl"
          style={{
            borderColor: COLORS.border,
            background: "rgba(255,255,255,0.86)",
          }}
        >
          <div className="flex items-center gap-2">
            <CircuitBoard size={14} style={{ color: device.accent }} />

            <span
              className="text-[9px] font-black uppercase tracking-widest"
              style={{ color: COLORS.text }}
            >
              Architecture
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <motion.div
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: device.accent }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            />

            <span
              className="text-[9px] font-bold"
              style={{ color: COLORS.textLight }}
            >
              ACTIVE
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[5%] top-[42%] hidden md:block"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <div
          className="rounded-2xl border px-3 py-2 shadow-lg backdrop-blur-xl"
          style={{
            borderColor: COLORS.border,
            background: "rgba(255,255,255,0.86)",
          }}
        >
          <div className="flex items-center gap-2">
            <Activity size={14} style={{ color: device.accent }} />

            <span
              className="text-[9px] font-black uppercase tracking-widest"
              style={{ color: COLORS.text }}
            >
              System
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <motion.div
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: device.accent }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
            />

            <span
              className="text-[9px] font-bold"
              style={{ color: COLORS.textLight }}
            >
              MONITORING
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-8 z-30 -translate-x-1/2"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="flex items-center gap-2 rounded-full border px-4 py-2 shadow-lg backdrop-blur-xl"
          style={{
            background: "rgba(255,255,255,0.9)",
            borderColor: COLORS.border,
          }}
        >
          <motion.div
            className="h-2 w-2 rounded-full"
            style={{ background: device.accent }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
            }}
          />

          <span
            className="text-[9px] font-black tracking-[0.2em]"
            style={{ color: COLORS.text }}
          >
            ARCHITECTURE MAP
          </span>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-[72%] pt-20"
        animate={{
          y: [0, -12, 0],
          rotateZ: [0, 0.5, 0, -0.5, 0],
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateZ: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div
          className="absolute -inset-6 rounded-[3rem] blur-2xl"
          style={{
            background: device.accent,
            opacity: 0.11,
          }}
        />

        <motion.div
          className="relative overflow-hidden rounded-[2.8rem] border bg-white p-3 shadow-2xl"
          style={{
            borderColor: COLORS.border,
            boxShadow: "0 35px 100px rgba(23,50,77,0.16)",
          }}
          whileHover={{
            scale: 1.025,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <div className="relative overflow-hidden rounded-[2.25rem]">
            <AnimatePresence mode="wait">
              <motion.img
                key={device.image}
                src={device.image}
                alt={device.name}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  filter: "blur(8px)",
                }}
                transition={{
                  duration: 0.7,
                }}
                className="h-[400px] w-full object-cover md:h-[465px]"
              />
            </AnimatePresence>

            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(120deg, transparent 30%, ${device.accent}25 50%, transparent 70%)`,
              }}
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2,
              }}
            />

            <motion.div
              className="pointer-events-none absolute left-0 right-0 h-px"
              style={{
                background: device.accent,
                boxShadow: `0 0 20px ${device.accent}`,
              }}
              animate={{
                top: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 1,
              }}
            />

            <div
              className="absolute left-4 top-4 rounded-full border px-3 py-2 backdrop-blur-xl"
              style={{
                borderColor: "rgba(255,255,255,0.55)",
                background: "rgba(255,255,255,0.82)",
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="h-2 w-2 rounded-full"
                  style={{ background: device.accent }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                  }}
                />

                <span className="text-[9px] font-black tracking-widest">
                  LIVE ANALYSIS
                </span>
              </div>
            </div>

            <div
              className="absolute right-4 top-4 rounded-xl border px-3 py-2 backdrop-blur-xl"
              style={{
                borderColor: "rgba(255,255,255,0.55)",
                background: "rgba(255,255,255,0.82)",
              }}
            >
              <div className="flex items-center gap-2">
                <ScanLine size={13} style={{ color: device.accent }} />

                <span className="text-[8px] font-black uppercase tracking-widest">
                  SCAN
                </span>
              </div>
            </div>

            <div
              className="absolute bottom-4 left-4 right-4 rounded-2xl border p-4 backdrop-blur-xl"
              style={{
                borderColor: "rgba(255,255,255,0.55)",
                background: "rgba(255,255,255,0.88)",
              }}
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p
                    className="text-[9px] font-black uppercase tracking-[0.2em]"
                    style={{ color: COLORS.textLight }}
                  >
                    {device.type}
                  </p>

                  <h3
                    className="mt-1 text-2xl font-black"
                    style={{ color: COLORS.text }}
                  >
                    {device.name}
                  </h3>
                </div>

                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: device.accent,
                    color: COLORS.white,
                  }}
                  animate={{
                    rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  <ScanLine size={19} />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-30 mx-auto mt-5 grid w-[88%] grid-cols-2 gap-2 md:grid-cols-4">
        {device.stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -5,
              }}
              className="rounded-2xl border p-3 backdrop-blur-xl"
              style={{
                background: "rgba(255,255,255,0.9)",
                borderColor: COLORS.border,
              }}
            >
              <div className="flex items-center gap-2">
                <Icon size={14} style={{ color: device.accent }} />

                <span
                  className="text-[8px] font-black uppercase tracking-widest"
                  style={{ color: COLORS.textLight }}
                >
                  {stat.label}
                </span>
              </div>

              <p
                className="mt-2 text-[11px] font-black"
                style={{ color: COLORS.text }}
              >
                {stat.value}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div
        className="relative z-40 mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border p-1.5 shadow-lg"
        style={{
          background: "rgba(255,255,255,0.92)",
          borderColor: COLORS.border,
        }}
      >
        <button
          type="button"
          onClick={() => setActiveDevice("iphone")}
          className="flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-black transition-all"
          style={{
            background: activeDevice === "iphone" ? COLORS.text : "transparent",
            color: activeDevice === "iphone" ? COLORS.white : COLORS.textLight,
          }}
        >
          <Smartphone size={14} />
          iPhone
        </button>

        <button
          type="button"
          onClick={() => setActiveDevice("mac")}
          className="flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-black transition-all"
          style={{
            background: activeDevice === "mac" ? COLORS.text : "transparent",
            color: activeDevice === "mac" ? COLORS.white : COLORS.textLight,
          }}
        >
          <Laptop size={14} />
          MacBook
        </button>
      </div>
    </div>
  );
}

function ComparisonCard({ item, index, mode }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
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
        y: -7,
      }}
      className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm"
      style={{
        borderColor: COLORS.border,
      }}
    >
      <motion.div
        className="absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl"
        style={{
          background: index % 2 === 0 ? COLORS.cyan : COLORS.green,
          opacity: 0.18,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{
              background: index % 2 === 0 ? COLORS.softBlue : "#F1FFF3",
              color: index % 2 === 0 ? COLORS.blue : "#4C9A63",
            }}
          >
            <Icon size={21} />
          </div>

          <span
            className="rounded-full border px-3 py-1.5 text-[8px] font-black uppercase tracking-widest"
            style={{
              borderColor: COLORS.border,
              color: COLORS.textLight,
            }}
          >
            0{index + 1}
          </span>
        </div>

        <h3 className="mt-5 text-xl font-black" style={{ color: COLORS.text }}>
          {item.title}
        </h3>

        <p
          className="mt-2 text-xs font-semibold"
          style={{ color: COLORS.textLight }}
        >
          {item.subtitle}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div
            className="rounded-2xl p-4"
            style={{ background: COLORS.softBlue }}
          >
            <div className="mb-2 flex items-center gap-2">
              <Smartphone size={14} style={{ color: COLORS.blue }} />

              <span
                className="text-[9px] font-black uppercase tracking-widest"
                style={{ color: COLORS.blue }}
              >
                iPhone
              </span>
            </div>

            <p className="text-xs leading-6" style={{ color: COLORS.text }}>
              {item.iphone}
            </p>
          </div>

          <div className="rounded-2xl p-4" style={{ background: "#F3FFF4" }}>
            <div className="mb-2 flex items-center gap-2">
              <Laptop size={14} style={{ color: "#4C9A63" }} />

              <span
                className="text-[9px] font-black uppercase tracking-widest"
                style={{ color: "#4C9A63" }}
              >
                MacBook
              </span>
            </div>

            <p className="text-xs leading-6" style={{ color: COLORS.text }}>
              {item.mac}
            </p>
          </div>
        </div>

        {mode === "technician" && (
          <div
            className="mt-4 rounded-2xl border p-4"
            style={{
              borderColor: COLORS.border,
              background: "#FCFEFF",
            }}
          >
            <div className="mb-2 flex items-center gap-2">
              <Wrench size={14} style={{ color: COLORS.text }} />

              <span
                className="text-[9px] font-black uppercase tracking-widest"
                style={{ color: COLORS.text }}
              >
                Technician View
              </span>
            </div>

            <p
              className="text-xs leading-6"
              style={{ color: COLORS.textLight }}
            >
              {item.technician}
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}

function ComponentCard({ item, index, expanded, onToggle }) {
  const Icon = item.icon;

  return (
    <motion.div
      layout
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
      }}
      className="overflow-hidden rounded-3xl border bg-white"
      style={{
        borderColor: COLORS.border,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
            style={{
              background: index % 2 === 0 ? COLORS.softBlue : "#F1FFF3",
              color: index % 2 === 0 ? COLORS.blue : "#4C9A63",
            }}
          >
            <Icon size={19} />
          </div>

          <div>
            <h3
              className="text-sm font-black md:text-base"
              style={{ color: COLORS.text }}
            >
              {item.name}
            </h3>

            <p
              className="mt-1 text-[10px] font-semibold"
              style={{ color: COLORS.textLight }}
            >
              iPhone: {item.iphone}
            </p>
          </div>
        </div>

        <motion.div
          animate={{
            rotate: expanded ? 180 : 0,
          }}
        >
          <ChevronDown size={18} style={{ color: COLORS.textLight }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
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
            transition={{
              duration: 0.35,
            }}
          >
            <div
              className="border-t px-5 pb-5 pt-4"
              style={{ borderColor: COLORS.border }}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Smartphone size={13} style={{ color: COLORS.blue }} />

                    <span
                      className="text-[9px] font-black uppercase tracking-widest"
                      style={{ color: COLORS.blue }}
                    >
                      iPhone
                    </span>
                  </div>

                  <p
                    className="text-xs leading-6"
                    style={{ color: COLORS.text }}
                  >
                    {item.iphone}
                  </p>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Laptop size={13} style={{ color: "#4C9A63" }} />

                    <span
                      className="text-[9px] font-black uppercase tracking-widest"
                      style={{ color: "#4C9A63" }}
                    >
                      MacBook
                    </span>
                  </div>

                  <p
                    className="text-xs leading-6"
                    style={{ color: COLORS.text }}
                  >
                    {item.mac}
                  </p>
                </div>
              </div>

              <div
                className="mt-4 rounded-2xl p-4"
                style={{ background: COLORS.soft }}
              >
                <div className="flex items-center gap-2">
                  <Info size={14} style={{ color: COLORS.blue }} />

                  <span
                    className="text-[9px] font-black uppercase tracking-widest"
                    style={{ color: COLORS.text }}
                  >
                    Function
                  </span>
                </div>

                <p
                  className="mt-2 text-xs leading-6"
                  style={{ color: COLORS.textLight }}
                >
                  {item.description}
                </p>

                <p
                  className="mt-3 text-xs leading-6"
                  style={{ color: COLORS.text }}
                >
                  {item.technical}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TechnicianMetric({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="rounded-3xl border bg-white p-5"
      style={{
        borderColor: COLORS.border,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{
              background: COLORS.softBlue,
              color: COLORS.blue,
            }}
          >
            <Icon size={17} />
          </div>

          <span className="text-sm font-black" style={{ color: COLORS.text }}>
            {item.name}
          </span>
        </div>

        <Gauge size={16} style={{ color: COLORS.textLight }} />
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <div className="mb-2 flex justify-between">
            <span
              className="text-[9px] font-black uppercase tracking-widest"
              style={{ color: COLORS.textLight }}
            >
              iPhone
            </span>

            <span
              className="text-[9px] font-black"
              style={{ color: COLORS.blue }}
            >
              {item.iphone}%
            </span>
          </div>

          <div
            className="h-2 overflow-hidden rounded-full"
            style={{ background: COLORS.softBlue }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${item.iphone}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: index * 0.08,
              }}
              className="h-full rounded-full"
              style={{
                background: COLORS.blue,
              }}
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex justify-between">
            <span
              className="text-[9px] font-black uppercase tracking-widest"
              style={{ color: COLORS.textLight }}
            >
              MacBook
            </span>

            <span
              className="text-[9px] font-black"
              style={{ color: "#4C9A63" }}
            >
              {item.mac}%
            </span>
          </div>

          <div
            className="h-2 overflow-hidden rounded-full"
            style={{ background: "#F1FFF3" }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${item.mac}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: index * 0.08 + 0.15,
              }}
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #D8FFC5, #4C9A63)",
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Guides() {
  const [mode, setMode] = useState("anatomy");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filteredComponents = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return componentData;

    return componentData.filter((item) =>
      `${item.name} ${item.iphone} ${item.mac} ${item.description}`
        .toLowerCase()
        .includes(value),
    );
  }, [search]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, {
    stiffness: 90,
    damping: 20,
  });

  const springY = useSpring(pointerY, {
    stiffness: 90,
    damping: 20,
  });

  const rotateX = useTransform(springY, [-200, 200], [5, -5]);
  const rotateY = useTransform(springX, [-200, 200], [-5, 5]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    pointerX.set(event.clientX - (rect.left + rect.width / 2));

    pointerY.set(event.clientY - (rect.top + rect.height / 2));
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
        className="relative overflow-hidden px-6 pb-20 pt-28 md:px-10 lg:px-16"
        onMouseMove={handlePointerMove}
        onMouseLeave={resetPointer}
      >
        <motion.div
          className="absolute -left-32 top-20 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: COLORS.cyan,
            opacity: 0.18,
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-32 top-40 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: COLORS.green,
            opacity: 0.22,
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
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
                duration: 0.7,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2"
              style={{
                background: COLORS.white,
                borderColor: COLORS.border,
                color: COLORS.blue,
              }}
            >
              <Boxes size={15} />

              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                05 — Comparative Analysis
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl"
            >
              Anatomy of{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${COLORS.blue}, #54C7FF, #4C9A63)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Two Systems.
              </span>
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
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-7 max-w-xl text-base leading-8"
              style={{ color: COLORS.textLight }}
            >
              A technical comparison of iPhone and MacBook architecture — from
              external structure and internal components to power, sensors,
              connectivity, thermal behavior and technician-level analysis.
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
                delay: 0.3,
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                {
                  id: "external",
                  label: "External",
                  icon: Layers3,
                },
                {
                  id: "internal",
                  label: "Internal",
                  icon: CircuitBoard,
                },
                {
                  id: "components",
                  label: "Components",
                  icon: Cpu,
                },
                {
                  id: "power",
                  label: "Power",
                  icon: BatteryCharging,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-2 rounded-full border bg-white px-4 py-2.5 text-xs font-black shadow-sm transition-all hover:-translate-y-1"
                    style={{
                      borderColor: COLORS.border,
                      color: COLORS.text,
                    }}
                  >
                    <Icon size={14} style={{ color: COLORS.blue }} />

                    {item.label}
                  </button>
                );
              })}
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              className="mt-10 flex items-center gap-6"
            >
              <div>
                <p
                  className="text-3xl font-black"
                  style={{ color: COLORS.text }}
                >
                  09+
                </p>

                <p
                  className="mt-1 text-[9px] font-black uppercase tracking-widest"
                  style={{ color: COLORS.textLight }}
                >
                  Technical Areas
                </p>
              </div>

              <div
                className="h-10 w-px"
                style={{ background: COLORS.border }}
              />

              <div>
                <p
                  className="text-3xl font-black"
                  style={{ color: COLORS.text }}
                >
                  02
                </p>

                <p
                  className="mt-1 text-[9px] font-black uppercase tracking-widest"
                  style={{ color: COLORS.textLight }}
                >
                  Device Classes
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            style={{
              rotateX,
              rotateY,
              transformPerspective: 1400,
            }}
            className="[transform-style:preserve-3d]"
          >
            <DeviceArchitectureShowcase />
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="System Anatomy"
          title="External to Internal"
          description="The same engineering principles appear in both product families, but physical scale, thermal capacity, power requirements and I/O architecture create important differences."
        />

        <div className="mx-auto mt-14 max-w-7xl">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {[
              {
                id: "anatomy",
                label: "Anatomy",
                icon: Layers3,
              },
              {
                id: "components",
                label: "Components",
                icon: Cpu,
              },
              {
                id: "technician",
                label: "Technician",
                icon: Wrench,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMode(item.id)}
                  className="flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-black transition-all"
                  style={{
                    borderColor: mode === item.id ? COLORS.text : COLORS.border,
                    background: mode === item.id ? COLORS.text : COLORS.white,
                    color: mode === item.id ? COLORS.white : COLORS.textLight,
                  }}
                >
                  <Icon size={14} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {comparisonSections.map((item, index) => (
              <div id={item.id} key={item.id} className="scroll-mt-24">
                <ComparisonCard item={item} index={index} mode={mode} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="px-6 py-24 md:px-10 lg:px-16"
        style={{
          background: COLORS.white,
        }}
      >
        <SectionHeading
          eyebrow="Component Matrix"
          title="Component & Function Comparison"
          description="Explore the major hardware systems and understand what each component does inside the iPhone and MacBook architecture."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <div
            className="mb-7 flex items-center gap-3 rounded-2xl border bg-white px-4 py-3"
            style={{
              borderColor: COLORS.border,
            }}
          >
            <Search size={18} style={{ color: COLORS.textLight }} />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search processor, battery, camera, sensors..."
              className="w-full bg-transparent text-sm font-semibold outline-none"
              style={{ color: COLORS.text }}
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-xs font-black"
                style={{ color: COLORS.blue }}
              >
                CLEAR
              </button>
            )}
          </div>

          <div className="space-y-3">
            {filteredComponents.map((item, index) => (
              <ComponentCard
                key={item.id}
                item={item}
                index={index}
                expanded={expanded === item.id}
                onToggle={() =>
                  setExpanded(expanded === item.id ? null : item.id)
                }
              />
            ))}
          </div>

          {filteredComponents.length === 0 && (
            <div
              className="rounded-3xl border p-10 text-center"
              style={{
                borderColor: COLORS.border,
                background: COLORS.soft,
              }}
            >
              <Search
                size={30}
                className="mx-auto"
                style={{ color: COLORS.textLight }}
              />

              <p className="mt-4 font-black" style={{ color: COLORS.text }}>
                No component found
              </p>

              <p className="mt-2 text-xs" style={{ color: COLORS.textLight }}>
                Try searching for CPU, memory, battery, camera, storage or
                sensors.
              </p>
            </div>
          )}
        </div>
      </section>

      <section
        className="px-6 py-24 md:px-10 lg:px-16"
        style={{
          background: COLORS.soft,
        }}
      >
        <SectionHeading
          eyebrow="Technician Mode"
          title="Performance & Service Perspective"
          description="A technician does not only identify components. They examine thermal behavior, power stability, connectivity, sensor response and the interaction between subsystems."
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
          {technicianMetrics.map((item, index) => (
            <TechnicianMetric key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div
            className="relative overflow-hidden rounded-[2.5rem] border p-8 md:p-12"
            style={{
              background:
                "linear-gradient(135deg, #FFFFFF 0%, #F3FBFF 50%, #F3FFF4 100%)",
              borderColor: COLORS.border,
            }}
          >
            <motion.div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
              style={{
                background: COLORS.cyan,
                opacity: 0.18,
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-3xl"
              style={{
                background: COLORS.green,
                opacity: 0.2,
              }}
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative grid items-center gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <div
                  className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: COLORS.blue }}
                >
                  <Workflow size={15} />
                  Final Analysis
                </div>

                <h2
                  className="max-w-2xl text-3xl font-black md:text-5xl"
                  style={{ color: COLORS.text }}
                >
                  Different dimensions.
                  <br />
                  One engineering philosophy.
                </h2>

                <p
                  className="mt-5 max-w-2xl text-sm leading-7"
                  style={{ color: COLORS.textLight }}
                >
                  iPhone architecture prioritizes compact integration,
                  efficiency and mobility. MacBook architecture expands the same
                  principles into a larger computing platform with greater
                  thermal, power and I/O capacity.
                </p>
              </div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-28 w-28 items-center justify-center rounded-[2rem] border bg-white shadow-xl"
                style={{
                  borderColor: COLORS.border,
                }}
              >
                <div className="relative">
                  <Smartphone size={35} style={{ color: COLORS.blue }} />

                  <motion.div
                    className="absolute -right-5 -top-5"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <CircleDot size={24} style={{ color: "#4C9A63" }} />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="border-t px-6 py-10 text-center"
        style={{ borderColor: COLORS.border }}
      >
        <div className="flex items-center justify-center gap-2">
          <Activity size={15} style={{ color: COLORS.blue }} />

          <span
            className="text-[10px] font-black uppercase tracking-[0.2em]"
            style={{ color: COLORS.text }}
          >
            AppleHub — Comparative & Technician Analysis
          </span>
        </div>

        <p className="mt-3 text-xs" style={{ color: COLORS.textLight }}>
          Page 05 · Device Anatomy · Component Functions · Technical Comparison
        </p>
      </footer>
    </main>
  );
}

export default Guides;
