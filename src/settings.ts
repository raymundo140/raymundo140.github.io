export const profile = {
	fullName: 'Raymundo',
	title: 'Intelligent Robotics & Autonomous Systems Engineer',
	institute: 'Tecnológico de Monterrey (ITESM)',
	author_name: 'Roberto Raymundo Gomez Vargas', // Author name to be highlighted in the papers section

}



export type Project = {
	slug: string;
	title: string;
	summary: string;
	tags: string[];
	image: string;
	repoUrl?: string;
	demoUrl?: string;
	description?: string;
	institution?: string;
	location?: string;
	company?: string;
	logo?: string;
	pdfUrl?: string;
  };

  export const projects: Project[] = [
	{
	  slug: 'p1',
	  title: 'Autonomous Mapping — CALL-M Mobile Manipulator',
	  summary: 'Modular ROS 2 autonomous-mapping architecture for CALL-M, integrating multimodal perception, static–dynamic obstacle filtering, SLAM, frontier-based exploration, Nav2, goal supervision, and real-robot validation.',
	  tags: ['ROS 2', 'SLAM', 'Nav2', 'Frontier Exploration', 'LiDAR', 'RGB-D', 'Mobile Manipulation'],
	  image: '/images/projects/p1.png',
	  institution: 'CNRS-AIST JRL (Joint Robotics Laboratory)',
	  location: 'Tsukuba, Japan',
	  company: 'National Institute of Advanced Industrial Science and Technology (AIST)',
	  logo: '/images/experience/w1.png',
	  repoUrl: 'https://github.com/raymundo140/call-m',
	  description: 'This project develops a complete autonomous-mapping software architecture for the CALL-M mobile manipulator at the CNRS-AIST Joint Robotics Laboratory (JRL), AIST, in Tsukuba, Japan. The objective was to transform established ROS 2 perception, SLAM, and navigation components into a supervised system capable of autonomously exploring and mapping unknown indoor environments while remaining robust to navigation failures and moving obstacles.\n\nThe architecture integrates five principal processing components: multimodal scan fusion, static–dynamic obstacle filtering, SLAM-based map construction, frontier-based exploration, and Nav2-based navigation. Sensor observations from two RPLIDAR A1M8 scanners, two ZED Mini stereo cameras, and an Intel RealSense D435i are reduced to a unified planar LaserScan representation. SLAM Toolbox constructs the occupancy-grid map, while Nav2 executes autonomous navigation using the TriOrb omnidirectional mobile base.\n\nA central contribution is a reusable exploration-management framework that supervises the full lifecycle of each Nav2 goal, incorporating navigation timeouts, spatial failure memory, temporary exclusions, retry behavior, progress assessment, and mission-completion logic. A second major component is a static–dynamic obstacle-filtering framework that separates persistent environmental structure from moving observations before they reach the mapping subsystem.\n\nAcross ten autonomous exploration trials in a 24 m × 24 m simulated warehouse with four moving pedestrian actors, the supervised system completed 10/10 missions compared with 7/10 for a conventional nearest-frontier baseline, achieving 95.3 ± 2.4% coverage while reducing average issued navigation goals from 161.9 to 56.1. The architecture was also transferred to the physical CALL-M robot, reaching autonomous completion in 5/5 hardware sessions in a dynamic indoor environment.',
	  pdfUrl: '/papers/projects/p1.pdf',
	},
	{
	  slug: 'p2',
	  title: 'Autonomous Door Opening — CALL-M Mobile Manipulator',
	  summary: 'Integrated perception, navigation, and manipulation pipeline for detecting a door, localizing its handle in 3D, aligning the mobile base, and executing the opening motion on a physical mobile manipulator.',
	  tags: ['ROS 2', 'Mobile Manipulation', 'YOLO', 'RGB-D', 'Nav2', 'UR5e'],
	  image: '/images/projects/p2.png',
	  institution: 'Tecnológico de Monterrey',
	  location: 'Tsukuba, Japan',
	  company: 'National Institute of Advanced Industrial Science and Technology (AIST)',
	  logo: '/images/experience/w1.png',
	  repoUrl: '',
	  description: 'This research project develops an integrated perception–navigation–manipulation pipeline for semi-autonomous door opening using the CALL-M mobile manipulator at the CNRS-AIST Joint Robotics Laboratory (JRL), AIST, in Tsukuba, Japan. I am the second author of the resulting paper (submitted). The project addresses a system-level mobile-manipulation problem: coordinating perception, autonomous navigation, 3D localization, mobile-base positioning, motion planning, grasping, and physical interaction so that a robot can traverse a common barrier in human indoor environments.\n\nThe system is implemented in ROS 2 on CALL-M, which combines a TriOrb omnidirectional mobile base, a Universal Robots UR5e six-degree-of-freedom collaborative manipulator, and a Robotiq 2F-85 parallel gripper. After the operator manually initializes the robot pose in RViz, the remainder of the pipeline executes automatically through seven stages: Door Search, Approach, Handle Detection, 3D Estimation, Fine Alignment, Pre-grasp, and Contact/Grasp followed by handle actuation and door opening.\n\nDuring Door Search, the robot rotates while a YOLO detector (trained on 4,656 images) searches for the target door, then autonomously approaches and stops at approximately 0.80 m. RGB-D depth and point-cloud data estimate the handle position in 3D, and fine corrective motions of the omnidirectional base align the robot before the UR5e executes a predefined grasp-and-pull sequence to open the door.\n\nThe complete pipeline was evaluated in 20 real-robot trials. In the 10 nominal trials, perception, navigation, 3D localization, alignment, and pre-grasp each succeeded 10/10, while complete door opening succeeded 8/10. Additional trials varying initial robot-to-door distance and end-effector height identified physical handle manipulation — rather than perception or navigation — as the dominant bottleneck, motivating future work on closed-loop pose correction and force-aware manipulation.',
	  pdfUrl: '/papers/projects/p2.pdf',
	},
	{
	  slug: 'p3',
	  title: 'Autonomous Mobile Robot — Manchester Robotics',
	  summary: '1:10-scale autonomous robot combining ROS 2, Jetson Nano, PID line following, traffic-light perception, YOLOv8 traffic-sign detection, and state-based driving.',
	  tags: ['ROS 2', 'YOLOv8', 'Jetson Nano', 'OpenCV', 'PID Control', 'Python'],
	  image: '/images/projects/p3.png',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  company: 'Manchester Robotics',
	  logo: '/images/companies/manchester.png',
	  repoUrl: '',
	  demoUrl: 'https://www.youtube.com/watch?v=oAJTYfWy3Z4',
	  description: 'This ten-week project developed a 1:10-scale autonomous differential-drive robot in collaboration with Manchester Robotics for the Intelligent Robotic Implementation course at Tecnológico de Monterrey. The objective was to reproduce the core elements of an autonomous-driving stack — perception, closed-loop control, decision making, embedded computing, and wireless communication — on a low-cost indoor robotic platform.\n\nThe robot used a Jetson Nano as its edge-computing platform together with a Manchester Robotics HackerBoard motor driver, encoder-equipped DC motors, and a Raspberry Pi V2 camera. The software stack was built around ROS 2 Humble, Python, OpenCV, and micro-ROS, with a distributed architecture between the Jetson Nano and a laptop handling higher-level perception and decision making.\n\nLine following used grayscale thresholding, contour extraction, and centroid-based lateral-error estimation feeding a PID controller, achieving a 98% track-completion rate over 30 laps with a mean heading error of 4.2 degrees. Traffic-light perception combined HSV thresholding, CLAHE contrast enhancement, and circularity checks to reach a 95.1% classification F1-score. For traffic-sign perception, a YOLOv8 model was trained on 1,200 annotated images across four classes, reaching 92.3% mAP@0.5 with 22 ms TensorRT inference.\n\nAutonomous behavior was coordinated through a finite-state machine combining line following, traffic-light states, and detected traffic signs, governing normal driving, stopping at red lights, slowing for yellow, and executing sign-specific maneuvers. Earlier development stages also implemented waypoint navigation with closed-loop yaw control, reporting 2.8 cm RMS positional error at 0.25 m/s. The final prototype demonstrated an integrated edge-AI robotics system combining embedded hardware, ROS 2 communication, classical computer vision, deep-learning perception, feedback control, and state-based decision making on a physical autonomous vehicle.',
	  pdfUrl: '/papers/projects/p3.pdf',
	},
	{
	  slug: 'p4',
	  title: 'ROS 2 Object Tracking with PointNet and xArm 6',
	  summary: 'Perception-to-action system combining RGB-D sensing, a custom PointNet classifier, ROS 2 visual tracking, and physical xArm 6 control.',
	  tags: ['ROS 2', 'PointNet', 'Deep Learning', 'Computer Vision', 'RGB-D', 'Visual Tracking'],
	  image: '/images/projects/p4.png',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  company: 'Tecnológico de Monterrey',
	  logo: '/images/education/e1.png',
	  repoUrl: 'https://github.com/raymundo140/Deep-Learning-Driven-XARM-VI-Robotic-Arm-for-Automated-Automotive-Part-Handling',
	  description: 'This team project developed a robotic perception and control system for an xArm 6 six-degree-of-freedom manipulator in the context of a General Motors automotive-part handling challenge at Tecnológico de Monterrey. The work combined ROS 2 Humble, an Azure Kinect DK RGB-D camera, 2D computer vision, 3D point-cloud processing, deep learning, simulation, and physical robotic-arm control to explore automated tracking and recognition of an automotive component.\n\nFor the 3D-learning component, RGB-D data and STL meshes of the target part were used to construct a custom 600-sample point-cloud dataset (550 train / 50 test), each standardized to 1,024 points and normalized to a unit sphere. A simplified PointNet architecture — with a T-Net spatial transformer, shared MLPs, global max pooling, and a softmax classifier — was trained in TensorFlow/Keras with the Adam optimizer, reaching 99.1% training accuracy and 96.4% test accuracy, and was deployed as a ROS 2 inference node with sub-30 ms CPU inference.\n\nFor physical object tracking, a lightweight ROS 2 computer-vision node processed RGB images from the Azure Kinect DK: HSV thresholding and morphological filtering isolated the target part, image moments computed its centroid, and a dead-zone controller incrementally updated xArm 6 joint targets at 10 Hz. This produced end-to-end visual-servoing latency below 50 ms and successfully tracked translational object motion up to 0.3 m/s without losing visual lock. A second interaction mode used MediaPipe hand tracking to map wrist position to robot commands after camera-to-robot calibration.\n\nDue to limited laboratory access during the final project week, the trained PointNet inference node was not fully connected to the physical xArm 6 servo loop — the demonstrated closed-loop physical tracking used the 2D RGB segmentation/centroid pipeline, while PointNet was independently trained, tested, and deployed as a ROS 2 node. The project overall demonstrated a complete perception-to-action workflow spanning 3D sensing, point-cloud processing, deep learning, computer vision, robotic control, and ROS 2 integration.',
	  pdfUrl: '/papers/projects/p4.pdf',
	},
	{
	  slug: 'p5',
	  title: 'Autonomous Tractor Navigation — John Deere',
	  summary: 'STM32-based autonomous scale tractor using camera, encoder, and IMU feedback, wireless target coordinates, embedded communication, and closed-loop control.',
	  tags: ['STM32', 'Embedded C/C++', 'PID', 'CAN', 'IMU', 'Real-Time Systems'],
	  image: '/images/projects/p5.png',
	  institution: 'Tecnológico de Monterrey',
	  location: 'Monterrey, Mexico',
	  company: 'John Deere',
	  logo: '/images/companies/jd.png',
	  repoUrl: 'https://github.com/HumbertoBM2/WaypointEstimation',
	  description: 'This project was developed for the TE2004B Design of Advanced Embedded Systems course at Tecnológico de Monterrey as a team solution to a "Waypoint Estimation" challenge proposed by John Deere. The objective was to design and build an autonomous scale tractor capable of following a predefined sequence of waypoints while integrating embedded control, sensing, communication protocols, and real-time task handling.\n\nThe robotic platform was built around an STM32H755 dual-core microcontroller, supported by an Arduino Nano and multiple communication and sensing peripherals: a DC traction motor with encoder feedback, a steering servo, an ESC module, an MPU6050 IMU, nRF24 wireless modules, CAN communication hardware, and a John Deere LPS camera. Firmware was developed in STM32CubeIDE with STM32 HAL libraries, C, and C++, emphasizing non-blocking, system-tick-based task execution rather than CPU-blocking delays.\n\nA route-navigation finite-state machine controlled the tractor through the required trajectory — initial waypoint, curve-entry, curve-completion, and final straight segment — commanding the DC traction motor and steering servo via PWM. The STM32H755 dual-core architecture distributed functionality between its Cortex-M7 and Cortex-M4 cores, with waypoint-indication logic running on the M4 while other tasks ran on the M7. CAN, SPI, I2C, UART, and nRF24 wireless links tied the peripherals and subsystems together, validated individually before full integration.\n\nThe final waypoint-navigation demonstration used a predefined trajectory of four coordinate targets — (0, 120), (86, 143), (86, 0), (0, 0) — with the system reliably navigating between them. My contribution focused on hardware integration and tractor assembly, configuring the nRF24 wireless modules and servo motors, and implementing PWM and SPI communication using STM32 HAL, along with subsystem integration and collaborative debugging across the complete robotic platform.',
	  pdfUrl: '/papers/projects/p5.pdf',
	},
	{
	  slug: 'p6',
	  title: 'Autonomous Face-Tracking Drone',
	  summary: 'DJI Tello visual-tracking system using Python and OpenCV to recognize a registered person and reactively control yaw, altitude, and distance in real time.',
	  tags: ['Python', 'OpenCV', 'Computer Vision', 'UAV', 'Multithreading', 'Reactive Control'],
	  image: '/images/projects/p6.png',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  repoUrl: '',
	  description: 'This individual project was developed for the TE3002B Implementation of Intelligent Robotics course at Tecnológico de Monterrey in 2025. The objective was to create an autonomous visual-tracking system that allowed a DJI Tello quadcopter to recognize and follow a specific person using its onboard camera and real-time computer vision.\n\nThe system was implemented in Python 3.10, controlling the DJI Tello from an external computer via djitellopy. A reference image of the target face was encoded at startup using the face_recognition library; during flight, frames were periodically compared against this stored encoding (every 10 frames, downscaled to 25% resolution) to determine whether the target was visible, with detections scaled back to full resolution for control and visualization.\n\nOnce the registered face was identified, horizontal image error was converted into a yaw command to keep the target centered, vertical error into an up/down command, and the apparent width of the detected face was used as a visual proxy for distance — driving the drone forward or backward to hold a target face width of roughly 170 ± 15 pixels. All commands were velocity-limited, and a safety condition prevented further ascent above 190 cm altitude. If the target was lost, the drone received a zero-velocity command and hovered rather than continuing its previous motion.\n\nReal-time video handling used a dedicated background thread to continuously retrieve the newest camera frame, protected by a threading lock, while the main thread handled recognition, control, and visualization — reducing the impact of video latency on the control loop. The completed system demonstrated autonomous reactive tracking on a physical DJI Tello: rotating, adjusting altitude, and moving forward/backward to keep the registered face centered and at a consistent distance, with the report noting that multithreading noticeably improved responsiveness.',
	  pdfUrl: '/papers/projects/p6.pdf',
	},
	{
	  slug: 'p7',
	  title: 'Dual-Elevator Embedded Control System',
	  summary: 'Five-floor, dual-cabin elevator prototype built around an STM32 with concurrent state machines, PWM servo control, Hall-effect safety sensing, and greedy request scheduling.',
	  tags: ['STM32', 'Embedded C', 'Finite-State Machines', 'PWM', 'Scheduling', 'SolidWorks'],
	  image: '/images/projects/p7.png',
	  institution: 'University of Seoul',
	  location: 'Seoul, South Korea',
	  logo: '/images/education/e2.png',
	  repoUrl: 'https://github.com/raymundo140/stm32-dual-elevator-embedded-system',
	  demoUrl: 'https://youtu.be/ulnk5hJibjI?si=Kf-K0Fx7CQR4lFax',
	  description: 'This project was developed for the Embedded Systems Applications Design course at the University of Seoul. The objective was to design, fabricate, program, and validate a complete five-floor dual-elevator automation prototype combining mechanical design, embedded electronics, actuator control, user input, scheduling logic, safety mechanisms, and real-time system monitoring.\n\nThe system was built around an STM32 NUCLEO-G474RE microcontroller controlling two independent elevator cabins, each actuated by an FS90R continuous-rotation servo through a rope-and-drum mechanism. A 4x4 matrix keypad provided the operator interface for entering origin and destination floors, magnetic sensing at shaft limits prevented mechanical overtravel, and UART exposed internal system states through a PC terminal for debugging.\n\nKeypad events generated origin-destination requests stored in a centralized request queue rather than directly driving motor commands. A deterministic greedy scheduling algorithm then evaluated candidate elevators using a scoring function based on distance to the pickup floor, availability, and a smaller directional preference, assigning the request to the elevator with the lowest score — a computationally lightweight strategy suited to a resource-constrained microcontroller coordinating two independently operating elevators.\n\nEach elevator ran its own state machine (idle, moving, doors) across pickup and drop-off job phases, with hardware PWM generated on separate STM32 timer channels per elevator. Because the continuous-rotation servos exhibited different neutral points, individual calibration profiles (neutral, upward, downward, deadband) were implemented, with PWM commands clamped to safe limits. Mechanical components were designed in SolidWorks and fabricated via FDM 3D printing, producing a truss-reinforced five-floor structure with two independently moving cabins.',
	  pdfUrl: '/papers/projects/p7.pdf',
	},
	{
	  slug: 'p8',
	  title: 'IoT Smart Agriculture & Environmental Control',
	  summary: 'Raspberry Pi-based agriculture prototype combining environmental sensing, automated irrigation and ventilation, and a real-time web dashboard.',
	  tags: ['Raspberry Pi', 'IoT', 'Sensors', 'Automation', 'Web Dashboard'],
	  image: '/images/projects/p8.png',
	  institution: 'Beijing Institute of Technology',
	  location: 'Beijing, China',
	  logo: '/images/education/e3.png',
	  repoUrl: '',
	  description: 'This project was developed at the Beijing Institute of Technology as a scale prototype of an IoT-enabled precision-agriculture system. The objective was to demonstrate how continuous environmental sensing, edge computing, automated actuation, and web-based monitoring can be integrated into a single platform to support data-driven agricultural management.\n\nA Raspberry Pi served as the central computing and coordination unit, aggregating readings from multiple environmental sensors placed around the scale agricultural environment and using them as inputs to the system\'s monitoring and automation logic. Rather than functioning only as a passive monitoring station, the platform incorporated actuators capable of responding to changing conditions — for example, triggering irrigation when additional water was needed or activating ventilation when airflow was required.\n\nThis created a closed-loop IoT architecture in which the physical environment was continuously observed, environmental data was processed by the computing platform, and actuator commands were generated according to detected needs: sense, process, decide, actuate, and monitor. A user-facing website provided real-time visibility into the collected environmental data, allowing remote observation of current agricultural conditions from a centralized dashboard.\n\nThe complete project combined embedded/edge computing, environmental sensing, actuator control, IoT communication, automation logic, and web development into a single cyber-physical system, serving as a proof of concept for how similar architectures could be expanded to monitor and automate larger agricultural environments.',
	},
	{
	  slug: 'p9',
	  title: 'Embedded Tractor Telemetry & Control — John Deere',
	  summary: 'STM32 + Raspberry Pi embedded system combining real-time task scheduling, UART telemetry, transmission-model execution, logging, and a multithreaded Python dashboard.',
	  tags: ['STM32', 'Raspberry Pi', 'Real-Time Systems', 'UART', 'Python', 'Telemetry'],
	  image: '/images/projects/p9.png',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  company: 'John Deere',
	  logo: '/images/companies/jd.png',
	  repoUrl: '',
	  description: 'This project was developed at Tecnológico de Monterrey in collaboration with John Deere as the industry partner for the Design of Systems-on-Chip course. The challenge was to design, implement, and validate a prototype intelligent tractor control system using an STM32 microcontroller and Raspberry Pi, with emphasis on embedded systems, real-time execution, communication between heterogeneous computing platforms, telemetry, and operator interaction.\n\nThe architecture divided responsibilities between an STM32 and a Raspberry Pi. The STM32 served as the real-time embedded controller, handling input acquisition, execution of the tractor transmission model, UART communication, and output devices, decomposed into real-time tasks for matrix-keypad input (2 ms), ADC acquisition (8 ms), transmission-model execution (10 ms), UART communication (12 ms), and LCD output (60 ms), each with assigned priorities. The Raspberry Pi provided higher-level processing, telemetry visualization, data logging, and a graphical interface for controlling tractor parameters, communicating with the STM32 over UART.\n\nThe prototype included a matrix keypad for selecting operating modes, a potentiometer representing throttle input, LCD/OLED displays, LEDs and a servomotor for outputs, and a 3D-printed physical tractor representation for integration and demonstration. The Raspberry Pi software, written in Python on Raspberry Pi OS, received telemetry over serial, logged it to CSV, and visualized throttle, engine speed, vehicle speed, and transmission gear in real time through a Tkinter interface with a throttle slider that could override the physical potentiometer in simulation mode.\n\nA significant part of the project focused on improving telemetry responsiveness: the initial implementation performed serial reading, CSV writing, and Matplotlib plot updates in the same execution path, causing blocking and slow visualization. The software was reorganized so serial acquisition, CSV storage, and visualization ran independently using Python threading and a queue-based data-sharing mechanism, with a 50 ms plotting interval and Matplotlib blitting so only changed graphical elements were redrawn — producing a substantially more responsive telemetry interface.',
	  pdfUrl: '/papers/projects/p9.pdf',
	},
	{
	  slug: 'p10',
	  title: 'FPGA Tractor Simulator with Unity',
	  summary: 'DE10-Lite FPGA and Unity co-design project using VHDL, Assembly, serial communication, accelerometer-based steering, and bidirectional real-time telemetry.',
	  tags: ['FPGA', 'VHDL', 'Assembly', 'Unity', 'C#', 'Serial Communication'],
	  image: '/images/projects/p10.png',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  repoUrl: '',
	  description: 'This project was developed for the TE2002B Design of Systems-on-Chip course at Tecnológico de Monterrey. The team designed a tractor-control simulation combining programmable digital hardware on a DE10-Lite FPGA with a real-time Unity environment, using the FPGA to implement and process tractor-control inputs while Unity served as the visual simulation environment.\n\nThe simulation contained three playable levels in which the tractor collected corn while avoiding rocks, with progression thresholds at 50, 100, and 150 collected objects, a 60-second time constraint, and a three-life damage system. A high-level, eight-state finite state machine (Menu, Level 1–3, Pause, Victory, Defeat, Rock) coordinated the simulation based on control inputs, collected-crop count, remaining time, and remaining lives.\n\nFPGA functionality was developed in VHDL using Quartus Prime Lite Edition. Physical switches and push buttons generated command bytes for forward, reverse, left/right steering, boost, and braking, transmitted to Unity over a serial FTDI connection where C# code parsed the values and mapped them to tractor-control functions built on Unity physics and WheelCollider behavior. Communication was bidirectional: Unity tracked collected corn and transmitted the counter back to the FPGA as a byte, which VHDL logic converted and split across three seven-segment displays for real-time physical telemetry.\n\nThe final prototype expanded the hardware interface with the DE10-Lite\'s onboard accelerometer for steering input and processor-level Assembly routines that evaluated physical controls and accelerometer values to generate control commands through custom ports and address-selection logic. The completed system demonstrated a full hardware-software co-design workflow: physical FPGA inputs interpreted by programmable logic and processor routines, transmitted to a 3D simulation, applied to a virtual tractor, with simulation telemetry returned to the FPGA for physical display.',
	  pdfUrl: '/papers/projects/p10.pdf',
	},
  ]

  //Work Experience
  export type WorkExperience = {
	slug: string;
	company: string;
	title: string;
	location: string;
	dateRange: string;
	bullets: string[];
	tags: string[];
	logo: string;
	companyUrl?: string;
  };
  
  export const experiences: WorkExperience[] = [
	{
		slug: 'w1',
		company: 'AIST – National Institute of Advanced Industrial Science and Technology',
		title: 'Robotics Research Intern',
		location: 'Tsukuba, Japan',
		dateRange: 'Jan 2026 – Sep 2026',
		bullets: [
			'Developed autonomous mapping, dynamic-environment perception, navigation, and mobile-manipulation systems for CALL-M, with work spanning ROS 2 architecture, SLAM, Nav2, RGB-D/LiDAR perception, exploration, manipulation, real-robot validation, and research writing.',
		],
		tags: ['ROS 2', 'SLAM', 'Nav2', 'LiDAR', 'RGB-D', 'Mobile Manipulation'],
		logo: '/images/experience/w1.png',
		companyUrl: 'https://www.aist.go.jp/index_en.html',
	},
	{
		slug: 'w2',
		company: 'Smart Factory MTY',
		title: 'Robotics Engineer Intern',
		location: 'Monterrey, Mexico',
		dateRange: 'Jan 2024 – Jun 2024',
		bullets: [
			'Commissioned, diagnosed, repaired, and integrated UR, xArm, Baxter, and ABB YuMi robots. Designed and fabricated a custom gripper that increased production throughput by 30%, while maintenance and root-cause work helped reduce downtime by 20%.',
		],
		tags: ['Industrial Robots', 'SolidWorks', '3D Printing', 'Laser Cutting', 'Robot Integration'],
		logo: '/images/experience/w2.png',
	},
	{
	  slug: 'w3',
	  company: 'Tecnológico de Monterrey (ITESM)',
	  title: 'Systems & Data Automation Engineer',
	  location: 'Monterrey, Mexico',
	  dateRange: 'Feb 2023 – Mar 2026',
	  bullets: [
		'Automated databases and compliance workflows supporting university–government contracts across 50 campuses and $5.3M in projects, reducing manual work for 100+ employees and improving document processing time by 21%.',
	  ],
	  tags: ['Automation', 'Data', 'Python', 'Process Improvement'],
	  logo: '/images/experience/w3.png',
	  companyUrl: 'https://tec.mx',
	},
	{
	  slug: 'w4',
	  company: 'Self-Employed',
	  title: 'Freelance Technology Specialist',
	  location: 'Mexico / United States',
	  dateRange: 'Aug 2022 – Present',
	  bullets: [
		'Delivered automation and technology-integration work for 50+ SME clients, translating operational problems into practical technical solutions.',
	  ],
	  tags: ['Automation', 'Technology Integration', 'Consulting'],
	  logo: '/images/experience/w4.png',
	},
	{
	  slug: 'w5',
	  company: 'CIBRUC',
	  title: 'Computer Programmer (Part-time)',
	  location: 'Monterrey, Mexico',
	  dateRange: 'Feb 2023 – Jul 2023',
	  bullets: [
		'Built an interactive simulation/game in Godot for online hosting and licensing, with responsibility for application logic, UI/UX, and production-focused iteration.',
	  ],
	  tags: ['Godot', 'Software Development', 'UI/UX', 'Simulation'],
	  logo: '/images/experience/w5.png',
	},
  ]

