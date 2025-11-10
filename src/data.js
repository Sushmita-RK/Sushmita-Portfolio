// src/data.js

export const profileData = {
  name: "Sushmita Kalasagond",
  email: "sushmitakalasagond@gmail.com",
  phone: "+91-7760406283",
  linkedin: "linkedin.com/in/sush-rk",
  location: "Bengaluru, Karnataka",
  headline: "Passionate about building scalable, user-focused web applications.",
  
  // --- THIS IS THE CHANGE ---
  // Replaced 'summary' and 'eager' with a new 'aboutMe' array
  aboutMe: [
    "I am a passionate software engineer, skilled in creating clean, efficient, and maintainable code with a strong foundation in debugging, problem-solving, and collaborative development.",
    "My focus is on full-stack development. My experience as a Software Engineer Intern involves building Java-based web applications using Core Java and OOPs principles. I have also built personal projects using a modern MERN stack (MongoDB, React, Node.js), including this very portfolio website which features a contact form with email integration.",
    "I have also developed an Online Job Portal to connect job seekers and employers, implementing robust user authentication and real-time job posting functionalities. I am eager to contribute to innovative software projects while continuously enhancing my technical expertise."
  ]
  // --- END OF CHANGE ---
};
export const skillsData = {
  languages: ["Java", "JavaScript", "C++", "SQL", "Python"], // [cite: 10]
  frontend: ["HTML", "CSS", "React.js"], // [cite: 11]
  backend: ["Node.js", "Servlets", "Spring Boot"], // [cite: 12]
  databases: ["MySQL", "MongoDB"], // [cite: 13]
  softSkills: ["Problem-Solving", "Effective Communication", "Adaptability", "Time Management", "Strong Work Ethic"] // [cite: 14]
};

export const experienceData = [
  {
    role: "Software Engineer Intern", // [cite: 16]
    company: "Kodnest", // [cite: 15]
    location: "Bengaluru, Karnataka", // [cite: 18]
    dates: "May 2025 – Present", // [cite: 18]
    description: [
      "Contribute as a Full Stack Developer Intern, focusing on Java-based web applications.", // [cite: 17]
      "Develop frontend components using HTML, CSS, and JavaScript, and implement backend logic with Core Java, JDBC, and Servlets.", // [cite: 19]
      "Build responsive user interfaces, apply Object-Oriented Programming (OOP) principles, and develop dynamic web solutions aligned with industry standards." // [cite: 20]
    ]
  }
];

export const projectsData = [
  {
    title: "Hand Gesture to Text Conversion", // [cite: 29]
    dates: "Sep 2024 – Mar 2025", // [cite: 33]
    tech: ["Python", "AI", "Random Forest", "CNN", "MediaPipe"],
    description: [
      "Engineered an AI-based gesture-to-text system using Random Forest and CNN models, achieving 94% accuracy.", // [cite: 34]
      "Integrated MediaPipe for robust feature extraction and real-time gesture recognition from video and webcam input.", // [cite: 35]
      "Designed an assistive communication module with efficient data preprocessing, model training, and evaluation pipelines." // [cite: 36]
    ],
    githubLink: "#", // Add your link
    liveLink: "#" // Add your link
  },
  {
  title: "Professional React Portfolio Website",
  dates: "Oct 2023 – Jan 2024", // The dates we built this project
  tech: ["React", "React-Bootstrap", "CSS", "JavaScript"],
  description: [
    "Built a fully responsive, modern portfolio website from scratch using React and React-Bootstrap, featuring a professional 'glassmorphism' dark theme.",
    "Designed a dynamic and colorful UI with gradient text, a typewriter animation, and subtle 'shine' hover effects to create an engaging user experience.",
    "Implemented key features including a fully functional contact form using the EmailJS service and smooth-scrolling navigation with React-Scroll."
  ],
  githubLink: "#", // Add your new project's GitHub link
  liveLink: "#" // Add your new project's live URL
  },
  {
  title: "Full-Stack Real-Time Chat Application",
  dates: "Nov 2025", // The dates we built this project
  tech: ["Java", "Spring Boot", "Spring Security", "REST", "Spring WebSocket", "React", "JavaScript", "Vite"],
  description: [
    "Built a secure, full-stack, real-time messaging app with a Java Spring Boot backend and React (Vite) frontend.",
    "Engineered end-to-end JWT authentication, securing both REST APIs and WebSocket connections.",
    "Implemented real-time public and private 1-to-1 messaging using Spring WebSocket (STOMP).",
    "Developed a dynamic React UI with hooks to manage auth state, user lists, and chat histories."
  ],
  githubLink: "https://github.com/Sushmita-RK/Full-stack-chat-app", // Add your link
  liveLink: "#" // Add your link
  },
  {
  title: "Smart Spoon AI System",
  dates: "Feb 2025– May 2025", // <-- TODO: Update the dates
  tech: ["Python", "Machine Learning", "Computer Vision", "Sentiment Analysis"],
  description: [
    "Simulated a smart spoon system designed to enhance taste perception using artificial intelligence.",
    "Engineered a machine learning model to predict a user's taste preferences based on their input.",
    "Integrated a computer vision module to recognize and identify food items from images.",
    "Developed a sentiment analysis component to analyze user behavior and feedback."
  ],
  githubLink: "https://github.com/Sushmita-RK/smart_spoon_project-TIE-", // <-- TODO: Add your GitHub link
  liveLink: "https://private-user-images.githubusercontent.com/171408012/440092646-0c180235-aa8c-423e-9b9d-22509e272316.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjE5OTY3NzksIm5iZiI6MTc2MTk5NjQ3OSwicGF0aCI6Ii8xNzE0MDgwMTIvNDQwMDkyNjQ2LTBjMTgwMjM1LWFhOGMtNDIzZS05YjlkLTIyNTA5ZTI3MjMxNi5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MTEwMSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTExMDFUMTEyNzU5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YThmZDBjYmQyNDM5NjE1NmNhZGVkMjk2ZThlM2M3MTA3ZjA4ODZmYmE3M2UwOTNmYTNjYjk5NmE2NjAxODQ5ZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.JvM6GMIZsCJJTHEhs4wMAAfxW1xaAL7hg7mQ-QANc84"  // <-- TODO: Add your live link (if any)
}
];

export const educationData = [
  {
    institution: "BLDEA's V.P. Dr.P.G. Halakatti College of Engineering and Technology", // [cite: 22]
    degree: "B.E. in Computer Science", // [cite: 23]
    result: "CGPA: 8.2", // [cite: 23]
    dates: "Dec 2021 – May 2025" // [cite: 30]
  },
  {
    institution: "Shanthinikethana Science PU College", // [cite: 24]
    degree: "Pre-University Course (PCMB)", // [cite: 25]
    result: "Percentage: 89%", // [cite: 25]
    dates: "Jun 2019 – May 2021" // [cite: 31]
  },
  {
    institution: "Sri Vivekananda High School", // [cite: 26]
    degree: "Secondary School Leaving Certificate", // [cite: 27]
    result: "Percentage: 89%", // [cite: 27]
    dates: "Jun 2018 – Apr 2019" // [cite: 32]
  }
];

export const certificationsData = [
  "Full Stack Development (Java) - Kodnest", // [cite: 47]
  "Data Science with Python - LearnHub", // [cite: 48]
  "AI and Machine Learning - Rooman Technologies", // [cite: 49]
  "Cyber Security and Ethical Hacking - iStop (DevClub IIT Delhi)", // [cite: 50]
  "Web Development - BLDEACET" // [cite: 51]
];
