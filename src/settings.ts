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
	  slug: 'autonomous-arm',
	  title: 'Autonomous Robotic Arm',
	  summary: '6-DOF robotic arm with computer vision for pick-and-place tasks using ROS2 and OpenCV.',
	  tags: ['ROS2', 'OpenCV', 'Python', 'C++'],
	  image: '/images/projects/arm.jpg',
	  repoUrl: 'https://github.com/raymundo140/autonomous-arm',
	  description: 'Full description here — what the project does, your role, the results, what you learned.',
	},
	{
	  slug: 'line-following-robot',
	  title: 'Line Following Robot',
	  summary: 'PID-controlled differential drive robot that follows a line at high speed with sensor fusion.',
	  tags: ['PID', 'Arduino', 'C++', 'Sensor Fusion'],
	  image: '/images/projects/line-follower.jpg',
	  repoUrl: 'https://github.com/raymundo140/line-follower',
	  description: 'Full description here.',
	},
	{
	  slug: 'slam-mapping',
	  title: 'SLAM Indoor Mapping',
	  summary: 'Implemented GMapping SLAM on a TurtleBot3 to autonomously map unknown environments.',
	  tags: ['ROS', 'SLAM', 'LiDAR', 'Python'],
	  image: '/images/projects/slam.jpg',
	  repoUrl: 'https://github.com/raymundo140/slam-mapping',
	  description: 'Full description here.',
	},
	{
	  slug: 'computer-vision-sorter',
	  title: 'Vision-Based Object Sorter',
	  summary: 'Real-time object classification and sorting pipeline using YOLOv8 and a conveyor system.',
	  tags: ['YOLOv8', 'Python', 'OpenCV', 'Raspberry Pi'],
	  image: '/images/projects/sorter.jpg',
	  repoUrl: 'https://github.com/raymundo140/vision-sorter',
	  description: 'Full description here.',
	},
	{
	  slug: 'drone-pid',
	  title: 'Quadrotor Attitude Control',
	  summary: 'Designed and tuned a cascaded PID controller for stable quadrotor hover and trajectory tracking.',
	  tags: ['Control Systems', 'MATLAB', 'Simulink', 'Python'],
	  image: '/images/projects/drone.jpg',
	  repoUrl: 'https://github.com/raymundo140/drone-pid',
	  description: 'Full description here.',
	},
  ];

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