// Research
	export type Research = {
		slug: string;
		title: string;
		institution: string;
		location: string;
		date: string;
		role?: string;
		status: string; // e.g. "Published" / "In Preparation" / "Invited Talk"
		summary: string; // short 2-3 sentence version shown by default
		abstract?: string; // full abstract text, revealed via "Read more" (omit when not applicable, e.g. talks)
		tags: string[];
		logo: string;
		pdfUrl?: string;
		pdfLabel?: string; // overrides the default "Read Paper" button/section label
	};

  export const research: Research[] = [
	{
	  slug: 'guest-lecture-uos',
	  title: 'Neuromorphic Computing and Memristor-Based Devices in Intelligent Robotics',
	  institution: 'University of Seoul',
	  location: 'Seoul, South Korea',
	  date: 'Dec 2025',
	  role: 'Guest Lecturer',
	  status: 'Invited Talk',
	  summary: 'Invited by the engineering faculty to deliver a lecture to an international engineering cohort on neuromorphic computer architectures, memristor-based devices, and the role of specialized hardware in energy-efficient AI systems.',
	  tags: ['Neuromorphic Computing', 'Memristors', 'AI Hardware', 'Computer Architecture'],
	  logo: '/images/research/r1.png',
	  pdfUrl: '/papers/guest-lecture-uos.pdf',
	  pdfLabel: 'View Documentation',
	},
	{
	  slug: 'supervised-ros2-mapping',
	  title: 'A Supervised ROS 2 Architecture for Autonomous Mapping: Modular Exploration-Management Framework',
	  institution: 'CNRS-AIST Joint Robotics Laboratory',
	  location: 'Tsukuba, Japan',
	  date: '2026',
	  role: 'First Author',
	  status: 'Submitted to IEEE/SICE SII 2027',
	  summary: 'Presents a modular ROS 2 architecture for autonomous mapping in unknown, dynamic environments. The exploration-management framework handles frontier evaluation, navigation-goal supervision, failure recovery, progress monitoring, and mission completion while remaining configurable for Nav2-compatible robots.',
	  abstract: 'This paper presents a modular ROS 2 architecture for autonomous mapping in mobile robots operating within unknown and dynamic indoor environments. The proposed system integrates multimodal scan fusion, a static–dynamic obstacle-filtering module, SLAM-based map construction, frontier-based exploration, and Nav2-based navigation, coordinated by a program manager that governs the mission from distributed launch through coordinated termination. Beyond this supervised software system, the architecture is organized around a modular ROS 2 exploration-management framework that extends beyond frontier detection to govern candidate evaluation, navigation-goal supervision, failure recovery, and mission completion. Requiring only an occupancy-grid map, robot-pose information through TF, and a Nav2-compatible navigation interface, the framework may be adopted by compatible ROS 2 mobile-robot stacks through external configuration, without modification of its underlying implementation. The complete system is validated in simulation and on the physical CALL-M mobile manipulator.',
	  tags: ['ROS 2', 'SLAM', 'Nav2', 'Autonomous Mapping', 'Frontier Exploration'],
	  logo: '/images/experience/w1.png',
	  pdfUrl: '/papers/supervised-ros2-mapping.pdf',
	},
	{
	  slug: 'static-dynamic-obstacle-filtering',
	  title: 'A ROS 2 Static–Dynamic Obstacle Filtering Framework for Robust Mapping in Dynamic Environments',
	  institution: 'CNRS-AIST Joint Robotics Laboratory',
	  location: 'Tsukuba, Japan',
	  date: '2026',
	  role: 'Researcher',
	  status: 'In Preparation',
	  summary: 'Develops a reusable preprocessing framework that separates persistent environmental structure from moving observations before mapping, while preserving dynamic obstacles for real-time navigation, tracking, and collision avoidance.',
	  abstract: 'This work presents a modular ROS 2 framework for separating static environmental structure from dynamic obstacles in LaserScan-based robotic mapping and navigation. The framework processes unified multimodal range observations to distinguish persistent structures from transient measurements, providing a static scan for SLAM-based map construction and a dynamic scan for real-time obstacle avoidance. In addition, dynamic observations may be tracked to estimate obstacle motion while preserving compatibility with conventional ROS 2 LaserScan interfaces. The approach is designed as a reusable preprocessing layer for mobile robots operating in dynamic indoor environments, improving map consistency while retaining moving obstacles for navigation and collision avoidance.',
	  tags: ['ROS 2', 'LiDAR', 'Obstacle Filtering', 'SLAM', 'Dynamic Environments'],
	  logo: '/images/experience/w1.png',
	},
	{
	  slug: 'door-opening-mobile-manipulator',
	  title: 'An Integrated Perception, Navigation, and Manipulation Pipeline for Semi-Autonomous Door Opening with a Mobile Manipulator',
	  institution: 'CNRS-AIST Joint Robotics Laboratory',
	  location: 'Tsukuba, Japan',
	  date: '2026',
	  role: 'Second Author',
	  status: 'Submitted',
	  summary: 'Presents an end-to-end mobile-manipulation pipeline combining door perception, Nav2 approach, RGB-D handle localization, base alignment, pre-grasp positioning, grasp execution, and physical door opening on CALL-M. Evaluated in 20 real-robot trials; in the 10 nominal trials, upstream perception, navigation, localization, alignment, and pre-grasp stages succeeded 10/10, while complete door opening succeeded 8/10.',
	  abstract: 'Autonomous door opening is a key capability for service robots. It requires integration of perception, navigation, localization, and manipulation. This paper presents a semi-autonomous door-opening pipeline for a mobile manipulator. The system requires manual initialization of the robot pose in RViz; it autonomously detects and approaches the door, estimates the 3D handle position, aligns the mobile base, performs the pre-grasp positioning, and executes handle manipulation and door opening. The system was evaluated on a real mobile manipulator in 20 trials: 10 nominal operation trials, 5 trials with varying initial robot-to-door distance, and 5 trials varying initial end-effector height. In nominal condition, door perception, navigation, 3D localization, alignment, and pre-grasp positioning succeeded 10/10, while complete door opening succeeded 8/10. The system successfully handled the initial robot-to-door distance in four of five trials. However, changes in the initial end-effector height reduced performance, completing only one of five trials. Failures occurred mainly in the contact and interaction between the handle and the gripper. Physical handle manipulation is the main limitation of the current system.',
	  tags: ['ROS 2', 'Mobile Manipulation', 'RGB-D', 'Navigation', 'Door Opening'],
	  logo: '/images/experience/w1.png',
	  pdfUrl: '/papers/door-opening-mobile-manipulator.pdf',
	},
  ]

  // Education
  export type Education = {
	slug: string;
	institution: string;
	program: string;
	field: string;
	location: string;
	dateRange: string;
	grade: string;
	tags: string[];
	logo: string;
	institutionUrl?: string;
	highlight?: string;  
  };
  
  export const education: Education[] = [
	{
	  slug: 'e1',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  program: 'B.S. in Robotics and Digital Systems Engineering',
	  field: 'Robotics & Digital Systems Engineering',
	  location: 'Monterrey, Mexico',
	  dateRange: 'Aug 2022 – Dec 2026',
	  grade: 'Average: 98/100 · Top 1% · GPA: 4.0/4.0',
	  tags: ['Intelligent Robotics', 'Computer Vision', 'Control Systems', 'Data Structures & Algorithms', 'Kinematics & Dynamics'],
	  logo: '/images/education/e1.png',
	  institutionUrl: 'https://tec.mx',
	  highlight: 'Top 1% GPA recognition, School of Engineering & Sciences · Full scholarship recipient for the BIT International Summer Program',	},
	{
	  slug: 'e2',
	  institution: 'University of Seoul (UOS)',
	  program: 'Exchange Program',
	  field: 'AI, Embedded Systems & Solid-State Electronics',
	  location: 'Seoul, South Korea',
	  dateRange: 'Aug 2025 – Dec 2025',
	  grade: 'Grade: A+',
	  tags: ['Artificial Intelligence', 'Advanced Embedded Systems', 'Solid-State Electronics'],
	  logo: '/images/education/e2.png',
	  institutionUrl: 'https://www.uos.ac.kr/en',
	  highlight: 'Built a dual-cabin STM32 elevator system and delivered an invited engineering lecture on neuromorphic computer architectures and hardware-accelerated AI.',	},
	{
	  slug: 'e3',
	  institution: 'Beijing Institute of Technology (BIT)',
	  program: 'Summer Program',
	  field: 'Electronics & Intelligent Systems',
	  location: 'Beijing, China',
	  dateRange: 'Jul 2025 – Aug 2025',
	  grade: 'Grade: A+',
	  tags: ['Advanced Electronics', 'Embedded Systems', 'Intelligent Robotics', 'C/C++ Programming'],
	  logo: '/images/education/e3.png',
	  institutionUrl: 'https://english.bit.edu.cn',
	  highlight: 'Selected to deliver the closing ceremony speech for the international cohort and attended through a full scholarship from Tecnológico de Monterrey.',	},
	{
	  slug: 'e4',
	  institution: 'University of Waterloo',
	  program: 'Summer Program',
	  field: 'Academic Communication & Cross-Cultural Studies',
	  location: 'Waterloo, Canada',
	  dateRange: 'Jul 2024 – Aug 2024',
	  grade: 'Grade: A+',
	  tags: ['Academic Communication', 'Public Speaking', 'Leadership', 'Global Collaboration'],
	  logo: '/images/education/e4.svg',
	  institutionUrl: 'https://uwaterloo.ca',
	  highlight: 'Focus on advanced academic communication, public speaking, leadership, and cross-cultural collaboration.',	},
  ]

  // Awards
  export type Award = {
	title: string;
	issuer: string;
	location: string;
	date: string;
	description: string;
	bullets?: string[];
	link: string;
	logo: string;
  };
  
  export const awards: Award[] = [
	{
	  title: 'Student Representative & Outstanding Performance Recognition — BIT International Summer Program',
	  issuer: 'Beijing Institute of Technology (BIT)',
	  location: 'Beijing, China',
	  date: 'Aug 2025',
	  description: 'Recognized for strong performance in the international Electronics Engineering program and selected to deliver the closing ceremony speech representing the international cohort.',
	  bullets: [
		'Received an outstanding-performance diploma.',
		'Selected as student representative for the closing ceremony.',
		'Attended through a full scholarship from Tecnológico de Monterrey.',
	  ],
	  link: 'https://www.linkedin.com/feed/update/urn:li:activity:7360058580319850496/',
	  logo: '/images/education/e3.png',
	},
	{
	  title: 'Top 1% GPA — School of Engineering & Sciences',
	  issuer: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  date: 'Oct 2025',
	  description: 'Recognized by Tecnológico de Monterrey for ranking among the top 1% of engineering students by academic average during the 2024–2025 academic year.',
	  bullets: [
		'Academic average: 98/100.',
		'Recognition received through Mejores Promedios.',
	  ],
	  link: 'https://www.linkedin.com/feed/update/urn:li:activity:7385899900934373376/',
	  logo: '/images/education/e1.png',
	},
	{
	  title: '3rd Place — Expo Ingenierías 2023',
	  issuer: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  date: 'Dec 2023',
	  description: 'Awarded third place for SafeSpace, a home-safety system for older adults combining facial recognition, environmental sensing, automation, and remote monitoring.',
	  bullets: [
		'Python-based facial recognition.',
		'NodeMCU/ESP32 and Arduino sensor/automation stack.',
		'Combined software, electronics, mechanical design, and rapid prototyping.',
	  ],
	  link: 'https://www.linkedin.com/feed/update/urn:li:activity:7139060487178092544/',
	  logo: '/images/awards/expo.png',
	},
  ]

