export const profile = {
	fullName: 'Raymundo',
	title: 'Robotics and Digital Systems Engineering',
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
	  title: 'A ROS 2 Architecture for Autonomous Mapping — CALL-M Mobile Manipulator',
	  summary: 'Modular ROS 2 autonomous-mapping architecture for the CALL-M mobile manipulator at AIST, integrating multimodal perception, static–dynamic obstacle filtering, SLAM, frontier-based exploration, and Nav2 navigation for unknown, dynamic indoor environments.',
	  tags: ['ROS2', 'SLAM', 'Nav2', 'Frontier Exploration', 'LiDAR', 'Mobile Manipulation'],
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
	  title: 'Semi-Autonomous Door Opening with a Mobile Manipulator',
	  summary: 'Integrated perception, navigation, and manipulation pipeline that lets the CALL-M mobile manipulator autonomously detect and approach a door, localize its handle in 3D, align its base, and open the door. Second-author IEEE submission, 80% end-to-end success over 20 physical-robot trials.',
	  tags: ['ROS2', 'Mobile Manipulation', 'YOLO', 'RGB-D Perception', 'MoveIt', 'Nav2'],
	  image: '/images/projects/p2.png',
	  institution: 'Tecnológico de Monterrey',
	  location: 'Tsukuba, Japan',
	  company: 'National Institute of Advanced Industrial Science and Technology (AIST)',
	  logo: '/images/experience/w1.png',
	  repoUrl: '',
	  description: 'This research project develops an integrated perception–navigation–manipulation pipeline for semi-autonomous door opening using the CALL-M mobile manipulator at the CNRS-AIST Joint Robotics Laboratory (JRL), AIST, in Tsukuba, Japan. I am the second author of the resulting IEEE paper. The project addresses a system-level mobile-manipulation problem: coordinating perception, autonomous navigation, 3D localization, mobile-base positioning, motion planning, grasping, and physical interaction so that a robot can traverse a common barrier in human indoor environments.\n\nThe system is implemented in ROS 2 on CALL-M, which combines a TriOrb omnidirectional mobile base, a Universal Robots UR7e six-degree-of-freedom collaborative manipulator, and a Robotiq 2F-85 parallel gripper. After the operator manually initializes the robot pose in RViz, the remainder of the pipeline executes automatically through seven stages: Door Search, Approach, Handle Detection, 3D Estimation, Fine Alignment, Pre-grasp, and Contact/Grasp followed by handle actuation and door opening.\n\nDuring Door Search, the robot rotates while a YOLO detector (trained on 4,656 images) searches for the target door, then autonomously approaches and stops at approximately 0.80 m. RGB-D depth and point-cloud data estimate the handle position in 3D, and fine corrective motions of the omnidirectional base align the robot before the UR7e executes a predefined grasp-and-pull sequence to open the door.\n\nThe complete pipeline was evaluated in 20 trials on the physical CALL-M robot. Under nominal conditions, Door Search, Approach, Handle Detection, 3D Estimation, Fine Alignment, and Pre-grasp each achieved 10/10 successful executions (100%), while Contact/Grasp and overall door-opening success reached 8/10 (80%). Additional trials varying initial robot-to-door distance and end-effector height identified physical handle manipulation — rather than perception or navigation — as the dominant bottleneck, motivating future work on closed-loop pose correction and force-aware manipulation.',
	  pdfUrl: '/papers/projects/p2.pdf',
	},
	{
	  slug: 'p3',
	  title: 'AI Autonomous Mobile Robot — Manchester Robotics',
	  summary: 'A 1:10-scale autonomous differential-drive robot built with Manchester Robotics, combining ROS 2, Jetson Nano edge computing, PID line following, traffic-light perception, and YOLOv8 traffic-sign detection into a real-time driving pipeline. Achieved a 98% track-completion rate and 92.3% mAP@0.5 sign detection.',
	  tags: ['ROS2', 'YOLOv8', 'Jetson Nano', 'OpenCV', 'PID Control', 'Python'],
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
	  title: 'AI-Enabled XARM6 Object Tracking with ROS 2 and 3D Deep Learning',
	  summary: 'Perception-to-action pipeline for an XARM6 manipulator built for an automotive-part handling challenge at Tecnológico de Monterrey, combining a custom PointNet point-cloud classifier (96.4% test accuracy) with real-time ROS 2 visual servoing that tracked object motion up to 0.3 m/s.',
	  tags: ['ROS2', 'PointNet', 'Deep Learning', 'Computer Vision', 'RGB-D', 'Visual Servoing'],
	  image: '/images/projects/p4.png',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  company: 'Tecnológico de Monterrey',
	  logo: '/images/education/e1.png',
	  repoUrl: 'https://github.com/raymundo140/Deep-Learning-Driven-XARM-VI-Robotic-Arm-for-Automated-Automotive-Part-Handling',
	  description: 'This team project developed an AI-enabled robotic perception and control system for an XARM6 six-degree-of-freedom manipulator in the context of an automotive-part handling challenge at Tecnológico de Monterrey. The work combined ROS 2 Humble, an Azure Kinect DK RGB-D camera, 2D computer vision, 3D point-cloud processing, deep learning, simulation, and physical robotic-arm control to explore automated tracking and recognition of an automotive component.\n\nFor the 3D-learning component, RGB-D data and STL meshes of the target part were used to construct a custom 600-sample point-cloud dataset (550 train / 50 test), each standardized to 1,024 points and normalized to a unit sphere. A simplified PointNet architecture — with a T-Net spatial transformer, shared MLPs, global max pooling, and a softmax classifier — was trained in TensorFlow/Keras with the Adam optimizer, reaching 99.1% training accuracy and 96.4% test accuracy, and was deployed as a ROS 2 inference node with sub-30 ms CPU inference.\n\nFor physical object tracking, a lightweight ROS 2 computer-vision node processed RGB images from the Azure Kinect DK: HSV thresholding and morphological filtering isolated the target part, image moments computed its centroid, and a dead-zone controller incrementally updated XARM joint targets at 10 Hz. This produced end-to-end visual-servoing latency below 50 ms and successfully tracked translational object motion up to 0.3 m/s without losing visual lock. A second interaction mode used MediaPipe hand tracking to map wrist position to robot commands after camera-to-robot calibration.\n\nDue to limited laboratory access during the final project week, the trained PointNet inference node was not fully connected to the physical XARM6 servo loop — the demonstrated closed-loop physical tracking used the 2D RGB segmentation/centroid pipeline, while PointNet was independently trained, tested, and deployed as a ROS 2 node. The project overall demonstrated a complete perception-to-action workflow spanning 3D sensing, point-cloud processing, deep learning, computer vision, robotic control, and ROS 2 integration.',
	  pdfUrl: '/papers/projects/p4.pdf',
	},
	{
	  slug: 'p5',
	  title: 'Autonomous Waypoint Navigation Tractor — John Deere',
	  summary: 'Scale autonomous tractor built for a John Deere waypoint-estimation challenge using a dual-core STM32H755, combining state-machine navigation, PWM motor/steering control, and CAN/SPI/I2C/UART/nRF24 communication with IMU and encoder feedback.',
	  tags: ['STM32', 'Embedded C/C++', 'CAN Bus', 'State Machines', 'PWM', 'IMU'],
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
	  title: 'Autonomous Face-Tracking Drone with Real-Time Computer Vision',
	  summary: 'Autonomous face-tracking system for a DJI Tello UAV using Python, OpenCV, and face_recognition, reactively controlling yaw, altitude, and forward/backward motion to keep a registered target centered, with multithreaded video acquisition and safety-constrained fail-safe hovering.',
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
	  title: 'STM32 Dual-Elevator Embedded System with Greedy Scheduling',
	  summary: 'Five-floor dual-elevator embedded control system on an STM32 NUCLEO-G474RE, with two independently controlled continuous-rotation servos, a 4x4 keypad, magnetic safety sensing, and a deterministic greedy scheduler assigning requests by distance, availability, and direction.',
	  tags: ['STM32', 'Embedded C', 'Finite State Machines', 'PWM', 'Greedy Algorithms', 'SolidWorks'],
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
	  title: 'IoT Smart Agriculture & Automated Environmental Control Platform',
	  summary: 'Scale smart-agriculture IoT platform built at Beijing Institute of Technology using a Raspberry Pi, distributed environmental sensors, and automated actuators, closing the loop between sensing, automated irrigation/ventilation, and a real-time web dashboard.',
	  tags: ['IoT', 'Raspberry Pi', 'Sensor Integration', 'Automation', 'Web Dashboard'],
	  image: '/images/projects/p8.png',
	  institution: 'Beijing Institute of Technology',
	  location: 'Beijing, China',
	  logo: '/images/education/e3.png',
	  repoUrl: '',
	  description: 'This project was developed at the Beijing Institute of Technology as a scale prototype of an IoT-enabled precision-agriculture system. The objective was to demonstrate how continuous environmental sensing, edge computing, automated actuation, and web-based monitoring can be integrated into a single platform to support data-driven agricultural management.\n\nA Raspberry Pi served as the central computing and coordination unit, aggregating readings from multiple environmental sensors placed around the scale agricultural environment and using them as inputs to the system\'s monitoring and automation logic. Rather than functioning only as a passive monitoring station, the platform incorporated actuators capable of responding to changing conditions — for example, triggering irrigation when additional water was needed or activating ventilation when airflow was required.\n\nThis created a closed-loop IoT architecture in which the physical environment was continuously observed, environmental data was processed by the computing platform, and actuator commands were generated according to detected needs: sense, process, decide, actuate, and monitor. A user-facing website provided real-time visibility into the collected environmental data, allowing remote observation of current agricultural conditions from a centralized dashboard.\n\nThe complete project combined embedded/edge computing, environmental sensing, actuator control, IoT communication, automation logic, and web development into a single cyber-physical system, serving as a proof of concept for how similar architectures could be expanded to monitor and automate larger agricultural environments.',
	},
	{
	  slug: 'p9',
	  title: 'Embedded Tractor Telemetry & Control System — John Deere',
	  summary: 'Embedded tractor control and telemetry prototype built with John Deere using an STM32 and Raspberry Pi, combining real-time task scheduling, UART communication, transmission-model execution, and a multithreaded Python/Tkinter telemetry dashboard.',
	  tags: ['STM32', 'Raspberry Pi', 'Real-Time Systems', 'UART', 'Multithreading', 'Telemetry'],
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
	  title: 'FPGA-Based Tractor Simulator with Unity and Custom Processor Integration',
	  summary: 'FPGA-controlled agricultural tractor simulator on a Terasic DE10-Lite board paired with Unity, using VHDL programmable logic, bidirectional serial communication, accelerometer-based steering, and Assembly processor routines to drive a real-time 3D simulation with live seven-segment telemetry.',
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
			'Developed autonomous mapping, navigation, perception, and mobile-manipulation systems for CALL-M at the CNRS-AIST Joint Robotics Laboratory, with work spanning ROS 2 architecture, SLAM, Nav2, RGB-D perception, exploration, and real-robot validation.',
		],
		tags: ['ROS2', 'SLAM', 'Nav2', 'MoveIt2', 'UR5e', 'LiDAR', 'Python', 'Mobile Manipulation'],
		logo: '/images/experience/w1.png',
		companyUrl: 'https://www.aist.go.jp/index_en.html',
	},
	{
		slug: 'w2',
		company: 'Smart Factory MTY',
		title: 'Robotics Engineer Intern',
		location: 'Monterrey, Mexico',
		dateRange: 'Feb 2024 – Jun 2024',
		bullets: [
			'Commissioned, repaired, calibrated, and integrated industrial robot platforms including UR, xArm, Baxter, and ABB YuMi.',
			'Designed and fabricated a custom pick-and-place gripper that increased production throughput by 30% and helped reduce robot downtime by 20%.',
		],
		tags: ['Industrial Robots', 'SolidWorks', '3D Printing', 'Laser Cutting', 'Electrical/Mechanical'],
		logo: '/images/experience/w2.png',
	},
	{
	  slug: 'w3',
	  company: 'Tecnológico de Monterrey (ITESM)',
	  title: 'Systems & Data Automation Engineer',
	  location: 'Monterrey, Mexico',
	  dateRange: 'Feb 2023 – Mar 2026',
	  bullets: [
		'Managed multi-campus compliance data operations covering $5.3M in projects and contracts while developing automation workflows that supported 100+ employees and improved processing time by 21%.',
	  ],
	  tags: ['Automation', 'Data', 'Python', 'Process Improvement'],
	  logo: '/images/experience/w3.png',
	  companyUrl: 'https://tec.mx',
	},
	{
	  slug: 'w4',
	  company: 'Self-Employed',
	  title: 'Freelance Technology Specialist',
	  location: 'Monterrey, Mexico & USA',
	  dateRange: '2022 – Present',
	  bullets: [
		'Worked with small and medium-sized businesses in Mexico and the United States to automate operational workflows and integrate practical technology solutions tailored to business needs.',
	  ],
	  tags: ['Automation', 'Business Integration', 'Consulting'],
	  logo: '/images/experience/w4.png',
	},
	{
	  slug: 'w5',
	  company: 'CIBRUC',
	  title: 'Computer Programmer (Part-time)',
	  location: 'Monterrey, Mexico',
	  dateRange: 'Feb 2023 – Jul 2023',
	  bullets: [
		'Designed and programmed an interactive simulation/video game for online hosting and licensing using Godot, while leading UI/UX design and production optimization.',
	  ],
	  tags: ['Godot', 'Game Dev', 'UI Design', 'Simulation'],
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
	  role: 'Guest Lecturer & Researcher',
	  status: 'Invited Talk',
	  summary: 'Conducted research on solid-state device physics, connecting neuromorphic and memristor-based capabilities to energy-efficient intelligent robotics. Invited by the engineering faculty to deliver a lecture to an international cohort on neuromorphic architectures and hardware-accelerated AI systems.',
	  tags: ['Neuromorphic Computing', 'Memristors', 'Robotics', 'AI Hardware', 'Research'],
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
	  role: 'Researcher',
	  status: 'Published',
	  summary: 'A modular ROS 2 architecture for autonomous mapping in mobile robots operating in unknown, dynamic indoor environments, combining multimodal scan fusion, static-dynamic obstacle filtering, SLAM, and frontier-based exploration under a supervising program manager. The exploration-management framework governs candidate evaluation, navigation-goal supervision, failure recovery, and mission completion, and can be adopted by any Nav2-compatible ROS 2 mobile-robot stack through configuration alone. Validated in simulation and on the physical CALL-M mobile manipulator.',
	  abstract: 'This paper presents a modular ROS 2 architecture for autonomous mapping in mobile robots operating within unknown and dynamic indoor environments. The proposed system integrates multimodal scan fusion, a static–dynamic obstacle-filtering module, SLAM-based map construction, frontier-based exploration, and Nav2-based navigation, coordinated by a program manager that governs the mission from distributed launch through coordinated termination. Beyond this supervised software system, the architecture is organized around a modular ROS 2 exploration-management framework that extends beyond frontier detection to govern candidate evaluation, navigation-goal supervision, failure recovery, and mission completion. Requiring only an occupancy-grid map, robot-pose information through TF, and a Nav2-compatible navigation interface, the framework may be adopted by compatible ROS 2 mobile-robot stacks through external configuration, without modification of its underlying implementation. The complete system is validated in simulation and on the physical CALL-M mobile manipulator.',
	  tags: ['ROS2', 'SLAM', 'Nav2', 'Autonomous Mapping', 'Frontier Exploration', 'Mobile Manipulation'],
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
	  summary: 'A modular ROS 2 framework that separates static environmental structure from dynamic obstacles in LaserScan-based mapping and navigation, producing a clean static scan for SLAM and a dynamic scan for real-time obstacle avoidance. Designed as a reusable preprocessing layer for mobile robots operating in dynamic indoor environments.',
	  abstract: 'This work presents a modular ROS 2 framework for separating static environmental structure from dynamic obstacles in LaserScan-based robotic mapping and navigation. The framework processes unified multimodal range observations to distinguish persistent structures from transient measurements, providing a static scan for SLAM-based map construction and a dynamic scan for real-time obstacle avoidance. In addition, dynamic observations may be tracked to estimate obstacle motion while preserving compatibility with conventional ROS 2 LaserScan interfaces. The approach is designed as a reusable preprocessing layer for mobile robots operating in dynamic indoor environments, improving map consistency while retaining moving obstacles for navigation and collision avoidance.',
	  tags: ['ROS2', 'LiDAR', 'Obstacle Filtering', 'SLAM', 'Dynamic Environments'],
	  logo: '/images/experience/w1.png',
	},
	{
	  slug: 'door-opening-mobile-manipulator',
	  title: 'An Integrated Perception, Navigation, and Manipulation Pipeline for Semi-Autonomous Door Opening with a Mobile Manipulator',
	  institution: 'CNRS-AIST Joint Robotics Laboratory',
	  location: 'Tsukuba, Japan',
	  date: '2026',
	  role: 'Researcher',
	  status: 'Published',
	  summary: 'A semi-autonomous door-opening pipeline for a mobile manipulator that integrates perception, navigation, localization, and manipulation to detect and approach a door, estimate handle position, align the base, and execute handle manipulation. Evaluated in 20 real-robot trials, achieving 100% success in perception, navigation, and alignment, and 80% success in complete door opening.',
	  abstract: 'Autonomous door opening is a key capability for service robots. It requires integration of perception, navigation, localization, and manipulation. This paper presents a semi-autonomous door-opening pipeline for a mobile manipulator. The system requires manual initialization of the robot pose in Rviz; it autonomously detects and approaches the door, estimates the 3D handle position, aligns the mobile base, performs the pre-grasp positioning, and executes handle manipulation and door opening. The system was evaluated on a real mobile manipulator in 20 trials: 10 nominal operation trials, 5 trials with varying initial robot-to-door distance, and 5 trials varying initial end effector height. In nominal condition, door perception, navigation, 3D localization, alignment and pre-grasp positioning were successful 100% of the time, while the complete door opening succeeds 80% of the time. The system successfully handled the initial robot-to-door distance in four of five trials. However, changes in the initial end effector height reduced performance, completing only one of five trials. Failures occurred mainly in the contact and interaction between the handle and the gripper. Physical handle manipulation is the main limitation of the current system.',
	  tags: ['ROS2', 'Manipulation', 'Perception', 'Navigation', 'Mobile Manipulator', 'Door Opening'],
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
	  grade: 'GPA: 4.0/4.0 · Average: 98/100 (Top 1%)',
	  tags: ['Intelligent Robotics', 'Computer Vision', 'Control Systems', 'Kinematics & Dynamics'],
	  logo: '/images/education/e1.png',
	  institutionUrl: 'https://tec.mx',
	  highlight: 'Awarded Top 1% GPA recognition by the School of Engineering & Sciences · Full scholarship recipient',	},
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
	  highlight: 'Authored and presented faculty-reviewed research paper on Neuromorphic Computing at the university',	},
	{
	  slug: 'e3',
	  institution: 'Beijing Institute of Technology (BIT)',
	  program: 'Summer Program',
	  field: 'Advanced Electronics & Computer Science',
	  location: 'Beijing, China',
	  dateRange: 'Jul 2025 – Aug 2025',
	  grade: 'Grade: A+',
	  tags: ['Advanced Electronics', 'Embedded Systems', 'Computer Science'],
	  logo: '/images/education/e3.png',
	  institutionUrl: 'https://english.bit.edu.cn',
	  highlight: 'Selected as class representative to deliver closing ceremony speech · Received full scholarship from ITESM',	},
	{
	  slug: 'e4',
	  institution: 'University of Waterloo',
	  program: 'Summer Program',
	  field: 'Advanced Academic Communication & Cross-Cultural Studies',
	  location: 'Waterloo, Canada',
	  dateRange: 'Jul 2024 – Aug 2024',
	  grade: 'Grade: A+',
	  tags: ['Academic Communication', 'Public Speaking', 'Leadership', 'Global Collaboration'],
	  logo: '/images/education/e4.svg',
	  institutionUrl: 'https://uwaterloo.ca',
	  highlight: 'Engaged in international team leadership, cross-cultural communication, and academic presentations',	},
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
	  title: 'Student Representative & Honored Graduate — BIT International Summer Program',
	  issuer: 'Beijing Institute of Technology (BIT)',
	  location: 'Beijing, China',
	  date: 'Aug 2025',
	  description: 'Recognized for outstanding performance in the Electronics Engineering program and selected to deliver the closing ceremony speech representing the international cohort at Beijing Institute of Technology.',
	  bullets: [
		'Awarded diploma for outstanding performance.',
		'Selected to deliver closing ceremony speech as student representative.',
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
	  description: 'Recognized by Tecnológico de Monterrey for ranking among the top 1% of engineering students by GPA during the 2024–2025 academic year.',
	  bullets: [
		'Academic average: 98/100.',
		'Honored through Mejores Promedios while studying abroad at UOS.',
	  ],
	  link: 'https://www.linkedin.com/feed/update/urn:li:activity:7385899900934373376/',
	  logo: '/images/education/e1.png',
	},
	{
	  title: '3rd Place — Expo Ingenierías 2023',
	  issuer: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  date: 'Dec 2023',
	  description: 'Awarded third place for SafeSpace, an AI-enabled home-safety system for older adults, in a competition with more than 100 participants.',
	  bullets: [
		'AI facial recognition using Python.',
		'Multi-sensor automation and remote web monitoring using NodeMCU/ESP32 and Arduino.',
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
	  skills: ['Python', 'C/C++', 'C#', 'MATLAB', 'Bash', 'VHDL', 'Assembly', 'HTML', 'SQL', 'R', 'OpenMP', 'Parallel Programming', 'CMake', 'LaTeX'],
	},
	{
	  category: 'Tools & Frameworks',
	  icon: '🛠️',
	  skills: ['ROS 2', 'micro-ROS', 'OpenCV', 'YOLOv8', 'PyTorch', 'TensorFlow', 'Gazebo', 'RViz', 'CoppeliaSim', 'MoveIt', 'Nav2', 'Docker', 'Git/GitHub', 'Linux', 'FreeRTOS', 'Simulink', 'SolidWorks', 'Fusion 360', 'Unity', 'Nginx', 'MQTT', 'NumPy', 'Pandas', 'Matplotlib', 'PlotJuggler'],
	},
	{
	  category: 'Hardware',
	  icon: '🔧',
	  skills: ['STM32', 'ESP32', 'NVIDIA Jetson Nano', 'Raspberry Pi', 'Arduino', 'PLCs', 'FPGAs', 'LiDAR', 'SLAM', 'RGB-D Cameras', 'IMU', 'Encoders', 'Soldering', 'Oscilloscope', '3D Printing', 'Laser Cutting', 'CAN/UART/SPI/I2C', 'Wi-Fi/BLE/LoRa/RFID', 'Many other sensors & actuators'],
	},
	{
	  category: 'Robotics & Control',
	  icon: '🤖',
	  skills: ['Control Systems Design & Implementation', 'PID / Lead / Lag / Lead-Lag Controllers', 'Cascaded PID', 'Closed-Loop Control', 'State Machines', 'SLAM', 'Motion Planning', 'Path Planning', 'Localization', 'Sensor Fusion', 'Autonomous Navigation', 'Teleoperation', 'Kinematics & Dynamics', 'End-Effector Design', 'Embedded Systems Design', 'Real-Time Systems', 'Many more'],
	},
	{
	  category: 'AI & Machine Learning',
	  icon: '🧠',
	  skills: ['Machine Learning', 'Linear & Logistic Regression', 'Gradient Descent', 'Decision Trees & Random Forests', 'SVMs', 'K-Means & Clustering', 'Dimensionality Reduction (PCA)', 'Cross-Validation & Regularization', 'Deep Learning', 'CNNs', 'RNNs & LSTMs', 'Transformers', 'Transfer Learning', 'Object Detection', 'Pose Detection', 'Semantic Segmentation', 'Shallow & Deep Neural Networks', 'Artificial Intelligence', 'Computer Vision'],
	},
	{
	  category: 'Software & Systems',
	  icon: '⚙️',
	  skills: ['Containerization (Docker)', 'Real-Time Systems', 'Embedded Systems Design', 'Git Workflow', 'Agile / Scrum', 'Many more'],
	},
  ]	
  
  export const languages: Language[] = [
	{ name: 'Spanish', level: 'Native', note: 'Native' },
	{ name: 'English', level: 'C2', note: 'Near-Native' },
	{ name: 'German', level: 'B1', note: 'Intermediate' },
	{ name: 'Japanese', level: 'Beginner', note: 'Beginner' },
  ]

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'robertogomez101010@gmail.com',
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
	default_title: 'Raymundo Gómez Vargas | Robotics & AI Engineer',
	default_description: 'Robotics and Digital Systems Engineer specializing in autonomous systems, ROS 2, mobile manipulation, perception, AI, and embedded robotics, with engineering and research experience across Japan, South Korea, China, Canada, and Mexico.',
	default_image: '/images/pfp.jpg',
  }
