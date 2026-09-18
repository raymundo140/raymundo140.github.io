export const profile = {
	fullName: 'Raymundo',
	title: 'Robotics & AI Engineer',
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
	  summary: 'Modular ROS 2 autonomous-mapping architecture for CALL-M built around three contributions — supervised mission orchestration, reusable exploration management, and static–dynamic obstacle filtering — validated in simulation and on the physical robot.',
	  tags: ['ROS 2', 'SLAM', 'Nav2', 'Frontier Exploration', 'LiDAR', 'RGB-D', 'Dynamic Environments'],
	  image: '/images/projects/p1.png',
	  institution: 'CNRS-AIST JRL (Joint Robotics Laboratory)',
	  location: 'Tsukuba, Japan',
	  company: 'National Institute of Advanced Industrial Science and Technology (AIST)',
	  logo: '/images/experience/w1.png',
	  repoUrl: 'https://github.com/raymundo140/call-m',
	  description: 'This project develops a modular ROS 2 architecture for autonomous mapping with CALL-M, an omnidirectional mobile manipulator, at the CNRS-AIST Joint Robotics Laboratory (JRL), AIST, in Tsukuba, Japan. The objective was to move beyond manually-driven SLAM and build a system that initializes a distributed ROS 2 stack, fuses heterogeneous range sensors, constructs an occupancy map, decides where to explore next, supervises navigation goals, recovers from failures, handles moving obstacles, tracks mission progress, and terminates the mission in a controlled way.\n\nThe project produced three contributions. The first is a supervised ROS 2 software architecture in which a program manager coordinates the complete mission lifecycle — launching the distributed stack in dependency order, gating autonomous exploration behind explicit confirmation, and preserving the final map. The second is a reusable exploration-management framework that extends frontier exploration with candidate validation and scoring, Nav2 goal supervision, spatial failure memory, and mission-completion logic, requiring only an occupancy map, TF-based pose, and a Nav2-compatible interface to transfer to other ROS 2 mobile robots. The third is a static–dynamic obstacle-filtering framework that separates persistent structure from moving observations before they reach SLAM, keeping dynamic obstacles available to navigation while preventing them from becoming permanent structure in the map.\n\nCALL-M combines two RPLIDAR A1M8 scanners, two ZED Mini stereo cameras, an Intel RealSense D435i, an omnidirectional TriOrb base, and a Universal Robots manipulator, running as a distributed ROS 2 graph across an NVIDIA Jetson Orin Nano, an Intel NUC, and an operator computer.\n\nAcross ten autonomous exploration trials in simulation, the supervised architecture completed 10/10 missions versus 7/10 for a nearest-frontier baseline, achieving 95.3 ± 2.4% coverage while reducing average navigation goals from 161.9 to 56.1. On the physical robot, the system reached autonomous completion in 5/5 sessions, reconstructing a measured 4.90 m room dimension as 4.85 ± 0.05 m and a measured 6.80 m dimension as 7.13 ± 0.07 m.\n\nThe first two contributions form the core of a submitted paper (IEEE/SICE SII 2027, first author); the third is being developed as an independent paper focused on mapping in dynamic environments.',
	  pdfUrl: '/papers/projects/p1.pdf',
	},
	{
	  slug: 'p2',
	  title: 'Autonomous Door Opening — CALL-M Mobile Manipulator',
	  summary: 'End-to-end perception, navigation, and manipulation pipeline that lets CALL-M find a door, localize its handle in 3D, align its base, and execute the opening motion — evaluated across 20 real-robot trials under nominal, distance-varied, and height-varied conditions.',
	  tags: ['ROS 2', 'Mobile Manipulation', 'RGB-D', 'YOLO', 'Nav2', 'MoveIt', 'Point Clouds', 'Real-Robot Testing'],
	  image: '/images/projects/p2.png',
	  institution: 'Tecnológico de Monterrey',
	  location: 'Tsukuba, Japan',
	  company: 'National Institute of Advanced Industrial Science and Technology (AIST)',
	  logo: '/images/experience/w1.png',
	  repoUrl: 'https://github.com/raymundo140/call-m',
	  description: 'This research project develops the complete perception–navigation–manipulation pipeline for semi-autonomous door opening with CALL-M, a mobile manipulator at the CNRS-AIST Joint Robotics Laboratory (JRL), AIST, in Tsukuba, Japan. I am the second author of the resulting paper (submitted). I worked across the full project rather than a single subsystem: ROS 2 system integration, door-search behavior, door and handle detection, RGB-D and point-cloud handle localization, TF coordinate transforms, Nav2 integration and base alignment, manipulator positioning and pre-grasp planning, gripper control and handle actuation, real-robot experimentation, stage-level evaluation, and failure analysis.\n\nAfter the operator initializes the robot pose in RViz, the system executes seven stages automatically: Door Search, Approach, Handle Detection, 3D Estimation, Fine Alignment, Pre-Grasp, and Contact/Grasp followed by handle actuation and door opening. A YOLO-based detector trained on 4,656 images identifies the target door; the robot then autonomously approaches and stops at roughly 0.80 m; RGB-D and point-cloud data estimate the handle position in 3D; corrective motions of the omnidirectional base align the robot before the manipulator executes a predefined pre-grasp, grasp, and door-opening sequence.\n\nThe complete pipeline was evaluated in 20 real-robot trials across three scenarios. In the 10 nominal trials, perception, navigation, 3D localization, alignment, and pre-grasp each succeeded 10/10, while complete door opening succeeded 8/10. Five additional trials varying the initial robot-to-door distance (2.15–10.10 m) produced 4/5 end-to-end successes, with the single failure caused by localization drift at the largest tested distance. Five trials varying the initial end-effector height (0.34–0.68 m) produced 1/5 end-to-end successes, succeeding only at the nominal height. Across all three scenarios, perception, localization, and navigation were consistently repeatable — nearly all end-to-end failures occurred during the physical grasp-and-actuation stage, motivating future work on closed-loop pose correction and force-aware manipulation.',
	  pdfUrl: '/papers/projects/p2.pdf',
	},
	{
	  slug: 'p3',
	  title: 'Self-Driving Car — Manchester Robotics',
	  summary: 'Scaled autonomous car combining ROS 2, Jetson Nano, PID line following, traffic-light perception, YOLOv8 traffic-sign detection, and state-based driving.',
	  tags: ['ROS 2', 'YOLOv8', 'Jetson Nano', 'OpenCV', 'PID Control', 'Python'],
	  image: '/images/projects/p3.png',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  company: 'Manchester Robotics',
	  logo: '/images/companies/manchester.png',
	  repoUrl: 'https://github.com/raymundo140/autonomous-car-computer-vision-yolov8-ros2',
	  description: 'This ten-week project developed a scaled autonomous differential-drive car in collaboration with Manchester Robotics for the Intelligent Robotic Implementation course at Tecnológico de Monterrey. The objective was to reproduce the core elements of an autonomous-driving stack — perception, closed-loop control, decision making, embedded computing, and wireless communication — on a low-cost indoor robotic platform.\n\nThe robot used a Jetson Nano as its edge-computing platform together with a Manchester Robotics HackerBoard motor driver, encoder-equipped DC motors, and a Raspberry Pi V2 camera. The software stack was built around ROS 2 Humble, Python, OpenCV, and micro-ROS, with a distributed architecture between the Jetson Nano and a laptop handling higher-level perception and decision making.\n\nLine following used grayscale thresholding, contour extraction, and centroid-based lateral-error estimation feeding a PID controller, achieving a 98% track-completion rate over 30 laps with a mean heading error of 4.2 degrees. Traffic-light perception combined HSV thresholding, CLAHE contrast enhancement, and circularity checks to reach a 95.1% classification F1-score. For traffic-sign perception, a YOLOv8 model was trained on 1,200 annotated images across four classes, reaching 92.3% mAP@0.5 with 22 ms TensorRT inference.\n\nAutonomous behavior was coordinated through a finite-state machine combining line following, traffic-light states, and detected traffic signs, governing normal driving, stopping at red lights, slowing for yellow, and executing sign-specific maneuvers. Earlier development stages also implemented waypoint navigation with closed-loop yaw control, reporting 2.8 cm RMS positional error at 0.25 m/s. The final prototype demonstrated an integrated edge-AI robotics system combining embedded hardware, ROS 2 communication, classical computer vision, deep-learning perception, feedback control, and state-based decision making on a physical autonomous vehicle.',
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
	  repoUrl: 'https://github.com/raymundo140/WaypointEstimation',
	  description: 'This project was developed for the TE2004B Design of Advanced Embedded Systems course at Tecnológico de Monterrey as a team solution to a "Waypoint Estimation" challenge proposed by John Deere. The objective was to design and build an autonomous scale tractor capable of following a predefined sequence of waypoints while integrating embedded control, sensing, communication protocols, and real-time task handling.\n\nThe robotic platform was built around an STM32H755 dual-core microcontroller, supported by an Arduino Nano and multiple communication and sensing peripherals: a DC traction motor with encoder feedback, a steering servo, an ESC module, an MPU6050 IMU, nRF24 wireless modules, CAN communication hardware, and a John Deere LPS camera. Firmware was developed in STM32CubeIDE with STM32 HAL libraries, C, and C++, emphasizing non-blocking, system-tick-based task execution rather than CPU-blocking delays.\n\nA route-navigation finite-state machine controlled the tractor through the required trajectory — initial waypoint, curve-entry, curve-completion, and final straight segment — commanding the DC traction motor and steering servo via PWM. The STM32H755 dual-core architecture distributed functionality between its Cortex-M7 and Cortex-M4 cores, with waypoint-indication logic running on the M4 while other tasks ran on the M7. CAN, SPI, I2C, UART, and nRF24 wireless links tied the peripherals and subsystems together, validated individually before full integration.\n\nThe final waypoint-navigation demonstration used a predefined trajectory of four coordinate targets — (0, 120), (86, 143), (86, 0), (0, 0) — with the system reliably navigating between them. My contribution focused on hardware integration and tractor assembly, configuring the nRF24 wireless modules and servo motors, and implementing PWM and SPI communication using STM32 HAL, along with subsystem integration and collaborative debugging across the complete robotic platform.',
	  pdfUrl: '/papers/projects/p5.pdf',
	},
	{
	  slug: 'p6',
	  title: 'Autonomous Face-Tracking Drone',
	  summary: 'Real-time face-tracking system for a DJI Tello that recognizes a registered person and converts image-space error into yaw, altitude, and forward/backward flight commands, with a multithreaded video pipeline and fail-safe hover behavior.',
	  tags: ['Python', 'OpenCV', 'Computer Vision', 'UAV', 'Face Recognition', 'Multithreading', 'Reactive Control'],
	  image: '/images/projects/p6.png',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  repoUrl: '',
	  description: 'This individual project was developed for the TE3002B Implementation of Intelligent Robotics course at Tecnológico de Monterrey. I built a real-time face-tracking system for a DJI Tello drone that recognizes a specific registered person and autonomously adjusts the drone\'s motion to keep that person centered in the camera view and at a roughly constant distance, closing the full loop from camera to face recognition to flight commands.\n\nA reference image is encoded before takeoff using the face_recognition library. During flight, the camera frame is downscaled to 25% resolution and face recognition runs once every 10 frames — comparing each detected encoding against the stored reference with a tolerance of 0.8 — so the system stays responsive without running recognition at the full camera frame rate. A dedicated background thread continuously reads the newest video frame into shared memory protected by a lock, decoupling camera acquisition from face processing and flight control and producing a noticeably smoother, more responsive control loop.\n\nOnce the registered face is identified, horizontal image error is converted into a yaw command, vertical error into an altitude command, and the apparent width of the detected face (target: 170 ± 15 px) into a forward/backward distance command, with all commands velocity-limited (yaw ±30, vertical ±20, forward/backward ±20) and a hard altitude ceiling of 190 cm. If the registered target is lost, the drone sends zero-velocity commands and hovers rather than continuing its previous motion. The program also manages the complete operating sequence — connecting to the drone, starting the video stream, automatic takeoff, and a controlled landing and shutdown sequence on exit.\n\nThe completed system demonstrated a full real-time perception-to-action loop on a physical DJI Tello: recognizing the registered person and reacting to their position and apparent distance by rotating, adjusting altitude, and moving forward or backward, with multithreaded video acquisition keeping the control loop responsive.',
	  pdfUrl: '/papers/projects/p6.pdf',
	},
	{
	  slug: 'p7',
	  title: 'Dual-Elevator Embedded Control System',
	  summary: 'Five-floor, dual-cabin elevator prototype built around an STM32 with independent non-blocking state machines, per-servo PWM calibration, a FIFO request queue, greedy elevator-assignment scheduling, Hall-effect safety sensing, and UART monitoring.',
	  tags: ['STM32', 'Embedded C', 'Finite-State Machines', 'PWM', 'Scheduling', 'UART', 'SolidWorks', '3D Printing'],
	  image: '/images/projects/p7.png',
	  institution: 'University of Seoul',
	  location: 'Seoul, South Korea',
	  logo: '/images/education/e2.png',
	  repoUrl: 'https://github.com/raymundo140/stm32-dual-elevator-embedded-system',
	  demoUrl: 'https://youtu.be/ulnk5hJibjI?si=Kf-K0Fx7CQR4lFax',
	  description: 'This project was developed for the Embedded Systems Applications Design course at the University of Seoul. I designed and built a five-floor, dual-cabin elevator prototype around an STM32 NUCLEO-G474RE, combining mechanical design, embedded firmware, motor control, user input, request scheduling, safety sensing, and real-time monitoring in one physical system.\n\nEach elevator is driven by its own FS90R continuous-rotation servo through an independent hardware-timer PWM channel (TIM3 CH4 and TIM20 CH3), with separate calibration values — neutral pulse width, up/down pulse widths, and deadband — for each motor to compensate for manufacturing differences between the two servos. A 4x4 matrix keypad, scanned across eight GPIO lines, is used to enter pickup and destination floors; validated requests are stored in a FIFO queue rather than driving motor commands directly.\n\nA greedy scoring function assigns each pending request to the most suitable elevator based on distance to the pickup floor, idle/busy status, and directional compatibility, keeping assignment logic separate from each elevator\'s own control. Each elevator then executes its trip through an independent, non-blocking finite-state machine (idle, moving, doors) driven by the STM32 system tick rather than blocking delays, so both cabins progress concurrently while the keypad, request queue, and UART monitoring keep running. Floor position is tracked using calibrated travel time, while magnetic Hall-effect sensors provide safety limits at the physical travel boundaries. UART streams system events — new requests, assignments, floor position, door transitions, and safety events — for real-time debugging. The mechanical structure was designed in SolidWorks and fabricated by FDM 3D printing.\n\nThe completed prototype accepted keypad requests, queued and assigned them across two independently moving elevators, and executed pickup and drop-off phases through per-cabin state machines and calibrated PWM control, demonstrating real-time coordination of two concurrent physical mechanisms on a single embedded controller.',
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
	  summary: 'STM32 + Raspberry Pi embedded system for a John Deere-sponsored challenge, combining real-time task scheduling, bidirectional UART telemetry, transmission-model execution, CSV logging, and a multithreaded Tkinter/Matplotlib dashboard with software-controlled throttle simulation.',
	  tags: ['STM32', 'Raspberry Pi', 'C/C++', 'Python', 'UART', 'Real-Time Systems', 'Telemetry', 'Tkinter', 'Matplotlib'],
	  image: '/images/projects/p9.png',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  company: 'John Deere',
	  logo: '/images/companies/jd.png',
	  repoUrl: 'https://github.com/raymundo140/JohnDeereSTM32RaspPi',
	  description: 'This project was developed at Tecnológico de Monterrey in collaboration with John Deere as the industry partner for the Design of Systems-on-Chip course. I built an end-to-end tractor control and telemetry prototype split across two computing layers: an STM32 handling time-sensitive embedded functions, and a Raspberry Pi handling higher-level data processing, live telemetry, logging, visualization, and operator interaction. I worked across the complete project — embedded architecture, STM32 firmware, Raspberry Pi software, serial communication, the telemetry pipeline, the graphical interface, performance optimization, the physical prototype, and integration.\n\nThe STM32 firmware, written in C/C++ in STM32CubeIDE, is organized into five periodic tasks — matrix-keypad input, ADC acquisition, transmission-model execution, UART communication, and LCD output — each analyzed and scheduled as a real-time task set rather than run inside one monolithic loop. The transmission model tracks throttle, engine speed, vehicle speed, and gear, which form the main telemetry stream sent to the Raspberry Pi over UART.\n\nCommunication between the two devices is bidirectional. In the STM32-to-Raspberry Pi direction, the controller streams vehicle-state telemetry for logging and visualization. In the Raspberry Pi-to-STM32 direction, a Tkinter interface can send a software-generated throttle value that the STM32 uses as the transmission-model input instead of the physical potentiometer once simulation mode is enabled through the keypad — letting the same model be driven from physical hardware or from software.\n\nThe first Raspberry Pi telemetry implementation coupled serial reading, CSV logging, and Matplotlib plot updates in the same execution path, which caused blocking and slower visualization. I reorganized the software so serial acquisition, CSV storage, and live plotting run independently using Python threading and a shared queue, with the plotting interval reduced from 200 ms to 50 ms — producing a substantially more responsive telemetry display.\n\nThe complete system, integrated into a 3D-printed physical tractor prototype, connected real-time embedded firmware and Linux-based software into one bidirectional embedded-to-Linux control and telemetry pipeline.',
	  pdfUrl: '/papers/projects/p9.pdf',
	},
	{
	  slug: 'p10',
	  title: 'FPGA Tractor Simulator with Unity — John Deere',
	  summary: 'Bidirectional FPGA-to-Unity tractor simulator built for a John Deere collaboration, using a Terasic DE10-Lite (VHDL and Assembly), accelerometer-based steering, and serial telemetry that returns live simulation state to the board\'s seven-segment displays.',
	  tags: ['FPGA', 'VHDL', 'Assembly', 'Unity', 'C#', 'Serial Communication', 'RTL', 'Accelerometer'],
	  image: '/images/projects/p10.png',
	  institution: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  repoUrl: '',
	  description: 'This project was developed for the TE2002B Design of Systems-on-Chip course at Tecnológico de Monterrey, in collaboration with John Deere. I built a hardware–software tractor simulator connecting a Terasic DE10-Lite FPGA (Intel/Altera MAX 10) to a real-time Unity environment. The DE10-Lite acted as the physical control interface: switches, push buttons, and later the onboard accelerometer generated command bytes over an FTDI serial link that Unity\'s C# side parsed and mapped to tractor motion using Rigidbody/WheelCollider physics.\n\nThe link ran in both directions. Unity tracked the number of corn objects the tractor collected across three levels (progression thresholds at 50, 100, and 150) with a 60-second time limit and a three-life damage system, coordinated by an eight-state finite-state machine (Menu, Level 1–3, Pause, Victory, Defeat, Rock). It then sent that count back to the FPGA as a byte, which VHDL logic decoded into hundreds/tens/units and displayed live across three seven-segment displays — a real-time physical readout of virtual simulation state.\n\nThe system evolved in stages: an initial version used only switches and push buttons for discrete forward/reverse/steer/boost/brake control, generating a distinct command byte on each activation and deactivation edge; the final version added the DE10-Lite\'s onboard accelerometer for steering and processor-level Assembly routines that evaluated physical and accelerometer inputs through custom ports and address-selection logic to generate control commands, extending the design from pure VHDL control into processor/FPGA co-design.\n\nThe completed prototype closed the loop between programmable hardware and simulation: physical switches, buttons, and accelerometer input controlled the virtual tractor in real time in Unity, and Unity\'s simulation state returned to the FPGA for live physical display, combining RTL design, Assembly, serial communication, and real-time 3D simulation in one bidirectional system.',
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
			'Authored 2 research papers as first author and contributed to a third as co-author during the internship.',
		],
		tags: ['ROS 2', 'SLAM', 'Nav2', 'LiDAR', 'RGB-D', 'Mobile Manipulation', 'Intelligent Robotics'],
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
		'Delivered technology and automation solutions for 50+ SME clients in Mexico and the USA, translating operational problems into practical technical solutions.',
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
	  date: 'Sep 2026',
	  role: 'First Author',
	  status: 'Submitted to IEEE/SICE SII 2027',
	  summary: 'Presents a modular ROS 2 software architecture for autonomous mapping in unknown and dynamic environments. The exploration-management framework handles frontier evaluation, navigation-goal supervision, failure recovery, progress monitoring, and mission completion while remaining configurable for Nav2-compatible robots.',
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
	  date: 'Sep 2026',
	  role: 'First Author',
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
	  date: 'Sep 2026',
	  role: 'Second Author',
	  status: 'Submitted to IEEE/SICE SII 2027',
	  summary: 'Presents an end-to-end mobile-manipulation pipeline combining door perception, LiDAR-based Nav2 approach, RGB-D handle localization, base alignment, pre-grasp positioning, grasp execution, and physical door opening on CALL-M. Evaluated in 20 real-robot trials; in the 10 nominal trials, upstream perception, navigation, localization, alignment, and pre-grasp stages succeeded 10/10, while complete door opening succeeded 8/10.',
	  abstract: 'Autonomous door opening is a key capability for service robots. It requires integration of perception, navigation, localization, and manipulation. This paper presents a semi-autonomous door-opening pipeline for a mobile manipulator. The system requires manual initialization of the robot pose in RViz; it autonomously detects and approaches the door, estimates the 3D handle position, aligns the mobile base, performs the pre-grasp positioning, and executes handle manipulation and door opening. The system was evaluated on a real mobile manipulator in 20 trials: 10 nominal operation trials, 5 trials with varying initial robot-to-door distance, and 5 trials varying initial end-effector height. In nominal condition, door perception, navigation, 3D localization, alignment, and pre-grasp positioning succeeded 10/10, while complete door opening succeeded 8/10. The system successfully handled the initial robot-to-door distance in four of five trials. However, changes in the initial end-effector height reduced performance, completing only one of five trials. Failures occurred mainly in the contact and interaction between the handle and the gripper. Physical handle manipulation is the main limitation of the current system.',
	  tags: ['ROS 2', 'Mobile Manipulation', 'RGB-D', 'Navigation', 'Door Opening', 'LiDAR'],
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
	  tags: ['Artificial Intelligence', 'Advanced Embedded Systems', 'Solid-State Electronics', 'Deep Learning', 'Machine Learning'],
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
	  title: 'Student Representative & Outstanding Performance Recognition',
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
	  description: 'Recognized by Tecnológico de Monterrey for ranking among the top 1% of engineering students by academic average.',
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
	  skills: ['Python', 'C++', 'C', 'C#', 'MATLAB', 'Bash', 'VHDL', 'Assembly', 'SQL', 'R', 'CMake', 'LaTeX', 'and others'],
	},
	{
	  category: 'Robotics & Autonomy',
	  icon: '🤖',
	  skills: ['ROS 2', 'Nav2', 'SLAM Toolbox', 'MoveIt 2', 'micro-ROS', 'tf2', 'PCL', 'Gazebo', 'RViz', 'Isaac Sim', 'Autonomous Navigation', 'Frontier Exploration', 'Localization', 'Sensor Fusion', 'Motion Planning', 'Kinematics & Dynamics', 'PID Control', 'Finite-State Machines', 'and others'],
	},
	{
	  category: 'Perception & AI',
	  icon: '🧠',
	  skills: ['OpenCV', 'YOLOv8', 'PyTorch', 'TensorFlow', 'Computer Vision', 'RGB-D Perception', 'Point Clouds', 'Object Detection', 'Deep Learning', 'CNNs', 'Transfer Learning', 'Clustering', 'Pose / Target Localization', 'and others'],
	},
	{
	  category: 'Embedded & Hardware',
	  icon: '🔧',
	  skills: ['STM32', 'NVIDIA Jetson', 'Raspberry Pi', 'FPGAs', 'ESP32', 'Arduino', 'FreeRTOS', 'LiDAR', 'RGB-D Cameras', 'IMU', 'Encoders', 'CAN', 'UART', 'SPI', 'I2C', 'PWM', 'Oscilloscope', 'Soldering', '3D Printing', 'Laser Cutting', 'and others'],
	},
	{
	  category: 'Software & Engineering',
	  icon: '⚙️',
	  skills: ['Linux', 'Git/GitHub', 'Docker', 'CMake', 'SolidWorks', 'Simulink', 'Unity', 'Nginx', 'MQTT', 'NumPy', 'Pandas', 'Matplotlib', 'PlotJuggler', 'and others'],
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
	default_title: 'Raymundo Gómez Vargas | Robotics & AI Engineer',
	default_description: 'Robotics engineer building autonomous systems across perception, navigation, manipulation, AI, and embedded control. Research and engineering experience at AIST and international programs across Japan, South Korea, China, Canada, and Mexico.',
	default_image: '/images/pfp.jpg',
  }