// skills 
  export type SkillCategory = {
	category: string;
	icon: string;
	skills: string[];
  };
  
  export type Language = {
	name: string;
	level: string;
	note: string;
  };
  
  export const skillCategories: SkillCategory[] = [
	{
	  category: 'Programming',
	  icon: '💻',
	  skills: ['Python', 'C++', 'C', 'C#', 'MATLAB', 'Bash', 'VHDL', 'Assembly', 'SQL', 'R', 'CMake', 'LaTeX'],
	},
	{
	  category: 'Robotics & Autonomy',
	  icon: '🤖',
	  skills: ['ROS 2', 'Nav2', 'SLAM Toolbox', 'MoveIt 2', 'micro-ROS', 'tf2', 'PCL', 'Gazebo', 'RViz', 'Isaac Sim', 'Autonomous Navigation', 'Frontier Exploration', 'Localization', 'Sensor Fusion', 'Motion Planning', 'Kinematics & Dynamics', 'PID Control', 'Finite-State Machines'],
	},
	{
	  category: 'Perception & AI',
	  icon: '🧠',
	  skills: ['OpenCV', 'YOLOv8', 'PyTorch', 'TensorFlow', 'Computer Vision', 'RGB-D Perception', 'Point Clouds', 'Object Detection', 'Deep Learning', 'CNNs', 'Transfer Learning', 'Clustering', 'Pose / Target Localization'],
	},
	{
	  category: 'Embedded & Hardware',
	  icon: '🔧',
	  skills: ['STM32', 'NVIDIA Jetson', 'Raspberry Pi', 'FPGAs', 'ESP32', 'Arduino', 'FreeRTOS', 'LiDAR', 'RGB-D Cameras', 'IMU', 'Encoders', 'CAN', 'UART', 'SPI', 'I2C', 'PWM', 'Oscilloscope', 'Soldering', '3D Printing', 'Laser Cutting'],
	},
	{
	  category: 'Software & Engineering',
	  icon: '⚙️',
	  skills: ['Linux', 'Git/GitHub', 'Docker', 'CMake', 'SolidWorks', 'Simulink', 'Unity', 'Nginx', 'MQTT', 'NumPy', 'Pandas', 'Matplotlib', 'PlotJuggler'],
	},
  ]

  export const languages: Language[] = [
	{ name: 'Spanish', level: 'Native', note: 'Native' },
	{ name: 'English', level: 'C2', note: 'Near-Native' },
	{ name: 'German', level: 'B1', note: 'Intermediate' },
  ]

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'raymundo.gomez.rv@gmail.com',
	linkedin: 'https://www.linkedin.com/in/roberto-raymundo/',
	github: 'https://github.com/raymundo140',
	x: '',
	bluesky: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'lofi', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'lofi', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Raymundo Gómez Vargas | Intelligent Robotics & Autonomous Systems Engineer',
	default_description: 'Robotics engineer building autonomous systems across perception, navigation, manipulation, AI, and embedded control. Research and engineering experience at AIST and international programs across Japan, South Korea, China, Canada, and Mexico.',
	default_image: '/images/pfp.jpg',
  }
