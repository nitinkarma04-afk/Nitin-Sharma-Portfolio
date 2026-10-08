import TechBadge from "../common/TechBadge";

export default function ProjectTechStack({ technologies = [] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {technologies.map((tech) => (
        <TechBadge key={tech} name={tech} size="sm" />
      ))}
    </div>
  );
}

