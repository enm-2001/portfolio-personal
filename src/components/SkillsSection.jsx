import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  Code,
  Braces,
  Globe,
  Database,
  Server,
  GitBranch,
  Terminal,
  Monitor,
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML", icon: Globe, category: "frontend" },
  { name: "CSS", icon: Code, category: "frontend" },
  { name: "JavaScript", icon: Braces, category: "frontend" },
  { name: "React", icon: Code, category: "frontend" },
  { name: "React Router", icon: Code, category: "frontend" },
  { name: "Redux Toolkit", icon: Code, category: "frontend" },
  { name: "Tailwind CSS", icon: Code, category: "frontend" },
  { name: "Material UI", icon: Code, category: "frontend" },
  { name: "Angular", icon: Code, category: "frontend" },
  { name: "Vue.js", icon: Code, category: "frontend" },

  // Backend
  { name: "Node.js", icon: Server, category: "backend" },
  { name: "Express.js", icon: Server, category: "backend" },
  { name: "PostgreSQL", icon: Database, category: "backend" },
  { name: "MongoDB", icon: Database, category: "backend" },

  // Tools
  { name: "Git", icon: GitBranch, category: "tools" },
  { name: "VS Code", icon: Monitor, category: "tools" },
  { name: "DBeaver", icon: Database, category: "tools" },
  { name: "IntelliJ IDEA", icon: Terminal, category: "tools" },
  { name: "Postman", icon: Server, category: "tools" },
  { name: "pgAdmin", icon: Database, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;

            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
              >
                <div className="p-3 rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
