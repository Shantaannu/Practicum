"use client";
import { useEffect, useRef } from "react";

const education = [
  {
    degree: "MSc Computing (Data Analytics)",
    institution: "Dublin City University",
    period: "2025 — 2026",
    location: "Dublin, Ireland",
    coursework: ["Data Mining", "Machine Learning", "Big Data Analytics", "Statistical Methods", "Data Visualisation"],
  },
  {
    degree: "B.Tech Artificial Intelligence & Machine Learning",
    institution: "University of Mumbai",
    period: "2021 — 2025",
    location: "Mumbai, India",
    coursework: ["Deep Learning", "Computer Vision", "NLP", "Data Structures", "Recommender Systems"],
  },
];

export default function About() {
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
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div ref={ref} className="section-fade">
        <p className="text-xs font-mono text-blue-400 mb-3">01. about</p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-10">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p>
              I&apos;m a detail-oriented graduate with a strong foundation in machine learning,
              business analysis, and data-driven decision making. Currently pursuing my MSc in
              Computing (Data Analytics) at Dublin City University.
            </p>
            <p>
              I enjoy the full journey from raw data to actionable insight — whether that means
              designing ETL pipelines, building recommendation models, or translating complex
              findings into clear stakeholder narratives.
            </p>
            <p>
              My background in AI &amp; ML combined with hands-on internship experience at
              Quidich Innovation Labs and Parfum Field has given me a solid footing across
              both the technical and analytical sides of the field.
            </p>
            <p>
              When I&apos;m not building models, I&apos;m writing about hybrid recommender systems
              and AI-driven computer vision applications.
            </p>
          </div>

          {/* Education cards */}
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-5 rounded-lg bg-[#111111] border border-[#1f1f1f] hover:border-blue-500/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="text-sm font-medium text-white">{edu.degree}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{edu.institution} · {edu.location}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-600 shrink-0">{edu.period}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {edu.coursework.map((c) => (
                    <span key={c} className="text-xs px-2 py-0.5 rounded bg-[#1a1a1a] text-gray-500 border border-[#2a2a2a]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
