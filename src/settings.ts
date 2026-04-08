export const profile = {
	fullName: 'Raymundo',
	title: 'Robotics and Digital Systems Engineering',
	institute: 'Tecnológico de Monterrey (ITESM)',
	author_name: 'Roberto Raymundo Gomez Vargas', // Author name to be highlighted in the papers section
	
}



// Projects
export type Project = {
	slug: string;           // URL-safe id, used for <article id={slug}> and /projects#slug
	title: string;
	summary: string;        // 1-2 sentence teaser shown on home card
	tags: string[];         // Tech/skills badges
	image: string;          // Path relative to /public, e.g. '/images/projects/arm.jpg'
	repoUrl?: string;       // Optional GitHub link
	demoUrl?: string;       // Optional live demo link
	description?: string;   // Longer markdown-style text for the full Projects page
  };
  
  export const projects: Project[] = [
	{
	  slug: 'p1',
	  title: 'Autonomous Robotic Arm',
	  summary: '6-DOF robotic arm with computer vision for pick-and-place tasks using ROS2 and OpenCV.',
	  tags: ['ROS2', 'OpenCV', 'Python', 'C++'],
	  image: '/images/projects/arm.jpg',
	  repoUrl: 'https://github.com/raymundo140/autonomous-arm',
	  description: 'Full description here — what the project does, your role, the results, what you learned.',
	},
	{
	  slug: 'p2',
	  title: 'Line Following Robot',
	  summary: 'PID-controlled differential drive robot that follows a line at high speed with sensor fusion.',
	  tags: ['PID', 'Arduino', 'C++', 'Sensor Fusion'],
	  image: '/images/projects/line-follower.jpg',
	  repoUrl: 'https://github.com/raymundo140/line-follower',
	  description: 'Full description here.',
	},
	{
	  slug: 'p3',
	  title: 'SLAM Indoor Mapping',
	  summary: 'Implemented GMapping SLAM on a TurtleBot3 to autonomously map unknown environments.',
	  tags: ['ROS', 'SLAM', 'LiDAR', 'Python'],
	  image: '/images/projects/slam.jpg',
	  repoUrl: 'https://github.com/raymundo140/slam-mapping',
	  description: 'Full description here.',
	},
	{
	  slug: 'p4',
	  title: 'Vision-Based Object Sorter',
	  summary: 'Real-time object classification and sorting pipeline using YOLOv8 and a conveyor system.',
	  tags: ['YOLOv8', 'Python', 'OpenCV', 'Raspberry Pi'],
	  image: '/images/projects/sorter.jpg',
	  repoUrl: 'https://github.com/raymundo140/vision-sorter',
	  description: 'Full description here.',
	},
	{
	  slug: 'p5',
	  title: 'Quadrotor Attitude Control',
	  summary: 'Designed and tuned a cascaded PID controller for stable quadrotor hover and trajectory tracking.',
	  tags: ['Control Systems', 'MATLAB', 'Simulink', 'Python'],
	  image: '/images/projects/drone.jpg',
	  repoUrl: 'https://github.com/raymundo140/drone-pid',
	  description: 'Full description here.',
	},
  ];


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
	  dateRange: 'Mar 2026 – Sep 2026',
	  bullets: [
		'Developed autonomous navigation for a mobile robot integrating LiDAR SLAM for robust operation in complex environments.',
		'Implemented end-to-end robotic-arm integration on a mobile manipulator with closed-loop control for safe autonomous and teleoperated operation.',
	  ],
	  tags: ['ROS2', 'SLAM', 'LiDAR', 'Python', 'Mobile Robots'],
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
		'Assembled, diagnosed, and repaired industrial robots (UR3/UR5, xArm, Baxter, ABB YuMi), reducing downtime by 20%.',
		'Engineered a high-precision end-effector mounted on an industrial robot, increasing throughput by 30%.',
	  ],
	  tags: ['Industrial Robots', 'SolidWorks', '3D Printing', 'Electrical/Mechanical'],
	  logo: '/images/experience/w2.png',
	},
	{
	  slug: 'w3',
	  company: 'Tecnológico de Monterrey (ITESM)',
	  title: 'Systems & Data Automation Engineer',
	  location: 'Monterrey, Mexico',
	  dateRange: 'Feb 2023 – Mar 2026',
	  bullets: [
		'Managed multi-campus compliance data operations overseeing $5.3M in projects and contracts.',
		'Automated systems reducing manual work for 100+ employees and improving processing time by 21%.',
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
		'Partnered with SMEs in Mexico and the USA to integrate technology and automate operational workflows.',
		'Delivered custom automation solutions improving commercial results and reducing manual overhead for clients.',
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
		'Designed and programmed an interactive simulation and video game for online hosting and licensing using Godot.',
		'Led UI/UX design and production optimization, achieving a coherent and intuitive user experience.',
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
	bullets: string[];
	tags: string[];
	logo: string;
  };
  
  export const research: Research[] = [
	{
	  slug: 'research_paper',
	  title: 'Neuromorphic Computing and Memristor-Based Devices in Intelligent Robotics',
	  institution: 'University of Seoul',
	  location: 'Seoul, South Korea',
	  date: 'Dec 2025',
	  bullets: [
		'Authored a faculty-reviewed research paper analyzing solid-state device physics and linking neuromorphic/memristor capabilities to energy-efficient intelligent robotics.',
		'Invited by the engineering faculty to deliver a lecture to an international cohort on neuromorphic architectures and hardware-accelerated AI systems.',
	  ],
	  tags: ['Neuromorphic Computing', 'Memristors', 'Robotics', 'AI Hardware', 'Research'],
	  logo: '/images/research/r1.png',
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
	  title: 'Student Representative & Honored Graduate — Closing Ceremony Speaker',
	  issuer: 'Beijing Institute of Technology (BIT)',
	  location: 'Beijing, China',
	  date: 'Aug 2025',
	  description: 'Recognized as the honored student of the Electronics Engineering program and selected to deliver the closing ceremony speech representing the entire international cohort.',
	  bullets: [
		'Awarded diploma for outstanding performance in the BIT International Summer Program.',
		'Selected among all international students to deliver the closing ceremony speech as class representative.',
		'Received a full scholarship from Tecnológico de Monterrey to attend the program.',
	  ],
	  link: 'https://www.linkedin.com/feed/update/urn:li:activity:7360058580319850496/',
	  logo: '/images/education/e3.png',
	},
	{
	  title: 'Top 1% GPA — School of Engineering & Sciences',
	  issuer: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  date: 'Oct 2025',
	  description: 'Recognized by the School of Engineering and Sciences at Tecnológico de Monterrey for being among the top 1% GPA students nationwide during the 2024–2025 academic year.',
	  bullets: [
		'Ranked among the top 1% of GPA students across the entire engineering program at ITESM.',
		'Honored at the Mejores Promedios ceremony, attended remotely while studying abroad at the University of Seoul.',
	  ],
	  link: 'https://www.linkedin.com/feed/update/urn:li:activity:7385899900934373376/',
	  logo: '/images/education/e1.png',
	},
	{
	  title: '3rd Place — Expo Ingenierías 2023',
	  issuer: 'Tecnológico de Monterrey (ITESM)',
	  location: 'Monterrey, Mexico',
	  date: 'Dec 2023',
	  description: 'Awarded 3rd place at Expo Ingenierías 2023 for "SafeSpace" — an AI-enabled senior home safety system, competing among over 100 participants.',
	  bullets: [
		'Built an integrated in-house safety system for seniors with AI facial recognition using Python.',
		'Implemented multi-sensor automation and remote web monitoring via NodeMCU ESP32, Arduino, SolidWorks, and Docker.',
		'Awarded for outstanding technology entrepreneurship product among 100+ competing teams.',
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
	default_title: 'Raymundo | Robotics Engineer',
	default_description: 'Robotics and Digital Systems Engineer from Tecnológico de Monterrey (Top 1% GPA), with hands-on experience across Japan, South Korea, China, Canada, and Mexico.',
	default_image: '/images/pfp.jpg',
  }
