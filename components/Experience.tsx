"use client";
import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Machine Learning Intern",
    company: "Quidich Innovation Labs",
    period: "Jan 2025 — Jun 2025",
    location: "Remote",
    bullets: [
      "Analysed existing system workflows to identify inefficiencies and recommend process improvements.",
      "Collaborated with cross-functional teams to gather and translate business requirements into technical solutions.",
      "Documented system processes, workflows, and functional requirements to support development activities.",
      "Assisted in designing improved data workflows to enhance system efficiency and reliability.",
      "Supported stakeholder communication to ensure alignment on project goals and timelines.",
    ],
    tags: ["Python", "Data Analysis", "Workflow Optimisation", "Business Analysis", "ETL"],
  },
  {
    role: "Machine Learning Intern",
    company: "Parfum Field",
    period: "Jun 2024 — Aug 2024",
    location: "Remote",
    bullets: [
      "Gathered and analysed user requirements to support development of recommendation system features.",
      "Performed data analysis to identify trends and improve system performance.",
      "Communicated insights and findings to support business decision-making.",
      "Supported improvements in data quality and consistency across datasets.",
    ],
    tags: ["Recommender Systems", "Python", "Data Quality", "Pandas", "Documentation"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div ref={ref} className="section-fade">
        <p className="text-xs font-mono text-blue-400 mb-3">02. experience</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-10">Work Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-[#111111] border border-[#1f1f1f] hover:border-blue-500/20 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-base font-medium text-white">{exp.role}</h3>
                  <p className="text-sm text-blue-400 mt-0.5">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono text-gray-500">{exp.period}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-400">
                    <span className="text-blue-500 mt-1 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-gray-500 group-hover:border-blue-500/20 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
