export const profile = {
	fullName: 'Raymundo',
	title: 'Robotics and Digital Systems Engineering',
	institute: 'Tecnológico de Monterrey (ITESM)',
	author_name: 'Roberto Raymundo Gomez Vargas', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
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
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Raymundo Portfolio',
	default_description: 'Raymundo Robotics Engineering Portfolio',
	default_image: '/images/astro-academia.png',
}
