"use client";

import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";

import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaCertificate,
  FaProjectDiagram,
} from "react-icons/fa";


const projects = [
{
title: "Secure IoV Authentication System",
description:
"Blockchain-based authentication system using Python, Flask, SQLite, and SHA-256. Simulated Sybil, Replay, and DoS attacks for anomaly detection and security analysis.",
image: "/projects/secure-iov.png",
github: "https://github.com/Sasanksurya/secure-iov-authentication-system",
tech: ["Python", "Flask", "SQLite", "Blockchain"],
},

{
title: "Customer Churn Prediction System",
description:
"End-to-end machine learning solution for customer churn prediction using XGBoost and ensemble learning techniques. Includes feature engineering, model optimization, and business analytics dashboard.",
image: "/projects/customer-churn.png",
github: "https://github.com/Sasanksurya/Customer-Churn-Prediction-System",
tech: ["Python", "SQL", "XGBoost", "Streamlit"],
},

{
title: "AI Resume Intelligence Platform",
description:
"AI-powered resume intelligence platform for ATS evaluation, semantic search, intelligent job matching, skill-gap analysis, and personalized resume recommendations using LangChain and FAISS.",
image: "/projects/resume-intelligence.png",
github: "https://github.com/Sasanksurya",
tech: ["LangChain", "FAISS", "RAG", "Streamlit"],
},

{
title: "AI-Based Industrial Fire & Smoke Detection",
description:
"Real-time fire and smoke detection system using YOLOv8 and OpenCV. Detects hazardous events from images and videos and supports automated monitoring workflows.",
image: "/projects/fire-smoke.png",
github: "https://github.com/Sasanksurya",
tech: ["YOLOv8", "OpenCV", "Computer Vision", "Python"],
},

{
title: "Twitter Sentiment Analysis",
description:
"NLP-based sentiment analysis system for social media data using machine learning models, text preprocessing, feature extraction, and sentiment classification.",
image: "/projects/twitter-sentiment.png",
github: "https://github.com/Sasanksurya/twitter-sentiment-analysis-nlp",
tech: ["Python", "NLP", "Machine Learning", "Pandas"],
},

{
title: "Brazilian E-Commerce Analytics Dashboard",
description:
"Interactive business intelligence dashboard for analyzing customer behavior, sales trends, revenue insights, and e-commerce performance metrics.",
image: "/projects/brazil-ecommerce.png",
github: "https://github.com/Sasanksurya/brazilian-ecommerce-analytics-dashboard",
tech: ["SQL", "Analytics", "Dashboard", "Visualization"],
},

{
title: "India Tour Packages Web Scraping Analysis",
description:
"Web scraping and analytics project using BeautifulSoup and Pandas to extract, clean, and analyze Indian tourism package data.",
image: "/projects/tour-packages.png",
github: "https://github.com/Sasanksurya/india-tour-packages-web-scraping-analysis",
tech: ["Python", "BeautifulSoup", "Pandas", "Web Scraping"],
},
];


const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Agentic AI",
  "Natural Language Processing",
  "Computer Vision",
  "LangChain",
  "LangGraph",
  "TensorFlow",
  "PyTorch",
  "Scikit-Learn",
  "FastAPI",
  "Flask",
  "AWS",
  "Docker",
  "Power BI",
  "Pandas",
  "NumPy",
  "Git",
  "GitHub",
  "Streamlit",
  "FAISS",
];

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="font-bold text-xl text-blue-400">
      Sasank
    </h1>

    <div className="flex gap-6 text-sm">
      <a href="#education" className="hover:text-blue-400">Education</a>
      <a href="#experience" className="hover:text-blue-400">Experience</a>
      <a href="#skills" className="hover:text-blue-400">Skills</a>
      <a href="#projects" className="hover:text-blue-400">Projects</a>
      <a href="#contact" className="hover:text-blue-400">Contact</a>
    </div>
  </div>
</nav>
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* HERO SECTION */}
<section className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

  {/* LEFT SIDE */}
  <div className="space-y-8">

    <div className="inline-block px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
      SOFTWARE DEVELOPMENT ENGINEER • AI/ML • GENERATIVE AI
    </div>

    <div>
      <h1 className="text-7xl lg:text-8xl font-black tracking-tight">
        SASANK
      </h1>

      <h1 className="text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
        SURYA THOTA
      </h1>
    </div>

    <p className="text-xl text-slate-300 leading-10 max-w-2xl">
      <span className="text-blue-400 font-semibold">
        Software Development Engineer | AI/ML Enthusiast
      </span>

      <br />
      <br />

      Passionate about developing scalable software systems and intelligent
      AI-driven applications. Skilled in Python, Machine Learning,
      FastAPI, SQL, and modern software engineering practices.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-wrap gap-4">

      <a
        href="/SASANK_SURYA_THOTA.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
      >
        📄 Resume
      </a>

      <a
        href="mailto:shashanksurya24@gmail.com"
        className="px-8 py-4 rounded-2xl border border-slate-600 hover:border-blue-400 transition"
      >
        📧 Contact
      </a>

      <a
        href="https://github.com/Sasanksurya"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-2xl border border-slate-600 hover:border-blue-400 transition"
      >
        💻 GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/thotasasanksurya/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-2xl border border-slate-600 hover:border-blue-400 transition"
      >
        🔗 LinkedIn
      </a>

    </div>

    {/* STATS */}
    <div className="flex gap-16 mt-10">

      <div className="text-center">
        <p className="text-3xl font-bold text-blue-400">8.9</p>
        <p className="text-slate-400">CGPA</p>
      </div>

      <div className="text-center">
        <p className="text-3xl font-bold text-blue-400">7+</p>
        <p className="text-slate-400">Projects</p>
      </div>

      <div className="text-center">
        <p className="text-3xl font-bold text-blue-400">1600+</p>
        <p className="text-slate-400">Contributions</p>
      </div>

    </div>

  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="relative flex justify-center items-center">

    <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-3xl"></div>

    <div className="relative w-[420px] h-[520px] rounded-[32px] overflow-hidden border border-blue-500/30 bg-slate-900 shadow-[0_0_60px_rgba(59,130,246,0.25)]">

      <Image
        src="/profile.jpg"
        alt="Sasank Surya Thota"
        fill
        priority
        sizes="420px"
        className="object-cover hover:scale-105 transition duration-500"
      />

    </div>

  </div>

