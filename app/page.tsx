"use client";

import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";

const projects = [
  {
    title: "Secure IoV Authentication",
    description:
      "Blockchain-based secure authentication mechanism for Internet of Vehicles with enhanced privacy and trust architecture.",
    image: "/projects/secure-iov.png",
    github: "https://github.com/Sasanksurya/secure-iov-authentication-system",
    tech: ["Blockchain", "Python", "Security"],
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Machine learning-powered customer churn prediction system with analytics dashboard and business insights.",
    image: "/projects/customer-churn.png",
    github: "https://github.com/Sasanksurya/Customer-Churn-Prediction-System",
    tech: ["Machine Learning", "Python", "Streamlit"],
  },
  {
    title: "Brazilian E-Commerce Analytics",
    description:
      "Interactive business intelligence dashboard for e-commerce analytics and customer behavior analysis.",
    image: "/projects/brazil-ecommerce.png",
    github: "https://github.com/Sasanksurya/brazilian-ecommerce-analytics-dashboard",
    tech: ["Analytics", "SQL", "Dashboard"],
  },
];

const skills = [
  "Python",
  "Java",
  "C",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "NLP",
  "SQL",
  "Power BI",
  "Tableau",
  "Blockchain",
  "Streamlit",
  "Git",
  "GitHub",
  "Next.js",
  "React",
];

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          <div className="space-y-8">
            <div className="inline-block px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
              AI / ML ENGINEER • GENERATIVE AI • SOFTWARE ENGINEER
            </div>

            <div>
              <h1 className="text-6xl lg:text-8xl font-black">SASANK</h1>
              <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                SURYA THOTA
              </h1>
            </div>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Computer Science graduate passionate about Artificial Intelligence,
              Machine Learning, Generative AI, and scalable software systems.
              Building impactful real-world AI solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
              >
                Resume
              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="px-8 py-4 rounded-2xl border border-slate-600 hover:border-blue-400 transition"
              >
                Contact
              </a>

              <a
                href="https://github.com/Sasanksurya"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl border border-slate-600 hover:border-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="YOUR_LINKEDIN_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl border border-slate-600 hover:border-blue-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-6 bg-blue-500/20 blur-3xl rounded-3xl"></div>

            <div className="relative w-[380px] h-[500px] rounded-3xl overflow-hidden border border-blue-400/30 shadow-2xl shadow-blue-500/20">
              <Image
                src="/profile.jpg"
                alt="Sasank Surya Thota"
                fill
                priority
                sizes="380px"
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="py-20">
          <h2 className="text-5xl font-bold mb-12 text-center">Skills</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 rounded-full bg-slate-800 border border-blue-500/20 text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="py-20">
          <h2 className="text-5xl font-bold mb-12 text-center">Education</h2>

          <div className="bg-slate-900 border border-blue-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Bachelor of Technology in Computer Science Engineering
            </h3>
            <p className="text-slate-300 mt-2">
              Your College Name
            </p>
            <p className="text-slate-400 mt-2">
              Graduation Year: 2026
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-20">
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
                className="group bg-slate-900 rounded-3xl overflow-hidden border border-blue-500/20 hover:border-blue-400 transition"
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
              Secure Authentication Mechanisms in Internet of Vehicles
            </h3>

            <p className="text-slate-300 text-lg leading-relaxed">
              Published research focused on enhancing secure authentication
              mechanisms in Internet of Vehicles (IoV) environments using
              blockchain architecture for decentralized trust and privacy
              protection.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-20 text-center">
          <h2 className="text-5xl font-bold mb-8">Let’s Connect</h2>

          <p className="text-slate-300 text-xl mb-8">
            Open to AI/ML Engineer, Software Engineer, and Generative AI roles.
          </p>

          <a
            href="mailto:yourmail@gmail.com"
            className="px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-lg font-semibold"
          >
            Contact Me
          </a>
        </section>

        <footer className="py-10 text-center text-slate-500">
          © 2026 SASANK SURYA THOTA. All rights reserved.
        </footer>
      </div>
    </main>
  );
}