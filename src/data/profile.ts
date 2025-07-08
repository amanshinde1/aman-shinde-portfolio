export default {
  basics: {
    name: "Aman Shinde",
    title: "Full-Stack Developer",
    email: "amanshinde316@gmail.com",
    phone: "+91 7768855042",
    location: "Pune, Maharashtra",
    summary: `Passionate and detail-oriented Full-Stack Developer with a Master’s in Computer Applications and hands-on experience in Python, Django, and SQL. 
    
    Skilled in building robust backend systems, RESTful APIs, and responsive web applications, user-friendly frontends using HTML, CSS, JavaScript, and Tailwind CSS.

    I enjoy solving real-world problems through clean, maintainable code and thrive in collaborative environments that value continuous learning and innovation.`,
    avatar: "/images/myphoto.jpeg",
    social: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/aman-shinde-45767925b/", icon: "linkedin" },
      { platform: "GitHub", url: "https://github.com/amanshinde1", icon: "github" },
    ]
  },
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "HTML5 / CSS3", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap 4", level: 90 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Python", level: 85 },
        { name: "Django", level: 85 },
        { name: "Django REST Framework", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "PHP", level: 75 }  
      ]
    },
    {
      category: "Tools & Productivity",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code / PyCharm", level: 85 },
        { name: "Docker (Basic)", level: 60 },
        { name: "Chart.js (Data Visualization)", level: 70 },
        { name: "Responsive Web Design", level: 90 },
        { name: "Prompt Engineering (AI Tools)", level: 70 },
      ]
    }
    
  ],
  
  experience: [
    {
      role: "Web Developer Intern",
      company: "Fazinflo",
      location: "Pune, Maharashtra, India · Remote",
      start: "Jan 2024",
      end: "Apr 2024",
      bullets: [
        "Developed a fashion e-commerce platform focusing on user-friendly catalog browsing and seamless shopping experience.",
        "Built frontend and backend components using PHP, HTML, CSS, and JavaScript with a MySQL database.",
        "Implemented features such as user authentication (login/signup), product catalog filtering, shopping cart and checkout system.",
        "Developed an admin panel for managing products and orders with secure session management.",
        "Ensured responsive design for mobile and desktop users."
      ]
    }
  ],
  projects: [
    {
      title: "Library Management System",
      description:
        "A full-featured web-based Library Management System built with Django and PostgreSQL. It includes book catalog, user profiles, borrowing system, admin reports, email reminders, CSV export, and mobile-responsive UI.",
      image: "/images/Homepage copy.png",  // put your real image path or URL here
      tags: [
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Python",
        "Bootstrap",
        "JavaScript",
        "REST API"
      ],
      liveUrl: "https://amanshinde.pythonanywhere.com/",
      sourceUrl: "https://github.com/amanshinde1/library-management-system"
    },
    
    {
      title: "E-commerce Fashion Store",
      description:
        "An online fashion store prototype built during internship. Features include product catalog, filtering, shopping cart, user login/signup, and an admin panel for managing orders and inventory. Built with PHP, MySQL, HTML, CSS, JavaScript, and Tailwind CSS.",
      image: "/images/dope.png",
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Web Design"
      ],
      liveUrl: "#ECOMMERCE_LIVE_URL",
      sourceUrl: "#ECOMMERCE_REPO_URL"
    },
    {
      title: "Travel and Tourism Management System",
      description:
        "An interactive web application allowing users to plan and book travel packages. Includes destination listings, booking functionality, secure authentication, and an admin panel to manage tours. Built using PHP, MySQL, HTML, CSS, and JavaScript.",
      image: "/images/travel.jpg",
      tags: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Web Design"
      ],
      liveUrl: "#TRAVEL_LIVE_URL",
      sourceUrl: "#TRAVEL_REPO_URL"
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Pimpri Chinchwad College of Engineering",
      location: "Pune, Maharashtra, India",
      start: "2022",
      end: "2024"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Vishwakarma College of Arts, Commerce and Science",
      location: "Pune, Maharashtra, India",
      start: "2019",
      end: "2022"
    }
  ],
  certifications: [
    {

      name: "Scientific Computing with Python",
      issuer: "freeCodeCamp",
      issueDate: "Jun 2025",
      url: "https://www.freecodecamp.org/certification/aman_shinde/scientific-computing-with-python-v7",
      skills: [
        "Python",
        "Scientific Computing",
        "Data Structures",
        "Algorithmic Thinking"

      ]
    },
    {



      name: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      issueDate: "May 2025",
      credentialId: "aman_shinde-fedl",
      url: "https://www.freecodecamp.org/certification/aman_shinde/front-end-development-libraries",

      skills: [
        "React.js",
        "Redux.js",
        "JavaScript",
        "CSS",
        "Responsive Web Design"
      ]
    },
    {

      name: "AWS Educate Cloud Computing 101",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "Jun 2025",
      credentialId: "aman_shinde-fedl",
      url: "https://www.credly.com/earner/earned/share/8fb06e01-8387-4a01-b366-b6f625ee13fe",

    },
    {
      name: "Google AI Essentials",
      issuer: "Google (via Coursera)",
      issueDate: "May 2025",
      description:
        "Completed foundational course on AI concepts, responsible and ethical AI practices, and practical applications of AI tools.",
      skills: [
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Generative AI"
      ],
      url: "https://www.coursera.org/account/accomplishments/verify/M7TN7OO3JZ04"
    },
    {
      name: "Google Prompting Essentials",
      issuer: "Google (via Coursera)",
      issueDate: "May 2025",
      credentialId: "6RNS9B00MM3R",
      description: "Covered prompt engineering strategies and best practices for maximizing productivity with generative AI tools.",
      skills: [
        "Prompt Engineering",
        "Generative AI",
        "Productivity Tools"
      ],
      url: "https://www.coursera.org/account/accomplishments/verify/6RNS9B00MM3R"
    },
    {
      name: "Foundations of Cybersecurity",
      issuer: "Google (via Coursera)",
      issueDate: "Feb 2024",
      description:
        "Completed comprehensive course on cybersecurity fundamentals including information security, risk management, and network protection.",
      skills: [
        "Cybersecurity",
        "Information Security",
        "Network Security",
        "Risk Management"
      ],
      url: "https://www.coursera.org/account/accomplishments/verify/37RU4G9L9TQF"
    }
  ],
  meta: {
    title: "Aman Shinde | Full-Stack Developer",
    description:
      "Portfolio and resume of Aman Shinde, Full-Stack Developer specializing in Python, Django, PHP, and full-stack web applications.",
    language: "en",
    themeColor: "#2563eb"
  }
};