</section>

        {/* EDUCATION */}
<section id="education" className="py-20">
  <h2 className="text-5xl font-bold mb-12 text-center flex items-center justify-center gap-4">
    <FaGraduationCap className="text-blue-400" />
    Education
  </h2>

  <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">

    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
        <FaGraduationCap className="text-4xl text-blue-400" />
      </div>

      <div>
        <h3 className="text-2xl font-bold">
          Bachelor of Technology in Computer Science and Business Systems
        </h3>

        <p className="text-blue-400 mt-1">
          SRM Institute of Science and Technology, Chennai
        </p>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-8">
      <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
        <p className="text-slate-400 text-sm">CGPA</p>
        <p className="text-3xl font-bold text-green-400">
          8.9 / 10
        </p>
      </div>

      <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700">
        <p className="text-slate-400 text-sm">Graduation Year</p>
        <p className="text-3xl font-bold text-blue-400">
          2025
        </p>
      </div>
    </div>

  </div>
</section>

        {/* SKILLS */}
        <section id="skills" className="py-20">
          <h2 className="text-5xl font-bold mb-12 text-center">Skills</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 rounded-full bg-slate-800 border border-blue-500/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        {/* EXPERIENCE */}
<section id="education" className="py-20">
  <h2 className="text-5xl font-bold mb-12 text-center flex items-center justify-center gap-4">
    <FaBriefcase className="text-blue-400" />
    Experience
  </h2>

  <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">

    <div className="flex items-center gap-4 mb-6">
      <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
        <FaBriefcase className="text-4xl text-blue-400" />
      </div>

      <div>
        <h3 className="text-2xl font-bold">
          Agentic AI Intern
        </h3>

        <p className="text-blue-400">
          Innomatics Research Labs
        </p>

        <p className="text-slate-400 text-sm">
          Sep 2025 – Present
        </p>
      </div>
    </div>

    <div className="space-y-4 text-slate-300">
      <p>
        • Building AI applications using Python, FastAPI, AWS, LangChain and LangGraph.
      </p>

      <p>
        • Developing Agentic AI workflows and intelligent automation systems.
      </p>

      <p>
        • Implementing RAG pipelines and semantic search solutions.
      </p>

      <p>
        • Designing scalable REST APIs for AI-powered applications.
      </p>
    </div>

  </div>
</section>

        {/* PROJECTS */}
        <section id="projects" className="py-20">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-blue-500/20 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="400px"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  <p className="text-slate-400 mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-slate-800 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* RESEARCH */}
        <section className="py-20">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Research Publication
          </h2>

          <div className="bg-slate-900 border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Secure Authentication in Internet of Vehicles Using Blockchain
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              Published research focused on secure authentication mechanisms in
              Internet of Vehicles environments using blockchain architecture for
              decentralized trust, privacy preservation, and enhanced security.
            </p>
          </div>
        </section>
        {/* CERTIFICATIONS */}
<section className="py-20">
  <h2 className="text-5xl font-bold mb-12 text-center flex items-center justify-center gap-4">
    <FaCertificate className="text-blue-400" />
    Certifications
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-slate-900 border border-blue-500/20 rounded-2xl p-6">
      <h3 className="text-xl font-semibold">
        AWS Cloud Practitioner
      </h3>
    </div>

    <div className="bg-slate-900 border border-blue-500/20 rounded-2xl p-6">
      <h3 className="text-xl font-semibold">
        Data Analytics & Machine Learning Certifications
      </h3>
    </div>

  </div>
</section>

        {/* CONTACT */}
        <section id="contact" className="py-20 text-center">
          <h2 className="text-5xl font-bold mb-8">Let’s Connect</h2>

          <p className="text-slate-300 text-xl mb-4">
            Open to AI/ML Engineer, Software Engineer, and Generative AI roles.
          </p>

          <p className="text-slate-400 text-lg mb-2">
            Email: shashanksurya24@gmail.com
          </p>

          <p className="text-slate-400 text-lg mb-8">
            Phone: +91 6300330998
          </p>

          <a
            href="mailto:shashanksurya24@gmail.com"
            className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-lg font-semibold"
          >
            Contact Me
          </a>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-slate-500">
          © 2026 SASANK SURYA THOTA
        </footer>
      </div>
    </main>
  );
}