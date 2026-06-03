"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "Java", "C"],
  },
  {
    category: "ML & Data Science",
    skills: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy", "Recommender Systems", "Computer Vision", "NLP"],
  },
  {
    category: "Data Engineering",
    skills: ["ETL Pipelines", "Data Warehousing", "MySQL", "Data Modelling", "Data Quality"],
  },
  {
    category: "Visualisation & BI",
    skills: ["Tableau", "Power BI", "Excel", "Dashboard Design"],
  },
  {
    category: "Frameworks",
    skills: ["Flask", "Django"],
  },
  {
    category: "Business Analysis",
    skills: ["Requirements Gathering", "Process Mapping", "Use Cases", "Functional Specs", "SDLC", "Stakeholder Communication"],
  },
];

export default function Skills() {
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
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <div ref={ref} className="section-fade">
        <p className="text-xs font-mono text-blue-400 mb-3">04. skills</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-10">Technical Skills</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-3">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-md bg-[#111111] border border-[#1f1f1f] text-gray-400 hover:border-blue-500/30 hover:text-gray-300 transition-colors cursor-default"
                  >
                    {skill}
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
