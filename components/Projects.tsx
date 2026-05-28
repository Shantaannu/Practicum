"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "AI-Driven Ingredient Recognition & Recipe Recommendation",
    category: "Computer Vision · NLP",
    description:
      "Published research: developed a computer vision pipeline for ingredient detection combined with a content-based recommendation engine to deliver personalised recipe suggestions.",
    impact: "Research Publication",
    tags: ["Python", "Computer Vision", "Recommendation System", "Deep Learning"],
    badge: "Published",
  },
  {
    title: "Hybrid Recommender System for Digital Matchmaking",
    category: "Machine Learning · Research",
    description:
      "Published research: designed a hybrid approach combining collaborative filtering and content-based filtering, improving recommendation accuracy over single-method baselines.",
    impact: "Research Publication",
    tags: ["Python", "Collaborative Filtering", "Content-Based Filtering", "Scikit-learn"],
    badge: "Published",
  },
  {
    title: "GPS-Based Player Analytics Platform",
    category: "Data Analytics",
    description:
      "Analysed GPS and performance data from athletes to generate actionable insights for coaching optimisation. Built structured workflows and dashboards for real-time reporting.",
    impact: "Performance insights delivered to stakeholders",
    tags: ["Python", "Pandas", "Tableau", "Data Visualisation"],
    badge: null,
  },
  {
    title: "Smart Building Energy Analysis",
    category: "Data Engineering",
    description:
      "Processed large-scale IoT sensor data to identify energy inefficiencies across a smart building estate. Developed dashboards that recommended optimisation strategies.",
    impact: "Identified key inefficiencies via structured reporting",
    tags: ["Python", "ETL", "Power BI", "Data Analysis"],
    badge: null,
  },
  {
    title: "Data Warehouse & Reporting Pipeline",
    category: "Data Engineering",
    description:
      "Designed a dimensional data warehouse with star-schema modelling. Built end-to-end ETL pipelines and Tableau dashboards to support business decision-making.",
    impact: "Full pipeline from raw data to dashboard",
    tags: ["MySQL", "ETL", "Tableau", "Data Modelling"],
    badge: null,
  },
  {
    title: "Business Requirements Analysis — E-Commerce System",
    category: "Business Analysis",
    description:
      "Defined as-is and to-be process maps for an e-commerce platform. Documented use cases, functional specs, and proposed UX improvements based on gap analysis.",
    impact: "Full BRD and process documentation delivered",
    tags: ["BPMN", "Use Cases", "Functional Specs", "Process Mapping"],
    badge: null,
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div ref={ref} className="section-fade">
        <p className="text-xs font-mono text-blue-400 mb-3">03. projects</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Featured Projects</h2>
        <p className="text-sm text-gray-500 mb-10">Research, engineering, and analytics work.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="flex flex-col p-5 rounded-lg bg-[#111111] border border-[#1f1f1f] hover:border-blue-500/30 transition-all hover:-translate-y-0.5 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                {p.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                    {p.badge}
                  </span>
                )}
              </div>

              {/* Title + category */}
              <p className="text-xs text-gray-600 mb-1 font-mono">{p.category}</p>
              <h3 className="text-sm font-medium text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">{p.description}</p>

              {/* Impact */}
              <p className="text-xs text-blue-400/80 mt-3 mb-3 font-mono">→ {p.impact}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded bg-[#1a1a1a] border border-[#2a2a2a] text-gray-600">
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
